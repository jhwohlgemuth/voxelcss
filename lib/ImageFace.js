/**
 * @file Image faces for voxels
 * @requires eventListener
 * @module core/ImageFace
**/
'use strict';

const eventListener = require('./eventListener');
const EMPTYGIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

module.exports = ImageFace;

// events -> onchange
function ImageFace() {
    var self = this;
    var source = EMPTYGIF;
    self.setSource = setSource;
    self.getSource = function() {
        return source;
    };
    self.serialize = function() {
        return source;
    };
    self.clone = function() {
        return new ImageFace(source);
    };
    function setSource(src) {
        if (!src) {return source;}
        var old = source;
        source = src;
        self.triggerEvent('change', {target: self});
        return old;
    }
    (function Constructor(src) {
        eventListener(self);
        setSource(src);
    }).apply(self, arguments);
}
ImageFace.loadFromSerial = function LoadFromSerial(serial) {
    return new ImageFace(serial);
};
