/**
 * @file Voxel module
 * @requires common
 * @requires eventListener
 * @requires positioned
 * @requires core/Mesh
 * @requires core/ImageFace
 * @requires core/ColorFace
 * @module core/Voxel
**/
'use strict';

const {assign, keys} = Object;
const {abs, asin, max, min, PI, pow, sqrt} = Math;
const {multiplyMatrices, generateRotationMatrix} = require('./common');
const eventListener = require('./eventListener');
const positioned    = require('./positioned');
const Mesh          = require('./Mesh');
const ImageFace     = require('./ImageFace');
const ColorFace     = require('./ColorFace');

module.exports = Voxel;

// EVENTS
//    onCubeClick
//    onTopClick
//    onBottomClick
//    onFrontClick
//    onBackClick
//    onLeftClick
//    onRightClick
//    onMeshChange
/**
 * @name Voxel
 * @constructor
 * @param {number} x X position of voxel
 * @param {number} y Y position of voxel
 * @param {number} z Z position of voxel
 * @param {number} dim Size of voxel
 * @param {object} options Options to customize voxel
 * @param {Mesh} [options.mesh] Voxel mesh
**/
function Voxel() {
    let self = this;
    let cubeElement;
    let animElement;
    let faces = {};
    let mesh;
    let dimension = 0;
    let parentScene;
    assign(self, {
        setMesh,
        getMesh,
        animUp,
        animDown,
        addToScene,
        removeFromScene,
        setParentScene,
        removeParentScene,
        setDimension,
        getDimension,
        getDomElement,
        updateLightSource,
        clone
    });
    function setMesh(_mesh) {
        if (_mesh === undefined || _mesh.constructor !== Mesh) {
            return;
        }
        var old = mesh;
        if (!!old) {old.removeEventListener('change', onMeshChange);}
        mesh = _mesh;
        mesh.addEventListener('change', onMeshChange);
        applyMesh();
        return old;
    }
    function getMesh() {
        return mesh;
    }
    function animUp(scene) {
        if (scene === undefined) {
            throw 'Scene required to add voxel to scene';
        }
        parentScene = scene;
        animElement.setAttribute('class', 'animated-up');
        appendToScene();
    }
    function animDown(scene) {
        if (scene === undefined) {
            throw 'Scene required to add voxel to scene';
        }
        parentScene = scene;
        animElement.setAttribute('class', 'animated-down');
        appendToScene();
    }
    function addToScene(scene) {
        if (scene === undefined) {
            throw 'Scene required to add voxel to scene';
        }
        parentScene = scene;
        animElement.setAttribute('class', 'animated');
        appendToScene();
    }
    function removeFromScene() {
        if (parentScene === undefined) {
            return;
        }
        parentScene.remove(self);
    }
    function setParentScene(scene) {
        parentScene = scene;
    }
    function removeParentScene() {
        parentScene = undefined;
    }
    function setDimension(dim) {
        if (dim === undefined || typeof dim !== 'number') {
            return dimension;
        }
        var old = dimension;
        dimension = dim;
        return old;
    }
    function getDimension() {
        return dimension;
    }
    function getDomElement() {
        return cubeElement;
    }
    function clone() {
        return new Voxel(self.getPositionX(), self.getPositionY(), self.getPositionZ(), dimension, {mesh});
    }
    function updateLightSource(lightSources) {
        let cubed = (val) => pow(val, 3);
        let front = 1;
        let back = 1;
        let left = 1;
        let right = 1;
        let top = 1;
        let bottom = 1;
        lightSources.forEach((lightSource) => {
            let position = [
                lightSource.getPositionX(),
                lightSource.getPositionY(),
                lightSource.getPositionZ()
            ];
            let brightness = lightSource.getBrightness();
            let travelDistance = lightSource.getTravelDistance();
            let scale = brightness[1] - brightness[0];
            let shift = 1 - brightness[1];
            let calculateOpacity = (unitVector) => {/* eslint-disable no-magic-numbers */
                let [A, B, C] = unitVector;
                let {angle, direction, distance} = angleFromLightSource(...position, {A, B, C});
                let percent = (direction < 0) ? 1 : min(1, cubed(1 - angle / (PI / 2)) + pow(distance / travelDistance, 6));
                return 1 - (percent * scale + shift);
            };/* eslint-enable no-magic-numbers */
            back = max(0, back - calculateOpacity([0, 0, -1]));
            front = max(0, front - calculateOpacity([0, 0, 1]));
            left = max(0, left - calculateOpacity([-1, 0, 0]));
            right = max(0, right - calculateOpacity([1, 0, 0]));
            top = max(0, top - calculateOpacity([0, 1, 0]));
            bottom = max(0, bottom - calculateOpacity([0, -1, 0]));
        });
        let sides = {front, back, left, right, top, bottom};
        keys(sides).forEach((side) => {
            faces[side].shader.style.opacity = sides[side];
        });
    }
    function angleFromLightSource(x, y, z, plane) {
        var rotationMatrix = generateRotationMatrix(parentScene.getRotationX(), -parentScene.getRotationY(), parentScene.getRotationZ());
        var point = {x, y, z};
        var rotated = rotate(point, rotationMatrix);
        rotated = {
            x: rotated.x - self.getPositionX() - plane.A * self.getDimension() / 2,
            y: rotated.y - self.getPositionY() - plane.B * self.getDimension() / 2,
            z: rotated.z - self.getPositionZ() - plane.C * self.getDimension() / 2
        };
        var distance = sqrt(pow(rotated.x, 2) + pow(rotated.y, 2) + pow(rotated.z, 2));
        var direction = abs(plane.C) === 1 ? plane.C * rotated.z : (abs(plane.B) === 1 ? plane.B * rotated.y : plane.A * rotated.x);
        var angle = asin(abs(rotated.x * plane.A + rotated.y * plane.B + rotated.z * plane.C) / distance);
        return {angle, direction, distance};
    }
    function rotate(point, rotationMatrix) {
        var columnVector = [[point.x], [point.y], [point.z]];
        var rotated = multiplyMatrices(rotationMatrix, columnVector);
        return {
            x: rotated[0][0],
            y: rotated[1][0],
            z: rotated[2][0]
        };
    }
    function applyMesh() {
        var _mesh = mesh.getFaces();
        /* eslint-disable guard-for-in */
        for (var label in faces) {
            var faceMesh = _mesh[label];
            if (faceMesh instanceof ImageFace) {
                faces[label].src = faceMesh.getSource();
                faces[label].removeAttribute('class');
            } else if (faceMesh instanceof ColorFace) {
                var faceElem = faces[label].parentElement;
                faceElem.style.background = '#' + faceMesh.getHex();
                faces[label].setAttribute('class', 'colored');
            }
        }
        /* eslint-enable guard-for-in */
    }
    function createCube() {
        cubeElement = createElement('div', 'voxelcss-cube');
        animElement = createElement('div', 'animated');
        createFace('top');
        createFace('bottom');
        createFace('front');
        createFace('back');
        createFace('left');
        createFace('right');
        cubeElement.appendChild(animElement);
    }
    function createFace(label) {
        let pixels = val => `${val}px`;
        let halfDimension = dimension / 2;
        let transformLookup = {
            top:    `rotateX(90deg) translateZ(${halfDimension}px)`,
            bottom: `rotateX(90deg) translateZ(-${halfDimension}px)`,
            left:   `rotateY(90deg) translateZ(-${halfDimension}px)`,
            right:  `rotateY(90deg) translateZ(${halfDimension}px)`,
            front:  `translateZ(${halfDimension}px)`,
            back:   `translateZ(-${halfDimension}px)`
        };
        let target = self;
        let handlerLookup = {
            top:    () => self.triggerEvent('TopClick', {target}),
            bottom: () => self.triggerEvent('BottomClick', {target}),
            left:   () => self.triggerEvent('LeftClick', {target}),
            right:  () => self.triggerEvent('RightClick', {target}),
            front:  () => self.triggerEvent('FrontClick', {target}),
            back:   () => self.triggerEvent('BackClick', {target})
        };
        let image = createElement('img', '');
        let shader = createElement('div', 'shader');
        var wrapper = createElement('div', 'voxelcss-face ' + label);
        faces[label] = assign(image, {shader});
        assign(wrapper.style, {
            width:      pixels(dimension),
            height:     pixels(dimension),
            marginLeft: pixels(-1 * halfDimension),
            marginTop:  pixels(-1 * halfDimension),
            transform:  transformLookup[label]
        });
        wrapper.addEventListener('click', handlerLookup[label]);
        wrapper.addEventListener('contextmenu', onVoxelClick);
        wrapper.appendChild(image);
        wrapper.appendChild(shader);
        animElement.appendChild(wrapper);
    }
    function createElement(type, className) {
        var elem = document.createElement(type);
        elem.setAttribute('class', className);
        return elem;
    }
    function updatePosition() {
        var position = self.getPosition();
        cubeElement.style.transform = 'translate3d(' + position.x + 'px, ' + -position.y + 'px, ' + position.z + 'px)';
    }
    function appendToScene() {
        parentScene.add(self);
    }
    function onMeshChange() {
        applyMesh();
        self.triggerEvent('MeshChange', {
            target: self,
            mesh: mesh
        });
    }
    function onVoxelClick(event) {
        event.preventDefault();
        self.triggerEvent('VoxelClick', {
            target: self
        });
        return false;
    }
    (function Constructor(x, y, z, dim, options) {
        positioned(eventListener(self));
        self.addEventListener('move', updatePosition);
        setDimension(dim);
        createCube();
        self.setPosition([x, y, z]);
        setMesh(new Mesh());
        if (options !== undefined && options.mesh !== undefined) {
            setMesh(options.mesh);
        }
    }).apply(self, arguments);
}
