import {test,expect} from '@playwright/test'

test('RegisterTest',async ({page})=>{
    await page.goto('https://staging.pepagora.com/',{waitUntil:'domcontentloaded'})

    await page.waitForSelector('button[onclick="closePopup()"]')
    await page.click('button[onclick="closePopup()"]')
    
    await page.click("//a[text()='Join Free']")
    
    await expect(page).toHaveURL('https://staging.pepagora.com/connect')
    await page.waitForSelector("//img[contains(@src,'pep-agora')]")
    await page.fill("input[name*='firstname']","Anusuya")
    await page.fill("//input[@id='email']","anusuya.supplier@gmail.com")
    await page.fill("(//input[@id='password'])[2]","Murugan")
    await page.fill("//input[@placeholder='Mobile']",'9632370046')
    await page.click("input[id*='terms']")
    //await page.close()
})