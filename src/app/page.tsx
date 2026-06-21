import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/animation/FadeInView";
import { ScrollHero } from "@/components/animation/ScrollHero";
import { ScrollStats } from "@/components/animation/ScrollStats";
import { ScrollPortfolio } from "@/components/animation/ScrollPortfolio";
import Link from "next/link";

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
                    From CSUMB&apos;s Instructional Science &amp; Technology program
                    to Stanford, Stanford Health Care, ServiceNow, and AWS,
                    I&apos;ve spent my career at the intersection of learning
                    science and technology.
                  </p>
                  <p className="text-base leading-relaxed text-muted">
                    Turning complex systems into clear, engaging experiences
                    that trace back to real-world performance.
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
