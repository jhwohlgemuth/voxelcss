'use strict';

const {assign}   = Object;
const events     = require('../lib/events');
const positioned = require('../lib/positioned');

describe('Positioned module', function() {
    let item;
    let position = [1, 2, 3];
    beforeEach(() => {
        item = positioned(assign({}, events));
    });
    it('can get and set position', () => {
        expect(item.getPosition()).toEqual({x: 0, y: 0, z: 0});
        item.setPosition(position);
        expect(item.getPosition()).toEqual({x: 1, y: 2, z: 3});
        item.setPosition([]);
        expect(item.getPosition()).toEqual({x: 1, y: 2, z: 3});
    });
    it('can trigger move when setting position', () => {
        item.trigger = jest.fn();
        item.setPositionX(1);
        item.setPositionY(2);
        item.setPositionZ(3);
        expect(item.trigger.mock.calls).toMatchSnapshot();
    });
    it('can translate in 3-dimensions', () => {
        expect(item.getPosition()).toEqual({x: 0, y: 0, z: 0});
        item.setPosition(position);
        item.translate(1, 2, 3);
        expect(item.getPosition()).toMatchSnapshot();
        let restore = [1, 2, 3].map(val => (-1 * 2 * val));
        item.translate(...restore);
        expect(item.getPosition()).toEqual({x: 0, y: 0, z: 0});
    });
    it('can only translate number values', () => {
        expect(item.getPosition()).toEqual({x: 0, y: 0, z: 0});
        item.translate('not', 'a', 'number');
        expect(item.getPosition()).toEqual({x: 0, y: 0, z: 0});
        item.translate(undefined, undefined, undefined);
        expect(item.getPosition()).toEqual({x: 0, y: 0, z: 0});
    });
});
