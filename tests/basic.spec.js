import {test, expect} from "@playwright/test"


test("basic functionality", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.getByPlaceholder("Type to Select Countries").fill("india");
    await page.waitForSelector("//li[@class='ui-menu-item']")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    //await page.getByPlaceholder("Type to Select Countries").clear();
    await page.selectOption("//select[@id='dropdown-class-example']",{value:"option1"});
    expect(page.locator("//h1").textContent,"Practice Page");
    await page.reload();
    await page.locator("//h1").click({ button: 'right' });
    await page.locator("//div[@class='mouse-hover']").scrollIntoViewIfNeeded();
    await page.goForward();
    await page.pause();
});