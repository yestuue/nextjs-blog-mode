import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,css,scss}",
    "./components/**/*.{ts,tsx,js,jsx,css,scss}",
    "./lib/**/*.{ts,tsx,js,jsx,css,scss}",
    "./**/*.{ts,tsx,js,jsx,css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        white: "#FFFFFF",
        "light-gray": "#F8F9FA",
        "dark-gray": "#2C3E50",
        "medium-gray": "#6C757D",
        "success-green": "#28A745",
        border: "hsl(214, 32%, 91%)",
        background: "#ffffff", // now bg-background works everywhere
        foreground: "#000000",
      },
      fontSize: {
        "main-headline": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        "section-heading": ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.4", fontWeight: "300" }],
        nav: ["1rem", { lineHeight: "1.5", fontWeight: "500" }],
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      backdropBlur: {
        glass: "4px",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
};

export default config;
