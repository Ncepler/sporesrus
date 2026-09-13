import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import type { JobType } from "@/lib/jobTypes";

/**
 * Shared layout for the 5 job-type pages (basement, attic, crawlspace,
 * bathroom, HVAC) — each page.tsx just passes its own JobType entry from
 * lib/jobTypes.ts. Copy is verbatim from CLAUDE.md §8 per job type.
 */
export default function JobTypePage({ job }: { job: JobType }) {
  return (
    <div className="container-page section">
      <ScrollReveal>
        <h1 className="max-w-3xl font-display text-h1 font-semibold text-text-primary md:text-h1-lg">
          {job.title}
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">{job.intro}</p>
        <div className="mt-8">
          <Button href="/contact" variant="primary">
            Schedule an Inspection
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16" delayMs={100}>
        <h2 className="font-display text-h2 font-semibold text-text-primary">See the Difference</h2>
        <p className="mt-2 max-w-2xl text-body text-text-secondary">
          Real job photos are coming as they&apos;re available — for now, here&apos;s how a{" "}
          {job.navLabel.toLowerCase()} remediation compares before and after.
        </p>
        <div className="mt-6 max-w-2xl">
          <BeforeAfterSlider
            beforeDescription={`Placeholder illustration representing a contaminated ${job.navLabel.toLowerCase()} before remediation — real job photography pending`}
            afterDescription={`Placeholder illustration representing the same ${job.navLabel.toLowerCase()}, clean, after remediation — real job photography pending`}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16 flex flex-col items-start gap-6 rounded-card border border-rule bg-surface p-10 shadow-soft md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl font-display text-h3 font-semibold text-text-primary">
          Not sure how far it&apos;s spread? An inspection gives you a straight answer.
        </p>
        <Button href="/contact" variant="primary">
          Schedule an Inspection
        </Button>
      </ScrollReveal>
    </div>
  );
}
