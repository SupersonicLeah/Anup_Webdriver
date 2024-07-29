const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const landingPage = require('../pageobjects/AppLanding.js');
const loginPage = require('../pageobjects/AppLogin.js');
const checkoutPage = require('../pageobjects/AppCheckout.js');

//navigating to login page

Given(/^Navigate to the Login Page$/, async () => {
    await browser.pause(3000)
    await landingPage.hamburger();
    await browser.pause(3000)
    await landingPage.logins();
    await browser.pause(3000)
});


//Entering login credentials

When(/^I login with (.*) and (.*)$/, async (username, password) => {
   await browser.pause(3000)
   loginPage.input(username, password)
   await browser.pause(3000)
});

//clicking on login button

When('Click on the login button', async () => {
    await browser.pause(3000)
    loginPage.loginbuttonClick()
    await browser.pause(3000)
});

//verifying error message based on user credentials entered

Then(/^Validatation message should be (.*)$/, async(message) => {
    await browser.pause(3000)
	if (await checkoutPage.usernameMessage.isDisplayed())
    {
        console.log("username!!")
        await browser.pause(3000)
        await checkoutPage.usernameMessage.waitForDisplayed({ timeout: 2000 });
        await expect(checkoutPage.usernameMessage).toHaveText(message)
        await browser.pause(3000)
    }
    else if (await checkoutPage.passwordMessage.isDisplayed())
    {
        console.log("passwordd!!")
        await browser.pause(3000)
        await checkoutPage.passwordMessage.waitForDisplayed({ timeout: 2000 });
        await expect(checkoutPage.passwordMessage).toHaveText(message)
        await browser.pause(3000)
    }
    else if (await checkoutPage.validatationMessage.isDisplayed())
    {
        await browser.pause(3000)
        await expect(checkoutPage.validatationMessage).toHaveText(message)
        await browser.pause(3000)
    }
    else 
    {
        await browser.pause(3000)
        await landingPage.hamburger();
        await browser.pause(3000)
        await landingPage.logins();
        await browser.pause(3000)
        await expect(checkoutPage.shoppingButton).toBeExisting()
        await browser.pause(3000)
    }
    await browser.pause(3000)
    
});