import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "quiet";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base = "press-scale inline-flex items-center justify-center text-body font-semibold transition-colors duration-150";
  const variants = {
    primary: "rounded-full bg-accent px-6 py-3 text-on-accent hover-darken",
    outline: "rounded-full border border-ink px-6 py-3 text-ink hover:bg-canvas-deep",
    quiet: "text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
