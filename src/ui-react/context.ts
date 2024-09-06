import type {
  CheckpointsOrCheckpointsId,
  IndexesOrIndexesId,
  MetricsOrMetricsId,
  QueriesOrQueriesId,
  RelationshipsOrRelationshipsId,
  StoreOrStoreId,
  useCheckpoints as useCheckpointsDecl,
  useIndexes as useIndexesDecl,
  useMetrics as useMetricsDecl,
  useQueries as useQueriesDecl,
  useRelationships as useRelationshipsDecl,
  useStore as useStoreDecl,
} from '../@types/ui-react/index.d.ts';
import {GLOBAL, isString, isUndefined} from '../common/other.ts';
import type {Id, Ids} from '../@types/common/index.d.ts';
import {IdObj, objEnsure, objGet, objIds} from '../common/obj.ts';
import type {Checkpoints} from '../@types/checkpoints/index.d.ts';
import type {Indexes} from '../@types/indexes/index.d.ts';
import type {Metrics} from '../@types/metrics/index.d.ts';
import type {Queries} from '../@types/queries/index.d.ts';
import React from 'react';
import type {Relationships} from '../@types/relationships/index.d.ts';
import type {Store} from '../@types/store/index.d.ts';
import {TINYBASE} from '../common/strings.ts';

const {createContext, useContext, useEffect} = React;

export type Thing =
  | Store
  | Metrics
  | Indexes
  | Relationships
  | Queries
  | Checkpoints;
export type ThingsByOffset = [
  Store,
  Metrics,
  Indexes,
  Relationships,
  Queries,
  Checkpoints,
];
export type Offsets = 0 | 1 | 2 | 3 | 4 | 5;

type ContextValue = [
  store?: Store,
  storesById?: {[storeId: Id]: Store},
  metrics?: Metrics,
  metricsById?: {[metricsId: Id]: Metrics},
  indexes?: Indexes,
  indexesById?: {[indexesId: Id]: Indexes},
  relationships?: Relationships,
  relationshipsById?: {[relationshipsId: Id]: Relationships},
  queries?: Queries,
  queriesById?: {[queriesId: Id]: Queries},
  checkpoints?: Checkpoints,
  checkpointsById?: {[checkpointsId: Id]: Checkpoints},
  addExtraThingById?: <Offset extends Offsets>(
    offset: Offset,
    id: string,
    thing: ThingsByOffset[Offset],
  ) => void,
  delExtraThingById?: (offset: Offsets, id: string) => void,
];

export const Context: React.Context<ContextValue> = objEnsure(
  GLOBAL,
  TINYBASE + '_uirc',
  () => createContext<ContextValue>([]),
);

const useThing = <UsedThing extends Thing>(
  id: Id | undefined,
  offset: number,
): UsedThing | undefined => {
  const contextValue = useContext(Context);
  return (
    isUndefined(id)
      ? contextValue[offset]
      : isString(id)
        ? objGet((contextValue[offset + 1] ?? {}) as IdObj<UsedThing>, id)
        : id
  ) as UsedThing;
};

const useThingOrThingById = <
  Thing extends
    | Store
    | Metrics
    | Indexes
    | Relationships
    | Queries
    | Checkpoints,
>(
  thingOrThingId: Thing | Id | undefined,
  offset: number,
): Thing | undefined => {
  const thing = useThing(thingOrThingId as Id, offset);
  return isUndefined(thingOrThingId) || isString(thingOrThingId)
    ? (thing as Thing | undefined)
    : (thingOrThingId as Thing);
};

const useProvideThing = <Offset extends Offsets>(
  thingId: Id,
  thing: ThingsByOffset[Offset],
  offset: Offset,
): void => {
  const {12: addExtraThingById, 13: delExtraThingById} = useContext(Context);
  useEffect(() => {
    addExtraThingById?.(offset, thingId, thing);
    return () => delExtraThingById?.(offset, thingId);
  }, [addExtraThingById, thingId, thing, offset, delExtraThingById]);
};

export const useThingIds = (offset: number): Ids =>
  objIds((useContext(Context)[offset] ?? {}) as IdObj<unknown>);

export const useStore: typeof useStoreDecl = (id?: Id): Store | undefined =>
  useThing(id, 0);

export const useStoreOrStoreById = (
  storeOrStoreId?: StoreOrStoreId,
): Store | undefined => useThingOrThingById(storeOrStoreId, 0);

export const useProvideStore = (storeId: Id, store: Store): void =>
  useProvideThing(storeId, store, 0);

export const useMetrics: typeof useMetricsDecl = (
  id?: Id,
): Metrics | undefined => useThing(id, 2);

export const useMetricsOrMetricsById = (
  metricsOrMetricsId?: MetricsOrMetricsId,
): Metrics | undefined => useThingOrThingById(metricsOrMetricsId, 2);

export const useIndexes: typeof useIndexesDecl = (
  id?: Id,
): Indexes | undefined => useThing(id, 4);

export const useIndexesOrIndexesById = (
  indexesOrIndexesId?: IndexesOrIndexesId,
): Indexes | undefined => useThingOrThingById(indexesOrIndexesId, 4);

export const useRelationships: typeof useRelationshipsDecl = (
  id?: Id,
): Relationships | undefined => useThing(id, 6);

export const useRelationshipsOrRelationshipsById = (
  relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId,
): Relationships | undefined =>
  useThingOrThingById(relationshipsOrRelationshipsId, 6);

export const useQueries: typeof useQueriesDecl = (
  id?: Id,
): Queries | undefined => useThing(id, 8);

export const useQueriesOrQueriesById = (
  queriesOrQueriesId?: QueriesOrQueriesId,
): Queries | undefined => useThingOrThingById(queriesOrQueriesId, 8);

export const useCheckpoints: typeof useCheckpointsDecl = (
  id?: Id,
): Checkpoints | undefined => useThing(id, 10);

export const useCheckpointsOrCheckpointsById = (
  checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId,
): Checkpoints | undefined =>
  useThingOrThingById(checkpointsOrCheckpointsId, 10);
