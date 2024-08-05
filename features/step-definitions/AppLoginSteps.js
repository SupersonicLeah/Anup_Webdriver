const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const landingPage = require('../pageobjects/AppLanding.js');
const loginPage = require('../pageobjects/AppLogin.js');
const checkoutPage = require('../pageobjects/AppCheckout.js');

//navigating to login page

Given(/^Navigate to the Login Page$/, async () => {
    
    await landingPage.hamburger();
    await landingPage.logins();
    
});


//Entering login credentials

When(/^I login with (.*) and (.*)$/, async (username, password) => {
   await loginPage.input(username, password)
});


//verifying error message based on user credentials entered

Then(/^Validatation message should be (.*)$/, async(message) => {
	if (await checkoutPage.usernameMessage.isDisplayed())
    {
        console.log("username!!")
        await checkoutPage.usernameMessage.waitForDisplayed({ timeout: 2000 });
        await expect(checkoutPage.usernameMessage).toHaveText(message)
    }
    else if (await checkoutPage.passwordMessage.isDisplayed())
    {
        console.log("passwordd!!")
        await checkoutPage.passwordMessage.waitForDisplayed({ timeout: 2000 });
        await expect(checkoutPage.passwordMessage).toHaveText(message)
    }
    else if (await checkoutPage.validatationMessage.isDisplayed())
    {
        await expect(checkoutPage.validatationMessage).toHaveText(message)
    }
    else 
    {
        await landingPage.hamburger();
        await landingPage.logins();
        await expect(checkoutPage.shoppingButton).toBeExisting()
    }
    
});