import Link from "next/link";
import { RecruiterContactSentence } from "@/components/contact/RecruiterEmail";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl space-y-2">
          <p className="text-xs leading-relaxed text-muted-subtle">
            &copy; 2026 Chester M. All rights reserved. Work samples shared for hiring review only.
          </p>
          <RecruiterContactSentence className="text-xs leading-relaxed text-muted-subtle" />
        </div>
        <Link
          href="https://linkedin.com/in/chesman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium uppercase tracking-widest text-accent hover:text-accent-soft"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
