import type { Metadata } from "next";
import CallButton from "@/components/ui/CallButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqAccordion, { type FaqEntry } from "@/components/ui/FaqAccordion";
import JobTypeGrid from "@/components/ui/JobTypeGrid";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "HVAC Mold Cleaning",
  description:
    "Mold in ductwork spreads spores through every room your system services. We clean and treat affected ductwork and components so your air handling system stops being part of the problem.",
  alternates: { canonical: "/hvac-mold-cleaning" },
};

const SIGNS = [
  {
    label: "A Musty Smell When It Runs",
    copy: "An odor that's faint with the system off but noticeable once air starts moving is a common early sign.",
  },
  {
    label: "Growth Near a Vent",
    copy: "Visible growth at a vent cover or on the air handler is worth having looked at, even if the rest of the home looks clean.",
  },
  {
    label: "Uneven Air Between Rooms",
    copy: "Air that feels stale or damp in some rooms the same system services can point to moisture sitting inside it.",
  },
];

const APPROACH = [
  {
    step: "01",
    label: "Inspect",
    copy: "We check the ductwork, the coils and drip pan around the air handler, and any insulation holding onto moisture, tracing how far it's actually spread.",
  },
  {
    step: "02",
    label: "Contain",
    copy: "The section being worked on is isolated and airflow through the system is controlled, so spores already inside aren't pulled into other rooms.",
  },
  {
    step: "03",
    label: "Clean & Treat",
    copy: "Affected ductwork and components are cleaned and treated to the same standard used on every job, not just wiped down at the surface.",
  },
  {
    step: "04",
    label: "Verify",
    copy: "We confirm the system meets a clean standard before calling the job finished.",
  },
];

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "How do I know if it's actually in my ductwork?",
    answer:
      "A musty smell that's strongest when the system is running, or growth right at a vent cover, are both worth having inspected — that's what confirms how far it's actually spread inside the system.",
  },
  {
    question: "Does the system need to be off during the work?",
    answer:
      "Yes — the affected section is isolated and airflow is controlled while the work happens, so spores already in the ductwork aren't pulled into other rooms.",
  },
  {
    question: "Will cleaning the ducts fix it for good?",
    answer:
      "It depends on what's driving the moisture in the first place. We look at what's letting it build up inside the system, not just the growth itself, so the fix holds.",
  },
];

export default function HvacMoldCleaningPage() {
  return (
    <div className="container-page section">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: "HVAC Mold Cleaning", path: "/hvac-mold-cleaning" }])),
        }}
      />

      <ScrollReveal>
        <h1 className="max-w-3xl font-display text-h1 font-semibold text-ink">
          HVAC Mold Cleaning
        </h1>
        <p className="mt-6 measure text-body-lg text-ink-soft">
          Mold in ductwork is one of the more serious versions of this problem, because an HVAC
          system actively spreads spores through every room it services every time it runs.
          Growth that starts in one section of duct or around the air handler doesn&apos;t stay
          contained on its own — the system&apos;s job is to move air, and it moves whatever is
          riding along in that air, too. We clean and treat affected ductwork and components
          thoroughly, so the system stops being part of the problem.
        </p>
        <div className="mt-8">
          <CallButton />
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={100} className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">Signs to Watch For</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {SIGNS.map((sign) => (
            <div key={sign.label} className="rounded-card border border-line bg-canvas-deep p-6 shadow-soft">
              <h3 className="font-display text-h3 font-semibold text-ink">{sign.label}</h3>
              <p className="mt-2 text-body text-ink-soft">{sign.copy}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={150} className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">How We Approach an HVAC Job</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((item) => (
            <div key={item.step}>
              <span className="font-display text-h2 font-semibold text-accent">{item.step}</span>
              <h3 className="mt-2 font-display text-h3 font-semibold text-ink">{item.label}</h3>
              <p className="mt-2 text-body text-ink-soft">{item.copy}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={200} className="mt-16 max-w-2xl rounded-card border border-line bg-canvas-deep p-8 shadow-soft">
        <h2 className="font-display text-h3 font-semibold text-ink">Keeping Moisture Out of the System</h2>
        <p className="mt-3 text-body text-ink-soft">
          Because an HVAC system moves air through the whole property, keeping moisture out of it
          matters more than in most other spaces. That means addressing standing water near the
          air handler, keeping the system&apos;s components properly maintained, and managing
          humidity in the rooms it connects to — dampness anywhere along the system can give mold
          a place to take hold and reach everywhere else the air travels.
        </p>
      </ScrollReveal>

      <ScrollReveal delayMs={250} className="mt-16 max-w-2xl">
        <h2 className="font-display text-h2 font-semibold text-ink">Common Questions</h2>
        <div className="mt-6">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={300} className="mt-20">
        <h2 className="font-display text-h2 font-semibold text-ink">Related Spaces</h2>
        <div className="mt-8">
          <JobTypeGrid exclude="hvac-mold-cleaning" />
        </div>
      </ScrollReveal>

      <ScrollReveal
        data-closing-cta
        delayMs={350}
        className="mt-16 flex flex-col items-start gap-6 rounded-card border border-line bg-canvas-deep p-10 shadow-soft md:flex-row md:items-center md:justify-between"
      >
        <p className="max-w-xl font-display text-h3 font-semibold text-ink">
          Wondering if it&apos;s spreading through your ductwork? An inspection gives you a
          straight answer.
        </p>
        <CallButton />
      </ScrollReveal>
    </div>
  );
}
