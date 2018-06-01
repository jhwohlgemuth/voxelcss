'use strict';

const {
    constant,
    findKeyWithValue,
    generateRotationMatrix,
    hexToRgb,
    identity,
    isNumber,
    mapValues,
    multiplyMatrices,
    not,
    rgbToHex
} = require('../lib/common');
const {PI} = Math;

describe('Common utilities', () => {
    const o = {
        a: 'A',
        b: 'B',
        c: 'C'
    };
    it('can find keys with value equal to passed value', () => {
        expect(findKeyWithValue(o, 'A')).toEqual('a');
        expect(findKeyWithValue(o, 'C')).toEqual('c');
        expect(findKeyWithValue(o, 'not in o')).toBeUndefined();
    });
    it('can negate functions', () => {
        const truthy = constant(true);
        const isNotNumber = not(isNumber);
        expect(truthy()).toEqual(true);
        expect(not(truthy)()).toEqual(false);
        expect(isNumber(3)).toEqual(true);
        expect(isNotNumber(3)).toEqual(false);
        expect(isNotNumber(1000)).toEqual(false);
        expect(isNotNumber('not a number')).toEqual(true);
    });
    it('can map over object values', () => {
        expect(mapValues(o, constant(true))).toMatchSnapshot();
        expect(mapValues(o, identity)).toMatchSnapshot();
    });
    it('can convert color from HEX to RGB', () => {
        expect(hexToRgb('#333')).toMatchSnapshot();
        expect(hexToRgb('#333333')).toMatchSnapshot();
        expect(hexToRgb('333')).toMatchSnapshot();
        expect(hexToRgb('#f00ba2')).toMatchSnapshot();
        expect(hexToRgb('#F00BA2')).toMatchSnapshot();
        expect(hexToRgb('Not a valid hex string')).toBeNull();
    });
    it('can convert RGB to HEX', () => {/* eslint-disable no-magic-numbers */
        expect(rgbToHex({r: 51, g: 51, b: 51})).toMatchSnapshot();
        expect(rgbToHex({r: 255, g: 51, b: 153})).toMatchSnapshot();
    });/* eslint-enable no-magic-numbers */
    it('can perform matrix multiplication (3x3)', () => {
        const x = [1, 0, 0];
        const y = [0, 1, 0];
        const z = [0, 0, 1];
        const a = [x, y, z];
        const b = [z, y, x];
        const c = [z, x, y];
        expect(multiplyMatrices(a, b)).toMatchSnapshot();
        expect(multiplyMatrices(a, c)).toMatchSnapshot();
        expect(multiplyMatrices(b, c)).toMatchSnapshot();
    });
    it('can generate rotation matrices', () => {
        expect(generateRotationMatrix(0, 0, 0)).toMatchSnapshot();
        expect(generateRotationMatrix(PI, PI, PI)).toMatchSnapshot();
        expect(generateRotationMatrix(PI, 0, 0)).toMatchSnapshot();
        expect(generateRotationMatrix(0, PI, 0)).toMatchSnapshot();
        expect(generateRotationMatrix(0, 0, PI)).toMatchSnapshot();
        expect(generateRotationMatrix(-PI, -PI, -PI)).toMatchSnapshot();
    });

});
