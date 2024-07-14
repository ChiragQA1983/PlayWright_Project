const{test, expect}= require('@playwright/test')

test ('Assertions', async({page})=>{

  await page.goto('https://demo.nopcommerce.com/register')

//1) expect(page).toHaveURL()


 await expect(page).toHaveURL('https://demo.nopcommerce.com/register')


//2) expect(page).toHavetitle()

await expect(page).toHaveTitle('nopCommerce demo store. Register')


//3) expect(locator).toBeVisible   Element is visible or not


const Logo=await page.getByAltText('nopCommerce demo store')

await expect(Logo).toBeVisible()


//4) expect(Locator).toBeEnabled()  Element is enable or not
//   expect(Locator).toBeDisabled()  Element is Disabled or not

const Searchtextbox=await page.locator('#small-searchterms')

await expect(Searchtextbox).toBeEnabled()

//5) expect(locator).toBeChecked()   Radio button and Checkbox is Checked or not

   const maleRadioButton=await page.locator('#gender-male')
   await maleRadioButton.click()
   await expect(maleRadioButton).toBeChecked()

   const NewsLetterCheckboxButton=await page.locator('#Newsletter')
   //await NewsLetterCheckboxButton.click()
   await expect(maleRadioButton).toBeChecked()

//6) expect(locator).toHaveAttribute()  Element has attribute
   
   const Registerbutton=await page.locator('#register-button')
   await expect.soft(Registerbutton).toHaveAttribute('type','submit')

//7) expect(locator).toHaveText()  Element matches text

   const RegisterText=await page.locator('.page-title h1')
   await expect.soft(RegisterText).toHaveText('Register')


//8) expect(locator).toContainText() Element contain text
const RegisterButtonPartialtxt=await page.locator('.page-title h1')
await expect.soft(RegisterButtonPartialtxt).toContainText('Regi')


//9) expect(locator).toHaveValue(value)  Input has a value for e.g. Name, Email, Mobile number, etc.

 const InputvalueVerification=await page.locator('#Email')
 await InputvalueVerification.fill('Chirag.Bhatt105@gmail.com')
 await expect.soft(InputvalueVerification).toHaveValue('Chirag.Bhatt105@gmail.com')

 //10) expect(locator).toHaveCount() List of Elements given length

 const DropdownValueCountVerification=await page.locator('select[name="DateOfBirthMonth"] option')

 // Below is the example of soft assertions and we will use always soft assertions 
 await expect.soft(DropdownValueCountVerification).toHaveCount(13)

})




