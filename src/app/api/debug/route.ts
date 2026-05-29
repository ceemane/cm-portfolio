import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ADMIN_SECRET_SET: !!process.env.ADMIN_SECRET,
    ADMIN_SECRET_VALUE: process.env.ADMIN_SECRET ? process.env.ADMIN_SECRET.slice(0, 4) + "..." : "NOT SET",
    UPSTASH_SET: !!process.env.UPSTASH_REDIS_REST_URL,
    PDF_BLOBS: {
      AWS_JAM: !!process.env.PDF_BLOB_AWS_JAM_USER_GUIDE,
      ML_2_1: !!process.env.PDF_BLOB_AWS_ML_ENGINEER_ASSOCIATE_2_1_CHOOSE_A_MODELING_APPROACH,
      ML_2_2: !!process.env.PDF_BLOB_AWS_ML_ENGINEER_ASSOCIATE_2_2_TRAIN_MODELS,
      ANALYTICS_1: !!process.env.PDF_BLOB_FUNDAMENTALS_OF_ANALYTICS_ON_AWS_PART_1,
      ANALYTICS_2: !!process.env.PDF_BLOB_FUNDAMENTALS_OF_ANALYTICS_ON_AWS_PART_2,
    },
  });
}
