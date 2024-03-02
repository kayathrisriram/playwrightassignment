import {test, chromium} from '@playwright/test'

test("to launch chrome ",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill('#username' ,'demoSalesManager');
    await page.fill('[type="password"]','crmsfa');
    await page.click('.decorativeSubmit');
    await page.click("text=CRM/SFA");
    await page.click('text=Leads');
    //await page.waitForTimeout(5000);
    //await page.click('div .x-panel-header #ext-gen673');
    await page.click("text=Create Lead");
    await page.fill('.inputBox','Test');
    await page.fill('[name="firstName"]','kayathri');
    await page.fill('[name="lastName"]','S');
    await page.click("[value='Create Lead']")
    await page.waitForTimeout(5000);
    console.log(await page.title());


})

/*Launch browser
load the url
Enter the credentials -as demoSalesManager crmsfa
Click on Login
Click on crmsfa
Click on Leads
Click on CreateLead
Enter Company name 
Enter First name
Enter last name
Click Create Lead button
Print the page title
*/