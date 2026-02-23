import { put } from "@vercel/blob";
import { readFile, readdir } from "fs/promises";
import { join } from "path";

async function main() {
  const pdfDir = join(process.cwd(), "content", "pdfs");
  const files = await readdir(pdfDir);
  const pdfFiles = files.filter((f) => f.endsWith(".pdf"));

  if (pdfFiles.length === 0) {
    console.log("No PDF files found in content/pdfs/");
    return;
  }

  console.log(`\nUploading ${pdfFiles.length} PDF(s) to Vercel Blob...\n`);

  const envVars: string[] = [];

  for (const file of pdfFiles) {
    const filePath = join(pdfDir, file);
    const buffer = await readFile(filePath);
    const slug = file.replace(".pdf", "");
    const envKey = `PDF_BLOB_${slug.replace(/-/g, "_").toUpperCase()}`;

    console.log(`Uploading: ${file} (${(buffer.length / 1024 / 1024).toFixed(1)}MB)...`);

    const blob = await put(`pdfs/${file}`, buffer, {
      access: "public",
      contentType: "application/pdf",
    });

    console.log(`  → ${blob.url}`);
    envVars.push(`${envKey}=${blob.url}`);
  }

  console.log("\n--- Add these to your Vercel environment variables ---\n");
  for (const v of envVars) {
    console.log(v);
  }
  console.log();
}

main().catch(console.error);
