import { Before } from 'cucumber';

Before({ tags: '@skip or @ignore or @deprecated'}, function () { return 'skipped'; });

Before({ tags: '@deprecated'}, function () { console.log('deprecated'); });