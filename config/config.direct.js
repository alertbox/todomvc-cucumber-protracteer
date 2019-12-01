require('@babel/register');
const project = require('../package.json');
const puppeteer = require('puppeteer');

exports = module.exports = {
    config: {
        SELENIUM_PROMISE_MANAGER: false,    // Using native async/await
        directConnect: true,                // Bypass Selenium Server

        baseUrl: 'http://todomvc.com/examples/vanillajs',
        getPageTimeout: 60000,              // In Milliseconds, Default 5000
        allScriptsTimeout: 60000,           // In Milliseconds

        framework: 'custom',
        frameworkPath: require.resolve('protractor-cucumber-framework'),

        specs: ['../features/**/*.feature', ],

        restartBrowserBetweenTests: false,
        ignoreUncaughtExceptions: true,

        cucumberOpts: {
            requireModule: [],
            require: ['../hooks/**/*.hook.js', '../features/**/*.steps.js', ],
            format: 'json:./public/results.json',
            tags: ['(@sanity or @fast) and ~@skip', ],
            strict: true,
            dryRun: false,

            // compiler: ['js:@babel/register', ],
        },

        capabilities: {
            browserName: 'chrome',
            shardTestFiles: true,
            chromeOptions: {
                useAutomationExtension: false,
                binary: puppeteer.executablePath()
            },
            metadata: {
                app: { name: project.name, version: project.version },
                platform: { name: 'osx', version: 'Sierra' }
            },
        },

        plugins: [
            { path: '../plugins/chai-as-promised.plugin.js' }, 
            { path: '../plugins/ng-optout-browser.plugin.js' },
        ],

        beforeLaunch: function () { require('@babel/register'); },

        onPrepare: function () {},

        onCleanUp: function () {},

        onComplete: function () {}
    },
};
