import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.pepagora.com/post/buyingRequest');
  await page.locator('#product_name').click();
  await page.locator('#product_name').fill('charcoal');
  await page.getByRole('link', { name: 'Select Category' }).click();
  await page.getByText('Energy >> Fossil Energy >>').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('textbox', { name: 'Quantity' }).click();
  await page.getByRole('textbox', { name: 'Quantity' }).fill('20');
  await page.getByRole('combobox').selectOption('Barrel');
  await page.getByRole('textbox', { name: 'Date' }).click();
  await page.getByRole('link', { name: '20' }).click();
  await page.locator('input[name="prd_first_name"]').click();
  await page.locator('input[name="prd_first_name"]').fill('anusuya');
  await page.locator('iframe[name="a-ct1g3tog5hht"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.getByRole('link', { name: 'Submit' }).click();
  await page.locator('#form-validation-field-7').fill('anusuya.supplier@gmail.com');
  await page.locator('div').filter({ hasText: /^This field is required$/ }).first().click();
});