
const {test, expect}=require('@playwright/test');
const exp = require('constants');


test('MultiSelectDropDown with Checkboxes', async({page})=>{


await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

await page.locator('.multiselect').click(); // Click on Drop Down

// Capture All Elements or Options from drop down into variable
//const options=await page.locator('ul>li label input')

// assert the number of options from dropdown
//await expect(options).toHaveCount(11);

// another method for assertions with array we will use $$
const options=await page.$$('ul>li label input')

//await expect(options.length).toBe(11);


/* Select Options From Drop Down
for (const option of options)
    {
       const value=await option.textContent();
       
       if(value.includes('Bootstrap') || value.includes('Java'))
        {
            option.click();
            break;
        }

     
    } */
  
    // Deselect From Drop Down Options  HTML and CSS Which are already selected 
    for (let option of options)
        {
           const value=await option.textContent();
           
           if(value.includes('HTML') || value.includes('CSS'))
            {
                await option.click();
                break;
            }
            
        }
        await page.waitForTimeout(2000);
})