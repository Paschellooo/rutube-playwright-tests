import {expect, Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage{
    readonly headerLocator: Locator;
    readonly categoriesTabsLocator: Locator;
    readonly menuLocator : Locator ;
    private readonly headerAddButtonLocator: Locator;
private readonly headerNotificationButtonLocator: Locator;
private readonly headerLoginButtonLocator: Locator;
private readonly headerAddButtonPopupListLocator: Locator;
private readonly headerNotoficationPopupLocator: Locator;
private readonly autorizationModalalLocator: Locator;
private readonly switchToRegistrationModalLocator: Locator;

    constructor (page: Page){
        super(page);
        this.headerLocator = this.page.getByRole('banner')
        this.categoriesTabsLocator = this.page.locator('section').filter({ hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/ });
        this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
        this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
        this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
        this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
        this.headerAddButtonPopupListLocator = this.page.locator('.wdp-header-right-module__uploader ul');
        this.headerNotoficationPopupLocator = this.page.locator('.wdp-notifications-popup-module__wrapper ');
        this.autorizationModalalLocator = this.page.locator('iframe[title="Multipass"]').contentFrame().locator('div[role = "form"]');
        this.switchToRegistrationModalLocator = this.page.locator('iframe[title="Multipass"]').locator('div[role = "form"]').getByRole('button', { name: 'войти с помощью Почта' });
    }
    
  
    async open() {
        this.page.goto('https://rutube.ru/')
    }
    async headerHasCorrectAriaSnapshot(){
        await expect(this.headerLocator).toMatchAriaSnapshot({name: 'headerAriaSnapshot.yml'});
    }
     async categoriestTabsHasCorrectAriaSnapshot(){
        await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({name: 'categoriesTabsSnapshot.yml'});
    }
       async menuHasCorrectAriaSnapshot(){
        await expect(this.menuLocator).toMatchAriaSnapshot({name: 'menuSnapshot.yml'});
    }
    async openAddPopupList() {
    this.headerAddButtonLocator.click()
    }
    async openNotoficationPopup(){
    this.headerAddButtonPopupListLocator.click()
    }
    async openAuthorizationModal(){
    this.headerLoginButtonLocator.click()
    }
     async SwitchToRegistrationModal(){
    this.switchToRegistrationModalLocator.click()
    }
async addPopupListHasCorrectAriaSnapshot(){
    await expect(this.headerAddButtonPopupListLocator).toMatchAriaSnapshot({name: 'AddButtonPopupSnapshot.yml'}); 
}
async notificationsPopupHasCorrectAriaSnapshot(){
    await expect(this.headerNotoficationPopupLocator).toMatchAriaSnapshot({name: 'NotoficationPopupSnapshot.yml'}); 
}
async authorizationModalHasCorrectAriaSnapshot(){
    await expect(this.autorizationModalalLocator).toMatchAriaSnapshot({name: 'authorizationModalSnapshot.yml'}); 
}
async registrationModalHasCorrectAriaSnapshot(){
    await expect(this.autorizationModalalLocator).toMatchAriaSnapshot({name: 'registrationModalSnapshot.yml'}); 
}
}

