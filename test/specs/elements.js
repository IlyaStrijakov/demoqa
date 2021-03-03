import HomePage from '../pageobjects/home.page';
import ElementPage from '../pageobjects/elements.page';

describe('Redirect from HP to EP', () => {
    it('Redirect from HP to EP', () => {
        HomePage.open('');

        HomePage.elementsBtn.click();
        expect(ElementPage.mainHeader.isDisplayed()).toEqual(true);
    });
});


