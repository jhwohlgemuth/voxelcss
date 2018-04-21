/**
 * @module positioned
 * @requires common
**/

const {assign}   = Object;
const {isNumber} = require('./common');

module.exports = function(obj) {
    const self = obj || new Function();
    const position = {x: 0, y: 0, z: 0};
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
        const [x, y, z] = position;
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
