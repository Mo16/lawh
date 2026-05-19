import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // CoolFix-inspired sky-blue brand palette
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#f1f7fc",
          100: "#dceaf6",
          200: "#bcd6ec",
          300: "#8db8dd",
          400: "#5e98ca",
          500: "#3d7eb3",
          600: "#2e6498",
          700: "#28527c",
          800: "#244668",
          900: "#1f3a57",
          950: "#13243a",
        },
        // Very pale ice-blue surface tones (used for hero / section backgrounds)
        sky: {
          50: "#f5fafd",
          100: "#e9f2fa",
          200: "#d4e6f4",
          300: "#bcd6eb",
          400: "#9cc1de",
          500: "#79a9cf",
        },
        // CTA — vibrant amber/orange. The single conversion color across the site.
        cta: {
          DEFAULT: "#FF6B00",
          50: "#fff5eb",
          100: "#ffe6cc",
          200: "#ffc999",
          300: "#ffac66",
          400: "#ff8a33",
          500: "#FF6B00",
          600: "#e55a00",
          700: "#bd4a00",
          800: "#963c00",
          900: "#702c00",
        },
        // Accent kept as alias for legacy components — same orange
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "#fff5eb",
          100: "#ffe6cc",
          200: "#ffc999",
          300: "#ffac66",
          400: "#ff8a33",
          500: "#FF6B00",
          600: "#e55a00",
          700: "#bd4a00",
          800: "#963c00",
          900: "#702c00",
        },
        // Emergency-only red — never used for normal CTAs
        emergency: {
          DEFAULT: "#DC2626",
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          400: "#f87171",
          500: "#ef4444",
          600: "#DC2626",
          700: "#b91c1c",
          800: "#991b1b",
        },
        flame: {
          50: "#fef2f2",
          400: "#f87171",
          500: "#ef4444",
          600: "#DC2626",
          700: "#b91c1c",
        },
        // Ink — near-black headline / body text on light surfaces
        ink: {
          DEFAULT: "#0c1422",
          50: "#f6f7f9",
          100: "#e8ebef",
          200: "#cfd5dd",
          300: "#a3aebd",
          400: "#6c7a8e",
          500: "#475467",
          600: "#2f3a4d",
          700: "#1c2638",
          800: "#131c2c",
          900: "#0c1422",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        wordmark: ["var(--font-wordmark)", "Impact", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 107, 0, 0.5)" },
          "50%": { boxShadow: "0 0 0 14px rgba(255, 107, 0, 0)" },
        },
        "pulse-emergency": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(220, 38, 38, 0.55)" },
          "50%": { boxShadow: "0 0 0 14px rgba(220, 38, 38, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-out infinite",
        "pulse-emergency": "pulse-emergency 2s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
