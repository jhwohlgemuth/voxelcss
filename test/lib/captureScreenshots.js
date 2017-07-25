'use strict';

const {bold, green} = require('chalk');
const {captureScreenshots} = require('./common');

let PORT = 1337;
let URL = `http://localhost:${PORT}/test/demo/index.html`;
let prefix = 'snapshot';

captureScreenshots(URL, prefix).then(() => {/* eslint-disable no-console */
    console.log(bold(green('✔ ') + bold('Capture complete')));
});/* eslint-enable no-console */
