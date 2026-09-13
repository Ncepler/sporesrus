import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F7F9F8",
        surface: "#EDF2F0",
        rule: "#D8E0DC",
        "text-primary": "#121815",
        "text-secondary": "#454F4A",
        "text-tertiary": "#5B655F",
        accent: {
          DEFAULT: "#00875E",
          hover: "#00764F",
        },
        "accent-2": "#B25B00",
        "on-accent": "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        h1: ["36px", { lineHeight: "1.15" }],
        "h1-lg": ["56px", { lineHeight: "1.15" }],
        h2: ["28px", { lineHeight: "1.15" }],
        "h2-lg": ["40px", { lineHeight: "1.15" }],
        h3: ["22px", { lineHeight: "1.15" }],
        "h3-lg": ["28px", { lineHeight: "1.15" }],
        body: ["16px", { lineHeight: "1.6" }],
        "body-lg": ["17px", { lineHeight: "1.6" }],
        meta: ["13px", { lineHeight: "1.6" }],
        "meta-lg": ["14px", { lineHeight: "1.6" }],
      },
      borderRadius: {
        card: "20px",
        input: "14px",
        slider: "24px",
      },
      boxShadow: {
        soft: "0 10px 28px -10px rgba(18,24,21,0.14)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
