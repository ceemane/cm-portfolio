import { getTokenStore } from "../src/lib/tokens/store";

async function main() {
  const tokenId = process.argv[2];

  if (!tokenId) {
    console.error("Usage: npm run revoke-token <token-id>");
    process.exit(1);
  }

  const store = getTokenStore();
  const token = await store.get(tokenId);

  if (!token) {
    console.error(`Token not found: ${tokenId}`);
    process.exit(1);
  }

  await store.delete(tokenId);
  console.log(`\nRevoked token: ${token.label} (${tokenId})\n`);
}

main().catch(console.error);
