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
    console.log("write the success message for verification = >" + errorMsg);
    const productInfo = await homePage.productListScreen;
    const textMsg = await productInfo.getText();
    await expect(textMsg).toEqual(errorMsg);
})

Then(/^verify the login error message (.*)$/, async (errorMsg)=> {
    console.log("write the error message for verification = >"+errorMsg);
    const productInfo = await loginPage.errorTextMsg;
    await productInfo.waitForDisplayed({ timeout: 5000 });
    if (!productInfo.error) {
        const text = await productInfo.getText();
        await expect(text).toEqual(errorMsg);
    } else {
        console.error('Element not found for any error');
    }
    // const testMsg = (await loginPage.errorTextMsg).getText();
    // await expect(testMsg).toHaveText(errorMsg);
})
