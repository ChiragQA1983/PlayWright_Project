
const{test, expect}=require('@playwright/test')

test('Handle CheckBox and Radio Button', async({page})=>{


    await page.goto('https://demo.nopcommerce.com/register')


    //await page.locator('#gender-male').check();
    // another method of handle radiobutton or checkbox

    await page.check('#gender-male')

  //  await expect (await page.locator('#gender-male')).toBeChecked();
  // Other method for assertions 
  await expect (await page.locator('#gender-male').isChecked()).toBeTruthy();
  

  // Verify assertions with unchecked radio button with toBeFalsy() assertion
  await expect (await page.locator('#gender-female').isChecked()).toBeFalsy();

})