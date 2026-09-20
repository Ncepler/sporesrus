import type { Metadata } from "next";
import CallButton from "@/components/ui/CallButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Insurance Claims",
  description:
    "Is mold remediation covered by insurance? It depends on the cause — here's how we help you figure out which situation applies.",
  alternates: { canonical: "/insurance-claims" },
};

export default function InsuranceClaimsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: "Insurance Claims", path: "/insurance-claims" }])),
        }}
      />
      <div className="container-page section max-w-3xl">
        <ScrollReveal>
          <h1 className="font-display text-h1 font-semibold text-ink">
            Is Mold Remediation Covered by Insurance?
          </h1>
          <p className="mt-6 measure text-body-lg text-ink-soft">
            It depends on the cause — mold resulting from a sudden, covered event (like a burst
            pipe) is often covered, while mold from long-term neglect or humidity typically
            isn&apos;t. We help you figure out which situation applies and handle the claims
            conversation directly where it does.
          </p>
        </ScrollReveal>

        <ScrollReveal
          delayMs={100}
          className="mt-14 flex flex-col gap-6 rounded-card border border-line bg-canvas-deep p-8 shadow-soft sm:flex-row sm:items-start sm:gap-8 sm:p-10"
        >
          <span
            aria-hidden
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-canvas text-accent"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M9 12.5l2 2 4-4.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <h2 className="font-display text-h2 font-semibold text-ink">We Handle the Claim</h2>
            <p className="mt-3 measure text-body text-ink-soft">
              If your mold traces back to a covered water-damage event, we manage the insurance
              conversation so you don&apos;t have to navigate it alone.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal
          data-closing-cta
          delayMs={150}
          className="mt-16 flex flex-col items-start gap-6 rounded-card border border-line bg-canvas-deep p-10 shadow-soft md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-xl font-display text-h3 font-semibold text-ink">
            Wondering if your situation qualifies?
          </p>
          <CallButton />
        </ScrollReveal>
      </div>
    </>
  );
}
