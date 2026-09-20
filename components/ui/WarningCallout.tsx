import type { ReactNode } from "react";

/**
 * Spore-tinted callout for the one or two places /mold-and-your-health
 * needs a hazard-adjacent note ("if you're experiencing X, talk to a
 * doctor" / "if you see visible growth, schedule an inspection").
 * Deliberately contained, never full-bleed, never styled to alarm.
 */
export default function WarningCallout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-card border border-spore/30 bg-spore/10 p-6">
      <p className="text-body text-ink">{children}</p>
    </div>
  );
}
