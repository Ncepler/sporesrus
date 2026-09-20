import type { Metadata } from "next";
import CallButton from "@/components/ui/CallButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqAccordion, { type FaqEntry } from "@/components/ui/FaqAccordion";
import JobTypeGrid from "@/components/ui/JobTypeGrid";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Crawlspace Mold Removal",
  description:
    "Full crawlspace mold remediation, including the trapped moisture behind it, so a problem that spreads upward into the living space stays fixed.",
  alternates: { canonical: "/crawlspace-mold-removal" },
};

const FEATURES = [
  {
    title: "Trapped Moisture",
    body: "Ground moisture and limited airflow mean a crawlspace rarely dries out on its own.",
  },
  {
    title: "Out of Sight",
    body: "Most homeowners never go down there, so a problem can spread for a long time before anyone notices.",
  },
  {
    title: "Connected Above",
    body: "Whatever's happening in the crawlspace doesn't stay contained — it affects the air and framing in the rooms above it.",
  },
];

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "How would I even know if my crawlspace has a mold problem?",
    answer:
      "Since most people rarely go down there, the first sign is often a musty smell in the rooms above, or dampness noticed during an unrelated repair. An inspection is the most reliable way to know for sure.",
  },
  {
    question: "Does a crawlspace need to be fully cleared out before remediation?",
    answer:
      "It depends on what's stored down there and how the mold has spread — that's assessed as part of the inspection, so the plan is specific to your crawlspace rather than a generic assumption.",
  },
  {
    question: "Is crawlspace mold connected to mold elsewhere in the house?",
    answer:
      "It can be, especially if air moves freely between the crawlspace and the floors above. That's one of the things an inspection identifies — how far it's actually spread, not just where it started.",
  },
];

export default function CrawlspaceMoldRemovalPage() {
  return (
    <div className="container-page section">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Crawlspace Mold Removal", path: "/crawlspace-mold-removal" }])
          ),
        }}
      />

      <ScrollReveal>
        <h1 className="max-w-3xl font-display text-h1 font-semibold text-ink">
          Crawlspace Mold Removal
        </h1>
        <p className="mt-6 measure text-body-lg text-ink-soft">
          Crawlspaces trap moisture more than almost any other part of a property, which makes
          them one of the most common — and most overlooked — sources of a mold problem. Because a
          crawlspace is rarely visited, growth here can spread for a long time before it&apos;s
          noticed, often not until it&apos;s made its way upward through the flooring above. We
          handle full crawlspace remediation, including the moisture behind it, so the problem
          doesn&apos;t just move somewhere else in the house.
        </p>
        <div className="mt-8">
          <CallButton />
        </div>
      </ScrollReveal>

      <div className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">
          Why Crawlspaces Are Different
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delayMs={i * 60}>
              <div className="h-full rounded-card border border-line bg-canvas-deep p-6 shadow-soft">
                <h3 className="font-display text-h3 font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-body text-ink-soft">{feature.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">Crawlspace Mold Questions</h2>
        <div className="mt-6">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">
          Inspection and Containment, Below the House
        </h2>
        <p className="mt-3 measure text-body text-ink-soft">
          A crawlspace inspection means checking framing, subfloor, and any exposed soil for
          visible growth and the moisture readings that explain why it&apos;s there — limited
          airflow and ground moisture are almost always part of the story. Where warranted, that
          includes sampling and a written report on what we found and how far it&apos;s spread.
        </p>
        <p className="mt-5 measure text-body text-ink-soft">
          Containment here means sealing the crawlspace access point and any spot where its air
          reaches the floors above before work begins, since poor airflow can otherwise carry
          spores upward without anyone noticing. That seal stays in place through removal, so the
          rest of the house isn&apos;t affected while the work is underway.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <h2 className="font-display text-h2 font-semibold text-ink">Prevention</h2>
        <p className="mt-3 measure text-body text-ink-soft">
          Prevention in a crawlspace generally comes down to moisture control and airflow: keeping
          ground moisture from building up underneath the house, and making sure whatever
          ventilation or vapor barrier is already in place is actually doing its job.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">Related Spaces</h2>
        <div className="mt-6">
          <JobTypeGrid exclude="crawlspace-mold-removal" />
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
