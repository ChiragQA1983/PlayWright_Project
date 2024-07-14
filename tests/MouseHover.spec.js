
//Playwright with Javascript | Mouse Hover Action | Part 21  <- Youtube

const{test, expect}=require("@playwright/test")


test("Mouse Hover", async ({page})=>{


    await page.goto('https://demo.opencart.com/');

   const Desktops= await page.locator('//a[normalize-space()="Desktops"]')

   const Macbook= await page.locator('//a[normalize-space()="Mac (1)"]')


  await Desktops.hover()
  await Macbook.hover()


await page.waitForTimeout(3000)




})