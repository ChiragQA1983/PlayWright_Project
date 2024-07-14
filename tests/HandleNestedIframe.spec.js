
const {test, expect}=require('@playwright/test')

test('Nested Iframes', async({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/');



// First we will locate the frame by url 
const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
//frame3.locator("input[name='mytext3']").fill('Welcome')

//Second assign to the ChildFrames 
const ChildFrames=await frame3.childFrames()

//Assign array index of an Element locator into the childframes 
await ChildFrames[0].locator("//*[@id='i5']/div[3]/div").check()






await page.waitForTimeout(5000);


})