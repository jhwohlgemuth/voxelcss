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
 * @param {object} options
**/
function Voxel() {
    let self = this;
    let undefined;
    let cubeElement;
    let animElement;
    let faces = {};
    let mesh;
    let dimension = 0;
    let parentScene;
    Object.assign(self, {
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
        animElement.setAttribute('class', 'anim up');
        appendToScene();
    }
    function animDown(scene) {
        if (scene === undefined) {
            throw 'Scene required to add voxel to scene';
        }
        parentScene = scene;
        animElement.setAttribute('class', 'anim down');
        appendToScene();
    }
    function addToScene(scene) {
        if (scene === undefined) {
            throw 'Scene required to add voxel to scene';
        }
        parentScene = scene;
        animElement.setAttribute('class', 'anim');
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
        var front = 1;
        var back = 1;
        var left = 1;
        var right = 1;
        var top = 1;
        var bottom = 1;
        for (var i = 0, lightSource; lightSource = lightSources[i++];) {
            var brightness = lightSource.getBrightness();
            var scale = brightness[1] - brightness[0];
            var shift = 1 - brightness[1];
            var x = lightSource.getPositionX();
            var y = lightSource.getPositionY();
            var z = lightSource.getPositionZ();
            var result;
            var angle;
            var percent;
            var opacity;
            if (back > 0) {
                result = angleFromLightSource(x, y, z, {A: 0, B: 0, C: -1});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                back = Math.max(0, back - (1 - opacity));
            }
            if (front > 0) {
                result = angleFromLightSource(x, y, z, {A: 0, B: 0, C: 1});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                front = Math.max(0, front - (1 - opacity));
            }
            if (left > 0) {
                result = angleFromLightSource(x, y, z, {A: -1, B: 0, C: 0});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                left = Math.max(0, left - (1 - opacity));
            }
            if (right > 0) {
                result = angleFromLightSource(x, y, z, {A: 1, B: 0, C: 0});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                right = Math.max(0, right - (1 - opacity));
            }
            if (top > 0) {
                result = angleFromLightSource(x, y, z, {A: 0, B: 1, C: 0});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                top = Math.max(0, top - (1 - opacity));
            }
            if (bottom > 0) {
                result = angleFromLightSource(x, y, z, {A: 0, B: -1, C: 0});
                angle = result.angle;
                percent = 1 - angle / (Math.PI / 2);
                percent = applyLightingCurve(percent);
                percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
                opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
                bottom = Math.max(0, bottom - (1 - opacity));
            }
        }
        faces.front.shader.style.opacity = front;
        faces.back.shader.style.opacity = back;
        faces.left.shader.style.opacity = left;
        faces.right.shader.style.opacity = right;
        faces.top.shader.style.opacity = top;
        faces.bottom.shader.style.opacity = bottom;
    }
    // changes how light something is while in the light and how dark something is while in the dark
    function applyLightingCurve(percent) {
        return Math.pow(percent, 3);
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
        const {abs, asin, pow, sqrt} = Math;
        var distance = sqrt(pow(rotated.x, 2) + pow(rotated.y, 2) + pow(rotated.z, 2));
        var direction = abs(plane.C) === 1 ? plane.C * rotated.z : (Math.abs(plane.B) === 1 ? plane.B * rotated.y : plane.A * rotated.x);
        var angle = asin(abs(rotated.x * plane.A + rotated.y * plane.B + rotated.z * plane.C) / (sqrt(pow(rotated.x, 2) + pow(rotated.y, 2) + pow(rotated.z, 2))));
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
    function onMeshChange() {
        applyMesh();
        self.triggerEvent('MeshChange', {target: self, mesh: mesh});
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
        cubeElement = createElement('div', 'cube');
        animElement = createElement('div', 'anim');
        createFace('top');
        createFace('bottom');
        createFace('front');
        createFace('back');
        createFace('left');
        createFace('right');
        cubeElement.appendChild(animElement);
    }
    function createFace(label) {
        var wrapper = createElement('div', 'face ' + label);
        wrapper.style.width = dimension + 'px';
        wrapper.style.height = dimension + 'px';
        wrapper.style.marginLeft = -dimension / 2 + 'px';
        wrapper.style.marginTop = -dimension / 2 + 'px';
        switch (label) {
            case 'top' :
                wrapper.style.transform = 'rotateX(90deg) translateZ(' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onTopClicked);
                break;
            case 'bottom':
                wrapper.style.transform = 'rotateX(90deg) translateZ(-' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onBottomClicked);
                break;
            case 'left' :
                wrapper.style.transform = 'rotateY(90deg) translateZ(-' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onLeftClicked);
                break;
            case 'right' :
                wrapper.style.transform = 'rotateY(90deg) translateZ(' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onRightClicked);
                break;
            case 'front' :
                wrapper.style.transform = 'translateZ(' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onFrontClicked);
                break;
            case 'back' :
                wrapper.style.transform = 'translateZ(-' + dimension / 2 + 'px)';
                wrapper.addEventListener('click', onBackClicked);
                break;
            default:
                break;
        }
        wrapper.addEventListener('contextmenu', onVoxelClick);
        var image = createElement('img', '');
        faces[label] = image;
        var shader = createElement('div', 'shader');
        faces[label].shader = shader;
        wrapper.appendChild(image);
        wrapper.appendChild(shader);
        animElement.appendChild(wrapper);
    }
    function createElement(type, cls) {
        var elem = document.createElement(type);
        elem.setAttribute('class', cls);
        return elem;
    }
    function updatePosition() {
        var position = self.getPosition();
        cubeElement.style.transform = 'translate3d(' + position.x + 'px, ' + -position.y + 'px, ' + position.z + 'px)';
    }
    function appendToScene() {
        parentScene.add(self);
    }
    function onVoxelClick(event) {
        event.preventDefault();
        self.triggerEvent('VoxelClick', {
            target: self
        });
        return false;
    }
    function onTopClicked() {
        self.triggerEvent('TopClick', {
            target: self
        });
    }
    function onBottomClicked() {
        self.triggerEvent('BottomClick', {
            target: self
        });
    }
    function onLeftClicked() {
        self.triggerEvent('LeftClick', {
            target: self
        });
    }
    function onRightClicked() {
        self.triggerEvent('RightClick', {
            target: self
        });
    }
    function onFrontClicked() {
        self.triggerEvent('FrontClick', {
            target: self
        });
    }
    function onBackClicked() {
        self.triggerEvent('BackClick', {
            target: self
        });
    }
    (function Constructor(x, y, z, dim, options) {
        positioned(eventListener(self));
        self.addEventListener('move', updatePosition);
        setDimension(dim);
        createCube();
        self.setPosition(x, y, z);
        setMesh(new Mesh());
        if (options !== undefined && options.mesh !== undefined) {
            setMesh(options.mesh);
        }
    }).apply(self, arguments);
}
