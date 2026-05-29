"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-widest text-foreground uppercase transition-opacity hover:opacity-60"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="CM monogram"
          >
            <rect width="26" height="26" rx="5" fill="var(--accent)" />
            <text
              x="13"
              y="18"
              textAnchor="middle"
              fill="var(--background)"
              fontSize="11"
              fontWeight="700"
              fontFamily="var(--font-inter), system-ui, sans-serif"
              letterSpacing="0.05em"
            >
              CM
            </text>
          </svg>
          <span className="hidden sm:inline">Chester Manuel</span>
        </Link>

        <ul className="flex items-center gap-7">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-xs font-medium uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
