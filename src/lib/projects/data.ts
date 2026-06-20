export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: "Course" | "Documentation" | "Training" | "Learning Plan";
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
      "153,000+ registrations with 4.4/5 learner satisfaction — the official ML Engineer Associate certification prep path on AWS Skill Builder",
      "Spans 13 courses covering the full certification exam blueprint across data engineering, model development, deployment, and monitoring",
      "Integrated hands-on labs provide practical experience with SageMaker, Bedrock, and other ML services",
      "Scaffolded design reduces learner drop-off across multi-week study plans",
    ],
    externalUrl: "https://skillbuilder.aws/learning-plan/AY5A6VN52B/aws-ml-engineer-associate-learning-plan-includes-labs/C21UPEK6R9",
  },
  {
    slug: "aws-jam-user-guide",
    title: "AWS Jam Platform",
    subtitle: "Game-based group learning platform serving AWS customers, partners, and internal teams across cloud domains",
    type: "Training",
    description:
      "Lead content management for AWS Jam, a gamified scenario-based group learning platform used by AWS customers, partners, and internal teams to upskill across AI/ML, Security, DevOps, Cloud Infrastructure, Storage, Compute, and Database domains. Advise and design Jam-based learning programs for Professional Services and customer organizations.",
    context:
      "AWS Jam is a hands-on, game-based group learning platform where teams solve real AWS challenges in live sandbox environments. It serves a broad audience including AWS customers training their internal engineering teams, AWS partners and resellers, AWS internal staff such as SAs, TAMs, and BDMs, and attendees at marquee events like AWS re:Invent. Jam is delivered as facilitated group events, embedded within broader learning programs, and at AWS events globally. The platform hosts 300+ active products spanning AI/ML, Security, DevOps, Cloud Infrastructure, Storage, Compute, and Database, with industry-specific tracks for Financial Services, Healthcare and Life Sciences, and Automotive and Manufacturing.",
    role: "Technical Content Manager: lead learning program management and provide instructional design direction to a cross-functional team of 40 content developers. Advise Professional Services teams and customers on which Jam challenges best fit their skill gaps and use cases, and design full Jam-based learning program structures for their teams. Scale a distributed creator community of 400+ content developers through a Center of Excellence program.",
    challenge:
      "Scale content quality and velocity across 300+ active products while advising and designing Jam learning programs for diverse customer organizations, partner teams, and internal AWS audiences across multiple cloud domains and industry verticals.",
    approach:
      "Built a Center of Excellence program to elevate 400+ content creators to top-10% quality standards. Each challenge features game-based elements, scenario-driven tasks, and hands-on sandbox environments. Consult with Professional Services and customers to map skill gaps to the right challenge content and design structured Jam programs. Deployed a fleet of 13 autonomous AI agents automating end-to-end challenge lifecycle management—reducing manual work by 99% (17.6 hrs/week to 10 min/week), 86+ automated runs per day. Led development of 110+ challenges for re:Invent 2025 with 40 SMEs across Generative AI, Security, and DevOps.",
    impact: [
      "50K+ learners served across AWS customers, partners, and internal teams with 4.38/5 satisfaction",
      "Advised and designed Jam-based learning programs for Professional Services customers across FSI, Healthcare, and Automotive verticals",
      "300+ active products spanning AI/ML, Security, DevOps, Cloud Infrastructure, Storage, Compute, and Database domains",
      "400+ content creators elevated through Center of Excellence program to top-10% AWS performance metrics",
      "110+ challenges developed for AWS re:Invent 2025 (60K+ senior leaders and engineers)",
      "99% reduction in manual operational work via 13-agent AI fleet (17.6 hrs/week to 10 min/week, 86+ automated runs/day)",
      "Content Proposal Automation reduced approval cycle from 2 months to 1 day",
      "AI-powered monitoring: 100% defect auto-detection, 95% content health score, 98% on-time maintenance, 95% SLA breach reduction across 50 distributed maintainers",
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
      "95% completion rate across the ML Engineer Associate certification prep path",
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
      "95% completion rate across the ML Engineer Associate certification prep path",
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
      "95% completion rate across the AWS analytics learning path",
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
      "95% completion rate across the AWS analytics learning path",
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
      "Covered three consecutive platform releases maintaining exam validity and relevance",
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
      "Spanned two platform releases (New York, Orlando) with release-aligned content updates",
    ],
    externalUrl: "https://learning.servicenow.com/lxp/en/pages/now-learning-get-certified?id=amap_detail&achievement_id=5265835f1b63c514998555fa234bcbb4",
  },
  {
    slug: "servicenow-cta-program",
    title: "ServiceNow Certified Technical Architect Program",
    subtitle: "Advanced certification program for ServiceNow platform architects",
    type: "Training",
    description:
      "Co-developed the Certified Technical Architect (CTA) program at ServiceNow, an advanced certification covering architecture design, integration, security, and governance. Built using a flipped-classroom competency model that generated $1.6M ARR.",
    context:
      "ServiceNow needed a rigorous, scalable certification program for its most advanced technical practitioners. The CTA credential validates expertise across architecture, integration, security, and governance on the ServiceNow platform.",
    role: "Senior Technical Curriculum Developer: architected the flipped-classroom competency model, led a cross-functional team of 8-12 to deliver 36 modules in 4 months, and developed psychometrics-based certification exams with the global certification manager.",
    challenge:
      "Design an advanced certification program that credibly validates architectural expertise while scaling delivery across global audiences and generating measurable business impact.",
    approach:
      "Built a flipped-classroom model combining self-paced pre-work with live, scenario-based workshops. Developed psychometrics-based exam questions aligned to competency frameworks. Created train-the-trainer programs and GTM support for alliance partners to scale delivery globally.",
    impact: [
      "Generated $1.6M ARR through the training program",
      "Won 2022 CEdMA Innovation Award for blended learning program design",
      "Achieved 4.65/5 customer satisfaction through learner-centered design",
      "Delivered 36 modules in 4 months with a cross-functional team of 8-12",
      "Re-platformed 3-day ILT to 12-hour self-paced training, reducing learner time commitment by 50%",
      "Psychometrics-based certification exams adopted as the standard for CSM and FSM credentials",
      "Train-the-trainer programs scaled delivery capabilities across alliance partners globally",
    ],
    externalUrl: "https://learning.servicenow.com/expertprograms/en/pages/expert-program?id=snpx_home&type=CTA",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
