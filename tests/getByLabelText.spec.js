const { test, expect } = require("@playwright/test");

test("GetByLabel Locator", async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.waitForTimeout(4000);

  // Use the getByLabelText method to locate the input associated with the label "Username"
  await page.locator('text=Username').fill('Admin');


await page.waitForTimeout(4000);
await page.locator('text=Password').fill('admin123')

await page.getByRole('button',{type:'submit'}).click()
});