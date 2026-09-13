import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Mold Remediation Process",
  description:
    "How we remove mold, start to finish: inspect, contain, remove, and verify — following industry-standard remediation protocols.",
};

const STEPS = [
  {
    label: "Inspect",
    copy: "We identify the mold, find its moisture source, and determine how far it's actually spread — including anywhere it isn't visible yet.",
  },
  {
    label: "Contain",
    copy: "Before removal starts, we seal off the work area so spores can't travel into the rest of the property during the process.",
  },
  {
    label: "Remove",
    copy: "Affected materials are removed and treated following industry-standard remediation protocols.",
  },
  {
    label: "Verify",
    copy: "Once remediation is complete, we confirm the space meets a clean standard before calling the job done — not just visually, but tested.",
  },
];

export default function MoldRemediationPage() {
  return (
    <div className="container-page section">
      <ScrollReveal>
        <h1 className="max-w-3xl font-display text-h1 font-semibold text-text-primary md:text-h1-lg">
          How We Remove Mold — Start to Finish
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
          Mold remediation isn&apos;t just &ldquo;cleaning it off.&rdquo; Done right, it&apos;s a
          sequence: confirm what you&apos;re dealing with, seal it off so it can&apos;t spread
          while it&apos;s being disturbed, remove it completely, and verify the space is actually
          clear once the work is done.
        </p>
      </ScrollReveal>

      <div className="mt-14 space-y-8">
        {STEPS.map((step, i) => (
          <ScrollReveal key={step.label} delayMs={i * 100}>
            <div className="flex gap-6 rounded-card border border-rule bg-surface p-8 shadow-soft">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-body font-semibold text-on-accent">
                {i + 1}
              </span>
              <div>
                <h2 className="font-display text-h3 font-semibold text-text-primary md:text-h3-lg">
                  {step.label}
                </h2>
                <p className="mt-2 text-body text-text-secondary">{step.copy}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-text-primary">See the Difference</h2>
        <p className="mt-2 max-w-2xl text-body text-text-secondary">
          Real job photos are coming as they&apos;re available — for now, here&apos;s how a
          remediation compares before and after.
        </p>
        <div className="mt-6 max-w-2xl">
          <BeforeAfterSlider
            beforeDescription="Placeholder illustration representing a contaminated space before remediation — real job photography pending"
            afterDescription="Placeholder illustration representing the same space, clean, after remediation — real job photography pending"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16 flex flex-col items-start gap-6 rounded-card border border-rule bg-surface p-10 shadow-soft md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl font-display text-h3 font-semibold text-text-primary">
          Ready to find out what you&apos;re dealing with?
        </p>
        <Button href="/contact" variant="primary">
          Schedule an Inspection
        </Button>
      </ScrollReveal>
    </div>
  );
}
