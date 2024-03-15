import {test} from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs';
import path from 'path';

const data=parse(fs.readFileSync(path.join(__dirname,'testdata.csv')),
{
    columns:true,
    skip_empty_lines:true
 });

   
   for(const record of data){
    test(`Login from ${record.testcase_id}`, async({page})=>{


        await page.goto("https://login.salesforce.com/");
        await page.fill("#username",record.username);
        await page.fill("#password",record.password);
        await page.click('[value="Log In"]')
        await page.waitForTimeout(3000);
       
       })}
   