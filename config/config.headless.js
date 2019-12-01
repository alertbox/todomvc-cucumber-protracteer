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

        // capabilities: {},

        multiCapabilities: [{
            browserName: 'chrome',
            shardTestFiles: true,
            maxInstances: 2,
            chromeOptions: {
                useAutomationExtension: false,
                args: ['--headless', '--disable-gpu', '--window-size=1280,1024', '--no-sandbox', ],
                binary: puppeteer.executablePath()
            },
            metadata: {
                app: { name: project.name, version: project.version },
                platform: { name: 'osx', version: 'Sierra' }
            },
        }, ],

        plugins: [
            { path: '../plugins/chai-as-promised.plugin.js' }, 
            { path: '../plugins/ng-optout-browser.plugin.js' },
            {
                package: 'protractor-multiple-cucumber-html-reporter-plugin',
                options: {
                    automaticallyGenerateReport: true,
                    displayDuration: true,
                    durationInMS: true,
                    pageTitle: project.name,
                    reportName: project.name,
                    removeExistingJsonReportFile: true
                }
            },
        ],

        beforeLaunch: function () {},

        onPrepare: function () {},

        onCleanUp: function () {},

        onComplete: function () {}
    },
};
