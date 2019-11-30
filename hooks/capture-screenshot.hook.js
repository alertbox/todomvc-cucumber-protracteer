import { browser } from 'protractor';
import { After, Status } from 'cucumber';

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenshot = await browser.driver.takeScreenshot();
        this.attach(screenshot, 'image/png');
    } 
});
