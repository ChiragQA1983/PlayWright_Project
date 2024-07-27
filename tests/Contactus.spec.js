const{test, expect} =require('@playwright/test')

const testdata=JSON.parse(JSON.stringify(require("..//Contact.json")))


test.describe("Contact us", function()
 {
    for(const data of testdata)

        {
        test.describe(`Contact us test ${data.id}`, function()
        {
          
         test("Data driven test", async({page})=>{
          
            await page.goto("https://headway.org.in/#/login")
            await page.locator("//div[text()='Contact Us']").click()
           
            await page.getByPlaceholder("Full Name").fill(data.Name)
            await page.waitForTimeout(3000);
            await page.getByPlaceholder("Email ID").fill(data.Email) 
            await page.waitForTimeout(3000);
            await page.getByPlaceholder("Mobile No.").fill(data.Phone)
            await page.waitForTimeout(3000);
            await page.getByPlaceholder("City").fill(data.Email) 
            await page.waitForTimeout(3000);
            await page.locator("//div[contains(@class,'rounded-lg border border-solid border-[color:var(--grey-scale-outline-e-8-e-8-e-8,#E8E8E8)] max-md:max-w-full focus:border-gray-200 focus:ring-0 focus:outline-gray-200 border-gray-200')]").fill(data.Message)
            await page.getByRole('button',{name: 'submit'}).click()
         }) 
        })

        }

})