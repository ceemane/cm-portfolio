import { put } from "@vercel/blob";
import { readFile } from "fs/promises";

async function main() {
  const buffer = await readFile("/Users/chesman/Downloads/INTRO_v1.mp4");
  console.log(`Uploading ${(buffer.length / 1024 / 1024).toFixed(1)}MB...`);
  const blob = await put("videos/INTRO_v1.mp4", buffer, {
    access: "public",
    contentType: "video/mp4",
  });
  console.log("\nUploaded successfully:");
  console.log(`VIDEO_BLOB_URL=${blob.url}`);
}

main().catch(console.error);
