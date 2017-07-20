/**
 * @file Color faces for voxels
 * @requires eventListener
 * @module core/ColorFace
**/
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
