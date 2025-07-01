const {test,expect} = require('@playwright/test');

test('HomePage',async ({page})=>{
    await page.goto('https://www.youtube.com/watch?v=ePy0Xl-JpRg&list=PLUDwpEzHYYLsw33jpra65LIvX1nKWpp7-&index=3')
    globalThis.page_title = await page.title()
    console.log('page title ' + page_title)
    await expect(page).toHaveTitle('Playwright with Javascript | How To Create and Run Tests | Part 3 - YouTube')
    await page.close()
})