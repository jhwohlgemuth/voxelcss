/**
 * @module core/Mesh
 * @requires common
 * @requires eventListener
 * @requires core/ImageFace
 * @requires core/ColorFace
**/
'use strict';

const {assign}      = Object;
const eventListener = require('./eventListener');
const ImageFace     = require('./ImageFace');
const ColorFace     = require('./ColorFace');

const FACETYPES = {
    image: ImageFace,
    color: ColorFace
};

module.exports = Mesh;

/**
 * @name Mesh
 * @constructor
 * @fires module:core/Mesh~change
 * @param {object} faces Face data
**/
function Mesh(faces) {
    let front;
    let back;
    let left;
    let right;
    let top;
    let bottom;
    let canTriggerEvent = true;
    let isValid = face => (face !== undefined && containsFaceType(face));
    let self = assign(eventListener(this), {
        setFront,
        setBack,
        setLeft,
        setRight,
        setTop,
        setBottom,
        setFaces,
        getFaces,
        serialize,
        getFront: () => front,
        getBack: () => back,
        getLeft: () => left,
        getRight: () => right,
        getTop: () => top,
        getBottom: () => bottom
    });
    setFaces(new ImageFace());
    setFaces(faces);
    function getFaceKeyByType(type) {
        /* eslint-disable guard-for-in */
        for (var key in FACETYPES) {
            var value = FACETYPES[key];
            if (value === type) {
                return key;
            }
        }
        /* eslint-enable guard-for-in */
        return null;
    }
    function containsFaceType(face) {
        return !!getFaceKeyByType(face.constructor);
    }
    function setFront(face) {
        if (isValid(face)) {
            front && front.removeEventListener('change', onFaceChangeEvent);
            front = face;
            face.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setBack(face) {
        if (isValid(face)) {
            back && back.removeEventListener('change', onFaceChangeEvent);
            back = face;
            back.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setLeft(face) {
        if (isValid(face)) {
            left && left.removeEventListener('change', onFaceChangeEvent);
            left = face;
            left.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setRight(face) {
        if (isValid(face)) {
            right && right.removeEventListener('change', onFaceChangeEvent);
            right = face;
            right.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setTop(face) {
        if (isValid(face)) {
            top && top.removeEventListener('change', onFaceChangeEvent);
            top = face;
            top.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setBottom(face) {
        if (isValid(face)) {
            bottom && bottom.removeEventListener('change', onFaceChangeEvent);
            bottom = face;
            bottom.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setFaces(faces) {
        var old = getFaces();
        if (faces === undefined) {return old;}
        if (containsFaceType(faces)) {
            faces = {
                front: faces,
                back: faces,
                top: faces,
                bottom: faces,
                left: faces,
                right: faces
            };
        }
        canTriggerEvent = false;
        setFront(faces.front);
        setBack(faces.back);
        setLeft(faces.left);
        setRight(faces.right);
        setTop(faces.top);
        setBottom(faces.bottom);
        triggerChangeEvent();
        canTriggerEvent = true;
        return old;
    }
    function getFaces() {
        return {front, back, left, right, top, bottom};
    }
    function serialize() {
        return JSON.stringify({
            front: serializeFace(front),
            back: serializeFace(back),
            left: serializeFace(left),
            right: serializeFace(right),
            top: serializeFace(top),
            bottom: serializeFace(bottom)
        });
    }
    function serializeFace(face) {
        return getFaceKeyByType(face.constructor) + '(' + face.serialize() + ')';
    }
    function onFaceChangeEvent() {
        triggerChangeEvent();
    }
    function triggerChangeEvent() {
        let target = self;
        let faces = getFaces();
        self.triggerEvent('change', {target, faces});
    }
}
/**
 * @function loadFromSerial
 * @memberof module:core/Mesh~Mesh
 * @param {string} data Serialized data (JSON format string)
 * @returns {module:core/Mesh~Mesh} New Mesh instance
**/
Mesh.loadFromSerial = function LoadFromSerial(data) {
    let {front, back, left, right, top, bottom} = JSON.parse(data);
    return new Mesh({
        front: loadFaceFromSerial(front),
        back: loadFaceFromSerial(back),
        left: loadFaceFromSerial(left),
        right: loadFaceFromSerial(right),
        top: loadFaceFromSerial(top),
        bottom: loadFaceFromSerial(bottom)
    });
};
function loadFaceFromSerial(compositeSerial) {
    let index = compositeSerial.indexOf('(');
    let type = compositeSerial.slice(0, index);
    let typeSerial = compositeSerial.slice(index + 1, -1);
    return FACETYPES[type].loadFromSerial(typeSerial);
}
