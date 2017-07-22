'use strict';

const ColorFace   = require('../lib/ColorFace');
const LightSource = require('../lib/LightSource');
const Mesh        = require('../lib/Mesh');
const Voxel       = require('../lib/Voxel');

describe('Voxel', function() {
    let voxel;
    beforeEach(() => {
        voxel = new Voxel();
    });
    it('can be instantiated with dimension 0', () => {
        expect(voxel.getDimension()).toEqual(0);
    });
    it('can create clones', function() {
        let x = 123;
        let y = 456;
        let z = 789;
        let original = new Voxel(x, y, z);
        let clone = original.clone();
        expect(clone.getPosition()).toMatchSnapshot();
    });
    it('can get and set mesh', () => {
        let oldmesh = voxel.getMesh();
        let newMesh = new Mesh(new ColorFace('#333'));
        expect(oldmesh).toMatchSnapshot();
        voxel.setMesh(newMesh);
        expect(voxel.getMesh()).toMatchSnapshot();
    });
    it('can update light sources', () => {
        let mesh = new Mesh(new ColorFace('#333'));
        voxel.updateLightSource(new LightSource());
        voxel.setMesh(mesh);
        expect(voxel.getMesh()).toMatchSnapshot();
    });
    it('can be added to and removed from a scene', function() {
        expect(() => {
            voxel.addToScene();
        }).toThrowErrorMatchingSnapshot();
        let scene = {
            add: jest.fn(),
            remove: jest.fn()
        };
        voxel.addToScene(scene);
        expect(scene.add).toHaveBeenCalledWith(voxel);
        voxel.removeFromScene();
        expect(scene.remove).toHaveBeenCalledWith(voxel);
        voxel.setParentScene();
        voxel.removeFromScene();
        expect(scene.remove).toHaveBeenCalledTimes(1);
    });
    it('can be added to a scene via animUp', function() {
        expect(() => {
            voxel.animUp();
        }).toThrowErrorMatchingSnapshot();
        let scene = {
            add: jest.fn(),
            remove: jest.fn()
        };
        voxel.addToScene(scene);
        expect(scene.add).toHaveBeenCalledWith(voxel);
    });
    it('can be added to a scene via animDown', function() {
        expect(() => {
            voxel.animUp();
        }).toThrowErrorMatchingSnapshot();
        let scene = {
            add: jest.fn(),
            remove: jest.fn()
        };
        voxel.addToScene(scene);
        expect(scene.add).toHaveBeenCalledWith(voxel);
    });
    it('can get and set dimensions', function() {
        let dim = 42;
        expect(voxel.getDimension()).toEqual(0);
        voxel.setDimension(dim);
        expect(voxel.getDimension()).toEqual(dim);
        voxel.setDimension('not a number');
        expect(voxel.getDimension()).toEqual(dim);
    });
});
