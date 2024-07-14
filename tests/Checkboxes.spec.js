const { test, expect } = require("@playwright/test");

test('Checkboxes Handling', async ({ page }) => {
  await page.goto('http://omayo.blogspot.com/');

  // Check the first checkbox
  await page.locator('#checkbox2').check();
  await expect(page.locator('#checkbox2')).toBeChecked();

  // Check the second checkbox
  await page.locator('#checkbox1').check();
  await expect(page.locator('#checkbox1')).toBeChecked();

  // Uncheck the first checkbox
  await page.locator('#checkbox2').uncheck();
  await expect(page.locator('#checkbox2')).not.toBeChecked();

  // Uncheck the second checkbox
  await page.locator('#checkbox1').uncheck();
  await expect(page.locator('#checkbox1')).not.toBeChecked();
});





