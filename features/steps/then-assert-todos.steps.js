import { Then } from 'cucumber';
import { listOf } from '../../actions/helpers/strings';
import { shallSeeTodosOf, shallSeeTodosCountOf } from '../../actions/questions';

Then('he shall see the number of todos should at least be {int}', async function (nrOfTodos) {
    return shallSeeTodosCountOf(nrOfTodos);
});

Then('he shall see {string} in the list', async function (todos) {
    return shallSeeTodosOf(listOf(todos));
});

Then('he shall see both {string} and {string} in the list', async function (oldTodos, newTodos) {
    return shallSeeTodosOf(listOf(`${oldTodos}, ${newTodos}`));
});
