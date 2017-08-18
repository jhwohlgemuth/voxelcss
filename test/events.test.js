'use strict';

const {assign} = Object;
const events   = require('../lib/events');

describe('Events Module', function() {
    let o;
    let foo;
    let bar;
    let baz;
    beforeEach(() => {
        o = assign({}, events);
        foo = jest.fn();
        bar = jest.fn();
        baz = jest.fn();
    });
    afterEach(() => {
        o = undefined;
        foo.mockClear();
        bar.mockClear();
        baz.mockClear();
    });
    it('can add and remove listeners with on and off', () => {
        let count = 0;
        o.on('foo bar', foo);
        o.on('baz', baz);
        expect(foo).toHaveBeenCalledTimes(count);
        o.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(++count);
        o.off('foo');
        o.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(count);
        o.trigger('bar');
        expect(foo).toHaveBeenCalledTimes(++count);
        o.trigger('baz');
        expect(baz).toHaveBeenCalledTimes(1);
        o.off('bar');
        o.trigger('bar');
        expect(foo).toHaveBeenCalledTimes(count);
        o.off('baz');
        o.trigger('baz');
        expect(baz).toHaveBeenCalledTimes(1);
    });
    it('can add listeners using map syntax', () => {
        o.on({foo, bar});
        o.trigger('foo bar');
        expect(foo).toHaveBeenCalledTimes(1);
        expect(bar).toHaveBeenCalledTimes(1);
        o.off();
        o.on({
            'foo baz': baz
        });
        o.trigger('baz');
        expect(baz).toHaveBeenCalledTimes(1);
    });
    it('can create listeners for all events', () => {
        o.on('all', foo);
        o.trigger('foo');
        o.trigger('bar');
        expect(foo).toHaveBeenCalledTimes(2);
        o.off();
        o.on('all foo', foo);
        foo.mockClear();
        o.trigger('foo');
        o.trigger('bar');
        expect(foo).toHaveBeenCalledTimes(3);
    });
    it('can trigger multiple events', () => {
        o.on('foo bar', foo);
        o.on('baz', baz);
        o.trigger('foo bar baz');
        expect(foo).toHaveBeenCalledTimes(2);
        expect(baz).toHaveBeenCalledTimes(1);
    });
    it('can pass data with event triggers', () => {
        let data = 'foo was triggered';
        let payload = [];
        o.on('foo', foo);
        [0, 1, 2, 3].forEach(() => {
            payload = payload.concat(data);
            o.trigger('foo', ...payload);
        });
        expect(foo.mock.calls).toMatchSnapshot();
    });
    it('can remove all listeners using off with no arguments', () => {
        o.off();// does nothing
        o.on('foo bar', foo);
        o.on('baz', baz);
        o.off();
        o.trigger('foo');
        o.trigger('bar');
        o.trigger('baz');
        expect(foo).not.toHaveBeenCalled();
        expect(baz).not.toHaveBeenCalled();
    });
    it('can remove callbacks only', () => {
        o.on('foo', foo);
        o.on('bar', foo);
        o.off(null, foo);
        o.trigger('bar');
        expect(foo).not.toHaveBeenCalled();
    });
    it('can add one-time listener', () => {
        o.once('foo', foo);
        o.trigger('foo');
        o.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(1);
        o.once('foo', foo, null);
        o.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(2);
        o.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(2);
    });
    it('can listen to other objects', () => {
        let countA = 0;
        let countB = 0;
        let a = assign({}, events);
        let b = assign({}, events);
        a.listenTo(b, 'foo', foo);
        b.listenTo(a, 'baz', baz);
        a.trigger('baz');
        expect(baz).toHaveBeenCalledTimes(++countA);
        b.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(++countB);
        b.stopListening();
        a.trigger('baz');
        expect(baz).toHaveBeenCalledTimes(countA);
        b.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(++countB);
        a.stopListening(b);
        b.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(countB);
    });
    it('can listen to other objects (using map syntax)', () => {
        let countA = 0;
        let countB = 0;
        let a = assign({}, events);
        let b = assign({}, events);
        a.listenTo(b, {foo});
        b.listenTo(a, {baz});
        a.trigger('baz');
        expect(baz).toHaveBeenCalledTimes(++countA);
        b.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(++countB);
        b.stopListening();
        a.trigger('baz');
        expect(baz).toHaveBeenCalledTimes(countA);
        b.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(++countB);
        a.stopListening(b);
        b.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(countB);
    });
    it('can only listen to defined objects', () => {
        expect(o.listenTo(undefined, 'foo')).toMatchSnapshot();
    });
    it('can handle failed on during listenTo', () => {
        let a = assign({}, events);
        expect(() => {
            a.listenTo(new Error(), 'foo');
        }).toThrowErrorMatchingSnapshot();
    });
    it('can do nothing with stopListening is called with no listeners', () => {
        expect(o.stopListening()).toMatchSnapshot();
    });
    it('can listen to other objects (once)', () => {
        let a = assign({}, events);
        let b = assign({}, events);
        a.listenToOnce(b, 'foo', foo);
        b.trigger('foo');
        b.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(1);
    });
    it('can be used with other on/off interfaces', () => {
        let _events = {};
        let other = {
            on: (name, callback) => (_events[name] = callback),
            off: name => (_events[name] = null),
            trigger: (name, args) => {
                let cb = _events[name];
                typeof cb === 'function'  && cb(args);
            }
        };
        o.listenTo(other, 'foo', foo);
        other.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(1);
        expect(o._listeningTo).toMatchSnapshot();
        o.stopListening(other, 'foo');
        other.trigger('foo');
        expect(o._listeningTo).toMatchSnapshot();
        expect(foo).toHaveBeenCalledTimes(1);
    });
});