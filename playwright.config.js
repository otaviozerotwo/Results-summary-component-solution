import { defineConfig, devices } from '@playwright/test';
import process from 'node:process';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';

const testEnv = process.env.TEST_ENV || 'local';

if (!['local', 'production'].includes(testEnv)) {
  throw new Error(`invalid TEST_ENV: ${testEnv}`);
}

dotenv.config({
  path: fileURLToPath(
    new URL(`.env.${testEnv}`, import.meta.url)
  ),
});

const baseURL = process.env.E2E_BASE_URL;

if (!baseURL) {
  throw new Error(
    `Define E2E_BASE_URL on environment or .env.${testEnv}`
  );
}

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  webServer: testEnv === 'local'
    ? {
        command: 'npm run dev -- --port 5173 --strictPort',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
      }
    : undefined,
});

