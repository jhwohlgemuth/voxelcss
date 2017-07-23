/**
 * @file Module for creating light sources
 * @requires eventListener
 * @requires positioned
 * @module core/LightSource
**/
'use strict';

const eventListener = require('./eventListener');
const positioned    = require('./positioned');

// events -> change
/**
 * @name LightSource
 * @constructor
 * @param {number} x X position of light source
 * @param {number} y Y position of light source
 * @param {number} z Z position of light source
 * @param {number} distance Light source distance from scene
 * @param {number} dark darkness --> [0, 1]
 * @param {number} light lightness --> [0, 1]
**/
module.exports = function() {
    let self = this;
    let travelDistance = 500;
    let maxLight = 1;
    let maxDark = 0;
    Object.assign(self, {
        setTravelDistance,
        setBrightness,
        getBrightness,
        getTravelDistance: () => travelDistance
    });
    function setTravelDistance(distance) {
        if (distance === undefined || typeof distance !== 'number') {
            return travelDistance;
        }
        let old = travelDistance;
        travelDistance = distance;
        self.triggerEvent('change', {target: self});
        return old;
    }
    function setBrightness(dark, light) {
        let old = getBrightness();
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
    (function Constructor(position, distance, dark, light) {
        positioned(eventListener(self));
        self.setPosition(position);
        setTravelDistance(distance);
        setBrightness(dark, light);
    }).apply(self, arguments);
};
