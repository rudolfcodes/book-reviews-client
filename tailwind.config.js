/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
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
        robotoSlab: ["var(--font-roboto-slab)", "serif"],
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
        hero: "#84B5C5",
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
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--fs-auth-size": "18px",
          "--fs-auth-title": "24px",
          "--fs-auth-placeholder": "16px",
          "--fs-menu-item": "18px",
          "--fw-extraBold": "900",
          "--fw-bold": "700",
          "--fw-medium": "500",
          "--fw-regular": "400",
          "--fw-semiBold": "600",
          "--fs-auth-illustration-text": "28px",
          "--f-spacing-4": "0.04em",
        },
        [`@media (min-width: ${theme("screens.lg")})`]: {
          ":root": {
            "--fs-auth-title": "30px",
            "--fs-auth-size": "20px",
          },
        },
        h1: {
          fontFamily: theme("fontFamily.inter"),
          fontSize: "var(--fs-auth-title)",
          lineHeight: theme("lineHeight.normal"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: theme("letterSpacing.tight"),
        },
        ".subtitle": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: "var(--fs-auth-size)",
          lineHeight: theme("lineHeight.normal"),
          fontWeight: theme("fontWeight.medium"),
          letterSpacing: theme("letterSpacing.tight"),
        },
        ".illustration-text": {
          fontFamily: theme("fontFamily.robotoSlab"),
          fontSize: "var(--fs-auth-illustration-text)",
          fontWeight: "var(--fw-medium)",
        },
        ".bold-700": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: "var(--fs-auth-size)",
          fontWeight: "var(--fw-bold)",
        },
        ".semiBold-600": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: "var(--fs-menu-item)",
          fontWeight: "var(--fw-semiBold)",
        },
      });
    }),
  ],
};
