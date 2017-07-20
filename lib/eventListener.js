/**
 * @file Light-weight eventing module
 * @module eventListener
**/
'use strict';

module.exports = function(obj) {
    let self = obj || new Function();
    let listeners = {};
    self.addEventListener = AddEventListener;
    self.removeEventListener = RemoveEventListener;
    self.triggerEvent = TriggerEvent;
    function AddEventListener(eventName, funct) {
        eventName = 'on' + eventName;
        if (typeof funct !== 'function') {return;}
        if (!listeners[eventName]) {listeners[eventName] = [];}
        if (listeners[eventName].indexOf(funct) > -1) {return;}
        listeners[eventName].push(funct);
    }
    function RemoveEventListener(eventName, funct) {
        eventName = 'on' + eventName;
        if (!listeners[eventName]) {return;}
        listeners[eventName].splice(listeners[eventName].indexOf(funct), 1);
    }
    function TriggerEvent(eventName, event) {
        eventName = 'on' + eventName;
        var listenerArray = listeners[eventName];
        if (!listenerArray) {return;}
        for (var i = 0, listener; listener = listenerArray[i++];) {listener(event);}
    }
    return self;
};
