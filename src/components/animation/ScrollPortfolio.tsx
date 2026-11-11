"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { projects, type Project } from "@/lib/projects/data";

// Lead with the recruiter-relevant proof: courses and learning experiences,
// followed by the systems that show how the work is scaled and maintained.
const portfolioOrder: Record<string, number> = {
  Course: 0,
  "Learning Plan": 1,
  Training: 2,
  Documentation: 3,
  System: 4,
};

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const cover = featured ? project.images?.[0] : undefined;

  return (
    <Card href={`/project/${project.slug}`}>
      {cover && (
        <div className="-mx-6 -mt-6 mb-5">
          {/* The image optimizer fetches without the session cookie, and the private-site gate turns that into a redirect. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover.src}
            alt={cover.alt}
            width={cover.width ?? 1600}
            height={cover.height ?? 900}
            className="aspect-[16/9] w-full object-cover object-top"
          />
        </div>
      )}
      <Badge variant="accent">{project.type}</Badge>
      <h3 className="mt-4 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-accent opacity-100 transition-opacity lg:opacity-0 lg:group-hover:opacity-100">
        View project <span aria-hidden="true">&rarr;</span>
      </span>
    </Card>
  );
}

export function ScrollPortfolio() {
  const featuredProjects = projects.filter((project) => project.featured);
  const orderedProjects = projects
    .filter((project) => !project.featured)
    .sort(
      (a, b) => (portfolioOrder[a.type] ?? 99) - (portfolioOrder[b.type] ?? 99),
    );
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
            Courses, Labs & Enablement
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            The first two pieces are independent samples: a first-hour workshop for small businesses, and a kit for community trainers. The rest is learning work from cloud, enterprise software, and healthcare settings.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-subtle">
            ChatGPT is a trademark of OpenAI. These are independent samples, not affiliated with or endorsed by OpenAI.
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-4 grid gap-4 lg:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <div
                key={project.slug}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
              >
                <ProjectCard project={project} featured />
              </div>
            ))}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {orderedProjects.map((project, i) => (
            <div
              key={project.slug}
              ref={(el) => {
                cardsRef.current[featuredProjects.length + i] = el;
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
