import {expect, Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage{
    readonly headerLocator: Locator;
    readonly categoriesTabsLocator: Locator;
    readonly menuLocator : Locator ;
    private readonly multipassFrame;
private readonly registrationTitleLocator: Locator;

    private readonly headerAddButtonLocator: Locator;
private readonly headerNotificationButtonLocator: Locator;
private readonly headerLoginButtonLocator: Locator;
private readonly headerAddButtonPopupListLocator: Locator;
private readonly headerNotificationPopupLocator: Locator;
private readonly authorizationModalLocator: Locator;
private readonly switchToRegistrationModalLocator: Locator;
private readonly menuButtonLocator: Locator;
private readonly openAriaLocator: Locator;
private readonly changeThemeButtuonLocator: Locator;
   constructor(page: Page) {
  super(page);

  this.headerLocator = this.page.getByRole('banner');
  this.categoriesTabsLocator = this.page.getByRole('navigation');
  this.menuLocator = this.page.getByLabel('Облегченная панель навигации');

  this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
  this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
  this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });

  this.headerAddButtonPopupListLocator =
    this.page.locator('.wdp-header-right-module__uploader ul');

  this.headerNotificationPopupLocator =
    this.page.locator('.wdp-notifications-popup-module__wrapper');

  // ✅ ВАЖНО: frame сохраняем в this
  this.multipassFrame =
    this.page.frameLocator('iframe[title="Multipass"]');

this.authorizationModalLocator =
  this.multipassFrame.locator('div[role="form"]');

  this.switchToRegistrationModalLocator =
    this.multipassFrame.getByRole('button', { name: /почта/i });

  this.registrationTitleLocator =
     this.multipassFrame.getByText(/^Регистрация$/i);

  this.menuButtonLocator =
    this.page.getByRole('button', { name: 'Открыть меню навигации' });

  this.openAriaLocator =
    this.page.locator('.menu-content-module__menuOpen');
    this.changeThemeButtuonLocator = this.page.getByRole('button', { name: 'Переключить на светлую тему' });
}

  
    async open() {
        await this.page.goto('https://rutube.ru/')
    }
    async changeThemetoWhite()
    {await this.changeThemeButtuonLocator.click();
    }

    async openFullMenu()
    {await this.menuButtonLocator.click();

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
  await this.headerAddButtonLocator.click();
  await expect(this.headerAddButtonPopupListLocator).toBeVisible();
}
    async openNotoficationPopup(){
  await this.headerNotificationButtonLocator.click();
  await expect(this.headerNotificationPopupLocator).toBeVisible();
    }
async openAuthorizationModal() {
  await this.headerLoginButtonLocator.click();
  await expect(this.authorizationModalLocator).toBeVisible();
}
async switchToRegistrationModal() {
  await this.switchToRegistrationModalLocator.click();
  await expect(this.registrationTitleLocator).toBeVisible({ timeout: 10000 });
}

async addPopupListHasCorrectAriaSnapshot(){
    await expect(this.headerAddButtonPopupListLocator).toMatchAriaSnapshot({name: 'AddButtonPopupSnapshot.yml'}); 
}
async notificationsPopupHasCorrectAriaSnapshot() {
  await expect(this.headerNotificationPopupLocator).toMatchAriaSnapshot({
    name: 'NotificationPopupSnapshot.yml',
    ignoreText: true,
  });
}
async authorizationModalHasCorrectAriaSnapshot(){
    await expect(this.authorizationModalLocator).toMatchAriaSnapshot({name: 'authorizationModalSnapshot.yml'}); 
}
async registrationModalHasCorrectAriaSnapshot() {
  await expect(this.authorizationModalLocator).toBeVisible();
  await expect(this.authorizationModalLocator).toMatchAriaSnapshot({
    name: 'registrationModalSnapshot.yml',
    ignoreText: true,
  });
}

async fullMenuIsAccessible() {
  const menu = this.openAriaLocator;

  await expect(menu).toBeVisible();
  await expect(menu).toHaveRole('navigation');

  // основные пункты
  await expect(menu.getByRole('link', { name: 'Главная' })).toBeVisible();
  await expect(menu.getByRole('link', { name: 'Каталог' })).toBeVisible();
  await expect(menu.getByRole('link', { name: 'Shorts' })).toBeVisible();

  // важные кнопки
  await expect(menu.getByRole('button', { name: 'Вход и регистрация' })).toBeVisible();
}
async checkThemeAttributeValue(attributeValue: 'dark2021' | 'white2022'){
  await expect (this.page.locator('html')).toHaveAttribute ('data-pen-theme', attributeValue);
}
}
