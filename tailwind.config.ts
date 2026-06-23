import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charte graphique Aures Drive
        navy: {
          DEFAULT: "#0B1F3A", // Bleu Marseille profond
          50: "#eef3fa",
          100: "#d6e2f1",
          200: "#aec5e3",
          300: "#7fa1d0",
          400: "#4c74b3",
          500: "#2b5191",
          600: "#1c3c73",
          700: "#142d57",
          800: "#0e2247",
          900: "#0B1F3A",
          950: "#06121f",
        },
        azur: {
          DEFAULT: "#1AA0E0", // Azur Méditerranée
          50: "#ecf9ff",
          100: "#d3f0ff",
          200: "#aae3ff",
          300: "#6dd0ff",
          400: "#28b6f5",
          500: "#1AA0E0",
          600: "#0c7fbb",
          700: "#0d6597",
          800: "#11567c",
          900: "#144867",
          950: "#0d2d44",
        },
        ink: "#0A0E14", // Noir profond
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 50px -20px rgba(11, 31, 58, 0.35)",
        "premium-lg": "0 30px 80px -25px rgba(11, 31, 58, 0.45)",
        glow: "0 0 0 1px rgba(26, 160, 224, 0.25), 0 12px 40px -12px rgba(26, 160, 224, 0.45)",
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #06121f 0%, #0B1F3A 45%, #11567c 100%)",
        "gradient-azur": "linear-gradient(135deg, #0B1F3A 0%, #1c3c73 50%, #1AA0E0 100%)",
        "gradient-shine": "linear-gradient(120deg, #1AA0E0 0%, #6dd0ff 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.3)", opacity: "0" },
          "100%": { transform: "scale(1.3)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
