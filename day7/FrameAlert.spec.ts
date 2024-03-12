import {test,chromium, expect} from '@playwright/test'

test('Learning to handle simple alerts',async({page})=>{


    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    const frameele=page.frameLocator("#iframeResult")
    
    page.once('dialog',async alertType=>{
        console.log(alertType.type())
        const msg=alertType.message();
        console.log(msg);
        await alertType.accept();
    })
    await frameele.getByText("Try it").click()
 
    const verifytext= await frameele.locator("p[id='demo']").innerText();
   expect(verifytext).toContain("OK!");

})
test('Learning to handle dismiss alerts',async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    const frame=page.frameLocator("#iframeResult")

    page.once('dialog',async alertType=>{
       console.log(alertType.type())
        const msg=alertType.message();
        console.log(msg);
        await alertType.dismiss();
    })
    await frame.getByText("Try it").click()
    const vtext= await frame.locator("p[id='demo']").innerText();
    expect(vtext).toContain("Cancel!");
    
    })

   