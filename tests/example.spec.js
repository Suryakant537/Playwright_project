// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.6.0.min.js' });
  // await page.locator('.getStarted_Sjon').click();
  page.pause()
  await page.evaluate("$('.getStarted_Sjon').click();")
  // Wait for jQuery to load
  // await page.waitForFunction(() => window.$ !== undefined);
  // await page.evaluate(() => {
  //   $('.getStarted_Sjon').click();
  // });
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
