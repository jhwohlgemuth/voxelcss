/**
 * @module core/Mesh
 * @requires common
 * @requires eventListener
 * @requires core/ImageFace
 * @requires core/ColorFace
**/
'use strict';

const {assign} = Object;
const {
    constant,
    findKeyWithValue,
    mapValues
} = require('./common');
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
    setFaces(faces || new ImageFace());
    function getFaceKeyByType(value) {
        return findKeyWithValue(FACETYPES, value);
    }
    function containsFaceType(face) {
        return !!getFaceKeyByType(face.constructor);
    }
    function setFront(face) {
        if (isValid(face)) {
            front = face;
            front.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setBack(face) {
        if (isValid(face)) {
            back = face;
            back.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setLeft(face) {
        if (isValid(face)) {
            left = face;
            left.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setRight(face) {
        if (isValid(face)) {
            right = face;
            right.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setTop(face) {
        if (isValid(face)) {
            top = face;
            top.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setBottom(face) {
        if (isValid(face)) {
            bottom = face;
            bottom.addEventListener('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setFaces(faces) {
        var old = getFaces();
        if (faces) {
            if (containsFaceType(faces)) {
                faces = mapValues(getFaces(), constant(faces));
            }
            canTriggerEvent = false;
            let {front, back, left, right, top, bottom} = faces;
            self
                .setFront(front)
                .setBack(back)
                .setLeft(left)
                .setRight(right)
                .setTop(top)
                .setBottom(bottom);
            triggerChangeEvent();
            canTriggerEvent = true;
        }
        return old;
    }
    function getFaces() {
        return {front, back, left, right, top, bottom};
    }
    function serialize() {
        return JSON.stringify(mapValues(getFaces(), serializeFace));
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
    return new Mesh(mapValues(JSON.parse(data), loadFaceFromSerial));
};
function loadFaceFromSerial(compositeSerial) {
    let index = compositeSerial.indexOf('(');
    let type = compositeSerial.slice(0, index);
    let typeSerial = compositeSerial.slice(index + 1, -1);
    return FACETYPES[type].loadFromSerial(typeSerial);
}
