/**
 * @file Module for creating an editor
 * @description Creates all the mouse events necessary to allow the user to add and remove blocks from a World with the added option to autosave all changes.
 * @module core/Editor
 * @example <caption>Create an editor and add a voxel</caption>
 * const Voxelcss = require('voxelcss');
 * let scene = new Voxelcss.Scene();
 * let world = new Voxelcss.World(scene);
 * scene.attach(document.body);
 * let dimensions = [0, 0, 0, 100];
 * editor.add(new Voxelcss.Voxel(...dimensions));
 * @example <caption>Add a voxel with grass mesh</caption>
 * let mesh = Voxelcss.meshes.grass;
 * let grass = new Voxelcss.Voxel(..dimensions, {mesh});
 * editor.add(grass);
**/
'use strict';

module.exports = function() {
    var self = this;
    var undefined;
    var world;
    var canAutoSave = false;
    var isEnabled = true;
    var tool = {mesh: {}};
    self.enable = Enable;
    self.disable = Disable;
    self.isEnabled = IsEnabled;
    self.enableAutoSave = enableAutoSave;
    self.disableAutoSave = DisableAutoSave;
    self.canAutoSave = CanAutoSave;
    self.save = save;
    self.load = Load;
    self.isSaved = IsSaved;
    self.deleteSave = DeleteSave;
    self.export = Export;
    self.import = Import;
    self.add = addVoxel;
    self.remove = removeVoxel;
    self.getWorld = GetWorld;
    self.setToolMesh = SetToolMesh;
    function Enable() {
        isEnabled = true;
    }
    function Disable() {
        isEnabled = false;
    }
    function IsEnabled() {
        return isEnabled;
    }
    function enableAutoSave() {
        canAutoSave = true;
    }
    function DisableAutoSave() {
        canAutoSave = false;
    }
    function CanAutoSave() {
        return canAutoSave;
    }
    function save() {
        world.save();
    }
    function Load() {
        var response = world.load();
        loadWorldVoxels();
        return response;
    }
    function IsSaved() {
        return world.isSaved();
    }
    function DeleteSave() {
        return world.deleteSave();
    }
    function Export() {
        return world.export();
    }
    function Import(string) {
        var response = world.import(string);
        loadWorldVoxels();
        return response;
    }
    function addVoxel(voxel) {
        bindVoxel(voxel);
        var response = world.add(voxel);
        if (canAutoSave) {
            save();
        }
        return response;
    }
    function removeVoxel(voxel) {
        var success = world.remove(voxel);
        if (success) {
            unBindVoxel(voxel);
        }
        if (canAutoSave) {
            save();
        }
        return success;
    }
    function GetWorld() {
        return world;
    }
    function SetToolMesh(mesh) {
        if (mesh === undefined) {return tool.mesh;}

        var old = tool.mesh;
        tool.mesh = mesh;
        return old;
    }
    function bindVoxel(voxel) {
        voxel.addEventListener('VoxelClick', OnVoxelClick);
        voxel.addEventListener('TopClick', OnTopClick);
        voxel.addEventListener('BottomClick', OnBottomClick);
        voxel.addEventListener('FrontClick', OnFrontClick);
        voxel.addEventListener('BackClick', OnBackClick);
        voxel.addEventListener('LeftClick', OnLeftClick);
        voxel.addEventListener('RightClick', OnRightClick);
        voxel.addEventListener('MeshChange', function() {
            if (canAutoSave) {
                save();
            }
        });
    }
    function unBindVoxel(voxel) {
        voxel.removeEventListener('VoxelClick', OnVoxelClick);
        voxel.removeEventListener('TopClick', OnTopClick);
        voxel.removeEventListener('BottomClick', OnBottomClick);
        voxel.removeEventListener('FrontClick', OnFrontClick);
        voxel.removeEventListener('BackClick', OnBackClick);
        voxel.removeEventListener('LeftClick', OnLeftClick);
        voxel.removeEventListener('RightClick', OnRightClick);
    }
    function OnVoxelClick(event) {
        if (!isEnabled) {return;}
        var voxel = event.target;
        removeVoxel(voxel);
    }
    function OnTopClick(event) {
        if (!isEnabled) {return;}
        var voxel = event.target;
        performAddativeShift(voxel, 0, 1, 0);
    }
    function OnBottomClick(event) {
        if (!isEnabled) {return;}
        var voxel = event.target;
        performAddativeShift(voxel, 0, -1, 0);
    }
    function OnFrontClick(event) {
        if (!isEnabled) {return;}
        var voxel = event.target;
        performAddativeShift(voxel, 0, 0, 1);
    }
    function OnBackClick(event) {
        if (!isEnabled) {return;}
        var voxel = event.target;
        performAddativeShift(voxel, 0, 0, -1);
    }
    function OnLeftClick(event) {
        if (!isEnabled) {return;}
        var voxel = event.target;
        performAddativeShift(voxel, -1, 0, 0);
    }
    function OnRightClick(event) {
        if (!isEnabled) {return;}
        var voxel = event.target;
        performAddativeShift(voxel, 1, 0, 0);
    }
    function performAddativeShift(voxel, x, y, z) {
        var newVoxel = voxel.clone();
        var dim = newVoxel.getDimension();
        newVoxel.setMesh(tool.mesh);
        newVoxel.translate(x * dim, y * dim, z * dim);
        addVoxel(newVoxel);
    }
    function loadWorldVoxels() {
        for (var i = 0, voxel; voxel = world.getVoxels()[i++];) {bindVoxel(voxel);}
    }
    (function Constructor(_world, options) {
        if (_world === undefined) {throw 'Editor requires World instance for initialization';}
        world = _world;
        if (options !== undefined && options.autosave === true) {
            enableAutoSave();
        }
        loadWorldVoxels();
    }).apply(self, arguments);
};
