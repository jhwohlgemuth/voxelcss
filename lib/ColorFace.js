/**
 * @file Color faces for voxels
 * @requires eventListener
 * @module core/ColorFace
**/
'use strict';

const {hexToRgb, rgbToHex} = require('./common');
const eventListener = require('./eventListener');

module.exports = ColorFace;

// events -> onchange
/**
 * @name ColorFace
 * @constructor
**/
function ColorFace() {
    let self = this;
    let color = {r: 0, g: 0, b: 0, a: 1};
    Object.assign(self, {
        setColor,
        getColor,
        getHex: () => rgbToHex(color.r, color.g, color.b),
        serialize: () => JSON.stringify(color),
        clone: () => new ColorFace(color)
    });
    function setColor() {
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
    function getColor() {
        return color;
    }
    function setColorFromRGBA(r, g, b, a) {
        var old = getColor();
        if (r !== undefined && r.constructor === Number) {color.r = r;}
        if (g !== undefined && g.constructor === Number) {color.g = g;}
        if (b !== undefined && b.constructor === Number) {color.b = b;}
        if (a !== undefined && a.constructor === Number) {color.a = a;}
        triggerChangeEvent();
        return old;
    }
    function setColorFromRGBADict(dict) {
        if (dict === undefined) {
            return getColor();
        }
        return setColorFromRGBA(dict.r, dict.g, dict.b, dict.a);
    }
    function setColorFromHex(hex) {
        if (!hex || hex.constructor !== String) {
            return getColor();
        }
        color = hexToRgb(hex);
        color.a = 1;
        triggerChangeEvent();
        return getColor();
    }
    function triggerChangeEvent() {
        self.triggerEvent('change', {target: self});
    }
    (function Constructor() {
        eventListener(self);
        setColor.apply(this, arguments);
    }).apply(self, arguments);
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
