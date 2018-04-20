'use strict';

const {mapValues} = require('../lib/common');
const LightSource = require('../lib/LightSource');
const Voxel       = require('../lib/Voxel');
const Scene       = require('../lib/Scene');

const INITIAL_ZOOM = 1;
const INITIAL_PAN = {x: 0, y: 0, z: 0};
const INITIAL_ROTATION = {x: 0, y: 0, z: 0};
const SHIFT_KEYCODE = 16;

const keyCode = SHIFT_KEYCODE;
const which = SHIFT_KEYCODE;
let pressShift = new window.KeyboardEvent('keydown', {keyCode});
let releaseShift = new window.KeyboardEvent('keyup', {keyCode});

describe('Scene', function() {
    let scene;
    const touchend = new window.UIEvent('touchend');
    beforeEach(() => {
        scene = new Scene();
    });
    afterEach(function() {
        scene.unbind();
    });
    it('can enable and disable pan', () => {
        expect(scene.getPan()).toMatchSnapshot();
        expect(scene.canPan()).toBeTruthy();
        [1, 2].forEach(() => {
            scene.disablePan();
            expect(scene.canPan()).not.toBeTruthy();
        });
        [1, 2].forEach(() => {
            scene.enablePan();
            expect(scene.canPan()).toBeTruthy();
        });
    });
    it('can enable and disable zoom', () => {
        expect(scene.getZoom()).toMatchSnapshot();
        expect(scene.canZoom()).toBeTruthy();
        [1, 2].forEach(() => {
            scene.disableZoom();
            expect(scene.canZoom()).not.toBeTruthy();
        });
        [1, 2].forEach(() => {
            scene.enableZoom();
            expect(scene.canZoom()).toBeTruthy();
        });
    });
    it('can enable and disable rotation', () => {
        expect(scene.canRotate()).toBeTruthy();
        [1, 2].forEach(() => {
            scene.disableRotate();
            expect(scene.canRotate()).not.toBeTruthy();
        });
        [1, 2].forEach(() => {
            scene.enableRotate();
            expect(scene.canRotate()).toBeTruthy();
        });
    });
    it('can attach and detach', () => {
        const elem = {appendChild: () => {}};
        expect(scene.isAttached()).toBeFalsy();
        scene.attach(elem);
        expect(scene.isAttached()).toBeTruthy();
        expect(scene.getParentElement()).toEqual(elem);
        scene.detach();
        expect(scene.isAttached()).toBeFalsy();
    });
    it('can throw error when trying to attach when already attached', () => {
        const elem = {appendChild: () => {}};
        expect(scene.isAttached()).toBeFalsy();
        scene.attach(elem);
        expect(scene.isAttached()).toBeTruthy();
        expect(scene.getParentElement()).toEqual(elem);
        expect(() => {
            scene.attach(elem);
        }).toThrowErrorMatchingSnapshot();
    });
    it('can throw error when trying to detach when already detached', () => {
        expect(scene.isAttached()).toBeFalsy();
        expect(() => {
            scene.detach();
        }).toThrowErrorMatchingSnapshot();
    });
    it('can rotate', () => {
        const NOT_A_NUMBER = 'Not a number';
        expect(scene.getRotation()).toEqual(INITIAL_ROTATION);
        scene.rotate(1, 0, 1);
        expect(scene.getRotation()).toEqual({x: 1, y: 0, z: 1});
        scene.rotate();
        expect(scene.getRotation()).toEqual({x: 1, y: 0, z: 1});
        scene.rotate(NOT_A_NUMBER, NOT_A_NUMBER, NOT_A_NUMBER);
        expect(scene.getRotation()).toEqual({x: 1, y: 0, z: 1});
        scene.setRotation(0, 0, 0);
        expect(scene.getRotation()).toEqual(INITIAL_ROTATION);
        scene.setRotation();
        expect(scene.getRotation()).toEqual(INITIAL_ROTATION);
        scene.setRotation(NOT_A_NUMBER, NOT_A_NUMBER, NOT_A_NUMBER);
        expect(scene.getRotation()).toEqual(INITIAL_ROTATION);
    });
    it('can set rotation', () => {

    });
    it('can apply pan', () => {
        const x = 1;
        const y = 2;
        const z = 3;
        const voxel = new Voxel([0, 0, 0], 10);
        scene.add(voxel);
        expect(scene.getPan()).toEqual(INITIAL_PAN);
        scene.setPan();
        expect(scene.getPan()).toEqual(INITIAL_PAN);
        scene.setPan(x, y, z);
        expect(scene.getPan()).toMatchSnapshot();
    });
    it('can get and set pan', () => {
        const voxel = new Voxel([0, 0, 0], 10);
        scene.add(voxel);
        expect(scene.getPan()).toEqual(INITIAL_PAN);
        scene.pan();
        scene.pan(1, 10, 1000);
        expect(scene.getPan()).toMatchSnapshot();
    });
    it('can get and set zoom', () => {
        expect(scene.getZoom()).toEqual(INITIAL_ZOOM);
        scene.setZoom();
        scene.setZoom('Not a number');
        scene.setZoom(10);
        expect(scene.getZoom()).toEqual(10);
        scene.zoom(1000);
        expect(scene.getZoom()).toMatchSnapshot();
        scene.zoom();
        expect(scene.getZoom()).toMatchSnapshot();
        scene.zoom('Not a number');
        expect(scene.getZoom()).toMatchSnapshot();
    });
    it('can add and remove light sources', () => {
        const dim = 300;
        const position = [dim, dim, dim];
        const distance = 750;
        const dark = 0.2;
        const light = 1;
        const lightSource = new LightSource(position, distance, dark, light);
        expect(scene.getLightSources()).toEqual([]);
        scene.addLightSource(lightSource);
        expect(scene.getLightSources()).not.toEqual([]);
        expect(scene.getLightSources()).toMatchSnapshot();
        scene.removeLightSource(lightSource);
        expect(scene.getLightSources()).toEqual([]);
    });
    it('can add and remove voxels', () => {
        const voxel = new Voxel([10, 10, 10], 10);
        const dim = 300;
        const position = [dim, dim, dim];
        const distance = 750;
        const dark = 0.2;
        const light = 1;
        const lightSource = new LightSource(position, distance, dark, light);
        expect(scene.getVoxels()).toEqual([]);
        scene.add(voxel);
        scene.addLightSource(lightSource);
        expect(scene.getVoxels()).not.toEqual([]);
        expect(scene.getVoxels()).toMatchSnapshot();
        scene.remove(voxel);
        expect(scene.getVoxels()).toEqual([]);
    });
    it('can respond to pressing and releasing SHIFT', () => {
        expect(scene.getInteractionState()).toMatchSnapshot();
        expect(scene.getInteractionState('shiftDown')).toBeFalsy();
        window.dispatchEvent(pressShift);
        expect(scene.getInteractionState('shiftDown')).toBeTruthy();
        window.dispatchEvent(releaseShift);
        expect(scene.getInteractionState('shiftDown')).toBeFalsy();
        pressShift = new window.KeyboardEvent('keydown', {which});
        releaseShift = new window.KeyboardEvent('keyup', {which});
        expect(scene.getInteractionState('shiftDown')).toBeFalsy();
        window.dispatchEvent(pressShift);
        expect(scene.getInteractionState('shiftDown')).toBeTruthy();
        window.dispatchEvent(releaseShift);
        expect(scene.getInteractionState('shiftDown')).toBeFalsy();
    });
    it('can respond to mouse interaction', () => {
        //
        // Mouse scroll --> zoom
        //
        const mousewheel = new window.MouseEvent('mousewheel');
        const wheel = new window.MouseEvent('wheel');
        mousewheel.deltaY = 1000;
        wheel.deltaY = 1000;
        expect(scene.getZoom()).toEqual(1);
        scene.getElement().dispatchEvent(mousewheel);
        scene.getElement().dispatchEvent(wheel);
        expect(scene.getZoom()).toMatchSnapshot();
        scene.disableZoom();
        scene.getElement().dispatchEvent(mousewheel);
        scene.getElement().dispatchEvent(wheel);
        expect(scene.getZoom()).toMatchSnapshot();
        const x = 1000;
        const y = 1000;
        const d = 100;
        const mousedown = new window.MouseEvent('mousedown');
        const mouseup = new window.MouseEvent('mouseup');
        Object.assign(mousedown, {x, y});
        Object.assign(mouseup, {x, y});
        expect(scene.getInteractionState()).toMatchSnapshot();
        scene.getElement().dispatchEvent(mousedown);
        expect(scene.getInteractionState()).toMatchSnapshot();
        window.dispatchEvent(mouseup);
        expect(scene.getInteractionState()).toMatchSnapshot();
        //
        // Mouse down & Mouse move --> rotate
        //
        const mousemove = new window.MouseEvent('mousemove');
        expect(scene.getPan()).toEqual(INITIAL_PAN);
        expect(scene.getRotation()).toMatchSnapshot();
        scene.getElement().dispatchEvent(mousedown);
        expect(scene.getInteractionState()).toMatchSnapshot();
        Object.assign(mousemove, {x: x + d, y: y + d});
        window.dispatchEvent(mousemove);
        expect(scene.getPan()).toEqual(INITIAL_PAN);
        expect(scene.getRotation()).toMatchSnapshot();
        //
        // Mouse down (SHIFT) & Mouse move --> pan
        //
        window.dispatchEvent(pressShift);
        expect(scene.getPan()).toMatchSnapshot();
        expect(scene.getRotation()).toMatchSnapshot();
        scene.getElement().dispatchEvent(mousedown);
        expect(scene.getInteractionState()).toMatchSnapshot();
        Object.assign(mousemove, {x: x + d, y: y + d});
        window.dispatchEvent(mousemove);
        expect(scene.getPan()).toMatchSnapshot();
        expect(scene.getRotation()).toMatchSnapshot();
    });
    it('can rotate scene with one-finger drag', () => {
        const touches = [{
            pageX: 0,
            pageY: 0
        }];
        const touchstart = new window.UIEvent('touchstart');
        const touchmove = new window.UIEvent('touchmove');
        touchstart.touches = touches;
        touchmove.touches = touches.map(touch => mapValues(touch, val => val + 100));
        expect(scene.getPan()).toMatchSnapshot();
        expect(scene.getRotation()).toMatchSnapshot();
        scene.getElement().dispatchEvent(touchstart);
        window.dispatchEvent(touchmove);
        expect(scene.getPan()).toMatchSnapshot();
        expect(scene.getRotation()).toMatchSnapshot();
        window.dispatchEvent(touchend);
    });
    it('can zoom scene with two-finger pinch', () => {
        const touchArrayStart = [
            {pageX: 0, pageY: 0},
            {pageX: 100, pageY: 100}
        ];
        const touchArrayEnd = [
            {pageX: 0, pageY: 0},
            {pageX: 10, pageY: 10}
        ];
        const touches = type => {
            const arr = (type === 'start') ? touchArrayStart : touchArrayEnd;
            return {
                0: arr[0],
                1: arr[1],
                length: 2,
                item: i => ({touches: [arr[i]]})
            };
        };
        const touchstart = new window.UIEvent('touchstart');
        const touchmove = new window.UIEvent('touchmove');
        touchstart.touches = touches('start');
        touchmove.touches = touches('end');
        expect(scene.getPan()).toMatchSnapshot();
        expect(scene.getRotation()).toMatchSnapshot();
        expect(scene.getZoom()).toMatchSnapshot();
        scene.getElement().dispatchEvent(touchstart);
        window.dispatchEvent(touchmove);
        expect(scene.getPan()).toMatchSnapshot();
        expect(scene.getRotation()).toMatchSnapshot();
        expect(scene.getZoom()).toMatchSnapshot();
        window.dispatchEvent(touchend);
    });
    it('can pan scene with three-finger drag', () => {
        const touches = [
            {pageX: 0, pageY: 0},
            {pageX: 10, pageY: 10},
            {pageX: 100, pageY: 100}
        ];
        const touchstart = new window.UIEvent('touchstart');
        const touchmove = new window.UIEvent('touchmove');
        touchstart.touches = touches;
        touchmove.touches = touches.map(touch => mapValues(touch, val => val + 100));
        expect(scene.getPan()).toMatchSnapshot();
        expect(scene.getRotation()).toMatchSnapshot();
        scene.getElement().dispatchEvent(touchstart);
        window.dispatchEvent(touchmove);
        expect(scene.getPan()).toMatchSnapshot();
        expect(scene.getRotation()).toMatchSnapshot();
        window.dispatchEvent(touchend);
    });
});
