'use strict';

const Voxel = require('../lib/Voxel');

describe('Voxel', function() {
    let voxel;
    beforeEach(() => {
        voxel = new Voxel();
    });
    it('can be instantiated with dimension 0', () => {
        expect(voxel.getDimension()).toEqual(0);
    });
});
