/**
 * @file Module to add positioning attributes to an object
 * @module positioned
**/
'use strict';

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
    function setPosition(position) {
        let [x, y, z] = position;
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
