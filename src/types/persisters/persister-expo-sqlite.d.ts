/// persister-expo-sqlite

import {DatabasePersisterConfig, Persister} from '../persisters.d';
import {SQLiteDatabase} from 'expo-sqlite';
import {Store} from '../store.d';

/// ExpoSqlitePersister
export interface ExpoSqlitePersister extends Persister {
  /// ExpoSqlitePersister.getDb
  getDb(): SQLiteDatabase;
}

/// createExpoSqlitePersister
export function createExpoSqlitePersister(
  store: Store,
  db: SQLiteDatabase,
  configOrStoreTableName?: DatabasePersisterConfig | string,
  onSqlCommand?: (sql: string, args?: any[]) => void,
  onIgnoredError?: (error: any) => void,
): ExpoSqlitePersister;
