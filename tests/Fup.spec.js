const { test, expect } = require('@playwright/test');
const exp = require('constants');
const path=require('path');

test('File upload', async ({ page }) => {
    await page.goto('https://headway.org.in/#/login');
    await page.locator("//input[@inputmode='numeric']").fill('9825693304');
    await page.getByRole('button', { name: 'Get OTP' }).click();

    await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[1]").fill('0');
    await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[2]").fill('0');
    await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[3]").fill('9');
    await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[4]").fill('6');

    await page.getByRole('button', { name: 'Verify' }).click();

    await page.locator("xpath=//img[@class='w-8 h-8 rounded-full ']").click();
    await page.locator("xpath=//div[normalize-space()='My Account']").click();
   
    await page.locator("xpath=//div[contains(@class,'max-md:pr-5 font-medium text-orange-500 terms_bg_clr')]").click();

    const filePath = path.resolve('tests/Ayane.png');

    //const fileinput = await page.getByAltText('Profile')

    const fileinput = await page.locator("xpath=//img[@alt='Profile']")
  
    await expect(fileinput).toBeVisible();

    await fileinput.setInputFiles(filePath)
  
    await page.waitForTimeout(3000); 
});
