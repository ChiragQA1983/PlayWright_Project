const { test, expect } = require('@playwright/test');


//Playwright with Javascript | How To upload files in Playwright | Part 26 <- Youtube


test("File Upload", async ({ page }) => {
  // Navigate to the target page
  await page.goto('https://practice.expandtesting.com/upload');

  // Wait for the file input element to be visible
  await page.waitForSelector('#fileInput');

  // Specify the relative path to the file
  const filePath = 'tests/Ayane Band Ring View 1.png'; // Use forward slashes for the file path

  // Upload the file using setInputFiles
  await page.locator('#fileInput').setInputFiles(filePath);

  // Optional: Wait for a few seconds to observe the result
  await page.waitForTimeout(5000);
});
