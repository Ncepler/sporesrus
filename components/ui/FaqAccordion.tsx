"use client";

import { useState } from "react";

export type FaqEntry = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-rule rounded-card border border-rule bg-surface">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-h3 font-semibold text-text-primary">
                {item.question}
              </span>
              <span
                aria-hidden
                className="shrink-0 text-h3 font-semibold text-accent transition-transform duration-150"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-body text-text-secondary">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
