const{test, expect}=require("@playwright/test")

test("Make My Growth Plan Click", async({page})=>{

test.setTimeout(120000);

await page.goto("https://headway.org.in/#/")


//Click on Services
await page.locator("//div[normalize-space()='Services']//div[@class='flex items-center gap-2 nav_dropdown']").click();

//Click on Make My Business
await page.locator("//div[normalize-space()='Make My Business']//div[@id='menu-item-0']").click();


await page.locator("//div[normalize-space()='Choice Your Business Growth Plan']//div[@class='xl:text-base md:text-sm max-xs:text-[5px] growth_plan_btn']").click();

const lendingtext=await page.locator("//div[normalize-space()='Plan Pricing']")

const Planpricingtxt=await lendingtext.textContent()

await expect(lendingtext).toHaveText("Plan Pricing")


})




test.skip("Make My Growth", async({page})=>{

test.setTimeout(120000);

await page.goto("https://headway.org.in/#/")


//Click on Services
await page.locator("//div[normalize-space()='Services']//div[@class='flex items-center gap-2 nav_dropdown']").click();

//Click on Make My Business
await page.locator("//div[normalize-space()='Make My Business']//div[@id='menu-item-0']").click();


await page.locator("//div[normalize-space()='Choice Your Business Growth Plan']//div[@class='xl:text-base md:text-sm max-xs:text-[5px] growth_plan_btn']").click();

const lendingtext=await page.locator("//div[normalize-space()='Plan Pricing']")

const Planpricingtxt=await lendingtext.textContent()

await expect(lendingtext).toHaveText("Plan Pricing")


})