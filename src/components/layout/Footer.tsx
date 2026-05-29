export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-medium tracking-widest uppercase text-muted-subtle">
          Chester Manuel
        </p>
        <p className="text-xs text-muted-subtle">
          &copy; {new Date().getFullYear()} &mdash; Private &amp; Confidential
        </p>
      </div>
    </footer>
  );
}
