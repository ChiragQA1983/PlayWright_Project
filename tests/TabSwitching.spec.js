const { test, expect } = require('@playwright/test');

test("Window switching", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://headway.org.in/");

    // Handle the Facebook page
    const [facebookPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('xpath=//button[@aria-labelledby="facebook"]//img[@class="w-5 aspect-square"]').click()
    ]);

    await facebookPage.waitForLoadState('domcontentloaded');
    .com');await facebookPage.locator('input[name="email"][type="text"]').fill('Chirag.Bhatt191@gmail

    // Close the Facebook page
    await facebookPage.close();

    // Handle the LinkedIn page
    const [linkedinPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("//button[@aria-labelledby='linkedin']//img[@class='w-5 aspect-square']").click()
    ]);

    await linkedinPage.waitForLoadState('domcontentloaded');

    // Assert the LinkedIn page URL
    const linkedinUrl = linkedinPage.url();
    await expect(linkedinUrl).toBe("https://in.linkedin.com/company/headway-business-solution-llp");

    // Optional: Close the LinkedIn page if needed
    await linkedinPage.close();
});
