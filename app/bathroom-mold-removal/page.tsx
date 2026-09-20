import type { Metadata } from "next";
import CallButton from "@/components/ui/CallButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqAccordion, { type FaqEntry } from "@/components/ui/FaqAccordion";
import JobTypeGrid from "@/components/ui/JobTypeGrid";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Bathroom Mold Removal",
  description:
    "Bathroom mold often returns after cleaning because the moisture source or ventilation issue behind it was never addressed. We remove it at the source and identify what's letting it come back.",
  alternates: { canonical: "/bathroom-mold-removal" },
};

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "Why does bathroom mold keep coming back after I clean it?",
    answer:
      "Wiping mold off a tile or grout line removes what's visible, but if the moisture source or ventilation issue behind it isn't addressed, new growth typically follows. We identify what's actually driving it as part of the job, not just the mold itself.",
  },
  {
    question: "Is mold in bathroom grout always a sign of a bigger problem?",
    answer:
      "Not necessarily — some grout mold from everyday shower humidity is common. It's worth scheduling an inspection when it returns quickly after cleaning, spreads beyond the grout itself, or shows up somewhere less expected, like around a vanity or behind a toilet.",
  },
  {
    question: "Can you fix the moisture problem, not just remove the mold?",
    answer:
      "Yes — identifying the ventilation or moisture habit that's letting mold return is part of how we approach a bathroom job, not a separate service.",
  },
];

export default function BathroomMoldRemovalPage() {
  return (
    <div className="container-page section">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Bathroom Mold Removal", path: "/bathroom-mold-removal" }])
          ),
        }}
      />

      <ScrollReveal className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        <div>
          <h1 className="max-w-xl font-display text-h1 font-semibold text-ink">
            Bathroom Mold Removal
          </h1>
          <p className="mt-6 measure text-body-lg text-ink-soft">
            Bathrooms deal with more chronic moisture than any other room in a property, which
            means mold here often keeps coming back even after a homeowner cleans it themselves.
            Between showers, sinks, and everyday humidity, most bathrooms rarely get a real
            chance to dry out between uses. We remove mold at the source and identify the
            ventilation or moisture habit that&apos;s letting it return, rather than just wiping
            away what&apos;s visible today.
          </p>
          <div className="mt-8">
            <CallButton />
          </div>
        </div>

        <div className="rounded-card border border-line bg-canvas-deep p-8 shadow-soft">
          <h2 className="font-display text-h3 font-semibold text-ink">
            Where Bathroom Moisture Comes From
          </h2>
          <ul className="mt-4 space-y-3 text-body text-ink-soft">
            <li>Shower and tub areas, where water and steam contact the same surfaces daily.</li>
            <li>
              Sink and toilet plumbing connections, where a slow leak can go unnoticed behind a
              wall or under a vanity.
            </li>
            <li>
              Ventilation that isn&apos;t clearing humidity fast enough after use, leaving
              surfaces damp long after the room should be dry.
            </li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={100} className="mt-16 border-l-4 border-accent pl-6">
        <p className="max-w-2xl font-display text-h3 font-semibold text-ink">
          Wiping away what&apos;s visible doesn&apos;t address why the mold came back in the
          first place.
        </p>
      </ScrollReveal>

      <ScrollReveal delayMs={150} className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-h3 font-semibold text-ink">What We Look At</h2>
          <p className="mt-3 text-body text-ink-soft">
            During an inspection, we check grout lines, caulking, the underside of vanities, and
            any spot where plumbing enters a wall or floor — looking at moisture levels, not just
            what&apos;s visible on the surface.
          </p>
        </div>
        <div>
          <h2 className="font-display text-h3 font-semibold text-ink">
            Containment in a Bathroom
          </h2>
          <p className="mt-3 text-body text-ink-soft">
            Before removal starts, we seal off the immediate work area around the tub, shower, or
            vanity so spores can&apos;t travel into the rest of the bathroom or adjoining rooms
            while affected material is being removed.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={200} className="mt-16 max-w-2xl">
        <h2 className="font-display text-h2 font-semibold text-ink">Common Questions</h2>
        <div className="mt-6">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={250} className="mt-16 max-w-2xl">
        <h2 className="font-display text-h3 font-semibold text-ink">Keeping It From Coming Back</h2>
        <p className="mt-3 measure text-body text-ink-soft">
          The habits that keep bathroom mold from returning are mostly about giving the room a
          real chance to dry out — running the exhaust fan during and after a shower, wiping down
          surfaces that stay wet, and addressing a slow leak or a failing caulk line before it
          turns into a bigger moisture problem. None of that is complicated, but it&apos;s easy to
          let slide, which is part of why this room sees more repeat mold than almost any other
          space in a property.
        </p>
      </ScrollReveal>

      <ScrollReveal delayMs={300} className="mt-20">
        <h2 className="font-display text-h2 font-semibold text-ink">Related Spaces</h2>
        <div className="mt-8">
          <JobTypeGrid exclude="bathroom-mold-removal" />
        </div>
      </ScrollReveal>

      <ScrollReveal
        data-closing-cta
        delayMs={350}
        className="mt-16 flex flex-col items-start gap-6 rounded-card border border-line bg-canvas-deep p-10 shadow-soft md:flex-row md:items-center md:justify-between"
      >
        <p className="max-w-xl font-display text-h3 font-semibold text-ink">
          Still finding mold after cleaning it yourself? An inspection tells you why.
        </p>
        <CallButton />
      </ScrollReveal>
    </div>
  );
}
