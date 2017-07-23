'use strict';

const LightSource = require('../lib/LightSource');

describe('Light Source', function() {
    let lightsource;
    let position = [1, 2, 3];
    beforeEach(function() {
        lightsource = new LightSource(...position);
    });
    it('can set travel distance', function() {
        expect(lightsource.getTravelDistance()).toMatchSnapshot();
        lightsource.setTravelDistance();
        expect(lightsource.getTravelDistance()).toMatchSnapshot();
        lightsource.setTravelDistance('Not a number');
        expect(lightsource.getTravelDistance()).toMatchSnapshot();
        lightsource.setTravelDistance(1000);
        expect(lightsource.getTravelDistance()).toMatchSnapshot();
    });
    it('can get and set brightness', function() {
        lightsource.setBrightness(1, 2);
        expect(lightsource.getBrightness()).toMatchSnapshot();
    });
});
