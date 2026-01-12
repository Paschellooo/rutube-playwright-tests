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
test('проверка доступности элементов списка добавления конетента ', async({mainPage})=>{;
await mainPage.openAddPopupList();
await mainPage.addPopupListHasCorrectAriaSnapshot();
});
test('проверка доступности элементов попапа уведомлений  ', async({mainPage})=>{;
await mainPage.openAddPopupList();
await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});
test('проверка доступности элементов модального окна авторизации  ', async({mainPage})=>{;
await mainPage.openAuthorizationModal();
await mainPage.authorizationModalHasCorrectAriaSnapshot();
});
test('проверка доступности элементов модального окна регистрации  ', async({mainPage})=>{;
await mainPage.openAuthorizationModal();
await mainPage.SwitchToRegistrationModal();
await mainPage.registrationModalHasCorrectAriaSnapshot();
});