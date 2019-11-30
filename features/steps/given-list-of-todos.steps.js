import { Given } from 'cucumber';
import { listOf } from '../../actions/helpers/strings';
import { visitHomepage, visitHashActive, addNewTodos, trashTodoList } from '../../actions/tasks';

const overrideOptions = { timeout: 60 * 1000 };

Given('that KP has a list of things to do such as {string}', overrideOptions, async function (todos) {
    await visitHashActive();
    await addNewTodos(listOf(todos));
    return visitHomepage();
});

Given('that KP starts a fresh todo list', overrideOptions, async function () {
    await visitHashActive();
    await trashTodoList();
    return visitHomepage();
});
