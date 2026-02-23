import { nanoid } from "nanoid";
import { getTokenStore } from "../src/lib/tokens/store";

async function main() {
  const args = process.argv.slice(2);
  const daysFlag = args.find((a) => a.startsWith("--days="));
  const labelFlag = args.find((a) => a.startsWith("--label="));

  const days = daysFlag ? parseInt(daysFlag.split("=")[1], 10) : 14;
  const label = labelFlag ? labelFlag.split("=")[1] : `Recruiter ${new Date().toLocaleDateString()}`;

  const store = getTokenStore();
  const id = nanoid(21);
  const now = Date.now();

  const token = {
    id,
    label,
    createdAt: now,
    expiresAt: now + days * 24 * 60 * 60 * 1000,
    visits: 0,
    lastVisit: null,
  };

  await store.set(token);

  const baseUrl = process.env.SITE_URL || "http://localhost:3000";
  const link = `${baseUrl}/auth/verify?token=${id}`;

  console.log("\n--- Token Generated ---");
  console.log(`Label:   ${token.label}`);
  console.log(`Token:   ${id}`);
  console.log(`Expires: ${new Date(token.expiresAt).toLocaleDateString()} (${days} days)`);
  console.log(`\nShare this link:\n${link}\n`);
}

main().catch(console.error);
