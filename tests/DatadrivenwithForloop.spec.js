const{test, expect}=require("@playwright/test")

const testdata=JSON.parse(JSON.stringify(require("../testlogin.json")))


test.describe("Data Driven Test", function()
{

    for(const data of testdata)
    {

        test.describe(`Data driven testing ${data.id}`, function()
    {
        test("data driven", async({page})=>{
          
                   
            await page.goto("https://freelance-learn-automation.vercel.app/login")

                        
            await page.getByPlaceholder("Enter Email").fill(data.username)
            await page.getByPlaceholder("Enter Password").fill(data.password);

        })

    })

  }
})
