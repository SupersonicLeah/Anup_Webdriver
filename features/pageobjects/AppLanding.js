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
    }

//Clicking on Login module

    async logins(){
        await this.waitForLoginItem();
        this.LoginClick.click({ force: true })
    }
}

module.exports = new LandingPage();