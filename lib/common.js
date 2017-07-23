/**
 * @file Common utilities
 * @description Functions for various things such as matrix math
 * @module common
**/
'use strict';

const {cos, sin} = Math;

const BASE_16 = 16;

module.exports = {
    hexToRgb,
    rgbToHex,
    generateRotationMatrix,
    multiplyMatrices
};

function hexToRgb(hex) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b;
    });
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], BASE_16),
        g: parseInt(result[2], BASE_16),
        b: parseInt(result[3], BASE_16)
    } : null;
}
function rgbToHex(r, g, b) {/* eslint-disable no-magic-numbers */
    return '' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}/* eslint-enable no-magic-numbers */
function generateRotationMatrix(rotX, rotY, rotZ) {
    var xRotation = [
        [1, 0, 0],
        [0, cos(rotX), -sin(rotX)],
        [0, sin(rotX), cos(rotX)]
    ];
    var yRotation = [
        [cos(rotY), 0, sin(rotY)],
        [0, 1, 0],
        [-sin(rotY), 0, cos(rotY)]
    ];
    var zRotation = [
        [cos(rotZ), -sin(rotZ), 0],
        [sin(rotZ), cos(rotZ), 0],
        [0, 0, 1]
    ];
    return multiplyMatrices(multiplyMatrices(zRotation, yRotation), xRotation);
}
function multiplyMatrices(a, b) {
    var aNumRows = a.length;
    var aNumCols = a[0].length;
    var bNumCols = b[0].length;
    var m = new Array(aNumRows); // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0; // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }
    return m;
}
