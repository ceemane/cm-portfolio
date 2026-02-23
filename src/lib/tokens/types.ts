export interface Token {
  id: string;
  label: string;
  createdAt: number;
  expiresAt: number;
  visits: number;
  lastVisit: number | null;
}

export interface TokenStore {
  get(id: string): Promise<Token | null>;
  set(token: Token): Promise<void>;
  list(): Promise<Token[]>;
  delete(id: string): Promise<void>;
}
