"use client";

import type { ReactNode } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger successive reveals, e.g. 100 for 100ms of extra delay. */
  delayMs?: number;
};

export default function ScrollReveal({ children, className = "", delayMs = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
