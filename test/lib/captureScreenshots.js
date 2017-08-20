/* global scene */
'use strict';

const {bold, green} = require('chalk');
const {captureScreenshots} = require('./common');

const PORT = 1337;
let url = `http://localhost:${PORT}/test/demo/index.html`;
let prefix = 'snapshot';

let repeat = (val, times) => (Array(times)).fill(val);

let rotateX = () => scene.rotate(Math.PI / 2);
let rotateY = () => scene.rotate(0, Math.PI / 2);
let rotateZ = () => scene.rotate(0, 0, Math.PI / 2);
let panLeft = () => scene.pan(100);
let panRight = () => scene.pan(-1 * 100);
let zoomIn = () => scene.zoom(1 / 2);
let zoomOut = () => scene.zoom(-1 / 2);

let actions = [].concat(/* eslint-disable no-magic-numbers */
    repeat(rotateX, 4),
    repeat(rotateY, 4),
    repeat(rotateZ, 4),
    [panLeft, panRight],
    [panRight, panLeft],
    [zoomIn, zoomOut],
    [zoomOut, zoomIn]
);/* eslint-enable no-magic-numbers */
/* eslint-disable no-console */
captureScreenshots({url, prefix, actions}).then(msg => console.log(bold(green('✔ ') + bold(msg))));
/* eslint-enable no-console */
