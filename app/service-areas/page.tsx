import type { Metadata } from "next";
import CallButton from "@/components/ui/CallButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { SERVICE_AREAS, SERVICE_AREA_SUMMARY } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "SporesRUs provides mold inspection and remediation across the New York City metro area — the five boroughs, Long Island, Westchester County, New Jersey, and Connecticut.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: "Service Areas", path: "/service-areas" }])),
        }}
      />
      <div className="container-page section">
        <ScrollReveal>
          <h1 className="max-w-3xl font-display text-h1 font-semibold text-ink">
            Serving {SERVICE_AREA_SUMMARY}
          </h1>
          <p className="mt-6 measure text-body-lg text-ink-soft">
            We provide mold inspection and remediation for homes and businesses across the New
            York City metro area — the five boroughs, Long Island, Westchester County, New
            Jersey, and Connecticut.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area, i) => (
            <ScrollReveal key={area.region} delayMs={i * 75}>
              <div className="h-full rounded-card border border-line bg-canvas-deep p-6 shadow-soft">
                <h2 className="font-display text-h3 font-semibold text-ink">{area.region}</h2>
                {area.areas.length > 0 ? (
                  <ul className="mt-3 space-y-1 text-body text-ink-soft">
                    {area.areas.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-body text-ink-soft">{area.note}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          data-closing-cta
          className="mt-16 flex flex-col items-start gap-6 rounded-card border border-line bg-canvas-deep p-10 shadow-soft md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-xl font-display text-h3 font-semibold text-ink">
            Not sure if your address is covered? A quick call will tell you.
          </p>
          <CallButton />
        </ScrollReveal>
      </div>
    </>
  );
}
