import type { Metadata } from "next";
import CallButton from "@/components/ui/CallButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WarningCallout from "@/components/ui/WarningCallout";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Mold and Your Health",
  description:
    "What's actually known about mold exposure and health — informational, non-diagnostic guidance on commonly reported symptoms and when to see a doctor.",
  alternates: { canonical: "/mold-and-your-health" },
};

export default function MoldAndYourHealthPage() {
  return (
    <div className="container-page section max-w-2xl">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Mold and Your Health", path: "/mold-and-your-health" }])
          ),
        }}
      />

      <ScrollReveal>
        <h1 className="font-display text-h1 font-semibold text-ink">
          Mold and Your Health — What&apos;s Actually Known
        </h1>
        <p className="mt-6 measure text-body-lg text-ink-soft">
          Mold exposure affects people differently, and it&apos;s important to be precise about
          what&apos;s established versus what isn&apos;t. This page is informational, not medical
          advice — if you&apos;re experiencing symptoms you think may be related to mold
          exposure, talk to a doctor.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-12" delayMs={100}>
        <h2 className="font-display text-h2 font-semibold text-ink">
          Commonly Reported Symptoms
        </h2>
        <p className="mt-3 measure text-body text-ink-soft">
          People exposed to mold sometimes report respiratory irritation, allergy-like symptoms,
          or worsened asthma. Sensitivity varies significantly person to person, and not everyone
          exposed to mold experiences symptoms.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-10" delayMs={150}>
        <h2 className="font-display text-h2 font-semibold text-ink">When to See a Doctor</h2>
        <p className="mt-3 measure text-body text-ink-soft">
          If you or someone in your home is experiencing ongoing respiratory symptoms, allergy
          symptoms, or asthma flare-ups and you suspect mold may be a factor, a doctor can
          evaluate that properly — this site can tell you whether mold is present and remove it,
          but a medical evaluation is the right step for a health concern itself.
        </p>
        <p className="mt-5 measure border-l border-line pl-4 text-small text-ink-soft">
          This page isn&apos;t a substitute for medical care, and a call to us is about the
          property, not a medical consultation — we don&apos;t track or store any health
          information you might mention on that call.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-10" delayMs={200}>
        <WarningCallout>
          If you smell a persistent musty odor or see visible growth, especially near plumbing,
          roofing, or after any water damage, it&apos;s worth scheduling an inspection — the
          earlier mold is identified, the less it typically costs to remediate.
        </WarningCallout>
      </ScrollReveal>

      <ScrollReveal
        data-closing-cta
        delayMs={250}
        className="mt-16 flex flex-col items-start gap-6 rounded-card border border-line bg-canvas-deep p-10 shadow-soft md:flex-row md:items-center md:justify-between"
      >
        <p className="max-w-xl font-display text-h3 font-semibold text-ink">
          Not sure what you&apos;re dealing with? An inspection gives you a straight answer.
        </p>
        <CallButton />
      </ScrollReveal>
    </div>
  );
}
