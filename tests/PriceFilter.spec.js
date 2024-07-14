const { test, expect } = require('@playwright/test');

test('Categories Check', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 }); // Set to desired resolution
    await page.goto('http://mybzb.com/#/');

    await page.click('//li[1]//div[1]//img[1]');

    await page.locator('#minPrice').fill('10000');

    const priceElements = await page.$$('//span[contains(@class, "text-neutral-900")]');

    let status = false;

    for (const priceElement of priceElements) {
        let value = await priceElement.textContent();
        value = value.trim(); // Remove any leading/trailing whitespace
        let price = parseFloat(value.replace(/[^0-9.-]+/g, "")); // Convert to number

        if (price > 10000) {
            status = true;
            break;
        }
    }

    expect(status).toBeTruthy();
});
