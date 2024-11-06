import {EMPTY_STRING, strMatch} from '../../common/strings.ts';
import type {Id, Ids} from '../../@types/common/index.d.ts';
import type {Persister, Persists} from '../../@types/persisters/index.d.ts';
import {arrayForEach, arrayIsEmpty, arrayMap} from '../../common/array.ts';
import {
  createPayload,
  createRawPayload,
  ifPayloadValid,
  receivePayload,
} from '../common.ts';
import {ifNotUndefined, size} from '../../common/other.ts';
import {DurableObject} from 'cloudflare:workers';
import type {IdAddedOrRemoved} from '../../@types/store/index.d.ts';
import type {Receive} from '../../@types/synchronizers/index.d.ts';
import {createCustomSynchronizer} from '../index.ts';
import {getUniqueId} from '../../common/index.ts';
import {objValues} from '../../common/obj.ts';

const PATH_REGEX = /\/([^?]*)/;
const SERVER_CLIENT_ID = 'S';

const getPathId = (request: Request): Id =>
  strMatch(new URL(request.url).pathname, PATH_REGEX)?.[1] ?? EMPTY_STRING;

const getClientId = (request: Request): Id | null =>
  request.headers.get('upgrade')?.toLowerCase() == 'websocket'
    ? request.headers.get('sec-websocket-key')
    : null;

const createResponse = (
  status: number,
  webSocket: WebSocket | null = null,
  body: string | null = null,
): Response => new Response(body, {status, webSocket});

const createUpgradeRequiredResponse = (): Response =>
  createResponse(426, null, 'Upgrade required');

export class WsServerDurableObject<Env = unknown>
  extends DurableObject<Env>
  implements DurableObject<Env>
{
  // @ts-expect-error See blockConcurrencyWhile
  #serverClientSend: (payload: string) => void;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.ctx.blockConcurrencyWhile(
      async () =>
        await ifNotUndefined(
          await this.createPersister(),
          async (persister) => {
            const synchronizer = createCustomSynchronizer(
              persister.getStore(),
              (toClientId, requestId, message, body) =>
                this.#handleMessage(
                  SERVER_CLIENT_ID,
                  createPayload(toClientId, requestId, message, body),
                ),
              (receive: Receive) =>
                (this.#serverClientSend = (payload: string) =>
                  receivePayload(payload, receive)),
              () => {},
              1,
            );
            await persister.load();
            await persister.startAutoSave();
            await synchronizer.startSync();
          },
        ),
    );
  }

  fetch(request: Request): Response {
    const pathId = getPathId(request);
    return ifNotUndefined(
      getClientId(request),
      (clientId) => {
        const [webSocket, client] = objValues(new WebSocketPair());
        client.serializeAttachment({pathId});
        if (arrayIsEmpty(this.ctx.getWebSockets())) {
          this.onPathId(pathId, 1);
        }
        this.ctx.acceptWebSocket(client, [clientId]);
        this.onClientId(pathId, clientId, 1);
        client.send(createPayload(clientId, getUniqueId(), 1, EMPTY_STRING));
        return createResponse(101, webSocket);
      },
      createUpgradeRequiredResponse,
    ) as Response;
  }

  webSocketMessage(client: WebSocket, message: ArrayBuffer | string) {
    ifNotUndefined(this.ctx.getTags(client)[0], (clientId) =>
      this.#handleMessage(clientId, message.toString(), client),
    );
  }

  webSocketClose(client: WebSocket) {
    const {pathId} = client.deserializeAttachment();
    this.onClientId(pathId, this.ctx.getTags(client)[0], -1);
    if (size(this.ctx.getWebSockets()) == 1) {
      this.onPathId(pathId, -1);
    }
  }

  // --

  #handleMessage(fromClientId: Id, message: string, fromClient?: WebSocket) {
    ifPayloadValid(message.toString(), (toClientId, remainder) => {
      const forwardedPayload = createRawPayload(fromClientId, remainder);
      if (toClientId == EMPTY_STRING) {
        if (fromClientId != SERVER_CLIENT_ID) {
          this.#serverClientSend(forwardedPayload);
        }
        arrayForEach(this.ctx.getWebSockets(), (otherClient) => {
          if (otherClient != fromClient) {
            otherClient.send(forwardedPayload);
          }
        });
      } else if (toClientId == SERVER_CLIENT_ID) {
        this.#serverClientSend(forwardedPayload);
      } else {
        this.ctx.getWebSockets(toClientId)[0]?.send(forwardedPayload);
      }
    });
  }

  // --

  createPersister():
    | Persister<Persists.MergeableStoreOnly>
    | Promise<Persister<Persists.MergeableStoreOnly>>
    | undefined {
    return undefined;
  }

  getClientIds(_pathId: Id): Ids {
    return arrayMap(
      this.ctx.getWebSockets(),
      (client) => this.ctx.getTags(client)[0],
    );
  }

  onPathId(_pathId: Id, _addedOrRemoved: IdAddedOrRemoved) {}

  onClientId(_pathId: Id, _clientId: Id, _addedOrRemoved: IdAddedOrRemoved) {}
}

export const getWsServerDurableObjectFetch =
  <Namespace extends string>(namespace: Namespace) =>
  (
    request: Request,
    env: {
      [namespace in Namespace]: DurableObjectNamespace<WsServerDurableObject>;
    },
  ) =>
    getClientId(request)
      ? env[namespace]
          .get(env[namespace].idFromName(getPathId(request)))
          .fetch(request)
      : createUpgradeRequiredResponse();
