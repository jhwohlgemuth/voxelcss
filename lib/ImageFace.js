/**
 * @file Image faces for voxels
 * @requires eventListener
 * @module core/ImageFace
**/
'use strict';

const eventListener = require('./eventListener');
const EMPTYGIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

module.exports = ImageFace;

/**
 * @name ImageFace
 * @constructor
 * @fires module:core/ImageFace~change
 * @param {string} image base64 encoded image string
**/
function ImageFace(image) {
    let self = this;
    let source = EMPTYGIF;
    Object.assign(self, {
        setSource,
        getSource: () => source,
        serialize: () => source,
        clone: () => new ImageFace(source)
    });
    eventListener(self);
    setSource(image);
    function setSource(src) {
        if (!src) {return source;}
        let old = source;
        source = src;
        self.triggerEvent('change', {target: self});
        return old;
    }
}
/**
 * @function loadFromSerial
 * @memberof module:core/ImageFace~ImageFace
 * @param {string} image Serialized image data (base64 format string)
 * @returns {module:core/ImageFace~ImageFace} New ImageFace instance
**/
ImageFace.loadFromSerial = function LoadFromSerial(image) {
    return new ImageFace(image);
};

/**
 * @event module:core/ImageFace~change
 * @description Fired when face is changed
 * @type {object}
 * @prop {object} target Object that triggered event
**/
