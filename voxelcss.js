(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.voxelcss = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var css = ".scene {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  cursor: move;\n}\n.scene .camera,\n.scene .zoom {\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  overflow: visible;\n}\n.cube,\n.scene .camera,\n.scene .zoom {\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.cube:hover img {\n  visibility: hidden!important;\n}\n.cube:hover .face {\n  background: rgba(0,0,0,.3)!important;\n}\n.cube:hover .face .shader {\n  opacity: 0!important;\n}\n.cube .anim {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.cube .anim.down {\n  -webkit-animation: b 1s linear both;\n  animation: b 1s linear both;\n}\n.cube .anim.up {\n  -webkit-animation: a 1s linear both;\n  animation: a 1s linear both;\n}\n.face {\n  display: block;\n  position: absolute;\n  outline: none;\n  border: none;\n  margin-left: -18px;\n  margin-top: -18px;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n}\n.face img {\n  width: 100%;\n  height: 100%;\n}\n.face img.colored {\n  visibility: hidden;\n}\n.face .shader {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n}\n@-webkit-keyframes a {\n  0% {\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n    opacity: 0;\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n    opacity: 1;\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes a {\n  0% {\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n    opacity: 0;\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n    opacity: 1;\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@-webkit-keyframes b {\n  0% {\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n    opacity: 0;\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n    opacity: 1;\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes b {\n  0% {\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n    opacity: 0;\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n    opacity: 1;\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n"; (require("browserify-css").createStyle(css, { "href": "dist/voxelcss.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":14}],2:[function(require,module,exports){
'use strict';

const eventListener = require('./eventListener');

const BASE_16 = 16;

module.exports = ColorFace;

// events -> onchange
function ColorFace() {
    let self = this;
    let color = {r: 0, g: 0, b: 0, a: 1};
    self.setColor = SetColor;
    self.getRGBA = getRGBA;
    self.getHex = GetHex;
    self.serialize = Serialize;
    self.clone = Clone;
    function SetColor() {
        if (arguments.length === 1 && arguments[0].constructor !== Number) {
            if (arguments[0].constructor === String) {
                return setColorFromHex(arguments[0]);
            } else {
                return setColorFromRGBADict(arguments[0]);
            }
        } else {
            return setColorFromRGBA.apply(this, arguments);
        }
    }
    function getRGBA() {
        return color;
    }
    function GetHex() {
        return rgbToHex(color.r, color.g, color.b);
    }
    function Serialize() {
        return JSON.stringify(color);
    }
    function Clone() {
        return new ColorFace(color);
    }
    function setColorFromRGBA(r, g, b, a) {
        var old = getRGBA();
        if (r !== undefined && r.constructor === Number) {color.r = r;}
        if (g !== undefined && g.constructor === Number) {color.g = g;}
        if (b !== undefined && b.constructor === Number) {color.b = b;}
        if (a !== undefined && a.constructor === Number) {color.a = a;}
        triggerChangeEvent();
        return old;
    }
    function setColorFromRGBADict(dict) {
        if (dict === undefined) {
            return getRGBA();
        }
        return setColorFromRGBA(dict.r, dict.g, dict.b, dict.a);
    }
    function setColorFromHex(hex) {
        if (!hex || hex.constructor !== String) {
            return getRGBA();
        }
        color = hexToRgb(hex);
        color.a = 1;
        triggerChangeEvent();
        return getRGBA();
    }
    function hexToRgb(hex) {
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m, r, g, b) => {
            return r + r + g + g + b + b;
        });
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], BASE_16),
            g: parseInt(result[2], BASE_16),
            b: parseInt(result[3], BASE_16)
        } : null;
    }
    function rgbToHex(r, g, b) {
        return '' + ((1 << 24) + (r << BASE_16) + (g << 8) + b).toString(BASE_16).slice(1);
    }
    function triggerChangeEvent() {
        self.triggerEvent('change', {target: self});
    }
    (function Constructor() {
        eventListener(self);
        SetColor.apply(this, arguments);
    }).apply(self, arguments);
}
ColorFace.loadFromSerial = function LoadFromSerial(serial) {
    var json = JSON.parse(serial);
    return new ColorFace(json);
};

},{"./eventListener":11}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
'use strict';

const eventListener = require('./eventListener');
const EMPTYGIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

module.exports = ImageFace;

