import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import ParticleField from "@/components/ui/ParticleField";
import ProcessSteps from "@/components/ui/ProcessSteps";
import JobTypeGrid from "@/components/ui/JobTypeGrid";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Mold Inspection & Remediation",
  description:
    "Inspection, remediation, and prevention for homes and businesses. Certified, thorough, and built to make sure it doesn't come back.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule bg-gradient-to-b from-surface to-bg">
        <ParticleField />
        <div className="container-page relative section flex flex-col items-start">
          <h1 className="max-w-3xl font-display text-h1 font-semibold text-text-primary md:text-h1-lg">
            Mold Doesn&apos;t Belong Here. Let&apos;s Fix That.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            Inspection, remediation, and prevention for homes and businesses across [SERVICE
            AREA — confirm]. Certified, thorough, and built to make sure it doesn&apos;t come
            back.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Schedule an Inspection
            </Button>
            <Button href="/mold-remediation" variant="outline">
              Learn Our Process
            </Button>
          </div>
        </div>
      </section>

      {/* Worried about mold */}
      <section className="section">
        <div className="container-page">
          <ScrollReveal>
            <h2 className="max-w-2xl font-display text-h2 font-semibold text-text-primary md:text-h2-lg">
              Worried About Mold? Start With an Inspection.
            </h2>
            <p className="mt-4 max-w-2xl text-body-lg text-text-secondary">
              Most people don&apos;t call about mold until they&apos;ve already seen it — but by
              then it&apos;s often spread somewhere you can&apos;t see. A proper inspection tells
              you exactly what you&apos;re dealing with, and exactly what it&apos;ll take to fix
              it, before you commit to anything.
            </p>
          </ScrollReveal>

          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Every space is different */}
      <section className="section bg-surface">
        <div className="container-page">
          <ScrollReveal>
            <h2 className="max-w-2xl font-display text-h2 font-semibold text-text-primary md:text-h2-lg">
              Every Space Is Different
            </h2>
            <p className="mt-4 max-w-2xl text-body-lg text-text-secondary">
              Mold in a basement behaves differently than mold in an attic, a bathroom, or your
              ductwork — different moisture sources, different containment needs, different
              risks if it&apos;s handled wrong. That&apos;s why we treat each one as its own job,
              not a one-size version of &ldquo;mold removal.&rdquo;
            </p>
          </ScrollReveal>

          <div className="mt-12">
            <JobTypeGrid />
          </div>
        </div>
      </section>

      {/* Closing CTA — certifications section intentionally omitted until real credentials exist */}
      <section className="section">
        <div className="container-page">
          <ScrollReveal className="flex flex-col items-start gap-6 rounded-card border border-rule bg-surface p-10 shadow-soft md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl font-display text-h3 font-semibold text-text-primary md:text-h3-lg">
              Not sure what you&apos;re dealing with? An inspection gives you a straight answer.
            </p>
            <Button href="/contact" variant="primary">
              Schedule an Inspection
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
