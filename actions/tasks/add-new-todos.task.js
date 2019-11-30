import { element, By, promise } from 'protractor';

const newtodoInput = element(By.css('.new-todo'));

export async function addNewTodos(todos) {
    const todoFns = todos.map(addNewTodo);
    return promise.all(todoFns);
}

export async function addNewTodo(todo) {
    return newtodoInput.sendKeys(`${todo}\n`);
}
