interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "border border-accent/20 bg-accent/10 text-accent"
      : "border border-border bg-surface-raised text-muted";

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide ${styles}`}
    >
      {children}
    </span>
  );
}
