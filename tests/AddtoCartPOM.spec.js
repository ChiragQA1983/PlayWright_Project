
import{test, expect} from '@playwright/test';
import { AddCart } from '../test-results/Page/AddCart';

test ('Categories Check', async({page}) =>{

await page.setViewportSize({ width: 1920, height: 1080 }); // Set to desired resolution


const Cart=new AddCart(page);

await Cart.gotoLoginPage();
await Cart.login('9825693304', '0','0','9','6');

})


/*const options = await page.$$('//section[@class="grid grid-cols-4 gap-5 px-5 mt-7 max-md:grid-cols-1 max-md:max-w-full w-full"]//div[@class="mt-2 text-lg font-semibold text-ellipsis text-neutral-900"]')

let status = false;

 for (const option of options)
    {
      let value = await option.textContent();

      //if (value.includes('Earrings'))
      if (value.includes('Earrings'))
        {
            status=true;
            break
        }
     expect (status).toBeTruthy(); 
    }


})*/

