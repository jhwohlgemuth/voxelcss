'use strict';

const LightSource = require('../lib/LightSource');
const Voxel       = require('../lib/Voxel');
const Scene       = require('../lib/Scene');

const INITIAL_ZOOM = 1;
const INITIAL_PAN = {x: 0, y: 0, z: 0};
const INITIAL_ROTATION = {x: 0, y: 0, z: 0};

describe('Scene', function() {
    let scene;
    beforeEach(() => {
        scene = new Scene();
    });
    it('can enable and disable pan', () => {
        expect(scene.getPan()).toMatchSnapshot();
        expect(scene.canPan()).toBeTruthy();
        scene.disablePan();
        expect(scene.canPan()).not.toBeTruthy();
        scene.enablePan();
        expect(scene.canPan()).toBeTruthy();
    });
    it('can enable and disable zoom', () => {
        expect(scene.getZoom()).toMatchSnapshot();
        expect(scene.canZoom()).toBeTruthy();
        scene.disableZoom();
        expect(scene.canZoom()).not.toBeTruthy();
        scene.enableZoom();
        expect(scene.canZoom()).toBeTruthy();
    });
    it('can enable and disable orbit', function() {
        expect(scene.canOrbit()).toBeTruthy();
        scene.disableOrbit();
        expect(scene.canOrbit()).not.toBeTruthy();
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
        let elem = {appendChild: () => {}};
        expect(scene.isAttached()).toBeFalsy();
        expect(() => {
            scene.detach(elem);
        }).toThrowErrorMatchingSnapshot();
    });
    it('can get and set zoom', function() {
        expect(scene.getZoom()).toEqual(INITIAL_ZOOM);
        expect(scene.setZoom()).toEqual(INITIAL_ZOOM);
        expect(scene.setZoom('Not a number')).toEqual(INITIAL_ZOOM);
        expect(scene.setZoom(10)).toEqual(10);
        expect(scene.getZoom()).toEqual(10);
        scene.zoom(1000);
        expect(scene.getZoom()).toMatchSnapshot();
    });
    it('can get, set, and apply pan', function() {
        let voxel = new Voxel(0, 0, 0, 10);
        scene.add(voxel);
        expect(scene.getPan()).toEqual(INITIAL_PAN);
        expect(scene.pan()).toEqual(INITIAL_PAN);
        expect(scene.pan(1, 10, 1000)).toEqual(INITIAL_PAN);
        expect(scene.getPan()).toMatchSnapshot();
    });
    it('can rotate', () => {
        expect(scene.getRotation()).toEqual(INITIAL_ROTATION);
        expect(scene.rotate(1, 0, 1)).toEqual(INITIAL_ROTATION);
        expect(scene.getRotation()).toEqual({x: 1, y: 0, z: 1});
        scene.setRotation(0, 0, 0);
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
        expect(scene.getVoxels()).toEqual([]);
        scene.add(voxel);
        expect(scene.getVoxels()).not.toEqual([]);
        expect(scene.getVoxels()).toMatchSnapshot();
        scene.remove(voxel);
        expect(scene.getVoxels()).toEqual([]);
    });
});
