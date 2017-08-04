/**
 * @module eventListener
**/
'use strict';

module.exports = function(obj) {
    let self = obj || new Function();
    let listeners = {};
    Object.assign(self, {
        addEventListener,
        removeEventListener,
        triggerEvent
    });
    function addEventListener(eventName, cb) {
        eventName = 'on' + eventName;
        if (typeof cb !== 'function') {return;}
        if (!listeners[eventName]) {listeners[eventName] = [];}
        if (listeners[eventName].indexOf(cb) > -1) {return;}
        listeners[eventName].push(cb);
    }
    function removeEventListener(eventName, cb) {
        eventName = 'on' + eventName;
        if (!listeners[eventName]) {return;}
        listeners[eventName].splice(listeners[eventName].indexOf(cb), 1);
    }
    function triggerEvent(eventName, event) {
        eventName = 'on' + eventName;
        var listenerArray = listeners[eventName];
        if (!listenerArray) {return;}
        for (var i = 0, listener; listener = listenerArray[i++];) {listener(event);}
    }
    return self;
};
