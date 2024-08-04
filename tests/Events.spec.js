const{test, expect}=require("@playwright/test")

test("Double click", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

const Copytext=await page.getByRole('button', {name:'Copy Text'})

await Copytext.dblclick();

const field2=await page.locator('#field2')

await expect(field2).toHaveValue('Hello World!')

await page.waitForTimeout(2000)

})