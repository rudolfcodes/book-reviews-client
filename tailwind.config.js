/** @type {import('tailwindcss').Config} */
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
        openSans: ["var(--font-open-sans)", "sans-serif"],
      },
      fontSize: {
        "auth-title": ["24px", { lineHeight: "normal" }],
        "auth-size": ["18px", { lineHeight: "normal" }],
        "big-title": ["48px", { lineHeight: "53px" }],
        "menu-item": ["18px", { lineHeight: "normal" }],
        "card-title": ["20px", { lineHeight: "25px" }],
        "section-title": [
          "40px",
          { lineHeight: "20px", fontFamily: "openSans", fontWeight: "600" },
        ],
        "banner-title": [
          "32px",
          { lineHeight: "42px", fontFamily: "openSans", fontWeight: "600" },
        ],
      },
      fontWeight: {
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "900",
      },
      letterSpacing: {
        tight: "-0.02em",
        wider: "0.04em",
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
        "border-grey": "#E5E7EB",
        "input-color": "#4B5563",
        "badge-green": "#33D71D",
        "badge-default": "#ECECEC",
        "badge-text": "#12792E",
        "badge-circular": "#D71D22",
        stats: "#7D7676",
        hero: "#84B5C5",
        error: "#D81C22",
      },
      boxShadow: {
        "custom-black": "0 0 50px 5px rgba(0, 0, 0, 0.05)",
        "dark-input": "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        // Internal components
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",

        // Section spacing
        "section-sm": "3rem",
        "section-lg": "7.75rem",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
