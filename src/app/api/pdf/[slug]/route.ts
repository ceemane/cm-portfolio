import { NextRequest, NextResponse } from "next/server";
import { getProject } from "@/lib/projects/data";
import { readFile } from "fs/promises";
import { join } from "path";

function blobEnvKey(name: string): string {
  return `PDF_BLOB_${name.replace(/\.pdf$/i, "").replace(/-/g, "_").toUpperCase()}`;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.pdfFile) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const publicName = `${slug}.pdf`;
  // Keep the existing blob env key, which was created from the stored file name.
  const blobUrl =
    process.env[blobEnvKey(project.pdfFile)] || process.env[blobEnvKey(slug)];

  if (blobUrl) {
    // Production: proxy from Vercel Blob
    const blobResponse = await fetch(blobUrl);
    if (!blobResponse.ok) {
      return NextResponse.json(
        { error: "PDF not available" },
        { status: 500 }
      );
    }
    const pdfBuffer = await blobResponse.arrayBuffer();
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${publicName}"`,
        "Cache-Control": "public, max-age=3600",
        "X-Content-Type-Options": "nosniff",
      },
    });
  }

  // Local dev: read from content/pdfs directory
  try {
    const pdfPath = join(process.cwd(), "content", "pdfs", project.pdfFile);
    const pdfBuffer = await readFile(pdfPath);
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${publicName}"`,
        "Cache-Control": "public, max-age=3600",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "PDF not found" },
      { status: 404 }
    );
  }
}
