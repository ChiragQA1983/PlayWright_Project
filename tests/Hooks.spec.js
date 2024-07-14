import {test, expect} from '@playwright/test';

//Playwright with Javascript | Hooks - beforeEach, afterEach, beforeAll & afterAll | Part 27
//Youtube
test("Home Page test", async({page})=>{

await page.goto('https://www.demoblaze.com/index.html');


await page.locator('#login2').click();

await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')

await page.locator('//button[normalize-space()="Log in"]').click()

//Home Page

//const Products=await page.$$('.hrefch')
//expect(Products).toHaveLength(9)

await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
await page.locator('//a[normalize-space()="Add to cart"]').click()

page.on('dialog', async dialog=>{

    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
})








await page.locator('#logout2').click();




})


