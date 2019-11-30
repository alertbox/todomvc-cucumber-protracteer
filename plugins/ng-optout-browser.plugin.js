export async function onPrepare() {
    const { browser } = await import('protractor');

    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
}