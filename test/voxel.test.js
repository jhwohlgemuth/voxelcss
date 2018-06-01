'use strict';

const ColorFace = require('../lib/ColorFace');
const Mesh      = require('../lib/Mesh');
const Voxel     = require('../lib/Voxel');
const Scene     = require('../lib/Scene');

const DEFAULT_SIZE = 50;

jest.useFakeTimers();

describe('Voxel', () => {
    let voxel;
    beforeEach(() => {
        voxel = new Voxel();
    });
    it('can be instantiated with dimension default size', () => {
        expect(voxel.getDimension()).toEqual(DEFAULT_SIZE);
    });
    it('can create clones', () => {
        const x = 123;
        const y = 456;
        const z = 789;
        const original = new Voxel([x, y, z]);
        const clone = original.clone();
        expect(clone.getPosition()).toMatchSnapshot();
    });
    it('can get and set mesh', () => {
        const oldmesh = voxel.getMesh();
        const newMesh = new Mesh(new ColorFace('#333'));
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
        const scene = {
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
        const leftClick = new window.MouseEvent('click');
        const scene = new Scene();
        const a = new Voxel();
        a.trigger = jest.fn();
        scene.add(a);
        a.getAnimatedElement().childNodes.forEach(face => face.dispatchEvent(leftClick));
        expect(a.trigger).toHaveBeenCalledTimes(NUMBER_OF_SIDES);
        expect(a.trigger.mock.calls).toMatchSnapshot();
    });
    it('can handle right click events', () => {
        const rightClick = new window.MouseEvent('contextmenu');
        const scene = new Scene();
        const a = new Voxel();
        a.trigger = jest.fn();
        scene.add(a);
        a.getAnimatedElement().childNodes[0].dispatchEvent(rightClick);
        expect(a.trigger).toHaveBeenCalledTimes(1);
        expect(a.trigger.mock.calls).toMatchSnapshot();
    });
    it('can handle short and long touch events', () => {
        const LONG_PRESS_DURATION = 250;
        const touches = [{
            pageX: 0,
            pageY: 0
        }];
        const touchstart = new window.UIEvent('touchstart');
        const touchend = new window.UIEvent('touchend');
        touchstart.touches = touches;
        const a = new Voxel();
        a.trigger = jest.fn();
        const scene = new Scene();
        a.addToScene(scene);
        const [wrapper] = a.getAnimatedElement().childNodes;
        wrapper.dispatchEvent(touchstart);
        wrapper.dispatchEvent(touchend);
        expect(a.trigger.mock.calls).toMatchSnapshot();
        wrapper.dispatchEvent(touchstart);
        jest.runTimersToTime(LONG_PRESS_DURATION + 1);
        expect(a.trigger.mock.calls).toMatchSnapshot();
    });
    it('can handle mesh change events', () => {
        const a = new Voxel();
        const mesh = a.getMesh();
        a.trigger = jest.fn();
        mesh.trigger('change');
        expect(a.trigger.mock.calls).toMatchSnapshot();
    });
    it('can be added to a scene via animUp', () => {
        expect(() => {
            voxel.animUp();
        }).toThrowErrorMatchingSnapshot();
        const scene = {
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
        const scene = {
            add: jest.fn(),
            remove: jest.fn()
        };
        voxel.animDown(scene);
        expect(scene.add).toHaveBeenCalledWith(voxel);
    });
    it('can get and set dimensions', () => {
        const dim = 42;
        expect(voxel.getDimension()).toEqual(DEFAULT_SIZE);
        voxel.setDimension(dim);
        expect(voxel.getDimension()).toEqual(dim);
        voxel.setDimension('not a number');
        expect(voxel.getDimension()).toEqual(dim);
    });
});
