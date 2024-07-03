import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import loginPage from '../../screenobject/login.page.js'
import homePage from '../../screenobject/home.page.js';

Given(/^user is on the login screen$/, async () => {
    await homePage.navigateToLoginScreen();
});

When(/^user login with (.+) and (.+) and click on login button$/,async (username, password) => {
    await loginPage.login(username, password);
});

Then(/^verify the successful login (.*)$/, async (errorMsg)=> {
    console.log("write the error message for verification = >"+errorMsg);
    //await expect(homePage.productListScreen).toHaveText(errorMsg);
})

Then(/^verify the login error message (.*)$/, async (errorMsg)=> {
    console.log("write the error message for verification = >"+errorMsg);
    //await expect(homePage.productListScreen).toHaveText(errorMsg);
})
