
const{test, expect}=require('@playwright/test');



test("WebTable Handling", async({page})=>{


// We will always put await keyword before opening url like this    
await page.goto('https://testautomationpractice.blogspot.com/');


const table =await page.locator('#productTable')

//total number of rows & columns  & //Assert the total number of colums and rows count

const columns=await table.locator('thead tr th')
console.log('Number of Columns:', await columns.count())
expect (await columns.count()).toBe(4) 

// Gives total number of Rows present inside the table
const rows=await table.locator('tbody tr')
console.log('Total number of rows :', await rows.count())
expect (await rows.count()).toBe(5) 


//Select Checkbox for product 4

const matchedRow =rows.filter({
 has: page.locator('td'),
 hasText: 'Product 4'

})
await matchedRow.locator('input').check()

await SelectProduct(rows,page, 'Product 1')
await SelectProduct(rows,page, 'Product 3')
await SelectProduct(rows,page, 'Product 5')


await page.waitForTimeout(5000)



})

//Select multiple product by re-usable function 




// here below we create reusable function named as SelectProduct and passing parameters in it
// like (rows, page, name are parameters)

async function SelectProduct(rows,page,name)
{
    const matchedRow =rows.filter({
        has: page.locator('td'),
        hasText: name
       
       })
    await matchedRow.locator('input').check()   

}