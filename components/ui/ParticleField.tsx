import type { CSSProperties } from "react";

// Fixed (not randomized) particle configs — avoids client/server hydration
// mismatches and keeps this a pure-CSS animation (no JS animation loop, no
// canvas), so it stays cheap on mobile. Per CLAUDE.md §6.4 (revised
// 2026-09-13 per Noah): soft, low-opacity green particles drifting up,
// gently rotating, and fading — shaped like organic spore silhouettes
// (irregular blobs, a few with tiny satellite dots suggesting a short spore
// chain) rather than perfect circles. Still entirely abstract and calm —
// never a textured, realistic mold-colony illustration, which would read as
// alarming rather than reassuring on a health-anxiety site.

type BlobShape = "a" | "b" | "c" | "d";

// Soft, irregular blob outlines via asymmetric border-radius — cheaper than
// SVG or an image, and reads as organic rather than a mechanical circle.
// The corner values deliberately have real contrast (not just 45/55) so the
// asymmetry still reads at a 6–14px size, not just in a zoomed-in mockup.
const BLOB_SHAPE_CLASS: Record<BlobShape, string> = {
  a: "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
  b: "rounded-[70%_30%_30%_70%/60%_40%_60%_40%]",
  c: "rounded-[40%_60%_65%_35%/60%_40%_65%_35%]",
  d: "rounded-[65%_35%_35%_65%/35%_65%_40%_60%]",
};

type Satellite = { dx: number; dy: number; size: number };

type ParticleConfig = {
  left: string;
  top: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  rotate: number;
  shape: BlobShape;
  /** A tiny trailing dot or two beside some particles, like a short spore chain. */
  satellites?: Satellite[];
};

const PARTICLES: ParticleConfig[] = [
  { left: "6%", top: "72%", size: 12, opacity: 0.17, duration: 23, delay: 0, driftX: 26, driftY: -95, rotate: 14, shape: "a" },
  { left: "14%", top: "38%", size: 8, opacity: 0.12, duration: 27, delay: 3.2, driftX: -18, driftY: -70, rotate: -10, shape: "c" },
  { left: "24%", top: "82%", size: 11, opacity: 0.18, duration: 20, delay: 1.4, driftX: 16, driftY: -108, rotate: 18, shape: "b", satellites: [{ dx: 9, dy: -5, size: 4 }] },
  { left: "33%", top: "52%", size: 7, opacity: 0.1, duration: 25, delay: 5.6, driftX: -30, driftY: -78, rotate: -16, shape: "d" },
  { left: "41%", top: "70%", size: 10, opacity: 0.15, duration: 21.5, delay: 2.2, driftX: 20, driftY: -92, rotate: 10, shape: "a", satellites: [{ dx: -8, dy: -4, size: 4 }, { dx: -13, dy: -9, size: 3 }] },
  { left: "49%", top: "32%", size: 8, opacity: 0.13, duration: 26, delay: 4.4, driftX: -14, driftY: -64, rotate: -8, shape: "c" },
  { left: "57%", top: "60%", size: 14, opacity: 0.19, duration: 22, delay: 0.8, driftX: 22, driftY: -102, rotate: 20, shape: "b" },
  { left: "64%", top: "84%", size: 8, opacity: 0.14, duration: 24.5, delay: 6.2, driftX: -20, driftY: -80, rotate: -12, shape: "d", satellites: [{ dx: 8, dy: -6, size: 4 }] },
  { left: "71%", top: "44%", size: 11, opacity: 0.16, duration: 19.5, delay: 1.9, driftX: 18, driftY: -96, rotate: 15, shape: "a" },
  { left: "78%", top: "66%", size: 7, opacity: 0.11, duration: 28, delay: 5, driftX: -24, driftY: -72, rotate: -18, shape: "c" },
  { left: "85%", top: "30%", size: 12, opacity: 0.18, duration: 21, delay: 3.6, driftX: 24, driftY: -100, rotate: 12, shape: "b", satellites: [{ dx: -9, dy: -5, size: 4 }, { dx: -16, dy: -12, size: 3 }] },
  { left: "91%", top: "55%", size: 8, opacity: 0.12, duration: 26.5, delay: 0.4, driftX: -16, driftY: -68, rotate: -9, shape: "d" },
  { left: "38%", top: "90%", size: 10, opacity: 0.13, duration: 23.5, delay: 4.8, driftX: 12, driftY: -88, rotate: 16, shape: "a" },
  { left: "95%", top: "78%", size: 7, opacity: 0.1, duration: 25.5, delay: 2.6, driftX: -12, driftY: -74, rotate: -14, shape: "c", satellites: [{ dx: 7, dy: -5, size: 3 }] },
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
          className="particle absolute"
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
              "--drift-rotate": `${p.rotate}deg`,
              animationDelay: `${p.delay}s`,
            } as CSSProperties
          }
        >
          <span className={`absolute inset-0 bg-accent ${BLOB_SHAPE_CLASS[p.shape]}`} />
          {p.satellites?.map((s, si) => (
            <span
              key={si}
              className="absolute rounded-full bg-accent"
              style={{ left: s.dx, top: s.dy, width: s.size, height: s.size, opacity: 0.6 }}
            />
          ))}
        </span>
      ))}
    </div>
  );
}
