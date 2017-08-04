/**
 * @module core/Mesh
 * @requires eventListener
 * @requires core/ImageFace
 * @requires core/ColorFace
**/
'use strict';

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
    let self = this;
    let front;
    let back;
    let left;
    let right;
    let top;
    let bottom;
    let canTriggerEvent = true;
    let isInvalid = face => (face === undefined || !containsFaceType(face));
    Object.assign(self, {
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
    eventListener(self);
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
        if (isInvalid(face)) {return;}
        var old = front;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        front = face;
        front.addEventListener('change', onFaceChangeEvent);
        canTriggerEvent && triggerChangeEvent();
        return old;
    }
    function setBack(face) {
        if (isInvalid(face)) {return;}
        var old = back;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        back = face;
        back.addEventListener('change', onFaceChangeEvent);
        canTriggerEvent && triggerChangeEvent();
        return old;
    }
    function setLeft(face) {
        if (isInvalid(face)) {return;}
        var old = left;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        left = face;
        left.addEventListener('change', onFaceChangeEvent);
        canTriggerEvent && triggerChangeEvent();
        return old;
    }
    function setRight(face) {
        if (isInvalid(face)) {return;}
        var old = right;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        right = face;
        right.addEventListener('change', onFaceChangeEvent);
        canTriggerEvent && triggerChangeEvent();
        return old;
    }
    function setTop(face) {
        if (isInvalid(face)) {return;}
        var old = top;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        top = face;
        top.addEventListener('change', onFaceChangeEvent);
        canTriggerEvent && triggerChangeEvent();
        return old;
    }
    function setBottom(face) {
        if (isInvalid(face)) {return;}
        var old = bottom;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        bottom = face;
        bottom.addEventListener('change', onFaceChangeEvent);
        canTriggerEvent && triggerChangeEvent();
        return old;
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

/**
 * @event module:core/Mesh~change
 * @description Fired when face is changed
 * @type {object}
 * @prop {object} target Object that triggered event
 * @prop {object} faces Face data
 * @prop {object} faces.front Data for front face
 * @prop {object} faces.back Data for back face
 * @prop {object} faces.left Data for left face
 * @prop {object} faces.right Data for right face
 * @prop {object} faces.top Data for top face
 * @prop {object} faces.bottom Data for bottom face
**/
