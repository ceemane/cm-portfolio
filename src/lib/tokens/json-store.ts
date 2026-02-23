import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";
import type { Token, TokenStore } from "./types";

const DATA_DIR = join(process.cwd(), ".data");
const TOKEN_FILE = join(DATA_DIR, "tokens.json");

async function readTokens(): Promise<Record<string, Token>> {
  try {
    const data = await readFile(TOKEN_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function writeTokens(tokens: Record<string, Token>): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(TOKEN_FILE, JSON.stringify(tokens, null, 2));
}

export class JsonTokenStore implements TokenStore {
  async get(id: string): Promise<Token | null> {
    const tokens = await readTokens();
    return tokens[id] ?? null;
  }

  async set(token: Token): Promise<void> {
    const tokens = await readTokens();
    tokens[token.id] = token;
    await writeTokens(tokens);
  }

  async list(): Promise<Token[]> {
    const tokens = await readTokens();
    return Object.values(tokens);
  }

  async delete(id: string): Promise<void> {
    const tokens = await readTokens();
    delete tokens[id];
    await writeTokens(tokens);
  }
}
