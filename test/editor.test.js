'use strict';

const {createVoxelMock, createWorldMock, reset} = require('./mocks');
const Voxel  = require('../lib/Voxel');
const Scene  = require('../lib/Scene');
const World  = require('../lib/World');
const Editor = require('../lib/Editor');

const sideClickEvents = [
    'TopClick',
    'BottomClick',
    'FrontClick',
    'BackClick',
    'LeftClick',
    'RightClick'
];
const allEvents = sideClickEvents.concat(
    'MeshChange',
    'VoxelClick'
);

describe('Editor', function() {
    let editor;
    let world;
    let voxels = [
        new Voxel(),
        new Voxel(),
        new Voxel()
    ];
    voxels.forEach(voxel => {
        voxel.on = jest.fn();
    });
    beforeEach(() => {
        world = createWorldMock();
        editor = new Editor(world);
    });
    afterEach(() => {
        localStorage.setItem.mockClear();
        localStorage.getItem.mockClear();
        reset(world);
    });
    it('can throw an error if instantiated without a world instance', () => {
        expect(() => {
            editor = new Editor();
        }).toThrowErrorMatchingSnapshot();
    });
    it('can be instantiated with autosave on', () => {
        editor = new Editor(world, {autosave: true});
        expect(editor.canAutoSave()).toBeTruthy();
    });
    it('can be enabled and disabled', () => {
        expect(editor.isEnabled()).toBeTruthy();
        editor.disable();
        expect(editor.isEnabled()).toBeFalsy();
        editor.enable();
        expect(editor.isEnabled()).toBeTruthy();
    });
    it('can enable and disable autosave', () => {
        expect(editor.canAutoSave()).toBeFalsy();
        editor.enableAutoSave();
        expect(editor.canAutoSave()).toBeTruthy();
        editor.disableAutoSave();
        expect(editor.canAutoSave()).toBeFalsy();
    });
    it('can create, delete, load, and verify saves', () => {
        expect(editor.isSaved()).toBeFalsy();
        expect(world.isSaved).toHaveBeenCalledTimes(1);
        editor.save();
        expect(world.save).toHaveBeenCalledTimes(1);
        editor.deleteSave();
        expect(world.deleteSave).toHaveBeenCalledTimes(1);
        editor.load();
        expect(world.load).toHaveBeenCalledTimes(1);
    });
    it('can import and export world', () => {
        editor.export();
        expect(world.export).toHaveBeenCalledTimes(1);
        let newScene = new Scene();
        let newWorld = new World(newScene);
        voxels.forEach(voxel => {
            newWorld.add(voxel);
        });
        let serializedWorld = newWorld.export();
        expect(serializedWorld).toMatchSnapshot();
        editor.import(serializedWorld);
        expect(editor.getWorld().getVoxels().length).toEqual(voxels.length);
    });
    it('can add voxels', () => {
        let a = new Voxel();
        let b = new Voxel();
        a.on = jest.fn();
        b.on = jest.fn();
        editor.add(a);
        expect(world.save).not.toHaveBeenCalled();
        expect(a.on).toHaveBeenCalledTimes(allEvents.length);
        editor.enableAutoSave();
        editor.add(b);
        expect(world.save).toHaveBeenCalled();
        expect(b.on).toHaveBeenCalledTimes(allEvents.length);
    });
    it('can remove voxels', () => {
        let a = new Voxel();
        let b = new Voxel();
        a.off = jest.fn();
        b.off = jest.fn();
        editor.add(a);
        editor.add(b);
        editor.remove(a);
        expect(world.save).not.toHaveBeenCalled();
        expect(a.off).toHaveBeenCalledTimes(2);
        editor.enableAutoSave();
        editor.remove(b);
        expect(world.save).toHaveBeenCalledTimes(1);
        expect(b.off).toHaveBeenCalledTimes(2);
    });
    it('can bind and unbind event handlers to voxels', () => {
        let voxel = new Voxel();
        let target = createVoxelMock();
        editor.add(voxel);
        allEvents.forEach(name => voxel.trigger(name, {target}));
        expect(world.save).not.toHaveBeenCalled();
        editor.enableAutoSave();
        editor.add(voxel);
        allEvents.forEach(name => voxel.trigger(name, {target}));
        expect(world.save).toHaveBeenCalledTimes(allEvents.length + 1);
        expect(target.translate).toHaveBeenCalledTimes(2 * sideClickEvents.length);
        target.translate.mockClear();
    });
    it('will only handle click events when enabled', () => {
        let voxel = new Voxel();
        let target = createVoxelMock();
        editor.disable();
        editor.add(voxel);
        allEvents.forEach(name => voxel.trigger(name, {target}));
        expect(target.translate).not.toHaveBeenCalled();
    });
});
