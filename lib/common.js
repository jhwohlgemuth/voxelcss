/**
 * @file Common utilities
 * @description Functions for various things such as matrix math
 * @module common
**/
'use strict';

const {cos, sin} = Math;

module.exports = {
    generateRotationMatrix,
    multiplyMatrices
};

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
