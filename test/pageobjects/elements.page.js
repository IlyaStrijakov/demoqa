import BasePage from "./Base.page";

class ElementsPage extends BasePage {

    get mainHeader(){
        return $('.main-header');
    }

    get elementsTab (){
        return $('.header-wrapper');
    }

    get textBoxTab (){
        return $('#item-0');
    }

    get checkBoxTab (){
        return $('#item-1');
    }

    get radioTab (){
        return $('#item-2');
    }

    get webTablesTab (){
        return $$('#item-3');
    }

    get buttonsTab (){
        return $$('#item-');
    }

    get linksTab (){
        return $$('#item-5');
    }

    get brokenLinksTab (){
        return $$('#item-6');
    }

    get uploadDownloadTab (){
        return $$('#item-7');
    }

    get dynamicPropertiesTab (){
        return $$('#item-8');
    }

}

export default new ElementsPage();

