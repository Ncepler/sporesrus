// Seeded dot field for the Four Steps stage (components/ui/FourSteps.tsx).
// Computed at module level with a constant seed so server and client render
// identical positions — no hydration mismatch, no per-visit randomness.

export type SporeDot = {
  id: number;
  x: number;
  y: number;
  r: number;
  inCluster: boolean;
  dx: number;
  dy: number;
  dur: number;
  delay: number;
};

export const STAGE_VIEWBOX = { w: 600, h: 400 };

// The contamination zone the Contain step draws an outline around, and the
// Remove step's dots drift toward the intake at its top-right corner.
export const CLUSTER_RECT = { x: 190, y: 120, w: 230, h: 160 };
export const INTAKE_POINT = { x: CLUSTER_RECT.x + CLUSTER_RECT.w, y: CLUSTER_RECT.y };

function mulberry32(seed: number) {
  let s = seed;
  return function random() {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function inRect(x: number, y: number, rect: { x: number; y: number; w: number; h: number }) {
  return x >= rect.x && x <= rect.x + rect.w && y >= rect.y && y <= rect.y + rect.h;
}

function generateDots(count: number, seed: number): SporeDot[] {
  const rand = mulberry32(seed);
  const dots: SporeDot[] = [];
  const { w, h } = STAGE_VIEWBOX;
  const clusterShare = 0.65;

  for (let i = 0; i < count; i++) {
    const wantsCluster = i < count * clusterShare;
    let x: number;
    let y: number;
    if (wantsCluster) {
      x = CLUSTER_RECT.x + rand() * CLUSTER_RECT.w;
      y = CLUSTER_RECT.y + rand() * CLUSTER_RECT.h;
    } else {
      // Reroll out-of-cluster points so the scattered dots don't quietly
      // pile back into the cluster region by chance.
      do {
        x = rand() * w;
        y = rand() * h;
      } while (inRect(x, y, CLUSTER_RECT));
    }

    dots.push({
      id: i,
      x,
      y,
      r: 1.5 + rand() * 2.5,
      inCluster: inRect(x, y, CLUSTER_RECT),
      dx: (rand() * 2 - 1) * 8,
      dy: (rand() * 2 - 1) * 8,
      dur: 14 + rand() * 12,
      delay: rand() * 8,
    });
  }
  return dots;
}

const SEED = 20260913;

export const SPORE_FIELD_DESKTOP = generateDots(56, SEED);
export const SPORE_FIELD_MOBILE = generateDots(28, SEED + 1);

/** Distance from a dot to the intake point, used to stagger the Remove step. */
export function distanceToIntake(dot: SporeDot) {
  return Math.hypot(dot.x - INTAKE_POINT.x, dot.y - INTAKE_POINT.y);
}
