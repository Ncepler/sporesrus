import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EMAIL_PLACEHOLDER, PHONE_PLACEHOLDER } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SporesRUs for mold inspection and remediation.",
};

export default function ContactPage() {
  return (
    <div className="container-page section max-w-3xl">
      <ScrollReveal>
        <h1 className="font-display text-h1 font-semibold text-text-primary md:text-h1-lg">
          Get In Touch
        </h1>
      </ScrollReveal>

      {/* Placeholder-only: real phone/email aren't confirmed yet (CLAUDE.md §2),
          so these render as clearly labeled blocks rather than live tel:/mailto: links. */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <ScrollReveal delayMs={100}>
          <div className="flex h-full flex-col items-start justify-center gap-2 rounded-card border border-rule bg-surface p-10 shadow-soft">
            <span className="text-meta font-semibold uppercase tracking-wide text-text-tertiary">
              Call Us
            </span>
            <span className="font-display text-h2 font-semibold text-accent">
              {PHONE_PLACEHOLDER}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={150}>
          <div className="flex h-full flex-col items-start justify-center gap-2 rounded-card border border-rule bg-surface p-10 shadow-soft">
            <span className="text-meta font-semibold uppercase tracking-wide text-text-tertiary">
              Email Us
            </span>
            <span className="font-display text-h2 font-semibold text-accent">
              {EMAIL_PLACEHOLDER}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
