/**
 * @module core/Editor
 * @description Creates all the mouse events necessary to allow the user to add and remove blocks from a World with the added option to autosave all changes.
**/
'use strict';

const {assign} = Object;

/**
 * @name Editor
 * @constructor
 * @param {module:core/World~World} world World to edit
 * @param {object} options Options to configure editor
 * @param {boolean} [options.autosave=true] Flag to enable auto saving functionality
 * @example <caption>Create an editor and add a voxel</caption>
 * const Voxelcss = require('voxelcss');
 * let scene = new Voxelcss.Scene();
 * let world = new Voxelcss.World(scene);
 * scene.attach(document.body);
 * let editor = new Voxelcss.Editor(world);
 * let position = [10, 10, 10];
 * let size = 100;
 * editor.add(new Voxelcss.Voxel(position, size));
 * @example <caption>Add a voxel with grass mesh</caption>
 * let mesh = Voxelcss.meshes.grass;
 * let grass = new Voxelcss.Voxel(position, size, {mesh});
 * editor.add(grass);
**/
module.exports = function(world, options) {
    if (world === undefined) {
        throw 'Editor requires World instance for initialization';
    }
    let self = this;
    let canAutoSave = (options !== undefined && options.autosave === true);
    let isEnabled = true;
    const bindVoxel = voxel => voxel.on({
        'change:mesh':  () => (self.canAutoSave() && self.save()),
        'contextmenu':  e => (self.isEnabled() && remove(e.target)),
        'click:top':    e => performAddativeShift(e, [0, 1, 0]),
        'click:bottom': e => performAddativeShift(e, [0, -1, 0]),
        'click:front':  e => performAddativeShift(e, [0, 0, 1]),
        'click:back':   e => performAddativeShift(e, [0, 0, -1]),
        'click:left':   e => performAddativeShift(e, [-1, 0, 0]),
        'click:right':  e => performAddativeShift(e, [1, 0, 0])
    });
    const loadWorldVoxels = () => world.getVoxels().forEach(bindVoxel);
    assign(self, {
        add,
        remove,
        getWorld: () => world,
        isEnabled: () => isEnabled,
        enable: () => (isEnabled = true),
        disable: () => (isEnabled = false),
        canAutoSave: () => canAutoSave,
        enableAutoSave: () => (canAutoSave = true),
        disableAutoSave: () => (canAutoSave = false),
        isSaved: () => world.isSaved(),
        deleteSave: () => world.deleteSave(),
        export: () => world.export(),
        import: (data) => {
            world.import(data);
            loadWorldVoxels();
        },
        save: () => world.save(),
        load: () => {
            world.load();
            loadWorldVoxels();
        }
    });
    loadWorldVoxels();
    function add(voxel) {
        voxel.off();
        bindVoxel(voxel);
        world.add(voxel);
        self.canAutoSave() && world.save();
        return self;
    }
    function remove(voxel) {
        world.remove(voxel) && voxel.off();
        self.canAutoSave() && world.save();
        return self;
    }
    function performAddativeShift(event, position) {
        if (self.isEnabled()) {
            let voxel = event.target;
            let dimension = voxel.getDimension();
            position = position.map(val => val * dimension);
            add(voxel.clone().translate(...position));
        }
    }
};
