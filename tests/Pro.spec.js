const { test, expect } = require("@playwright/test");
const testdata = require("../tests/Product.json");

test.describe("Product Data Driven", function() {

    test.describe("Product fetch", function() {
        for (const data of testdata) {
            test.describe(`Product fetch test, ${data.id}`, function() {
                
                test("datadriven", async ({ page }) => {
                    await page.goto(data.url);

                    await page.locator('xpath=//ul[@class="top-menu notmobile"]//a[normalize-space()="Computers"]').click()
                    await page.locator(data.product).click();
                    await expect(page.locator(data.expect)).toBeVisible();

                const producttext=await page.locator(data.expect)
                const products=await (producttext).textContent();
                await expect(producttext).toHaveText(data.expecttext);
           


                });

            });
        }
    });

});
