const { test, expect } = require('@playwright/test');

test("Window switching", async ({ browser }) => {
  
    const context=await browser.newContext();
    const page=await context.newPage();


    await page.goto("https://headway.org.in/");

  const [facebook]= await Promise.all([
   
    await context.waitForEvent("page"),
    page.locator('xpath=//button[@aria-labelledby="facebook"]//img[@class="w-5 aspect-square"]').click()

  ])
        await facebook.waitForLoadState('domcontentloaded')
        await facebook.locator('input[name="email"][type="text"]').fill('Chirag.Bhatt191@gmail')

       await facebook.close();
    });