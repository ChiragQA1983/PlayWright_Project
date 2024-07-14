
const {test, expect}=require('@playwright/test')

//Playwright with Javascript | How to Handle WebTable/Pagination Table| Part 19

test("Extract WebTable Data", async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    
    const table =await page.locator('#productTable')

const columns=await table.locator('thead tr th')
console.log('Number of Columns:', await columns.count())
expect (await columns.count()).toBe(4) 

// Gives total number of Rows present inside the table
const rows=await table.locator('tbody tr')
console.log('Total number of rows :', await rows.count())
expect (await rows.count()).toBe(5) 


//Print all table data using loop

for (let i=0; i<await rows.count(); i++)
    {
        const row=rows.nth(i);
        const tds=row.locator('td')

        for (let j=0; j<await tds.count()-1; j++)
        {
            console.log (await tds.nth(j).textContent())
     
        }
    }

})