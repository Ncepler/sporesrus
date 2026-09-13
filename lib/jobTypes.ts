export type JobType = {
  slug: string;
  title: string;
  navLabel: string;
  /** Short summary for the grid card — compressed from the page intro, not a new claim. */
  gridDescription: string;
  /** Verbatim intro paragraph from CLAUDE.md §8. */
  intro: string;
};

export const JOB_TYPES: JobType[] = [
  {
    slug: "basement-mold-removal",
    title: "Basement Mold Removal",
    navLabel: "Basement",
    gridDescription: "Below-grade moisture, often from a slow leak or poor drainage.",
    intro:
      "Basements are the most common place mold shows up, usually because of moisture that's been sitting unnoticed — a slow foundation leak, poor drainage, or just the natural dampness of below-grade space. We identify the actual moisture source (not just the mold itself) so the problem doesn't come right back after removal.",
  },
  {
    slug: "attic-mold-removal",
    title: "Attic Mold Removal",
    navLabel: "Attic",
    gridDescription: "Roof leaks, poor ventilation, and insulation holding onto moisture.",
    intro:
      "Attic mold usually traces back to a roof leak, poor ventilation, or insulation holding onto moisture it shouldn't. We remove the mold and address the ventilation or moisture issue driving it, so the fix actually holds.",
  },
  {
    slug: "crawlspace-mold-removal",
    title: "Crawlspace Mold Removal",
    navLabel: "Crawlspace",
    gridDescription: "Trapped moisture that spreads mold upward into the living space.",
    intro:
      "Crawlspaces trap moisture more than almost any other part of a property, which makes them one of the most common — and most overlooked — sources of a mold problem that eventually spreads upward into the living space above. We handle full crawlspace remediation, including moisture control, so it stays fixed.",
  },
  {
    slug: "bathroom-mold-removal",
    title: "Bathroom Mold Removal",
    navLabel: "Bathroom",
    gridDescription: "Chronic moisture that keeps mold coming back after cleaning.",
    intro:
      "Bathrooms deal with more chronic moisture than any other room in a property, which means mold here often keeps coming back even after a homeowner cleans it themselves. We remove it at the source and identify the ventilation or moisture habit that's letting it return.",
  },
  {
    slug: "hvac-mold-cleaning",
    title: "HVAC Mold Cleaning",
    navLabel: "HVAC",
    gridDescription: "Ductwork that spreads spores through every room it services.",
    intro:
      "Mold in ductwork is one of the more serious versions of this problem, because your HVAC system actively spreads spores through every room it services every time it runs. We clean and treat affected ductwork and components thoroughly, so your air handling system stops being part of the problem.",
  },
];
