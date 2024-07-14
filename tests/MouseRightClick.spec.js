
const{test, expect}=require('@playwright/test')


test("Mouse RightClick", async({page})=>{


await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html')

// First Press F12 to inspect such Right Click Element for open Developer tool
// Than Go to Element and Open Selector Hub and Inspect the Element
// "button" variable we will write in small case not in Propercase  "Button"

const button=await page.locator('//span[normalize-space()="right click me"]');

await button.click({button: 'right'});

await page.waitForTimeout(5000);
})