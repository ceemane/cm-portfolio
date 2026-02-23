export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Chester Manuel. This portfolio is
          private and confidential.
        </p>
      </div>
    </footer>
  );
}
