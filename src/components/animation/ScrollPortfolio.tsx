"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { projects } from "@/lib/projects/data";

gsap.registerPlugin(ScrollTrigger);

export function ScrollPortfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fades in
      gsap.set(headerRef.current, { opacity: 0, y: 30 });
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top 85%",
        onEnter: () => gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }),
        once: true,
      });

      // Cards stagger in
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, { opacity: 0, y: 50 });
        ScrollTrigger.create({
          trigger: card,
          start: "top 88%",
          onEnter: () =>
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              delay: (i % 3) * 0.1,
            }),
          once: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div ref={headerRef} className="mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Selected Work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Portfolio
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div key={project.slug} ref={(el) => { cardsRef.current[i] = el; }}>
              <Card href={`/project/${project.slug}`}>
                <Badge variant="accent">{project.type}</Badge>
                <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  View project <span aria-hidden="true">&rarr;</span>
                </span>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
