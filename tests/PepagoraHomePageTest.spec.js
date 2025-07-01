const {test,expect} =  require('@playwright/test')
test.use({ ignoreHTTPSErrors: true });
test('PepagoraTitle',async({page})=>{
    await page.goto('https://staging.pepagora.com/',{waitUntil:'domcontentloaded'})
    // Wait for the popup and close button to appear
  await page.waitForSelector('button', { hasText: '×' });
    test.setTimeout(6000)
  // Click the close (×) button
  await page.click('button:has-text("×")');
    //test.setTimeout(6000)
  // Optional: assert that popup is closed
  // For example, check that popup container is hidden or removed
  //await expect(page.locator('#your-popup-selector')).toBeHidden();
    const page_title = await page.title()
    console.log('page title ' + page_title)
    console.log(page.url())
    await expect(page).toHaveTitle('Manufacturers, Supplier, Exporters, Wholesaler & Traders at Pepagora B2B Portal')    
    await page.close()
})