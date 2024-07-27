const{test, expect}=require("@playwright/test")

test("New User Plan BookNow Button Test", async({page})=>{
 
await page.goto("https://headway.org.in/#/") 

await page.locator("//div[normalize-space()='Our Products']//div[@class='flex items-center gap-2 nav_dropdown']").click()

await page.locator("//div[normalize-space()='Plan Pricing']//div[@id='menu-item-0']").click()

await page.locator("//div[@class='select' and text()='Book Now']").nth(0).click();

await page.waitForSelector('input[name="name"]');

// Fill in the 'name' input field
await page.locator('input[name="name"]').fill('Keshav');

await page.locator('input[name="email"]').fill('Chirag.Bhatt191@gmail.com');

await page.locator('input[name="phone"]').fill('9825689756');

await page.locator('#checkbox-1').click()

await page.getByRole('button', { name: 'Proceed' }).click();

await expect(page.getByRole('heading', { name: 'Log in' })).toBeVisible();

})