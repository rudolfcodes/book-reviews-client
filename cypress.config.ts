import { defineConfig } from "cypress";

// Test account credentials are read from cypress.env.json (not committed).
// Copy cypress.env.example.json to cypress.env.json and fill in your own values.
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
  },
});
