"use client";

import { useEffect, useRef, useState } from "react";

interface PdfViewerProps {
  slug: string;
  title: string;
}

export function PdfViewer({ slug, title }: PdfViewerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const pdfUrl = `/api/pdf/${slug}`;

  useEffect(() => {
    // Disable right-click on the PDF container
    const container = containerRef.current;
    if (!container) return;

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    container.addEventListener("contextmenu", handleContextMenu);
    return () => {
      container.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-xl border border-border/50 bg-card"
      style={{ userSelect: "none" }}
    >
      {loading && !error && (
        <div className="flex h-96 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-3 h-1 w-24 animate-pulse rounded-full bg-accent/30" />
            <p className="text-sm text-muted">Loading document...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="flex h-96 items-center justify-center">
          <div className="text-center">
            <p className="mb-2 text-sm font-medium text-foreground">
              Unable to load document
            </p>
            <p className="text-sm text-muted">
              Please try refreshing the page.
            </p>
          </div>
        </div>
      )}

      <iframe
        src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
        title={`${title} | PDF Document`}
        className={`w-full ${loading && !error ? "h-0" : "h-[80vh]"}`}
        style={{ border: "none" }}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
    </div>
  );
}
