import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Mold Inspection & Testing",
  description:
    "Not sure if it's mold? A full visual assessment, moisture readings, sampling where warranted, and a written report explaining exactly what we found.",
};

export default function MoldInspectionTestingPage() {
  return (
    <div className="container-page section">
      <ScrollReveal>
        <h1 className="max-w-3xl font-display text-h1 font-semibold text-text-primary md:text-h1-lg">
          Not Sure If It&apos;s Mold? Start Here.
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
          A lot of the time, what looks like mold isn&apos;t — and what&apos;s actually a problem
          isn&apos;t always visible. An inspection gives you a clear, honest answer before you
          spend money on remediation you may or may not need.
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="primary">
            Schedule an Inspection
          </Button>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <ScrollReveal>
          <div className="h-full rounded-card border border-rule bg-surface p-8 shadow-soft">
            <h2 className="font-display text-h3 font-semibold text-text-primary md:text-h3-lg">
              What an Inspection Covers
            </h2>
            <p className="mt-3 text-body text-text-secondary">
              A full visual assessment of the property, moisture readings in areas prone to
              growth, air and/or surface sampling where warranted, and a written report
              explaining exactly what we found.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={100}>
          <div className="h-full rounded-card border border-rule bg-surface p-8 shadow-soft">
            <h2 className="font-display text-h3 font-semibold text-text-primary md:text-h3-lg">
              What Happens After
            </h2>
            <p className="mt-3 text-body text-text-secondary">
              If there&apos;s no significant mold present, you&apos;ll know that too — we&apos;re
              not going to recommend remediation you don&apos;t need. If there is, the report
              becomes the basis for a clear, specific remediation plan.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-16 flex flex-col items-start gap-6 rounded-card border border-rule bg-surface p-10 shadow-soft md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl font-display text-h3 font-semibold text-text-primary">
          Get a clear answer before you commit to anything.
        </p>
        <Button href="/contact" variant="primary">
          Schedule an Inspection
        </Button>
      </ScrollReveal>
    </div>
  );
}
