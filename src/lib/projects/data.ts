import { portfolioSamples } from "./portfolio-samples";

export interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProjectFile {
  label: string;
  description: string;
  href: string;
  downloadName: string;
  /** PDFs can open in the page. Decks are download-only. */
  viewable?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: "Course" | "Documentation" | "Training" | "Learning Plan" | "System";
  description: string;
  context: string;
  role: string;
  challenge: string;
  approach: string;
  impact: string[];
  pdfFile?: string; // filename in content/pdfs or Vercel Blob key
  externalUrl?: string;
  videoUrl?: string; // direct video URL (Vercel Blob)
  images?: ProjectImage[]; // screenshots in public/
  files?: ProjectFile[];
  disclaimer?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  ...portfolioSamples,
  {
    slug: "ai-content-operations-system",
    title: "AI Content Operations System",
    subtitle: "Claude-powered workflow for reliable, maintainable technical curriculum",
    type: "System",
    description:
      "A full-stack content operations system that turns raw technical inputs into structured curriculum through role-based workflows, quality gates, and version-aware handoffs.",
    context:
      "Technical curriculum teams need to move quickly without losing source traceability, instructional quality, or ownership clarity as content changes.",
    role:
      "AI deployment architect and builder: designed the workflow, implemented the application and automation patterns, and defined the quality and handoff model.",
    challenge:
      "Create a workflow that accelerates technical content production while preserving human review, reusable structure, and confidence in the final learning asset.",
    approach:
      "Built a multi-role system using Claude as generation infrastructure, with structured outputs, validation gates, semantic versioning, and explicit review states. The architecture supports repeatable production of courses, labs, demos, and supporting documentation.",
    impact: [
      "Demonstrates AI-enabled curriculum operations rather than one-off prompting",
      "Makes source structure, quality review, and content state visible for maintainable handoff",
      "Combines React, Node.js, Python, and SQLite in a practical technical-content workflow",
    ],
  },
  {
    slug: "ai-content-orchestration-engine",
    title: "AI Content Orchestration Engine",
    subtitle: "Multi-agent system for technical workshop materials",
    type: "System",
    description:
      "A multi-agent orchestration framework for producing structured technical workshop materials from a defined content brief.",
    context:
      "Technical enablement content must be coherent across labs, facilitator guidance, learner materials, and supporting documentation.",
    role:
      "System designer and builder: defined agent responsibilities, prompt chaining, schemas, and quality checks for the production workflow.",
    challenge:
      "Automate repeatable production tasks without compromising technical accuracy or the instructional logic of the learning experience.",
    approach:
      "Used prompt chaining and structured LLM outputs to coordinate specialized steps, with human review at decision points and reusable templates for consistent artifacts.",
    impact: [
      "Produces a repeatable workflow for technical workshop development",
      "Uses JSON schemas and explicit handoffs to keep outputs inspectable and maintainable",
      "Shows practical experience turning AI capabilities into an enablement operating system",
    ],
  },
  {
    slug: "ml-engineer-learning-plan",
    title: "Machine Learning Engineer Learning Plan",
    subtitle: "13-course certification learning path with hands-on labs",
    type: "Learning Plan",
    description:
      "End-to-end learning plan for a machine learning engineer certification, spanning 13 courses across eLearning, video, self-paced labs, and knowledge checks.",
    context:
      "A global cloud provider needed a structured learning path to prepare engineers for a machine learning certification. No single plan connected the required domains.",
    role: "Co-lead Instructional Designer: co-led curriculum architecture, course sequencing, lab integration, and assessment alignment across all 13 courses in the learning plan.",
    challenge:
      "Design a learning plan that takes engineers from foundational ML concepts through production-ready skills across data engineering, model development, deployment, and monitoring, all mapped to certification exam objectives.",
    approach:
      "Mapped all exam domains to learning objectives, then sequenced 13 courses in a scaffolded progression. Integrated hands-on labs at key milestones so learners apply concepts immediately. Built knowledge checks throughout to reinforce retention and surface gaps before the exam.",
    impact: [
      "Official certification-preparation learning path for machine learning practitioners",
      "Covers the full exam blueprint across data engineering, model development, deployment, and monitoring",
      "Integrated hands-on labs give practice with managed training and foundation-model services",
      "Scaffolded design reduces learner drop-off across multi-week study plans",
    ],
  },
  {
    slug: "hands-on-challenge-catalog",
    title: "Hands-On Technical Enablement Platform",
    subtitle: "Game-based group learning for customers, partners, and internal teams across cloud domains",
    type: "Training",
    description:
      "Content strategy and curriculum operations for a gamified, scenario-based platform used by customers, partners, and internal teams to build practical cloud skills across AI, security, DevOps, and infrastructure domains.",
    context:
      "The platform gives teams live sandbox challenges to practice technical skills in facilitated events, broader learning programs, and field enablement. Its curriculum spans AI, security, DevOps, cloud infrastructure, storage, compute, databases, and industry-focused use cases.",
    role: "Technical Content Manager: own curriculum strategy and roadmap; direct multi-modal learning design across instructor-led, self-paced, and group-based experiences; build hands-on labs; and establish the review, security, and content-operations practices that keep the catalog reliable.",
    challenge:
      "Keep a broad technical curriculum current, secure, and usable in live learning environments while adapting it for varied customer, partner, and field needs.",
    approach:
      "Created reusable design and review practices for hands-on learning across instructor-led, self-paced, and group-based experiences. Built cloud labs, partnered with customer-facing teams to map skill gaps to learning journeys, and introduced AI-assisted workflows for proposal intake, review, security checks, and content readiness. Kept documentation, facilitator guidance, and maintenance practices aligned as products and services evolved.",
    impact: [
      "Directed multi-modal training design combining instructor-led, self-paced, and group-based challenge programs",
      "Built hands-on labs and security review practices for a broad cloud curriculum",
      "Designed challenge-based programs for professional services customers in finance, healthcare, and automotive",
      "Established a creator enablement and quality-review practice for distributed technical contributors",
      "Curated live learning experiences across AI, security, and DevOps for technical audiences",
      "Applied multi-agent AI workflows to curriculum lifecycle management",
      "Created automation and monitoring patterns that make content operations more reliable",
    ],
    pdfFile: "aws-jam-user-guide.pdf",
  },
  {
    slug: "ml-engineer-modeling-approach",
    title: "ML Engineer Associate: Choose a Modeling Approach",
    subtitle: "Articulate Rise eLearning module, machine learning certification prep (2.1)",
    type: "Course",
    description:
      "Interactive Articulate Rise module on how to choose a modeling approach, including supervised and unsupervised learning and a managed training service.",
    context:
      "Part of a machine learning engineer certification path. Learners needed structured guidance on model selection, which is an abstract topic.",
    role: "Instructional Designer: designed learning objectives, content structure, scenario-based assessments, and visual aids. Built the full course in Articulate Rise.",
    challenge:
      "Make abstract ML model selection concepts concrete and actionable in an interactive eLearning format for engineers with limited ML background.",
    approach:
      "Built in Articulate Rise with decision-tree frameworks, scenario-based knowledge checks, and interactive visual aids. Used real cloud service examples to ground abstract concepts. Aligned all content to exam objectives.",
    impact: [
      "Core interactive module in a machine learning certification-preparation path",
      "Core Rise-built module in the ML Engineer Associate certification prep path",
      "Decision-tree framework adopted by learners as a practical job aid",
      "Scenario-based assessments reinforced application over memorization",
      "Bridged theoretical machine learning concepts and cloud service implementation",
    ],
    pdfFile: "aws-ml-engineer-associate-2-1-choose-a-modeling-approach.pdf",
  },
  {
    slug: "ml-engineer-train-models",
    title: "ML Engineer Associate: Train Models",
    subtitle: "Articulate Rise eLearning module, machine learning certification prep (2.2)",
    type: "Course",
    description:
      "Interactive Articulate Rise module on model training, including data preparation, hyperparameter tuning, managed training jobs, and evaluation metrics.",
    context:
      "Sequential follow-up to the modeling approach module. Learners needed training guidance aligned to certification objectives and real cloud workflows.",
    role: "Instructional Designer: designed end-to-end learning experience including interactive Rise modules, labs, knowledge checks, and visual process flows.",
    challenge:
      "Balance certification exam coverage with practical training skills in an engaging eLearning format. Many learners had never run a training job.",
    approach:
      "Built in Articulate Rise with a scaffolded progression from basic training concepts to complex multi-model tuning. Used annotated console walkthroughs and knowledge checks to reduce cognitive load.",
    impact: [
      "Hands-on module in a machine learning certification-preparation path",
      "Rise-built module that lets learners configure and run managed training jobs on their own",
      "Scaffolded eLearning design reduced drop-off in the certification prep pipeline",
      "Interactive knowledge checks reinforced learning at each stage",
      "Integrated with hands-on labs for experiential learning reinforcement",
    ],
    pdfFile: "aws-ml-engineer-associate-2-2-train-models.pdf",
  },
  {
    slug: "analytics-fundamentals-part-1",
    title: "Fundamentals of Analytics: Part 1",
    subtitle: "Articulate Rise eLearning, a foundation course on cloud analytics",
    type: "Course",
    description:
      "Interactive Articulate Rise course on a cloud analytics ecosystem and data lake architecture, including storage, catalog, and query services. Built for data practitioners.",
    context:
      "Cloud analytics services were growing quickly, and learners lacked a foundation course that connected them into one journey.",
    role: "Instructional Designer: designed curriculum architecture, built the full course in Articulate Rise, wrote content, and created assessment strategy.",
    challenge:
      "Create a foundation Rise course that gives data practitioners a mental model of a cloud analytics ecosystem without burying them in service details.",
    approach:
      "Built in Articulate Rise with a zoom-in and zoom-out structure. Start with the data pipeline, then explore each stage with the relevant cloud service. Used consistent visuals and knowledge checks.",
    impact: [
      "Foundational analytics course in a technical learning catalog",
      "Rise-built foundational analytics course in a technical learning catalog",
      "Data pipeline mental model reused across advanced analytics courses",
      "Directly relevant for data engineering teams evaluating analytics tooling",
      "Served as prerequisite for specialized analytics certifications",
    ],
    pdfFile: "fundamentals-of-analytics-on-aws-part-1.pdf",
  },
  {
    slug: "analytics-fundamentals-part-2",
    title: "Fundamentals of Analytics: Part 2",
    subtitle: "Articulate Rise eLearning on advanced analytics architectures",
    type: "Course",
    description:
      "Continuation Articulate Rise course on advanced analytics, including warehouse, large-scale processing, streaming, and dashboard services, plus architecture patterns.",
    context:
      "Building on Part 1, this course bridges foundational knowledge to real-world analytics architectures used in production environments. Directly relevant for data engineering and analytics engineering teams.",
    role: "Instructional Designer: designed advanced content progression, built the course in Articulate Rise, and created architecture case studies with interactive assessments.",
    challenge:
      "Elevate learners from foundational understanding to architectural thinking in an engaging Rise format, helping them see how individual services compose into production analytics pipelines.",
    approach:
      "Built in Articulate Rise with progressive complexity: individual service deep-dives composed into interactive reference architecture scenarios. Interactive exercises require learners to make real architectural decisions.",
    impact: [
      "Advanced analytics course completing a technical learning path",
      "Rise-built course completing the analytics fundamentals learning path",
      "Reference architecture patterns used by solution architects in customer workshops",
      "Interactive architecture exercises validated real-world design skills",
      "Directly applicable for data engineering teams evaluating modern analytics stacks",
    ],
    pdfFile: "fundamentals-of-analytics-on-aws-part-2.pdf",
  },
  {
    slug: "intro-video-sample",
    title: "Instructional Video: Script & Production Sample",
    subtitle: "End-to-end video scripting and production for eLearning",
    type: "Course",
    description:
      "A complete instructional video sample demonstrating end-to-end production skills from script writing through final video delivery, optimized for on-demand eLearning consumption.",
    context:
      "Scenario-based microvideos are a core component of modern eLearning programs, driving engagement and behavior change through narrative immersion. This sample demonstrates the full production workflow: scripting, storyboarding, creative direction, and delivering a focused scenario-based video for on-demand consumption.",
    role: "Instructional Designer & Creative Director: wrote the full script, storyboarded visuals, and directed the creative services team through production to final delivery. Maintained instructional integrity and creative quality at every stage.",
    challenge:
      "Deliver a focused, engaging scenario within a short video format while maintaining production quality appropriate for enterprise group-based learning programs.",
    approach:
      "Scripted for clarity and concision so every sentence drives the learner deeper into the scenario. Storyboarded the visual sequence before handing off to creative services, then provided direction through production to ensure pacing, tone, and learning objectives aligned in the final cut.",
    impact: [
      "Demonstrates end-to-end video production capability from script to final delivery",
      "Optimized for on-demand consumption in modern LMS platforms",
      "Shows scripting discipline: focused message, clear structure, no filler",
    ],
    videoUrl: "https://fxj0ysdpgxsoketu.public.blob.vercel-storage.com/videos/INTRO_v1.mp4",
  },
  {
    slug: "utilization-management-platform",
    title: "Utilization Management Case Review Platform",
    subtitle: "Founder and AI deployment architect for a Medicare payment review system",
    type: "Documentation",
    description:
      "Founder and AI deployment architect of a Medicare utilization management platform using autonomous Claude Code agents with a custom orchestrator to build 16 interdependent clinical workflow modules with human-in-the-loop review gates and explainability.",
    context:
      "Medicare payment review is a high-stakes, highly regulated workflow where errors carry real financial and compliance consequences. Building it required both deep process understanding and production-grade AI agent architecture, not a demo.",
    role: "Founder & AI Deployment Architect: designed the system architecture, built the custom orchestrator, and directed a fleet of autonomous Claude Code agents to implement 16 interdependent clinical workflow modules.",
    challenge:
      "Build a multi-module clinical workflow system reliable enough for regulated payment review, with every automated decision explainable and every critical step gated by human review, using autonomous coding agents rather than a traditional engineering team.",
    approach:
      "Architected a custom orchestrator to coordinate autonomous Claude Code agents across 16 interdependent modules, each scoped narrowly enough for an agent to implement reliably. Built human-in-the-loop review gates at every critical decision point and designed for explainability from the start, so every automated determination can be traced and justified.",
    impact: [
      "16 interdependent clinical workflow modules built and orchestrated by autonomous AI agents",
      "Human-in-the-loop review gates at every critical decision point for a regulated, high-stakes domain",
      "Explainability designed in from the architecture up, not bolted on after the fact",
      "Demonstrates production-grade multi-agent orchestration applied to a regulated, real-world compliance workflow",
    ],
  },
  {
    slug: "ai-content-operations-system",
    title: "AI-Powered Content Operations System",
    subtitle: "Full-stack multi-agent content platform built on Claude Sonnet 4.5",
    type: "Documentation",
    description:
      "Full-stack content platform using Claude Sonnet 4.5. A multi-agent engine cut manual content work 90 percent. A challenge builder cut delivery from days to hours.",
    context:
      "Technical content production at scale is bottlenecked by manual drafting, inconsistent quality gates, and version confusion across dozens of contributors. This system was built to remove that bottleneck without removing human judgment from the loop.",
    role: "AI systems builder: architected and built the full-stack platform, the multi-agent orchestration engine, and the challenge-builder agent end to end.",
    challenge:
      "Automate the bulk of technical content generation and quality assurance while preserving structural consistency, semantic versioning, and a clear human review checkpoint at every content state transition.",
    approach:
      "Built a four-role workflow in React, Node.js, Python, and SQLite, with quality gates and semantic versioning on content state changes. A separate multi-agent engine uses prompt chaining to produce workshop materials. The same pattern powers a challenge-builder agent for spec, design, and implementation.",
    impact: [
      "Multi-agent content orchestration engine reduced manual content generation effort by 90%",
      "A challenge-builder agent cut delivery from 40 to 80 hours down to 4 hours",
      "Four-role workflow with structural quality gates and automatic semantic versioning on every content state transition",
      "Production system, not a prototype: built on Claude Sonnet 4.5 as core generation infrastructure",
    ],
  },
  {
    slug: "customer-service-certification",
    title: "Customer Service Certification",
    subtitle: "Customer service management certification across three platform releases",
    type: "Course",
    description:
      "Developed a customer service management certification and psychometrics-based exams across three platform releases. Covered case management, service channels, and customer workflows.",
    context:
      "An enterprise software company's customer service product was changing quickly across releases. Each release added features certification candidates needed to master.",
    role: "Senior Technical Curriculum Developer: authored certification exam content using psychometrics methodology, designed learning materials, and coordinated with the global certification manager to align exam questions to competency frameworks.",
    challenge:
      "Keep the certification rigorous across three major releases, and make sure exam questions assessed real implementation skill at each release.",
    approach:
      "Developed performance-based exam questions aligned to competency frameworks for each release. Created accompanying training materials including flipped-classroom modules. Partnered with SMEs to validate technical accuracy against each release's feature set.",
    impact: [
      "Certification exams adopted as the global standard for that customer service credential",
      "Maintained exam validity and relevance across successive platform releases",
      "Performance-based questions validated real implementation skills, not just recall",
    ],
  },
  {
    slug: "field-service-certification",
    title: "Field Service Certification",
    subtitle: "Field service management certification across two platform releases",
    type: "Course",
    description:
      "Developed a field service implementation certification and exams across two platform releases. Covered work orders, technician scheduling, resources, and service delivery.",
    context:
      "Field service was growing as a key offering at an enterprise software company. Consultants needed a credential that proved they could deploy it.",
    role: "Senior technical curriculum developer: designed the certification, wrote psychometrics-based exam questions, and built pre-sales enablement for new features and demos.",
    challenge:
      "Create a certification that validates field service skills across mobile work, scheduling, and field operations, and keep it current across two release cycles.",
    approach:
      "Mapped competency domains to exam objectives for each release. Wrote performance-based questions from real implementation scenarios. Built pre-sales materials with product knowledge and demo tools.",
    impact: [
      "The certification became the standard credential for implementation consultants",
      "Pre-sales enablement gave sellers demo tools that shortened sales cycles",
      "Kept certification content aligned with successive product releases",
    ],
  },
  {
    slug: "technical-architect-certification",
    title: "Technical Architect Certification",
    subtitle: "Advanced certification for platform architects",
    type: "Training",
    description:
      "Co-developed a flagship technical architect certification at an enterprise software company. It covers architecture, integration, security, and governance in a flipped classroom.",
    context:
      "The company needed a rigorous certification for its most advanced technical practitioners. The credential covers architecture, integration, security, and governance.",
    role: "Senior Technical Curriculum Developer: architected the flipped-classroom competency model, led cross-functional delivery, and developed psychometrics-based certification exams with the global certification manager.",
    challenge:
      "Design an advanced certification program that credibly validates architectural expertise while scaling delivery across global audiences.",
    approach:
      "Built a flipped-classroom model combining self-paced pre-work with live, scenario-based workshops. Developed psychometrics-based exam questions aligned to competency frameworks. Created train-the-trainer programs and GTM support for alliance partners to scale delivery globally.",
    impact: [
      "Won 2022 CEdMA Innovation Award for blended learning program design",
      "Delivered an advanced, learner-centered architecture certification program",
      "Re-platformed instructor-led learning into a self-paced experience",
      "Psychometrics-based exams became the standard for the customer service and field service credentials",
      "Train-the-trainer programs scaled delivery across alliance partners globally",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
