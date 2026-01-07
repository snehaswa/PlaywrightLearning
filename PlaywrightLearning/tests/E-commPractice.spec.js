const { test, expect } = require('@playwright/test');

test('Open Rahul Shetty Academy login page', async ({ page }) => {

    const products = page.locator('.card-body');
    const productName = 'iphone 13 pro';
    console.log(`Number of products: ${await products.count()}`);
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator("//input[@id='userEmail']").fill('Sneha@gmail.com');
    await page.locator("//input[@id='userPassword']").fill('Test@123');
    // ');
    await page.locator("//*[@id='login']").click();
    //await page.waitForLoadState('networkidle');
    const count=await products.count();
    for(let i=0;i<count;i++){
        console.log( await products.nth(i).locator('b').textContent());

        if(await products.nth(i).locator('b').textContent() === 'productName'){
            await products.nth(i).locator('text= Add To Cart').click();
            break;
        }
    }
});