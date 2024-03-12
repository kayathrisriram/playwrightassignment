// HomeAssignments
// -----------------
//1. MergeContact (Alert and windowHandle)
// -----------		  
// 1. Launch URL "http://leaftaps.com/opentaps/control/login"
// 2. Enter UserName and Password Using Id Locator
// 3. Click on Login Button using Class Locator
// 4. Click on CRM/SFA Link
// 5. Click on contacts Button
// 6. Click on Merge Contacts using Xpath Locator
// 7. Click on Widget of From Contact
// 8. Click on First Resulting Contact((//table[@class='x-grid4-row-table']/tbody/tr/td[1]/div)[1]),table[class='x-grid4-row-table']>tbody>tr>td:nth-child(1)>div>a
// 9. Click on Widget of To Contact
// 10. Click on Second Resulting Contact
// 11. Click on Merge button using Xpath Locator
// 12. Accept the Alert
// 13. Verify the title of the page

import {test,chromium, expect} from '@playwright/test'
    
test("MergeContact",async({page,context})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main");
        await page.fill("#username","demoSalesManager");
        await page.fill("#password","crmsfa");
        await page.click(`.decorativeSubmit`);
        await page.click("text=CRM/SFA");
        await page.click('text=Contacts');
       await page.locator('.frameSectionBody  >* a').last().click()
       //await  page.locator(`a[class="selected"]`).filter({ hasText: `Merge Contacts`}).click()
        
        //handle child window for "from contact"
        const newPage =context.waitForEvent('page');
        await page.locator(`table[class="twoColumnForm"]>* img`).nth(0).click();
        const newTab= await newPage;
        await newTab.locator(`table[class$='row-table']>tbody>tr>td:nth-child(1)>div>a`).nth(0).click()
        //handle child window for "to contact"

        const nPage =context.waitForEvent('page');
        await page.locator(`table[class="twoColumnForm"]>* img`).nth(1).click();
        const nTab= await nPage;
        await nTab.locator(`table[class$='row-table']>tbody>tr>td:nth-child(1)>div>a`).nth(1).click()

        // to handle alert
        page.once('dialog',async alertType=>{
            console.log(alertType.type())
             const msg=alertType.message();
             console.log(msg);
             await alertType.accept ();
         })
        await page.click(".buttonDangerous")
       await page.waitForLoadState("load")
        const title=await page.title();
        console.log(title)
        expect(title).toContain("View");

})

// 2 .ServiceNow -Ordering Mobile(Frames)
// ---------------------------
// Note: Steps to create your instance is attached under reference document. Kindly create your own instance and automate the application

// 1. Launch ServiceNow application
// 2. Login with valid credentials 
// 3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
// 4. Click on  mobiles
// 5. Select Apple iphone13pro
// 6. Choose yes option in lost or broken iPhone
// 7. Enter phonenumber as 99 in original phonenumber field
// 8. Select Unlimited from the dropdown in Monthly data allowance
// 9. Update color field to SierraBlue and storage field to 512GB
// 10. Click on Order now option
// 11. Verify order is placed

//Sample instance and credentials
//Url to be loaded
// https://dev205797.service-now.com/
// Credentials
// Username: admin
// Password; Testleaf@123
test("frame concept",async({page})=>{
    await page.goto("https://dev87582.service-now.com/");
        //Login into SalesForce Apllication
        await page.fill("#user_name","admin");
        await page.fill("#user_password","Testleaf$123")
        await page.click('#sysverb_login')
        //selecting service catalog
        await page.waitForLoadState('load')
        await page.click("div[aria-label='All']");
       
        await page.getByPlaceholder("Filter").fill("Service catalog")
        await page.waitForTimeout(3000);
        await page.getByPlaceholder("Filter").focus()
        await page.keyboard.press("Enter");
        //frame handling 
        const outerframe=page.frameLocator("#gsft_main")
        await outerframe.locator(`(//div[@class='homepage_category_only']//following::h2)[8]`).click()
        await outerframe.locator(`//td[@class="sc_category_item_left"]//following::* [text()="Apple iPhone 13 pro"]`).click()
      //radio and dropdown
      await outerframe.locator(`//label[@class='radio-label' and text()='Yes']`).click();
      await outerframe.locator(`[class='cat_item_option sc-content-pad form-control']`).fill("99");
      await outerframe.locator("[class='form-control cat_item_option ']").selectOption(`Unlimited [add $4.00]`);
      await outerframe.locator(`//label[@class='radio-label' and text()='Sierra Blue']`).click();
      await outerframe.locator(`//label[@class='radio-label' and text()='512 GB [add $300.00]']`).click();
      await outerframe.locator("#oi_order_now_button").click()
      //to Verify order is placed
      const orderstatus=await (outerframe.locator('#sc_order_status_intro_text').innerText());
      console.log(orderstatus)
      expect(orderstatus).toContain("Thank you, your request has been submitted");

})

 
 /*

    Homework: Window
    Login to "https://login.salesforce.com/"
    Enter Username, Password and click Login
    ClicK 'Learn More' button under Mobile Publisher 
    Click 'Confirm' on the new window
    Verify and validate the title, url of the page
*/
test("Window",async({page,context})=>{
    await page.goto("https://login.salesforce.com/");
        //Login into SalesForce Apllication
        await page.fill("#username","kayathri@testleaf.com");
        await page.fill('[type="password"]',"Kayu@1234")
        await page.click('[value="Log In"]')

        const newPage = context.waitForEvent('page');
        await page.locator(`button[title="Learn More"]`).click()
      //  await page.locator(`table[class="twoColumnForm"]>* img`).nth(0).click();
        const newTab= await newPage;
      // await newTab.bringToFront()
        
        await newTab.locator("button").filter({hasText:`Confirm`}).click()
     
       await newTab.waitForLoadState('load')
        const title=await newTab.title()
        console.log(title)
      expect(title).toContain("Create and Publish")
        console.log(newTab.url())



})