import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        white: '#FFFFFF',
        'light-gray': '#F8F9FA',
        'dark-gray': '#2C3E50',
        'medium-gray': '#6C757D',
        'success-green': '#28A745',
      },
      fontSize: {
        'main-headline': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'section-heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.4', fontWeight: '300' }],
        'nav': ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '4px',
      },
    extend: {
      fontSize: {
        xs: "0.75rem",   // 12px
        sm: "0.875rem",  // 14px
        base: "1rem",    // 16px  → good for body text
        lg: "1.125rem",  // 18px  → slightly bigger
        xl: "1.25rem",   // 20px
        "2xl": "1.5rem", // 24px  → h3
        "3xl": "1.875rem", // 30px → h2
        "4xl": "2.25rem",  // 36px → h1
        "5xl": "3rem",     // 48px → hero title
      },
      fontFamily: {
        sans: ["system-ui"],
      },
      colors: {
        border: "hsl(214, 32%, 91%)",  // light gray
        background: "#ffffff",
        foreground: "#000000",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;