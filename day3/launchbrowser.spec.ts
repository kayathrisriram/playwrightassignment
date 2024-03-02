import {test, webkit} from '@playwright/test'

test("to launch chrome ",async()=>{
    const browserobj = await webkit.launch({headless:false });
    const browsercontext =await browserobj.newContext();
    const page =await browsercontext.newPage();
    await page.goto("https://www.gmail.com");


})