const { test, expect } = require('@playwright/test');

test('Categories Check', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 }); // Set to desired resolution
    await page.goto('http://mybzb.com/#/');

    await page.click('//li[1]//div[1]//img[1]');

    const options = await page.$$('//section[@class="grid grid-cols-4 gap-5 px-5 mt-7 max-md:grid-cols-1 max-md:max-w-full w-full"]//div[@class="mt-2 text-lg font-semibold text-ellipsis text-neutral-900"]');

  let status=false;

  for(const option of options)
    {
       let value=await option.textContent();

       if(value.includes('Ear'))
        {
           status=true;
           break;
        }

    }
    expect(status).toBeTruthy();
});
