const{test, expect}= require('@playwright/test')

test ('SelectOption DropDown', async({page}) =>{

await page.setViewportSize({ width: 1920, height: 1080 }); // Set to desired resolution
await page.goto('http://omayo.blogspot.com/');


// We will use Select Method for SelectOption From DropDown

//Methods to select dropdown option selection

// Below example is SelectOption By Visible Text
//await page.locator('select#drop1').selectOption('doc 3');

// Below example is SelectOption By Visivle Test 
 //await page.locator('select#drop1').selectOption({label: 'doc 2'});

 //Below example is SelectOption By Value
 //await page.locator('select#drop1').selectOption({value: 'jkl'});

 //Below example is SelectOption By Index 
 //await page.locator('select#drop1').selectOption({index: 2});

 //Selection option Other simplw way By Visible Text as Below 
 //await page.locator('select#drop1', 'doc 2');


//Assertions of Dropdown

//const options=await page.locator('select#drop1 option')

// Below code will Assert the count of dropdown option
// Approach 1 for assertions
//await expect(options).toHaveCount(5)

//Approach 2 for Assertions

//const options = await page.$$('select#drop1 option')
//console.log("Number of Options in DropDown :", options.length)
//await expect(options.length).toBe(5);


// Assertions for verification that contain of include specific value in Dropdown
//const option = await page.locator('select#drop1').textContent()

 //await expect(option.includes('doc 3')).toBeTruthy();

 // 4) Check Presence of value or specific text in the dropdown 

 const options = await page.$$('select#drop1')

let status = false;

 for (const option of options)
    {
      let value = await option.textContent();

      if (value.includes('doc 2'))
        {
            status=true;
            break
        }
     expect (status).toBeTruthy(); 
    }


})