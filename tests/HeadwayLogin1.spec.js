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

    //await expect(page.getByText('User Profile')).toBeVisible();

    await page.locator("xpath=//img[@class='w-8 h-8 rounded-full ']").click()
    
   await page.locator("xpath=//div[normalize-space()='My Account']").click()
    
   await page.locator("xpath=//div[contains(@class,'max-md:pr-5 font-medium text-orange-500 terms_bg_clr')]").click()

   await page.locator("xpath=//i[contains(@class,'fa fa-edit text-orange-500')]").setInputFiles("C:/Users/Krishna/Desktop/TestImage.jpg")






      })
   })
}




})
