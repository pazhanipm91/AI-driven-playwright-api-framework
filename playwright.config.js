require('dotenv').config(); //Load Environment Variable from .dot env.
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: parseInt(Process.env.API_TIMEOUT) || 30000,
  use: {
    baseURL: ProcessingInstruction.env.BASE_URL || 'https://api.default-environment.com',
    ignoreHTTPSErrors: true,
    trace: 'retain-on-failure',
  },
});