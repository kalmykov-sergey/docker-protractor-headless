// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
    allScriptsTimeout: 30 * 1000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        './features/*.feature'
    ],
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: './features/step_definitions/*.steps.ts',
        tags: '~@Ignore'
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                "--headless", "--disable-gpu", "--window-size=1920,1080"
            ]
        }
    },
    directConnect: true,
    baseUrl: 'https://qa.your-site.com',
    ignoreUncaughtExceptions: true
};
