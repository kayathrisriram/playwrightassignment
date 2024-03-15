/**
 * Assignment:2
 * 
 * 1. Log in to Salesforce application 
 *    Note: Create a json fie for the username and password and login 
 * 2. Click the app launcher icon
 * 3. Click View All
 * 4. Enter Marketing in the Search text box
 * 5. Click Marketing
 * 6. Click Contacts dropdown
 * 7. Click New Contact
 * 8. Fill the mandatory fields
 * 9. Click Save
 * 10. Verify the Contact created
 * 11. Click Upload files and verify the file uploaded
 * 12. Click View All
 * 13. Click the uploaded file
 * 14. Download the file and save it in your directory
 * 
 */
import path from "path";
import loginCre from "./testdata.json"
import {test,expect} from '@playwright/test'
// import fs from 'fs';
// import path from 'path';
/* for(const a of loginCre){

}; */
//    const testData=JSON.parse(fs.readFileSync(path.join(__dirname,"testdata.json"),'utf-8'));
loginCre.forEach(cre => {
test.only(`Reading data from json file ${cre.testcase_id}`, async({page})=>{


 await page.goto("https://login.salesforce.com/");
 await page.fill("#username",cre.username);
 await page.fill("#password",cre.password);
 await page.click('[value="Log In"]')
 await page.waitForTimeout(3000);
  //Clicking on AppLauncher
  await page.click(".slds-icon-waffle");
  await page.locator('//button[text()="View All"]').click()
 //searching for marketing tab
  await page.getByPlaceholder("Search apps or items...").fill("Marketing");
  await page.getByPlaceholder("Search apps or items...").focus()
  await page.keyboard.press("Enter");
  await page.click('//mark[text()="Marketing"]',{timeout:2000});
  //creating to new contact
  await page.click(`[data-id="Contact"] >a +* svg`)
  await page.waitForSelector("//span[text()='New Contact']")
  await page.click(`//span[text()='New Contact']`)
  await page.waitForLoadState('load')
  await page.click('button[name="salutation"]');
  await page.getByTitle('Ms.').click();
  //await page.getByPlaceholder("First Name").fill('kayathri');
  await page.getByPlaceholder("Last Name").fill('pasuran');
  await page.click("button[name='SaveEdit']");
  console.log( await page.getByRole("alertdialog").innerText());
  //to upload file
  const text = page.locator('//span[text()="Notes & Attachments"]')
  await expect(text).toBeVisible({timeout:10000})
  text.hover({force:true})
//div[text()='Upload Files']
const upload = page.locator('//div[text()="Upload Files"]')
  await expect(upload).toBeVisible({timeout:10000})
  upload.hover({force:true})
  const pathvalue="C:/playwright/Playwright-testleaf/tests/day8/FileTOUpload/sample.png"
 await page.setInputFiles("input[type='file']",pathvalue); 
await page.click(`span[class=' label bBody']`)
//to click view all and to download file
await page.waitForTimeout(10000)
const viewall= page.locator(`.view-all-label`)
viewall.click({force:true})
//download
await page.locator('[role="grid"]>tbody>tr>* svg').nth(1).click()
const fileToDownload = page.waitForEvent('download');
await page.locator('a[title="Download"]').click()
const filePath = await fileToDownload;
const path ="C:/playwright/Playwright-testleaf/tests/day8/"
await filePath.saveAs(path  + (await fileToDownload).suggestedFilename());


})
})
/**
 * 
 * Assignment: 3
 * 
 * 1. Auto login to your Salesforce application
 * 2. Click the App launcher icon
 * 3. Click View All
 * 4. Enter Content in the Search box
 * 5. Click Content
 * 6. Click Chatter
 * 7. Click Question
 * 8. Fill the Question and Details field
 * 9. Click Ask
 * 10. Verify the Question and Details created
 * 
 */
test.use({storageState:`creds/login_details.json`});
test(`without login`, async({page})=>{

    page.goto('https://testleaf-b4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home')
     //Clicking on AppLauncher
  await page.click(".slds-icon-waffle");
  await page.locator('//button[text()="View All"]').click()
   //searching for content tab
   await page.getByPlaceholder("Search apps or items...").fill("Content");
   await page.getByPlaceholder("Search apps or items...").focus()
   await page.keyboard.press("Enter");
   await page.click('//mark[text()="Content"]',{timeout:2000});
   await page.click(`a[title="Chatter"]`)
    await page.click("text=Question")
    await page.getByPlaceholder("What would you like to know?").fill("what is content -chatter")
    await page.fill("[class*='text-editor__textarea'] >* P","describe it")
    await page.click(`[title="Click, or press Ctrl+Enter"]`)
    const question=page.locator(`[class="cuf-feedElement cuf-feedItem"] >div > span[class="uiOutputText"]`).nth(0)
    expect(await question.innerText()).toContain("content")
    const detail=page.locator(`div[class*='cuf-feedBodyText ']`).nth(0)
    expect(await detail.innerText()).toContain("describe")
})