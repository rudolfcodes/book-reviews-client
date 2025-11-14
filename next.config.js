/** @type {import('next').NextConfig} */
/* Add images.unsplash to next config */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode
  i18n: {
    locales: ["en", "de", "fr", "it"],
    defaultLocale: "en",
  },
  images: {
    domains: ["unsplash.com","images.unsplash.com"],
  },
};
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = nextConfig;
