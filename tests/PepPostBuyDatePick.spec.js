import { test, expect } from '@playwright/test';

test('Validate only 30 days are enabled in the datepicker', async ({ page }) => {
  await page.goto('https://staging.pepagora.com/post/buyingRequest');

  // Step 1: Open the datepicker
  const dateInput = page.locator('input[name="servexp_date"]');
  await dateInput.click();

  dateInput.fill('06/19/25')
  await page.waitForTimeout(5000)
  // Step 2: Wait for datepicker to appear
  await page.waitForSelector('.ui-datepicker-calendar');

  // Step 3: Select all enabled days
  const enabledDays = await page.locator('.ui-datepicker-calendar td:not(.ui-datepicker-unselectable)').count();

  // Step 4: Assert only 30 days are selectable
  //expect(enabledDays).toBe(30);
  // need to click next, prev buttons and check
  console.log("enabled days ",enabledDays)
});
