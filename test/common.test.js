'use strict';

const {
    hexToRgb,
    rgbToHex,
    multiplyMatrices,
    generateRotationMatrix
} = require('../lib/common');
const {PI} = Math;

describe('Common utilities', function() {
    it('can convert color from HEX to RGB', function() {
        expect(hexToRgb('#333')).toMatchSnapshot();
        expect(hexToRgb('#333333')).toMatchSnapshot();
        expect(hexToRgb('333')).toMatchSnapshot();
        expect(hexToRgb('#f00ba2')).toMatchSnapshot();
        expect(hexToRgb('#F00BA2')).toMatchSnapshot();
        expect(hexToRgb('Not a valid hex string')).toBeNull();
    });
    it('can convert RGB to HEX', function() {/* eslint-disable no-magic-numbers */
        expect(rgbToHex(51, 51, 51)).toMatchSnapshot();
        expect(rgbToHex(255, 51, 153)).toMatchSnapshot();
    });/* eslint-enable no-magic-numbers */
    it('can perform matrix multiplication (3x3)', function() {
        let x = [1, 0, 0];
        let y = [0, 1, 0];
        let z = [0, 0, 1];
        let a = [x, y, z];
        let b = [z, y, x];
        let c = [z, x, y];
        expect(multiplyMatrices(a, b)).toMatchSnapshot();
        expect(multiplyMatrices(a, c)).toMatchSnapshot();
        expect(multiplyMatrices(b, c)).toMatchSnapshot();
    });
    it('can generate rotation matrices', function() {
        expect(generateRotationMatrix(0, 0, 0)).toMatchSnapshot();
        expect(generateRotationMatrix(PI, PI, PI)).toMatchSnapshot();
        expect(generateRotationMatrix(PI, 0, 0)).toMatchSnapshot();
        expect(generateRotationMatrix(0, PI, 0)).toMatchSnapshot();
        expect(generateRotationMatrix(0, 0, PI)).toMatchSnapshot();
        expect(generateRotationMatrix(-PI, -PI, -PI)).toMatchSnapshot();
    });

});
