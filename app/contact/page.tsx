import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CallButton from "@/components/ui/CallButton";
import { PHONE_DISPLAY, PHONE_SET, PHONE_TEL } from "@/lib/phone";
import { SERVICE_AREA_SUMMARY } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Call Us",
  description: "Call SporesRUs for mold inspection and remediation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="container-page section max-w-2xl">
      <ScrollReveal>
        <h1 className="font-display text-h1 font-semibold text-ink">Call Us</h1>
        <p className="mt-6 measure text-body-lg text-ink-soft">
          An inspection identifies the mold, its moisture source, and how far it&apos;s spread —
          the fastest way to get a straight answer is a call.
        </p>
      </ScrollReveal>

      {PHONE_SET ? (
        <ScrollReveal delayMs={100} className="mt-12">
          <a
            href={PHONE_TEL!}
            className="press-scale block font-display text-h1 font-semibold tabular-nums text-accent"
          >
            {PHONE_DISPLAY}
          </a>
          <div className="mt-8">
            <CallButton size="lg" />
          </div>
        </ScrollReveal>
      ) : null}

      <ScrollReveal delayMs={150} className="mt-12 border-t border-line pt-8">
        <p className="text-body text-ink-soft">Serving {SERVICE_AREA_SUMMARY}.</p>
      </ScrollReveal>
    </div>
  );
}
