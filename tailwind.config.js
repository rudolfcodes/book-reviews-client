/** @type {import('tailwindcss').Config} */
import plugin from "@tailwindcss/typography";
// All headings need to be Inter 30px Extra Bold
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
      },
      colors: {
        subtitle: "#777777",
        label: "#000000",
        placeholder: "#B5B5B5",
        "off-white": "#F3F3F3",
        "blue-cream": "#63ABC3",
        "primary-grey": "#7C7C7C",
        "modern-primary": "#2D2D2A",
        "modern-secondary": "#FAF3E0",
        "modern-accent": "#E4572E",
        error: "#D81C22",
      },
      boxShadow: {
        "custom-black": "0 0 50px 5px rgba(0, 0, 0, 0.05)",
        "dark-input": "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        "auth-gap": "46px",
      },
    },
    fontSize: {
      "auth-title": [
        "30px",
        {
          lineHeight: "normal",
          fontWeight: "900",
          letterSpacing: "0.04em",
        },
      ],
      "auth-subtitle": [
        "20px",
        { lineHeight: "normal", fontWeight: "500", letterSpacing: "0.04em" },
      ],
      "auth-label": [
        "18px",
        { lineHeight: "normal", fontWeight: "500", letterSpacing: "0.04em" },
      ],
      "auth-placeholder": [
        "16px",
        { lineHeight: "normal", fontWeight: "400", letterSpacing: "0.04em" },
      ],
      "auth-illustration-text": [
        "28px",
        {
          fontFamily: "RobotoSlab",
          lineHeight: "normal",
          fontWeight: "bold",
          letterSpacing: "0em",
        },
      ],
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, theme }) {
      addBase({
        root: {
          /* sizes */
          "--fs-mobile-auth-title": "24px",
          "--fs-mobile-auth-subtitle": "18px",
          "--fs-mobile-auth-placeholder": "16px",
        },
        h1: {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.auth-title"),
          lineHeight: theme("lineHeight.normal"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: theme("letterSpacing.tight"),
        },
      });
    }),
  ],
};
