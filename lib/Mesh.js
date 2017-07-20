/**
 * @file Mesh module
 * @requires eventListener
 * @requires core/ImageFace
 * @requires core/ColorFace
 * @module core/Mesh
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

// events -> onchange
function Mesh() {
    let self = this;
    let front;
    let back;
    let left;
    let right;
    let top;
    let bottom;
    let canTriggerEvent = true;
    Object.assign(self, {
        setFront,
        setBack,
        setLeft,
        setRight,
        setTop,
        setBottom,
        getFront,
        getBack,
        getLeft,
        getRight,
        getTop,
        getBottom,
        setFaces,
        getFaces,
        serialize
    });
    function setFront(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = front;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        front = face;
        front.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function setBack(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = back;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        back = face;
        back.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function setLeft(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = left;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        left = face;
        left.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function setRight(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = right;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        right = face;
        right.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function setTop(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = top;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        top = face;
        top.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function setBottom(face) {
        if (face === undefined || !containsFaceType(face)) {return;}
        var old = bottom;
        if (!!old) {old.removeEventListener('change', onFaceChangeEvent);}
        bottom = face;
        bottom.addEventListener('change', onFaceChangeEvent);
        if (canTriggerEvent) {triggerChangeEvent();}
        return old;
    }
    function getFront() {
        return front;
    }
    function getBack() {
        return back;
    }
    function getLeft() {
        return left;
    }
    function getRight() {
        return right;
    }
    function getTop() {
        return top;
    }
    function getBottom() {
        return bottom;
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
    function containsFaceType(face) {
        return !!getFaceKeyByType(face.constructor);
    }
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
    function onFaceChangeEvent() {
        triggerChangeEvent();
    }
    function triggerChangeEvent() {
        self.triggerEvent('change', {target: self, faces: getFaces()});
    }
    (function Constructor(faces) {
        eventListener(self);
        setFaces(new ImageFace());
        setFaces(faces);
    }).apply(self, arguments);
}
Mesh.loadFromSerial = function LoadFromSerial(serial) {
    let {front, back, left, right, top, bottom} = JSON.parse(serial);
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
