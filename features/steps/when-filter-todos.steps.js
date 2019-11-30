import { When } from 'cucumber';
import { visitHomepage, visitHashActive } from '../../actions/tasks';

When('he looks at pending things to do', async function () {
    return visitHashActive();
});

When('he looks at all things to do', async function () {
    return visitHomepage();
});
