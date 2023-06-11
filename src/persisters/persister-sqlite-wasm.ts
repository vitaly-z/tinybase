import {
  DatabasePersisterConfig,
  Persister,
  PersisterListener,
} from '../types/persisters';
import {IdObj} from '../common/obj';
import {Store} from '../types/store';
import {createSqlitePersister} from './sqlite';
import {createSqliteWasmPersister as createSqliteWasmPersisterDecl} from '../types/persisters/persister-sqlite-wasm';

export const createSqliteWasmPersister = ((
  store: Store,
  sqlite3: any,
  db: any,
  storeTableOrConfig?: string | DatabasePersisterConfig,
): Persister =>
  createSqlitePersister(
    store,
    storeTableOrConfig,
    async (sql: string, args: any[] = []): Promise<IdObj<any>[]> =>
      db.exec(sql, {bind: args, rowMode: 'object', returnValue: 'resultRows'}),
    (listener: PersisterListener): void =>
      sqlite3.capi.sqlite3_update_hook(db, () => listener(), 0),
    (): void => sqlite3.capi.sqlite3_update_hook(db, () => 0, 0),
  )) as typeof createSqliteWasmPersisterDecl;