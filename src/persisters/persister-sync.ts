import {
  Bus,
  BusStats,
  MessageType,
  Receive,
  Send,
  SyncPersister,
  createLocalBus as createLocalBusDecl,
  createSyncPersister as createSyncPersisterDecl,
} from '../types/persisters/persister-sync';
import {
  ContentHashes,
  MergeableChanges,
  MergeableStore,
  RowIdsDiff,
  TableIdsDiff,
  TablesStamp,
  ValuesStamp,
} from '../types/mergeable-store';
import {DEBUG, ifNotUndefined, isUndefined, promiseNew} from '../common/other';
import {Id, IdOrNull} from '../types/common';
import {IdMap, mapGet, mapNew, mapSet} from '../common/map';
import {collDel, collForEach, collSize} from '../common/coll';
import {EMPTY_STRING} from '../common/strings';
import {PersisterListener} from '../types/persisters';
import {createCustomPersister} from '../persisters';
import {getHlcFunctions} from '../mergeable-store/hlc';

const RESPONSE = 0;
const CONTENT_HASHES = 1;
const GET_CONTENT_HASHES = 2;
const GET_TABLE_IDS_DIFF = 3;
const GET_ROW_IDS_DIFF = 4;
const GET_TABLES_CHANGES = 5;
const GET_VALUES_CHANGES = 6;

