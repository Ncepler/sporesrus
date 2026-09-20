import { SERVICE_AREAS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/siteConfig";
import { PHONE_SET, PHONE_TEL } from "@/lib/phone";

/**
 * ProfessionalService structured data, included site-wide via the root
 * layout. No email, no license number, no aggregateRating/review — none of
 * those are confirmed facts. telephone is included only once a real number
 * is configured; a bracketed placeholder must never reach structured data.
 */
export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    ...(PHONE_SET ? { telephone: PHONE_TEL!.replace("tel:", "") } : {}),
    areaServed: SERVICE_AREAS.flatMap((region) =>
      region.areas.length > 0 ? region.areas : [region.region]
    ),
  };
}

export type BreadcrumbItem = { name: string; path: string };

/** BreadcrumbList JSON-LD for inner pages (Home is never included as a crumb target itself). */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
