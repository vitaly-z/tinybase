import {Cmd, QuerySchema, SINGLE_ROW_ID} from './common.ts';
import type {
  PersistedContent,
  PersistedStore,
  Persister,
  PersisterListener,
  Persists,
} from '../../../@types/persisters/index.d.ts';
import {
  jsonParseWithUndefined,
  jsonStringWithUndefined,
} from '../../../common/json.ts';
import type {DefaultedJsonConfig} from './config.ts';
import {createCustomPersister} from '../../index.ts';
import {getCommandFunctions} from './commands.ts';

export const createJsonPersister = <
  ListeningHandle,
  Persist extends Persists = Persists.StoreOnly,
>(
  store: PersistedStore<Persist>,
  cmd: Cmd,
  addPersisterListener: (
    listener: PersisterListener<Persist>,
  ) => ListeningHandle | Promise<ListeningHandle>,
  delPersisterListener: (listeningHandle: ListeningHandle) => void,
  onIgnoredError: ((error: any) => void) | undefined,
  destroyImpl: () => void,
  persist: Persist,
  [storeTableName, storeIdColumnName, storeColumnName]: DefaultedJsonConfig,
  managedTableNames: string[],
  querySchema: QuerySchema,
  thing: any,
  getThing: string,
  useOnConflict?: boolean,
): Persister<Persist> => {
  const [refreshSchema, loadTable, saveTable, transaction] =
    getCommandFunctions(
      cmd,
      managedTableNames,
      querySchema,
      onIgnoredError,
      useOnConflict,
    );

  const getPersisted = async (): Promise<PersistedContent<Persist>> =>
    await transaction(async () => {
      await refreshSchema();
      return jsonParseWithUndefined(
        ((await loadTable(storeTableName, storeIdColumnName))[SINGLE_ROW_ID]?.[
          storeColumnName
        ] as string) ?? 'null',
      );
    });

  const setPersisted = async (
    getContent: () => PersistedContent<Persist>,
  ): Promise<void> =>
    await transaction(async () => {
      await refreshSchema();
      await saveTable(
        storeTableName,
        storeIdColumnName,
        {
          [SINGLE_ROW_ID]: {
            [storeColumnName]: jsonStringWithUndefined(getContent() ?? null),
          },
        },
        true,
        true,
      );
    });

  const destroy = () => {
    persister.stopAutoLoad().stopAutoSave();
    destroyImpl();
    return persister;
  };

  const persister: any = createCustomPersister(
    store,
    getPersisted,
    setPersisted,
    addPersisterListener,
    delPersisterListener,
    onIgnoredError,
    persist,
    {[getThing]: () => thing, destroy},
    thing,
  );

  return persister;
};