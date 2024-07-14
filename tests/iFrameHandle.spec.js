const {test, expect} =require('@playwright/test')



test('iFrame Handling', async({page})=>{


await page.goto('https://ui.vision/demo/webtest/frames/');


// Find the total number of frames

const allframes=await page.frames()
console.log("Total number of frames :", allframes.length);


// Approach-1 for handle frame using name or url of the frame
// In first approach locator will not accept, if we want to use locator than use second approach


//Approach -2   Frame handle with locator

const inputbox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
inputbox.fill("Hello")



//const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'});
//frame1.fill('Hello')

//Approach -2

await page.waitForTimeout(5000);



})