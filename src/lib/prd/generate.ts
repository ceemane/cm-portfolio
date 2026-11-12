export type PrdInput = {
  idea: string;
  users: string;
  metric: string;
};

export type Story = {
  persona: string;
  want: string;
  why: string;
  criteria: string[];
};

export type PrdDocument = {
  title: string;
  filename: string;
  problem: string[];
  goals: string[];
  nonGoals: string[];
  users: string[];
  stories: Story[];
  requirements: string[];
  metrics: string[];
  mvp: string[];
  later: string[];
  risks: string[];
  questions: string[];
  launch: string[];
};

function clean(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function hash(value: string): number {
  let total = 0;
  for (const char of value) {
    total = (total * 33 + char.charCodeAt(0)) >>> 0;
  }
  return total;
}

function pick<T>(seed: number, items: T[]): T {
  return items[seed % items.length];
}

function sentence(value: string): string {
  const trimmed = clean(value).replace(/[.?!]+$/, "");
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function lowerFirst(value: string): string {
  const trimmed = clean(value).replace(/[.?!]+$/, "");
  if (!trimmed) return "";
  return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
}

function slugify(value: string): string {
  const slug = clean(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48)
    .replace(/-$/g, "");
  return slug || "draft";
}

function wantPhrase(idea: string): string {
  const task = lowerFirst(idea);
  if (/^(a|an|the)\b/i.test(task)) return task;
  return `to ${task}`;
}

function actor(users: string, idea: string): string {
  if (users) return lowerFirst(users);
  const seed = hash(idea);
  return pick(seed, [
    "the person doing this job",
    "a first-time user",
    "someone who has to do this without a specialist nearby",
  ]);
}

export function generatePrd(input: PrdInput): PrdDocument {
  const idea = clean(input.idea);
  const users = clean(input.users);
  const metric = clean(input.metric);
  const title = sentence(idea);
  const task = lowerFirst(idea);
  const want = wantPhrase(idea);
  const who = actor(users, idea);
  const seed = hash(`${idea}|${users}|${metric}`);

  const problem = [
    pick(seed, [
      `${title} still takes more effort than it should. People invent their own steps, and the quality depends on who is in the room.`,
      `People need ${task}, but the path is unclear. They lose time on setup, rework, and asking someone else what "good" looks like.`,
      `${title} matters, and today it is easy to start and hard to finish well. The result changes from one person to the next.`,
    ]),
    users
      ? `This draft treats ${users} as the first audience.`
      : "The first audience is not named yet, so the draft uses a general user until you name one.",
  ];

  const goals = [
    `Let ${who} complete ${task} without inventing the steps.`,
    "Make the result easy to review before anyone else relies on it.",
    metric
      ? `Give the team a way to see whether this is working: ${sentence(metric)}.`
      : "Name one success metric before build, so the team knows what to watch.",
  ];

  const nonGoals = [
    "Replacing every neighboring workflow in the first release.",
    "Automating judgment that a person still needs to make.",
    "Supporting every audience on day one.",
  ];

  const userLines = users
    ? [
        `Primary users: ${sentence(users)}.`,
        "They need the shortest path that still produces work they can stand behind.",
        "People who support them need a guide that matches the product, not a separate story.",
      ]
    : [
        `Primary users are the people who need ${task}.`,
        "Add a specific audience before you lock scope. A named group keeps the first version small.",
        "Supporters, trainers, and team leads are a second audience. They need to help someone else succeed.",
      ];

  const stories: Story[] = [
    {
      persona: sentence(who),
      want,
      why: "I can finish without guessing the order of the work",
      criteria: [
        `I can see that this flow is for ${task}.`,
        "I can start from an empty state and know the first step.",
        "I can tell when the main task is done.",
      ],
    },
    {
      persona: sentence(who),
      want: `to review the result before I share it`,
      why: "mistakes stay with me until I choose to pass them on",
      criteria: [
        "I can read the full result before it is shared.",
        "I can change a part I do not trust.",
        "Nothing is sent or published until I confirm it.",
      ],
    },
    {
      persona: "A person supporting the user",
      want: `to coach someone through ${task}`,
      why: "help does not depend on me remembering every step",
      criteria: [
        "I can follow a short guide that matches the screens.",
        "I can point to one worked example.",
        "I can see the question the user is stuck on.",
      ],
    },
  ];

  const requirements = [
    `The main path covers ${task} and no extra jobs.`,
    "The flow works on a phone and on a desktop browser.",
    "Empty, loading, and error states say what to do next.",
    "A person can undo or edit the last important action.",
    "The product uses plain language for labels, errors, and the done state.",
    users
      ? `Examples and empty states speak to ${users}.`
      : "Examples stay generic until a first audience is named.",
  ];

  const metrics = metric
    ? [
        `Primary metric: ${sentence(metric)}.`,
        "Guardrail: support contacts per completed task do not rise after launch.",
        "Watch completion of the main path in the first session.",
        "Read the first 10 pieces of feedback before you widen access.",
      ]
    : [
        `Primary metric is not set. A starting point is the share of users who finish ${task} in the first session.`,
        "Guardrail: time to a trusted result does not get longer than the old way.",
        "Write the real metric in a sentence a sponsor can repeat.",
        "Do not call the launch a success until that metric has an owner and a review date.",
      ];

  const mvp = [
    `One path for ${task}.`,
    users ? `One audience: ${sentence(users)}.` : "One audience, chosen before build.",
    "A person can finish, review, and keep the result.",
    "A short start guide and one worked example.",
  ];

  const later = [
    "Saved history and sharing with a team.",
    "More than one audience, with examples for each.",
    "Reminders, permissions, and admin tools.",
    "Deeper automation after the manual path is trusted.",
  ];

  const risks = [
    pick(seed >> 3, [
      "The idea is broad, so the first build may try to cover too many cases.",
      "People may keep the old workaround if the first version feels slower.",
      "A polished screen can hide a missing step. Test the whole path, not one screen.",
    ]),
    metric
      ? "The metric may move for reasons outside this feature. Agree on what else you will check."
      : "Without a metric, the team can ship and still argue about whether it helped.",
    "If people cannot see why a result looks the way it does, they may not trust it.",
  ];

  const questions = [
    users
      ? `Who inside ${users} is explicitly out of the first release?`
      : "Who is the first audience, and who is out of scope for now?",
    `What must someone already know before they start ${task}?`,
    "What does a bad result look like, and who is allowed to fix it?",
    "What will you refuse to automate in version one?",
  ];

  const launch = [
    "Pilot with a small group before you open it widely.",
    "Name one owner for questions during the first two weeks.",
    `Write a one-page start guide that uses the same words as the product for ${task}.`,
    "Put one worked example where people will see it on the first run.",
    "Give supporters a short practice run before they help anyone else.",
    "Collect the first questions and fold the repeated ones into the guide.",
    metric
      ? `Review "${sentence(metric)}" on a set date before you expand access.`
      : "Set the success metric and a review date before you expand access.",
  ];

  return {
    title,
    filename: `prd-${slugify(idea)}.md`,
    problem,
    goals,
    nonGoals,
    users: userLines,
    stories,
    requirements,
    metrics,
    mvp,
    later,
    risks,
    questions,
    launch,
  };
}

function bullets(items: string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

export function prdToMarkdown(doc: PrdDocument): string {
  const stories = doc.stories
    .map((story, index) => {
      const criteria = story.criteria.map((item) => `  - ${item}`).join("\n");
      return [
        `### ${index + 1}. ${story.persona}`,
        "",
        `As ${story.persona.charAt(0).toLowerCase()}${story.persona.slice(1)}, I want ${story.want}, so that ${story.why}.`,
        "",
        "Acceptance criteria:",
        "",
        criteria,
      ].join("\n");
    })
    .join("\n\n");

  return [
    `# PRD: ${doc.title}`,
    "",
    "## Problem",
    "",
    doc.problem.join("\n\n"),
    "",
    "## Goals and non-goals",
    "",
    "### Goals",
    "",
    bullets(doc.goals),
    "",
    "### Non-goals",
    "",
    bullets(doc.nonGoals),
    "",
    "## Users",
    "",
    doc.users.join("\n\n"),
    "",
    "## User stories",
    "",
    stories,
    "",
    "## Requirements",
    "",
    bullets(doc.requirements),
    "",
    "## Success metrics",
    "",
    bullets(doc.metrics),
    "",
    "## MVP vs later scope",
    "",
    "### MVP",
    "",
    bullets(doc.mvp),
    "",
    "### Later",
    "",
    bullets(doc.later),
    "",
    "## Risks and open questions",
    "",
    "### Risks",
    "",
    bullets(doc.risks),
    "",
    "### Open questions",
    "",
    bullets(doc.questions),
    "",
    "## Launch and enablement notes",
    "",
    bullets(doc.launch),
    "",
  ].join("\n");
}
