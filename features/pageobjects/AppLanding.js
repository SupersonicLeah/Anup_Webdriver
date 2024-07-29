const { $ } = require('@wdio/globals')

class LandingPage {

    get hamburgerClick() {
        return $('~open menu')
    };
    get LoginClick() {
        
        return $('~menu item log in')
    };

    async waitForHamburgerMenu() {
        await this.hamburgerClick.waitForExist({ timeout: 10000 });
    }

    async waitForLoginItem() {
        await this.LoginClick.waitForDisplayed({ timeout: 10000 });
    }

//Opening the hamburger menu

    async hamburger(){
        await this.waitForHamburgerMenu();
        this.hamburgerClick.click( {force: true} )  
        await browser.pause(3000)  
    }

//Clicking on Login module

    async logins(){
        //await $('~menu item log in').waitForExist({timeout: 20000});
        await this.waitForLoginItem();
        this.LoginClick.click({ force: true })
        await browser.pause(3000) 
    }
}

module.exports = new LandingPage();