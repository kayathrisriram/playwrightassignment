import {test} from '@playwright/test'
import fs from 'fs';
import path from 'path';

   const testData=JSON.parse(fs.readFileSync(path.join(__dirname,"testdata.json"),'utf-8'));
for(const data of testData){
test(`Reading data from json file ${data.testcase_id}`, async({page})=>{


 await page.goto("https://login.salesforce.com/");
 await page.fill("#username",data.username);
 await page.fill("#password",data.password);
 await page.click('[value="Log In"]')
 await page.waitForTimeout(3000);


})}