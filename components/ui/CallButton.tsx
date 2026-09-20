import { PHONE_DISPLAY, PHONE_SET, PHONE_TEL } from "@/lib/phone";

type CallButtonProps = {
  /** Full label at normal width. */
  label?: string;
  /** Shorter label for tight spaces (nav, mobile bar). */
  compactLabel?: string;
  /** Always use compactLabel, regardless of viewport (header/bar use). */
  compact?: boolean;
  /** Show the formatted number next to the label when there's room. */
  showNumber?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

/**
 * The site's one conversion action: a tel: call pill. Renders nothing at
 * all — no bracket text, no dead link — until NEXT_PUBLIC_PHONE is set.
 */
export default function CallButton({
  label = "Call to Schedule an Inspection",
  compactLabel = "Call to Schedule",
  compact = false,
  showNumber = false,
  size = "md",
  className = "",
}: CallButtonProps) {
  if (!PHONE_SET) return null;

  const sizing =
    size === "lg" ? "px-8 py-4 text-body" : size === "sm" ? "px-5 py-2.5 text-small" : "px-6 py-3 text-body";

  return (
    <a
      href={PHONE_TEL!}
      className={`press-scale hover-darken inline-flex items-center justify-center gap-2.5 rounded-full bg-accent font-semibold text-on-accent transition-colors duration-150 ${sizing} ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
        <path
          d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.8c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
          fill="currentColor"
        />
      </svg>
      {compact ? (
        <span>{compactLabel}</span>
      ) : (
        <>
          <span className="hidden sm:inline">{label}</span>
          <span className="sm:hidden">{compactLabel}</span>
        </>
      )}
      {showNumber && <span className="tabular-nums opacity-90">{PHONE_DISPLAY}</span>}
    </a>
  );
}
