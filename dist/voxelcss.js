(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.voxelcss = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var css = ".voxelcss-scene {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  cursor: move;\n}\n.voxelcss-scene .camera,\n.voxelcss-scene .zoom {\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  overflow: visible;\n}\n.voxelcss-cube,\n.voxelcss-scene .camera,\n.voxelcss-scene .zoom {\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.voxelcss-cube:hover img {\n  visibility: hidden!important;\n}\n.voxelcss-cube:hover .voxelcss-face {\n  background: rgba(0,0,0,.3)!important;\n}\n.voxelcss-cube:hover .voxelcss-face .shader {\n  opacity: 0!important;\n}\n.voxelcss-cube .animated-down,\n.voxelcss-cube .animated-up {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.voxelcss-cube .animated-up {\n  -webkit-animation: a 1s linear both;\n  animation: a 1s linear both;\n}\n.voxelcss-cube .animated-down {\n  -webkit-animation: b 1s linear both;\n  animation: b 1s linear both;\n}\n.voxelcss-face {\n  display: block;\n  position: absolute;\n  outline: none;\n  border: none;\n  margin-left: -18px;\n  margin-top: -18px;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n}\n.voxelcss-face img {\n  width: 100%;\n  height: 100%;\n}\n.voxelcss-face img.colored {\n  visibility: hidden;\n}\n.voxelcss-face .shader {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n}\n@-webkit-keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@-webkit-keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n"; (require("browserify-css").createStyle(css, { "href": "dist/voxelcss.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":15}],2:[function(require,module,exports){
/**
 * @module core/ColorFace
 * @requires events
**/
'use strict';

const {assign} = Object;
const {isNumber, isUndefined, hexToRgb, rgbToHex} = require('./common');
const events = require('./events');

module.exports = ColorFace;

/**
 * @name ColorFace
 * @constructor
 * @param {(string|number|object)} data Color data
 * @fires module:core/ColorFace~change
**/
function ColorFace() {
    let color = {r: 0, g: 0, b: 0, a: 1};
    let self = assign(this, events, {
        setColor,
        getColor: () => color,
        getHex: () => rgbToHex(color),
        clone: () => new ColorFace(color),
        serialize: () => JSON.stringify(color)
    });
    setColor(...arguments);
    function setColor() {
        let firstArgument = arguments[0];
        let type = typeof firstArgument;
        let setColorFrom = setColorFromRGBA;
        let data = firstArgument;
        if (arguments.length === 1 && type !== 'number') {
            if (type === 'string') {
                setColorFrom = val => setColor(hexToRgb(val));
            }
        } else {
            let [r, g, b, a] = arguments;
            data = {r, g, b, a};
        }
        setColorFrom(data);
    }
    function setColorFromRGBA(data) {
        let {r, g, b, a} = data;
        if ([r, g, b].every(isNumber)) {
            self.trigger('change', {target: self});
            return assign(color, {r, g, b, a: isNumber(a) ? a : 1});
        } else if ([r, g, b].every(isUndefined)) {
            return color;
        } else {
            throw 'Face color RGB values must be numbers';
        }
    }
}
/**
 * @function loadFromSerial
 * @memberof module:core/ColorFace~ColorFace
 * @param {string} data Serialized data (JSON format string)
 * @returns {module:core/ColorFace~ColorFace} New ColorFace instance
**/
ColorFace.loadFromSerial = function LoadFromSerial(data) {
    var json = JSON.parse(data);
    return new ColorFace(json);
};

},{"./common":10,"./events":11}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
/**
 * @module core/ImageFace
 * @requires events
**/
'use strict';

const {assign} = Object;
const events = require('./events');
const EMPTYGIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

module.exports = ImageFace;

/**
 * @name ImageFace
 * @constructor
 * @fires module:core/ImageFace~change
 * @param {string} image base64 encoded image string
**/
function ImageFace(image) {
    let source = EMPTYGIF;
    let getSource = () => source;
    let self = assign(this, events, {
        setSource,
        getSource,
        serialize: getSource,
        clone: () => new ImageFace(source)
    });
    setSource(image);
    function setSource(image) {
        if (image) {
            source = image;
            self.trigger('change', {target: self});
        }
        return source;
    }
}
/**
 * @function loadFromSerial
 * @memberof module:core/ImageFace~ImageFace
 * @param {string} image Serialized image data (base64 format string)
 * @returns {module:core/ImageFace~ImageFace} New ImageFace instance
**/
ImageFace.loadFromSerial = function LoadFromSerial(image) {
    return new ImageFace(image);
};

},{"./events":11}],5:[function(require,module,exports){
/**
 * @module core/LightSource
 * @requires common
 * @requires events
 * @requires positioned
**/
'use strict';

const {assign}   = Object;
const {isNumber} = require('./common');
const events     = require('./events');
const positioned = require('./positioned');

const DEFAULT_DARK = 0.2;
const DEFAULT_LIGHT = 1;

/**
 * @name LightSource
 * @constructor
 * @param {number[]} position Light source position --> [x, y, z]
 * @param {number} distance Light source distance from scene
 * @param {number} [dark=0.2] darkness --> [0, 1]
 * @param {number} [light=1] lightness --> [0, 1]
**/
module.exports = function(position, distance, dark = DEFAULT_DARK, light = DEFAULT_LIGHT) {
    let travelDistance = 500;
    let maxLight = 1;
    let maxDark = 0;
    let getBrightness = () => [maxDark, maxLight];
    let self = assign(positioned(assign(this, events)), {
        setBrightness,
        getBrightness,
        setTravelDistance,
        getTravelDistance: () => travelDistance
    });
    self
        .setPosition(position)
        .setTravelDistance(distance)
        .setBrightness(dark, light);
    function setTravelDistance(distance) {
        if (isNumber(distance)) {
            travelDistance = distance;
            self.trigger('change', {target: self});
        }
        return self;
    }
    function setBrightness(dark, light) {
        if (isNumber(light)) {
            maxLight = light;
        }
        if (isNumber(dark)) {
            maxDark = dark;
        }
        [dark, light].some(isNumber) && self.trigger('change', {target: self});
        return self;
    }
};

},{"./common":10,"./events":11,"./positioned":14}],6:[function(require,module,exports){
/**
 * @module core/Mesh
 * @requires common
 * @requires events
 * @requires core/ImageFace
 * @requires core/ColorFace
**/
'use strict';

const {assign} = Object;
const {
    constant,
    findKeyWithValue,
    mapValues
} = require('./common');
const events    = require('./events');
const ImageFace = require('./ImageFace');
const ColorFace = require('./ColorFace');

const FACETYPES = {
    image: ImageFace,
    color: ColorFace
};

module.exports = Mesh;

/**
 * @name Mesh
 * @constructor
 * @fires module:core/Mesh~change
 * @param {object} faces Face data
**/
function Mesh(faces) {
    let front;
    let back;
    let left;
    let right;
    let top;
    let bottom;
    let canTriggerEvent = true;
    let isValid = face => (face !== undefined && containsFaceType(face));
    let self = assign(this, events, {
        setFront,
        setBack,
        setLeft,
        setRight,
        setTop,
        setBottom,
        setFaces,
        getFaces,
        serialize,
        getFront: () => front,
        getBack: () => back,
        getLeft: () => left,
        getRight: () => right,
        getTop: () => top,
        getBottom: () => bottom
    });
    setFaces(faces || new ImageFace());
    function getFaceKeyByType(value) {
        return findKeyWithValue(FACETYPES, value);
    }
    function containsFaceType(face) {
        return !!getFaceKeyByType(face.constructor);
    }
    function setFront(face) {
        if (isValid(face)) {
            front = face;
            front.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setBack(face) {
        if (isValid(face)) {
            back = face;
            back.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setLeft(face) {
        if (isValid(face)) {
            left = face;
            left.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setRight(face) {
        if (isValid(face)) {
            right = face;
            right.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setTop(face) {
        if (isValid(face)) {
            top = face;
            top.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setBottom(face) {
        if (isValid(face)) {
            bottom = face;
            bottom.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setFaces(faces) {
        var old = getFaces();
        if (faces) {
            if (containsFaceType(faces)) {
                faces = mapValues(getFaces(), constant(faces));
            }
            canTriggerEvent = false;
            let {front, back, left, right, top, bottom} = faces;
            self
                .setFront(front)
                .setBack(back)
                .setLeft(left)
                .setRight(right)
                .setTop(top)
                .setBottom(bottom);
            triggerChangeEvent();
            canTriggerEvent = true;
        }
        return old;
    }
    function getFaces() {
        return {front, back, left, right, top, bottom};
    }
    function serialize() {
        return JSON.stringify(mapValues(getFaces(), serializeFace));
    }
    function serializeFace(face) {
        return getFaceKeyByType(face.constructor) + '(' + face.serialize() + ')';
    }
    function onFaceChangeEvent() {
        triggerChangeEvent();
    }
    function triggerChangeEvent() {
        let target = self;
        let faces = getFaces();
        self.trigger('change', {target, faces});
    }
}
/**
 * @function loadFromSerial
 * @memberof module:core/Mesh~Mesh
 * @param {string} data Serialized data (JSON format string)
 * @returns {module:core/Mesh~Mesh} New Mesh instance
**/
Mesh.loadFromSerial = function LoadFromSerial(data) {
    return new Mesh(mapValues(JSON.parse(data), loadFaceFromSerial));
};
function loadFaceFromSerial(compositeSerial) {
    let index = compositeSerial.indexOf('(');
    let type = compositeSerial.slice(0, index);
    let typeSerial = compositeSerial.slice(index + 1, -1);
    return FACETYPES[type].loadFromSerial(typeSerial);
}

},{"./ColorFace":2,"./ImageFace":4,"./common":10,"./events":11}],7:[function(require,module,exports){
/**
 * @module core/Scene
 * @description Basically a camera that can rotate, pan, zoom and contain voxels
 * @requires events
**/
'use strict';

const {assign} = Object;
const {getDistance, isNumber, isShiftKey, not} = require('./common');
const events = require('./events');

const ZOOM_SCALING_FACTOR = 500;// larger --> slower zoom
const ZOOM_SCALING_FACTOR_MOBILE = 100;// larger --> slower zoom

const getX = e => (e.x || e.clientX || e.touches[0].pageX);
const getY = e => (e.y || e.clientY || e.touches[0].pageY);

// let setDebugText = val => (document.getElementById('debug').textContent = val);

module.exports = Scene;

/**
 * @name Scene
 * @constructor
 * @fires module:core/Scene~rotate
 * @fires module:core/Scene~pan
 * @fires module:core/Scene~zoom
 * @example <caption>Add a light source to a scene</caption>
 * const Voxelcss = require('voxelcss');
 * let scene = new Voxelcss.Scene();
 * let position = [300, 300, 300];
 * let distance = 750;
 * let source = new Voxelcss.LightSource(position, distance);
 * scene.attach(document.body);
 * scene.addLightSource(source);
**/
function Scene() {
    let parentContainer;
    let sceneElement;
    let zoomElement;
    let cameraElement;
    let isAttached = false;
    let x = 0;
    let y = 0;
    let z = 0;
    let rotation = {x, y, z};
    let _pan = {x, y, z};
    let _zoom = 1;
    let mouse = {
        current: {x, y},
        shiftDown: false
    };
    let initialPinchDistance = 0;
    let canRotate = true;
    let canPan = true;
    let canZoom = true;
    let lightSources = [];
    let voxels = [];
    let getVoxels = () => voxels;
    let getRotation = () => rotation;
    let getLightSources = () => lightSources;
    let self = assign(this, events, {
        attach,
        detach,
        add, // voxel
        remove, // voxel
        getVoxels,
        pan,
        setPan,
        getPan,
        rotate,
        setRotation,
        getRotation,
        zoom,
        setZoom,
        getZoom,
        addLightSource,
        getLightSources,
        removeLightSource,
        canRotate: () => canRotate,
        canPan: () => canPan,
        canZoom: () => canZoom,
        enableRotate: () => (canRotate = true),
        enablePan: () => (canPan = true),
        enableZoom: () => (canZoom = true),
        disableRotate: () => (canRotate = false),
        disablePan: () => (canPan = false),
        disableZoom: () => (canZoom = false),
        isAttached: () => isAttached,
        getRotationX: () => rotation.x,
        getRotationY: () => rotation.y,
        getRotationZ: () => rotation.z,
        rotateX: val => rotateDimension('x', val),
        rotateY: val => rotateDimension('y', val),
        rotateZ: val => rotateDimension('z', val),
        setRotationX: val => setSceneDimensionRotation('x', val),
        setRotationY: val => setSceneDimensionRotation('y', val),
        setRotationZ: val => setSceneDimensionRotation('z', val),
        panX: val => panDimension('x', val),
        panY: val => panDimension('y', val),
        panZ: val => panDimension('z', val),
        setPanX: val => setSceneDimensionPan('x', val),
        setPanY: val => setSceneDimensionPan('y', val),
        setPanZ: val => setSceneDimensionPan('z', val),
        getElement: () => sceneElement,
        getParentElement: () => parentContainer,
        getInteractionState: val => (val ? mouse[val] : mouse),
        bind: () => {
            bindMouse();
            bindKeyboard();
        },
        unbind: () => {
            unbindMouse();
            unbindKeyboard();
        }
    });
    createSceneElement();
    bindMouse();
    bindKeyboard();

    function rotate(x, y, z) {
        rotateDimension('x', x);
        rotateDimension('y', y);
        rotateDimension('z', z);
        return self;
    }
    function setRotation(x, y, z) {
        setSceneDimensionRotation('x', x);
        setSceneDimensionRotation('y', y);
        setSceneDimensionRotation('z', z);
        updateSceneTransforms();
        return self;
    }
    function rotateDimension(dim, val) {
        if (isNumber(val)) {
            rotation[dim] += val;
            updateSceneTransforms();
        }
        return self;
    }
    function setSceneDimensionRotation(dim, val) {
        if (isNumber(val)) {
            rotation[dim] = val;
            updateSceneTransforms();
        }
        return self;
    }
    function pan(x, y, z) {
        panDimension('x', x);
        panDimension('y', y);
        panDimension('z', z);
    }
    function setPan(x, y, z) {
        setSceneDimensionPan('x', x);
        setSceneDimensionPan('y', y);
        setSceneDimensionPan('z', z);
        updateSceneTransforms();
        return self;
    }
    function panDimension(dim, val) {
        if (isNumber(val)) {
            _pan[dim] += val;
            updateSceneTransforms();
        }
        return self;
    }
    function setSceneDimensionPan(dim, val) {
        if (isNumber(val)) {
            _pan[dim] = val;
            updateSceneTransforms();
        }
        return self;
    }
    function getPan() {
        return _pan;
    }
    function zoom(val) {
        if (isNumber(val)) {
            _zoom += val;
            updateSceneTransforms();
        }
        return self;
    }
    function setZoom(val) {
        if (isNumber(val)) {
            _zoom = val;
            updateSceneTransforms();
        }
        return self;
    }
    function getZoom() {
        return _zoom;
    }
    function attach(elem) {
        if (!isAttached) {
            parentContainer = elem;
            elem.appendChild(sceneElement);
            isAttached = true;
        } else {
            throw 'Cannot attach currently attached scene';
        }
    }
    function detach() {
        if (isAttached) {
            isAttached = false;
            let {parentElement} = sceneElement;
            parentElement && parentElement.removeChild(sceneElement);
        } else {
            throw 'Cannot detach currently detached scene';
        }
    }
    function add(voxel) {
        cameraElement.appendChild(voxel.getDomElement());
        voxels.push(voxel);
        voxel.setParentScene(self);
        if (lightSources.length !== 0) {voxel.updateLightSource(lightSources);}
    }
    function remove(voxel) {
        cameraElement.removeChild(voxel.getDomElement());
        voxels.splice(voxels.indexOf(voxel), 1);
        voxel.removeParentScene();
    }
    function addLightSource(source) {
        var index = lightSources.indexOf(source);
        if (index !== -1) {return false;}
        source.on('change move', updateVoxelLighting);
        lightSources.push(source);
        updateVoxelLighting();
        return true;
    }
    function removeLightSource(source) {
        var index = lightSources.indexOf(source);
        if (index === -1) {return false;}
        source.off('change move');
        lightSources.splice(index, 1);
        updateVoxelLighting();
        return true;
    }
    function createSceneElement() {
        sceneElement = document.createElement('div');
        zoomElement = document.createElement('div');
        cameraElement = document.createElement('div');
        sceneElement.setAttribute('class', 'voxelcss-scene');
        zoomElement.setAttribute('class', 'zoom');
        cameraElement.setAttribute('class', 'camera');
        sceneElement.appendChild(zoomElement);
        zoomElement.appendChild(cameraElement);
    }
    function onMouseDown(event) {
        updateMousePosition(event);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }
    function onMouseUp() {
        unbindMouse();
    }
    function onMouseMove(event) {
        let x = getX(event);
        let y = getY(event);
        let dx = x - mouse.current.x;
        let dy = y - mouse.current.y;
        mouse.current = {x, y};
        if (canPan && mouse.shiftDown) {
            pan(dx, dy);
            updateSceneTransforms();
            self.trigger('pan', getData());
        } else if (canRotate) {
            const rotations = 2;
            const ROTATION_SCALING_FACTOR = Math.PI * 2 * rotations;
            rotation.y += dx / window.innerWidth * ROTATION_SCALING_FACTOR;
            rotation.x -= dy / window.innerHeight * ROTATION_SCALING_FACTOR;
            updateSceneTransforms();
            self.trigger('rotate', getData());
        }
    }
    function onTouchStart(event) {
        event.preventDefault();
        const touches = event.touches;
        updateMousePosition(event);
        window.addEventListener('touchmove', onTouchMove, {passive: false});
        if (touches.length > 1) {
            initialPinchDistance = getTouchDistance(touches);
        }
    }
    function onTouchMove(event) {
        event.preventDefault();
        let x = getX(event);
        let y = getY(event);
        let dx = x - mouse.current.x;
        let dy = y - mouse.current.y;
        mouse.current = {x, y};
        const touches = event.touches;
        if ((touches.length === 1) && canRotate) {
            const rotations = 2;
            const ROTATION_SCALING_FACTOR = Math.PI * 2 * rotations;
            rotation.y += dx / window.innerWidth * ROTATION_SCALING_FACTOR;
            rotation.x -= dy / window.innerHeight * ROTATION_SCALING_FACTOR;
            updateSceneTransforms();
            self.trigger('rotate', getData());
        } else if ((touches.length === 2) && canZoom) {
            const currentPinchDistance = getTouchDistance(touches);
            const zoomIn = (currentPinchDistance - initialPinchDistance) > 0;
            const sign = zoomIn ? 1 : -1;
            zoom(sign * currentPinchDistance / (initialPinchDistance * ZOOM_SCALING_FACTOR_MOBILE));
            initialPinchDistance = currentPinchDistance;
        } else if ((touches.length === 3) && canPan) {
            pan(dx, dy);
            updateSceneTransforms();
            self.trigger('pan', getData());
        }
    }
    function onScroll(event) {
        if (canZoom) {
            zoom(event.deltaY / ZOOM_SCALING_FACTOR);
            event.preventDefault();
            self.trigger('zoom', getData());
        }
        return false;
    }
    function bindMouse() {
        sceneElement.addEventListener('mousedown', onMouseDown);
        sceneElement.addEventListener('mousewheel', onScroll);
        sceneElement.addEventListener('wheel', onScroll);
        sceneElement.addEventListener('touchstart', onTouchStart);
    }
    function bindKeyboard() {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
    }
    function unbindMouse() {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    }
    function unbindKeyboard() {
        window.removeEventListener('keydown', onKeyDown);
        window.removeEventListener('keyup', onKeyUp);
    }
    function onKeyDown(event) {
        mouse.shiftDown = isShiftKey(event);
    }
    function onKeyUp(event) {
        mouse.shiftDown = not(isShiftKey)(event);
    }
    function getData() {
        return {
            rotation: getRotation(),
            pan: getPan(),
            zoom: getZoom(),
            target: self
        };
    }
    function getTouchDistance(touches) {
        const methods = [getX, getY];
        const [x0, y0] = methods.map(method => method(touches.item(0)));
        const [x1, y1] = methods.map(method => method(touches.item(1)));
        const dX = x1 - x0;
        const dY = y1 - y0;
        return getDistance(dX, dY);
    }
    function updateSceneTransforms() {
        let {x, y, z} = getRotation();
        let zoom = getZoom();
        let pan = getPan();
        cameraElement.style.transform = `rotateX(${x}rad) rotateY(${y}rad) rotateZ(${z}rad)`;
        zoomElement.style.transform = `scale(${zoom}, ${zoom}) translateX(${pan.x}px) translateY(${pan.y}px) translateZ(${pan.z}px)`;
        updateVoxelLighting();
    }
    function updateVoxelLighting() {
        if (lightSources.length !== 0) {
            voxels.forEach(voxel => voxel.updateLightSource(lightSources));
        }
    }
    function updateMousePosition(event) {
        const x = getX(event);
        const y = getY(event);
        mouse.current = {x, y};
    }
}

},{"./common":10,"./events":11}],8:[function(require,module,exports){
/**
 * @module core/Voxel
 * @requires common
 * @requires events
 * @requires positioned
 * @requires core/Mesh
 * @requires core/ImageFace
 * @requires core/ColorFace
 **/
'use strict';

const {assign, keys} = Object;
const {abs, asin, max, min, PI, pow, sqrt} = Math;
const {
    generateRotationMatrix,
    isNumber,
    isUndefined,
    multiplyMatrices
} = require('./common');
const events     = require('./events');
const positioned = require('./positioned');
const Mesh       = require('./Mesh');
const ImageFace  = require('./ImageFace');
const ColorFace  = require('./ColorFace');

const LONG_PRESS_DURATION = 250;
const DEFAULT_SIZE = 50;
const SIDES = ['top', 'bottom', 'front', 'back', 'left', 'right'];
const pixels = val => `${val}px`;
const translate = val => `translateZ(${val}px)`;
const transformX = val => `rotateX(90deg) ${translate(val)}`;
const transformY = val => `rotateY(90deg) ${translate(val)}`;

module.exports = Voxel;

/**
 * @name Voxel
 * @constructor
 * @param {number[]} [position] [x, y, z] of voxel
 * @param {number} [size=50] Size of voxel
 * @param {object} [options={}] Options to customize voxel
 * @param {Mesh} [options.mesh] Voxel mesh
**/
function Voxel(position = [0, 0, 0], size = DEFAULT_SIZE, options = {}) {
    let longTouchTimer;
    let cubeElement;
    let animElement;
    let parentScene;
    let mesh;
    let faces = {};
    let dimension = 0;
    let self = assign(positioned(assign(this, events)), {
        clone,
        animUp,
        animDown,
        addToScene,
        removeFromScene,
        setParentScene,
        removeParentScene,
        setDimension,
        getDimension,
        updateLightSource,
        setMesh,
        getMesh: () => mesh,
        getDomElement: () => cubeElement,
        getAnimatedElement: () => animElement
    });
    self.on('move', updatePosition);
    setDimension(size);
    createCube();
    self.setPosition(position);
    setMesh(isUndefined(options.mesh) ? new Mesh() : options.mesh);
    function setMesh(data = {}) {
        if (data.constructor === Mesh) {
            let old = mesh;
            old && old.off('change');
            mesh = data;
            mesh.on('change', () => {
                applyMesh();
                const target = self;
                self.trigger('change:mesh', {target, mesh});
            });
            applyMesh();
        }
    }
    function animUp(scene) {
        if (scene) {
            parentScene = scene;
            animElement.setAttribute('class', 'animated-up');
            appendToScene();
        } else {
            throw 'Scene required to add voxel to scene';
        }
    }
    function animDown(scene) {
        if (scene) {
            parentScene = scene;
            animElement.setAttribute('class', 'animated-down');
            appendToScene();
        } else {
            throw 'Scene required to add voxel to scene';
        }
    }
    function addToScene(scene) {
        if (scene) {
            parentScene = scene;
            animElement.setAttribute('class', 'animated');
            appendToScene();
        } else {
            throw 'Scene required to add voxel to scene';
        }
    }
    function appendToScene() {
        parentScene.add(self);
    }
    function removeFromScene() {
        parentScene && parentScene.remove(self);
    }
    function setParentScene(scene) {
        parentScene = scene;
    }
    function removeParentScene() {
        parentScene = undefined;
    }
    function setDimension(val) {
        if (isNumber(val)) {
            dimension = val;
        }
    }
    function getDimension() {
        return dimension;
    }
    function clone() {
        return new Voxel([self.getPositionX(), self.getPositionY(), self.getPositionZ()], dimension, {mesh});
    }
    function updateLightSource(lightSources) {
        const cubed = val => pow(val, 3);
        let front = 1;
        let back = 1;
        let left = 1;
        let right = 1;
        let top = 1;
        let bottom = 1;
        lightSources.forEach(lightSource => {
            let position = [
                lightSource.getPositionX(),
                lightSource.getPositionY(),
                lightSource.getPositionZ()
            ];
            let brightness = lightSource.getBrightness();
            let travelDistance = lightSource.getTravelDistance();
            let scale = brightness[1] - brightness[0];
            let shift = 1 - brightness[1];
            let calculateOpacity = unitVector => {/* eslint-disable no-magic-numbers */
                let [A, B, C] = unitVector;
                let {angle, direction, distance} = angleFromLightSource(position, {A, B, C});
                let percent = (direction < 0) ? 1 : min(1, cubed(1 - angle / (PI / 2)) + pow(distance / travelDistance, 6));
                return 1 - (percent * scale + shift);
            };/* eslint-enable no-magic-numbers */
            back = max(0, back - calculateOpacity([0, 0, -1]));
            front = max(0, front - calculateOpacity([0, 0, 1]));
            left = max(0, left - calculateOpacity([-1, 0, 0]));
            right = max(0, right - calculateOpacity([1, 0, 0]));
            top = max(0, top - calculateOpacity([0, 1, 0]));
            bottom = max(0, bottom - calculateOpacity([0, -1, 0]));
        });
        const sides = {front, back, left, right, top, bottom};
        keys(sides).forEach((side) => {
            faces[side].shader.style.opacity = sides[side];
        });
    }
    function angleFromLightSource(position, plane) {
        let xRotation = parentScene.getRotationX();
        let yRotation = parentScene.getRotationY();
        let zRotation = parentScene.getRotationZ();
        let rotationMatrix = generateRotationMatrix(xRotation, -yRotation, zRotation);
        let {A, B, C} = plane;
        let rotated = rotate(position, rotationMatrix);
        rotated = {
            x: rotated.x - self.getPositionX() - A * getDimension() / 2,
            y: rotated.y - self.getPositionY() - B * getDimension() / 2,
            z: rotated.z - self.getPositionZ() - C * getDimension() / 2
        };
        let {x, y, z} = rotated;
        let distance = sqrt(pow(x, 2) + pow(y, 2) + pow(z, 2));
        let direction = abs(C) === 1 ? C * z : (abs(B) === 1 ? B * y : A * x);
        let angle = asin(abs(x * A + y * B + z * C) / distance);
        return {angle, direction, distance};
    }
    function rotate(point, rotationMatrix) {
        let [x, y, z] = point;
        let columnVector = [[x], [y], [z]];
        let rotated = multiplyMatrices(rotationMatrix, columnVector);
        return {
            x: rotated[0][0],
            y: rotated[1][0],
            z: rotated[2][0]
        };
    }
    function applyMesh() {
        let data = mesh.getFaces();
        SIDES.forEach(side => {
            let faceMesh = data[side];
            let face = faces[side];
            if (faceMesh instanceof ImageFace) {
                face.src = faceMesh.getSource();
                face.removeAttribute('class');
            }
            if (faceMesh instanceof ColorFace) {
                let faceElem = face.parentElement;
                faceElem.style.background = '#' + faceMesh.getHex();
                face.setAttribute('class', 'colored');
            }
        });
    }
    function createCube() {
        cubeElement = createElement('div', 'voxelcss-cube');
        animElement = createElement('div', 'animated');
        SIDES.forEach(side => createFace(side));
        cubeElement.appendChild(animElement);
    }
    function createFace(label) {
        const target = self;
        const transformLookup = {
            top:    transformX(dimension / 2),
            bottom: transformX(-dimension / 2),
            left:   transformY(-dimension / 2),
            right:  transformY(dimension / 2),
            front:  translate(dimension / 2),
            back:   translate(-dimension / 2)
        };
        const handlerLookup = SIDES.reduce((lookup, side) => {
            return assign(lookup, {[side]: () => self.trigger(`click:${side}`, {target})});
        }, {});
        const image = createElement('img', '');
        const shader = createElement('div', 'shader');
        const wrapper = createElement('div', 'voxelcss-face ' + label);
        faces[label] = assign(image, {shader});
        assign(wrapper.style, {
            width:      pixels(dimension),
            height:     pixels(dimension),
            marginLeft: pixels(-1 * dimension / 2),
            marginTop:  pixels(-1 * dimension / 2),
            transform:  transformLookup[label]
        });
        wrapper.addEventListener('click', handlerLookup[label]);
        wrapper.addEventListener('contextmenu', e => {
            e.preventDefault();
            self.trigger('contextmenu', {target: self});
            return false;
        });
        wrapper.addEventListener('touchstart', () => {
            longTouchTimer = setTimeout(() => self.trigger('contextmenu', {target: self}), LONG_PRESS_DURATION);
        });
        wrapper.addEventListener('touchend', e => {
            e.preventDefault();
            clearTimeout(longTouchTimer);
            handlerLookup[label]();
        });
        wrapper.appendChild(image);
        wrapper.appendChild(shader);
        animElement.appendChild(wrapper);
    }
    function createElement(type, className) {
        const elem = document.createElement(type);
        elem.setAttribute('class', className);
        return elem;
    }
    function updatePosition() {
        const {x, y, z} = self.getPosition();
        cubeElement.style.transform = `translate3d(${x}px, ${-y}px, ${z}px)`;
    }
}

},{"./ColorFace":2,"./ImageFace":4,"./Mesh":6,"./common":10,"./events":11,"./positioned":14}],9:[function(require,module,exports){
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
                    var voxel = new Voxel([x, y, z], dimension);
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

},{"./Mesh":6,"./Voxel":8}],10:[function(require,module,exports){
/**
 * @module common
 * @description Functions for various things such as matrix math
**/
'use strict';

const {cos, pow, sin, sqrt} = Math;

const BASE_16 = 16;
const SHIFT_KEYCODE = 16;

const isNumber = val => (typeof val === 'number');
const isUndefined = val => (val === undefined);
const isShiftKey = e => (e.keyCode === SHIFT_KEYCODE || e.which === SHIFT_KEYCODE);
const squared = val => pow(val, 2);

module.exports = {
    findKeyWithValue,
    generateRotationMatrix,
    hexToRgb,
    isNumber,
    isShiftKey,
    isUndefined,
    mapValues,
    not,
    multiplyMatrices,
    rgbToHex,
    squared,
    constant: val => () => val,
    getDistance: (a, b) => sqrt(squared(a) + squared(b)),
    identity: val => val
};
function findKeyWithValue(dict, value) {
    let keys = Object.keys(dict);
    let index = keys
        .map((key, index) => ((dict[key] === value) && index))
        .find(isNumber);
    return keys[index];
}
function mapValues(obj, fn) {
    return Object.keys(obj)
        .map(key => ({[key]: fn(obj[key])}))
        .reduce((o, item) => Object.assign(o, item), {});
}
function not(fn) {
    return function() {
        return !fn(...arguments);
    };
}
/**
 * @functino hexToRgb
 * @param {string} hex Hex value to be converted to RGB
 * @returns {?object} {r, g, b}
 * @see https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139
**/
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
/**
 * @function rgbToHex
 * @param {object} color RGB color data
 * @param {number} color.r Red value
 * @param {number} color.g Green value
 * @param {number} color.b Blue value
 * @returns {string} Hex string (no #)
 * @see https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139
**/
function rgbToHex(color) {/* eslint-disable no-magic-numbers */
    let {r, g, b} = color;
    return '' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}/* eslint-enable no-magic-numbers */
/**
 * @function generateRotationMatrix
 * @description Generate rotation matrix for rotation with given x, y, and z components
 * @param {number} rotX x-component of rotation
 * @param {number} rotY y-component of rotation
 * @param {number} rotZ z-component of rotation
 * @returns {array[]} 3x3 array (nested array)
**/
function generateRotationMatrix(rotX, rotY, rotZ) {
    var xRotation = [
        [1, 0, 0],
        [0, cos(rotX), -sin(rotX)],
        [0, sin(rotX), cos(rotX)]
    ];
    var yRotation = [
        [cos(rotY), 0, sin(rotY)],
        [0, 1, 0],
        [-sin(rotY), 0, cos(rotY)]
    ];
    var zRotation = [
        [cos(rotZ), -sin(rotZ), 0],
        [sin(rotZ), cos(rotZ), 0],
        [0, 0, 1]
    ];
    return multiplyMatrices(multiplyMatrices(zRotation, yRotation), xRotation);
}
/**
 * @function multiplyMatrices
 * @description Matrix multiplication
 * @param {array[]} a Matrix A
 * @param {array[]} b Matric B
 * @returns {array[]} AxB
**/
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

},{}],11:[function(require,module,exports){
/**
 * @module events
 * @description "Re-furbished" Backbone.Events
**/
'use strict';

const {assign} = Object;
const eventSplitter = /\s+/;

let idCounter = 0;
let uniqueId = prefix => (prefix + ++idCounter + '');
let once = function(fn) {
    let memo;
    let times = 2;
    return function() {
        if (--times > 0) {
            memo = fn.apply(this, arguments);
        }
        if (times <= 1) {fn = null;}
        return memo;
    };
};
let property = key => obj => (obj === null ? void 0 : obj[key]);
let isArrayLike = collection => {
    let length = property('length')(collection);
    return typeof length === 'number' && length >= 0 && length <= Number.MAX_SAFE_INTEGER;
};
let isObject = obj => {
    let type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};
let isEmpty = obj => {
    if (obj === null) {return true;}
    if (isArrayLike(obj) && (Array.isArray(obj) || (typeof obj === 'string'))) {return obj.length === 0;}
    return Object.keys(obj).length === 0;
};
let tryCatchOn = (obj, name, callback, context) => {
    try {
        obj.on(name, callback, context);
    } catch (e) {
        return e;
    }
};

let _listening;
let onApi = (events, name, callback, options) => {
    if (callback) {
        let handlers = events[name] || (events[name] = []);
        let {context, ctx, listening} = options;
        ctx = context || ctx;
        if (listening) {listening.count++;}
        handlers.push({callback, context, ctx, listening});
    }
    return events;
};
let offApi = (events, name, callback, options) => {
    if (!events) {return;}
    let {context, listeners} = options;
    let names;
    if (!name && !context && !callback) {
        names = isObject(listeners) ? Object.keys(listeners) : [];
        names.forEach(name => (listeners[name].cleanup()));
        return;
    }
    names = name ? [name] : Object.keys(events);
    names.forEach(name => {
        let handlers = events[name];
        if (handlers) {
            let remaining = [];
            handlers.forEach(handler => {
                if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
                    remaining.push(handler);
                } else {
                    let listening = handler.listening;
                    if (listening) {listening.off(name, callback);}
                }
            });
            if (remaining.length) {
                events[name] = remaining;
            } else {
                delete events[name];
            }
        }
    });
    return events;
};
let onceMap = function(map, name, callback, offer) {
    if (callback) {
        let _once = map[name] = once(function() {
            offer(name, _once);
            callback.apply(this, arguments);
        });
        _once._callback = callback;
    }
    return map;
};
let eventsApi = (iteratee, events, name, callback, opts) => {
    let isEventMap = (name && typeof name === 'object');
    if (isEventMap) {
        let hasContextNoCallback = (callback !== void 0 && 'context' in opts && opts.context === void 0);
        if (hasContextNoCallback) {
            opts.context = callback;
        }
        Object.keys(name).forEach(val => {
            events = eventsApi(iteratee, events, val, name[val], opts);
        });
    } else if (name && eventSplitter.test(name)) {// space-separated event names by delegating them individually
        name.split(eventSplitter).forEach(name => {
            events = iteratee(events, name, callback, opts);
        });
    } else {// standard events
        events = iteratee(events, name, callback, opts);
    }
    return events;
};
/* eslint-disable complexity */
let triggerEvents = (events, args) => {
    let ev;
    let i = -1;
    let l = events.length;
    let [a1, a2, a3] = args;
    switch (args.length) {
        case 0: while (++i < l) {(ev = events[i]).callback.call(ev.ctx);} break;
        case 1: while (++i < l) {(ev = events[i]).callback.call(ev.ctx, a1);} break;
        case 2: while (++i < l) {(ev = events[i]).callback.call(ev.ctx, a1, a2);} break;
        case 3: while (++i < l) {(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);} break;
        default: while (++i < l) {(ev = events[i]).callback.apply(ev.ctx, args);}
    }
};
/* eslint-enable complexity */
let triggerApi = (objEvents, name, callback, args) => {
    if (objEvents) {
        let events = objEvents[name];
        let allEvents = objEvents.all;
        if (events && allEvents) {allEvents = allEvents.slice();}
        if (events) {triggerEvents(events, args);}
        if (allEvents) {triggerEvents(allEvents, [name].concat(args));}
    }
    return objEvents;
};

let Events = {
    on: function(name, callback, context) {
        this._events = eventsApi(onApi, this._events || {}, name, callback, {
            context: context,
            ctx: this,
            listening: _listening
        });
        if (_listening) {
            let listeners = this._listeners || (this._listeners = {});
            listeners[_listening.id] = _listening;
            _listening.interop = false;
        }
        return this;
    },
    off: function(name, callback, context) {
        if (!this._events) {return this;}
        this._events = eventsApi(offApi, this._events, name, callback, {
            context: context,
            listeners: this._listeners
        });
        return this;
    },
    once: function(name, callback, context) {
        let events = eventsApi(onceMap, {}, name, callback, this.off.bind(this));
        if (typeof name === 'string' && context === null) {callback = void 0;}
        return this.on(events, callback, context);
    },
    trigger: function(name) {
        if (this._events) {
            let length = Math.max(0, arguments.length - 1);
            let args = Array(length);
            for (var i = 0; i < length; i++) {args[i] = arguments[i + 1];}
            eventsApi(triggerApi, this._events, name, void 0, args);
        }
        return this;
    },
    /* eslint-disable complexity */
    listenTo: function(obj, name, callback) {
        if (obj) {
            let id = obj._listenId || (obj._listenId = uniqueId('l'));
            let listeningTo = this._listeningTo || (this._listeningTo = {});
            let listening = _listening = listeningTo[id];
            if (!listening) {
                this._listenId || (this._listenId = uniqueId('l'));
                listening = _listening = listeningTo[id] = new Listening(this, obj);
            }
            let error = tryCatchOn(obj, name, callback, this);
            _listening = void 0;
            if (error) {throw error;}
            // If the target obj is not Backbone.Events, track events manually.
            if (listening.interop) {listening.on(name, callback);}
        }
        return this;
    },
    /* eslint-enable complexity */
    listenToOnce: function(obj, name, callback) {
        let events = eventsApi(onceMap, {}, name, callback, this.stopListening.bind(this, obj));
        return this.listenTo(obj, events);
    },
    stopListening: function(obj, name, callback) {
        let listeningTo = this._listeningTo;
        if (listeningTo) {
            let ids = obj ? [obj._listenId] : Object.keys(listeningTo);
            ids.forEach(id => {
                let listening = listeningTo[id];
                if (listening) {
                    listening.obj.off(name, callback, this);
                    if (listening.interop) {listening.off(name, callback);}
                }
            });
            if (isEmpty(listeningTo)) {this._listeningTo = void 0;}
        }
        return this;
    }
};
function Listening(listener, obj) {
    this.id = listener._listenId;
    this.listener = listener;
    this.obj = obj;
    this.interop = true;
    this.count = 0;
    this._events = void 0;
}
assign(Listening.prototype, {
    on: Events.on,
    off: function(name, callback) {
        let cleanup;
        if (this.interop) {
            this._events = eventsApi(offApi, this._events, name, callback, {
                context: void 0,
                listeners: void 0
            });
            cleanup = !this._events;
        } else {
            this.count--;
            cleanup = this.count === 0;
        }
        if (cleanup) {this.cleanup();}
    },
    cleanup: function() {
        delete this.listener._listeningTo[this.obj._listenId];
        if (!this.interop) {delete this.obj._listeners[this.id];}
    }
});

module.exports = Events;

},{}],12:[function(require,module,exports){
'use strict';

require('../dist/voxelcss.css');
const ColorFace     = require('./ColorFace');
const Editor        = require('./Editor');
const ImageFace     = require('./ImageFace');
const LightSource   = require('./LightSource');
const Mesh          = require('./Mesh');
const meshes        = require('./meshes');
const Scene         = require('./Scene');
const Voxel         = require('./Voxel');
const World         = require('./World');

module.exports = {
    ColorFace,
    Editor,
    ImageFace,
    LightSource,
    Mesh,
    meshes,
    Scene,
    Voxel,
    World
};
/**
 * @event module:core/ColorFace~change
 * @description Fired when face is changed
 * @type {object}
 * @prop {object} target Object that triggered event
**/
/**
 * @event module:core/ImageFace~change
 * @description Fired when face is changed
 * @type {object}
 * @prop {object} target Object that triggered event
**/
/**
 * @event module:core/LightSource~change
 * @description Fired when travelDistance, dark, or light is changed
 * @type {object}
 * @prop {object} target Object that triggered event
**/
/**
 * @event module:core/Mesh~change
 * @description Fired when face is changed
 * @type {object}
 * @prop {object} target Object that triggered event
 * @prop {object} faces Face data
 * @prop {object} faces.front Data for front face
 * @prop {object} faces.back Data for back face
 * @prop {object} faces.left Data for left face
 * @prop {object} faces.right Data for right face
 * @prop {object} faces.top Data for top face
 * @prop {object} faces.bottom Data for bottom face
**/
/**
 * @event module:core/Scene~rotate
 * @description Fired on scene rotation (mouse drag)
 * @type {object}
 * @prop {object} rotation Scene rotation object
 * @prop {object} pan Scene pan object
 * @prop {number} zoom Scene zoom
 * @prop {object} target Object that triggered event
**/
/**
 * @event module:core/Scene~pan
 * @description Fired on scene pan (mouse drag with shift pressed)
 * @type {object}
 * @prop {object} rotation Scene rotation object
 * @prop {object} pan Scene pan object
 * @prop {number} zoom Scene zoom
 * @prop {object} target Object that triggered event
**/
/**
 * @event module:core/Scene~zoom
 * @description Fired on scene zoom (mouse wheel scroll)
 * @type {object}
 * @prop {object} rotation Scene rotation object
 * @prop {object} pan Scene pan object
 * @prop {number} zoom Scene zoom
 * @prop {object} target Object that triggered event
**/

},{"../dist/voxelcss.css":1,"./ColorFace":2,"./Editor":3,"./ImageFace":4,"./LightSource":5,"./Mesh":6,"./Scene":7,"./Voxel":8,"./World":9,"./meshes":13}],13:[function(require,module,exports){
/**
 * @module meshes
 * @requires core/Mesh
 * @requires core/ImageFace
**/
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

},{"./ImageFace":4,"./Mesh":6}],14:[function(require,module,exports){
/**
 * @module positioned
 * @requires common
**/
'use strict';

const {assign}   = Object;
const {isNumber} = require('./common');

module.exports = function(obj) {
    let self = obj || new Function();
    let position = {x: 0, y: 0, z: 0};
    let canTriggerEvent = true;
    assign(self, {
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
    function setPosition(position) {
        let [x, y, z] = position;
        canTriggerEvent = false;
        setPositionX(x);
        setPositionY(y);
        setPositionZ(z);
        canTriggerEvent = true;
        self.trigger('move');
        return self;
    }
    function setPositionX(x) {
        if (!isNumber(x)) {return position.x;}
        position.x = x;
        if (canTriggerEvent) {self.trigger('move');}
    }
    function setPositionY(y) {
        if (!isNumber(y)) {return position.y;}
        position.y = y;
        if (canTriggerEvent) {self.trigger('move');}
    }
    function setPositionZ(z) {
        if (!isNumber(z)) {return position.z;}
        position.z = z;
        if (canTriggerEvent) {self.trigger('move');}
    }
    function getPosition() {
        return position;
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
        translateX(x);
        translateY(y);
        translateZ(z);
        canTriggerEvent = true;
        self.trigger('move');
        return self;
    }
    function translateX(x) {
        if (!isNumber(x)) {return position.x;}
        return setPositionX(x + position.x);
    }
    function translateY(y) {
        if (!isNumber(y)) {return position.y;}
        return setPositionY(y + position.y);
    }
    function translateZ(z) {
        if (!isNumber(z)) {return position.z;}
        return setPositionZ(z + position.z);
    }
    return self;
};

},{"./common":10}],15:[function(require,module,exports){
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