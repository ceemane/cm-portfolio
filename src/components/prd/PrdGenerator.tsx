"use client";

import { useId, useState } from "react";
import { generatePrd, prdToMarkdown, type PrdDocument } from "@/lib/prd/generate";

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-subtle focus:border-accent";

const primaryClass =
  "inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-all hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40";

const secondaryClass =
  "inline-flex items-center justify-center rounded-full border border-border bg-surface-raised px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-accent/40 hover:text-accent";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border/60 py-6 first:border-t-0 first:pt-0">
      <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">{title}</h3>
      {children}
    </section>
  );
}

function PrdView({ doc }: { doc: PrdDocument }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{doc.title}</h2>
      <Section title="Problem">
        <div className="space-y-3">
          {doc.problem.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-muted">
              {line}
            </p>
          ))}
        </div>
      </Section>
      <Section title="Goals and non-goals">
        <p className="mb-2 text-sm font-medium text-foreground">Goals</p>
        <BulletList items={doc.goals} />
        <p className="mb-2 mt-5 text-sm font-medium text-foreground">Non-goals</p>
        <BulletList items={doc.nonGoals} />
      </Section>
      <Section title="Users">
        <div className="space-y-3">
          {doc.users.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-muted">
              {line}
            </p>
          ))}
        </div>
      </Section>
      <Section title="User stories">
        <div className="space-y-5">
          {doc.stories.map((story, index) => (
            <article key={story.want} className="rounded-xl border border-border bg-background p-4">
              <p className="text-sm font-medium text-foreground">
                {index + 1}. {story.persona}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                As {story.persona.charAt(0).toLowerCase()}
                {story.persona.slice(1)}, I want {story.want}, so that {story.why}.
              </p>
              <p className="mb-2 mt-4 text-xs font-medium uppercase tracking-[0.16em] text-accent">
                Acceptance criteria
              </p>
              <BulletList items={story.criteria} />
            </article>
          ))}
        </div>
      </Section>
      <Section title="Requirements">
        <BulletList items={doc.requirements} />
      </Section>
      <Section title="Success metrics">
        <BulletList items={doc.metrics} />
      </Section>
      <Section title="MVP vs later scope">
        <p className="mb-2 text-sm font-medium text-foreground">MVP</p>
        <BulletList items={doc.mvp} />
        <p className="mb-2 mt-5 text-sm font-medium text-foreground">Later</p>
        <BulletList items={doc.later} />
      </Section>
      <Section title="Risks and open questions">
        <p className="mb-2 text-sm font-medium text-foreground">Risks</p>
        <BulletList items={doc.risks} />
        <p className="mb-2 mt-5 text-sm font-medium text-foreground">Open questions</p>
        <BulletList items={doc.questions} />
      </Section>
      <Section title="Launch and enablement notes">
        <BulletList items={doc.launch} />
      </Section>
    </div>
  );
}

export function PrdGenerator() {
  const ideaId = useId();
  const usersId = useId();
  const metricId = useId();
  const [idea, setIdea] = useState("");
  const [users, setUsers] = useState("");
  const [metric, setMetric] = useState("");
  const [doc, setDoc] = useState<PrdDocument | null>(null);
  const [markdown, setMarkdown] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  function generate(next?: { idea: string; users: string; metric: string }) {
    const value = next ?? { idea, users, metric };
    if (!value.idea.trim()) {
      setError("Add a feature idea first.");
      setDoc(null);
      setMarkdown("");
      return;
    }
    const draft = generatePrd(value);
    setError("");
    setDoc(draft);
    setMarkdown(prdToMarkdown(draft));
    setCopied(false);
  }

  async function copyMarkdown() {
    if (!markdown) return;
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
    } catch {
      setCopied(false);
      setError("Copy did not work in this browser. Use Download .md instead.");
    }
  }

  function downloadMarkdown() {
    if (!markdown || !doc) return;
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = doc.filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function useExample() {
    const example = {
      idea: "A shared checklist for a first-time facilitator running a 60-minute workshop",
      users: "Community trainers who are new to the session",
      metric: "Share of facilitators who finish the checklist before the session starts",
    };
    setIdea(example.idea);
    setUsers(example.users);
    setMetric(example.metric);
    generate(example);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
      <form
        className="rounded-2xl border border-border bg-card p-5 sm:p-6"
        onSubmit={(event) => {
          event.preventDefault();
          generate();
        }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Your idea</p>
        <div className="mt-5">
          <label htmlFor={ideaId} className="text-sm font-medium text-foreground">
            Feature idea
          </label>
          <textarea
            id={ideaId}
            required
            rows={4}
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
            placeholder="What should someone be able to do?"
            className={fieldClass}
          />
        </div>
        <div className="mt-5">
          <label htmlFor={usersId} className="text-sm font-medium text-foreground">
            Target users <span className="font-normal text-muted-subtle">(optional)</span>
          </label>
          <textarea
            id={usersId}
            rows={2}
            value={users}
            onChange={(event) => setUsers(event.target.value)}
            placeholder="Who is this for first?"
            className={fieldClass}
          />
        </div>
        <div className="mt-5">
          <label htmlFor={metricId} className="text-sm font-medium text-foreground">
            Success metric <span className="font-normal text-muted-subtle">(optional)</span>
          </label>
          <textarea
            id={metricId}
            rows={2}
            value={metric}
            onChange={(event) => setMetric(event.target.value)}
            placeholder="How will you know it helped?"
            className={fieldClass}
          />
        </div>
        {error ? <p className="mt-4 text-sm text-accent">{error}</p> : null}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button type="submit" className={primaryClass} disabled={!idea.trim()}>
            Generate
          </button>
          <button type="button" className={secondaryClass} onClick={useExample}>
            Use an example
          </button>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted-subtle">
          This runs in your browser. The draft is a template, not a model call. Nothing you type is sent anywhere.
        </p>
      </form>

      <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
        {doc ? (
          <>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" className={secondaryClass} onClick={copyMarkdown}>
                {copied ? "Copied" : "Copy Markdown"}
              </button>
              <button type="button" className={secondaryClass} onClick={downloadMarkdown}>
                Download .md
              </button>
            </div>
            <PrdView doc={doc} />
          </>
        ) : (
          <div className="flex min-h-64 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Draft</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                Generate a draft to see the problem, goals, stories, requirements, scope, risks, and launch notes.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
