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
      className={`group block rounded-2xl border border-border bg-card p-6 transition-all duration-400 hover:border-accent/30 hover:bg-card-hover hover:shadow-[0_0_40px_rgba(245,200,66,0.07)] ${className}`}
    >
      {children}
    </Link>
  );
}
