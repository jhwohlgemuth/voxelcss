'use strict';

const Scene = require('../lib/Scene');

describe('Scene', function() {
    let scene;
    beforeEach(() => {
        scene = new Scene();
    });
    it('can be instantiated with default pan', () => {
        expect(scene.getPan()).toEqual({x: 0, y: 0, z: 0});
    });
});
