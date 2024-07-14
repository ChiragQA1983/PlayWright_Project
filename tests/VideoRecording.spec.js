
const{test, expect}=require('@playwright/test')

test("Video Recording on Failure", async({page})=>{

 //Playwright with Javascript | How to record videos for Tests | Part 30

  
    await page.goto("https://demoblaze.com/")

    await page.click('#login2')
   
    //await page.locator('#loginusername').fill("pavanol") <- another approch like sendkeys in selenium
    await page.fill('#loginusername', 'pavanol')
    await page.fill('#loginpassword', 'test@123')

    await page.click('//button[normalize-space()="Log in"]') 

    const LogouttextVerification=await page.locator('#logout2')
     
    await expect (LogouttextVerification).toHaveText('Log ou')


 })





