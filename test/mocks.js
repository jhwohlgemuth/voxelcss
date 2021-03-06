'use strict';

const {assign} = Object;
const events   = require('../lib/events');
const Scene    = require('../lib/Scene');
const World    = require('../lib/World');

module.exports = {
    createVoxelMock,
    createWorldMock,
    reset
};

function createVoxelMock() {
    return assign(document.createElement('div'), events, {
        getDimension: jest.fn().mockReturnValue(100),
        clone: jest.fn().mockReturnThis(),
        translate: jest.fn().mockReturnThis(),
        getDomElement: jest.fn().mockReturnThis(),
        setParentScene: jest.fn(),
        removeParentScene: jest.fn(),
        updateLightSource: jest.fn()
    });
}
function createWorldMock() {
    const scene = new Scene();
    const world = new World(scene);
    return assign(world, {
        save: jest.fn(),
        deleteSave: jest.fn(),
        isSaved: jest.fn(),
        export: jest.fn(),
        load: jest.fn()
    });
}
function reset(world) {
    world.save.mockClear();
    world.deleteSave.mockClear();
    world.isSaved.mockClear();
    world.export.mockClear();
    world.load.mockClear();
}
