'use strict';

const Voxel = require('../lib/Voxel');
const Scene = require('../lib/Scene');
const World = require('../lib/World');

describe('World', function() {
    let label;
    let scene;
    let world;
    beforeEach(function() {
        label = 'Za Worudo';// Jo Jo reference
        scene = new Scene();
        world = new World(scene, label);
    });
    it('can not be instantiated without Scene instance', () => {
        expect(() => {
            world = new World();
        }).toThrowError();
    });
    it('can save and delete state', () => {
        let formName = `savedWorld<${label}>`;
        world.isSaved();
        expect(localStorage.getItem).toHaveBeenLastCalledWith(formName);
        world.save();
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith(formName, '[]');
        world.deleteSave();
        expect(localStorage.setItem).toHaveBeenLastCalledWith(formName, '');
    });
    it('can export voxels', () => {
        world.add(new Voxel());
        expect(world.export()).toMatchSnapshot();
    });
    it('can import voxels', () => {
        world.add(new Voxel());
        let voxelString = world.export();
        world.import(voxelString);
        expect(world.export()).toEqual(voxelString);
    });
    it('can get scene and voxels', () => {
        expect(world.getScene()).toMatchSnapshot();
        expect(world.getVoxels()).toEqual([]);
        world.add(new Voxel());
        expect(world.getVoxels()).toMatchSnapshot();
    });
    it('can add and remove voxels', () => {
        let voxel = new Voxel();
        world.add(voxel);
        expect(world).toMatchSnapshot();
        let success = world.remove(voxel);
        expect(success).toBeTruthy();
        expect(world.export()).toEqual('[]');
    });
});
