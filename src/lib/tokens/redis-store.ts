import { Redis } from "@upstash/redis";
import type { Token, TokenStore } from "./types";

const PREFIX = "token:";

export class RedisTokenStore implements TokenStore {
  private redis: Redis;

  constructor() {
    this.redis = Redis.fromEnv();
  }

  async get(id: string): Promise<Token | null> {
    const data = await this.redis.get<Token>(`${PREFIX}${id}`);
    return data ?? null;
  }

  async set(token: Token): Promise<void> {
    const ttl = Math.max(
      0,
      Math.floor((token.expiresAt - Date.now()) / 1000)
    );
    if (ttl > 0) {
      await this.redis.set(`${PREFIX}${token.id}`, token, { ex: ttl });
    }
  }

  async list(): Promise<Token[]> {
    const keys = await this.redis.keys(`${PREFIX}*`);
    if (keys.length === 0) return [];
    const pipeline = this.redis.pipeline();
    for (const key of keys) {
      pipeline.get(key);
    }
    const results = await pipeline.exec<(Token | null)[]>();
    return results.filter((t): t is Token => t !== null);
  }

  async delete(id: string): Promise<void> {
    await this.redis.del(`${PREFIX}${id}`);
  }
}
