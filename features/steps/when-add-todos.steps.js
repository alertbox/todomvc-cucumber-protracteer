import { When } from 'cucumber';
import { listOf } from '../../actions/helpers/strings';
import { addNewTodos } from '../../actions/tasks';

When('he adds {string} to the list', async function (todos) {
    return addNewTodos(listOf(todos));
});
