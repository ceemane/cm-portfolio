import { getTokenStore } from "../src/lib/tokens/store";

async function main() {
  const store = getTokenStore();
  const tokens = await store.list();

  if (tokens.length === 0) {
    console.log("\nNo tokens found.\n");
    return;
  }

  console.log(`\n--- ${tokens.length} Token(s) ---\n`);

  for (const t of tokens) {
    const expired = Date.now() > t.expiresAt;
    const status = expired ? "EXPIRED" : "ACTIVE";
    const expiry = new Date(t.expiresAt).toLocaleDateString();
    const lastVisit = t.lastVisit
      ? new Date(t.lastVisit).toLocaleString()
      : "Never";

    console.log(`[${status}] ${t.label}`);
    console.log(`  ID:         ${t.id}`);
    console.log(`  Expires:    ${expiry}`);
    console.log(`  Visits:     ${t.visits}`);
    console.log(`  Last Visit: ${lastVisit}`);
    console.log();
  }
}

main().catch(console.error);
