
import{test, expect} from '@playwright/test'

test("getByAltText", async({page})=>{


  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  
  
  const Logo=await page.getByAltText('company-branding')

  await expect(Logo).toBeVisible();



})