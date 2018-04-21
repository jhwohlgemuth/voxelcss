/**
 * @module events
 * @description "Re-furbished" Backbone.Events
**/

const {assign} = Object;
const eventSplitter = /\s+/;

let idCounter = 0;
const uniqueId = prefix => (`${prefix + ++idCounter }`);
const once = function(fn) {
    let memo;
    let times = 2;
    return function(...args) {
        if (--times > 0) {
            memo = fn.apply(this, args);
        }
        if (times <= 1) {fn = null;}
        return memo;
    };
};
const property = key => obj => (obj === null ? void 0 : obj[key]);
const isArrayLike = collection => {
    const length = property('length')(collection);
    return typeof length === 'number' && length >= 0 && length <= Number.MAX_SAFE_INTEGER;
};
const isObject = obj => {
    const type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};
const isEmpty = obj => {
    if (obj === null) {return true;}
    if (isArrayLike(obj) && (Array.isArray(obj) || (typeof obj === 'string'))) {return obj.length === 0;}
    return Object.keys(obj).length === 0;
};
const tryCatchOn = (obj, name, callback, context) => {
    try {
        obj.on(name, callback, context);
    } catch (e) {
        return e;
    }
};

let _listening;
const onApi = (events, name, callback, options) => {
    if (callback) {
        const handlers = events[name] || (events[name] = []);
        const {context, listening} = options;
        let {ctx} = options;
        ctx = context || ctx;
        if (listening) {listening.count++;}
        handlers.push({callback, context, ctx, listening});
    }
    return events;
};
const offApi = (events, name, callback, options) => {
    if (!events) {return;}
    const {context, listeners} = options;
    let names;
    if (!name && !context && !callback) {
        names = isObject(listeners) ? Object.keys(listeners) : [];
        names.forEach(name => (listeners[name].cleanup()));
        return;
    }
    names = name ? [name] : Object.keys(events);
    names.forEach(name => {
        const handlers = events[name];
        if (handlers) {
            const remaining = [];
            handlers.forEach(handler => {
                if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
                    remaining.push(handler);
                } else {
                    const {listening} = handler;
                    if (listening) {listening.off(name, callback);}
                }
            });
            if (remaining.length) {
                events[name] = remaining;
            } else {
                delete events[name];
            }
        }
    });
    return events;
};
const onceMap = function(map, name, callback, offer) {
    if (callback) {
        const _once = map[name] = once(function(...args) {
            offer(name, _once);
            callback.apply(this, args);
        });
        _once._callback = callback;
    }
    return map;
};
const eventsApi = (iteratee, events, name, callback, opts) => {
    const isEventMap = (name && typeof name === 'object');
    if (isEventMap) {
        const hasContextNoCallback = (callback !== void 0 && 'context' in opts && opts.context === void 0);
        if (hasContextNoCallback) {
            opts.context = callback;
        }
        Object.keys(name).forEach(val => {
            events = eventsApi(iteratee, events, val, name[val], opts);
        });
    } else if (name && eventSplitter.test(name)) {// space-separated event names by delegating them individually
        name.split(eventSplitter).forEach(name => {
            events = iteratee(events, name, callback, opts);
        });
    } else {// standard events
        events = iteratee(events, name, callback, opts);
    }
    return events;
};
/* eslint-disable complexity */
const triggerEvents = (events, args) => {
    let ev;
    let i = -1;
    const l = events.length;
    const [a1, a2, a3] = args;
    switch (args.length) {
        case 0: while (++i < l) {(ev = events[i]).callback.call(ev.ctx);} break;
        case 1: while (++i < l) {(ev = events[i]).callback.call(ev.ctx, a1);} break;
        case 2: while (++i < l) {(ev = events[i]).callback.call(ev.ctx, a1, a2);} break;
        case 3: while (++i < l) {(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);} break;
        default: while (++i < l) {(ev = events[i]).callback.apply(ev.ctx, args);}
    }
};
/* eslint-enable complexity */
const triggerApi = (objEvents, name, callback, args) => {
    if (objEvents) {
        const events = objEvents[name];
        let allEvents = objEvents.all;
        if (events && allEvents) {allEvents = allEvents.slice();}
        if (events) {triggerEvents(events, args);}
        if (allEvents) {triggerEvents(allEvents, [name].concat(args));}
    }
    return objEvents;
};

const Events = {
    on: function(name, callback, context) {
        this._events = eventsApi(onApi, this._events || {}, name, callback, {
            context,
            ctx: this,
            listening: _listening
        });
        if (_listening) {
            const listeners = this._listeners || (this._listeners = {});
            listeners[_listening.id] = _listening;
            _listening.interop = false;
        }
        return this;
    },
    off: function(name, callback, context) {
        if (!this._events) {return this;}
        this._events = eventsApi(offApi, this._events, name, callback, {
            context,
            listeners: this._listeners
        });
        return this;
    },
    once: function(name, callback, context) {
        const events = eventsApi(onceMap, {}, name, callback, this.off.bind(this));
        if (typeof name === 'string' && context === null) {callback = void 0;}
        return this.on(events, callback, context);
    },
    trigger: function(name) {
        if (this._events) {
            const length = Math.max(0, arguments.length - 1);
            const args = Array(length);
            for (var i = 0; i < length; i++) {args[i] = arguments[i + 1];} // eslint-disable-line no-var, prefer-rest-params
            eventsApi(triggerApi, this._events, name, void 0, args);
        }
        return this;
    },
    /* eslint-disable complexity */
    listenTo: function(obj, name, callback) {
        if (obj) {
            const id = obj._listenId || (obj._listenId = uniqueId('l'));
            const listeningTo = this._listeningTo || (this._listeningTo = {});
            let listening = _listening = listeningTo[id];
            if (!listening) {
                this._listenId || (this._listenId = uniqueId('l'));
                listening = _listening = listeningTo[id] = new Listening(this, obj);
            }
            const error = tryCatchOn(obj, name, callback, this);
            _listening = void 0;
            if (error) {throw error;}
            // If the target obj is not Backbone.Events, track events manually.
            if (listening.interop) {listening.on(name, callback);}
        }
        return this;
    },
    /* eslint-enable complexity */
    listenToOnce: function(obj, name, callback) {
        const events = eventsApi(onceMap, {}, name, callback, this.stopListening.bind(this, obj));
        return this.listenTo(obj, events);
    },
    stopListening: function(obj, name, callback) {
        const listeningTo = this._listeningTo;
        if (listeningTo) {
            const ids = obj ? [obj._listenId] : Object.keys(listeningTo);
            ids.forEach(id => {
                const listening = listeningTo[id];
                if (listening) {
                    listening.obj.off(name, callback, this);
                    if (listening.interop) {listening.off(name, callback);}
                }
            });
            if (isEmpty(listeningTo)) {this._listeningTo = void 0;}
        }
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
        let cleanup;
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
