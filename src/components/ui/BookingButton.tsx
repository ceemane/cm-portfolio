"use client";

import { Calendar } from "lucide-react";

export function BookingButton({ className }: { className?: string }) {
  return (
    <button
      data-cal-namespace="consult"
      data-cal-link="chesman2k1/consult"
      data-cal-config='{"layout":"month_view"}'
      className={`inline-flex cursor-pointer items-center gap-2 rounded-full border border-accent bg-accent px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-all hover:border-accent-soft hover:bg-accent-soft ${className ?? ""}`}
    >
      <Calendar className="h-3.5 w-3.5" strokeWidth={2} />
      Book a Consultation
    </button>
  );
}
