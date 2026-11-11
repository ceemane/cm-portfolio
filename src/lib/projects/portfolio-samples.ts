import type { Project, ProjectFile, ProjectImage } from "./data";

/**
 * Portfolio samples Chester can revise in place.
 * Drop replacement files in public/portfolio-samples/ and keep these filenames.
 * See README → "Replacing portfolio samples".
 */
const SAMPLE_DIR = "/portfolio-samples";

function preview(
  filename: string,
  alt: string,
  width: number,
  height: number,
): ProjectImage {
  return { src: `${SAMPLE_DIR}/${filename}`, alt, width, height };
}

function downloadable(
  filename: string,
  label: string,
  description: string,
  viewable = false,
): ProjectFile {
  return {
    label,
    description,
    href: `${SAMPLE_DIR}/${filename}`,
    downloadName: filename,
    viewable,
  };
}

export const portfolioSamples: Project[] = [
  {
    slug: "chatgpt-small-business-first-hour",
    title: "ChatGPT for Small Business: Your First Hour",
    subtitle:
      "A 60-minute beginner workshop, with the deck, facilitator guide, and worksheet",
    type: "Training",
    featured: true,
    disclaimer: "Portfolio sample · Not official OpenAI material",
    description:
      "I designed this hour for small-business owners and staff who are new to ChatGPT. Most of the time is hands-on: people write a real request, improve it, and check it before it reaches a customer.",
    context:
      "The room is owners and staff who have never used ChatGPT, or who have only tried it once or twice. Comfort with technology varies, and nobody needs a technical background. It runs in person or on a video call, usually with 8 to 30 people.",
    role:
      "I designed the session and wrote all three pieces: a 15-slide deck with speaker notes, a facilitator guide, and a participant worksheet. Someone else should be able to run the hour from these materials.",
    challenge:
      "In a first session, people often paste a vague request, trust whatever comes back, and sometimes type a customer's name or phone number into the chat. They need a real task from their own business, and a habit of checking the work.",
    approach:
      "By the end of the hour, learners can write a request with context, task, details, and format; improve a draft with follow-ups; check facts, promises, fit, and fairness; and keep private details out. More than half the time is typing. Practice ends with a 15-minute mini Jam in pairs, scored on a 12-point rubric, and a simple plan for the next 7 days.",
    impact: [
      "Learners leave with one piece of work they would actually send, plus a checklist they can reuse",
      "The deck, guide, and worksheet share the same timings, examples, and rubric, so the hour holds together",
      "The guide covers setup, accessibility, mixed experience levels, live troubleshooting, and when to bring in a specialist",
      "You can see the learning in the room: the request, the follow-ups, and the check",
    ],
    images: [
      preview(
        "chatgpt-for-small-business-title.webp",
        "Title slide: ChatGPT for Small Business, Your First Hour, a 60-minute hands-on workshop.",
        1467,
        825,
      ),
      preview(
        "chatgpt-for-small-business-jam-rubric.webp",
        "Mini Jam scoring slide with a 12-point rubric for the workshop challenge.",
        1467,
        825,
      ),
      preview(
        "chatgpt-for-small-business-facilitator-cover.webp",
        "Cover of the facilitator guide for the 60-minute small-business workshop.",
        935,
        1210,
      ),
      preview(
        "chatgpt-for-small-business-worksheet-rubric.webp",
        "Participant worksheet page with the mini Jam rubric and a before-you-send checklist.",
        935,
        1210,
      ),
    ],
    files: [
      downloadable(
        "chatgpt-for-small-business-workshop-deck.pptx",
        "Workshop deck",
        "15 slides with speaker notes for a 60-minute in-person or virtual session. Download the PowerPoint to present it.",
      ),
      downloadable(
        "chatgpt-for-small-business-facilitator-guide.pdf",
        "Facilitator guide",
        "10 pages: timings, setup, accessibility, how to read the room, privacy guidance, and how to teach people to check the work.",
        true,
      ),
      downloadable(
        "chatgpt-for-small-business-participant-worksheet.pdf",
        "Participant worksheet",
        "4 pages learners write on and take home, including the 15-minute mini Jam and the 12-point scoring rubric.",
        true,
      ),
    ],
  },
  {
    slug: "community-trainer-readiness-kit",
    title: "Community Trainer Readiness Kit",
    subtitle: "A path for community trainers who teach first-time AI users",
    type: "Training",
    featured: true,
    disclaimer: "Portfolio sample · Not official OpenAI material",
    description:
      "I put this together for program leads who prepare community trainers to teach beginner ChatGPT workshops. It shows what ready looks like, how someone gets there, and how an observer makes the call from what they actually see.",
    context:
      "These trainers teach small businesses, nonprofits, educators, and workforce programs. Program leads, mentors, and the trainers themselves all work from the same kit, so teach-back day does not introduce a new standard.",
    role:
      "I wrote the competency framework, the learning path, the teaching-readiness rubric, the teach-back observation form, and the credential assessment with its answer key.",
    challenge:
      "I wanted the credential to rest on teaching an observer can see: a live demo, coaching during practice, and how the trainer handles privacy and checking the work.",
    approach:
      "Five domains cover product fluency, facilitation, responsible use, adapting to the audience, and knowing when a question needs a specialist. The path is about 10 to 12 hours over three to five weeks: practice on real tasks, observe a live workshop, a train-the-trainer session, then a scenario assessment, a practical task, and a 20-minute teach-back. Ready means level 3 or higher on every rubric criterion. Responsible use is critical, and a gap there means the trainer is not ready yet.",
    impact: [
      "Program leads get one standard for recruiting, coaching, and the credential decision",
      "Candidates see the full rubric and the assessment format on day one",
      "The decision rests on observed teaching and a practical task, across about 10 to 12 hours",
      "This is a sample I designed for the portfolio. It is not an OpenAI credential, and OpenAI has not endorsed it",
    ],
    images: [
      preview(
        "community-trainer-readiness-kit-cover.webp",
        "Cover of the Community Trainer Readiness Kit, a train-the-trainer credential sample.",
        935,
        1210,
      ),
      preview(
        "community-trainer-readiness-kit-rubric.webp",
        "Teaching-readiness rubric with four levels, from Emerging to Mentor, and the readiness decision.",
        935,
        1210,
      ),
    ],
    files: [
      downloadable(
        "community-trainer-readiness-kit.pdf",
        "Readiness kit",
        "11 pages: how to use the kit, the competency framework, learning path, teaching-readiness rubric, teach-back observation form, and the credential assessment with answer key.",
        true,
      ),
    ],
  },
];
