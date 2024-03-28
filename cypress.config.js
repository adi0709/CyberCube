const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
      projectId: "f2w5tr",
      // ...rest of the Cypress project config
    chromeWebSecurity: false,
    "html": {
      "enabled": true
    },
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});