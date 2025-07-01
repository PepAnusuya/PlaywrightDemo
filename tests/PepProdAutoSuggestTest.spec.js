import {test,expect}  from '@playwright/test'

test('ProdAutoSugg',async ({page})=>{
    await page.goto('https://staging.pepagora.com/',{waitUntil:'domcontentloaded'})

    await page.waitForSelector('button[onclick="closePopup()"]')

    await page.click('button[onclick="closePopup()"]')

    test.setTimeout(5000)
    //ul > li strong
    await page.click('form#searchForm input.pep_keyword')
    //await page.fill('form#searchForm input.pep_keyword','Tea')

    //await page.waitForSelector('form#searchForm input[name="products_keyword"]');
    //await page.fill('form#searchForm input[name="products_keyword"]', 'Tea');
    await page.getByRole('textbox', { name: 'Enter product name to search' }).type('Tea');
    //await page.getByRole('textbox', { name: 'Enter product name to search' }).fill('');
    //await page.getByRole('textbox', { name: 'Enter product name to search' }).fill('Tea');
    await page.waitForSelector('ul > li strong',{ timeout: 5000 })

    const searched_list = await page.$$('ul > li strong')

    for(let prod of searched_list) 
        console.log("prods ",prod.textContent)
    await page.close() 
})

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://staging.pepagora.com/');
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByRole('textbox', { name: 'Enter product name to search' }).click();
//   await page.getByRole('textbox', { name: 'Enter product name to search' }).fill('Tea');
//   test.setTimeout(50000)
// //   await page.getByRole('listitem').filter({ hasText: /^Tea$/ }).click();
// //   await page.getByRole('textbox', { name: 'Enter product name to search' }).click();
// //   await page.getByRole('textbox', { name: 'Enter product name to search' }).press('Enter');
//   await page.getByRole('textbox', { name: 'Enter product name to search' }).fill('');
//   await page.getByRole('textbox', { name: 'Enter product name to search' }).fill('Tea');
//   test.setTimeout(50000)
//   await page.waitForSelector('ul > li strong')
//   await page.close()
// });