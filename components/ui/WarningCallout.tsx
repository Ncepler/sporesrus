import type { ReactNode } from "react";

/**
 * accent-2-tinted callout — used sparingly, only on /mold-and-your-health,
 * per CLAUDE.md §6.1/§7. Deliberately contained (not full-bleed) and never
 * styled to read as alarmist.
 */
export default function WarningCallout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-card border border-accent-2/30 bg-accent-2/10 p-6">
      <p className="text-body text-text-primary">{children}</p>
    </div>
  );
}
