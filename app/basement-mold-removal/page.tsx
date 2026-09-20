import type { Metadata } from "next";
import CallButton from "@/components/ui/CallButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqAccordion, { type FaqEntry } from "@/components/ui/FaqAccordion";
import JobTypeGrid from "@/components/ui/JobTypeGrid";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Basement Mold Removal",
  description:
    "Basement mold removal that starts with the moisture source — a foundation leak, poor drainage, or below-grade dampness — not just the mold itself.",
  alternates: { canonical: "/basement-mold-removal" },
};

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "Is basement mold always caused by a leak?",
    answer:
      "Not always — a slow foundation leak is common, but ongoing dampness from poor drainage or natural below-grade humidity can be enough on its own. An inspection identifies which one is driving the growth.",
  },
  {
    question: "Will mold come back after a basement is remediated?",
    answer:
      "It can, if the moisture source isn't addressed. That's why we identify what's feeding the mold, not just the mold itself, before calling a job complete, and verify the space afterward.",
  },
  {
    question: "How is a basement inspection different from a general home inspection?",
    answer:
      "A general home inspection is broad; a mold inspection is focused — moisture readings, foundation walls, drainage patterns, sampling where warranted, and a written report on what's present.",
  },
];

export default function BasementMoldRemovalPage() {
  return (
    <div className="container-page section">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Basement Mold Removal", path: "/basement-mold-removal" }])
          ),
        }}
      />

      <ScrollReveal>
        <h1 className="max-w-3xl font-display text-h1 font-semibold text-ink">
          Basement Mold Removal
        </h1>
        <p className="mt-6 measure text-body-lg text-ink-soft">
          Basements are the most common place mold shows up, and it&apos;s rarely one dramatic
          event that causes it. More often it&apos;s moisture that&apos;s gone unnoticed — a slow
          foundation leak, poor drainage, or the natural dampness of being below grade. Treating
          the surface without finding that source usually means the same spot comes back. We find
          what&apos;s actually feeding it before we touch the mold, so the fix holds.
        </p>
        <div className="mt-8">
          <CallButton />
        </div>
      </ScrollReveal>

      <div className="mt-16 grid gap-6 md:grid-cols-5">
        <ScrollReveal delayMs={100} className="md:col-span-3">
          <h2 className="font-display text-h2 font-semibold text-ink">Why It Shows Up Here</h2>
          <p className="mt-3 measure text-body text-ink-soft">
            A basement rarely dries out completely, so even a small, ongoing moisture source is
            enough to support growth. Foundation walls hold dampness from the soil around them,
            and any point where water gets in — a hairline crack, a window well, poor grading —
            becomes a place mold can take hold.
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={150} className="md:col-span-2">
          <div className="h-full rounded-card border border-line bg-canvas-deep p-8 shadow-soft">
            <h3 className="font-display text-h3 font-semibold text-ink">Signs Worth Noting</h3>
            <ul className="mt-4 space-y-3 text-body text-ink-soft">
              <li>A persistent musty odor near foundation walls</li>
              <li>Discoloration or staining on framing or drywall</li>
              <li>Visible growth in corners or near plumbing</li>
              <li>Condensation or dampness that doesn&apos;t go away</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">
          What We Look At During a Basement Inspection
        </h2>
        <p className="mt-3 measure text-body text-ink-soft">
          A basement inspection starts with a full visual assessment of walls, framing, and
          flooring, paired with moisture readings in the areas most prone to growth. We&apos;re
          looking for the mold and for whatever&apos;s feeding it — a hidden drainage or seepage
          issue will keep producing new growth even after one spot is cleaned. Where warranted,
          that includes sampling and a written report.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <div className="rounded-card border border-line bg-canvas-deep p-8 shadow-soft">
          <h2 className="font-display text-h2 font-semibold text-ink">
            Containment, Below Grade
          </h2>
          <p className="mt-3 measure text-body text-ink-soft">
            Basements often connect to the rest of a house through a single stairwell or a shared
            air pathway, which makes containment especially important — disturbing mold without
            sealing that off is how a basement problem becomes a whole-house problem. Before
            removal starts, we seal off the work area so spores stay put.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <h2 className="font-display text-h2 font-semibold text-ink">
          Keeping It From Coming Back
        </h2>
        <p className="mt-3 measure text-body text-ink-soft">
          Removing the mold only solves half the problem if the moisture source is still there.
          Prevention here comes down to the basics: moving water away from the foundation,
          managing humidity in a naturally damp space, and addressing cracks or seepage points
          early.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">Basement Mold Questions</h2>
        <div className="mt-6">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h2 className="font-display text-h2 font-semibold text-ink">Related Spaces</h2>
        <div className="mt-6">
          <JobTypeGrid exclude="basement-mold-removal" />
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
