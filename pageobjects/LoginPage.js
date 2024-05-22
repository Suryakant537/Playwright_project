const {test, expect} = require('@playwright/test');
class LoginPage
{
constructor(page)
    {
        this.page = page;
        this.loginButton = page.locator("button[type='button'].MuiButton-containedPrimary");
        this.userName = page.locator("input[name='username']");
        this.password =  page.locator("input[id='password']");
        this.continueButton = page.locator("button[class*='_button-login']");
    }

    //Login function
    async login(userName, password){
        await this.loginButton.click();
        await this.userName.fill(userName);
        await this.continueButton.click();
        await this.password.fill(password);
        await this.continueButton.click();
    }
}
module.exports = {LoginPage};
