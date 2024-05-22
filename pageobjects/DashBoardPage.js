const {test, expect} = require('@playwright/test');
class DashBoardPage
{
constructor(page)
    {
        this.page = page;
       
        this.issueLink = page.locator("a[href='/issues'] button");
        this.activeIssueLink = page.locator("div[data-popper-placement='right-start'] a[href='/issues']");
        this.waitWhatIAmProtecting = "//h1[text()='What I am Protecting']"
    }

    //Function to wait for dashboard page to load
    async waitOfDashBoard(){
        await this.page.waitForSelector(this.waitWhatIAmProtecting);
    }

    //Function to navigate to the issue page
    async navigateToIssuePage(){
        await this.issueLink.click();
        await this.activeIssueLink.click();
    }
}
module.exports = {DashBoardPage};
