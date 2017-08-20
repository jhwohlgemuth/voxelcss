'use strict';

const ColorFace = require('../lib/ColorFace');
const Mesh      = require('../lib/Mesh');
const Voxel     = require('../lib/Voxel');
const Scene     = require('../lib/Scene');

const DEFAULT_SIZE = 50;

describe('Voxel', function() {
    let voxel;
    beforeEach(() => {
        voxel = new Voxel();
    });
    it('can be instantiated with dimension default size', () => {
        expect(voxel.getDimension()).toEqual(DEFAULT_SIZE);
    });
    it('can create clones', function() {
        let x = 123;
        let y = 456;
        let z = 789;
        let original = new Voxel([x, y, z]);
        let clone = original.clone();
        expect(clone.getPosition()).toMatchSnapshot();
    });
    it('can get and set mesh', () => {
        let oldmesh = voxel.getMesh();
        let newMesh = new Mesh(new ColorFace('#333'));
        expect(oldmesh).toMatchSnapshot();
        voxel.setMesh(newMesh);
        expect(voxel.getMesh()).toMatchSnapshot();
        voxel.setMesh();
        expect(voxel.getMesh()).toMatchSnapshot();
        voxel.setMesh('Not a mesh');
        expect(voxel.getMesh()).toMatchSnapshot();
    });
    it('can be added to and removed from a scene', () => {
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
    it('can handle left click events', () => {
        const NUMBER_OF_SIDES = 6;
        let leftClick = new window.MouseEvent('click');
        let scene = new Scene();
        let a = new Voxel();
        a.trigger = jest.fn();
        scene.add(a);
        a.getAnimatedElement().childNodes.forEach(face => face.dispatchEvent(leftClick));
        expect(a.trigger).toHaveBeenCalledTimes(NUMBER_OF_SIDES);
        expect(a.trigger.mock.calls).toMatchSnapshot();
    });
    it('can handle right click events', () => {
        let rightClick = new window.MouseEvent('contextmenu');
        let scene = new Scene();
        let a = new Voxel();
        a.trigger = jest.fn();
        scene.add(a);
        a.getAnimatedElement().childNodes[0].dispatchEvent(rightClick);
        expect(a.trigger).toHaveBeenCalledTimes(1);
        expect(a.trigger.mock.calls).toMatchSnapshot();
    });
    it('can handle mesh change events', () => {
        let a = new Voxel();
        let mesh = a.getMesh();
        a.trigger = jest.fn();
        mesh.trigger('change');
        expect(a.trigger.mock.calls).toMatchSnapshot();
    });
    it('can be added to a scene via animUp', () => {
        expect(() => {
            voxel.animUp();
        }).toThrowErrorMatchingSnapshot();
        let scene = {
            add: jest.fn(),
            remove: jest.fn()
        };
        voxel.animUp(scene);
        expect(scene.add).toHaveBeenCalledWith(voxel);
    });
    it('can be added to a scene via animDown', () => {
        expect(() => {
            voxel.animDown();
        }).toThrowErrorMatchingSnapshot();
        let scene = {
            add: jest.fn(),
            remove: jest.fn()
        };
        voxel.animDown(scene);
        expect(scene.add).toHaveBeenCalledWith(voxel);
    });
    it('can get and set dimensions', () => {
        let dim = 42;
        expect(voxel.getDimension()).toEqual(DEFAULT_SIZE);
        voxel.setDimension(dim);
        expect(voxel.getDimension()).toEqual(dim);
        voxel.setDimension('not a number');
        expect(voxel.getDimension()).toEqual(dim);
    });
});