// events -> onchange
function ImageFace() {
    var self = this;
    var source = EMPTYGIF;
    self.setSource = setSource;
    self.getSource = function() {
        return source;
    };
    self.serialize = function() {
        return source;
    };
    self.clone = function() {
        return new ImageFace(source);
    };
    function setSource(src) {
        if (!src) {return source;}
        var old = source;
        source = src;
        self.triggerEvent('change', {target: self});
        return old;
    }
    (function Constructor(src) {
        eventListener(self);
        setSource(src);
    }).apply(self, arguments);
}
ImageFace.loadFromSerial = function LoadFromSerial(serial) {
    return new ImageFace(serial);
};

},{"./eventListener":11}],5:[function(require,module,exports){
'use strict';

const eventListener = require('./eventListener');
const positioned    = require('./positioned');

// events -> change
module.exports = function() {
    var self = this;
    var undefined;
    var travelDistance = 500;
    var maxLight = 1;
    var maxDark = 0;
    self.setTravelDistance = setTravelDistance;
    self.getTravelDistance = GetTravelDistance;
    self.setBrightness = setBrightness;
    self.getBrightness = getBrightness;
    function setTravelDistance(distance) {
        if (distance === undefined || typeof distance !== 'number') {return travelDistance;}

        var old = travelDistance;
        travelDistance = distance;
        self.triggerEvent('change', {target: self});
        return old;
    }
    function GetTravelDistance() {
        return travelDistance;
    }
    function setBrightness(dark, light) {
        var old = getBrightness();
        if (typeof light === 'number') {
            maxLight = light;
        }
        if (typeof dark === 'number') {
            maxDark = dark;
        }
        self.triggerEvent('change', {target: self});
        return old;
    }
    function getBrightness() {
        return [maxDark, maxLight];
    }
    (function Constructor(x, y, z, distance, dark, light) {
        positioned(eventListener(self));
        self.setPosition(x, y, z);
        setTravelDistance(distance);
        setBrightness(dark, light);
    }).apply(self, arguments);
};

},{"./eventListener":11,"./positioned":13}],6:[function(require,module,exports){
'use strict';

const eventListener = require('./eventListener');
const ImageFace     = require('./ImageFace');
const ColorFace     = require('./ColorFace');

const FACETYPES = {
    image: ImageFace,
    color: ColorFace
};

module.exports = Mesh;

// events -> onchange
function Mesh() {
    let self = this;
    let front;
    let back;
    let left;
    let right;
    let top;
    let bottom;
    let canTriggerEvent = true;
    Object.assign(self, {
        setFront,
        setBack,
        setLeft,
        setRight,
        setTop,
        setBottom,
        getFront,
        getBack,
        getLeft,
        getRight,
        getTop,
        getBottom,
        setFaces,
        getFaces,
        serialize
    });
    function setFront(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = front;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        front = face;
        front.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function setBack(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = back;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        back = face;
        back.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function setLeft(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = left;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        left = face;
        left.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function setRight(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = right;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        right = face;
        right.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function setTop(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = top;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        top = face;
        top.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function setBottom(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = bottom;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        bottom = face;
        bottom.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function getFront() {
        return front;
    }
    function getBack() {
        return back;
    }
    function getLeft() {
        return left;
    }
    function getRight() {
        return right;
    }
    function getTop() {
        return top;
    }
    function getBottom() {
        return bottom;
    }
    function setFaces(faces) {
        var old = getFaces();
        if (faces === undefined) {return old;}
        if (containsFaceType(faces)) {
            faces = {
                front: faces,
                back: faces,
                top: faces,
                bottom: faces,
                left: faces,
                right: faces
            };
        }
        canTriggerEvent = false;
        setFront(faces.front);
        setBack(faces.back);
        setLeft(faces.left);
        setRight(faces.right);
        setTop(faces.top);
        setBottom(faces.bottom);
        triggerChangeEvent();
        canTriggerEvent = true;
        return old;
    }
    function getFaces() {
        return {front, back, left, right, top, bottom};
    }
    function serialize() {
        return JSON.stringify({
            front: serializeFace(front),
            back: serializeFace(back),
            left: serializeFace(left),
            right: serializeFace(right),
            top: serializeFace(top),
            bottom: serializeFace(bottom)
        });
    }
    function serializeFace(face) {
        return getFaceKeyByType(face.constructor) + '(' + face.serialize() + ')';
    }
    function containsFaceType(face) {
        return !!getFaceKeyByType(face.constructor);
    }
    function getFaceKeyByType(type) {
        /* eslint-disable guard-for-in */
        for (var key in FACETYPES) {
            var value = FACETYPES[key];
            if (value === type) {
                return key;
            }
        }
        /* eslint-enable guard-for-in */
        return null;
    }
    function onFaceChangeEvent() {
        triggerChangeEvent();
    }
    function triggerChangeEvent() {
        self.triggerEvent('change', {target: self, faces: getFaces()});
    }
    (function Constructor(faces) {
        eventListener(self);
        setFaces(new ImageFace());
        setFaces(faces);
    }).apply(self, arguments);
}
Mesh.loadFromSerial = function LoadFromSerial(serial) {
    let {front, back, left, right, top, bottom} = JSON.parse(serial);
    return new Mesh({
        front: loadFaceFromSerial(front),
        back: loadFaceFromSerial(back),
        left: loadFaceFromSerial(left),
        right: loadFaceFromSerial(right),
        top: loadFaceFromSerial(top),
        bottom: loadFaceFromSerial(bottom)
    });
};
function loadFaceFromSerial(compositeSerial) {
    let index = compositeSerial.indexOf('(');
    let type = compositeSerial.slice(0, index);
    let typeSerial = compositeSerial.slice(index + 1, -1);
    return FACETYPES[type].loadFromSerial(typeSerial);
}

},{"./ColorFace":2,"./ImageFace":4,"./eventListener":11}],7:[function(require,module,exports){
'use strict';

const Mesh      = require('./Mesh');
const ImageFace = require('./ImageFace');

module.exports = {
    dirt: new Mesh(
        new ImageFace('http://voxelcss.com/res/dirt/main.png')
    ),
    grass: new Mesh({
        'top': new ImageFace('http://voxelcss.com/res/grass/top.png'),
        'bottom': new ImageFace('http://voxelcss.com/res/grass/bottom.png'),
        'front': new ImageFace('http://voxelcss.com/res/grass/side.png'),
        'back': new ImageFace('http://voxelcss.com/res/grass/side.png'),
        'left': new ImageFace('http://voxelcss.com/res/grass/side.png'),
        'right': new ImageFace('http://voxelcss.com/res/grass/side.png')
    }),
    water: new Mesh(
        new ImageFace('http://voxelcss.com/res/water/main.png')
    ),
    waterFall: new Mesh({
        'top': new ImageFace('http://voxelcss.com/res/water/main.png'),
        'bottom': new ImageFace('http://voxelcss.com/res/water/main.png'),
        'front': new ImageFace('http://voxelcss.com/res/water/fall.png'),
        'back': new ImageFace('http://voxelcss.com/res/water/fall.png'),
        'left': new ImageFace('http://voxelcss.com/res/water/fall.png'),
        'right': new ImageFace('http://voxelcss.com/res/water/fall.png')
    }),
    waterFallTop: new Mesh({
        'top': new ImageFace('http://voxelcss.com/res/water/main.png'),
        'bottom': new ImageFace('http://voxelcss.com/res/water/main.png'),
        'front': new ImageFace('http://voxelcss.com/res/water/falltop.png'),
        'back': new ImageFace('http://voxelcss.com/res/water/falltop.png'),
        'left': new ImageFace('http://voxelcss.com/res/water/falltop.png'),
        'right': new ImageFace('http://voxelcss.com/res/water/falltop.png')
    }),
    waterFallCrash: new Mesh({
        'top': new ImageFace('http://voxelcss.com/res/water/main.png'),
        'bottom': new ImageFace('http://voxelcss.com/res/water/main.png'),
        'front': new ImageFace('http://voxelcss.com/res/water/crash.png'),
        'back': new ImageFace('http://voxelcss.com/res/water/crash.png'),
        'left': new ImageFace('http://voxelcss.com/res/water/crash.png'),
        'right': new ImageFace('http://voxelcss.com/res/water/crash.png')
    }),
    treeTrunk: new Mesh({
        'top': new ImageFace('http://voxelcss.com/res/tree/rings.png'),
        'bottom': new ImageFace('http://voxelcss.com/res/tree/rings.png'),
        'front': new ImageFace('http://voxelcss.com/res/tree/bark.png'),
        'back': new ImageFace('http://voxelcss.com/res/tree/bark.png'),
        'left': new ImageFace('http://voxelcss.com/res/tree/bark.png'),
        'right': new ImageFace('http://voxelcss.com/res/tree/bark.png')
    }),
    treeLeaves: new Mesh(
        new ImageFace('http://voxelcss.com/res/tree/leaves.png')
    )
};

},{"./ImageFace":4,"./Mesh":6}],8:[function(require,module,exports){
'use strict';

const eventListener = require('./eventListener');

const SHIFT_KEYCODE = 16;

module.exports = Scene;

// EVENTS
//    onorbit
//    onpan
//    onzoom
function Scene() {
    var self = this;
    var undefined;
    var parentContainer;
    var sceneElement;
    var zoomElement;
    var cameraElement;
    var isAttached = false;
    var rotation = {x: 0, y: 0, z: 0};
    var pan = {x: 0, y: 0, z: 0};
    var zoom = 1;
    var mouse = {
        start: {x: 0, y: 0},
        current: {x: 0, y: 0},
        lastMove: {x: 0, y: 0},
        shiftDown: false
    };
    var canOrbit = true;
    var canPan = true;
    var canZoom = true;
    var lightSources = [];
    var voxels = [];
    self.rotate = rotateScene;
    self.rotateX = rotateSceneX;
    self.rotateY = rotateSceneY;
    self.rotateZ = rotateSceneZ;
    self.pan = scenePan;
    self.panX = scenePanX;
    self.panY = scenePanY;
    self.panZ = scenePanZ;
    self.setPan = setScenePan;
    self.setPanX = setScenePanX;
    self.setPanY = setScenePanY;
    self.setPanZ = setScenePanZ;
    self.getPan = getScenePan;
    self.getPanX = getScenePanX;
    self.getPanY = getScenePanY;
    self.getPanZ = getScenePanZ;
    self.zoom = sceneZoom;
    self.setZoom = setSceneZoom;
    self.getZoom = getSceneZoom;
    self.attach = attachScene;
    self.detach = detachScene;
    self.isAttached = isSceneAttached;
    self.getParentElement = getParentElement;
    self.enableOrbit = EnableOrbit;
    self.disableOrbit = DisableOrbit;
    self.canOrbit = CanOrbit;
    self.enablePan = enableScenePan;
    self.disablePan = disableScenePan;
    self.canPan = canScenePan;
    self.enableZoom = enableSceneZoom;
    self.disableZoom = disableSceneZoom;
    self.canZoom = canSceneZoom;
    self.add = addVoxel;
    self.remove = removeVoxel;
    Object.assign(self, {
        setRotation,
        setRotationX,
        setRotationY,
        setRotationZ,
        getRotation,
        getRotationX,
        getRotationY,
        getRotationZ,
        getVoxels,
        addLightSource,
        getLightSources,
        removeLightSource
    });
    function rotateScene(x, y, z) {
        return {
            x: rotateSceneX(x),
            y: rotateSceneY(y),
            z: rotateSceneZ(z)
        };
    }
    function rotateSceneX(x) {
        if (x === undefined || typeof x !== 'number') {return rotation.x;}
        var old = rotation.x;
        rotation.x += x;
        updateSceneTransforms();
        return old;
    }
    function rotateSceneY(y) {
        if (y === undefined || typeof y !== 'number') {return rotation.y;}
        var old = rotation.y;
        rotation.y += y;
        updateSceneTransforms();
        return old;
    }
    function rotateSceneZ(z) {
        if (z === undefined || typeof z !== 'number') {return rotation.z;}
        var old = rotation.z;
        rotation.z += z;
        updateSceneTransforms();
        return old;
    }
    function setRotation(x, y, z) {
        var old = {
            x: setRotationX(x),
            y: setRotationY(y),
            z: setRotationZ(z)
        };
        updateSceneTransforms();
        return old;
    }
    function setRotationX(x) {
        if (x === undefined || typeof x !== 'number') {return rotation.x;}
        var old = rotation.x;
        rotation.x = x;
        updateSceneTransforms();
        return old;
    }
    function setRotationY(y) {
        if (y === undefined || typeof y !== 'number') {return rotation.y;}
        var old = rotation.y;
        rotation.y = y;
        updateSceneTransforms();
        return old;
    }
    function setRotationZ(z) {
        if (z === undefined || typeof z !== 'number') {return rotation.z;}
        var old = rotation.z;
        rotation.z = z;
        updateSceneTransforms();
        return old;
    }
    function getRotation() {
        return {
            x: rotation.x,
            y: rotation.y,
            z: rotation.z
        };
    }
    function getRotationX() {
        return rotation.x;
    }
    function getRotationY() {
        return rotation.y;
    }
    function getRotationZ() {
        return rotation.z;
    }
    function scenePan(x, y, z) {
        return {
            x: scenePanX(x),
            y: scenePanY(y),
            z: scenePanZ(z)
        };
    }
    function scenePanX(x) {
        if (x === undefined || typeof x !== 'number') {return pan.x;}
        var old = pan.x;
        pan.x += x;
        updateSceneTransforms();
        return old;
    }
    function scenePanY(y) {
        if (y === undefined || typeof y !== 'number') {return pan.y;}
        var old = pan.y;
        pan.y += y;
        updateSceneTransforms();
        return old;
    }
    function scenePanZ(z) {
        if (z === undefined || typeof z !== 'number') {return pan.z;}
        var old = pan.z;
        pan.z += z;
        updateSceneTransforms();
        return old;
    }
    function setScenePan(x, y, z) {
        var old = {
            x: setScenePanX(x),
            y: setScenePanY(y),
            z: setScenePanZ(z)
        };
        updateSceneTransforms();
        return old;
    }
    function setScenePanX(x) {
        if (x === undefined || typeof x !== 'number') {return pan.x;}
        var old = pan.x;
        pan.x = x;
        updateSceneTransforms();
        return old;
    }
    function setScenePanY(y) {
        if (y === undefined || typeof y !== 'number') {return pan.y;}
        var old = pan.y;
        pan.y = y;
        updateSceneTransforms();
        return old;
    }
    function setScenePanZ(z) {
        if (z === undefined || typeof z !== 'number') {return pan.z;}
        var old = pan.z;
        pan.z = z;
        updateSceneTransforms();
        return old;
    }
    function getScenePan() {
        return {
            x: pan.x,
            y: pan.y,
            z: pan.z
        };
    }
    function getScenePanX() {
        return pan.x;
    }
    function getScenePanY() {
        return pan.y;
    }
    function getScenePanZ() {
        return pan.z;
    }
    function sceneZoom(_zoom) {
        if (_zoom === undefined || typeof _zoom !== 'number') {
            return zoom;
        }
        var old = zoom;
        zoom += _zoom;
        updateSceneTransforms();
        return old;
    }
    function setSceneZoom(_zoom) {
        if (_zoom === undefined || typeof _zoom !== 'number') {
            return zoom;
        }
        zoom = _zoom;
        updateSceneTransforms();
        return zoom;
    }
    function getSceneZoom() {
        return zoom;
    }
    function attachScene(elem) {
        if (isAttached) {
            throw 'Cannot attach currently attached scene';
        }
        parentContainer = elem;
        elem.appendChild(sceneElement);
        isAttached = true;
    }
    function detachScene() {
        if (!isAttached) {
            throw 'Cannot detach currently detached scene';
        }
        isAttached = false;
        sceneElement.parentElement.removeChild(sceneElement);
    }
    function isSceneAttached() {
        return isAttached;
    }
    function getParentElement() {
        return parentContainer;
    }
    function EnableOrbit() {
        if (canOrbit) {return;}
        canOrbit = true;
    }
    function DisableOrbit() {
        if (!canOrbit) {return;}
        canOrbit = false;
    }
    function CanOrbit() {
        return canOrbit;
    }
    function enableScenePan() {
        if (canPan) {return;}
        canPan = true;
    }
    function disableScenePan() {
        if (!canPan) {return;}
        canPan = false;
    }
    function canScenePan() {
        return canPan;
    }
    function enableSceneZoom() {
        if (canZoom) {return;}
        canZoom = true;
    }
    function disableSceneZoom() {
        if (!canZoom) {return;}
        canZoom = false;
    }
    function canSceneZoom() {
        return canZoom;
    }
    function addVoxel(voxel) {
        cameraElement.appendChild(voxel.getDomElement());
        voxels.push(voxel);
        voxel.setParentScene(self);
        if (lightSources.length !== 0) {voxel.updateLightSource(lightSources);}
    }
    function removeVoxel(voxel) {
        cameraElement.removeChild(voxel.getDomElement());
        voxels.splice(voxels.indexOf(voxel), 1);
        voxel.removeParentScene();
    }
    function getVoxels() {
        return voxels.concat([]);
    }

    function addLightSource(source) {
        var index = lightSources.indexOf(source);
        if (index !== -1) {return false;}
        source.addEventListener('change', updateVoxelLighting);
        source.addEventListener('move', updateVoxelLighting);
        lightSources.push(source);
        updateVoxelLighting();
        return true;
    }
    function removeLightSource(source) {
        var index = lightSources.indexOf(source);
        if (index === -1) {return false;}
        source.removeEventListener('change', updateVoxelLighting);
        source.removeEventListener('move', updateVoxelLighting);
        lightSources.splice(index, 1);
        updateVoxelLighting();
        return true;
    }
    function getLightSources() {
        return lightSources;
    }
    function createSceneElement() {
        sceneElement = document.createElement('div');
        sceneElement.setAttribute('class', 'scene');
        zoomElement = document.createElement('div');
        zoomElement.setAttribute('class', 'zoom');
        cameraElement = document.createElement('div');
        cameraElement.setAttribute('class', 'camera');
        sceneElement.appendChild(zoomElement);
        zoomElement.appendChild(cameraElement);
    }
    function bindMouse() {
        sceneElement.addEventListener('mousedown', onMouseDown);
        sceneElement.addEventListener('mousewheel', onScroll);
        sceneElement.addEventListener('wheel', onScroll);
    }
    function onMouseDown(event) {
        mouse.start.x = event.x || event.clientX;
        mouse.start.y = event.y || event.clientY;
        mouse.current.x = event.x || event.clientX;
        mouse.current.y = event.y || event.clientY;
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }
    function onMouseUp() {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    }
    function onMouseMove(event) {
        mouse.lastMove.dx = (event.x || event.clientX) - mouse.current.x;
        mouse.lastMove.dy = (event.y || event.clientY) - mouse.current.y;
        mouse.current.x = event.x || event.clientX;
        mouse.current.y = event.y || event.clientY;
        if (canPan && mouse.shiftDown) {
            scenePan(mouse.lastMove.dx, mouse.lastMove.dy);
            updateSceneTransforms();
            self.triggerEvent('pan', {
                rotation: getRotation(),
                pan: getScenePan(),
                zoom: getSceneZoom(),
                target: self
            });
        } else if (canOrbit) {
            const rotations = 2;
            const ROTATION_SCALING_FACTOR = Math.PI * 2 * rotations;
            rotation.y += mouse.lastMove.dx / window.innerWidth * ROTATION_SCALING_FACTOR;
            rotation.x -= mouse.lastMove.dy / window.innerHeight * ROTATION_SCALING_FACTOR;
            updateSceneTransforms();
            self.triggerEvent('orbit', {
                rotation: getRotation(),
                pan: getScenePan(),
                zoom: getSceneZoom(),
                target: self
            });
        }
    }
    function onScroll(event) {
        if (!canZoom) {return;}
        const ZOOM_SCALING_FACTOR = 50;// larger --> slower zoom
        zoom += event.deltaY / ZOOM_SCALING_FACTOR;
        updateSceneTransforms();
        event.preventDefault();
        self.triggerEvent('zoom', {
            rotation: getRotation(),
            pan: getScenePan(),
            zoom: getSceneZoom(),
            target: self
        });
        return false;
    }
    function bindKeyboard() {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
    }
    function onKeyDown(event) {
        mouse.shiftDown = (event.keyCode === SHIFT_KEYCODE || event.which === SHIFT_KEYCODE);
    }
    function onKeyUp(event) {
        mouse.shiftDown = !(event.keyCode === SHIFT_KEYCODE || event.which === SHIFT_KEYCODE);
    }
    function updateSceneTransforms() {
        cameraElement.style.transform = 'rotateX(' + rotation.x + 'rad) rotateY(' + rotation.y + 'rad) rotateZ(' + rotation.z + 'rad)';
        zoomElement.style.transform = 'scale(' + zoom + ', ' + zoom + ')';
        zoomElement.style.transform += ' translateX(' + pan.x + 'px) translateY(' + pan.y + 'px) translateZ(' + pan.z + 'px)';
        updateVoxelLighting();
    }
    function updateVoxelLighting() {
        if (lightSources.length === 0) {return;}
        for (var i = 0, voxel; voxel = voxels[i++];) {voxel.updateLightSource(lightSources);}
    }
    (function Constructor() {
        eventListener(self);
        createSceneElement();
        bindMouse();
        bindKeyboard();
    }).apply(self, arguments);
}

},{"./eventListener":11}],9:[function(require,module,exports){
'use strict';

const eventListener = require('./eventListener');
const positioned    = require('./positioned');
const Mesh          = require('./Mesh');
const ImageFace     = require('./ImageFace');
const ColorFace     = require('./ColorFace');

module.exports = Voxel;

// EVENTS
//    onCubeClick
//    onTopClick
//    onBottomClick
//    onFrontClick
//    onBackClick
//    onLeftClick
//    onRightClick
//    onMeshChange
/**
 * @name Voxel
 * @constructor
**/
function Voxel() {
    let self = this;
    let undefined;
    let cubeElement;
    let animElement;
    let faces = {};
    let mesh;
    let dimension = 0;
    let parentScene;
    Object.assign(self, {
        setMesh,
        getMesh,
        animUp,
        animDown,
        addToScene,
        removeFromScene,
        setParentScene,
        removeParentScene,
        setDimension,
        getDimension,
        getDomElement,
        updateLightSource,
        clone
    });
    function setMesh(_mesh) {
        if (_mesh === undefined || _mesh.constructor !== Mesh) {
            return;
        }
        var old = mesh;
        if (!!old) {old.removeEventListener('change', onMeshChange);}
        mesh = _mesh;
        mesh.addEventListener('change', onMeshChange);
        applyMesh();
        return old;
    }
    function getMesh() {
        return mesh;
    }
    function animUp(scene) {
        if (scene === undefined) {
            throw 'Scene required to add voxel to scene';
        }
        parentScene = scene;
        animElement.setAttribute('class', 'anim up');
        appendToScene();
    }
    function animDown(scene) {
        if (scene === undefined) {
            throw 'Scene required to add voxel to scene';
        }
        parentScene = scene;
        animElement.setAttribute('class', 'anim down');
        appendToScene();
    }
    function addToScene(scene) {
        if (scene === undefined) {
            throw 'Scene required to add voxel to scene';
        }
        parentScene = scene;
        animElement.setAttribute('class', 'anim');
        appendToScene();
    }
    function removeFromScene() {
        if (parentScene === undefined) {
            return;
        }
        parentScene.remove(self);
    }
    function setParentScene(scene) {
        parentScene = scene;
    }
    function removeParentScene() {
        parentScene = undefined;
    }
    function setDimension(dim) {
        if (dim === undefined || typeof dim !== 'number') {
            return dimension;
        }
        var old = dimension;
        dimension = dim;
        return old;
    }
    function getDimension() {
        return dimension;
    }
    function getDomElement() {
        return cubeElement;
    }
    function clone() {
        return new Voxel(self.getPositionX(), self.getPositionY(), self.getPositionZ(), dimension, {mesh});
    }
    function updateLightSource(lightSources) {
        var front = 1;
        var back = 1;
        var left = 1;
        var right = 1;
        var top = 1;
        var bottom = 1;
        for (var i = 0, lightSource; lightSource = lightSources[i++];) {
            var brightness = lightSource.getBrightness();
            var scale = brightness[1] - brightness[0];
            var shift = 1 - brightness[1];
            var x = lightSource.getPositionX();
            var y = lightSource.getPositionY();
            var z = lightSource.getPositionZ();
            var result;
            var angle;
            var percent;
            var opacity;
            if (back > 0) {
                result = angleFromLightSource(x, y, z, {A: 0, B: 0, C: -1});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                back = Math.max(0, back - (1 - opacity));
            }
            if (front > 0) {
                result = angleFromLightSource(x, y, z, {A: 0, B: 0, C: 1});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                front = Math.max(0, front - (1 - opacity));
            }
            if (left > 0) {
                result = angleFromLightSource(x, y, z, {A: -1, B: 0, C: 0});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                left = Math.max(0, left - (1 - opacity));
            }
            if (right > 0) {
                result = angleFromLightSource(x, y, z, {A: 1, B: 0, C: 0});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                right = Math.max(0, right - (1 - opacity));
            }
            if (top > 0) {
                result = angleFromLightSource(x, y, z, {A: 0, B: 1, C: 0});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                top = Math.max(0, top - (1 - opacity));
            }
            if (bottom > 0) {
                result = angleFromLightSource(x, y, z, {A: 0, B: -1, C: 0});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                bottom = Math.max(0, bottom - (1 - opacity));
            }
        }
        faces.front.shader.style.opacity = front;
        faces.back.shader.style.opacity = back;
        faces.left.shader.style.opacity = left;
        faces.right.shader.style.opacity = right;
        faces.top.shader.style.opacity = top;
        faces.bottom.shader.style.opacity = bottom;
    }
    // changes how light something is while in the light and how dark something is while in the dark
    function applyLightingCurve(percent) {
        return Math.pow(percent, 3);
    }
    function angleFromLightSource(x, y, z, plane) {
        var rotationMatrix = generateRotationMatrix(parentScene.getRotationX(), -parentScene.getRotationY(), parentScene.getRotationZ());
        var point = {x, y, z};
        var rotated = rotate(point, rotationMatrix);
        rotated = {
            x: rotated.x - self.getPositionX() - plane.A * self.getDimension() / 2,
            y: rotated.y - self.getPositionY() - plane.B * self.getDimension() / 2,
            z: rotated.z - self.getPositionZ() - plane.C * self.getDimension() / 2
        };
        const {abs, asin, pow, sqrt} = Math;
        var distance = sqrt(pow(rotated.x, 2) + pow(rotated.y, 2) + pow(rotated.z, 2));
        var direction = abs(plane.C) === 1 ? plane.C * rotated.z : (Math.abs(plane.B) === 1 ? plane.B * rotated.y : plane.A * rotated.x);
        var angle = asin(abs(rotated.x * plane.A + rotated.y * plane.B + rotated.z * plane.C) / (sqrt(pow(rotated.x, 2) + pow(rotated.y, 2) + pow(rotated.z, 2))));
        return {angle, direction, distance};
    }
    function generateRotationMatrix(rotX, rotY, rotZ) {
        var xRotation = [
            [1, 0, 0],
            [0, Math.cos(rotX), -Math.sin(rotX)],
            [0, Math.sin(rotX), Math.cos(rotX)]
        ];
        var yRotation = [
            [Math.cos(rotY), 0, Math.sin(rotY)],
            [0, 1, 0],
            [-Math.sin(rotY), 0, Math.cos(rotY)]
        ];
        var zRotation = [
            [Math.cos(rotZ), -Math.sin(rotZ), 0],
            [Math.sin(rotZ), Math.cos(rotZ), 0],
            [0, 0, 1]
        ];
        return multiplyMatrices(multiplyMatrices(zRotation, yRotation), xRotation);
    }
    function rotate(point, rotationMatrix) {
        var columnVector = [[point.x], [point.y], [point.z]];
        var rotated = multiplyMatrices(rotationMatrix, columnVector);
        return {
            x: rotated[0][0],
            y: rotated[1][0],
            z: rotated[2][0]
        };
    }
    function multiplyMatrices(a, b) {
        var aNumRows = a.length;
        var aNumCols = a[0].length;
        var bNumCols = b[0].length;
        var m = new Array(aNumRows); // initialize array of rows
        for (var r = 0; r < aNumRows; ++r) {
            m[r] = new Array(bNumCols); // initialize the current row
            for (var c = 0; c < bNumCols; ++c) {
                m[r][c] = 0; // initialize the current cell
                for (var i = 0; i < aNumCols; ++i) {
                    m[r][c] += a[r][i] * b[i][c];
                }
            }
        }
        return m;
    }
    function onMeshChange() {
        applyMesh();
        self.triggerEvent('MeshChange', {target: self, mesh: mesh});
    }
    function applyMesh() {
        var _mesh = mesh.getFaces();
        /* eslint-disable guard-for-in */
        for (var label in faces) {
            var faceMesh = _mesh[label];
            if (faceMesh instanceof ImageFace) {
                faces[label].src = faceMesh.getSource();
                faces[label].removeAttribute('class');
            } else if (faceMesh instanceof ColorFace) {
                var faceElem = faces[label].parentElement;
                faceElem.style.background = '#' + faceMesh.getHex();
                faces[label].setAttribute('class', 'colored');
            }
        }
        /* eslint-enable guard-for-in */
    }
    function createCube() {
        cubeElement = createElement('div', 'cube');
        animElement = createElement('div', 'anim');
        createFace('top');
        createFace('bottom');
        createFace('front');
        createFace('back');
        createFace('left');
        createFace('right');
        cubeElement.appendChild(animElement);
    }
    function createFace(label) {
        var wrapper = createElement('div', 'face ' + label);
        wrapper.style.width = dimension + 'px';
        wrapper.style.height = dimension + 'px';
        wrapper.style.marginLeft = -dimension / 2 + 'px';
        wrapper.style.marginTop = -dimension / 2 + 'px';
        switch (label) {
            case 'top' :
                wrapper.style.transform = 'rotateX(90deg) translateZ(' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onTopClicked);
                break;
            case 'bottom':
                wrapper.style.transform = 'rotateX(90deg) translateZ(-' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onBottomClicked);
                break;
            case 'left' :
                wrapper.style.transform = 'rotateY(90deg) translateZ(-' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onLeftClicked);
                break;
            case 'right' :
                wrapper.style.transform = 'rotateY(90deg) translateZ(' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onRightClicked);
                break;
            case 'front' :
                wrapper.style.transform = 'translateZ(' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onFrontClicked);
                break;
            case 'back' :
                wrapper.style.transform = 'translateZ(-' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onBackClicked);
                break;
            default:
                break;
        }
        wrapper.addEventListener('contextmenu', onVoxelClick);
        var image = createElement('img', '');
        faces[label] = image;
        var shader = createElement('div', 'shader');
        faces[label].shader = shader;
        wrapper.appendChild(image);
        wrapper.appendChild(shader);
        animElement.appendChild(wrapper);
    }
    function createElement(type, cls) {
        var elem = document.createElement(type);
        elem.setAttribute('class', cls);
        return elem;
    }
    function updatePosition() {
        var position = self.getPosition();
        cubeElement.style.transform = 'translate3d(' + position.x + 'px, ' + -position.y + 'px, ' + position.z + 'px)';
    }
    function appendToScene() {
        parentScene.add(self);
    }
    function onVoxelClick(event) {
        event.preventDefault();
        self.triggerEvent('VoxelClick', {
            target: self
        });
        return false;
    }
    function onTopClicked() {
        self.triggerEvent('TopClick', {
            target: self
        });
    }
    function onBottomClicked() {
        self.triggerEvent('BottomClick', {
            target: self
        });
    }
    function onLeftClicked() {
        self.triggerEvent('LeftClick', {
            target: self
        });
    }
    function onRightClicked() {
        self.triggerEvent('RightClick', {
            target: self
        });
    }
    function onFrontClicked() {
        self.triggerEvent('FrontClick', {
            target: self
        });
    }
    function onBackClicked() {
        self.triggerEvent('BackClick', {
            target: self
        });
    }
    (function Constructor(x, y, z, dim, options) {
        positioned(eventListener(self));
        self.addEventListener('move', updatePosition);
        setDimension(dim);
        createCube();
        self.setPosition(x, y, z);
        setMesh(new Mesh());
        if (options !== undefined && options.mesh !== undefined) {
            setMesh(options.mesh);
        }
    }).apply(self, arguments);
}

},{"./ColorFace":2,"./ImageFace":4,"./Mesh":6,"./eventListener":11,"./positioned":13}],10:[function(require,module,exports){
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

},{"./Mesh":6,"./Voxel":9}],11:[function(require,module,exports){
'use strict';

module.exports = function(obj) {
    let self = obj || new Function();
    let listeners = {};
    self.addEventListener = AddEventListener;
    self.removeEventListener = RemoveEventListener;
    self.triggerEvent = TriggerEvent;
    function AddEventListener(eventName, funct) {
        eventName = 'on' + eventName;
        if (typeof funct !== 'function') {return;}
        if (!listeners[eventName]) {listeners[eventName] = [];}
        if (listeners[eventName].indexOf(funct) > -1) {return;}
        listeners[eventName].push(funct);
    }
    function RemoveEventListener(eventName, funct) {
        eventName = 'on' + eventName;
        if (!listeners[eventName]) {return;}
        listeners[eventName].splice(listeners[eventName].indexOf(funct), 1);
    }
    function TriggerEvent(eventName, event) {
        eventName = 'on' + eventName;
        var listenerArray = listeners[eventName];
        if (!listenerArray) {return;}
        for (var i = 0, listener; listener = listenerArray[i++];) {listener(event);}
    }
    return self;
};

},{}],12:[function(require,module,exports){
'use strict';

require('../dist/voxelcss.css');
const ColorFace     = require('./ColorFace');
const Editor        = require('./Editor');
const eventListener = require('./eventListener');
const ImageFace     = require('./ImageFace');
const LightSource   = require('./LightSource');
const Mesh          = require('./Mesh');
const Meshes        = require('./Meshes');
const Positioned    = require('./positioned');
const Scene         = require('./Scene');
const Voxel         = require('./Voxel');
const World         = require('./World');

module.exports = {
    ColorFace,
    Editor,
    eventListener,
    ImageFace,
    LightSource,
    Mesh,
    Meshes,
    Positioned,
    Scene,
    Voxel,
    World
};

},{"../dist/voxelcss.css":1,"./ColorFace":2,"./Editor":3,"./ImageFace":4,"./LightSource":5,"./Mesh":6,"./Meshes":7,"./Scene":8,"./Voxel":9,"./World":10,"./eventListener":11,"./positioned":13}],13:[function(require,module,exports){
'use strict';

// EVENTS
//   onmove
module.exports = function(obj) {
    let self = obj || new Function();
    let position = {x: 0, y: 0, z: 0};
    let canTriggerEvent = true;
    Object.assign(self, {
        setPosition,
        setPositionX,
        setPositionY,
        setPositionZ,
        getPosition,
        getPositionX,
        getPositionY,
        getPositionZ,
        translate,
        translateX,
        translateY,
        translateZ
    });
    function setPosition(x, y, z) {
        canTriggerEvent = false;
        var old = {
            x: setPositionX(x),
            y: setPositionY(y),
            z: setPositionZ(z)
        };
        canTriggerEvent = true;
        self.triggerEvent('move');
        return old;
    }
    function setPositionX(x) {
        if (x === undefined || typeof x !== 'number') {return position.x;}
        var old = position.x;
        position.x = x;
        if (canTriggerEvent) {self.triggerEvent('move');}
        return old;
    }
    function setPositionY(y) {
        if (y === undefined || typeof y !== 'number') {return position.y;}
        var old = position.y;
        position.y = y;
        if (canTriggerEvent) {self.triggerEvent('move');}
        return old;
    }
    function setPositionZ(z) {
        if (z === undefined || typeof z !== 'number') {return position.z;}
        var old = position.z;
        position.z = z;
        if (canTriggerEvent) {self.triggerEvent('move');}
        return old;
    }
    function getPosition() {
        return {
            x: position.x,
            y: position.y,
            z: position.z
        };
    }
    function getPositionX() {
        return position.x;
    }
    function getPositionY() {
        return position.y;
    }
    function getPositionZ() {
        return position.z;
    }
    function translate(x, y, z) {
        canTriggerEvent = false;
        var old = {
            x: translateX(x),
            y: translateY(y),
            z: translateZ(z)
        };
        canTriggerEvent = true;
        self.triggerEvent('move');
        return old;
    }
    function translateX(x) {
        if (x === undefined || typeof x !== 'number') {return position.x;}
        return setPositionX(x + position.x);
    }
    function translateY(y) {
        if (y === undefined || typeof y !== 'number') {return position.y;}
        return setPositionY(y + position.y);
    }
    function translateZ(z) {
        if (z === undefined || typeof z !== 'number') {return position.z;}
        return setPositionZ(z + position.z);
    }
    return self;
};

},{}],14:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

var styleElementsInsertedAtTop = [];

var insertStyleElement = function(styleElement, options) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];

    options = options || {};
    options.insertAt = options.insertAt || 'bottom';

    if (options.insertAt === 'top') {
        if (!lastStyleElementInsertedAtTop) {
            head.insertBefore(styleElement, head.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
            head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
        } else {
            head.appendChild(styleElement);
        }
        styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === 'bottom') {
        head.appendChild(styleElement);
    } else {
        throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
    }
};

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes, extraOptions) {
        extraOptions = extraOptions || {};

        var style = document.createElement('style');
        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }

        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        } else if (style.styleSheet) { // for IE8 and below
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        }
    }
};

},{}]},{},[12])(12)
});