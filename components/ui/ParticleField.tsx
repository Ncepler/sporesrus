import type { CSSProperties } from "react";

// Fixed (not randomized) particle configs — avoids client/server hydration
// mismatches and keeps this a pure-CSS animation (no JS animation loop, no
// canvas), so it stays cheap on mobile. Per CLAUDE.md §6.4: max 8-10
// particles, low opacity 10-20%, slow ~20s drift, subtle "clearing air" feel.
const PARTICLES: Array<{
  left: string;
  top: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
}> = [
  { left: "8%", top: "70%", size: 10, opacity: 0.16, duration: 22, delay: 0, driftX: 30, driftY: -90 },
  { left: "18%", top: "40%", size: 6, opacity: 0.12, duration: 26, delay: 3, driftX: -20, driftY: -70 },
  { left: "30%", top: "80%", size: 8, opacity: 0.18, duration: 20, delay: 1.5, driftX: 15, driftY: -110 },
  { left: "45%", top: "55%", size: 5, opacity: 0.1, duration: 24, delay: 5, driftX: -35, driftY: -80 },
  { left: "58%", top: "75%", size: 9, opacity: 0.15, duration: 21, delay: 2, driftX: 25, driftY: -95 },
  { left: "68%", top: "35%", size: 6, opacity: 0.14, duration: 25, delay: 4.5, driftX: -15, driftY: -60 },
  { left: "80%", top: "65%", size: 7, opacity: 0.17, duration: 23, delay: 1, driftX: 20, driftY: -100 },
  { left: "90%", top: "45%", size: 5, opacity: 0.11, duration: 27, delay: 6, driftX: -25, driftY: -75 },
  { left: "50%", top: "88%", size: 8, opacity: 0.13, duration: 19, delay: 3.5, driftX: 10, driftY: -85 },
];

export default function ParticleField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block"
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle absolute rounded-full bg-accent"
          style={
            {
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              "--particle-opacity": p.opacity,
              "--drift-duration": `${p.duration}s`,
              "--drift-x": `${p.driftX}px`,
              "--drift-y": `${p.driftY}px`,
              animationDelay: `${p.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
