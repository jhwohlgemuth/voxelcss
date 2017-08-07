/**
 * @module eventListener
**/
'use strict';

const {assign} = Object;
const {isArray} = Array;

module.exports = function(obj) {
    let listeners = {};
    let self = assign(obj || new Function(), {
        addEventListener,
        removeEventListener,
        triggerEvent
    });
    function addEventListener(eventName, cb) {
        eventName = `on${eventName}`;
        if (typeof cb !== 'function') {return;}
        if (!listeners[eventName]) {listeners[eventName] = [];}
        if (listeners[eventName].indexOf(cb) > -1) {return;}
        listeners[eventName].push(cb);
    }
    function removeEventListener(eventName, cb) {
        eventName = `on${eventName}`;
        if (!listeners[eventName]) {return;}
        listeners[eventName].splice(listeners[eventName].indexOf(cb), 1);
    }
    function triggerEvent(eventName, event) {
        eventName = `on${eventName}`;
        let _listeners = listeners[eventName];
        if (isArray(_listeners)) {
            _listeners.forEach(listener => listener(event));
        }
    }
    return self;
};
