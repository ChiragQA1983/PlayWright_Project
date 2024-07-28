const{test, expect}=require("@playwright/test")

test("Anchorg Print", async({page})=>{

 await page.goto('https://demo.nopcommerce.com/')

 const link=await page.$$('a');
 
 for(const links of link)
 {
    const linktext=await links.textContent();
    console.log(linktext);
 } 

})