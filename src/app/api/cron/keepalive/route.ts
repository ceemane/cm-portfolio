import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authorization = request.headers.get("authorization");

  // Vercel includes this bearer token whenever it invokes a configured cron job.
  if (!cronSecret || authorization !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const redis = Redis.fromEnv();
    await redis.ping();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Upstash keepalive failed:", error);
    return NextResponse.json({ error: "Upstash keepalive failed" }, { status: 502 });
  }
}
