/// persister-file

import {Id, IdOrNull} from '../common';
import {WebSocket, WebSocketServer} from 'ws';
import {MergeableStore} from '../mergeable-store';
import {Persister} from '../persisters';

/// MessageType
export type MessageType = number;

/// Receive
export type Receive = (
  fromClientId: Id,
  requestId: IdOrNull,
  messageType: MessageType,
  messageBody: any,
) => void;

/// Send
export type Send = (
  toClientId: IdOrNull,
  requestId: IdOrNull,
  messageType: MessageType,
  messageBody: any,
) => void;

/// ClientStats
export type ClientStats = {sends?: number; receives?: number};

/// Client
export interface Client {
  send: Send;
  onReceive: (receive: Receive) => void;
  destroy: () => void;
  getStats: () => ClientStats;
}

/// LocalClient
export interface LocalClient extends Client {}

/// WsClient
export interface WsClient extends Client {}

/// WsServer
export interface WsServer {
  getWebSocketServer: () => WebSocketServer;
  destroy: () => void;
}

/// SyncPersister
export interface SyncPersister extends Persister<true> {
  /// SyncPersister.getClient
  getClient(): Client;
  /// SyncPersister.startSync
  startSync(): Promise<Persister<true>>;
  /// SyncPersister.stopSync
  stopSync(): Persister<true>;
}

/// createSyncPersister
export function createSyncPersister(
  store: MergeableStore,
  client: Client,
  requestTimeoutSeconds?: number,
  onIgnoredError?: (error: any) => void,
): SyncPersister;

/// createLocalClient
export function createLocalClient(): LocalClient;

/// createWsClient
export function createWsClient(webSocket: WebSocket): Promise<WsClient>;

/// createWsSimpleServer
export function createWsSimpleServer(
  WebSocketServer: WebSocketServer,
): WsServer;