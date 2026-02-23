import type { TokenStore } from "./types";

export type { Token, TokenStore } from "./types";

let _store: TokenStore | null = null;

export function getTokenStore(): TokenStore {
  if (_store) return _store;

  if (process.env.UPSTASH_REDIS_REST_URL) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { RedisTokenStore } = require("./redis-store");
    _store = new RedisTokenStore() as TokenStore;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { JsonTokenStore } = require("./json-store");
    _store = new JsonTokenStore() as TokenStore;
  }

  return _store!;
}
