const { test, expect } = require('@playwright/test');

test('LocatingMultipleElements', async ({ page }) => {
    await page.goto("https://demoblaze.com/#");

    await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//h4/a");

    for (const product of products) {
        const prodname = await product.textContent();
        console.log(prodname);
    }
});




            
       // await page.click('#login2')
       
        //await page.locator('#loginusername').fill("pavanol") <- another approch like sendkeys in selenium
       // await page.fill('#loginusername', 'pavanol')
        //await page.fill('#loginpassword', 'test@123')
    
       // await page.click('//button[normalize-space()="Log in"]') 

       
       /* const links = await page.$$('a');

        for(const link of links)
            {
                const linktext=await link.textContent();
                console.log(linktext); */