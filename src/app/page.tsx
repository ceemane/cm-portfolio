import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FadeInView } from "@/components/animation/FadeInView";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animation/StaggerChildren";
import { projects } from "@/lib/projects/data";
import { HeroArt } from "@/components/art/HeroArt";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        {/* Hero */}
        <section className="py-24 sm:py-32">
          <Container>
            <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <FadeInView>
                  <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
                    Chester Manuel
                  </h1>
                </FadeInView>
                <FadeInView delay={0.1}>
                  <p className="mt-4 text-xl text-muted sm:text-2xl">
                    Instructional Designer &amp; Learning Engineer
                  </p>
                </FadeInView>
                <FadeInView delay={0.2}>
                  <p className="mt-3 text-lg font-medium text-accent">
                    Learning, Engineered.
                  </p>
                </FadeInView>
                <FadeInView delay={0.3}>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
                    I design learning experiences that make complex technical
                    topics clear, engaging, and measurable. Currently at AWS
                    managing content operations for AWS Jam team game-based
                    learning experience platform enjoyed by thousands of
                    engineers worldwide.
                  </p>
                </FadeInView>
              </div>
              <FadeInView delay={0.4} className="w-full max-w-md lg:max-w-lg flex-shrink-0">
                <HeroArt />
              </FadeInView>
            </div>
          </Container>
        </section>

        {/* Portfolio Grid */}
        <section className="pb-24">
          <Container>
            <FadeInView>
              <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-muted">
                Selected Work
              </h2>
              <p className="mb-12 text-3xl font-semibold tracking-tight text-foreground">
                Portfolio
              </p>
            </FadeInView>

            <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <StaggerItem key={project.slug}>
                  <Card href={`/project/${project.slug}`}>
                    <Badge variant="accent">{project.type}</Badge>
                    <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      View project &rarr;
                    </span>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </Container>
        </section>

        {/* Quick About */}
        <section className="border-t border-border/50 py-24">
          <Container>
            <FadeInView>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-foreground">
                  About
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  From CSUMB&apos;s Instructional Science &amp; Technology program
                  to Stanford, Stanford Health Care, ServiceNow, and AWS,
                  I&apos;ve spent my career at the intersection of learning
                  science and technology. I specialize
                  in turning complex systems into clear, engaging learning
                  experiences.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-block text-sm font-medium text-accent hover:text-accent-light transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </FadeInView>
          </Container>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-border/50 py-24">
          <Container>
            <FadeInView>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">
                  Let&apos;s Connect
                </h2>
                <p className="mb-8 text-base text-muted">
                  Interested in discussing how I can bring this approach to your
                  team?
                </p>
                <a
                  href="mailto:chester.manuel@pm.me"
                  className="inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
                >
                  Get in Touch
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
