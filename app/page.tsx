import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CallButton from "@/components/ui/CallButton";
import FourSteps from "@/components/ui/FourSteps";
import HouseCrossSection from "@/components/ui/HouseCrossSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollVideoHero from "@/components/ui/ScrollVideoHero";

export const metadata: Metadata = {
  title: "Mold Inspection & Remediation in NYC and Long Island",
  description:
    "Inspection, remediation, and prevention for homes and businesses. Thorough, straightforward, and built to make sure it doesn't come back.",
  alternates: { canonical: "/" },
};

const COMMITMENTS = [
  "The moisture source is identified, not just the mold.",
  "The work area is sealed before removal.",
  "The space is verified before the job is called done.",
];

export default function HomePage() {
  return (
    <>
      {/* Hero — scroll-scrubbed video, with the pre-video static image/particle hero as the mobile and reduced-motion fallback. */}
      <ScrollVideoHero
        videoSrc="/videos/spores-hero.mp4"
        posterSrc="/videos/spores-hero-poster.jpg"
        fallbackImageSrc="/hero-home2.jpg"
        fallbackImageAlt="A clean, sunlit, finished basement living space after mold remediation — bright walls, warm morning light through a window, no visible damage"
        trustLines={COMMITMENTS}
        headline={
          <h1 className="font-display text-h1 font-semibold">
            <span className="block">Mold Doesn&apos;t Belong Here.</span>
            <span className="block">Let&apos;s Fix That.</span>
          </h1>
        }
        paragraph={
          <p className="measure text-body-lg">
            Inspection, remediation, and prevention for homes and businesses across NYC and
            Long Island. Thorough, straightforward, and built to make sure it doesn&apos;t come
            back.
          </p>
        }
        ctas={
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <CallButton size="lg" showNumber />
            <Button href="/mold-remediation" variant="quiet">
              Learn Our Process
            </Button>
          </div>
        }
      />

      {/* Three commitments — text only, hairline dividers, no cards. */}
      <section className="border-y border-line bg-canvas py-14">
        <div className="container-page">
          <ScrollReveal className="grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-line">
            {COMMITMENTS.map((c) => (
              <p key={c} className="measure text-body-lg text-ink-soft first:sm:pl-0 sm:px-8">
                {c}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* The Four Steps — scroll story. */}
      <section className="relative">
        <div className="container-page pt-20">
          <ScrollReveal>
            <h2 className="max-w-2xl font-display text-h2 font-semibold text-ink">
              Worried About Mold? Start With an Inspection.
            </h2>
            <p className="mt-4 measure text-body-lg text-ink-soft">
              Most people don&apos;t call about mold until they&apos;ve already seen it — but by
              then it&apos;s often spread somewhere you can&apos;t see. A proper inspection tells
              you exactly what you&apos;re dealing with, and exactly what it&apos;ll take to fix
              it, before you commit to anything.
            </p>
          </ScrollReveal>
        </div>
        <FourSteps />
      </section>

      {/* Every space is different — interactive house cross-section. */}
      <section className="section bg-canvas">
        <div className="container-page">
          <ScrollReveal>
            <h2 className="max-w-2xl font-display text-h2 font-semibold text-ink">
              Every Space Is Different
            </h2>
            <p className="mt-4 measure text-body-lg text-ink-soft">
              Mold in a basement behaves differently than mold in an attic, a bathroom, or your
              ductwork — different moisture sources, different containment needs, different
              risks if it&apos;s handled wrong. That&apos;s why we treat each one as its own job,
              not a one-size version of &ldquo;mold removal.&rdquo;
            </p>
          </ScrollReveal>

          <div className="mt-12">
            <HouseCrossSection />
          </div>
        </div>
      </section>

      {/* Insurance and health — large-type text links. */}
      <section className="bg-canvas-deep py-16">
        <div className="container-page grid gap-8 sm:grid-cols-2">
          <ScrollReveal>
            <Link href="/insurance-claims" className="group block">
              <span className="font-display text-h3 font-semibold text-ink transition-colors duration-150 group-hover:text-accent">
                Is mold remediation covered by insurance?{" "}
                <span aria-hidden className="inline-block transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <Link href="/mold-and-your-health" className="group block">
              <span className="font-display text-h3 font-semibold text-ink transition-colors duration-150 group-hover:text-accent">
                Mold and your health: what&apos;s actually known{" "}
                <span aria-hidden className="inline-block transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing call band */}
      <section data-closing-cta className="section bg-canvas">
        <div className="container-page">
          <ScrollReveal className="flex flex-col items-start gap-6 rounded-card border border-line bg-canvas-deep p-10 shadow-soft md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl font-display text-h3 font-semibold text-ink">
              Not sure what you&apos;re dealing with? An inspection gives you a straight answer.
            </p>
            <CallButton size="lg" showNumber />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
