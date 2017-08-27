/* global scene */
'use strict';

const {bold, green} = require('chalk');
const {captureScreenshots} = require('./common');

const PORT = 1337;
const url = `http://localhost:${PORT}/test/demo/index.html`;
const prefix = 'snapshot';
const repeat = (val, times) => (Array(times)).fill(val);

const rotateX = () => scene.rotate(Math.PI / 2);
const rotateY = () => scene.rotate(0, Math.PI / 2);
const rotateZ = () => scene.rotate(0, 0, Math.PI / 2);
const panLeft = () => scene.pan(100);
const panRight = () => scene.pan(-1 * 100);
const zoomIn = () => scene.zoom(1 / 2);
const zoomOut = () => scene.zoom(-1 / 2);

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
