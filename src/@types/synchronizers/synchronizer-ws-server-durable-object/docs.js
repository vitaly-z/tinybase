/**
 * The synchronizer-ws-server-durable-object module of the TinyBase project lets
 * you create a server that facilitates synchronization between clients, running
 * as a Cloudflare Durable Object.
 * @see Synchronization guide
 * @see Todo App v6 (collaboration) demo
 * @packageDocumentation
 * @module synchronizer-ws-server-durable-object
 * @since v5.4.0
 */
/// synchronizer-ws-server-durable-object

/**
 * A WsServerDurableObject is the server component (running as a Cloudflare
 * Durable Object) for synchronization between clients that are using
 * WsSynchronizer instances.
 * @category Creation
 * @since v5.4.0
 */
/// WsServerDurableObject
{
  /**
   * The createPersister method is used to return a persister for the Durable
   * Object to preserve Store data when clients are not connected.
   *
   * In other words, override this method to enable persistence of the Store
   * data that the Durable Object is synchronizing between clients.
   *
   * This should almost certainly return a DurableObjectStoragePersister,
   * created with the createDurableObjectStoragePersister function. This will
   * ensure that the Store is serialized to the Durable Object KV-based storage.
   * @example
   * This example enables Durable Object persistence by creating a Persister
   * object within the createPersister method of a WsServerDurableObject.
   *
   * ```js yolo
   * import {WsServerDurableObject} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';
   * import {createDurableObjectStoragePersister} from 'tinybase/persisters/persister-durable-object-storage';
   * import {createMergeableStore} from 'tinybase';
   *
   * export class MyDurableObject extends WsServerDurableObject {
   *   createPersister() {
   *     const store = createMergeableStore();
   *     const persister = createDurableObjectStoragePersister(
   *       store,
   *       this.ctx.storage,
   *     );
   *     return persister;
   *   }
   * }
   * ```
   * @category Creation
   * @since v5.4.0
   */
  /// WsServerDurableObject.createPersister
  /**
   * The getPathId method is used to get the Id of the path that is being
   * served.
   *
   * This is useful for when you want to know which path the current Durable
   * Object is serving - for the purposes of logging, for example.
   * @example
   * This example logs the path being served by the Durable Object every time a
   * synchronization method is handled.
   *
   * ```js yolo
   * import {WsServerDurableObject} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';
   *
   * export class MyDurableObject extends WsServerDurableObject {
   *   onMessage() {
   *     console.info('Message received on path: ', this.getPathId());
   *   }
   * }
   * ```
   * @category Getter
   * @since v5.4.0
   */
  /// WsServerDurableObject.getPathId
  /**
   * The getClientIds method is used to access a list of all the connected
   * clients on a given path.
   *
   * Note that if you call this method from within the onClientId method as a
   * client is getting removed, it will still be returned in the list of client
   * Ids.
   * @example
   * This example logs the list of clients being served by the Durable Object
   * every time a synchronization method is handled.
   *
   * ```js yolo
   * import {WsServerDurableObject} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';
   *
   * export class MyDurableObject extends WsServerDurableObject {
   *   onMessage() {
   *     console.info('Clients on path: ', this.getClientIds());
   *   }
   * }
   * ```
   * @category Getter
   * @since v5.4.0
   */
  /// WsServerDurableObject.getClientIds
  /**
   * The onPathId method is called when the first client connects to, or the
   * last client disconnects from, the server with a given path Id.
   *
   * This method is called with the path Id and an IdAddedOrRemoved flag
   * indicating whether it this is being triggered by the first client joining
   * (true) or the last client leaving (false).
   * @example
   * This example logs the Id of the path being served by the Durable Object
   * when the first client joins (the path Id is 'added'), and when the last
   * client leaves (the path Id is 'removed').
   *
   * ```js yolo
   * import {WsServerDurableObject} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';
   *
   * export class MyDurableObject extends WsServerDurableObject {
   *   onPathId(pathId, addedOrRemoved) {
   *     console.info(
   *       (addedOrRemoved ? 'Added' : 'Removed') + ` path ${pathId}`,
   *     );
   *   }
   * }
   * ```
   * @category Event
   * @since v5.4.0
   */
  /// WsServerDurableObject.onPathId
  /**
   * The onClientId method is called when a client connects to, or disconnects
   * from, the server.
   *
   * This method is called with the path Id, the client Id, and an
   * IdAddedOrRemoved flag indicating whether it this is being triggered by
   * the client joining (true) or the client leaving (false).
   * @example
   * This example logs every client that joins (the client Id is 'added') or
   * leaves (the client Id is 'removed') on the path being served by the Durable
   * Object.
   *
   * ```js yolo
   * import {WsServerDurableObject} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';
   *
   * export class MyDurableObject extends WsServerDurableObject {
   *   onClientId(pathId, clientId, addedOrRemoved) {
   *     console.info(
   *       (addedOrRemoved ? 'Added' : 'Removed') +
   *         ` client ${clientId} on path ${pathId}`,
   *     );
   *   }
   * }
   * ```
   * @category Event
   * @since v5.4.0
   */
  /// WsServerDurableObject.onClientId
  /**
   * The onMessage method is called when a message is handled by the server.
   *
   * This is useful if you want to debug the synchronization process, though be
   * aware that this method is called very frequently. It is called with the Id
   * of the client the message came _from_, the the Id of the client the message
   * is to be forwarded _to_, and the remainder of the message itself.
   *
   * Since this method is called often, it should be performant. The path Id is
   * not passed as an argument, since it has a small cost to provide by default.
   * You can use the getPathId method yourself if that information is needed.
   * @example
   * This example logs every message routed by the Durable Object between
   * clients.
   *
   * ```js yolo
   * import {WsServerDurableObject} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';
   *
   * export class MyDurableObject extends WsServerDurableObject {
   *   onMessage(fromClientId, toClientId, remainder) {
   *     console.info(
   *       `Message from '${fromClientId}' to '${toClientId}': ${remainder}`,
   *     );
   *   }
   * }
   * ```
   * @category Event
   * @since v5.4.0
   */
  /// WsServerDurableObject.onMessage
}

