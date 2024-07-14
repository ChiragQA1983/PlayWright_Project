const { test, expect } = require('@playwright/test');

test('Multiple Checkbox By Array', async ({ page }) => {
  await page.goto('http://omayo.blogspot.com/');

   
  // Below way we will assign the array to locators
  const Checkboxeslocators=[
    "//input[@name='accessories' and @value='Pen']",
    "//input[@name='accessories' and @value='Book']", 
    "//input[@name='accessories' and @value='Laptop']",
    "//input[@name='accessories' and @value='Bag']" 
  ];


for (const locator of Checkboxeslocators)
  {
     await page.locator(locator).check();
     await expect(page.locator(locator)).toBeChecked();

  }

 for (const locator of Checkboxeslocators)
  {
    if(await page.locator(locator).check());
    {
      await page.locator(locator).uncheck();
    }

  } 
  
});
