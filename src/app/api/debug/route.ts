import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ADMIN_SECRET_SET: !!process.env.ADMIN_SECRET,
    ADMIN_SECRET_VALUE: process.env.ADMIN_SECRET ? process.env.ADMIN_SECRET.slice(0, 4) + "..." : "NOT SET",
    UPSTASH_SET: !!process.env.UPSTASH_REDIS_REST_URL,
  });
}
