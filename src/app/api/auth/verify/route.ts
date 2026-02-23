import { NextRequest, NextResponse } from "next/server";
import { getTokenStore } from "@/lib/tokens/store";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/invalid", request.url));
  }

  const store = getTokenStore();
  const tokenData = await store.get(token);

  if (!tokenData) {
    return NextResponse.redirect(new URL("/auth/invalid", request.url));
  }

  if (Date.now() > tokenData.expiresAt) {
    return NextResponse.redirect(new URL("/auth/expired", request.url));
  }

  // Update visit count
  tokenData.visits += 1;
  tokenData.lastVisit = Date.now();
  await store.set(tokenData);

  // Create session cookie with remaining TTL
  const sessionValue = `${tokenData.id}:${tokenData.expiresAt}`;
  const maxAge = Math.floor((tokenData.expiresAt - Date.now()) / 1000);

  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set("cm_session", sessionValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge,
    path: "/",
  });

  return response;
}
