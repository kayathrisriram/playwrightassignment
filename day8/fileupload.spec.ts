import { test } from '@playwright/test'
test("Learn to upload file", async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/upload");


     await page.setInputFiles("input[type='file']", "./day8/FileTOUpload/sample.txt");
})
test.only("Learn to upload file using event handler", async ({ page }) => {


    await page.goto("https://leafground.com/file.xhtml");
    //if the dom element is not available with type= file then go with event handler
    // ]]//filechooser event 
    const uploadFile = page.waitForEvent('filechooser');
    await page.locator("[class$='ui-icon-plusthick']").last().click();
    const file = await uploadFile;
    await file.setFiles("./day8/FileTOUpload/sample.png");
    await page.waitForTimeout(3000);
})


test('Learn to download the file', async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/download");


    const fileToDownload = page.waitForEvent('download');
    await page.locator("//a[text()='test-file.txt']").click();
    const filePath = await fileToDownload;
    const path ="C:/playwright/Playwright-testleaf/tests/day8/"
    await filePath.saveAs(path  + (await fileToDownload).suggestedFilename());

})