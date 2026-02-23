import { NextRequest, NextResponse } from "next/server";
import { getProject } from "@/lib/projects/data";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  // Check session cookie
  const session = request.cookies.get("cm_session")?.value;
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parts = session.split(":");
  if (parts.length !== 2) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const expiresAt = parseInt(parts[1], 10);
  if (isNaN(expiresAt) || Date.now() > expiresAt) {
    return NextResponse.json({ error: "Session expired" }, { status: 401 });
  }

  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.pdfFile) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // In production with Vercel Blob, use blob URL from env
  const blobUrl = process.env[`PDF_BLOB_${slug.replace(/-/g, "_").toUpperCase()}`];

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
        "Content-Disposition": `inline; filename="${project.pdfFile}"`,
        "Cache-Control": "private, max-age=3600",
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
        "Content-Disposition": `inline; filename="${project.pdfFile}"`,
        "Cache-Control": "private, max-age=3600",
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
