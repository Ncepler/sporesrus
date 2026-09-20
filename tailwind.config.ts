import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        "canvas-deep": "var(--canvas-deep)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        line: "var(--line)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
        spore: "var(--spore)",
        "on-accent": "var(--on-accent)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(2.75rem, 6.2vw + 1rem, 6.25rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        h2: ["clamp(2rem, 3.4vw + 1rem, 3.75rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        h3: ["clamp(1.375rem, 1.1vw + 1rem, 1.75rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        body: ["17px", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        meta: ["0.8125rem", { lineHeight: "1.5" }],
      },
      borderRadius: {
        card: "20px",
        input: "14px",
        slider: "24px",
      },
      boxShadow: {
        soft: "0 10px 28px -10px rgba(13,27,24,0.14)",
        lift: "0 16px 32px -10px rgba(13,27,24,0.2)",
      },
      maxWidth: {
        container: "1240px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
