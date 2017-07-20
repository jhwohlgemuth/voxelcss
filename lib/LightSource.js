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
