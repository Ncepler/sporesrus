import type { Metadata } from "next";
import CallButton from "@/components/ui/CallButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqAccordion, { type FaqEntry } from "@/components/ui/FaqAccordion";
import JobTypeGrid from "@/components/ui/JobTypeGrid";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Attic Mold Removal",
  description:
    "Attic mold removal that addresses the roof leak, ventilation, or moisture-holding insulation driving it, so the fix actually holds.",
  alternates: { canonical: "/attic-mold-removal" },
};

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "How do I know if attic mold is from a roof leak or poor ventilation?",
    answer:
      "The pattern usually tells the story — a leak tends to show up in one area, while ventilation-driven moisture spreads more evenly. An inspection identifies which one you're dealing with.",
  },
  {
    question: "Does attic mold mean I have a roof problem?",
    answer:
      "Not always — ventilation and insulation issues cause attic mold just as often as an actual leak. An inspection tells you which is the case before you spend money assuming the worse of the two.",
  },
  {
    question: "Can attic mold spread into the rest of the house?",
    answer:
      "It can, particularly if the attic shares airflow with the living space below it. That's part of why containment and a thorough inspection both matter.",
  },
];

export default function AtticMoldRemovalPage() {
  return (
    <div className="container-page section">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Attic Mold Removal", path: "/attic-mold-removal" }])
          ),
        }}
      />

      <ScrollReveal>
        <h1 className="max-w-3xl font-display text-h1 font-semibold text-ink">
          Attic Mold Removal
        </h1>
        <p className="mt-6 measure text-body-lg text-ink-soft">
          Attic mold usually traces back to one of three things: a roof leak that&apos;s gone
          unnoticed, ventilation that isn&apos;t moving air the way it should, or insulation
          holding onto moisture it shouldn&apos;t. Unlike a basement, an attic is easy to ignore —
          a problem can spread for months before anyone sees it. We remove the mold and address
          whichever of those is actually driving it, so the fix holds.
        </p>
        <div className="mt-8">
          <CallButton />
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-14">
        <blockquote className="measure border-l-4 border-accent pl-6 font-display text-h3 font-semibold leading-snug text-ink">
          A roof leak doesn&apos;t have to be dramatic to cause a mold problem. A small, slow one
          that&apos;s gone unnoticed for months is more common up here than a sudden, obvious one.
        </blockquote>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">
          Where the Moisture Comes From
        </h2>
        <p className="mt-3 measure text-body text-ink-soft">
          Roof leaks are the most common source, and they&apos;re not always where the water shows
          up — moisture can travel along a rafter before it reaches a ceiling stain. Poor
          ventilation is another frequent cause, since warm, moist air needs somewhere to go;
          without it, that air condenses against the roof deck instead. Insulation that&apos;s
          absorbed moisture from either source holds onto it long after the cause is gone.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <h2 className="font-display text-h2 font-semibold text-ink">
          What We Look At During an Attic Inspection
        </h2>
        <p className="mt-3 measure text-body text-ink-soft">
          An attic inspection means checking the roof deck, rafters, and insulation for visible
          growth and the staining that signals a leak, along with moisture readings in the areas
          most likely to hold dampness. We&apos;re also looking at how the attic is ventilated.
          Where warranted, sampling and a written report follow.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <div className="rounded-card border border-line bg-canvas-deep p-8 shadow-soft">
          <h2 className="font-display text-h2 font-semibold text-ink">
            Containment Above the Living Space
          </h2>
          <p className="mt-3 measure text-body text-ink-soft">
            An attic sits directly above the rooms people use, so containment means sealing the
            attic access point before work begins, so disturbed material and spores can&apos;t
            settle into the rooms below. That seal stays in place until removal is complete.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <h2 className="font-display text-h2 font-semibold text-ink">Prevention</h2>
        <p className="mt-3 measure text-body text-ink-soft">
          Most attic mold prevention comes down to keeping moisture from building up in the first
          place: ventilation that lets warm, humid air escape instead of condensing against the
          roof deck, and addressing leaks and moisture-holding insulation before they spread.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">Attic Mold Questions</h2>
        <div className="mt-6">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">Related Spaces</h2>
        <div className="mt-6">
          <JobTypeGrid exclude="attic-mold-removal" />
        </div>
      </ScrollReveal>

      <ScrollReveal
        data-closing-cta
        className="mt-16 flex flex-col items-start gap-6 rounded-card border border-line bg-canvas-deep p-10 shadow-soft md:flex-row md:items-center md:justify-between"
      >
        <p className="max-w-xl font-display text-h3 font-semibold text-ink">
          Not sure how far it&apos;s spread? An inspection gives you a straight answer.
        </p>
        <CallButton />
      </ScrollReveal>
    </div>
  );
}
