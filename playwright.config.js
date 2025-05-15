// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 0,
  reporter: [['html']],
  use: {
    headless: false,
    // args: ['--start-maximized'],
    // viewport: null,
    viewport: { width: 1600, height: 1080 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
