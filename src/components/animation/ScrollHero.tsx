"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state — everything hidden
      gsap.set([labelRef.current, line1Ref.current, line2Ref.current, bioRef.current, ctaRef.current], {
        opacity: 0,
        y: 40,
      });

      // Entrance timeline — plays on load
      const intro = gsap.timeline({ delay: 0.2 });
      intro
        .to(labelRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(line1Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .to(line2Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
        .to(bioRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");

      // Scroll-out: pin the hero, fade content as user scrolls away
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=600",
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const p = self.progress;
          // Fade out text as scroll progresses
          gsap.set([labelRef.current, line1Ref.current, line2Ref.current], {
            opacity: 1 - p * 1.8,
            y: p * -60,
          });
          gsap.set([bioRef.current, ctaRef.current], {
            opacity: 1 - p * 2.5,
            y: p * -40,
          });
          // Glow intensifies slightly then fades
          gsap.set(glowRef.current, {
            opacity: p < 0.3 ? 1 + p : 1 - p,
            scale: 1 + p * 0.3,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Mint ambient glow */}
      <div ref={glowRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(245,200,66,0.12) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <p ref={labelRef} className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-accent">
          Learning Leader &amp; AI Systems Builder
        </p>

        <div ref={line1Ref}>
          <h1 className="text-6xl font-semibold tracking-tight text-foreground sm:text-8xl lg:text-9xl leading-[0.95]">
            Chester
          </h1>
        </div>
        <div ref={line2Ref}>
          <h1 className="text-6xl font-semibold tracking-tight text-muted sm:text-8xl lg:text-9xl leading-[0.95]">
            Manuel
          </h1>
        </div>

        <div ref={bioRef} className="mt-12 max-w-lg border-l-2 border-accent/30 pl-6">
          <p className="text-base leading-relaxed text-muted">
            Learning Leader and AI Systems Builder with 12+ years at Stanford,
            ServiceNow, and AWS. Currently scaling 50K+ learners on the AWS Jam
            platform and deploying AI agent systems that reduce manual ops by 99%.
          </p>
        </div>

        <div ref={ctaRef} className="mt-10 flex items-center gap-6">
          <a
            href="mailto:chester.manuel@pm.me"
            className="inline-block rounded-full bg-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-all hover:bg-accent-soft"
          >
            Get in Touch
          </a>
          <Link
            href="/about"
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors"
          >
            About &rarr;
          </Link>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }}
      />
    </section>
  );
}
