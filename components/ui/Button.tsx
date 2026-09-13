import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-body font-semibold transition-colors duration-150";
  const variants = {
    primary: "bg-accent text-on-accent hover:bg-accent-hover",
    outline: "border border-text-primary text-text-primary hover:bg-surface",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
