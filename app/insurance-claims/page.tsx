import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Insurance Claims",
  description:
    "Is mold remediation covered by insurance? It depends on the cause — here's how we help you figure out which situation applies.",
};

export default function InsuranceClaimsPage() {
  return (
    <div className="container-page section max-w-3xl">
      <ScrollReveal>
        <h1 className="font-display text-h1 font-semibold text-text-primary md:text-h1-lg">
          Is Mold Remediation Covered by Insurance?
        </h1>
        <p className="mt-6 text-body-lg text-text-secondary">
          It depends on the cause — mold resulting from a sudden, covered event (like a burst
          pipe) is often covered, while mold from long-term neglect or humidity typically
          isn&apos;t. We help you figure out which situation applies and handle the claims
          conversation directly where it does.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-12" delayMs={100}>
        <div className="rounded-card border border-rule bg-surface p-8 shadow-soft">
          <h2 className="font-display text-h2 font-semibold text-text-primary">
            We Handle the Claim
          </h2>
          <p className="mt-3 text-body text-text-secondary">
            If your mold traces back to a covered water-damage event, we manage the insurance
            conversation so you don&apos;t have to navigate it alone.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-12" delayMs={150}>
        <Button href="/contact" variant="primary">
          Schedule an Inspection
        </Button>
      </ScrollReveal>
    </div>
  );
}
