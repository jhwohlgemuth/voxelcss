'use strict';

const ColorFace = require('../lib/ColorFace');

describe('ColorFace', function() {
    let face;
    beforeEach(() => {
        face = new ColorFace('#333');
    });
    it('can get hex and RGBA color values', function() {
        expect(face.getHex()).toMatchSnapshot();
        expect(face.getColor()).toMatchSnapshot();
    });
});
