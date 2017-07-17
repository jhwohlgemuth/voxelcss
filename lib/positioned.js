'use strict';

// EVENTS
//   onmove
module.exports = function(obj) {
    var self = obj || new Function();
    var position = {x: 0, y: 0, z: 0};
    var canTriggerEvent = true;
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
    self.setPosition = setPosition;
    self.setPositionX = setPositionX;
    self.setPositionY = setPositionY;
    self.setPositionZ = setPositionZ;
    self.translate = translate;
    self.translateX = translateX;
    self.translateY = translateY;
    self.translateZ = translateZ;
    self.getPosition = getPosition;
    self.getPositionX = getPositionX;
    self.getPositionY = getPositionY;
    self.getPositionZ = getPositionZ;
    return self;
};
