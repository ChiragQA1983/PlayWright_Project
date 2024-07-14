
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://headway.org.in/');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('9825693304');
  await page.getByRole('button', { name: 'Get OTP' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('0');
  await page.getByRole('textbox').nth(1).fill('0');
  await page.getByRole('textbox').nth(2).fill('9');
  await page.getByRole('textbox').nth(3).fill('6');
  await page.getByRole('button', { name: 'Verify' }).click();
  
});