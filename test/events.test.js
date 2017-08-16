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
    it('can remove all listeners at once using off with no arguments', () => {
        o.on('foo bar', foo);
        o.on('baz', baz);
        o.off();
        o.trigger('foo');
        o.trigger('bar');
        o.trigger('baz');
        expect(foo).not.toHaveBeenCalled();
        expect(baz).not.toHaveBeenCalled();
    });
    it('can add one-time listener', () => {
        o.once('foo', foo);
        o.trigger('foo');
        o.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(1);
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
    });
    it('can listen to other objects (once)', () => {
        let a = assign({}, events);
        let b = assign({}, events);
        a.listenToOnce(b, 'foo', foo);
        b.trigger('foo');
        b.trigger('foo');
        expect(foo).toHaveBeenCalledTimes(1);
    });
});
