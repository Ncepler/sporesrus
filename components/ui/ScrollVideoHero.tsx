"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import ParticleField from "@/components/ui/ParticleField";

type ScrollVideoHeroProps = {
  videoSrc: string;
  posterSrc: string;
  fallbackImageSrc: string;
  fallbackImageAlt: string;
  headline: ReactNode;
  paragraph: ReactNode;
  ctas: ReactNode;
  trustLines: string[];
};

type Mode = "static" | "video" | "reduced";

const SCRUB_END = 0.9; // progress 0–0.9 maps to video time 0–duration; 0.9–1 holds the final frame.
const EASE = 0.12; // lerp factor for the eased progress value.

/** Opacity for a copy band that's visible across one or two progress windows, with a soft fade at each edge. */
function bandOpacity(p: number, windows: [number, number][], fade = 0.06) {
  let opacity = 0;
  for (const [start, end] of windows) {
    let o = 0;
    if (p < start - fade) o = 0;
    else if (p < start) o = (p - (start - fade)) / fade;
    else if (p <= end) o = 1;
    else if (p < end + fade) o = 1 - (p - end) / fade;
    else o = 0;
    opacity = Math.max(opacity, o);
  }
  return opacity;
}

function applyBand(el: HTMLElement | null, opacity: number) {
  if (!el) return;
  el.style.opacity = String(opacity);
  el.style.transform = `translateY(${(1 - opacity) * 16}px)`;
}

export default function ScrollVideoHero({
  videoSrc,
  posterSrc,
  fallbackImageSrc,
  fallbackImageAlt,
  headline,
  paragraph,
  ctas,
  trustLines,
}: ScrollVideoHeroProps) {
  const [mode, setMode] = useState<Mode>("static");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  // Decide static / video / reduced-motion once on mount (and on breakpoint
  // or motion-preference changes) — never during SSR, so the first paint
  // always matches the safe static fallback.
  useEffect(() => {
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = window.matchMedia("(max-width: 767px)");

    const update = () => {
      if (reduceMq.matches) setMode("reduced");
      else if (mobileMq.matches) setMode("static");
      else setMode("video");
    };

    update();
    reduceMq.addEventListener("change", update);
    mobileMq.addEventListener("change", update);
    return () => {
      reduceMq.removeEventListener("change", update);
      mobileMq.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (mode !== "video") return;

    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    if (!wrapper || !video) return;

    let rafId: number;

    const tick = () => {
      const rect = wrapper.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const target = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;

      const current = progressRef.current;
      const next = Math.abs(target - current) < 0.0006 ? target : current + (target - current) * EASE;
      progressRef.current = next;

      if (video.duration && isFinite(video.duration)) {
        const videoProgress = Math.min(1, next / SCRUB_END);
        video.currentTime = videoProgress * video.duration;
      }

      applyBand(headlineRef.current, bandOpacity(next, [[0, 0.25], [0.8, 1]]));
      applyBand(paragraphRef.current, bandOpacity(next, [[0.45, 0.7], [0.8, 1]]));
      applyBand(ctasRef.current, bandOpacity(next, [[0.8, 1]]));
      applyBand(trustRef.current, bandOpacity(next, [[0.8, 1]]));

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [mode]);

  // iOS refuses to seek a video that hasn't been primed with a play/pause.
  const primeForIOS = () => {
    const video = videoRef.current;
    if (!video) return;
    video
      .play()
      .then(() => video.pause())
      .catch(() => {});
  };

  if (mode === "reduced") {
    return (
      <section id="hero" className="relative overflow-hidden bg-canvas">
        <div className="relative h-[70vh] min-h-[560px] w-full">
          <Image src={posterSrc} alt={fallbackImageAlt} fill priority sizes="100vw" className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end px-[clamp(1.25rem,4vw,3rem)] pb-16 lg:pb-24">
            <div className="text-white">{headline}</div>
            <div className="mt-6 text-white/85">{paragraph}</div>
            <div className="mt-8">{ctas}</div>
            <ul className="mt-10 flex flex-col gap-2 text-white/85 sm:flex-row sm:gap-8">
              {trustLines.map((line) => (
                <li key={line} className="measure text-body text-white/85">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  if (mode === "static") {
    return (
      <section id="hero" className="relative -mt-20 overflow-hidden bg-canvas pt-32 pb-16 lg:pb-24">
        <ParticleField />
        <div className="relative z-10 grid gap-10 px-[clamp(1.25rem,4vw,3rem)] lg:grid-cols-[minmax(0,540px)_1fr] lg:items-center lg:gap-12 lg:pr-0">
          <div>
            <div className="hero-line text-ink">{headline}</div>
            <div className="hero-line mt-6 text-ink-soft" style={{ animationDelay: "120ms" }}>
              {paragraph}
            </div>
            <div className="hero-line mt-8 flex flex-wrap items-center gap-x-6 gap-y-4" style={{ animationDelay: "180ms" }}>
              {ctas}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-soft lg:aspect-auto lg:h-[560px] lg:rounded-l-card lg:rounded-r-none">
            <Image
              src={fallbackImageSrc}
              alt={fallbackImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="hero-photo object-cover"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" ref={wrapperRef} className="relative h-[400vh] bg-canvas">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={primeForIOS}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-end px-[clamp(1.25rem,4vw,3rem)] pb-16 lg:pb-24">
          <div
            ref={headlineRef}
            className="text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]"
            style={{ opacity: 0, transform: "translateY(16px)" }}
          >
            {headline}
          </div>
          <div
            ref={paragraphRef}
            className="mt-6 text-white/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
            style={{ opacity: 0, transform: "translateY(16px)" }}
          >
            {paragraph}
          </div>
          <div ref={ctasRef} className="mt-8" style={{ opacity: 0, transform: "translateY(16px)" }}>
            {ctas}
          </div>
          <div ref={trustRef} style={{ opacity: 0, transform: "translateY(16px)" }}>
            <ul className="mt-10 flex flex-col gap-2 sm:flex-row sm:gap-8">
              {trustLines.map((line) => (
                <li
                  key={line}
                  className="measure text-body text-white/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
