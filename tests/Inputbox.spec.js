
const{test, expect}=require('@playwright/test')

test('InputBox Handling', async({page})=>{


    page.goto('https://demo.nopcommerce.com/register');

    // Inputbox Handling

    const inputboxFirstName= await page.locator('//input[@id="FirstName"]').toBeVisible
    //  const inputboxFirstName= await page.locator('//input[@id="FirstName"]').tobeEnabled();
    //await expect(inputboxFirstName).toBeEditable();
    //await expect(inputboxFirstName).toBeVisible();
    //await expect (inputboxFirstName).toBeEmpty();

    await page.locator('//input[@id="FirstName"]').fill('Chirag')

    await page.waitForTimeout(5000);



})