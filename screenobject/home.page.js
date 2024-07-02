import { $ } from '@wdio/globals'

class HomePage {

    get hambergerMenu(){
        return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView') 
    }

    get loginOption(){
        return $('//android.view.ViewGroup[@content-desc="menu item log in"]');
    }

     get productListScreen(){
         return $('//android.widget.TextView[@text="Products"]');
     }

      /**
     * a method to encapsule automation code to interact with the page element
     * e.g. to reach on login screen
     */
    async navigateToLoginScreen(){
        (await this.hambergerMenu).click();
        (await this.loginOption).click();
    }
    
}

export default new HomePage();
