import {test, expect} from '@playwright/test';

test('Special Locator Practice', async ({page})=>{ 

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Name").fill("Sneha Swami");
    await page.getByPlaceholder("Password").fill("Test@123");
    await page.getByRole("button",{name:"Submit"}).click();
    

});