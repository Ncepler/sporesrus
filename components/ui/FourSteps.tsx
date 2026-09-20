"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  CLUSTER_RECT,
  INTAKE_POINT,
  SPORE_FIELD_DESKTOP,
  SPORE_FIELD_MOBILE,
  STAGE_VIEWBOX,
  distanceToIntake,
  type SporeDot,
} from "@/lib/spores";
import { PROCESS_STEPS } from "@/lib/processSteps";

function useMediaQuery(query: string, defaultValue: boolean) {
  const [matches, setMatches] = useState(defaultValue);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

function Checkmark({ active }: { active: boolean }) {
  return (
    <svg width="40" height="40" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="13" stroke="var(--accent)" strokeWidth="1.5" />
      <path
        d="M8 14.5L12 18.5L20 9.5"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`checkmark-path ${active ? "is-drawn" : ""}`}
      />
    </svg>
  );
}

/** Shared field renderer — used by the interactive scroll stage, the static per-row reuse, and each step's small reduced-motion frame. `animated` gates transitions/scan/drift; step-end-state opacity logic is identical either way. */
function DotField({
  dots,
  step,
  animated,
  paused,
}: {
  dots: SporeDot[];
  step: number;
  animated: boolean;
  paused: boolean;
}) {
  const cluster = CLUSTER_RECT;
  const rankedByDistance = [...dots]
    .filter((d) => d.inCluster)
    .sort((a, b) => distanceToIntake(a) - distanceToIntake(b));

  return (
    <svg viewBox={`0 0 ${STAGE_VIEWBOX.w} ${STAGE_VIEWBOX.h}`} className="h-full w-full" aria-hidden>
      <rect
        x={cluster.x}
        y={cluster.y}
        width={cluster.w}
        height={cluster.h}
        rx={16}
        fill="none"
        stroke={step === 3 ? "var(--accent)" : "var(--spore)"}
        strokeWidth="1.25"
        className={animated ? `cluster-outline ${step >= 1 ? "is-drawn" : ""} ${step === 3 ? "is-cleared" : ""}` : undefined}
        style={!animated ? { opacity: step >= 1 ? 1 : 0 } : undefined}
      />

      {dots.map((dot) => {
        const rank = rankedByDistance.findIndex((d) => d.id === dot.id);
        const removeDelay = rank >= 0 ? Math.min(30 + rank * 55, 640) : 0;

        let opacity = 1;
        let translate = "";
        if (step >= 1 && !dot.inCluster) opacity = 0;
        if (step >= 2 && dot.inCluster) {
          opacity = 0;
          translate = `translate(${INTAKE_POINT.x - dot.x}px, ${INTAKE_POINT.y - dot.y}px)`;
        }

        return (
          <g key={dot.id}>
            <circle
              cx={dot.x}
              cy={dot.y}
              r={dot.r}
              fill="var(--spore)"
              className={[
                animated && !paused ? "spore-dot" : "",
                animated ? "dot-fade" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={
                {
                  opacity,
                  transform: translate || undefined,
                  transitionDelay: step === 2 && dot.inCluster ? `${removeDelay}ms` : "0ms",
                  "--dx": `${dot.dx}px`,
                  "--dy": `${dot.dy}px`,
                  "--dur": `${dot.dur}s`,
                  "--delay": `${dot.delay}s`,
                } as CSSProperties
              }
            />
            {step === 0 && (
              <circle
                cx={dot.x}
                cy={dot.y}
                r={dot.r + 3}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
                className="dot-ring"
                style={{
                  opacity: animated ? undefined : 1,
                  transitionDelay: animated ? `${(dot.x / STAGE_VIEWBOX.w) * 700}ms` : undefined,
                }}
                {...(animated ? { "data-active": "true" } : {})}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

const STEP_STATE_LABEL = ["Field mapped", "Sealed", "Thinning", "Cleared"];

/** Small static preview used by the reduced-motion fallback and the static (non-scroll) page reuse. */
function StaticStepFrame({ step, dots }: { step: number; dots: SporeDot[] }) {
  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-card border border-line bg-canvas-deep">
      <DotField dots={dots} step={step} animated={false} paused />
      {step === 3 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Checkmark active />
        </div>
      )}
    </div>
  );
}

type FourStepsProps = {
  /** "scroll" (default) is the interactive Home hero story; "static" is the /mold-remediation reuse — one step per row, no sticky. */
  variant?: "scroll" | "static";
};

export default function FourSteps({ variant = "scroll" }: FourStepsProps) {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)", false);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const dots = isDesktop ? SPORE_FIELD_DESKTOP : SPORE_FIELD_MOBILE;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const sentinelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (variant !== "scroll" || reduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sentinelRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveStep(index);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    sentinelRefs.current.forEach((el) => el && observer.observe(el));

    const wrapper = wrapperRef.current;
    const visibilityObserver = wrapper
      ? new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0 })
      : null;
    if (wrapper && visibilityObserver) visibilityObserver.observe(wrapper);

    return () => {
      observer.disconnect();
      visibilityObserver?.disconnect();
    };
  }, [variant, reduced]);

  if (variant === "static" || reduced) {
    return (
      <div className={variant === "static" ? "space-y-10" : "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"}>
        {PROCESS_STEPS.map((step, i) =>
          variant === "static" ? (
            <div key={step.label} className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
              <StaticStepFrame step={i} dots={dots} />
              <div>
                <p className="text-small font-semibold text-accent">
                  Step {i + 1} of 4 — {STEP_STATE_LABEL[i]}
                </p>
                <h3 className="mt-1 font-display text-h3 font-semibold text-ink">{step.label}</h3>
                <p className="mt-2 measure text-body text-ink-soft">{step.copy}</p>
              </div>
            </div>
          ) : (
            <div key={step.label} className="rounded-card border border-line bg-canvas-deep p-5">
              <StaticStepFrame step={i} dots={dots} />
              <h3 className="mt-4 font-display text-h3 font-semibold text-ink">{step.label}</h3>
              <p className="mt-2 text-body text-ink-soft">{step.copy}</p>
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="relative" style={{ height: "400vh" }}>
      {PROCESS_STEPS.map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            sentinelRefs.current[i] = el;
          }}
          className="absolute inset-x-0"
          style={{ top: `${i * 25}%`, height: "25%" }}
        >
          {/* Mobile step text scrolls in-flow beneath the sticky stage (44svh). */}
          <div className="flex h-full flex-col justify-center px-6 pt-[44svh] md:hidden">
            <div className="rounded-card bg-canvas/95 p-6 shadow-soft">
              <p className="text-small font-semibold text-accent">Step {i + 1} of 4</p>
              <h3 className="mt-2 font-display text-h3 font-semibold text-ink">{PROCESS_STEPS[i].label}</h3>
              <p className="mt-3 measure text-body text-ink-soft">{PROCESS_STEPS[i].copy}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="sticky top-20 h-[calc(100svh-5rem)] overflow-hidden">
        <div className="grid h-full grid-rows-[44svh_1fr] md:grid-cols-[1fr_1.3fr] md:grid-rows-1">
          <div className="relative order-2 hidden items-center px-6 md:order-1 md:flex md:px-0">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.label}
                className="absolute max-w-md transition-opacity duration-300"
                style={{ opacity: activeStep === i ? 1 : 0, pointerEvents: activeStep === i ? "auto" : "none" }}
              >
                <p className="text-small font-semibold text-accent">Step {i + 1} of 4</p>
                <h3 className="mt-2 font-display text-h2 font-semibold text-ink">{step.label}</h3>
                <p className="mt-4 measure text-body-lg text-ink-soft">{step.copy}</p>
              </div>
            ))}
          </div>

          <div className="relative order-1 md:order-2">
            <DotField dots={dots} step={activeStep} animated paused={!inView} />
            {activeStep === 3 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <Checkmark active={activeStep === 3} />
                <span className="verify-label font-display text-h3 font-semibold text-accent">Cleared</span>
              </div>
            )}
            <div
              aria-hidden
              className={`scan-line absolute left-0 h-[1.5px] w-full bg-accent ${activeStep === 0 ? "is-active" : ""}`}
              style={{ top: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
