/**
 * @module core/ColorFace
 * @requires eventListener
**/
'use strict';

const {assign} = Object;
const {isNumber, isUndefined, hexToRgb, rgbToHex} = require('./common');
const eventListener = require('./eventListener');

module.exports = ColorFace;

/**
 * @name ColorFace
 * @constructor
 * @param {(string|number|object)} data Color data
 * @fires module:core/ColorFace~change
**/
function ColorFace() {
    let color = {r: 0, g: 0, b: 0, a: 1};
    let self = assign(eventListener(this), {
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
            self.triggerEvent('change', {target: self});
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

/**
 * @event module:core/ColorFace~change
 * @description Fired when face is changed
 * @type {object}
 * @prop {object} target Object that triggered event
**/
