/**
 * @module core/LightSource
 * @requires eventListener
 * @requires positioned
**/
'use strict';

const eventListener = require('./eventListener');
const positioned    = require('./positioned');

// events -> change
/**
 * @name LightSource
 * @constructor
 * @param {number[]} position Light source position --> [x, y, z]
 * @param {number} distance Light source distance from scene
 * @param {number} dark darkness --> [0, 1]
 * @param {number} light lightness --> [0, 1]
**/
module.exports = function(position, distance, dark, light) {
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
    positioned(eventListener(self));
    self.setPosition(position);
    setTravelDistance(distance);
    setBrightness(dark, light);
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
};
