"use client";

import { useState } from "react";

type BeforeAfterSliderProps = {
  /** Accessible description of the contaminated-state placeholder (no real photo yet). */
  beforeDescription: string;
  /** Accessible description of the clean-state placeholder. */
  afterDescription: string;
};

/**
 * Draggable before/after comparison. Built on a native range input for free
 * keyboard + touch + screen-reader support, rather than hand-rolled pointer
 * events. No real job photos exist yet, so both sides render as labeled
 * gradient placeholders in the site's tokens rather than stock imagery.
 *
 * accent-2 is used here — and only here plus the health-page warning callout
 * — for the "before" (contaminated) side, per CLAUDE.md §6.1.
 */
export default function BeforeAfterSlider({ beforeDescription, afterDescription }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-slider border border-rule shadow-soft">
      {/* After (clean) — full-bleed base layer */}
      <div
        className="absolute inset-0 flex items-end bg-gradient-to-br from-[#DDEEE6] to-[#F7F9F8] p-4"
        role="img"
        aria-label={afterDescription}
      >
        <span className="rounded-full bg-accent px-3 py-1 text-meta font-semibold text-on-accent">
          After
        </span>
      </div>

      {/* Before (contaminated) — clipped to the slider position */}
      <div
        className="absolute inset-0 flex items-end bg-gradient-to-br from-[#E6C9A6] to-[#F3E3CE] p-4"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        role="img"
        aria-label={beforeDescription}
      >
        <span className="rounded-full bg-accent-2 px-3 py-1 text-meta font-semibold text-on-accent">
          Before
        </span>
      </div>

      {/* Divider handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-bg"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bg shadow-soft">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#121815" strokeWidth="2" aria-hidden>
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
