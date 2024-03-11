import {test,chromium, expect} from '@playwright/test'
    
test("chatter",async({page})=>{
        await page.goto("https://login.salesforce.com/");
        //Login into SalesForce Apllication
        await page.fill("#username","kayathri@testleaf.com");
        await page.fill('[type="password"]',"Kayu@1234")
        await page.click('[value="Log In"]')
        //Clicking on AppLauncher
        await page.click(".slds-icon-waffle");
        await page.locator('//button[text()="View All"]').click()
       //searching for service tab
        await page.getByPlaceholder("Search apps or items...").fill("Service");
        await page.keyboard.press("Enter");
        await page.click('//mark[text()="Service"]',{force:true});
        await page.click(`(//span[text()="Cases"])[1]`)
        await page.click(`div[title="New"]`)
        //creating new contact
        await  page.click(`input[role="combobox"]`)
        await page.click(`//div[@class="slds-combobox_container"]//span[@title="New Contact"]`)
        await page.locator(`a.select`).first().click()
        await page.getByTitle('Ms.').click();
        await page.getByPlaceholder("First Name").fill('kayathri');
        await page.getByPlaceholder("Last Name").fill('sriram');
        await page.click(`//button[@title="Save"]`);
        console.log(await page.getByRole("alertdialog").innerText());
        await page.locator("//label[text()='Account Name']/following::input[1]").click({force:true})
        //setting account info for the created contact
        await page.click(`//span[text()="New Account"]`,{force:true})
        //setting account info
        await page.fill(`//span[text()='Account Name']/following::input[1]`,"test")
        await page.locator("//span[text()='Account Number']/following::input[1]").fill("9791065181")
        await page.click(`//span[text()='Rating']/following::a[1]`)
        await page.click('a[title="Hot"]')
        await page.locator(`(//span[text()="Save"])[2]`).click()
        await page.click(`(//label[text()="Priority"]/following::button)[1]`)
        await page.click(`//label[text()="Priority"]/following::* [@title="High"]`)
        await page.click(`(//label[text()="Case Origin"]/following::button)[1]`)
        await page.click('//span[text()="Email"]')
        await page.click(`button[name="SaveEdit"]`)
        await page.fill(`[name="Subject"]`,"Product Return Request")
        const description = page.locator(`[name="inputField"]>* textarea`).nth(1)
        await description.fill("Requesting a return for a defective product");
        console.log(await page.getByRole("alertdialog").innerText());
//editing the status to escalated
await page.waitForLoadState("load")
await page.click("//div[contains(@class,'field-label-container')]//span[text()='Status']/following::button[1]")
await page.click(`button[data-value="New"]`)
await page.click(`span[title="Escalated"]`)
await page.click(`button[name="SaveEdit"]`)
await page.click(`//span[text()="Share an update..."]`)
await page.fill(`div[class='messageBodyWrapper']>div>div>span+* p`,"The case has been escalated")
await page.click(`//span[text()="Share"]`)
//to like the chatter
await page.locator(`.cuf-media-right`).nth(1).click()
await page.getByTitle("Like on Chatter").click()
console.log(await page.getByRole("alertdialog").innerText());
//to check the liked chatter

await page.click(`a[title='Chatter']`);
const liked=await (page.locator(`span[title="Unlike"]`).innerText());
console.log(liked)
expect(liked).toContain('Liked')
})