/**
 * @module core/ImageFace
 * @requires eventListener
**/
'use strict';

const {assign} = Object;
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
    let source = EMPTYGIF;
    let getSource = () => source;
    let self = assign(eventListener(this), {
        setSource,
        getSource,
        serialize: getSource,
        clone: () => new ImageFace(source)
    });
    setSource(image);
    function setSource(image) {
        if (image) {
            source = image;
            self.triggerEvent('change', {target: self});
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
