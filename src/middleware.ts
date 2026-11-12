import { NextResponse } from "next/server";

// The portfolio is public. /admin and /api/admin stay protected by the admin
// secret inside those route handlers. Token gating is no longer enforced.
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
