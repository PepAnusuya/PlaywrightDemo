// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://staging.pepagora.com/');
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByRole('textbox', { name: 'Enter product name to search' }).click();
//   await page.getByRole('textbox', { name: 'Enter product name to search' }).fill('Tea');
//   await page.getByRole('textbox', { name: 'Enter product name to search' }).click();
//   await page.getByText('Tea Bags').click();
//   await test.setTimeout(1000)
// });
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.pepagora.com/');
  await page.waitForSelector('button[onclick="closePopup()"]')
  await page.getByRole('button', { name: '×' }).click(); // Close popup if any

  const textbox = page.getByRole('textbox', { name: 'Enter product name to search' });
  await textbox.click();
  await textbox.fill('Tea');
  await textbox.click();

  await page.waitForTimeout(1000); // Optional delay to see suggestions

  await page.getByText('Tea Bags').click();

  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  // Optional assertion to check if navigation or result happened
  await expect(page).toHaveURL('https://staging.pepagora.com/product/search/Tea+Bags'); // adjust regex as per URL format
});
