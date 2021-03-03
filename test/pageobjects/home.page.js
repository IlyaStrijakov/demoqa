
import BasePage from "./Base.page";

class HomePage extends BasePage {


    get header () {
        return $('a[href="https://demoqa.com"]') ;
    }

    get elementsBtn(){
        return $$('.card-up')[0];
    }

    get formsBTN (){
        return $$('.card-up')[1];
    }

    get alertsBtn(){
        return $$('.card-up')[2];
    }

    get widgetsBTN(){
        return $$('.card-up')[3];
    }

    get interactionsBtn(){
        return $$('.card-up')[4];
    }

    get bookStoreBtn (){
        return $$('.card-up')[5];
    }

















    // login (username, password) {
    //     this.inputUsername.setValue(username);
    //     this.inputPassword.setValue(password);
    //     this.btnSubmit.click();
    // }
//     open () {
//         return super.open('login');
//     }

}

export default new HomePage();
