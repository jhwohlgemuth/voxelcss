'use strict';

const LightSource = require('../lib/LightSource');
const Voxel       = require('../lib/Voxel');
const Scene       = require('../lib/Scene');

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
    it('can throw error when trying to attach when already attached', () => {
        let elem = {appendChild: () => {}};
        expect(scene.isAttached()).toBeFalsy();
        scene.attach(elem);
        expect(scene.isAttached()).toBeTruthy();
        expect(() => {
            scene.attach(elem);
        }).toThrow();
    });
    it('can throw error when trying to detach when already detached', () => {
        let elem = {appendChild: () => {}};
        expect(scene.isAttached()).toBeFalsy();
        expect(() => {
            scene.detach(elem);
        }).toThrow();
    });
    it('can rotate', () => {
        const INITIAL_ROTATION = {x: 0, y: 0, z: 0};
        expect(scene.getRotation()).toEqual(INITIAL_ROTATION);
        expect(scene.rotate(1, 0, 1)).toEqual(INITIAL_ROTATION);
        expect(scene.getRotation()).toEqual({x:1, y: 0, z: 1});
        scene.setRotation(INITIAL_ROTATION);
        expect(scene.getRotation()).toMatchSnapshot();
    });
    it('can add and remove light sources', () => {
        let lightSource = new LightSource(300, 300, 300, 750, 0.2, 1);
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
