import {test,chromium, expect} from '@playwright/test'
    
test("sales force Create Lead",async({page})=>{
        await page.goto("https://login.salesforce.com/");
        //Login into SalesForce Apllication
        await page.fill("#username","kayathri@testleaf.com");
        await page.fill('[type="password"]',"Kayu@1234")
        await page.click('[value="Log In"]')
        //Clicking on AppLauncher
        await page.click(".slds-icon-waffle");
        await page.locator('//button[text()="View All"]').click()
       //searching for marketing tab
        await page.getByPlaceholder("Search apps or items...").fill("Marketing");
        await page.keyboard.press("Enter");
        await page.click('//mark[text()="Marketing"]',{timeout:2000});
        //Clicking on Leads tab and crating new lead
        await page.locator('//span[text()="Leads"]').click()
        await page.click("//a[@title='New']");
        await page.click('button[name="salutation"]');
        await page.getByTitle('Ms.').click();
        await page.getByPlaceholder("First Name").fill('kayathri');
        await page.getByPlaceholder("Last Name").fill('sriram');
        await page.fill('[name="Company"]',"Testleaf");
        await page.click("button[name='SaveEdit']");
        //To verify the alert box for lead creation
       console.log( await page.getByRole("alertdialog").innerText());
        //    const check=await page.getByRole("alertdialog").innerText()
        //    expect(check).toContain("created");
       //To change convert link
       await page.click("li[class*='trigger_click'] >* svg")
       await page.click("text=Convert");
       await page.getByTitle("Testleaf-").click()
      await page.locator(`//input[@class=" input"]`).last().fill("testleaf-kayathri")
       await page.click("button[class='slds-button slds-button_brand']")
       const val= await page.locator(`//h2[text()="Your lead has been converted"]`).innerText()
       console.log(val)
     expect(val).toContain("Your lead has been converted")
      await page.click("[class='slds-button slds-button_brand']")
      await page.click(`//input[@name="Lead-search-input"]`)
      let fname='testleaf-kayathri'
      await page.fill('//input[@class="slds-input"]',fname)
      await page.keyboard.press("Enter");
      const searchresult=await (page.locator("text=No items to display.").innerText());
      expect(searchresult).toContain("No items to display.")
      await page.click("text=Opportunities")
      await page.getByPlaceholder("Search this list...").fill("testleaf-kayathri")
      await page.locator(`//a[@title="${fname}"]`).first().click();
  console.log(await page.locator(`(//slot[@name="primaryField"]/child::*)`).innerText());

})