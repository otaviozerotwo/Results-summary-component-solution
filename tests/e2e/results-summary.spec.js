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
