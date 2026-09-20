import type { ReactElement } from "react";
import Link from "next/link";
import { JOB_TYPES } from "@/lib/jobTypes";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ICONS: Record<string, ReactElement> = {
  "basement-mold-removal": (
    <path d="M6 20V10l6-4 6 4v10M6 15h12M6 20h12" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "attic-mold-removal": <path d="M4 12L12 5l8 7M7 12v7h10v-7" strokeLinecap="round" strokeLinejoin="round" />,
  "crawlspace-mold-removal": (
    <path d="M4 16h16M4 16V9l8-2 8 2v7" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "bathroom-mold-removal": (
    <path
      d="M12 4c2.5 3 4 5.5 4 8a4 4 0 1 1-8 0c0-2.5 1.5-5 4-8Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "hvac-mold-cleaning": (
    <path d="M4 8h16M4 12h16M4 16h10M6 8v8M10 8v8M14 8v8" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export default function JobTypeGrid({ exclude }: { exclude?: string } = {}) {
  const jobs = exclude ? JOB_TYPES.filter((j) => j.slug !== exclude) : JOB_TYPES;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {jobs.map((job, i) => (
        <ScrollReveal key={job.slug} delayMs={i * 60}>
          <Link
            href={`/${job.slug}`}
            className="group hover-lift press-scale flex h-full flex-col rounded-card border border-line bg-canvas-deep p-6 shadow-soft transition-[transform,box-shadow] duration-150 hover:shadow-lift"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B6B5D" strokeWidth="1.6" aria-hidden>
              {ICONS[job.slug]}
            </svg>
            <h3 className="mt-4 font-display text-h3 font-semibold text-ink">{job.navLabel}</h3>
            <p className="mt-2 text-body text-ink-soft">{job.gridDescription}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-small font-semibold text-accent">
              Learn more
              <span aria-hidden className="transition-transform duration-150 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}
