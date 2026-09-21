import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/animation/FadeInView";
import { ScrollHero } from "@/components/animation/ScrollHero";
import { ScrollStats } from "@/components/animation/ScrollStats";
import { ScrollPortfolio } from "@/components/animation/ScrollPortfolio";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-14">

        {/* Pinned scroll-driven hero */}
        <ScrollHero />

        {/* Counting stats */}
        <ScrollStats />

        {/* Staggered portfolio grid */}
        <ScrollPortfolio />

        {/* Writing */}
        <section className="border-t border-border/60 bg-surface py-20">
          <Container>
            <FadeInView>
              <p className="mb-10 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Writing
              </p>
              <div className="max-w-2xl space-y-6">
                {[
                  {
                    title: "Accelerate your business intelligence skills with AWS Jam and Amazon QuickSight",
                    date: "May 2026",
                    url: "https://aws.amazon.com/blogs/training-and-certification/accelerate-your-business-intelligence-skills-with-aws-jam-and-amazon-quick/",
                  },
                  {
                    title: "Transform your Machine Learning career through AWS Jam",
                    date: "July 2025",
                    url: "https://aws.amazon.com/blogs/training-and-certification/transform-your-machine-learning-career-through-aws-jam/",
                  },
                ].map((post) => (
                  <a
                    key={post.url}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-6 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:bg-card-hover"
                  >
                    <div>
                      <p className="text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                        {post.title}
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        AWS Training &amp; Certification Blog &middot; {post.date}
                      </p>
                    </div>
                    <ExternalLink
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted transition-colors group-hover:text-accent"
                      strokeWidth={1.5}
                    />
                  </a>
                ))}
              </div>
            </FadeInView>
          </Container>
        </section>

        {/* Technical content delivery */}
        <section className="border-t border-border/60 py-20 sm:py-24">
          <Container>
            <FadeInView>
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                    Technical Content Delivery
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl leading-[1.08]">
                    Making technical concepts clear, live.
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                    A sample of technical content delivery, designed to make complex material approachable, actionable, and engaging for learners.
                  </p>
                  <a
                    href="https://www.loom.com/share/e594f5dbe6484c3d8ee4941d7d698bb6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent-soft"
                  >
                    Watch on Loom <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                </div>
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/10">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.loom.com/embed/e594f5dbe6484c3d8ee4941d7d698bb6"
                      title="Technical content delivery sample"
                      className="h-full w-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </FadeInView>
          </Container>
        </section>

        {/* About */}
        <section className="relative overflow-hidden border-t border-border bg-surface py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
            style={{
              background: "radial-gradient(ellipse at 80% 50%, rgba(245,200,66,0.05) 0%, transparent 60%)",
            }}
          />
          <Container className="relative z-10">
            <FadeInView>
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                    Background
                  </p>
                  <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl leading-[1.05]">
                    12+ Years of<br />Learning<br />Engineering
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-muted">
                    Across Stanford, ServiceNow, and AWS, I&apos;ve spent my career
                    building the enablement systems that help technical audiences
                    adopt complex products and capabilities with confidence.
                  </p>
                  <p className="text-base leading-relaxed text-muted">
                    My work connects GTM enablement, customer education, AI,
                    and training content into practical systems that support
                    real-world performance.
                  </p>
                  <Link
                    href="/about"
                    className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent hover:text-accent-soft transition-colors"
                  >
                    Full background &rarr;
                  </Link>
                </div>
              </div>
            </FadeInView>
          </Container>
        </section>

        {/* Contact CTA */}
        <section className="relative overflow-hidden py-32 sm:py-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 100%, rgba(245,200,66,0.08) 0%, transparent 60%)",
            }}
          />
          <Container className="relative z-10">
            <FadeInView>
              <div className="mx-auto max-w-2xl text-center">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                  Connect
                </p>
                <h2 className="mb-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl leading-[1.05]">
                  Let&apos;s Work<br />Together
                </h2>
                <p className="mb-10 text-base text-muted">
                  Interested in discussing how I can bring this approach to your team?
                </p>
                <a
                  href="mailto:chester.manuel@pm.me"
                  className="inline-block rounded-full border border-accent/40 bg-accent/10 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-background hover:border-accent"
                >
                  chester.manuel@pm.me
                </a>
              </div>
            </FadeInView>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}
