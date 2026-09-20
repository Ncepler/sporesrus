"use client";

import { useState } from "react";
import Image from "next/image";

type Photo = { src: string; alt: string };

type BeforeAfterSliderProps =
  | { illustrative: true; beforeLabel?: string; afterLabel?: string; before?: never; after?: never }
  | { illustrative?: false; before: Photo; after: Photo; beforeLabel?: never; afterLabel?: never };

/**
 * Draggable before/after comparison. Built on a native range input for free
 * keyboard + touch + screen-reader support, rather than hand-rolled pointer
 * events. Only ever mounted with real job photos, or explicitly in
 * `illustrative` mode (see SHOW_ILLUSTRATIVE_COMPARISON in lib/jobTypes.ts)
 * — callers decide whether to render it at all; this component never
 * fabricates a "photo" on its own.
 *
 * spore is used here — and only here plus the health-page warning callout —
 * for the "before" (contaminated) side, per the site's color rule.
 */
export default function BeforeAfterSlider(props: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const illustrative = props.illustrative === true;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-slider border border-line shadow-soft">
      {illustrative && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-canvas/90 px-3 py-1 text-meta font-semibold text-ink-soft">
          Illustration
        </span>
      )}

      {/* After (clean) — full-bleed base layer */}
      <div
        className={illustrative ? "absolute inset-0 flex items-end bg-gradient-to-br from-[#DDEEE6] to-canvas p-4" : "absolute inset-0"}
        role={illustrative ? "img" : undefined}
        aria-label={illustrative ? props.afterLabel ?? "After remediation, clean" : undefined}
      >
        {!illustrative && <Image src={props.after.src} alt={props.after.alt} fill sizes="(min-width: 768px) 640px, 100vw" className="object-cover" />}
        <span className="relative rounded-full bg-accent px-3 py-1 text-meta font-semibold text-on-accent">
          After
        </span>
      </div>

      {/* Before (contaminated) — clipped to the slider position */}
      <div
        className={
          illustrative
            ? "absolute inset-0 flex items-end bg-gradient-to-br from-[#DED9A8] to-[#F0EED0] p-4"
            : "absolute inset-0 flex items-end p-4"
        }
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        role={illustrative ? "img" : undefined}
        aria-label={illustrative ? props.beforeLabel ?? "Before remediation, contaminated" : undefined}
      >
        {!illustrative && (
          <Image
            src={props.before.src}
            alt={props.before.alt}
            fill
            sizes="(min-width: 768px) 640px, 100vw"
            className="object-cover"
          />
        )}
        <span className="relative rounded-full bg-spore px-3 py-1 text-meta font-semibold text-on-accent">
          Before
        </span>
      </div>

      {/* Divider handle */}
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-canvas" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-canvas shadow-soft">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D1B18" strokeWidth="2" aria-hidden>
            <path d="M8 6L2 12l6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
