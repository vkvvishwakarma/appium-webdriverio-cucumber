import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */

class LoginPage {

    /**
     * define selectors using getter methods
     */

    get inputUsername () {
        return $('//android.widget.EditText[@content-desc="Username input field"]');
    }

    get inputPassword () {
        return $('//android.widget.EditText[@content-desc="Password input field"]');
    }

    get btnLogin () {
        return $('//android.view.ViewGroup[@content-desc="Login button"]');
    }

    get errorTextMsg(){
        return $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

}

export default new LoginPage();
