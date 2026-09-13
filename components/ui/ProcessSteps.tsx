"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const STEPS = [
  { label: "Inspect", copy: "Identify the mold, its moisture source, and how far it's spread." },
  { label: "Contain", copy: "Seal off the work area so spores can't travel during removal." },
  { label: "Remove", copy: "Affected materials removed and treated to industry protocol." },
  { label: "Verify", copy: "Confirm the space meets a clean standard before calling it done." },
];

function Checkmark({ isDrawn, delayMs }: { isDrawn: boolean; delayMs: number }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle cx="14" cy="14" r="13" stroke="#00875E" strokeWidth="1.5" />
      <path
        d="M8 14.5L12 18.5L20 9.5"
        stroke="#00875E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`checkmark-path ${isDrawn ? "is-drawn" : ""}`}
        style={{ transitionDelay: `${delayMs}ms` }}
      />
    </svg>
  );
}

export default function ProcessSteps() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="grid gap-8 md:grid-cols-4 md:gap-6">
      {STEPS.map((step, i) => (
        <div
          key={step.label}
          className="rounded-card border border-rule bg-surface p-6 shadow-soft"
        >
          <div className="flex items-center gap-3">
            <Checkmark isDrawn={isVisible} delayMs={i * 150} />
            <h3 className="font-display text-h3 font-semibold text-text-primary">{step.label}</h3>
          </div>
          <p className="mt-3 text-body text-text-secondary">{step.copy}</p>
        </div>
      ))}
    </div>
  );
}
