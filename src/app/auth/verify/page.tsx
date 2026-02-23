"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function VerifyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      window.location.href = `/api/auth/verify?token=${encodeURIComponent(token)}`;
    } else {
      router.replace("/auth/invalid");
    }
  }, [token, router]);

  return null;
}

export default function VerifyPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-6 text-4xl font-semibold tracking-tight text-foreground">
          CM
        </div>
        <div className="mb-2 text-lg text-muted">Verifying access...</div>
        <div className="mx-auto h-1 w-24 animate-pulse rounded-full bg-accent" />
      </div>
      <Suspense>
        <VerifyContent />
      </Suspense>
    </div>
  );
}
