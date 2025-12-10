// @ts-check
import { expect } from '@playwright/test';

const{test}= require('@playwright/test');
test('first playwright test',async({browser})=>
{
const context=await browser.newContext();
const page= await context.newPage();
await page.goto("https://www.amazon.in/");
console.log (await page.title());
});
test('Page playwright test',async({page})=>
{
await page.goto("https://geekyants.com/")
console.log (await page.title());
//page.locator('//*[@id="headerMenu"]/div/div/div[2]').click();

});
test('Third playwright test', async({page,browser})=>
{
await page.goto("https://staging-fe.mytwocents.io/")
console.log (await page.title());
//await page.waitForTimeout(50000);
const loginbtn= await page.locator("//a[text()='Login']");
await loginbtn.click();
await page.waitForTimeout(5000);
//await MobileNumber=page.locator('//*[@id="root"]/div/div[2]/div/div/div/form/div[1]/input');
const Dropdown= await page.locator("//button[@role='combobox' and @type='button']");
await Dropdown.click();
await page.waitForTimeout(5000);
const option91 = await page.locator("[role='option']", { hasText: '+91' });
await option91.waitFor({ state: 'visible', timeout: 10000 });
await option91.click();
await page.waitForTimeout(5000);
const MobileNumber=await page.locator("//input[@id='mobileNumber']");
await MobileNumber.fill('9503577134');
const continueBtn=await page.getByRole('button',{name:'Continue'});
await continueBtn.click();
await page.waitForTimeout(5000);
const otpInput=await page.locator("//input[@name='pin']");
await otpInput.fill('876985');
const verifyBtn=await page.getByRole('button',{name:'Continue'});
await verifyBtn.click();
await page.waitForTimeout(10000);
await page.pause();

});
test('UI Controls', async({page})=>
{

});
