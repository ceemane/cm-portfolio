import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/animation/FadeInView";

export const metadata: Metadata = {
  title: "About | Chester Manuel",
  robots: { index: false, follow: false },
};

const skillGroups = [
  {
    category: "Instructional Design",
    skills: [
      "Curriculum Design",
      "Learning Experience Design (LXD)",
      "Adult Learning Theory",
      "Competency Frameworks",
      "Assessment Design",
      "Psychometrics",
      "Blended Learning",
      "Train-the-Trainer",
      "Accessibility (WCAG)",
    ],
  },
  {
    category: "AI & Engineering",
    skills: [
      "LLM API Integration (Claude, OpenAI)",
      "Prompt Engineering & Versioning",
      "AI Agent Orchestration",
      "RAG & Evaluation Strategies",
      "Python",
      "React / Node.js",
      "Generative AI",
    ],
  },
  {
    category: "Content & Media",
    skills: [
      "Technical Writing",
      "E-Learning Development",
      "Articulate Storyline & Rise",
      "Camtasia",
      "Video Production",
      "SCORM Packaging",
    ],
  },
  {
    category: "Enablement & GTM",
    skills: [
      "Pre-Sales Technical Training",
      "GTM Release Enablement",
      "Demo Enablement",
      "Customer Lifecycle Enablement",
      "Partner Enablement",
    ],
  },
  {
    category: "Program Management",
    skills: [
      "Needs Analysis",
      "Stakeholder Alignment",
      "Program Metrics & Analytics",
      "Data-Driven Iteration",
      "Agile / Scrum",
      "Cross-Functional Leadership",
    ],
  },
  {
    category: "Platforms & Tools",
    skills: [
      "AWS Cloud Services",
      "LMS / LXP Administration",
      "Jira",
      "QuickSight",
      "n8n Workflow Automation",
      "Strapi CMS",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <section className="py-16 sm:py-24">
          <Container>
            <FadeInView>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                About
              </h1>
              <p className="mt-4 text-lg font-medium text-accent">
                Learning, Engineered.
              </p>
            </FadeInView>

            {/* Career Arc */}
            <div className="mt-16 max-w-3xl space-y-8">
              <FadeInView delay={0.1}>
                <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                  Background
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  I&apos;m an instructional designer and learning engineer with
                  12+ years designing scalable technical education. My career
                  has taken me from CSUMB&apos;s Instructional Science &amp;
                  Technology program to Stanford University, Stanford Health
                  Care, ServiceNow, and Amazon Web Services, where I&apos;ve
                  developed training reaching 153K+ learners with 4.4/5
                  satisfaction.
                </p>
              </FadeInView>

              <FadeInView delay={0.2}>
                <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                  At AWS
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  As Technical Content Manager at AWS, I lead learning program
                  management for the AWS Jam platform serving 35K+ learners,
                  provide instructional design direction to a cross-functional
                  team of 40 content developers, and scale a distributed
                  learning community of 400+ content creators. I also design AI
                  competency blended learning programs and build AI-powered
                  automation that has cut process cycle times by up to 98%.
                </p>
              </FadeInView>

              <FadeInView delay={0.3}>
                <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                  AI &amp; LLM Systems
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  Beyond instructional design, I build production systems with
                  LLMs as core infrastructure. I&apos;ve architected an
                  end-to-end AI-powered content pipeline using the Claude API
                  that reduced training module creation from 1-2 weeks to 1
                  hour, a 40-80x productivity gain, with automated quality gates,
                  semantic prompt versioning, and a critic agent layer to prevent
                  hallucinations before learner delivery. I&apos;ve also built a
                  full-stack content operations platform using Claude Sonnet as
                  the generation engine and designed an autonomous agent
                  orchestration system using custom Claude Code orchestrators
                  for a clinical workflow platform.
                </p>
              </FadeInView>

              <FadeInView delay={0.4}>
                <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                  Philosophy
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  I believe great instructional design is invisible. When it
                  works, learners feel capable, not taught. I combine
                  evidence-based learning science with systems thinking to
                  create experiences that are clear, engaging, and measurable.
                  Every design decision should trace back to a learning
                  objective, and every objective should trace forward to
                  real-world performance.
                </p>
              </FadeInView>
            </div>

            {/* Skills */}
            <FadeInView delay={0.5} className="mt-16 max-w-4xl">
              <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-accent">
                Skills &amp; Tools
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {skillGroups.map((group) => (
                  <div key={group.category}>
                    <h3 className="mb-3 text-sm font-semibold text-foreground">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
