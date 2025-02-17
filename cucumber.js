const { defineConfig } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  default: {
    require: ["cypress/support/step_definitions/**/*.js"],
    paths: ["cypress/e2e/**/*.feature"],
    format: ["progress"],
  },
});