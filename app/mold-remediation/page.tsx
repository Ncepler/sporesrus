import type { Metadata } from "next";
import CallButton from "@/components/ui/CallButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FourSteps from "@/components/ui/FourSteps";

export const metadata: Metadata = {
  title: "Mold Remediation Process",
  description:
    "How we remove mold, start to finish: inspect, contain, remove, and verify — following industry-standard remediation protocols.",
  alternates: { canonical: "/mold-remediation" },
};

export default function MoldRemediationPage() {
  return (
    <div className="container-page section">
      <ScrollReveal>
        <h1 className="max-w-3xl font-display text-h1 font-semibold text-ink">
          How We Remove Mold — Start to Finish
        </h1>
        <p className="mt-6 measure text-body-lg text-ink-soft">
          Mold remediation isn&apos;t just &ldquo;cleaning it off.&rdquo; Done right, it&apos;s a
          sequence: confirm what you&apos;re dealing with, seal it off so it can&apos;t spread
          while it&apos;s being disturbed, remove it completely, and verify the space is actually
          clear once the work is done.
        </p>
      </ScrollReveal>

      <div className="mt-14">
        <FourSteps variant="static" />
      </div>

      <ScrollReveal
        data-closing-cta
        className="mt-16 flex flex-col items-start gap-6 rounded-card border border-line bg-canvas-deep p-10 shadow-soft md:flex-row md:items-center md:justify-between"
      >
        <p className="max-w-xl font-display text-h3 font-semibold text-ink">
          Ready to find out what you&apos;re dealing with?
        </p>
        <CallButton />
      </ScrollReveal>
    </div>
  );
}
