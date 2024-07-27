const { test, expect } = require("@playwright/test");

test("MeetOurTeam", async ({ page }) => {
    await page.goto("https://headway.org.in/");

    await page.waitForTimeout(4000);
    await page.locator("//div[normalize-space()='Our Company']//img[@loading='lazy']").click();

    await page.waitForTimeout(4000);
    await page.locator('#menu-item-2').click();

    await page.waitForTimeout(4000);

    // Locate the element containing the expected text
    const designationElement = await page.locator('//p[normalize-space()="Chief Managing Director"]');
    
    // Get the text content of the element
    const designationText = await designationElement.textContent();
    
    // Assert that the text content includes the expected value
    await expect(designationText).toContain('Chief Managing Director');
});
