import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";

const ROUTES = [
  "/",
  "/mold-remediation",
  "/mold-inspection-testing",
  "/basement-mold-removal",
  "/attic-mold-removal",
  "/crawlspace-mold-removal",
  "/bathroom-mold-removal",
  "/hvac-mold-cleaning",
  "/mold-and-your-health",
  "/insurance-claims",
  "/service-areas",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
