'use strict';

const {join}    = require('path');
const puppeteer = require('puppeteer');

const voxel = i => `.voxelcss-cube:nth-of-type(${i}) .voxelcss-face.`;
const getPath = name => ({path: createFilePath(name)});

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
        const perform = fn => page.evaluate(fn);
        const screenshot = name => page.screenshot(getPath(name));
        const mouseout = () => page.mouse.move(0, 0);
        const clickVoxel = async (i, side, options) => {
            await page.click(`${voxel(i)}${side}`, options);
            await mouseout();
        };
        await page.goto(url);
        await page.setViewport({width, height});
        await screenshot(`${prefix}-initial`);
        let i = 1;
        for (let action of actions) {
            await perform(action);
            await screenshot(`${prefix}-${i++}`);
        }
        const index = 24;// voxel at top corner of cube, closest to viewer
        await clickVoxel(index, 'top');
        await clickVoxel(index, 'left');
        await clickVoxel(index, 'front');
        await screenshot(`${prefix}-${i++}`);
        await page.hover(`${voxel(24)}top`);
        await screenshot(`${prefix}-${i++}`);
        await mouseout();
        await clickVoxel(24, 'top', {button: 'right'});
        await mouseout();
        await screenshot(`${prefix}-${i++}`);
        browser.close();
        return 'Capture Complete';
    })();
}
