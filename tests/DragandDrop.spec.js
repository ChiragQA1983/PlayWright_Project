//Playwright with Javascript | Mouse Drag And Drop Action | Part 24 <- You tube

const{test, expect}=require('@playwright/test');
const { waitForDebugger } = require('inspector');


test("Drag and Drop", async({page})=>{


await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');



const Washington=await page.locator('#box3')

const italy=await page.locator('#box106')


/* Washington is drag element
await Washington.hover()
await page.mouse.down()


// Italy where we will drop washington
await italy.hover()

//here we are releasing the mouse
await page.mouse.up() */

// Approach to dragTo <- This is simple approach to drag and drop
await Washington.dragTo(italy)

await page.waitForTimeout(3000)

const Oslo=await page.locator('#box1')
const US=await page.locator('#box103')


await Oslo.hover()
await page.mouse.down()


await US.hover()
await page.mouse.up()






await page.waitForTimeout(3000)
})