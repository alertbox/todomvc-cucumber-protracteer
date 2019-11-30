import { expect } from 'chai';
import { element, By } from 'protractor';

const todoElements = element.all(By.css('.view'));

export async function shallSeeTodosOf(todos) {
    const actualTodos = await todoElements.getText();
    
    return expect(actualTodos).to.have.all.members(todos);
}
