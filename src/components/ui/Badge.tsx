interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "bg-accent/10 text-accent"
      : "bg-foreground/5 text-muted";

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${styles}`}
    >
      {children}
    </span>
  );
}
