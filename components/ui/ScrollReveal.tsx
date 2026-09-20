"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

type ScrollRevealProps = ComponentPropsWithoutRef<"div"> & {
  /** Stagger successive reveals, e.g. 100 for 100ms of extra delay. */
  delayMs?: number;
};

export default function ScrollReveal({ children, className = "", delayMs = 0, style, ...rest }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms`, ...style } : style}
      {...rest}
    >
      {children}
    </div>
  );
}
