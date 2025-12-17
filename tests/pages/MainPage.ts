import {Page} from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage{
    static open() {
        throw new Error("Method not implemented.");
    }
    async open() {
        this.page.goto('https://rutube.ru/')
    }
    }