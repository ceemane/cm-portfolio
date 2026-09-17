"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, GraduationCap, Megaphone, Workflow } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  { label: "GTM Enablement", detail: "Field-ready learning", icon: Megaphone },
  { label: "Customer Education", detail: "Technical learning journeys", icon: GraduationCap },
  { label: "AI Enablement", detail: "Human-centered automation", icon: Bot },
  { label: "Systems Architecture", detail: "Content operations at scale", icon: Workflow },
];

export function ScrollStats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current, { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(sectionRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });

        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.label} className="flex flex-col items-center text-center gap-2">
                <Icon className="w-5 h-5 text-accent/60" strokeWidth={1.5} />
                <p className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
                  {area.label}
                </p>
                <p className="text-xs text-muted">
                  {area.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
