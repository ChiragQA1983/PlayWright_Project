const { test, expect } = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("../testlogin.json")));

// Filter to only use the first user's data
const firstUserData = testdata.find(data => data.id === 1);

test.describe("Data Driven Test", function() {
    test.describe(`Login with user ${firstUserData.id}`, function() {
        test("Data driven testing", async({ page }) => {
            await page.goto("https://freelance-learn-automation.vercel.app/login");

            await page.getByPlaceholder("Enter Email").fill(firstUserData.username);
            await page.getByPlaceholder("Enter Password").fill(firstUserData.password);

            // Add your assertions here, e.g. checking login success
        });
    });
});
