import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICE_AREAS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "SporesRUs provides mold inspection and remediation across the NYC tri-state area — the five boroughs, Long Island, Westchester County, New Jersey, and Connecticut.",
};

export default function ServiceAreasPage() {
  return (
    <div className="container-page section">
      <ScrollReveal>
        <h1 className="max-w-3xl font-display text-h1 font-semibold text-text-primary md:text-h1-lg">
          Serving the NYC Tri-State Area
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
          We provide mold inspection and remediation for homes and businesses across the New
          York City metro area — the five boroughs, Long Island, Westchester County, New
          Jersey, and Connecticut.
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="primary">
            Schedule an Inspection
          </Button>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_AREAS.map((area, i) => (
          <ScrollReveal key={area.region} delayMs={i * 75}>
            <div className="h-full rounded-card border border-rule bg-surface p-6 shadow-soft">
              <h2 className="font-display text-h3 font-semibold text-text-primary">
                {area.region}
              </h2>
              {area.areas.length > 0 && (
                <ul className="mt-3 space-y-1 text-body text-text-secondary">
                  {area.areas.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-16 flex flex-col items-start gap-6 rounded-card border border-rule bg-surface p-10 shadow-soft md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl font-display text-h3 font-semibold text-text-primary">
          Not sure if you&apos;re in our service area? Reach out and we&apos;ll let you know.
        </p>
        <Button href="/contact" variant="primary">
          Contact Us
        </Button>
      </ScrollReveal>
    </div>
  );
}
