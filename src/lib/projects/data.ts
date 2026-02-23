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
      "Published on AWS Skill Builder as the official ML Engineer Associate certification prep path",
      "Spans 13 courses covering the full certification exam blueprint",
      "Integrated hands-on labs provide practical experience with SageMaker, Bedrock, and other ML services",
      "Scaffolded design reduces learner drop-off across multi-week study plans",
    ],
    externalUrl: "https://skillbuilder.aws/learning-plan/AY5A6VN52B/aws-ml-engineer-associate-learning-plan-includes-labs/C21UPEK6R9",
  },
  {
    slug: "aws-jam-user-guide",
    title: "AWS Jam Platform",
    subtitle: "Content management and documentation for AWS's gamified learning platform",
    type: "Training",
    description:
      "Lead content management for AWS Jam, a gamified hands-on learning platform serving 35K+ learners. Oversaw challenge development, content quality, documentation, and AI-powered automation across security, AI/ML, and DevOps domains.",
    context:
      "AWS Jam is a gamified, hands-on learning platform where customers and partners solve real AWS challenges in live sandbox environments. The platform hosts 230+ challenges and features at marquee events like AWS re:Invent (60K+ attendees).",
    role: "Technical Content Manager: lead learning program management, provide instructional design direction to a cross-functional team of 40 content developers, and scale a distributed learning community of 400+ content creators through a Center of Excellence program.",
    challenge:
      "Scale content quality and velocity across 230+ challenges and a growing creator community while maintaining top-10% AWS performance metrics and 4.38/5 learner satisfaction.",
    approach:
      "Built a Center of Excellence program to elevate 400+ content creators from baseline to top-10% quality. Architected AI-powered automation (Jam Challenge Manager reducing process time by 98%, Content Proposal Automation cutting approval from 2 months to 1 day). Led development of 50 new challenges for re:Invent 2025 collaborating with 40 SMEs across Generative AI, Security, and DevOps.",
    impact: [
      "35K+ learners served with 4.38/5 satisfaction, top-10% AWS performance metrics",
      "400+ content creators elevated through Center of Excellence program",
      "50 new challenges developed for AWS re:Invent 2025 (60K+ attendees)",
      "98% process efficiency gain through AI-powered Jam Challenge Manager automation",
      "Content Proposal Automation reduced approval cycle from 2 months to 1 day",
      "Managed security program for 230+ challenges preventing fraud and abuse",
    ],
    pdfFile: "aws-jam-user-guide.pdf",
    externalUrl: "https://jam.aws.com/",
  },
  {
    slug: "ml-engineer-modeling-approach",
    title: "ML Engineer Associate: Choose a Modeling Approach",
    subtitle: "AWS Certification prep course module (2.1)",
    type: "Course",
    description:
      "Course module preparing learners to select appropriate ML modeling approaches, covering supervised/unsupervised learning, model selection criteria, and AWS SageMaker integration.",
    context:
      "Part of the AWS Machine Learning Engineer Associate certification preparation curriculum. Learners needed structured guidance on model selection: a notoriously abstract topic.",
    role: "Instructional Designer: designed learning objectives, content structure, assessments, and visual aids.",
    challenge:
      "Make abstract ML model selection concepts concrete and actionable for engineers preparing for certification, many of whom had limited ML background.",
    approach:
      "Developed decision-tree frameworks for model selection. Created scenario-based examples using real AWS services. Aligned all content to exam objectives while building genuine understanding.",
    impact: [
      "Core module in the ML Engineer Associate certification prep path",
      "Decision-tree framework adopted by learners as a practical job aid",
      "Bridged the gap between theoretical ML concepts and AWS service implementation",
    ],
    pdfFile: "aws-ml-engineer-associate-2-1-choose-a-modeling-approach.pdf",
  },
  {
    slug: "ml-engineer-train-models",
    title: "ML Engineer Associate: Train Models",
    subtitle: "AWS Certification prep course module (2.2)",
    type: "Course",
    description:
      "Course module on model training workflows including data preparation, hyperparameter tuning, SageMaker training jobs, and evaluation metrics.",
    context:
      "Sequential follow-up to the modeling approach module. Learners needed hands-on training guidance aligned with both certification objectives and real-world AWS workflows.",
    role: "Instructional Designer: designed end-to-end learning experience including labs, knowledge checks, and visual process flows.",
    challenge:
      "Balance certification exam coverage with practical training skills. Many learners had never run a training job in SageMaker.",
    approach:
      "Built a scaffolded learning path from basic training concepts to complex multi-model tuning scenarios. Used annotated SageMaker console walkthroughs and code examples to reduce cognitive load.",
    impact: [
      "Enabled learners to configure and run SageMaker training jobs independently",
      "Scaffolded approach reduced drop-off in the certification prep pipeline",
      "Integrated with hands-on labs for experiential learning reinforcement",
    ],
    pdfFile: "aws-ml-engineer-associate-2-2-train-models.pdf",
  },
  {
    slug: "analytics-fundamentals-part-1",
    title: "Fundamentals of Analytics on AWS: Part 1",
    subtitle: "Foundation course on AWS analytics services",
    type: "Course",
    description:
      "Introductory course covering the AWS analytics ecosystem, data lake architecture, and foundational services including S3, Glue, and Athena.",
    context:
      "AWS analytics services were growing rapidly, but customers lacked a foundational course that connected the services into a coherent learning journey.",
    role: "Instructional Designer: designed curriculum architecture, wrote content, and created assessment strategy.",
    challenge:
      "Create a foundation-level course that gives learners a mental model of the entire AWS analytics ecosystem without overwhelming them with service-specific details.",
    approach:
      "Designed a 'zoom in/zoom out' structure: start with the big picture data pipeline, then explore each stage with the relevant AWS service. Used consistent visual metaphors throughout.",
    impact: [
      "Foundational analytics course in the AWS training catalog",
      "Data pipeline mental model reused across advanced analytics courses",
      "Served as prerequisite for specialized analytics certifications",
    ],
    pdfFile: "fundamentals-of-analytics-on-aws-part-1.pdf",
  },
  {
    slug: "analytics-fundamentals-part-2",
    title: "Fundamentals of Analytics on AWS: Part 2",
    subtitle: "Advanced analytics services and architectures",
    type: "Course",
    description:
      "Continuation course covering advanced analytics services including Redshift, EMR, Kinesis, and QuickSight, plus end-to-end architecture patterns.",
    context:
      "Building on Part 1, this course needed to bridge foundational knowledge to real-world analytics architectures used in production environments.",
    role: "Instructional Designer: designed advanced content progression and architecture case studies.",
    challenge:
      "Elevate learners from foundational understanding to architectural thinking: helping them see how individual services compose into production analytics pipelines.",
    approach:
      "Used progressive complexity: started with individual service deep-dives, then composed them into reference architectures.",
    impact: [
      "Completed the analytics fundamentals learning path",
      "Reference architecture patterns adopted by AWS Solutions Architects for customer workshops",
      "Reference architecture exercises validated real-world design skills",
    ],
    pdfFile: "fundamentals-of-analytics-on-aws-part-2.pdf",
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
      "Psychometrics-based certification exams adopted as the standard for CSM and FSM credentials",
      "Train-the-trainer programs scaled delivery capabilities across alliance partners globally",
    ],
    externalUrl: "https://learning.servicenow.com/expertprograms/en/pages/expert-program?id=snpx_home&type=CTA",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
