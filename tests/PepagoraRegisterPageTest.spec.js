import { test, expect } from '@playwright/test';
// tests/registration.spec.ts
import { validTestData, invalidTestData, RegistrationData } from '../data/registrationData';

//test.describe('✅ Valid Registration Scenarios', () => {
//   validTestData.forEach((data, index) => {
//     test(`Register Valid User - Set ${index + 1}`, async ({ page }) => {
//       await page.goto('https://staging.pepagora.com/', { waitUntil: 'domcontentloaded' });

//       try {
//         await page.click('button[onclick="closePopup()"]', { timeout: 3000 });
//       } catch (e) {
//         console.log('No popup');
//       }

//       await page.click("//a[text()='Join Free']");
//       await expect(page).toHaveURL('https://staging.pepagora.com/connect');

//       await page.fill("input[name*='firstname']", data.name);
//       await page.fill("//input[@id='email']", data.email);
//       await page.fill("(//input[@id='password'])[2]", data.password);
//       await page.fill("//input[@placeholder='Mobile']", data.mobile);
//       await page.click("input[id*='terms']");

//       // ✅ Success Check
//      // const success = await page.locator("text=OTP Verification").isVisible();
//       //expect(success).toBe(true);
//     });
//   });
// });

test.describe(' Invalid Registration Scenarios', () => {
  invalidTestData.forEach((data, index) => {
    test(`Register Invalid User - Set ${index + 1}`, async ({ page }) => {
      await page.goto('https://staging.pepagora.com/', { waitUntil: 'domcontentloaded' });

      try {
        await page.click('button[onclick="closePopup()"]', { timeout: 3000 });
      } catch (e) {
        console.log('No popup');
      }

      await page.click("//a[text()='Join Free']");
      await expect(page).toHaveURL('https://staging.pepagora.com/connect');

      // await page.fill("input[name*='firstname']", data.name);
      // await page.fill("//input[@id='email']", data.email);
      // await page.fill("(//input[@id='password'])[2]", data.password);
      // await page.fill("//input[@placeholder='Mobile']", data.mobile);
      // await page.click("input[id*='terms']");
      const nameField = page.locator("input[name*='firstname']");
    await nameField.waitFor({ state: 'visible' });
    await nameField.click({ force: true });
    await page.waitForTimeout(300); // give frontend time to "settle"
    await nameField.type(data.name, { delay: 100 }); // human-like typing

    const emailField = page.locator("//input[@id='email']");
    await emailField.click({ force: true });
    await page.waitForTimeout(300);
    await emailField.type(data.email, { delay: 100 });

await page.locator("(//input[@id='password'])[2]").type(data.password);
await page.locator("(//input[@id='password'])[2]").press('Tab'); // 👈 triggers password validation

await page.locator("//input[@placeholder='Mobile']").type(data.mobile);
await page.locator("//input[@placeholder='Mobile']").press('Tab'); // 👈 triggers mobile validation


      await page.waitForTimeout(1000);

      for (const errorText of data.expectedErrors) {
        const errorLocator = page.locator('span', { hasText: errorText });
        //expect(await errorLocator.isVisible()).toBe(true);
        await expect(errorLocator).toBeVisible({ timeout: 5000 });
        
      }
    });
  });
});
