import { SERVICE_AREAS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/siteConfig";

/**
 * LocalBusiness structured data, included site-wide via the root layout.
 * telephone/email are intentionally omitted — CLAUDE.md §2 leaves them as
 * placeholders, and putting a bracketed placeholder into machine-readable
 * structured data (unlike visible "[PHONE]" copy) risks being read literally
 * by a crawler. Add them here once Noah confirms real values.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    areaServed: SERVICE_AREAS.flatMap((region) =>
      region.areas.length > 0 ? region.areas : [region.region]
    ),
  };
}
