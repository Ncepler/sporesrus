import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WarningCallout from "@/components/ui/WarningCallout";

export const metadata: Metadata = {
  title: "Mold and Your Health",
  description:
    "What's actually known about mold exposure and health — informational, non-diagnostic, and clear about when to see a doctor.",
};

export default function MoldAndYourHealthPage() {
  return (
    <div className="container-page section max-w-3xl">
      <ScrollReveal>
        <h1 className="font-display text-h1 font-semibold text-text-primary md:text-h1-lg">
          Mold and Your Health — What&apos;s Actually Known
        </h1>
        <p className="mt-6 text-body-lg text-text-secondary">
          Mold exposure affects people differently, and it&apos;s important to be precise about
          what&apos;s established versus what isn&apos;t. This page is informational, not medical
          advice — if you&apos;re experiencing symptoms you think may be related to mold
          exposure, talk to a doctor.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-12" delayMs={100}>
        <h2 className="font-display text-h2 font-semibold text-text-primary">
          Commonly Reported Symptoms
        </h2>
        <p className="mt-3 text-body text-text-secondary">
          People exposed to mold sometimes report respiratory irritation, allergy-like symptoms,
          or worsened asthma. Sensitivity varies significantly person to person, and not everyone
          exposed to mold experiences symptoms.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-10" delayMs={150}>
        <h2 className="font-display text-h2 font-semibold text-text-primary">
          When to See a Doctor
        </h2>
        <p className="mt-3 text-body text-text-secondary">
          If you or someone in your home is experiencing ongoing respiratory symptoms, allergy
          symptoms, or asthma flare-ups and you suspect mold may be a factor, a doctor can
          evaluate that properly — this site can tell you whether mold is present and remove it,
          but a medical evaluation is the right step for a health concern itself.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-10" delayMs={200}>
        <WarningCallout>
          If you smell a persistent musty odor or see visible growth, especially near plumbing,
          roofing, or after any water damage, it&apos;s worth scheduling an inspection — the
          earlier mold is identified, the less it typically costs to remediate.
        </WarningCallout>
      </ScrollReveal>

      <ScrollReveal className="mt-12" delayMs={250}>
        <Button href="/contact" variant="primary">
          Schedule an Inspection
        </Button>
      </ScrollReveal>
    </div>
  );
}
