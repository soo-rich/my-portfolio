import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg:         "#0A0A0A",
        surface:    "#111111",
        card:       "#171717",
        "card-2":   "#1C1C1C",
        green:      "#00FF87",
        "green-dim":"#00993D",
        purple:     "#8B5CF6",
        yellow:     "#FFCC00",
        accent:     "#00FF87",
        txt:        "#E0E0E0",
        muted:      "#6B6B6B",
        border:     "#242424",
        "border-2": "#2E2E2E",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-green": "pulseGreen 2s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        pulseGreen: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(0,255,135,0.3)" },
          "50%":     { boxShadow: "0 0 0 8px rgba(0,255,135,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
