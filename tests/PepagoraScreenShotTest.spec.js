import {test,expect} from '@playwright/test'

test('page screenshot',async({page})=>{
    await page.goto('https://staging.pepagora.com/',{waitUntil:'domcontentloaded'})

    await page.waitForSelector('button[onclick="closePopup()"]')
    await page.click('button[onclick="closePopup()"]')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'PepagoraHomePage.png'})
});

test('page screenshot1',async({page})=>{
    await page.goto('https://staging.pepagora.com/',{waitUntil:'domcontentloaded'})

    await page.waitForSelector('button[onclick="closePopup()"]')
    await page.click('button[onclick="closePopup()"]')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'PepagoraHomePage.png',fullPage:true})
});