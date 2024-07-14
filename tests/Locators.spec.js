
const{test, expect}=require('@playwright/test')

//import { format } from 'path'
//import{test, expect} from '@playwright/test'

 test('Locators', async({page})=>{
  
    await page.goto("https://demoblaze.com/")

    await page.click('#login2')
   
    //await page.locator('#loginusername').fill("pavanol") <- another approch like sendkeys in selenium
    await page.fill('#loginusername', 'pavanol')
    await page.fill('#loginpassword', 'test@123')

    await page.click('//button[normalize-space()="Log in"]') 

    const LogouttextVerification=await page.locator('#logout2')
     
    await expect (LogouttextVerification).toHaveText('Log out')


 })



