import {test,expect} from '@playwright/test'

test('ProductNames',async ({page})=>{
    
    await page.goto('https://staging.pepagora.com/',{waitUntil:'domcontentloaded'})

    await page.waitForSelector('button[onclick="closePopup()"]')

    await page.click('button[onclick="closePopup()"]')

    const elements = await page.$$('li.sMbg > a');

    for(const element of elements) {
        const prod_name = await element.textContent()
        console.log(prod_name)
    }
})