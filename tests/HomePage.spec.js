const { test, expect } = require('@playwright/test');

test('HomePage', async ({ page }) => {
  // Your test code goes here

  await page.goto('https://demoblaze.com/');

  const pageTitle = await page.title(); // Corrected the method name to page.title()

  console.log('Page Title is:', pageTitle);

  await expect(page).toHaveTitle('STORE');

  const pageURL = page.url(); // Corrected the method name to page.url()
  console.log('Page URL is:', pageURL);

  await expect(page).toHaveURL('https://demoblaze.com/');

  await page.close();
});
