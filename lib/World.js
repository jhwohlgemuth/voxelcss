'use strict';

const Mesh = require('./Mesh');
const Voxel = require('./Voxel');

module.exports = World;

function World() {
    var self = this;
    var undefined;
    var scene;
    var worldLabel = '*';
    var voxels = [];
    self.add = addVoxel;
    self.remove = removeVoxel;
    self.export = exportVoxel;
    self.import = importVoxel;
    self.save = saveToBrowser;
    self.load = loadFromBrowser;
    self.isSaved = isSavedToBrowser;
    self.deleteSave = deleteSave;
    self.getScene = getScene;
    self.getVoxels = getVoxels;
    function addVoxel(voxel) {
        voxels.push(voxel);
        return scene.add(voxel);
    }
    function removeVoxel(voxel) {
        var index = voxels.indexOf(voxel);
        if (index < 0) {
            return false;
        }
        scene.remove(voxel);
        voxels.splice(index, 1);
        return true;
    }
    function exportVoxel() {
        var json = [];
        for (var i = 0, voxel; voxel = voxels[i++];) {
            json.push({
                position: voxel.getPosition(),
                dimension: voxel.getDimension(),
                mesh: voxel.getMesh().serialize()
            });
        }
        return JSON.stringify(json);
    }
    function importVoxel(string) {
        clearBlocks();
        var json = JSON.parse(string + '');
        for (var i = 0, serial; serial = json[i++];) {
            var voxel = new Voxel(serial.position.x, serial.position.y, serial.position.z, serial.dimension);
            voxel.setMesh(Mesh.loadFromSerial(serial.mesh));
            addVoxel(voxel);
        }
    }
    function saveToBrowser() {
        localStorage.setItem(formSaveName(), exportVoxel());
    }
    function loadFromBrowser() {
        importVoxel(localStorage.getItem(formSaveName()) || '[]');
    }
    function isSavedToBrowser() {
        return !!localStorage.getItem(formSaveName());
    }
    function deleteSave() {
        localStorage.setItem(formSaveName(), '');
    }
    function getScene() {
        return scene;
    }
    function getVoxels() {
        return voxels.concat([]);
    }
    function clearBlocks() {
        while (voxels.length > 0) {removeVoxel(voxels[0]);}
    }
    function formSaveName() {
        return 'savedWorld<' + worldLabel + '>';
    }
    (function Constructor(_scene, _worldLabel) {
        if (_scene === undefined) {throw 'World cannot be instantiated without a Scene instance';}
        scene = _scene;
        if (_worldLabel !== undefined) {worldLabel = _worldLabel;}
    }).apply(self, arguments);
}
