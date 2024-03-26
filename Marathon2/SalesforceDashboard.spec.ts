import {test,chromium, expect} from '@playwright/test'
import {faker} from "@faker-js/faker"
let accessToken:any
let uri:any
let id:any

test("sales force Create Dashboard",async({page})=>{
        await page.goto("https://login.salesforce.com/");
        //Login into SalesForce Apllication
        await page.fill("#username","kayathri@testleaf.com");
        await page.fill('[type="password"]',"Kayu@1234")
        await page.click('[value="Log In"]')
        await page.waitForLoadState('load')
        //Clicking on AppLauncher
        await page.click(".slds-icon-waffle");
        await page.locator('//button[text()="View All"]').click()
       //searching for Dashboards 
        await page.getByPlaceholder("Search apps or items...").fill("Dashboards");
        await page.keyboard.press("Enter");
        await page.click('//mark[text()="Dashboards"]',{timeout:2000});

        //to creatr new dashboard
        await page.waitForSelector('div[title="New Dashboard"]')
        await page.click(`div[title="New Dashboard"]`)
        await page.waitForLoadState('domcontentloaded')
        const frameele= page.frameLocator('iframe[title="dashboard"]')
        const name=faker.person.firstName()
        await frameele.locator(`#dashboardNameInput`).fill(`${name}`)
        await frameele.locator(`#dashboardDescriptionInput`).fill("Tetsing -created through UI/WEB")
        await frameele.locator(`#submitBtn`).click()
        await page.waitForTimeout(10000)
       // await page.waitForLoadState('domcontentloaded')
        const text=await frameele.locator(`.slds-form-element__static`).textContent();
        console.log(text)
        expect(text).toContain(`${name}`)
        await frameele.locator(`//button[text()='Save']`).click()
        const msg=await page.getByRole("alertdialog").textContent();
        console.log(msg)
        expect(msg).toContain("saved")
})
test(`Generate AuthToken`,async({request})=>{
    const response=await request.post("https://login.salesforce.com/services/oauth2/token",{
    headers:{
    "Content-Type":"application/x-www-form-urlencoded",
    "Connection":"Keep-alive"
    },
    form:{
    "grant_type":"password",
    "client_id":"3MVG9NnK0U_HimV776dWfB5VQgJMZ1jwzifbJ03XESMea99R2HWSa9Va6mMaFgV0pnozl2m.yCpfOMt2uaQ7A",
    "client_secret":"DFC4058273559CAB9C01309A643D51ECEA322135E60C01D44FA494ED06AF50D1",
    "username":"kayathri@testleaf.com",
    "password":"Kayu@1234"
    }
    })
    const genrateToken=await response.json();
    console.log(genrateToken);
    accessToken=genrateToken.access_token;
    uri=genrateToken.instance_url;
    console.log(`The Bearer token is ${accessToken} and the uri is ${uri}`)
    })
    
    test(`get dashboard`,async({request})=>{
    
    const response=await request.get(`${uri}/services/data/v59.0/sobjects/Dashboard`,{
    headers:{
        
            "Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
    }
    })
      const resBody=await response.json();
      console.log(resBody)
     id= resBody.recentItems[0].Id
    })
    
    test(`delete dashboard`,async({request})=>{
        const reponse=await request.delete(`${uri}/services/data/v59.0/sobjects/Dashboard/${id}`,{
                headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
        }
    })
    expect(reponse.statusText()).toBe('No Content')
    expect(reponse.status()).toBe(204)
    })

    
test("to verify the deleted  Dashboard",async({page})=>{
    await page.goto("https://login.salesforce.com/");
    //Login into SalesForce Apllication
    await page.fill("#username","kayathri@testleaf.com");
    await page.fill('[type="password"]',"Kayu@1234")
    await page.click('[value="Log In"]')
    await page.waitForLoadState('load')
    //Clicking on AppLauncher
    await page.click(".slds-icon-waffle");
    await page.locator('//button[text()="View All"]').click()
   //searching for Dashboards 
    await page.getByPlaceholder("Search apps or items...").fill("Dashboards");
    await page.keyboard.press("Enter");
    await page.click('//mark[text()="Dashboards"]',{timeout:2000});
    await page.waitForLoadState('load')
    await page.getByTitle("View All Dashboards").click()
    const verifytext=await  page.locator(`.listViewContainer >* span.emptyMessageTitle`).innerText()
    console.log(verifytext)
    expect(verifytext).toContain('Nothing')
})
