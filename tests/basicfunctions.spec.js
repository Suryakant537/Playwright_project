import {test} from '@playwright/test'
test.only("Open the browser and open url", async({page, context})=>{
    //open an url
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    console.log(await page.title());
    //sendKeys
    await page.getByPlaceholder("Enter Your Name").fill("surya");
    //click
    await page.locator("//input[@id='alertbtn']").click();
    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);;
        await alert.accept();
    })
    await page.locator("//input[@value='radio1']").click();
    //handling windows
    const [newtab] = await Promise.all([
        context.waitForEvent("popup"),
        page.locator("//a[@id='opentab']").click()
    ]); 
    console.log(await newtab.url());
    console.log(await newtab.title());
    console.log(await page.title());

});