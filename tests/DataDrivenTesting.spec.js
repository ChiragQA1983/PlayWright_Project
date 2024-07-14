const{test, expect}=require('@playwright/test');
const testdata=JSON.parse(JSON.stringify(require("../testlogin.json")))

//youtube
//How To Read Data From JSON File In Playwright | Data Driven Test In Playwright

test.describe("Data Driven Test", function()
{

    for (const data of testdata)
    {
        test.describe(`Login with users ${data.id}`, function(){

            test("Data driven testing", async({page})=>{

                await page.goto("https://freelance-learn-automation.vercel.app/login")
                
                await page.getByPlaceholder("Enter Email").fill(data.username)
                await page.getByPlaceholder("Enter Password").fill(data.password);
                
     
    });

})
    }
})






//Reading Data From JSON Files

