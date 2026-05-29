import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access Expired | CM",
};

export default function ExpiredPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mb-8 text-4xl font-semibold tracking-tight text-foreground">
          CM
        </div>
        <h1 className="mb-3 text-2xl font-semibold text-foreground">
          Access Expired
        </h1>
        <p className="mb-6 text-base leading-relaxed text-muted">
          This portfolio link has expired. If you&apos;d like continued access,
          please reach out to Chester for a new link.
        </p>
        <a
          href="mailto:chester.manuel@pm.me?subject=Access%20request%20for%20portfolio&body=Requesting%20access%20to%20Chester%20Manuel%20Portfolio."
          className="inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Request Access
        </a>
      </div>
    </div>
  );
}
