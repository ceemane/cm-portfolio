import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, hasValidAdminSession } from "@/lib/auth/admin-session";

const PUBLIC_PATHS = [
  "/auth/verify",
  "/auth/expired",
  "/auth/invalid",
  "/robots.txt",
  "/favicon.ico",
  "/_next",
  "/api/auth",
  "/api/admin",
  "/api/cron",
  "/admin",
  "/blog",
];

function isPublicPath(pathname: string): boolean {
  return PUBLIC_PATHS.some((p) => pathname.startsWith(p));
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths through
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // Admin sessions are signed and stored in an HTTP-only cookie. They provide
  // the site owner access without requiring a shareable portfolio token.
  const adminSession = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (await hasValidAdminSession(adminSession)) {
    return NextResponse.next();
  }

  // Check for session cookie
  const session = request.cookies.get("cm_session")?.value;
  if (!session) {
    return NextResponse.redirect(new URL("/auth/expired", request.url));
  }

  // Validate session format: tokenId:expiresAt
  const parts = session.split(":");
  if (parts.length !== 2) {
    const response = NextResponse.redirect(
      new URL("/auth/invalid", request.url)
    );
    response.cookies.delete("cm_session");
    return response;
  }

  const expiresAt = parseInt(parts[1], 10);
  if (isNaN(expiresAt) || Date.now() > expiresAt) {
    const response = NextResponse.redirect(
      new URL("/auth/expired", request.url)
    );
    response.cookies.delete("cm_session");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
