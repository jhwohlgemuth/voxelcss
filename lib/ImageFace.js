/**
 * @module core/ImageFace
 * @requires events
**/
'use strict';

const {assign} = Object;
const events = require('./events');
const EMPTYGIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

module.exports = ImageFace;

/**
 * @name ImageFace
 * @constructor
 * @fires module:core/ImageFace~change
 * @param {string} image base64 encoded image string
**/
function ImageFace(image) {
    let source = EMPTYGIF;
    const getSource = () => source;
    const self = assign(this, events, {
        setSource,
        getSource,
        serialize: getSource,
        clone: () => new ImageFace(source)
    });
    setSource(image);
    function setSource(image) {
        if (image) {
            source = image;
            self.trigger('change', {target: self});
        }
        return source;
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