export const createSyncPersister = ((
  store: MergeableStore,
  bus: Bus,
  requestTimeoutSeconds = 1,
  onIgnoredError?: (error: any) => void,
): SyncPersister => {
  let persisterListener: PersisterListener | undefined;

  const [getHlc] = getHlcFunctions(store.getId());
  const pendingRequests: IdMap<
    [
      toStoreId: IdOrNull,
      handleResponse: (response: any, fromStoreId: Id) => void,
    ]
  > = mapNew();

  const receive = (
    requestId: IdOrNull,
    fromStoreId: Id,
    messageType: MessageType,
    messageBody: any,
  ) => {
    if (messageType == RESPONSE) {
      ifNotUndefined(
        mapGet(pendingRequests, requestId),
        ([toStoreId, handleResponse]) =>
          isUndefined(toStoreId) || toStoreId == fromStoreId
            ? handleResponse(messageBody, fromStoreId)
            : 0,
      );
    } else if (messageType == CONTENT_HASHES && persister.isAutoLoading()) {
      getChangesFromOtherStore(fromStoreId, messageBody).then((changes: any) =>
        persisterListener?.(undefined, () => changes),
      );
    } else {
      const response =
        messageType == GET_CONTENT_HASHES && persister.isAutoSaving()
          ? store.getMergeableContentHashes()
          : messageType == GET_TABLE_IDS_DIFF
            ? store.getMergeableTableIdsDiff(messageBody)
            : messageType == GET_ROW_IDS_DIFF
              ? store.getMergeableRowIdsDiff(messageBody)
              : messageType == GET_TABLES_CHANGES
                ? store.getMergeableTablesChanges(messageBody)
                : messageType == GET_VALUES_CHANGES
                  ? store.getMergeableValuesChanges(messageBody)
                  : 0;
      response === 0 ? 0 : send(requestId, fromStoreId, RESPONSE, response);
    }
  };

  const [send] = bus.join(store.getId(), receive);

  const request = async <Response>(
    toStoreId: IdOrNull,
    messageType: MessageType,
    messageBody: any = EMPTY_STRING,
  ): Promise<[response: Response, fromStoreId: Id]> =>
    promiseNew((resolve, reject) => {
      const requestId = getHlc();
      const timeout = setTimeout(() => {
        collDel(pendingRequests, requestId);
        reject(`No response from ${toStoreId ?? 'anyone'} to '${messageType}'`);
      }, requestTimeoutSeconds * 1000);
      mapSet(pendingRequests, requestId, [
        toStoreId,
        (response: Response, fromStoreId: Id) => {
          clearTimeout(timeout);
          collDel(pendingRequests, requestId);
          resolve([response, fromStoreId]);
        },
      ]);
      send(requestId, toStoreId, messageType, messageBody);
    });

  const getChangesFromOtherStore = async (
    otherStoreId: IdOrNull = null,
    otherContentHashes?: ContentHashes,
  ): Promise<MergeableChanges> => {
    if (isUndefined(otherContentHashes)) {
      [otherContentHashes, otherStoreId] = await request<ContentHashes>(
        otherStoreId,
        GET_CONTENT_HASHES,
      );
    }
    const [otherContentTime, [otherTablesHash, otherValuesHash]] =
      otherContentHashes;
    const [, [tablesHash, valuesHash]] = store.getMergeableContentHashes();

    const changes: MergeableChanges = [
      EMPTY_STRING,
      [[EMPTY_STRING, {}], [EMPTY_STRING, {}], 1],
    ];

    if (tablesHash != otherTablesHash) {
      changes[0] = otherContentTime;
      changes[1][0] = (
        await request<TablesStamp>(
          otherStoreId,
          GET_TABLES_CHANGES,
          store.getMergeableCellHashes(
            (
              await request<RowIdsDiff>(
                otherStoreId,
                GET_ROW_IDS_DIFF,
                store.getMergeableRowHashes(
                  (
                    await request<TableIdsDiff>(
                      otherStoreId,
                      GET_TABLE_IDS_DIFF,
                      store.getMergeableTableHashes(),
                    )
                  )[0],
                ),
              )
            )[0],
          ),
        )
      )[0];
    }

    if (valuesHash != otherValuesHash) {
      changes[0] = otherContentTime;
      changes[1][1] = (
        await request<ValuesStamp>(
          otherStoreId,
          GET_VALUES_CHANGES,
          store.getMergeableValuesHashes(),
        )
      )[0];
    }

    return changes;
  };

  const getPersisted = async (): Promise<any> => {
    const changes = await getChangesFromOtherStore();
    return changes[0] != EMPTY_STRING ? changes : undefined;
  };

  const setPersisted = async (): Promise<void> => {
    send(null, null, CONTENT_HASHES, store.getMergeableContentHashes());
  };

  const addPersisterListener = (listener: PersisterListener) =>
    (persisterListener = listener);

  const delPersisterListener = () => (persisterListener = undefined);

  const persister = createCustomPersister(
    store,
    getPersisted,
    setPersisted,
    addPersisterListener,
    delPersisterListener,
    onIgnoredError,
    true,
    {
      getBus: () => bus,
      startSync: async () =>
        await (await persister.startAutoLoad()).startAutoSave(),
      stopSync: () => persister.destroy,
    },
  ) as SyncPersister;
  return persister;
}) as typeof createSyncPersisterDecl;

export const createLocalBus = (() => {
  let sends = 0;
  let receives = 0;
  const stores: IdMap<Receive> = mapNew();

  const join = (storeId: Id, receive: Receive): [Send, () => void] => {
    mapSet(stores, storeId, receive);
    const send = (
      requestId: IdOrNull,
      toStoreId: IdOrNull,
      messageType: MessageType,
      messageBody: any,
    ): void => {
      if (DEBUG) {
        sends++;
        receives += isUndefined(toStoreId) ? collSize(stores) - 1 : 1;
      }
      isUndefined(toStoreId)
        ? collForEach(stores, (receive, otherStoreId) =>
            otherStoreId != storeId
              ? receive(requestId, storeId, messageType, messageBody)
              : 0,
          )
        : mapGet(stores, toStoreId)?.(
            requestId,
            storeId,
            messageType,
            messageBody,
          );
    };
    const leave = (): void => {
      collDel(stores, storeId);
    };
    return [send, leave];
  };

  const getStats = (): BusStats => (DEBUG ? {sends, receives} : {});

  return {join, getStats} as Bus;
}) as typeof createLocalBusDecl;
