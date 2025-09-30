/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode
  i18n: {
    locales: ["en", "de", "fr", "it"],
    defaultLocale: "en",
  },
};
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = nextConfig;
