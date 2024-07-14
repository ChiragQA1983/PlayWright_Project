import { test, expect } from '@playwright/test';

// You tube -> Playwright with Javascript | How to capture Screenshots | Part 29
// Playwright provide simple method to capture screen shot as below
// await page.screenshot({path: 'HomePage.png'})


test('Page screenshot', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');

// We can capture screenshot with timestamp and with specific folder path as below
  const timestamp = Date.now();
  await page.screenshot({ path: `tests/ScreenshotFolder/HomePage_${timestamp}.png` });
});



test('Full page screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/');
   
  // We can capture screenshot of fullpage as below  
    const timestamp = Date.now();
    await page.screenshot({ path: `tests/ScreenshotFolder/FullPage_${timestamp}.png`, fullPage:true });

})

// We can capture the screen shot for particular Element

test.only('Element screenshot', async({page})=>{
  await page.goto('https://demo.opencart.com/');
  const timestamp = Date.now();
  await page.locator('//*[@id="content"]/div[2]/div[1]/form').screenshot({ path: `tests/ScreenshotFolder/FullPage_${timestamp}.png`});

})

/*
use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',
    //screenshot: 'on' 

    // When we want to capture the screenshot for every test than we can configure
    // playwright.cofig.js file like
    ////screenshot: 'on'   <- with this simple configuration we can take screen shot for every test
  // }, 