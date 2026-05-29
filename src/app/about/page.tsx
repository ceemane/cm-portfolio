import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/animation/FadeInView";
import { BookOpen, Bot, Film, Megaphone, BarChart2, Wrench, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Chester Manuel",
  robots: { index: false, follow: false },
};

const skillGroups = [
  {
    category: "Instructional Design",
    icon: BookOpen,
    skills: [
      "Curriculum Design",
      "Learning Experience Design (LXD)",
      "Scenario-Based Learning",
      "Storyboarding",
      "Backwards Design",
      "Bloom's Taxonomy",
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
    category: "Content & Media",
    icon: Film,
    skills: [
      "Articulate Rise",
      "Articulate Storyline",
      "Articulate 360",
      "Microvideo Scripting & Production",
      "Animated Explainers",
      "Technical Writing",
      "E-Learning Development",
      "Camtasia",
      "Video Script Writing",
      "SCORM Packaging",
    ],
  },
  {
    category: "Enablement & GTM",
    icon: Megaphone,
    skills: [
      "Pre-Sales Technical Training",
      "GTM Release Enablement",
      "Demo Enablement",
      "Customer Lifecycle Enablement",
      "Partner Enablement",
      "Field-Ready Learning Assets",
      "Knowledge Checks",
      "Certification & Credentialing",
    ],
  },
  {
    category: "AI & Engineering",
    icon: Bot,
    skills: [
      "LLM API Integration (Claude, ChatGPT)",
      "Prompt Engineering & Versioning",
      "AI Agent Orchestration",
      "RAG & Evaluation Strategies",
      "AI-Augmented Content Production",
      "Python",
      "React / Node.js",
      "Generative AI",
    ],
  },
  {
    category: "Program Management",
    icon: BarChart2,
    skills: [
      "ADDIE",
      "SAM (Successive Approximation)",
      "Agile / Scrum",
      "Needs Analysis",
      "Stakeholder Alignment",
      "Program Metrics & Analytics",
      "Data-Driven Iteration",
      "Cross-Functional Leadership",
    ],
  },
  {
    category: "Platforms & Tools",
    icon: Wrench,
    skills: [
      "AWS Cloud Services",
      "AWS Skill Builder",
      "AWS Jam",
      "Docebo (LMS)",
      "Jira",
      "QuickSight",
      "n8n Workflow Automation",
      "Strapi CMS",
    ],
  },
];

const bios = [
  {
    label: "Background",
    content:
      "I'm a Senior Instructional Designer with 12+ years designing high-quality learning experiences for global B2B SaaS and enterprise audiences. My career has taken me from CSUMB's Instructional Science & Technology program to Stanford University, Stanford Health Care, ServiceNow, and Amazon Web Services, where I've developed training reaching 153K+ learners with 4.4/5 satisfaction and built 20+ Articulate Rise modules achieving 95% completion rates across AI/ML, analytics, security, and cloud domains. I apply ADDIE and SAM frameworks to match design rigor to project constraints, from rapid iterations in Agile/Scrum environments at ServiceNow and AWS to full-cycle curriculum builds at Stanford Health Care. MS in Instructional Science and Technology. AWS Certified AI Practitioner.",
  },
  {
    label: "At AWS",
    content:
      "As Technical Content Manager at AWS, I lead learning program management for the AWS Jam platform serving 45K+ learners, provide instructional design direction to a cross-functional team of 40 content developers, and scale a distributed learning community of 400+ content creators elevated to top-10% AWS performance metrics. I design AI competency blended learning programs, advise Professional Services teams on Jam-based learning program design, and build AI-powered automation that has cut process cycle times by up to 98%.",
  },
  {
    label: "Philosophy",
    content:
      "Great instructional design is invisible. When it works, learners feel capable, not taught. I combine evidence-based learning science with systems thinking to create experiences that are clear, engaging, and measurable. Every design decision should trace back to a learning objective, and every objective should trace forward to real-world performance.",
  },
  {
    label: "AI & Automation",
    content:
      "I use AI tools to accelerate content production without sacrificing instructional rigor. I've architected an end-to-end AI-powered content pipeline using the Claude API that reduced training module creation from 1 to 2 weeks down to 1 hour, a 40 to 80x productivity gain, with automated quality gates, semantic prompt versioning, and a critic agent layer to prevent hallucinations before learner delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-14">

        {/* Hero */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-start justify-center"
          >
            <div
              className="w-[600px] h-[400px] rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 20%, rgba(245,200,66,0.10) 0%, transparent 65%)",
              }}
            />
          </div>
          <Container className="relative z-10">
            <FadeInView>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                About
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl leading-[1.05]">
                Learning,<br />Engineered.
              </h1>
            </FadeInView>
          </Container>
        </section>

        {/* Bio sections */}
        <section className="border-t border-border/60 bg-surface py-20">
          <Container>
            <div className="max-w-3xl space-y-14">
              {bios.map((bio, i) => (
                <FadeInView key={bio.label} delay={0.1 * (i + 1)}>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                    {bio.label}
                  </p>
                  <p className="text-base leading-relaxed text-muted">
                    {bio.content}
                  </p>
                </FadeInView>
              ))}
            </div>
          </Container>
        </section>

        {/* Skills */}
        <section className="border-t border-border/60 py-20">
          <Container>
            <FadeInView>
              <p className="mb-10 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Skills &amp; Tools
              </p>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
                {skillGroups.map((group) => {
                  const Icon = group.icon;
                  return (
                  <div key={group.category}>
                    <div className="mb-4 flex items-center gap-2">
                      <Icon className="w-4 h-4 text-accent/70" strokeWidth={1.5} />
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                        {group.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  );
                })}
              </div>
            </FadeInView>
          </Container>
        </section>

        {/* Writing */}
        <section className="border-t border-border/60 bg-surface py-20">
          <Container>
            <FadeInView>
              <p className="mb-10 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Writing
              </p>
              <div className="space-y-6 max-w-2xl">
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
                      <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors leading-snug">
                        {post.title}
                      </p>
                      <p className="mt-1 text-xs text-muted">AWS Training &amp; Certification Blog &middot; {post.date}</p>
                    </div>
                    <ExternalLink className="mt-0.5 w-4 h-4 flex-shrink-0 text-muted group-hover:text-accent transition-colors" strokeWidth={1.5} />
                  </a>
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
