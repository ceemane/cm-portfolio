"use client";

import { useState } from "react";
import { Download, Eye } from "lucide-react";
import type { ProjectFile } from "@/lib/projects/data";

export function ProjectFiles({ files }: { files: ProjectFile[] }) {
  const firstViewable = files.find((file) => file.viewable)?.href ?? null;
  const [activeHref, setActiveHref] = useState<string | null>(firstViewable);
  const active = files.find((file) => file.href === activeHref);

  return (
    <div>
      <ul className="grid gap-4">
        {files.map((file) => {
          const isActive = file.href === activeHref;
          return (
            <li
              key={file.href}
              className="rounded-2xl border border-border bg-card p-5 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-foreground">
                    {file.label}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {file.description}
                  </p>
                </div>
                <div className="flex flex-shrink-0 flex-wrap gap-2">
                  {file.viewable && (
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveHref(file.href)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                        isActive
                          ? "border-accent bg-accent text-background"
                          : "border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-background hover:border-accent"
                      }`}
                    >
                      <Eye className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                      View
                    </button>
                  )}
                  <a
                    href={file.href}
                    download={file.downloadName}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <Download className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                    Download
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {active?.viewable && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background">
          <div className="flex items-center justify-between gap-4 border-b border-border/60 px-4 py-3 sm:px-5">
            <p className="truncate text-sm text-foreground">{active.label}</p>
            <a
              href={active.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-xs font-medium uppercase tracking-widest text-accent hover:text-accent-soft"
            >
              Open in new tab
            </a>
          </div>
          <iframe
            key={active.href}
            src={active.href}
            title={active.label}
            className="h-[70vh] min-h-[28rem] w-full bg-white"
          />
        </div>
      )}
    </div>
  );
}
