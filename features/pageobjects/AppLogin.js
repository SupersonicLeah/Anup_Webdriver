class LoginPage {
    get usernameInput() { return $('~Username input field'); }
    get passwordInput() { return $('~Password input field'); }
    get loginButton() { return $('~Login button'); }
  
    async waitForUsername() {
      await this.usernameInput.waitForExist({ timeout: 10000 });
  }

  async waitForPassword() {
      await this.passwordInput.waitForDisplayed({ timeout: 10000 });
  }

  async waitForLogin() {
    await this.passwordInput.waitForDisplayed({ timeout: 10000 });
}

    //Entering username and password

    async input(username, password) {
      await this.waitForUsername()
      this.usernameInput.setValue(username);
      await browser.pause(3000) 
      await this.waitForPassword()
      this.passwordInput.setValue(password);
      await browser.pause(3000) 
   }

    //Clicking on login button

    async loginbuttonClick(){
        await this.waitForLogin()
        await browser.pause(3000) 
        this.loginButton.click();
        await browser.pause(3000) 
    }
  
  }
  
  module.exports = new LoginPage();