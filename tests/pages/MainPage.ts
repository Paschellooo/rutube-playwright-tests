import {expect, Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage{
    readonly headerLocator: Locator;
    readonly categoriesTabsLocator: Locator;
    readonly menuLocator : Locator ;

    constructor (page: Page){
        super(page);
        this.headerLocator = this.page.getByRole('banner')
        this.categoriesTabsLocator = this.page.locator('section').filter({ hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/ });
        this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    }
  
    async open() {
        this.page.goto('https://rutube.ru/')
    }
    async headerHasCorrectAriaSnapshot(){
        await expect(this.headerLocator).toMatchAriaSnapshot();
    }
     async categoriestTabsHasCorrectAriaSnapshot(){
        await expect(this.categoriesTabsLocator).toMatchAriaSnapshot();
    }
       async menuHasCorrectAriaSnapshot(){
        await expect(this.menuLocator).toMatchAriaSnapshot();
    }
}