import {test,expect} from '@playwright/test'

test('LocatorsTest',async ({page})=>{
    await page.goto('https://staging.pepagora.com/',{waitUntil:'domcontentloaded'})
    await page.waitForSelector('button[onclick="closePopup()"]')

    await page.click('button[onclick="closePopup()"]')
    test.setTimeout(10000)
    //const agri = await page.getByAltText('Agriculture').
    
    console.log(await expect(agri).toBeVisible({ timeout: 10000 }))
})