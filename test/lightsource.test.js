'use strict';

const LightSource = require('../lib/LightSource');

describe('Light Source', () => {
    let lightsource;
    const position = [1, 2, 3];
    beforeEach(() => {
        lightsource = new LightSource(position);
    });
    it('can set travel distance', () => {
        expect(lightsource.getTravelDistance()).toMatchSnapshot();
        lightsource.setTravelDistance();
        expect(lightsource.getTravelDistance()).toMatchSnapshot();
        lightsource.setTravelDistance('Not a number');
        expect(lightsource.getTravelDistance()).toMatchSnapshot();
        lightsource.setTravelDistance(1000);
        expect(lightsource.getTravelDistance()).toMatchSnapshot();
    });
    it('can get and set brightness', () => {
        lightsource.setBrightness(1, 2);
        expect(lightsource.getBrightness()).toMatchSnapshot();
    });
});
