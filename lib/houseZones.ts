import { JOB_TYPES } from "@/lib/jobTypes";

export type HouseZone = {
  id: string;
  label: string;
  href: string;
  copy: string;
  /** Overlay outline shown when this zone is active — matches a shape already drawn in the base illustration. */
  outline: { type: "rect"; x: number; y: number; w: number; h: number; rx?: number } | { type: "polygon"; points: string };
  /** A short moisture-source marker (drawn in on selection) at a representative point in the zone. */
  markerAt: { x: number; y: number };
};

// Geometry lives in the 720x520 viewBox of HouseCrossSection.tsx's SVG.
export const HOUSE_ZONES: HouseZone[] = [
  {
    id: "attic-mold-removal",
    label: "Attic",
    href: "/attic-mold-removal",
    copy: JOB_TYPES.find((j) => j.slug === "attic-mold-removal")!.gridDescription,
    outline: { type: "polygon", points: "360,62 115,175 605,175" },
    markerAt: { x: 340, y: 130 },
  },
  {
    id: "bathroom-mold-removal",
    label: "Bathroom",
    href: "/bathroom-mold-removal",
    copy: JOB_TYPES.find((j) => j.slug === "bathroom-mold-removal")!.gridDescription,
    outline: { type: "rect", x: 460, y: 190, w: 110, h: 120 },
    markerAt: { x: 515, y: 250 },
  },
  {
    id: "hvac-mold-cleaning",
    label: "HVAC",
    href: "/hvac-mold-cleaning",
    copy: JOB_TYPES.find((j) => j.slug === "hvac-mold-cleaning")!.gridDescription,
    outline: { type: "rect", x: 195, y: 150, w: 250, h: 175 },
    markerAt: { x: 260, y: 165 },
  },
  {
    id: "crawlspace-mold-removal",
    label: "Crawlspace",
    href: "/crawlspace-mold-removal",
    copy: JOB_TYPES.find((j) => j.slug === "crawlspace-mold-removal")!.gridDescription,
    outline: { type: "rect", x: 580, y: 428, w: 82, h: 74 },
    markerAt: { x: 620, y: 465 },
  },
  {
    id: "basement-mold-removal",
    label: "Basement",
    href: "/basement-mold-removal",
    copy: JOB_TYPES.find((j) => j.slug === "basement-mold-removal")!.gridDescription,
    outline: { type: "rect", x: 140, y: 450, w: 440, h: 52 },
    markerAt: { x: 300, y: 478 },
  },
];
