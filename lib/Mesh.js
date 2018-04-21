/* @flow */
import type {Faces} from './types';

/**
 * @module core/Mesh
 * @requires common
 * @requires events
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
const events    = require('./events');
const ImageFace = require('./ImageFace');
const ColorFace = require('./ColorFace');

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
function Mesh(faces?: Faces) {
    let front;
    let back;
    let left;
    let right;
    let top;
    let bottom;
    let canTriggerEvent = true;
    const isValid = face => (face !== undefined && containsFaceType(face));
    const self = assign(this, events, {
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
            front.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setBack(face) {
        if (isValid(face)) {
            back = face;
            back.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setLeft(face) {
        if (isValid(face)) {
            left = face;
            left.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setRight(face) {
        if (isValid(face)) {
            right = face;
            right.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setTop(face) {
        if (isValid(face)) {
            top = face;
            top.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setBottom(face) {
        if (isValid(face)) {
            bottom = face;
            bottom.on('change', onFaceChangeEvent);
            canTriggerEvent && triggerChangeEvent();
        }
        return self;
    }
    function setFaces(faces: any): Faces {
        const old = getFaces();
        if (faces) {
            if (containsFaceType(faces)) {
                faces = mapValues(getFaces(), constant(faces));
            }
            canTriggerEvent = false;
            const {front, back, left, right, top, bottom} = faces;
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
    function getFaces(): Faces {
        return {front, back, left, right, top, bottom};
    }
    function serialize() {
        return JSON.stringify(mapValues(getFaces(), serializeFace));
    }
    function serializeFace(face) {
        return `${getFaceKeyByType(face.constructor) }(${ face.serialize() })`;
    }
    function onFaceChangeEvent() {
        triggerChangeEvent();
    }
    function triggerChangeEvent() {
        const target = self;
        const faces = getFaces();
        self.trigger('change', {target, faces});
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
    const index = compositeSerial.indexOf('(');
    const type = compositeSerial.slice(0, index);
    const typeSerial = compositeSerial.slice(index + 1, -1);
    return FACETYPES[type].loadFromSerial(typeSerial);
}
