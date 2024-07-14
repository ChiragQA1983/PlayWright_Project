import {test, expect} from '@playwright/test';

//Playwright with Javascript | Hooks - beforeEach, afterEach, beforeAll & afterAll | Part 27
//Youtube

let page;

//Login test will execute before each test

// instead of Page ficture we will use browser ficture and page ficture we will declared globally

// Before Run Each test beforeEach will be run 

test.beforeEach(async({browser})=>{

    page=await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()
})

//LogOut test will execute After each test
// in afterEach page ficture we will remove as we already declared page ficture as global variable

//After Run Each test afterEach will be run 
test.afterEach(async()=>{
    await page.locator('#logout2').click();

})

//Home Page test - Test 1

// We will remove page ficture from async as we already declared it globally

test("Home Page test", async()=>{
    const Products=await page.$$('.hrefch')
    expect(Products).toHaveLength(9)
});

//Add to Cart   - Test 2 
test("Add to Cart", async()=>{
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click()
    
    page.on('dialog', async dialog=>{
    
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

})





















