import Link from "next/link";

interface CardProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ href, children, className = "" }: CardProps) {
  return (
    <Link
      href={href}
      className={`group block rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg ${className}`}
    >
      {children}
    </Link>
  );
}
