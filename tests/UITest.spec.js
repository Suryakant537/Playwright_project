import {test} from '@playwright/test'
import { LoginPage } from '../pageobjects/LoginPage';
import { IssuePage } from '../pageobjects/IssuePage';
// import {test} from '@playwright/test'
import {expect} from '@playwright/test'
const {DashBoardPage} = require('../pageobjects/DashBoardPage')
let dashboardPage;
let loginPage;
let issuePage;


test("Verify counter for ", async({page, context})=>{
    //Object of classes for calling functions
    dashboardPage = new DashBoardPage(page);
    loginPage = new LoginPage(page);
    issuePage = new IssuePage(page);

    //open an url
    await page.goto("https://dev.app.ox.security/");
    //login in portal with valid credentials
    await loginPage.login("test", "Aa123456");
    //wait to load the dashboard page
    await dashboardPage.waitOfDashBoard();
    //Navigate to the Issue page
    await dashboardPage.navigateToIssuePage();
    //Print the value of counter after applying filter
    await issuePage.printCounterValue()
});
