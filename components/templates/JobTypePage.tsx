import CallButton from "@/components/ui/CallButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { SHOW_ILLUSTRATIVE_COMPARISON, type JobType } from "@/lib/jobTypes";

/**
 * Shared layout for the 5 job-type pages (basement, attic, crawlspace,
 * bathroom, HVAC). Superseded page-by-page in Phase 4 with bespoke,
 * uniquely-ordered pages — kept here only as a safe intermediate state.
 */
export default function JobTypePage({ job }: { job: JobType }) {
  const showComparison = SHOW_ILLUSTRATIVE_COMPARISON || job.beforeAfter !== null;

  return (
    <div className="container-page section">
      <ScrollReveal>
        <h1 className="max-w-3xl font-display text-h1 font-semibold text-ink">{job.title}</h1>
        <p className="mt-6 max-w-2xl measure text-body text-ink-soft">{job.intro}</p>
        <div className="mt-8">
          <CallButton />
        </div>
      </ScrollReveal>

      {showComparison && (
        <ScrollReveal className="mt-16" delayMs={100}>
          <h2 className="font-display text-h2 font-semibold text-ink">See the Difference</h2>
          <div className="mt-6 max-w-2xl">
            {job.beforeAfter ? (
              <BeforeAfterSlider
                before={{ src: job.beforeAfter.before, alt: job.beforeAfter.beforeAlt }}
                after={{ src: job.beforeAfter.after, alt: job.beforeAfter.afterAlt }}
              />
            ) : (
              <BeforeAfterSlider
                illustrative
                beforeLabel={`Illustration representing a contaminated ${job.navLabel.toLowerCase()} before remediation`}
                afterLabel={`Illustration representing the same ${job.navLabel.toLowerCase()}, clean, after remediation`}
              />
            )}
          </div>
        </ScrollReveal>
      )}

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
