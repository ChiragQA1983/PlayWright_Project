import { test, expect } from '@playwright/test';

// Importing the test data from the JSON file
const testdata = require('../testlogin copy.json');

test.describe("Mobile Verification", () => {
  for (const data of testdata) {
    test.describe(`Mobile number verification ${data.id}`, () => {
      test("Test case", async ({ page }) => {
        await page.goto(data.url);

        // Click on the Login button
        await page.locator("//button[normalize-space()='Login']").click();

        // Fill the mobile number input
        await page.locator('xpath=//input[@inputmode="numeric"]').fill(data.mobile);

        // Click on the Get OTP button
        await page.getByRole('button', { name: 'Get OTP' }).click();

        // Fill the OTP inputs
        await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[1]").fill('0');
        await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[2]").fill('0');
        await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[3]").fill('9');
        await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[4]").fill('6');

        // Click on the Verify button
        await page.getByRole('button', { name: 'Verify' }).click();

        // Navigate to My Account section
        await page.locator('xpath=//img[@alt="user photo"]').click();
        await page.locator('xpath=//div[normalize-space()="My Account"]').click();

        // Get the text of the mobile number displayed in account info
        const textOfMobile = await page.locator(`xpath=//div[normalize-space()="${data.mobile}"]`).textContent();

        // Log the mobile number to the console
        console.log(textOfMobile);

        // Verify the mobile number
        await expect(textOfMobile).toBe(data.mobile);
      });
    });
  }
});
