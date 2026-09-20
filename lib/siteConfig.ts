// Central place for facts that are still placeholders per CLAUDE.md §2.
// Never invent real values here — replace only once Noah confirms them.

export const SITE_NAME = "SporesRUs";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sporesrus.vercel.app";
export const SITE_DESCRIPTION =
  "Mold inspection, remediation, and prevention for homes and businesses.";

// Confirmed by Noah: SporesRUs covers the same NYC tri-state area as Next
// Generation Restoration (same operator).
export const SERVICE_AREA_SUMMARY = "NYC and Long Island";

// `note` renders in place of a town list for regions where no verified
// town-level list exists — county/state level only, never invented towns.
export const SERVICE_AREAS = [
  { region: "NYC Boroughs", areas: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"], note: null },
  { region: "Long Island", areas: ["Nassau County", "Suffolk County"], note: null },
  { region: "Westchester County", areas: [] as string[], note: "Countywide coverage." },
  { region: "New Jersey", areas: [] as string[], note: "Statewide coverage." },
  { region: "Connecticut", areas: [] as string[], note: "Statewide coverage." },
];

export const NAV_LINKS = [
  { href: "/mold-remediation", label: "Mold Remediation" },
  { href: "/mold-inspection-testing", label: "Inspection & Testing" },
  { href: "/mold-and-your-health", label: "Mold & Your Health" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/faq", label: "FAQ" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { href: "/mold-remediation", label: "Mold Remediation" },
  { href: "/mold-inspection-testing", label: "Inspection & Testing" },
  { href: "/basement-mold-removal", label: "Basement Mold Removal" },
  { href: "/attic-mold-removal", label: "Attic Mold Removal" },
  { href: "/crawlspace-mold-removal", label: "Crawlspace Mold Removal" },
  { href: "/bathroom-mold-removal", label: "Bathroom Mold Removal" },
  { href: "/hvac-mold-cleaning", label: "HVAC Mold Cleaning" },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { href: "/mold-and-your-health", label: "Mold & Your Health" },
  { href: "/insurance-claims", label: "Insurance Claims" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;
