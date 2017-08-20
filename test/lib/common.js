'use strict';

const {join}    = require('path');
const puppeteer = require('puppeteer');

let getPath = name => ({path: createFilePath(name)});

module.exports = {
    createFilePath,
    captureScreenshots
};

function createFilePath(name, ext) {
    ext = ext ? ext : '.png';
    var filePath = join(__dirname, 'screenshots', name);
    filePath += ext;
    return filePath;
}
function captureScreenshots(options) {
    let {url, prefix, actions} = options;
    return (async () => {
        const width = 600;
        const height = 650;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        let perform = fn => page.evaluate(fn);
        let screenshot = name => page.screenshot(getPath(name));
        await page.goto(url);
        await page.setViewport({width, height});
        await screenshot(`${prefix}-initial`);
        let i = 1;
        for (let action of actions) {
            await perform(action);
            await screenshot(`${prefix}-${i++}`);
        }
        browser.close();
        return 'Capture Complete';
    })();
}
