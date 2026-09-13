import type { Metadata } from "next";
import JobTypePage from "@/components/templates/JobTypePage";
import { JOB_TYPES } from "@/lib/jobTypes";

const job = JOB_TYPES.find((j) => j.slug === "basement-mold-removal")!;

export const metadata: Metadata = {
  title: job.title,
  description: job.gridDescription,
};

export default function Page() {
  return <JobTypePage job={job} />;
}
