const {test, expect} = require('@playwright/test');
class IssuePage
{
    //constructor
constructor(page)
    {
        this.page = page;
        this.severityDropDown = page.locator("div[data-testid='filter_box filter_header_Severity']");
        this.highSeverityOption = page.locator("div[data-testid='filter_subitem filter_item_High'] span").first();
        this.counterValue =page.locator("div[data-testid='panel-component'] span[class*='-count']");
    }

    //Get the value of counter
    async printCounterValue(){
        await this.severityDropDown.click();
        await this.highSeverityOption.click();
        console.log(await this.counterValue.textContent());
    }
}
module.exports = {IssuePage};