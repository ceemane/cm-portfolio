import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/animation/FadeInView";

export const metadata: Metadata = {
  title: "Contact | Chester Manuel",
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <section className="flex min-h-[calc(100vh-3.5rem-5rem)] items-center py-16 sm:py-24">
          <Container>
            <FadeInView>
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Get in Touch
                </h1>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  I&apos;m always interested in discussing instructional design,
                  learning engineering, and how I can bring my approach to new
                  challenges. The best way to reach me is by email.
                </p>
                <a
                  href="mailto:chester.manuel@pm.me"
                  className="mt-8 inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
                >
                  chester.manuel@pm.me
                </a>
                <p className="mt-12 text-sm text-muted">
                  Based in Gilbert, Arizona
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