/**
 * The getWsServerDurableObjectFetch function returns a convenient handler for a
 * Cloudflare worker to route requests to the fetch handler of a
 * WsServerDurableObject for the given namespace.
 *
 * The implementation of this function requires the request to be a WebSocket
 * 'Upgrade' request, and for the client to have provided a `sec-websocket-key`
 * header that the server can use as a unique key for the client.
 *
 * It then takes the path of the HTTP request and routes the upgrade request to
 * a Durable Object (in the given namespace) for that path. From then on, the
 * Durable Object handles all the WebSocket communication.
 *
 * Note that you'll need to have a Wrangler configuration that connects your
 * Durable Object class to the namespace. In other words, you'll have something
 * like this in your `wrangler.toml` file.
 *
 * ```toml
 * [[durable_objects.bindings]]
 * name = "MyDurableObjects"
 * class_name = "MyDurableObject"
 * ```
 *
 * Not that it is not required to use this function to route TinyBase client
 * requests in your Cloudflare app. If you have your own custom routing logic,
 * path scheme, or authentication, for example, you can easily implement that in
 * the worker's fetch method yourself. See the [Durable Objects
 * documentation](https://developers.cloudflare.com/durable-objects/best-practices/create-durable-object-stubs-and-send-requests/#invoking-the-fetch-handler)
 * for examples.
 *
 * You can also pass a newly created request to the Durable Object's `fetch`
 * method. For example, you can overwrite the 'path' that the Durable Object
 * thinks it is serving, perhaps to inject a unique authenticated user Id that
 * wasn't actually provided by the client WebSocket.
 * @example
 * This example sets up default routing of the WebSocket upgrade request to a
 * Durable Object in the `MyDurableObjects` namespace. This would require the
 * `wrangler.toml` configuration shown above.
 *
 * ```js yolo
 * import {
 *   WsServerDurableObject,
 *   getWsServerDurableObjectFetch,
 * } from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';
 *
 * export class MyDurableObject extends WsServerDurableObject {}
 *
 * export default {fetch: getWsServerDurableObjectFetch('MyDurableObjects')};
 * ```
 * @category Creation
 * @since v5.4.0
 */
/// getWsServerDurableObjectFetch
