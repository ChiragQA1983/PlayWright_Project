//import{test, expect} from '@playwright/test'

//const { request } = require("http");

/*
 page.getByAltText()  to locate an element, usually from image, by its text alternative.
 page.getByPlaceholder() to locate an input by placeholder.
 page.getByRole()  to locate by explicit and implicit accessibility attributes.
 page.getByText() to locate by text content.

 page.getbyLabel() to locate a form control by associated label's text.
 page.getbyTitle() to locate an element by its title attribute.
 page.getbyTestId() to locate an element based on its data-testid attribute (other attributes can be)

*/
const{test, expect} = require('@playwright/test')

test('PlayWrightBuiltInLocators', async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// page.getByAltText()
const logo = await page.getByAltText('company-branding')

await expect(logo).toBeVisible();

//page.getByPlaceHolder()
 await page.getByPlaceholder('Username').fill('Admin')
 await page.getByPlaceholder('Password').fill('admin123') 
 
//page.getByRole()
await page.getByRole('button', {type:'submit'}).click(); 

//page.getByText()
//const nameofuser=await page.getByText('Florida Arora')).toBeVisible
//await expect(nameofuser).toBeVisible();

//await expect (await page.getByText('Florida Arora')).toBeVisible()


//Below way we can dynamically get the text and verify using page.getByText and 
// for that we will use dynamic relative xpath
const name=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()

await expect(await page.getByText(name)).toBeVisible()


})