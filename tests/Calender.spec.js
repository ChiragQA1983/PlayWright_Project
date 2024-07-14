
const{test, expect}=require('@playwright/test')

//Youtube => Playwright with Javascript | How to Handle Date Pickers/Calendars| Part 20  

test("Calender Handling", async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com');

//await page.fill('#datepicker', '03/15/2024')

const year="2024"
const month="July"
const date="12"

await page.click('#datepicker')



while(true)
{

    const currentyear=await page.locator('.ui-datepicker-year').textContent()
    const currentmonth=await page.locator('.ui-datepicker-month').textContent()
   
    if(currentyear==year && currentmonth==month)
   {
        break;

   }

  // await page.locator('[title="Prev"]').click(); <- for Select Previous Months date
  await page.locator('[title="Next"]').click();

}

await page.click(`//a[@class='ui-state-default'] [text()='${date}']`)

await page.waitForTimeout(5000);


//const dates=await page.$$("//a[@class='ui-state-default']")

//date selection using loop
/*for (const dt of dates)
    {

        if (await dt.textContent()==date)
     {

        await dt.click();
        break;
     }

    }*/
    



})


