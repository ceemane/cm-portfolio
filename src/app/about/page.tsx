import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/animation/FadeInView";
import { BookOpen, Bot, Film, Megaphone, BarChart2, Wrench, ExternalLink } from "lucide-react";
import { AboutIllustration } from "@/components/animation/AboutIllustration";

export const metadata: Metadata = {
  title: "About | Chester Manuel",
  robots: { index: false, follow: false },
};

const skillGroups = [
  {
    category: "Customer Education",
    icon: BookOpen,
    skills: [
      "Curriculum Design",
      "Technical Learning Experience Design",
      "Scenario-Based Learning",
      "Storyboarding",
      "Backwards Design",
      "Bloom's Taxonomy",
      "Adult Learning Theory",
      "Competency Frameworks",
      "Assessment Design",
      "Psychometrics",
      "Blended Learning",
      "ILT & VILT",
      "Microlearning",
      "Kirkpatrick Model",
      "70-20-10 Model",
      "Train-the-Trainer",
      "Accessibility (WCAG)",
    ],
  },
  {
    category: "Training Content",
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
    category: "GTM Enablement",
    icon: Megaphone,
    skills: [
      "Pre-Sales Technical Training",
      "GTM Release Enablement",
      "Demo Enablement",
      "Partner Enablement",
      "Field-Ready Learning Assets",
      "Knowledge Checks",
      "Certification & Credentialing",
      "API Documentation",
      "Release Readiness",
      "Maintainable Handoffs",
    ],
  },
  {
    category: "AI & Engineering",
    icon: Bot,
    skills: [
      "AI Agent Orchestration",
      "Autonomous Agent Deployment",
      "Agentic Workflow Design",
      "Multi-Agent Frameworks",
      "MCP Integration",
      "LLM Workflow Automation",
      "RAG Pipelines",
      "Prompt Engineering & Versioning",
      "AI-Augmented Content Production",
      "Amazon Bedrock",
      "Amazon SageMaker",
      "Amazon Q Developer",
      "Python",
      "SQL",
      "React / Node.js",
      "Claude Code",
      "Kiro",
      "CloudFormation",
      "IAM",
      "Git / CLI",
      "JSON Schema",
      "Slack API Integration",
    ],
  },
  {
    category: "Systems Architecture",
    icon: BarChart2,
    skills: [
      "Content Operations",
      "Curriculum Lifecycle Management",
      "Quality Gates & Review Workflows",
      "Knowledge Architecture",
      "AI-Augmented Production Pipelines",
      "ADDIE",
      "Agile / Scrum",
      "Needs Analysis",
      "Stakeholder Alignment",
      "Program Metrics & Analytics",
      "Data-Driven Iteration",
      "OKRs & KPIs",
      "User Research",
      "Change Management",
      "Cross-Functional Leadership",
    ],
  },
  {
    category: "Platforms & Tools",
    icon: Wrench,
    skills: [
      "LMS / LXP Administration",
      "Jira",
      "Taskei",
      "Analytics & Reporting",
      "Confluence",
      "SharePoint",
      "Enablement Platforms",
    ],
  },
];

const bios = [
  {
    label: "Background",
    content:
      "I am a technical curriculum developer and training systems architect with 12+ years across Stanford, ServiceNow, and AWS. I design the courses, labs, demos, presentations, and operating systems that help technical audiences adopt complex products. My work combines instructional rigor with hands-on technical practice, from customer education and technical onboarding to field enablement and release-ready learning content. I hold an MS in Instructional Science and Technology, a BS in Computer Science, and am an AWS Certified AI Practitioner.",
  },
  {
    label: "GTM Enablement & Customer Education",
    content:
      "I build enablement programs around the way technical teams actually learn and work. That means curating source material into reusable curriculum, designing labs and demos that hold up in live delivery, partnering with program owners and product marketing on priorities, and keeping content current as products change. My work spans customer education, technical onboarding, pre-sales enablement, certification, and field-ready learning assets.",
  },
  {
    label: "Philosophy",
    content:
      "Great instructional design is invisible. When it works, learners feel capable, not taught. I've twice diagnosed what looked like a training problem as a workflow problem instead, at Stanford Health Care and at AWS, and delivered the process fix rather than a course nobody needed. I combine evidence-based learning science with systems thinking to create experiences that are clear, engaging, and measurable. Every design decision should trace back to a learning objective, and every objective should trace forward to real-world performance.",
  },
  {
    label: "AI & Automation",
    content:
      "I build AI-enabled content operations systems, not just AI-assisted drafts. My work includes multi-agent orchestration, Claude-based workflows, MCP servers, structured LLM evaluation, RAG knowledge tools, and automation for curriculum lifecycle management. I design for human review, reliable outputs, traceable sources, and maintainable handoff so AI accelerates technical content without reducing its quality.",
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

        {/* Illustration */}
        <section className="border-t border-border/60 py-12">
          <Container>
            <FadeInView>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Practice
              </p>
              <p className="mb-8 text-sm text-muted max-w-xs">
                The four pillars that define my work.
              </p>
              <AboutIllustration />
            </FadeInView>
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

        {/* Beyond Work */}
        <section className="border-t border-border/60 py-20">
          <Container>
            <FadeInView>
              <p className="mb-10 text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Beyond Work
              </p>
              <div className="max-w-2xl">
                <a
                  href="https://tbssf.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-6 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:bg-card-hover"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors leading-snug">
                      Tabimina Balintawak — Bay Area
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      I train and teach Tabimina Balintawak, a modern style of Arnis developed in the 1950s by Anciong Bacon and passed down through his direct student Bob &quot;Silver&quot; Tabimina. Teaching outside of work keeps my instructional instincts sharp — breaking down complex movement patterns for beginners is not that different from making technical concepts stick.
                    </p>
                  </div>
                  <ExternalLink className="mt-0.5 w-4 h-4 flex-shrink-0 text-muted group-hover:text-accent transition-colors" strokeWidth={1.5} />
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
