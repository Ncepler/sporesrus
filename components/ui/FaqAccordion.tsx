"use client";

import { useState } from "react";

export type FaqEntry = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-card border border-line bg-canvas-deep">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-h3 font-semibold text-ink">{item.question}</span>
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center text-h3 font-semibold text-accent transition-transform duration-150"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" className={`accordion-panel ${isOpen ? "is-open" : ""}`}>
              <div>
                <p className="px-6 pb-6 text-body text-ink-soft">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
