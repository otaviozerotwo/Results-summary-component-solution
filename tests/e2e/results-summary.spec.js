import { test, expect } from '@playwright/test';

test('display each category with its correct score', async ({ page }) => {
  const expectedResults = [
    { category: 'Reaction', score: 80 },
    { category: 'Memory', score: 92 },
    { category: 'Verbal', score: 61 },
    { category: 'Visual', score: 73 },
  ];

  await page.goto('./');

  const items = page.getByRole('listitem');

  await expect(items).toHaveCount(4);

  for (const { category, score } of expectedResults) {
    const item = items.filter({
      has: page.getByText(category, { exact: true }),
    });

    await expect(item).toBeVisible();

    await expect(item).toContainText(
      new RegExp(`(?<!\\d)${score}\\s*/\\s*100\\s*$`)
    );
  }
});

test('displays the average score', async ({ page }) => {
  await page.goto('./');

  const result = page.getByRole('region', {
    name: 'Your Result',
  });

  await expect(
    result.getByText('76', { exact: true })
  ).toBeVisible();
});

test('displays an error when loading results fails', async ({ page }) => {
  await page.route('**/data/data.json', async (route) => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Internal server error' }),
    });
  });

  await page.goto('./');

  await expect(
    page.getByText('Unable to load results.', {
      exact: true,
    })
  ).toBeVisible();

  await expect(
    page.getByText('Loading results...', { exact: true })
  ).not.toBeVisible();

  await expect(page.getByRole('listitem')).toHaveCount(0);
});

test('displays an error when a network failure occurs', async ({ page }) => {
  await page.route('**/data/data.json', async (route) => {
    await route.abort('failed');
  });

  await page.goto('./');

  await expect(
    page.getByText('Unable to load results.', {
      exact: true,
    })
  ).toBeVisible();

  await expect(
    page.getByText('Loading results...', { exact: true })
  ).not.toBeVisible();

  await expect(page.getByRole('listitem')).toHaveCount(0);
});

test('displays loading until results arrive', async ({ page }) => {
  let releaseRequest;

  const responseGate = new Promise((resolve) => {
    releaseRequest = resolve;
  });

  await page.route('**/data/data.json', async (route) => {
    await responseGate;
    await route.continue();
  });

  await page.goto('./', { waitUntil: 'domcontentloaded' });

  const loading = page.getByText('Loading results...', {
    exact: true,
  });

  try {
    await expect(loading).toBeVisible();
    await expect(page.getByRole('listitem')).toHaveCount(0);
  } finally {
    releaseRequest();
  }

  await expect(page.getByRole('listitem')).toHaveCount(4);
  await expect(loading).not.toBeVisible();
});