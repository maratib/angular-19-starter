import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Ang9/);
  await expect(page).toHaveTitle("Ang9");
});
