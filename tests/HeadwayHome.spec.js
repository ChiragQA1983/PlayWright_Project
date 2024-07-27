import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  test.setTimeout(90000);
  await page.goto('https://headway.org.in/');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('9825693304');
  await page.getByRole('button', { name: 'Get OTP' }).click();
  
  await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[1]").fill('0');
  await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[2]").fill('0');
  await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[3]").fill('9');
  await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[4]").fill('6');
  await page.getByRole('button', { name: 'Verify' }).click();
 

  // Wait for 'Our Products' element and click
  const ourProducts = page.locator("//img[@alt='Products']");
  await ourProducts.waitFor({ state: 'visible' });
  await ourProducts.click();  
 
 
  // Retry mechanism for the 'plan' element
 const plan = page.locator("//div[normalize-space()='Plan Pricing']//div[@id='menu-item-0']");
 let planClicked = false;
 const maxRetries = 5;
 const retryDelay = 1000; // 1 second

 for (let i = 0; i < maxRetries; i++) {
   try {
     await plan.waitFor({ state: 'visible', timeout: 10000 });
     await plan.click();
     planClicked = true;
     break; // Exit loop if click is successful
   } catch (error) {
     console.error(`Attempt ${i + 1} failed: ${error}`);
     if (i < maxRetries - 1) {
       await page.waitForTimeout(retryDelay); // Wait before retrying
     }
   }
 }

 if (!planClicked) {
   throw new Error('Failed to click on Plan Pricing after multiple attempts');
 }

 // Wait for 'Book Now' element and click
 const bookNow = page.locator("//div[@class='select' and text()='Book Now']").nth(0);
 await bookNow.waitFor({ state: 'visible' });
 await bookNow.click();

  ////p[@title='Headway Business Solutions LLP']
  //Headway Business Solutions LLP

  // Fill in the 'name' input field
await page.locator('input[name="name"]').fill('Keshav');

await page.locator('input[name="email"]').fill('Chirag.Bhatt191@gmail.com');

await page.locator('input[name="phone"]').fill('9825693304');

await page.locator('#checkbox-1').click()

await page.getByRole('button', { name: 'Proceed' }).click();

/*const razoepay=await page.locator("//p[@title='Headway Business Solutions LLP']")

const rzyp=await (razoepay).textContent(); */

//console.log(rzyp)


});