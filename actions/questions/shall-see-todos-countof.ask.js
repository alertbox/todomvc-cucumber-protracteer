import { expect } from 'chai';
import { element, By } from 'protractor';

const nrofTodosElement = element(By.css('.todo-count'));

export async function shallSeeTodosCountOf(nrOfTodos) {
    const actualNrOfTodos = await nrofTodosElement.getText();
    
    return expect(parseInt(actualNrOfTodos, 10)).to.be.at.least(nrOfTodos);
}
