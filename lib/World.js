/**
 * @module core/World
 * @description A World can save the state of any voxels added to it
 * @requires core/Voxel
 * @requires core/Mesh
**/
'use strict';

const {assign} = Object;
const Mesh     = require('./Mesh');
const Voxel    = require('./Voxel');

module.exports = World;

/**
 * @name World
 * @constructor
 * @param {module:core/Scene~Scene} scene Scene to create world with
 * @param {string} label String to be used as key id when saving world to localStorage
 * @example <caption>Add a scene to a world</caption>
 * const Voxelcss = require('voxelcss');
 * let scene = new Voxelcss.Scene();
 * let world = new Voxelcss.World(scene);
**/
function World(scene, label) {
    if (scene === undefined) {
        throw 'World cannot be instantiated without a Scene instance';
    }
    let voxels = [];
    let worldLabel = label || '*';
    let getScene = () => scene;
    let getVoxels = () => voxels;
    let formSaveName = () => `savedWorld<${worldLabel}>`;
    assign(this, {
        add,
        remove,
        clear,
        getScene,
        getVoxels,
        import: importVoxel,
        export: exportVoxel,
        load: () => importVoxel(localStorage.getItem(formSaveName()) || '[]'),
        isSaved: () => !!localStorage.getItem(formSaveName()),
        save: () => localStorage.setItem(formSaveName(), exportVoxel()),
        deleteSave: () => localStorage.setItem(formSaveName(), '')
    });
    function add(voxel) {
        voxels.push(voxel);
        return scene.add(voxel);
    }
    function remove(voxel) {
        let index = voxels.indexOf(voxel);
        let canRemove = (index > -1);
        if (canRemove) {
            scene.remove(voxel);
            voxels.splice(index, 1);
        }
        return canRemove;
    }
    function clear() {
        while (voxels.length > 0) {remove(voxels[0]);}
    }
    function exportVoxel() {
        return JSON.stringify(voxels.map(voxel => getData(voxel)));
    }
    function importVoxel(serializedData) {
        if (typeof serializedData === 'string') {
            try {
                clear();
                JSON.parse(serializedData).forEach(obj => {
                    let {dimension, mesh, position} = obj;
                    let {x, y, z} = position;
                    var voxel = new Voxel(x, y, z, dimension);
                    voxel.setMesh(Mesh.loadFromSerial(mesh));
                    add(voxel);
                });
            } catch (e) {
                throw 'Cannot import voxel data';
            }
        } else {
            throw 'Only serialized data can be imported';
        }
    }
    function getData(voxel) {
        return {
            position: voxel.getPosition(),
            dimension: voxel.getDimension(),
            mesh: voxel.getMesh().serialize()
        };
    }
}
