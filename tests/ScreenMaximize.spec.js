const { test, expect, chromium } = require('@playwright/test');

test('Boot Strap Drop Down', async () => {
  const browser = await chromium.launch({
    headless: false,
    args: [
      '--start-maximized' // Launch the browser maximized
    ]
  });
  
  const context = await browser.newContext();
  const page = await context.newPage();

  // Set viewport size to match the screen resolution
  await page.setViewportSize({ width: 1366, height: 768 });

  // Navigate to the target page
  await page.goto('https://www.jquery-az.com/bootstrap4/demo.php?ex=79.0_1');

  // Click the button to display the dropdown
  await page.click('#btnDropdownDemo');

  // Wait for the dropdown to be visible
  await page.waitForSelector('.dropdown-menu.show');

  // Get the list of dropdown items
  const ListOfElement = await page.$$('.dropdown-item');

  for (const option of ListOfElement) {
    const value = await option.textContent();
    if (value.includes('HTML')) {
      await option.click();
      break;
    }
  }

  // Add assertion to verify the navigation to the expected URL
  await expect(page).toHaveURL('https://www.jquery-az.com/html-tutorials/');

  // Optional: Verify the page content to ensure it's the correct page
  await expect(page.locator('h1')).toContainText('HTML');

  await browser.close();
});
