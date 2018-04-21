/**
 * @module common
 * @description Functions for various things such as matrix math
**/

const {cos, pow, sin, sqrt} = Math;

const BASE_16 = 16;
const SHIFT_KEYCODE = 16;

const isNumber = val => (typeof val === 'number');
const isUndefined = val => (val === undefined);
const isShiftKey = e => (e.keyCode === SHIFT_KEYCODE || e.which === SHIFT_KEYCODE);
const squared = val => pow(val, 2);

module.exports = {
    findKeyWithValue,
    generateRotationMatrix,
    hexToRgb,
    isNumber,
    isShiftKey,
    isUndefined,
    mapValues,
    not,
    multiplyMatrices,
    rgbToHex,
    squared,
    constant: val => () => val,
    getDistance: (a, b) => sqrt(squared(a) + squared(b)),
    identity: val => val
};
function findKeyWithValue(dict, value) {
    const keys = Object.keys(dict);
    const index = keys
        .map((key, index) => ((dict[key] === value) && index))
        .find(isNumber);
    return keys[index];
}
function mapValues(obj, fn) {
    return Object.keys(obj)
        .map(key => ({[key]: fn(obj[key])}))
        .reduce((o, item) => Object.assign(o, item), {});
}
function not(fn) {
    return function(...args) {
        return !fn(...args);
    };
}
/**
 * @functino hexToRgb
 * @param {string} hex Hex value to be converted to RGB
 * @returns {?object} {r, g, b}
 * @see https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139
**/
function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], BASE_16),
        g: parseInt(result[2], BASE_16),
        b: parseInt(result[3], BASE_16)
    } : null;
}
/**
 * @function rgbToHex
 * @param {object} color RGB color data
 * @param {number} color.r Red value
 * @param {number} color.g Green value
 * @param {number} color.b Blue value
 * @returns {string} Hex string (no #)
 * @see https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139
**/
function rgbToHex(color) {/* eslint-disable no-magic-numbers */
    const {r, g, b} = color;
    return `${ ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}/* eslint-enable no-magic-numbers */
/**
 * @function generateRotationMatrix
 * @description Generate rotation matrix for rotation with given x, y, and z components
 * @param {number} rotX x-component of rotation
 * @param {number} rotY y-component of rotation
 * @param {number} rotZ z-component of rotation
 * @returns {array[]} 3x3 array (nested array)
**/
function generateRotationMatrix(rotX, rotY, rotZ) {
    const xRotation = [
        [1, 0, 0],
        [0, cos(rotX), -sin(rotX)],
        [0, sin(rotX), cos(rotX)]
    ];
    const yRotation = [
        [cos(rotY), 0, sin(rotY)],
        [0, 1, 0],
        [-sin(rotY), 0, cos(rotY)]
    ];
    const zRotation = [
        [cos(rotZ), -sin(rotZ), 0],
        [sin(rotZ), cos(rotZ), 0],
        [0, 0, 1]
    ];
    return multiplyMatrices(multiplyMatrices(zRotation, yRotation), xRotation);
}
/**
 * @function multiplyMatrices
 * @description Matrix multiplication
 * @param {array[]} a Matrix A
 * @param {array[]} b Matric B
 * @returns {array[]} AxB
**/
function multiplyMatrices(a, b) {
    const aNumRows = a.length;
    const aNumCols = a[0].length;
    const bNumCols = b[0].length;
    const m = new Array(aNumRows); // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) { // eslint-disable-line no-var
        m[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) { // eslint-disable-line no-var
            m[r][c] = 0; // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) { // eslint-disable-line no-var
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }
    return m;
}
