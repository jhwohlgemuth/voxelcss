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
    it('will only update valid RGBA values', function() {
        expect(face.getColor()).toMatchSnapshot();
        expect(() => {
            face.setColor({r: 1, g: 'not valid', b: 3});
        }).toThrowErrorMatchingSnapshot();
        expect(face.getColor()).toMatchSnapshot();
        face.setColor({r: 1, g: 2, b: 3, a: 'not valid'});
        expect(face.getColor()).toMatchSnapshot();
    });
    it('can be cloned', () => {
        const newFace = face.clone();
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
        const newFace = face.clone();
        expect(newFace.getSource()).toMatchSnapshot();
    });
});
