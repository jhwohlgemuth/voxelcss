'use strict';

'use strict';

const {join} = require('path');
const nightmare = require('nightmare');
// nightmare.Promise = require('bluebird');

module.exports = {
    createFilePath,
    screenshotPlugin,
    captureScreenshots
};

function createFilePath(name, ext) {
    ext = ext ? ext : '.png';
    var filePath = join(__dirname, 'screenshots', name);
    filePath += ext;
    return filePath;
}
function screenshotPlugin(name, fn, element) {
    fn = fn || (() => {});
    element = element ? element : 100;
    return function(nightmare) {
        nightmare
            .wait(element)
            .evaluate(fn)
            .screenshot(createFilePath(name));
    };
}
function captureScreenshots(url, name) {
    let rotateX = () => scene.rotate(Math.PI / 2);
    let rotateY = () => scene.rotate(0, Math.PI / 2);
    let rotateZ = () => scene.rotate(0, 0, Math.PI / 2);
    let panLeft = () => scene.pan(100);
    let panRight = () => scene.pan(-100);
    let zoomIn = () => scene.zoom(0.5);
    let zoomOut = () => scene.zoom(-0.5);
    let show = false;
    let openDevTools = {detach: true};
    let SCREEN_WIDTH = 600;
    let SCREEN_HEIGHT = 670;
    let i = 1;
    let browser = nightmare({show, openDevTools})
        .goto(url)
        .viewport(SCREEN_WIDTH, SCREEN_HEIGHT)
        .use(screenshotPlugin(name + '_initial'));
    return browser
        .use(screenshotPlugin(`${name}-${i++}`, rotateX))
        .use(screenshotPlugin(`${name}-${i++}`, rotateX))
        .use(screenshotPlugin(`${name}-${i++}`, rotateX))
        .use(screenshotPlugin(`${name}-${i++}`, rotateX))// initial
        .use(screenshotPlugin(`${name}-${i++}`, rotateY))
        .use(screenshotPlugin(`${name}-${i++}`, rotateY))
        .use(screenshotPlugin(`${name}-${i++}`, rotateY))
        .use(screenshotPlugin(`${name}-${i++}`, rotateY))// initial
        .use(screenshotPlugin(`${name}-${i++}`, rotateZ))
        .use(screenshotPlugin(`${name}-${i++}`, rotateZ))
        .use(screenshotPlugin(`${name}-${i++}`, rotateZ))
        .use(screenshotPlugin(`${name}-${i++}`, rotateZ))// initial
        .use(screenshotPlugin(`${name}-${i++}`, panLeft))
        .use(screenshotPlugin(`${name}-${i++}`, panRight))// initial
        .use(screenshotPlugin(`${name}-${i++}`, panRight))
        .use(screenshotPlugin(`${name}-${i++}`, panLeft))// initial
        .use(screenshotPlugin(`${name}-${i++}`, zoomIn))
        .use(screenshotPlugin(`${name}-${i++}`, zoomOut))// initial
        .use(screenshotPlugin(`${name}-${i++}`, zoomOut))
        .use(screenshotPlugin(`${name}-${i++}`, zoomIn))// initial
        .end();
}
