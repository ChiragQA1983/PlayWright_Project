
//Playwright with Javascript | Mouse Double Click Action | Part 23

const {test, expect}=require("@playwright/test")


test("DoubleClick", async({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/');

const btnCopy=await page.locator('button[ondblclick="myFunction1()"]')


await btnCopy.dblclick()

const f2=await page.locator('#field2')


await expect(f2).toHaveValue('Hello World!')

await page.waitForTimeout(5000)

})