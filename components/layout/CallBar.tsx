"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CallButton from "@/components/ui/CallButton";
import { PHONE_SET } from "@/lib/phone";

/**
 * Sticky mobile call bar. Shows once the visitor has scrolled past the
 * hero (or, on hero-less pages, a short distance down) and hides whenever
 * the footer, a closing call band (marked data-closing-cta), or the mobile
 * menu is in view — those already offer the same call action.
 */
export default function CallBar() {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onMenu = (e: Event) => setMenuOpen(Boolean((e as CustomEvent<boolean>).detail));
    window.addEventListener("sporesrus:menu", onMenu as EventListener);
    return () => window.removeEventListener("sporesrus:menu", onMenu as EventListener);
  }, []);

  useEffect(() => {
    setPastHero(false);
    setFooterVisible(false);
    setCtaVisible(false);

    const cleanups: Array<() => void> = [];
    const hero = document.getElementById("hero");

    if (hero) {
      const io = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0 });
      io.observe(hero);
      cleanups.push(() => io.disconnect());
    } else {
      let raf = 0;
      const onScroll = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => setPastHero(window.scrollY > 280));
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener("scroll", onScroll);
      });
    }

    const footer = document.querySelector("footer");
    if (footer) {
      const io = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), {
        threshold: 0,
        rootMargin: "0px 0px -10% 0px",
      });
      io.observe(footer);
      cleanups.push(() => io.disconnect());
    }

    const ctaBands = document.querySelectorAll("[data-closing-cta]");
    if (ctaBands.length) {
      const io = new IntersectionObserver((entries) => setCtaVisible(entries.some((e) => e.isIntersecting)), {
        threshold: 0.2,
      });
      ctaBands.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  if (!PHONE_SET) return null;

  const visible = pastHero && !footerVisible && !ctaVisible && !menuOpen;

  return (
    <div
      aria-hidden={!visible}
      className="call-bar fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas p-3 lg:hidden"
      style={{
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <CallButton showNumber className="w-full" />
    </div>
  );
}
