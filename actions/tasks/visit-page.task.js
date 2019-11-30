import { browser } from 'protractor';

function visitPage(hash) {
    const path = `${browser.baseUrl}/${hash}/`;
    return browser.driver.get(path);
}

export function visitHomepage() {
    return visitPage('#');
}

export function visitHashActive() {
    return visitPage('#/active');
}

export function visitHashCompleted() {
    return visitPage('#/completed');
}
