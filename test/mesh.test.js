'use strict';

const ColorFace = require('../lib/ColorFace');
const Mesh      = require('../lib/Mesh');

describe('Mesh', () => {
    let mesh;
    beforeEach(() => {
        mesh = new Mesh();
        mesh.trigger = jest.fn();
    });
    afterEach(() => {
        mesh = undefined;
    });
    it('can be serialized', () => {
        expect(mesh.serialize()).toMatchSnapshot();
    });
    it('can be loaded from serialized string', () => {
        const testMesh = new Mesh(new ColorFace('#333'));
        const meshString = testMesh.serialize();
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
    it('can do nothing when invalid face data is passed', () => {
        const invalidFaceData = 'Not a valid face';
        mesh.setFront(invalidFaceData);
        mesh.setBack(invalidFaceData);
        mesh.setLeft(invalidFaceData);
        mesh.setRight(invalidFaceData);
        mesh.setTop(invalidFaceData);
        mesh.setBottom(invalidFaceData);
        expect(mesh.trigger).not.toHaveBeenCalled();
    });
    it('can trigger change event when a face is changed', () => {
        const faces = mesh.getFaces();
        const front = mesh.getFront();
        expect(mesh.setFaces()).toMatchSnapshot();
        mesh.setFaces(faces);
        mesh.setFront(front);
        expect(mesh.getFront()).toEqual(front);
        mesh.trigger = jest.fn();
        const setMethods = [
            'setFront',
            'setBack',
            'setLeft',
            'setRight',
            'setTop',
            'setBottom'
        ];
        const getMethods = [
            'getFront',
            'getBack',
            'getLeft',
            'getRight',
            'getTop',
            'getBottom'
        ];
        setMethods.forEach(method => mesh[method](front.clone()));
        let count = setMethods.length;
        expect(mesh.trigger).toHaveBeenCalledTimes(count);
        getMethods.forEach(method => {
            mesh[method]().trigger('change');
            expect(mesh.trigger).toHaveBeenCalledTimes(++count);
        });
    });
});
