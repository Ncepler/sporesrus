"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { HOUSE_ZONES } from "@/lib/houseZones";

const VIEWBOX = { w: 720, h: 520 };

export default function HouseCrossSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = HOUSE_ZONES[activeIndex];

  const select = (index: number, { fromKeyboard = false } = {}) => {
    setAnimated(!fromKeyboard);
    setActiveIndex(index);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = HOUSE_ZONES.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = activeIndex === last ? 0 : activeIndex + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = activeIndex === 0 ? last : activeIndex - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;

    if (next !== null) {
      e.preventDefault();
      select(next, { fromKeyboard: true });
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <div className="grid min-w-0 gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      <div className="min-w-0">
        {/* Mobile: horizontally scrollable segmented row. Desktop: fits as one row. */}
        <div
          role="tablist"
          aria-label="House areas"
          onKeyDown={onKeyDown}
          className="zone-tablist mb-4 flex min-w-0 gap-2 overflow-x-auto pb-1 lg:overflow-visible"
        >
          {HOUSE_ZONES.map((zone, i) => (
            <button
              key={zone.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`zone-tab-${zone.id}`}
              aria-selected={activeIndex === i}
              aria-controls={`zone-panel-${zone.id}`}
              tabIndex={activeIndex === i ? 0 : -1}
              onClick={() => select(i)}
              className={`zone-tab tap-target-44 press-scale shrink-0 rounded-full border px-4 py-2 text-small font-semibold transition-colors duration-150 ${
                activeIndex === i
                  ? "border-accent bg-accent text-on-accent"
                  : "border-line bg-canvas text-ink-soft hover:text-ink"
              }`}
            >
              {zone.label}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-card border border-line bg-canvas-deep">
          <svg viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`} className="h-full w-full" aria-hidden focusable="false">
            <g fill="none" stroke="var(--ink)" strokeOpacity="0.5" strokeWidth="1">
              {/* Roof */}
              <polygon points="360,50 100,180 620,180" />
              {/* Walls */}
              <line x1="140" y1="180" x2="140" y2="500" />
              <line x1="580" y1="180" x2="580" y2="500" />
              {/* Floor dividers */}
              <line x1="140" y1="180" x2="580" y2="180" />
              <line x1="140" y1="320" x2="580" y2="320" />
              <line x1="140" y1="450" x2="580" y2="450" />
              {/* Bathroom room */}
              <rect x="460" y="190" width="110" height="120" />
              {/* HVAC trunk + branches */}
              <rect x="200" y="155" width="240" height="18" />
              <line x1="260" y1="173" x2="260" y2="320" strokeDasharray="4 4" />
              <line x1="380" y1="173" x2="380" y2="320" strokeDasharray="4 4" />
              {/* Crawlspace (stepped, lower clearance) */}
              <path d="M580,450 L580,430 L660,430 L660,500 L580,500" />
              {/* Basement + foundation footing */}
              <line x1="140" y1="500" x2="580" y2="500" strokeWidth="1.5" />
              {[160, 220, 280, 340, 400, 460, 520].map((x) => (
                <line key={x} x1={x} y1="500" x2={x - 8} y2="512" />
              ))}
            </g>

            {/* Active zone outline overlay */}
            {HOUSE_ZONES.map((zone, i) => {
              const isActive = i === activeIndex;
              const shape =
                zone.outline.type === "rect" ? (
                  <rect
                    x={zone.outline.x}
                    y={zone.outline.y}
                    width={zone.outline.w}
                    height={zone.outline.h}
                    rx={zone.outline.rx ?? 6}
                  />
                ) : (
                  <polygon points={zone.outline.points} />
                );
              return (
                <g
                  key={zone.id}
                  fill="none"
                  stroke={isActive ? "var(--accent)" : "transparent"}
                  strokeWidth={isActive ? 2.5 : 0}
                  className="zone-outline"
                  style={{ transition: animated ? undefined : "none" }}
                >
                  {shape}
                </g>
              );
            })}

            {/* Moisture-source marker for the active zone */}
            <g
              transform={`translate(${active.markerAt.x} ${active.markerAt.y})`}
              stroke="var(--spore)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M0,-12 L6,-2 L-4,4 L4,14"
                className={`moisture-marker is-drawn`}
                style={{ transition: animated ? undefined : "none" }}
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="relative min-h-[220px]">
        {HOUSE_ZONES.map((zone, i) => (
          <div
            key={zone.id}
            id={`zone-panel-${zone.id}`}
            role="tabpanel"
            aria-labelledby={`zone-tab-${zone.id}`}
            hidden={activeIndex !== i}
            className="transition-opacity duration-300"
            style={{ opacity: activeIndex === i ? 1 : 0 }}
          >
            <h3 className="font-display text-h3 font-semibold text-ink">{zone.label}</h3>
            <p className="mt-3 measure text-body text-ink-soft">{zone.copy}</p>
            <Link
              href={zone.href}
              className="mt-4 inline-flex items-center gap-1 text-small font-semibold text-accent hover:underline"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
