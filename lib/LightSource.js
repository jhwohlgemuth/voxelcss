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
    const getBrightness = () => [maxDark, maxLight];
    const self = assign(positioned(assign(this, events)), {
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
