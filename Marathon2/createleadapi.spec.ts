import {test,chromium, expect} from '@playwright/test'
let accessToken:any
let uri:any
let id:any

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

    //to create lead using post 
    test(`to create lead`,async({request})=>{
        const response=await request.post(`${uri}/services/data/v59.0/sobjects/Lead`,{
                headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
        },
        data:{
            "Salutation":"MR.",
            "lastName" :"S",
             "Company":"testleaf"
        }
    })
    const resBody=await response.json();
    console.log(resBody)
    id=resBody.id;
})

//to update lead using patch
test(`to update created lead`,async({request})=>{
    const response=await request.patch(`${uri}/services/data/v59.0/sobjects/Lead/${id}`,{
            headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+accessToken
    },
    data:{
        "firstName":"kayu",
        "Title":"Senior SDET"
    }
})
    expect(response.status()).toBe(204)
})

//to delete the created lead using ui 
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
    //to verify the lead name

    const leadname= await page.locator(`[class$='uiVirtualDataTable'] >tbody>* th > span`).innerText()
    expect(leadname).toContain('kayu')
    //to delete the lead
    await page.click(`span[class$='grid--align-spread'] >* a`)
    await page.click(`a[title="Delete"]`)
    await page.click(`button[title="Delete"]`)
    const msg=await page.getByRole("alertdialog").textContent();
    console.log(msg)
    expect(msg).toContain("deleted")
    //to search the deleted lead thru search box 
    await page.getByPlaceholder(`Search this list...`).fill('kayu')
    await page.getByPlaceholder(`Search this list...`).focus()
    await page.keyboard.press("Enter")
    await page.waitForLoadState('load')
    const verifydel_lead= page.getByText('No items to display.')
    //const verifydel_lead=await page.locator(`[class^='emptyContentInner'] >* span`).textContent()
    expect(verifydel_lead).toHaveText('No items to display.')
})