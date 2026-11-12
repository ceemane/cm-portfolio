"use client";

import { useEffect, useState } from "react";

function buildAddress(): string {
  const codes = [99, 111, 110, 116, 97, 99, 116, 99, 109, 64, 112, 109, 46, 109, 101];
  return String.fromCharCode(...codes);
}

export function RecruiterMailButton({ className }: { className?: string }) {
  const [href, setHref] = useState<string | undefined>(undefined);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setHref(`mailto:${buildAddress()}`);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <a href={href} className={className}>
      Email for recruiters
    </a>
  );
}

export function RecruiterContactSentence({
  className,
  trailing,
}: {
  className?: string;
  trailing?: string;
}) {
  const [address, setAddress] = useState("");

  useEffect(() => {
    const id = window.setTimeout(() => {
      setAddress(buildAddress());
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <p className={className}>
      I only contact recruiters from{" "}
      {address ? (
        <a href={`mailto:${address}`} className="underline decoration-current/40 underline-offset-2 hover:text-accent">
          {address}
        </a>
      ) : (
        <span aria-hidden="true">…</span>
      )}
      .{trailing ? ` ${trailing}` : null}
    </p>
  );
}
