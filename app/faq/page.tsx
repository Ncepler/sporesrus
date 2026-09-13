import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqAccordion, { type FaqEntry } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about mold inspection, remediation, insurance, and our service area.",
};

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "Is mold remediation covered by insurance?",
    answer:
      "It depends on the cause — mold resulting from a sudden, covered event (like a burst pipe) is often covered, while mold from long-term neglect or humidity typically isn't. If your mold traces back to a covered water-damage event, we manage the insurance conversation so you don't have to navigate it alone.",
  },
  {
    question: "How do I know if I actually have a mold problem?",
    answer:
      "A persistent musty odor or visible growth are signs worth acting on, but a lot of what looks like mold isn't, and what's actually a problem isn't always visible. An inspection — a full visual assessment plus moisture readings and sampling where warranted — gives you a clear, honest answer.",
  },
  {
    question: "Is it safe to remove mold myself?",
    answer:
      "It depends on the extent and location of the growth. Done incorrectly, disturbing mold without proper containment can spread spores into the rest of the property. An inspection tells you exactly what you're dealing with before you decide how to handle it.",
  },
  {
    question: "How long does remediation take?",
    answer:
      "It depends on the size and severity of the job — a basement job and an HVAC job aren't on the same timeline. An inspection gives you a specific plan and timeframe for your situation rather than a generic estimate.",
  },
  {
    question: "Do you test the space after the work is done?",
    answer:
      "Yes. Once remediation is complete, we confirm the space meets a clean standard before calling the job done — not just visually, but tested.",
  },
  {
    question: "What's the difference between an inspection and remediation?",
    answer:
      "An inspection identifies whether mold is present, its source, and how far it's spread, and gives you a written report. Remediation is the actual work — containment, removal, and verification — based on what the inspection finds.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the NYC tri-state area — the five boroughs, Long Island, Westchester County, New Jersey, and Connecticut.",
  },
];

export default function FaqPage() {
  return (
    <div className="container-page section max-w-3xl">
      <ScrollReveal>
        <h1 className="font-display text-h1 font-semibold text-text-primary md:text-h1-lg">
          Frequently Asked Questions
        </h1>
      </ScrollReveal>

      <ScrollReveal className="mt-10" delayMs={100}>
        <FaqAccordion items={FAQ_ITEMS} />
      </ScrollReveal>
    </div>
  );
}
