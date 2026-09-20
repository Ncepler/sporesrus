import type { Metadata } from "next";
import CallButton from "@/components/ui/CallButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Mold Inspection & Testing",
  description:
    "Not sure if it's mold? A full visual assessment, moisture readings, sampling where warranted, and a written report explaining exactly what we found.",
  alternates: { canonical: "/mold-inspection-testing" },
};

export default function MoldInspectionTestingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Mold Inspection & Testing", path: "/mold-inspection-testing" }])
          ),
        }}
      />
      <div className="container-page section">
        <ScrollReveal>
          <h1 className="max-w-3xl font-display text-h1 font-semibold text-ink">
            Not Sure If It&apos;s Mold? Start Here.
          </h1>
          <p className="mt-6 measure text-body-lg text-ink-soft">
            A lot of the time, what looks like mold isn&apos;t — and what&apos;s actually a problem
            isn&apos;t always visible. An inspection gives you a clear, honest answer before you
            spend money on remediation you may or may not need.
          </p>
        </ScrollReveal>

        <ScrollReveal
          delayMs={100}
          className="mt-16 overflow-hidden rounded-card border border-line bg-canvas-deep shadow-soft"
        >
          <div className="divide-y divide-line">
            <div className="grid gap-3 p-8 sm:grid-cols-[auto,1fr] sm:items-start sm:gap-8 sm:p-10">
              <span className="font-display text-h2 font-semibold text-accent">01</span>
              <div>
                <h2 className="font-display text-h3 font-semibold text-ink">
                  What an Inspection Covers
                </h2>
                <p className="mt-3 measure text-body text-ink-soft">
                  A full visual assessment of the property, moisture readings in areas prone to
                  growth, air and/or surface sampling where warranted, and a written report
                  explaining exactly what we found.
                </p>
              </div>
            </div>
            <div className="grid gap-3 p-8 sm:grid-cols-[auto,1fr] sm:items-start sm:gap-8 sm:p-10">
              <span className="font-display text-h2 font-semibold text-accent">02</span>
              <div>
                <h2 className="font-display text-h3 font-semibold text-ink">What Happens After</h2>
                <p className="mt-3 measure text-body text-ink-soft">
                  If there&apos;s no significant mold present, you&apos;ll know that too — we&apos;re
                  not going to recommend remediation you don&apos;t need. If there is, the report
                  becomes the basis for a clear, specific remediation plan.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          data-closing-cta
          delayMs={150}
          className="mt-16 flex flex-col items-start gap-6 rounded-card border border-line bg-canvas-deep p-10 shadow-soft md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-xl font-display text-h3 font-semibold text-ink">
            Get a clear answer before you commit to anything.
          </p>
          <CallButton />
        </ScrollReveal>
      </div>
    </>
  );
}
