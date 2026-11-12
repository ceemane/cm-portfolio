import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PrdGenerator } from "@/components/prd/PrdGenerator";

export const metadata: Metadata = {
  title: "PRD Generator | Chester M.",
  description:
    "Turn a feature idea into a structured PRD in the browser. The draft stays on your device.",
};

export default function PrdGeneratorPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <section className="py-12 sm:py-16">
          <Container>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted hover:text-foreground"
            >
              <span aria-hidden="true">&larr;</span> Portfolio
            </Link>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Demo</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              PRD Generator
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Type a feature idea, plus who it is for and how you will measure it if you know. You get a structured draft you can copy or download.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-subtle">
              The full agent, with a language-model mode and clarifying questions, lives in a separate repo. That repo is private, so it is not linked here.
            </p>
          </Container>
        </section>
        <section className="border-t border-border/60 bg-background pb-20">
          <Container>
            <PrdGenerator />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
