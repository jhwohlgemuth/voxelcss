'use strict';

const eventListener = require('../lib/eventListener');
const positioned    = require('../lib/positioned');

describe('Positioned module', function() {
    let item;
    let position = [1, 2, 3];
    beforeEach(() => {
        item = positioned(eventListener({}));
    });
    it('can get and set position', () => {
        expect(item.getPosition()).toEqual({x: 0, y: 0, z: 0});
        item.setPosition(position);
        expect(item.getPosition()).toEqual({x: 1, y: 2, z: 3});
    });
    it('can translate in 3-dimensions', () => {
        expect(item.getPosition()).toEqual({x: 0, y: 0, z: 0});
        item.setPosition(position);
        item.translate(1, 2, 3);
        expect(item.getPosition()).toMatchSnapshot();
        item.translate(-2, -4, -6);
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
