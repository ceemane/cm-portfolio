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
  externalUrl?: string; // link to live artifact (e.g. AWS Skill Builder)
  videoUrl?: string; // direct video URL (Vercel Blob)
  images?: { src: string; alt: string }[]; // screenshots in public/images/
}

export const projects: Project[] = [
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
    title: "AWS ML Engineer Associate Learning Plan",
    subtitle: "13-course certification learning path with hands-on labs",
    type: "Learning Plan",
    description:
      "End-to-end learning plan for the AWS Machine Learning Engineer Associate certification, spanning 13 courses across eLearning, video, self-paced labs, and knowledge checks.",
    context:
      "AWS needed a structured, comprehensive learning path to prepare engineers for the ML Engineer Associate certification. No unified plan existed that connected all the required domains into a cohesive learner journey.",
    role: "Co-lead Instructional Designer: co-led curriculum architecture, course sequencing, lab integration, and assessment alignment across all 13 courses in the learning plan.",
    challenge:
      "Design a learning plan that takes engineers from foundational ML concepts through production-ready skills across data engineering, model development, deployment, and monitoring, all mapped to certification exam objectives.",
    approach:
      "Mapped all exam domains to learning objectives, then sequenced 13 courses in a scaffolded progression. Integrated hands-on labs at key milestones so learners apply concepts immediately. Built knowledge checks throughout to reinforce retention and surface gaps before the exam.",
    impact: [
      "Official certification-preparation learning path for machine learning practitioners",
      "Covers the full exam blueprint across data engineering, model development, deployment, and monitoring",
      "Integrated hands-on labs provide practical experience with SageMaker, Bedrock, and other ML services",
      "Scaffolded design reduces learner drop-off across multi-week study plans",
    ],
    externalUrl: "https://skillbuilder.aws/learning-plan/AY5A6VN52B/aws-ml-engineer-associate-learning-plan-includes-labs/C21UPEK6R9",
  },
  {
    slug: "aws-jam-user-guide",
    title: "Hands-On Technical Enablement Platform",
    subtitle: "Game-based group learning platform serving AWS customers, partners, and internal teams across cloud domains",
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
      "Directed multi-modal training design combining ILT, self-paced eLearning, and group-based gamified Jam learning programs",
      "Built hands-on labs and security review practices for a broad cloud curriculum",
      "Advised and designed Jam-based learning programs for Professional Services customers across FSI, Healthcare, and Automotive verticals",
      "Established a creator enablement and quality-review practice for distributed technical contributors",
      "Curated live learning experiences across AI, security, and DevOps for technical audiences",
      "Applied multi-agent AI workflows to curriculum lifecycle management",
      "Created automation and monitoring patterns that make content operations more reliable",
    ],
    pdfFile: "aws-jam-user-guide.pdf",
    externalUrl: "https://jam.aws.com/",
  },
  {
    slug: "ml-engineer-modeling-approach",
    title: "ML Engineer Associate: Choose a Modeling Approach",
    subtitle: "Articulate Rise eLearning module, AWS Certification prep (2.1)",
    type: "Course",
    description:
      "Interactive Articulate Rise eLearning module preparing learners to select appropriate ML modeling approaches, covering supervised/unsupervised learning, model selection criteria, and AWS SageMaker integration.",
    context:
      "Part of the AWS Machine Learning Engineer Associate certification preparation curriculum. Learners needed structured guidance on model selection: a notoriously abstract topic.",
    role: "Instructional Designer: designed learning objectives, content structure, scenario-based assessments, and visual aids. Built the full course in Articulate Rise.",
    challenge:
      "Make abstract ML model selection concepts concrete and actionable in an interactive eLearning format for engineers with limited ML background.",
    approach:
      "Built in Articulate Rise with decision-tree frameworks, scenario-based knowledge checks, and interactive visual aids. Created real AWS service examples to ground abstract concepts. Aligned all content to exam objectives.",
    impact: [
      "Core interactive module in a machine learning certification-preparation path",
      "Core Rise-built module in the ML Engineer Associate certification prep path",
      "Decision-tree framework adopted by learners as a practical job aid",
      "Scenario-based assessments reinforced application over memorization",
      "Bridged the gap between theoretical ML concepts and AWS service implementation",
    ],
    pdfFile: "aws-ml-engineer-associate-2-1-choose-a-modeling-approach.pdf",
  },
  {
    slug: "ml-engineer-train-models",
    title: "ML Engineer Associate: Train Models",
    subtitle: "Articulate Rise eLearning module, AWS Certification prep (2.2)",
    type: "Course",
    description:
      "Interactive Articulate Rise eLearning module on model training workflows including data preparation, hyperparameter tuning, SageMaker training jobs, and evaluation metrics.",
    context:
      "Sequential follow-up to the modeling approach module. Learners needed hands-on training guidance aligned with both certification objectives and real-world AWS workflows.",
    role: "Instructional Designer: designed end-to-end learning experience including interactive Rise modules, labs, knowledge checks, and visual process flows.",
    challenge:
      "Balance certification exam coverage with practical training skills in an engaging eLearning format. Many learners had never run a training job in SageMaker.",
    approach:
      "Built in Articulate Rise with a scaffolded progression from basic training concepts to complex multi-model tuning scenarios. Used annotated SageMaker console walkthroughs and interactive knowledge checks to reduce cognitive load.",
    impact: [
      "Hands-on module in a machine learning certification-preparation path",
      "Rise-built module enabling learners to configure and run SageMaker training jobs independently",
      "Scaffolded eLearning design reduced drop-off in the certification prep pipeline",
      "Interactive knowledge checks reinforced learning at each stage",
      "Integrated with hands-on labs for experiential learning reinforcement",
    ],
    pdfFile: "aws-ml-engineer-associate-2-2-train-models.pdf",
  },
  {
    slug: "analytics-fundamentals-part-1",
    title: "Fundamentals of Analytics on AWS: Part 1",
    subtitle: "Articulate Rise eLearning — foundation course on AWS analytics services",
    type: "Course",
    description:
      "Interactive Articulate Rise eLearning course covering the AWS analytics ecosystem, data lake architecture, and foundational services including S3, Glue, and Athena. Built for data practitioners and analytics engineers.",
    context:
      "AWS analytics services were growing rapidly, but customers lacked a foundational course that connected the services into a coherent learning journey for data practitioners and analytics engineers.",
    role: "Instructional Designer: designed curriculum architecture, built the full course in Articulate Rise, wrote content, and created assessment strategy.",
    challenge:
      "Create a foundation-level Rise course that gives data practitioners a mental model of the entire AWS analytics ecosystem without overwhelming them with service-specific details.",
    approach:
      "Built in Articulate Rise using a 'zoom in/zoom out' structure: start with the big picture data pipeline, then explore each stage with the relevant AWS service. Used consistent visual metaphors and interactive knowledge checks throughout.",
    impact: [
      "Foundational analytics course in a technical learning catalog",
      "Rise-built foundational analytics course in the AWS training catalog",
      "Data pipeline mental model reused across advanced analytics courses",
      "Directly relevant for data engineering teams evaluating analytics tooling",
      "Served as prerequisite for specialized analytics certifications",
    ],
    pdfFile: "fundamentals-of-analytics-on-aws-part-1.pdf",
  },
  {
    slug: "analytics-fundamentals-part-2",
    title: "Fundamentals of Analytics on AWS: Part 2",
    subtitle: "Articulate Rise eLearning — advanced analytics services and architectures",
    type: "Course",
    description:
      "Continuation Articulate Rise eLearning course covering advanced analytics services including Redshift, EMR, Kinesis, and QuickSight, plus end-to-end architecture patterns for data engineering teams.",
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
      "Reference architecture patterns adopted by AWS Solutions Architects for customer workshops",
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
    slug: "servicenow-csm-certification",
    title: "ServiceNow CSM Certification (Kingston, London, Madrid)",
    subtitle: "Customer Service Management certification across three platform releases",
    type: "Course",
    description:
      "Developed the Customer Service Management (CSM) certification curriculum and psychometrics-based exams spanning the Kingston, London, and Madrid ServiceNow releases. Covered core CSM processes, case management, service channels, and customer workflows.",
    context:
      "ServiceNow's Customer Service Management module was evolving rapidly across platform releases. Each release introduced new features that certification candidates needed to master, requiring curriculum updates aligned to release cycles.",
    role: "Senior Technical Curriculum Developer: authored certification exam content using psychometrics methodology, designed learning materials, and coordinated with the global certification manager to align exam questions to competency frameworks.",
    challenge:
      "Maintain certification rigor and relevance across three major platform releases (Kingston, London, Madrid) while ensuring exam questions accurately assessed real-world CSM implementation skills at each release level.",
    approach:
      "Developed performance-based exam questions aligned to competency frameworks for each release. Created accompanying training materials including flipped-classroom modules. Partnered with SMEs to validate technical accuracy against each release's feature set.",
    impact: [
      "Certification exams adopted as the global standard for ServiceNow CSM credentials",
      "Maintained exam validity and relevance across successive platform releases",
      "Performance-based questions validated real-world implementation skills, not just recall",
    ],
    externalUrl: "https://learning.servicenow.com/lxp/en/pages/now-learning-get-certified?id=amap_detail&achievement_id=c162be7847f60a505cbdaf44846d43f5",
  },
  {
    slug: "servicenow-fsm-certification",
    title: "ServiceNow FSM Certification (New York, Orlando)",
    subtitle: "Field Service Management certification across two platform releases",
    type: "Course",
    description:
      "Developed the Field Service Management (FSM) implementation certification curriculum and exams for the New York and Orlando ServiceNow releases. Covered work order management, technician scheduling, resource allocation, and service delivery optimization.",
    context:
      "ServiceNow's Field Service Management module was growing as a key enterprise offering. Implementation consultants and administrators needed a validated credential to prove FSM deployment competency.",
    role: "Senior Technical Curriculum Developer: designed certification curriculum, authored psychometrics-based exam questions, and built technical enablement for pre-sales teams on FSM new features and demos during release cycles.",
    challenge:
      "Create a certification that credibly validates FSM implementation skills across mobile workforce management, scheduling, and field operations while keeping pace with the New York and Orlando release cycles.",
    approach:
      "Mapped FSM competency domains to exam objectives for each release. Authored performance-based questions testing real implementation scenarios. Built pre-sales enablement materials equipping SEs with product knowledge and demo tools to accelerate sales cycles.",
    impact: [
      "FSM certification adopted as the standard credential for implementation consultants",
      "Pre-sales enablement equipped SEs with demo tools accelerating sales cycles",
      "Kept certification content aligned with successive product releases",
    ],
    externalUrl: "https://learning.servicenow.com/lxp/en/pages/now-learning-get-certified?id=amap_detail&achievement_id=5265835f1b63c514998555fa234bcbb4",
  },
  {
    slug: "servicenow-cta-program",
    title: "ServiceNow Certified Technical Architect Program",
    subtitle: "Advanced certification program for ServiceNow platform architects",
    type: "Training",
    description:
      "Co-developed the Certified Technical Architect (CTA) program at ServiceNow, an advanced certification covering architecture design, integration, security, and governance through a flipped-classroom competency model.",
    context:
      "ServiceNow needed a rigorous, scalable certification program for its most advanced technical practitioners. The CTA credential validates expertise across architecture, integration, security, and governance on the ServiceNow platform.",
    role: "Senior Technical Curriculum Developer: architected the flipped-classroom competency model, led cross-functional delivery, and developed psychometrics-based certification exams with the global certification manager.",
    challenge:
      "Design an advanced certification program that credibly validates architectural expertise while scaling delivery across global audiences.",
    approach:
      "Built a flipped-classroom model combining self-paced pre-work with live, scenario-based workshops. Developed psychometrics-based exam questions aligned to competency frameworks. Created train-the-trainer programs and GTM support for alliance partners to scale delivery globally.",
    impact: [
      "Won 2022 CEdMA Innovation Award for blended learning program design",
      "Delivered an advanced, learner-centered architecture certification program",
      "Re-platformed instructor-led learning into a self-paced experience",
      "Psychometrics-based certification exams adopted as the standard for CSM and FSM credentials",
      "Train-the-trainer programs scaled delivery capabilities across alliance partners globally",
    ],
    externalUrl: "https://learning.servicenow.com/expertprograms/en/pages/expert-program?id=snpx_home&type=CTA",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
