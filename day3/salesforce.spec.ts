 
 /* Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * Enter the username vidyar@testleaf.com
 * Enter the password Testleaf@1234
 * Click Login button
 * Verify the title of the page (using page.title() method)
 * 
 */// Try Implementing Fixtures in the above testcase 

 import {test,chromium} from '@playwright/test'
    
    test("sales force login",async({page})=>{
        await page.goto("https://login.salesforce.com/");
        console.log(page.url());
        await page.fill("#username","kayathri@testleaf.com");
        await page.fill('[type="password"]',"Kayu@1234")
        await page.click('[value="Log In"]')
        await page.waitForTimeout(5000)
        console.log(await page.title())


    })
    
 