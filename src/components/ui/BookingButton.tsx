"use client";

import Script from "next/script";
import { Calendar } from "lucide-react";

// After signing up at cal.com, update this to your Cal.com username/event-slug
const CAL_LINK = "chesman2k1/consult";

export function BookingButton({ className }: { className?: string }) {
  return (
    <>
      <Script src="https://app.cal.com/embed/embed.js" strategy="lazyOnload" />
      <button
        data-cal-link={CAL_LINK}
        data-cal-config='{"layout":"month_view","theme":"dark"}'
        className={`inline-flex cursor-pointer items-center gap-2 rounded-full border border-accent bg-accent px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-all hover:border-accent-soft hover:bg-accent-soft ${className ?? ""}`}
      >
        <Calendar className="h-3.5 w-3.5" strokeWidth={2} />
        Book a Consultation
      </button>
    </>
  );
}
