'use strict';

const LightSource = require('../lib/LightSource');
const Voxel       = require('../lib/Voxel');
const Scene       = require('../lib/Scene');

const INITIAL_ZOOM = 1;
const INITIAL_PAN = {x: 0, y: 0, z: 0};
const INITIAL_ROTATION = {x: 0, y: 0, z: 0};
const SHIFT_KEYCODE = 16;


let keyCode = SHIFT_KEYCODE;
let which = SHIFT_KEYCODE;
let pressShift = new window.KeyboardEvent('keydown', {keyCode});
let releaseShift = new window.KeyboardEvent('keyup', {keyCode});

describe('Scene', function() {
    let scene;
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
    it('can enable and disable orbit', () => {
        expect(scene.canOrbit()).toBeTruthy();
        [1, 2].forEach(() => {
            scene.disableOrbit();
            expect(scene.canOrbit()).not.toBeTruthy();
        });
        [1, 2].forEach(() => {
            scene.enableOrbit();
            expect(scene.canOrbit()).toBeTruthy();
        });
    });
    it('can attach and detach', () => {
        let elem = {appendChild: () => {}};
        expect(scene.isAttached()).toBeFalsy();
        scene.attach(elem);
        expect(scene.isAttached()).toBeTruthy();
        expect(scene.getParentElement()).toEqual(elem);
        scene.detach();
        expect(scene.isAttached()).toBeFalsy();
    });
    it('can throw error when trying to attach when already attached', () => {
        let elem = {appendChild: () => {}};
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
    it('can get and set zoom', () => {
        expect(scene.getZoom()).toEqual(INITIAL_ZOOM);
        expect(scene.setZoom()).toEqual(INITIAL_ZOOM);
        expect(scene.setZoom('Not a number')).toEqual(INITIAL_ZOOM);
        expect(scene.setZoom(10)).toEqual(10);
        expect(scene.getZoom()).toEqual(10);
        scene.zoom(1000);
        expect(scene.getZoom()).toMatchSnapshot();
        scene.zoom();
        expect(scene.getZoom()).toMatchSnapshot();
        scene.zoom('Not a number');
        expect(scene.getZoom()).toMatchSnapshot();
    });
    it('can get, set pan', () => {
        let voxel = new Voxel(0, 0, 0, 10);
        scene.add(voxel);
        expect(scene.getPan()).toEqual(INITIAL_PAN);
        expect(scene.pan()).toEqual(INITIAL_PAN);
        expect(scene.pan(1, 10, 1000)).toEqual(INITIAL_PAN);
        expect(scene.getPan()).toMatchSnapshot();
    });
    it('can apply pan', () => {
        let x = 1;
        let y = 2;
        let z = 3;
        let voxel = new Voxel(0, 0, 0, 10);
        scene.add(voxel);
        expect(scene.getPan()).toEqual(INITIAL_PAN);
        scene.setPan();
        expect(scene.getPan()).toEqual(INITIAL_PAN);
        scene.setPan(x, y, z);
        expect(scene.getPan()).toMatchSnapshot();
    });
    it('can rotate', () => {
        expect(scene.getRotation()).toEqual(INITIAL_ROTATION);
        expect(scene.rotate(1, 0, 1)).toEqual(INITIAL_ROTATION);
        expect(scene.getRotation()).toEqual({x: 1, y: 0, z: 1});
        scene.rotate();
        expect(scene.getRotation()).toEqual({x: 1, y: 0, z: 1});
        const NOT_A_NUMBER = 'Not a number';
        scene.rotate(NOT_A_NUMBER, NOT_A_NUMBER, NOT_A_NUMBER);
        expect(scene.getRotation()).toEqual({x: 1, y: 0, z: 1});
        scene.setRotation(0, 0, 0);
        expect(scene.getRotation()).toEqual(INITIAL_ROTATION);
        scene.setRotation();
        expect(scene.getRotation()).toEqual(INITIAL_ROTATION);
        scene.setRotation(NOT_A_NUMBER, NOT_A_NUMBER, NOT_A_NUMBER);
        expect(scene.getRotation()).toEqual(INITIAL_ROTATION);
    });
    it('can add and remove light sources', () => {
        let dim = 300;
        let distance = 750;
        let dark = 0.2;
        let light = 1;
        let lightSource = new LightSource(dim, dim, dim, distance, dark, light);
        expect(scene.getLightSources()).toEqual([]);
        scene.addLightSource(lightSource);
        expect(scene.getLightSources()).not.toEqual([]);
        expect(scene.getLightSources()).toMatchSnapshot();
        scene.removeLightSource(lightSource);
        expect(scene.getLightSources()).toEqual([]);
    });
    it('can add and remove voxels', () => {
        let voxel = new Voxel(10, 10, 10, 10);
        let dim = 300;
        let distance = 750;
        let dark = 0.2;
        let light = 1;
        let lightSource = new LightSource(dim, dim, dim, distance, dark, light);
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
        let mousewheel = new window.MouseEvent('mousewheel');
        let wheel = new window.MouseEvent('wheel');
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
        let x = 1000;
        let y = 1000;
        let d = 100;
        let mousedown = new window.MouseEvent('mousedown');
        let mouseup = new window.MouseEvent('mouseup');
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
        let mousemove = new window.MouseEvent('mousemove');
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
});
