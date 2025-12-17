import test from "@playwright/test";
import { MainPage } from "../../pages/MainPage";


test('открытие главной страницы', async({page})=>{
const mainPage = new MainPage(page);
await mainPage.open();
});