import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  port: 4001,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://localhost:4000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
