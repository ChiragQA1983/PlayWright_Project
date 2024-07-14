const { test, expect } = require('@playwright/test');

test('Boot Strap Drop Down', async ({ page }) => {
  // Navigate to the target page

  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto('https://www.jquery-az.com/bootstrap4/demo.php?ex=79.0_1');

  // Click the button to display the dropdown
  await page.click('#btnDropdownDemo');

  // Wait for the dropdown to be visible
  await page.waitForSelector('.dropdown-menu.show');

  // Select the "HTML" option from the dropdown
  const htmlOption = await page.locator('.dropdown-menu.show >> text=HTML');
  await htmlOption.click();

  // Add assertion to verify the navigation to the expected URL
  await expect(page).toHaveURL('https://www.jquery-az.com/html-tutorials/');

  // Optional: Verify the page content to ensure it's the correct page
  await expect(page.locator('h1')).toContainText('HTML');
});
