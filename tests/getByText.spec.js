import { test, expect } from '@playwright/test';

test('getByText', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  const loginHeading = await page.getByRole('heading', { name: 'Login' });

  await expect(loginHeading).toBeVisible();
});
