/// persister-partykit-client

import {OptionalSchemas, Store} from '../store';
import PartySocket from 'partysocket';
import {Persister} from '../persisters';

export type PartyKitPersisterConfig = {
  storeProtocol?: 'http' | 'https';
  storePath?: string;
};

/// createPartyKitPersister
export function createPartyKitPersister<Schemas extends OptionalSchemas>(
  store: Store<Schemas>,
  connection: PartySocket,
  configOrStoreProtocol?: PartyKitPersisterConfig | 'http' | 'https',
  onIgnoredError?: (error: any) => void,
): Persister<Schemas>;
