'use strict';

const ColorFace = require('../lib/ColorFace');
const Mesh      = require('../lib/Mesh');

describe('Mesh', function() {
    let mesh;
    beforeEach(() => {
        mesh = new Mesh();
    });
    afterEach(() => {
        mesh = undefined;
    });
    it('can be serialized', () => {
        expect(mesh.serialize()).toMatchSnapshot();
    });
    it('can be loaded from serialized string', () => {
        let testMesh = new Mesh(new ColorFace('#333'));
        let meshString = testMesh.serialize();
        mesh = Mesh.loadFromSerial(meshString);
        expect(mesh.serialize()).toEqual(meshString);
    });
    it('can get and set faces', () => {
        expect(mesh.getFaces()).toMatchSnapshot();
        expect(mesh.getFront()).toMatchSnapshot();
        expect(mesh.getBack()).toMatchSnapshot();
        expect(mesh.getLeft()).toMatchSnapshot();
        expect(mesh.getRight()).toMatchSnapshot();
        expect(mesh.getTop()).toMatchSnapshot();
        expect(mesh.getBottom()).toMatchSnapshot();
    });
    it('can do nothing when invalid face data is passed', function() {
        let invalidFaceData = 'Not a valid face';
        expect(mesh.setFront(invalidFaceData)).toBeUndefined();
        expect(mesh.setBack(invalidFaceData)).toBeUndefined();
        expect(mesh.setLeft(invalidFaceData)).toBeUndefined();
        expect(mesh.setRight(invalidFaceData)).toBeUndefined();
        expect(mesh.setTop(invalidFaceData)).toBeUndefined();
        expect(mesh.setBottom(invalidFaceData)).toBeUndefined();
    });
    it('can trigger change event when a face is changed', function() {
        let faces = mesh.getFaces();
        let front = mesh.getFront();
        expect(mesh.setFaces()).toMatchSnapshot();
        mesh.setFaces(faces);
        mesh.setFront(front);
        expect(mesh.getFront()).toEqual(front);
        front.triggerEvent('change');
    });
});
