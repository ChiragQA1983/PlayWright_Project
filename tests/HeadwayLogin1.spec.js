const{test, expect} = require("@playwright/test")

const testdata=JSON.parse(JSON.stringify(require("../testlogin copy.json")))


test.describe("Reg", function()
{
   for(const data of testdata)
   {
      test.describe(`Data drive ${data.id}`, function()
       
        {
           
   test("Parameterization1", async({page}) =>{
             
    await page.goto("https://headway.org.in/#/login")
    await page.locator("//input[@inputmode='numeric']").fill(data.Mobile)
        
    await page.getByRole('button', {name: 'Get OTP'}).click()

    await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[1]").fill('0') 
    await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[2]").fill('0')   
    await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[3]").fill('9')  
    await page.locator("//div[contains(@class,'max-sm:gap-0')]//input[4]").fill('6')  

    await page.getByRole('button', {name:'Verify'}).click()

    await expect(page.getByText('User Profile')).toBeVisible();

    await page.locator("//button[@class='bg-white text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white']//*[name()='svg']").click()
    
    await page.locator("//div[@class='cursor-pointer flex items-center gap-3 bg-white px-2.5 rounded-lg py-1 ']//img[@alt='Images']").click()
    
    await page.locator("//div[normalize-space()='Logout']").click()
      })
   })
}




})
