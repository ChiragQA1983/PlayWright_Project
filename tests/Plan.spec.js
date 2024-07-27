const{test, expect}=require("@playwright/test")
const exp = require("constants")

test("Headway HomePage Load test", async({page})=>
    
{
   await page.goto("https://headway.org.in/")
   
   await expect(page).toHaveTitle("Headway Business Solutions LLP") 
   
   const hometext=await page.locator('//div[normalize-space()="Home"]')
   
   await expect(hometext).toHaveText('Home') 
})