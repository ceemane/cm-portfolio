import { NextRequest, NextResponse } from "next/server";
import { getTokenStore } from "@/lib/tokens/store";
import { nanoid } from "nanoid";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "cm-admin-2026";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function checkAuth(request: NextRequest): boolean {
  const auth = request.headers.get("authorization");
  return auth === `Bearer ${ADMIN_SECRET}`;
}

// List all tokens
export async function GET(request: NextRequest) {
  if (!checkAuth(request)) return unauthorized();

  const store = getTokenStore();
  const tokens = await store.list();

  const enriched = tokens.map((t) => ({
    ...t,
    expired: Date.now() > t.expiresAt,
    expiresIn: Math.max(0, Math.ceil((t.expiresAt - Date.now()) / (1000 * 60 * 60 * 24))),
  }));

  return NextResponse.json({ tokens: enriched });
}

// Create a new token
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) return unauthorized();

  const body = await request.json();
  const days = body.days || 14;
  const label = body.label || `Recruiter ${new Date().toLocaleDateString()}`;

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

  const baseUrl = process.env.SITE_URL || request.nextUrl.origin;
  const link = `${baseUrl}/auth/verify?token=${id}`;

  return NextResponse.json({ token, link });
}

// Revoke a token
export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) return unauthorized();

  const body = await request.json();
  const { id } = body;

  if (!id) {
    return NextResponse.json({ error: "Token ID required" }, { status: 400 });
  }

  const store = getTokenStore();
  const token = await store.get(id);

  if (!token) {
    return NextResponse.json({ error: "Token not found" }, { status: 404 });
  }

  await store.delete(id);
  return NextResponse.json({ success: true, revoked: token.label });
}
