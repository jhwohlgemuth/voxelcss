'use strict';

const Scene = require('../lib/Scene');
const World = require('../lib/World');

describe('World', function() {
    let world;
    it('can not be instantiated without Scene instance', () => {
        expect(() => {
            world = new World();
        }).toThrowError();
    });
    it('can be instantiated with label', () => {
        let label = 'Za Worudo';// Jo Jo reference
        let scene = new Scene();
        world = new World(scene, label);
    });
});
