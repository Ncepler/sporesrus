"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once a ref's element crosses 20% into the viewport, then stays true —
 * matches CLAUDE.md §6.4's scroll-reveal spec (fade up 16px + opacity, 500ms
 * ease-out, 20% trigger). Reused by ScrollReveal and ProcessSteps.
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
