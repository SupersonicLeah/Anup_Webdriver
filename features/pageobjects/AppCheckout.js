const { $ } = require('@wdio/globals')

//Getting the required Validation messages

class CheckOutPage {
    
    get validatationMessage() {return $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView')}
    get passwordMessage() {return $('//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView')}
    get usernameMessage() {return $('//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView')}
    get shoppingButton() {return $('~Go Shopping button')}
}

module.exports = new CheckOutPage();