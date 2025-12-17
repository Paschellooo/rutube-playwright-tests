import {test,expect} from '..//../fixtures/fixtures'
import { MainPage } from "../../pages/MainPage";

// test('открытие главной страницы', async({page})=>{
// const mainPage = new MainPage(page);
// await mainPage.open();
// });

test('проверка доступности элементов хедера', async({mainPage})=>{

await mainPage.headerHasCorrectAriaSnapshot();
});
test('проверка доступности элементов табов категорий', async({mainPage})=>{
await mainPage.categoriestTabsHasCorrectAriaSnapshot();
});
test('проверка доступности элементов бокового меню', async({mainPage})=>{;
await mainPage.menuHasCorrectAriaSnapshot();
});