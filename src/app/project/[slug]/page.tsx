import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeInView } from "@/components/animation/FadeInView";
import { projects, getProject } from "@/lib/projects/data";
import { PdfViewer } from "@/components/pdf/PdfViewer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | CM`,
    robots: { index: false, follow: false },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { label: "Context", content: project.context },
    { label: "My Role", content: project.role },
    { label: "Challenge", content: project.challenge },
    { label: "Approach", content: project.approach },
  ];

  return (
    <>
      <Header />
      <main className="pt-14">

        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-start justify-center"
          >
            <div
              className="w-[600px] h-[300px] rounded-full opacity-15"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(245,200,66,0.15) 0%, transparent 65%)",
              }}
            />
          </div>

          <Container className="relative z-10">
            <FadeInView>
              <Link
                href="/"
                className="mb-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors"
              >
                <span aria-hidden="true">&larr;</span> Portfolio
              </Link>
            </FadeInView>

            <FadeInView delay={0.1}>
              <Badge variant="accent">{project.type}</Badge>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl leading-[1.05]">
                {project.title}
              </h1>
              <p className="mt-3 text-base text-muted">{project.subtitle}</p>
            </FadeInView>
          </Container>
        </section>

        {/* Detail sections */}
        <section className="border-t border-border/60 bg-surface py-16">
          <Container>
            <div className="grid gap-12 sm:grid-cols-2 max-w-4xl">
              {sections.map((s, i) => (
                <FadeInView key={s.label} delay={0.1 * (i + 1)}>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                    {s.label}
                  </p>
                  <p className="text-base leading-relaxed text-muted">
                    {s.content}
                  </p>
                </FadeInView>
              ))}
            </div>
          </Container>
        </section>

        {/* Impact */}
        <section className="border-t border-border/60 py-16">
          <Container>
            <FadeInView>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Impact
              </p>
              <ul className="space-y-4 max-w-2xl">
                {project.impact.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-base text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInView>
          </Container>
        </section>

        {/* Screenshots */}
        {project.images && project.images.length > 0 && (
          <section className="border-t border-border/60 bg-surface py-16">
            <Container>
              <FadeInView>
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                  Screenshots
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-2xl border border-border"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={800}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </FadeInView>
            </Container>
          </section>
        )}

        {/* Video */}
        {project.videoUrl && (
          <section className="border-t border-border/60 bg-surface py-16">
            <Container>
              <FadeInView>
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                  Video Sample
                </p>
                <div className="overflow-hidden rounded-2xl border border-border bg-background max-w-3xl">
                  <video
                    src={project.videoUrl}
                    controls
                    className="w-full"
                    preload="metadata"
                  />
                </div>
              </FadeInView>
            </Container>
          </section>
        )}

        {/* Artifact */}
        {(project.pdfFile || project.externalUrl) && (
          <section className="border-t border-border/60 py-16">
            <Container>
              <FadeInView>
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                  Artifact
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-background hover:border-accent"
                    >
                      View Live
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M5.25 2.625H2.625V11.375H11.375V8.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.75 2.625H11.375V5.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.125 7.875L11.375 2.625" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
                {project.pdfFile && (
                  <div className="mt-6">
                    <PdfViewer slug={project.slug} title={project.title} />
                  </div>
                )}
              </FadeInView>
            </Container>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
