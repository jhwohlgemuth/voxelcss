'use strict';

const ColorFace = require('../lib/ColorFace');
const ImageFace = require('../lib/ImageFace');

describe('ColorFace', function() {
    let face;
    beforeEach(() => {
        face = new ColorFace('#333');
    });
    it('can be created without color parameter', () => {
        face = new ColorFace();
        expect(face.getColor()).toMatchSnapshot();
    });
    it('can get hex and RGBA color values', () => {
        expect(face.getHex()).toMatchSnapshot();
        expect(face.getColor()).toMatchSnapshot();
    });
    it('can be cloned', () => {
        let newFace = face.clone();
        expect(newFace.getColor()).toMatchSnapshot();
    });
});
describe('ImageFace', function() {
    let face;
    beforeEach(() => {
        face = new ImageFace();
    });
    it('can be created with default image', function() {
        expect(face.getSource()).toMatchSnapshot();
    });
    it('can be cloned', function() {
        let newFace = face.clone();
        expect(newFace.getSource()).toMatchSnapshot();
    });
});
