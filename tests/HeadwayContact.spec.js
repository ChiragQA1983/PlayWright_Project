import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Galaxy S9+'],
});

test('test', async ({ page }) => {
  await page.goto('https://headway.org.in/');
  await page.getByRole('button', { name: 'Open main menu' }).click();
  await page.getByRole('link', { name: 'Contact Us' }).click();
 // await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('chirag');
  await page.getByPlaceholder('Full Name').press('Tab');
  await page.getByPlaceholder('Email ID').fill('Chirag.Bhatt105@gmail.com');
  await page.getByPlaceholder('Email ID').press('Tab');
  await page.getByPlaceholder('Mobile No.').fill('9825693304');
  await page.getByPlaceholder('Mobile No.').press('Tab');
  await page.getByPlaceholder('City').fill('9825693304');
  await page.getByPlaceholder('City').press('Tab');
  await page.getByPlaceholder('Message...').fill('test');
  await page.getByRole('button', { name: 'Submit' }).click();

});