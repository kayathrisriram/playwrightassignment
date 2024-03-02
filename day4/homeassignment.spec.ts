
import {test,chromium, expect} from '@playwright/test'
    
test("sales force Create Lead",async({page})=>{
    await page.goto("https://login.salesforce.com/");
        //console.log(page.url());
        await page.fill("#username","kayathri@testleaf.com");
        await page.fill('[type="password"]',"Kayu@1234")
        await page.click('[value="Log In"]')
        await page.click(".slds-icon-waffle");
        await page.locator('//button[@class="slds-button" and @aria-label="View All Applications"]').click()
        await page.locator('//p[@class="slds-truncate" and text()="Sales"]').click()
        page.waitForTimeout(3000);
        //await page.getByTitle("Leads").click()
        await page.locator('//span[@class="slds-truncate" and text()="Leads"]').click();
        //await page.click('a[title="Leads"]');
        await page.click("//button[contains(@class,'middleButton') ][2]");
        page.waitForTimeout(3000);
        await page.click('button[name="salutation"]');
        await page.getByTitle('Ms.').click();
        await page.getByPlaceholder("Last Name").fill('sri');
        await page.fill('[name="Company"]',"Testleaf");
        await page.click("button[name='SaveEdit']");

       console.log( await page.getByRole("alertdialog").innerText());
       const check=await page.getByRole("alertdialog").innerText()
       expect(check).toContain("created");
  

})
/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created

Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

test("Leaftaps Edit Lead",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill('#username' ,'demoSalesManager');
    await page.fill('[type="password"]','crmsfa');
    await page.click('.decorativeSubmit');
    await page.click("text=CRM/SFA");
    await page.click('text=Leads');
    await page.click("text=Create Lead");
    await page.fill('.inputBox','Test');
    await page.fill('#createLeadForm_firstName','kayathri123');
    await page.fill('#createLeadForm_lastName','S');
    await page.click(".smallSubmit")
    await  page.waitForTimeout(3000)
    await page.click("text=Edit");
    await page.fill('#updateLeadForm_companyName','Test123');
    await page.click('input[value="Update"]');
    console.log( page.url());

})
/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name
*/
test("Create Individuals",async({page})=>{
    await page.goto("https://login.salesforce.com/");
        console.log(page.url());
        await page.fill("#username","kayathri@testleaf.com");
        await page.fill('[type="password"]',"Kayu@1234")
        await page.click('[value="Log In"]')
        await page.click(".slds-icon-waffle");
        await page.locator('//button[@class="slds-button" and @aria-label="View All Applications"]').click()
        await page.click("//p[@class='slds-truncate' and text()='Individuals']");  
        await page.click("[class='forceActionLink']");
        await page.locator("[class='slds-button slds-button_reset']").last().click();
        // await page.locator("[class='slds-dropdown-trigger slds-dropdown-trigger--click']").last().click();
        await page.locator("a.select").first().click()
        await page.getByTitle("Mrs.").click();
        await page.getByPlaceholder("Last Name").fill("kayu");
        //await page.click("//span[contains(@class,'label bBody')]")
        await page.click("(//span[text()='Save'])[2]");
        console.log( await page.getByRole("alertdialog").innerText());
        const check=await page.getByRole("alertdialog").innerText()
       expect(check).toContain("created");

})
/*
Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/
test("Edit Individuals",async({page})=>{
    await page.goto("https://login.salesforce.com/");
        console.log(page.url());
        await page.fill("#username","kayathri@testleaf.com");
        await page.fill('[type="password"]',"Kayu@1234")
        await page.click('[value="Log In"]')
        await page.click(".slds-icon-waffle");
       await page.waitForSelector('//button[@class="slds-button" and @aria-label="View All Applications"]')
        await page.locator('//button[@class="slds-button" and @aria-label="View All Applications"]').click()
       await page.waitForSelector("//p[@class='slds-truncate' and text()='Individuals']")
        await page.click("//p[@class='slds-truncate' and text()='Individuals']"); 
        await page.click("(//span[text()='Individuals'])[1]");
        await page.getByPlaceholder("Search this list...").fill("kayu");
        await page.keyboard.press("Enter");
        await page.locator("tbody tr:first-child >td a[role='button']").click({timeout:2000})
        //await page.locator('[class="slds-icon slds-icon_xx-small"]').last().click();
        //await page.getByRole("menuitem").click();
        //await page.getByRole('button', { name: 'Show Actions' }).click()
        await page.click("a[title='Edit']",{timeout:5000});
        await page.locator("a.select").first().click()
        await page.getByTitle("Mr.").click();
        await page.getByPlaceholder("First Name").fill("kayathri")
        await page.click("(//span[text()='Save'])[2]");
        console.log( await page.getByRole("alertdialog").innerText());
        const check=await page.getByRole("alertdialog").innerText()
        expect(check).toContain("saved");
})