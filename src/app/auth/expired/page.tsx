import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | Chester M.",
  robots: { index: false, follow: false },
};

export default function ExpiredPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mb-8 text-4xl font-semibold tracking-tight text-foreground">
          CM
        </div>
        <h1 className="mb-3 text-2xl font-semibold text-foreground">
          The portfolio is public
        </h1>
        <p className="mb-6 text-base leading-relaxed text-muted">
          This old access link is no longer needed. You can read the work without a code.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          View the portfolio
        </Link>
      </div>
    </div>
  );
}
