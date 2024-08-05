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
    await this.loginButton.waitForDisplayed({ timeout: 10000 });
}

    //Entering username and password

    async input(username, password) {
      await this.waitForUsername()
      await this.usernameInput.setValue(username); 
      await this.waitForPassword()
      await this.passwordInput.setValue(password);
      await this.loginButton.click(); 
   }
  
  }
  
  module.exports = new LoginPage();