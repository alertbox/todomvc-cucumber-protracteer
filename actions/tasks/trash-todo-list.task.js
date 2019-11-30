import { element, By } from 'protractor';

export async function trashTodoList() {
    const nrOfTodos = await element.all(By.css('input[type=checkbox]')).count();
    if (nrOfTodos > 0) {
        await element(By.id('toggle-all')).click();
    }
    return element(By.css('.clear-completed')).click();
}
