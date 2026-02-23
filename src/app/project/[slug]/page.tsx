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
        <section className="py-16 sm:py-24">
          <Container>
            <FadeInView>
              <Link
                href="/"
                className="mb-8 inline-block text-sm text-muted hover:text-foreground transition-colors"
              >
                &larr; Back to portfolio
              </Link>
            </FadeInView>

            <FadeInView delay={0.1}>
              <Badge variant="accent">{project.type}</Badge>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 text-lg text-muted">{project.subtitle}</p>
            </FadeInView>

            {/* Detail sections */}
            <div className="mt-16 grid gap-12 sm:grid-cols-2">
              {sections.map((s, i) => (
                <FadeInView key={s.label} delay={0.1 * (i + 1)}>
                  <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                    {s.label}
                  </h2>
                  <p className="text-base leading-relaxed text-muted">
                    {s.content}
                  </p>
                </FadeInView>
              ))}
            </div>

            {/* Impact */}
            <FadeInView delay={0.5} className="mt-16">
              <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
                Impact
              </h2>
              <ul className="space-y-3">
                {project.impact.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-base text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInView>

            {/* Screenshots */}
            {project.images && project.images.length > 0 && (
              <FadeInView delay={0.6} className="mt-16">
                <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
                  Screenshots
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-xl border border-border/50"
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
            )}

            {/* Artifact */}
            {(project.pdfFile || project.externalUrl) && (
              <FadeInView delay={0.7} className="mt-16">
                <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
                  Artifact
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
                    >
                      View Live
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
