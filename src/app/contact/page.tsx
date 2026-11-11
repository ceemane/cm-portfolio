import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/animation/FadeInView";
import { MapPin } from "lucide-react";
import { RecruiterContactSentence, RecruiterMailButton } from "@/components/contact/RecruiterEmail";

export const metadata: Metadata = {
  title: "Contact | Chester M.",
  description:
    "Reach Chester M. on LinkedIn, or use the recruiter email on this page.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <section className="relative flex min-h-[calc(100vh-3.5rem-5rem)] items-center overflow-hidden py-16 sm:py-24">
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div
              className="w-[500px] h-[400px] rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(127,176,105,0.22) 0%, transparent 65%)",
              }}
            />
          </div>

          <Container className="relative z-10">
            <FadeInView>
              <div className="mx-auto max-w-lg text-center">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                  Connect
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl leading-[1.05]">
                  Get in Touch
                </h1>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  I want to lead AI education and enablement. LinkedIn is the way to reach me. A contact form is not on this site, because sending mail would need a paid service.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="https://linkedin.com/in/chesman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-background hover:border-accent"
                  >
                    LinkedIn
                  </a>
                  <RecruiterMailButton className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-background hover:border-accent" />
                </div>
                <RecruiterContactSentence
                  className="mt-8 text-sm leading-relaxed text-muted"
                  trailing="A resume is available on request."
                />
                <p className="mt-12 flex items-center justify-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-subtle">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                  San Francisco Bay Area
                </p>
              </div>
            </FadeInView>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
