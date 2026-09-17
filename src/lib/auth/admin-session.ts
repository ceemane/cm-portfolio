const encoder = new TextEncoder();

export const ADMIN_SESSION_COOKIE = "cm_admin_session";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function toBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

function fromBase64Url(value: string): Uint8Array | null {
  try {
    const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    const binary = atob(padded);
    return Uint8Array.from(binary, (character) => character.charCodeAt(0));
  } catch {
    return null;
  }
}

async function signingKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createAdminSession(): Promise<string | null> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return null;

  const expiresAt = Date.now() + ADMIN_SESSION_MAX_AGE * 1000;
  const payload = toBase64Url(encoder.encode(JSON.stringify({ expiresAt })));
  const signature = await crypto.subtle.sign(
    "HMAC",
    await signingKey(secret),
    encoder.encode(payload)
  );

  return `${payload}.${toBase64Url(new Uint8Array(signature))}`;
}

export async function hasValidAdminSession(value: string | undefined): Promise<boolean> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret || !value) return false;

  const [payload, signature] = value.split(".");
  if (!payload || !signature) return false;

  const signatureBytes = fromBase64Url(signature);
  if (!signatureBytes) return false;

  try {
    const validSignature = await crypto.subtle.verify(
      "HMAC",
      await signingKey(secret),
      signatureBytes as unknown as BufferSource,
      encoder.encode(payload)
    );
    if (!validSignature) return false;

    const payloadBytes = fromBase64Url(payload);
    if (!payloadBytes) return false;
    const { expiresAt } = JSON.parse(new TextDecoder().decode(payloadBytes));
    return typeof expiresAt === "number" && Date.now() < expiresAt;
  } catch {
    return false;
  }
}
