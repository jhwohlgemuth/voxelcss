'use strict';

const {assign} = Object;
const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
const eventSplitter = /\s+/;

let idCounter = 0;
let uniqueId = prefix => (prefix + ++idCounter + '');
let once = function(fn) {
    let memo;
    let times = 2;
    return function() {
        if (--times > 0) {
            memo = fn.apply(this, arguments);
        }
        if (times <= 1) {fn = null;}
        return memo;
    };
};
let property = key => obj => (obj === null ? void 0 : obj[key]);
let isArrayLike = collection => {
    let length = property('length')(collection);
    return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};
let isObject = obj => {
    let type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};
let isEmpty = obj => {
    if (obj === null) {return true;}
    if (isArrayLike(obj) && (Array.isArray(obj) || (typeof obj === 'string'))) {return obj.length === 0;}
    return Object.keys(obj).length === 0;
};
let tryCatchOn = (obj, name, callback, context) => {
    try {
        obj.on(name, callback, context);
    } catch (e) {
        return e;
    }
};

// A private global variable to share between listeners and listenees.
let _listening;
let onApi = (events, name, callback, options) => {
    if (callback) {
        let handlers = events[name] || (events[name] = []);
        let {context, ctx, listening} = options;
        ctx = context || ctx;
        if (listening) {listening.count++;}
        handlers.push({callback, context, ctx, listening});
    }
    return events;
};
let offApi = (events, name, callback, options) => {
    if (!events) {return;}
    let {context, listeners} = options;
    let i = 0;
    let names;
    if (!name && !context && !callback) {
        names = isObject(listeners) ? Object.keys(listeners) : [];
        for (names; i < names.length; i++) {
            listeners[names[i]].cleanup();
        }
        return;
    }
    names = name ? [name] : Object.keys(events);
    for (; i < names.length; i++) {
        name = names[i];
        var handlers = events[name];
        if (!handlers) {break;}
        var remaining = [];
        for (var j = 0; j < handlers.length; j++) {
            var handler = handlers[j];
            if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
                remaining.push(handler);
            } else {
                var listening = handler.listening;
                if (listening) {listening.off(name, callback);}
            }
        }
        if (remaining.length) {
            events[name] = remaining;
        } else {
            delete events[name];
        }
    }
    return events;
};
let onceMap = function(map, name, callback, offer) {
    if (callback) {
        var _once = map[name] = once(function() {
            offer(name, _once);
            callback.apply(this, arguments);
        });
        _once._callback = callback;
    }
    return map;
};
let eventsApi = (iteratee, events, name, callback, opts) => {
    let i = 0;
    let names;
    if (name && typeof name === 'object') {// event maps
        if (callback !== void 0 && 'context' in opts && opts.context === void 0) {opts.context = callback;}
        for (names = Object.keys(name); i < names.length ; i++) {
            events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
        }
    } else if (name && eventSplitter.test(name)) {// space-separated event names by delegating them individually
        for (names = name.split(eventSplitter); i < names.length; i++) {
            events = iteratee(events, names[i], callback, opts);
        }
    } else {// standard events.
        events = iteratee(events, name, callback, opts);
    }
    return events;
};
let triggerEvents = (events, args) => {
    var ev;
    var i = -1;
    var l = events.length;
    var a1 = args[0];
    var a2 = args[1];
    var a3 = args[2];
    switch (args.length) {
        case 0: while (++i < l) {(ev = events[i]).callback.call(ev.ctx);} break;
        case 1: while (++i < l) {(ev = events[i]).callback.call(ev.ctx, a1);} break;
        case 2: while (++i < l) {(ev = events[i]).callback.call(ev.ctx, a1, a2);} break;
        case 3: while (++i < l) {(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);} break;
        default: while (++i < l) {(ev = events[i]).callback.apply(ev.ctx, args);}
    }
};
let triggerApi = (objEvents, name, callback, args) => {
    if (objEvents) {
        var events = objEvents[name];
        var allEvents = objEvents.all;
        if (events && allEvents) {allEvents = allEvents.slice();}
        if (events) {triggerEvents(events, args);}
        if (allEvents) {triggerEvents(allEvents, [name].concat(args));}
    }
    return objEvents;
};

let Events = {
    on: function(name, callback, context) {
        this._events = eventsApi(onApi, this._events || {}, name, callback, {
            context: context,
            ctx: this,
            listening: _listening
        });
        if (_listening) {
            var listeners = this._listeners || (this._listeners = {});
            listeners[_listening.id] = _listening;
            _listening.interop = false;
        }
        return this;
    },
    off: function(name, callback, context) {
        if (!this._events) {return this;}
        this._events = eventsApi(offApi, this._events, name, callback, {
            context: context,
            listeners: this._listeners
        });
        return this;
    },
    once: function(name, callback, context) {
        var events = eventsApi(onceMap, {}, name, callback, this.off.bind(this));
        if (typeof name === 'string' && context === null) {callback = void 0;}
        return this.on(events, callback, context);
    },
    trigger: function(name) {
        if (!this._events) {return this;}
        var length = Math.max(0, arguments.length - 1);
        var args = Array(length);
        for (var i = 0; i < length; i++) {args[i] = arguments[i + 1];}
        eventsApi(triggerApi, this._events, name, void 0, args);
        return this;
    },
    listenTo: function(obj, name, callback) {
        if (obj) {
            var id = obj._listenId || (obj._listenId = uniqueId('l'));
            var listeningTo = this._listeningTo || (this._listeningTo = {});
            var listening = _listening = listeningTo[id];
            if (!listening) {
                this._listenId || (this._listenId = uniqueId('l'));
                listening = _listening = listeningTo[id] = new Listening(this, obj);
            }
            var error = tryCatchOn(obj, name, callback, this);
            _listening = void 0;
            if (error) {throw error;}
            // If the target obj is not Backbone.Events, track events manually.
            if (listening.interop) {listening.on(name, callback);}
        }
        return this;
    },
    listenToOnce: function(obj, name, callback) {
        var events = eventsApi(onceMap, {}, name, callback, this.stopListening.bind(this, obj));
        return this.listenTo(obj, events);
    },
    stopListening: function(obj, name, callback) {
        var listeningTo = this._listeningTo;
        if (!listeningTo) {return this;}
        var ids = obj ? [obj._listenId] : Object.keys(listeningTo);
        for (var i = 0; i < ids.length; i++) {
            var listening = listeningTo[ids[i]];
            if (!listening) {break;}
            listening.obj.off(name, callback, this);
            if (listening.interop) {listening.off(name, callback);}
        }
        if (isEmpty(listeningTo)) {this._listeningTo = void 0;}
        return this;
    }
};

function Listening(listener, obj) {
    this.id = listener._listenId;
    this.listener = listener;
    this.obj = obj;
    this.interop = true;
    this.count = 0;
    this._events = void 0;
}
assign(Listening.prototype, {
    on: Events.on,
    off: function(name, callback) {
        var cleanup;
        if (this.interop) {
            this._events = eventsApi(offApi, this._events, name, callback, {
                context: void 0,
                listeners: void 0
            });
            cleanup = !this._events;
        } else {
            this.count--;
            cleanup = this.count === 0;
        }
        if (cleanup) {this.cleanup();}
    },
    cleanup: function() {
        delete this.listener._listeningTo[this.obj._listenId];
        if (!this.interop) {delete this.obj._listeners[this.id];}
    }
});

module.exports = Events;
