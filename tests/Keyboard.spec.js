// Playwright with Javascript | Keyboard Actions in Playwright | Part 25 <- Youtube

const { test, expect } = require('@playwright/test');

test('Keyboard Action', async ({ page }) => {
  await page.goto('https://gotranscript.com/text-compare');

  await page.locator('[name="text1"]').fill('Welcome to automation');

  // Ctrl + A
  await page.keyboard.press('Control+A');

  // Ctrl + C
  await page.keyboard.press('Control+C');

  // Tab 
  await page.keyboard.press('Tab');

  // Ctrl + V
  await page.keyboard.press('Control+V');

  await page.waitForTimeout(5000);
});
