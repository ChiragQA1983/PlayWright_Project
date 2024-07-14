
const{test, expect} = require('@playwright/test')


test('Auto suggest drop down', async({page})=>{


await page.goto('https://www.redbus.in/');
 

await page.locator('#src').fill('Delhi');

await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")


// Select Desire Option from AutoSuggest DropDown using ForLoop and If condition

const options=await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")

 for(let option of options)
 
  {
      const value=await option.textContent();
     
      if (value.includes('Badarpur'))
        {
            await option.click();
            break;
        }


  }



})