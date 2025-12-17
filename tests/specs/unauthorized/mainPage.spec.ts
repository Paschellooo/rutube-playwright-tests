import test from "@playwright/test";
import { MainPage } from "../../pages/MainPage";

// test('открытие главной страницы', async({page})=>{
// const mainPage = new MainPage(page);
// await mainPage.open();
// });

test('проверка доступности элементов хедера', async({page})=>{
const mainPage = new MainPage(page);
await mainPage.open();
await mainPage.closeCookiesAlert();
await mainPage.headerHasCorrectAriaSnapshot();
});
test('проверка доступности элементов табов категорий', async({page})=>{
const mainPage = new MainPage(page);
await mainPage.open();
await mainPage.closeCookiesAlert();
await mainPage.categoriestTabsHasCorrectAriaSnapshot();
});
test('проверка доступности элементов бокового меню', async({page})=>{
const mainPage = new MainPage(page);
await mainPage.open();
await mainPage.closeCookiesAlert();
await mainPage.menuHasCorrectAriaSnapshot();
});