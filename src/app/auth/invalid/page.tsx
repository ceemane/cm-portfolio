import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invalid Link | CM",
};

export default function InvalidPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mb-8 text-4xl font-semibold tracking-tight text-foreground">
          CM
        </div>
        <h1 className="mb-3 text-2xl font-semibold text-foreground">
          Invalid Link
        </h1>
        <p className="mb-6 text-base leading-relaxed text-muted">
          This link doesn&apos;t appear to be valid. Please check that you have
          the correct URL.
        </p>
        <a
          href="mailto:chester.manuel@pm.me?subject=Access%20request%20for%20portfolio&body=Requesting%20access%20to%20Chester%20Manuel%20Portfolio."
          className="inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Contact Chester
        </a>
      </div>
    </div>
  );
}
