/* @flow */
import type {Face, MeshType, ParentScene, VoxelOptions} from './types';

/**
 * @module core/Voxel
 * @requires common
 * @requires events
 * @requires positioned
 * @requires core/Mesh
 * @requires core/ImageFace
 * @requires core/ColorFace
 **/

const {assign, keys} = Object;
const {abs, asin, max, min, PI, pow, sqrt} = Math;
const {
    generateRotationMatrix,
    isNumber,
    isUndefined,
    multiplyMatrices
} = require('./common');
const events     = require('./events');
const positioned = require('./positioned');
const Mesh       = require('./Mesh');
const ImageFace  = require('./ImageFace');
const ColorFace  = require('./ColorFace');

const LONG_PRESS_DURATION = 250;
const DEFAULT_SIZE = 50;
const SIDES = ['top', 'bottom', 'front', 'back', 'left', 'right'];
const pixels = val => `${val}px`;
const translate = val => `translateZ(${val}px)`;
const transformX = val => `rotateX(90deg) ${translate(val)}`;
const transformY = val => `rotateY(90deg) ${translate(val)}`;

module.exports = Voxel;

/**
 * @name Voxel
 * @constructor
 * @param {number[]} [position] [x, y, z] of voxel
 * @param {number} [size=50] Size of voxel
 * @param {object} [options={}] Options to customize voxel
 * @param {Mesh} [options.mesh] Voxel mesh
**/
function Voxel(position: number[] = [0, 0, 0], size: number = DEFAULT_SIZE, options: VoxelOptions = {}) {
    let longTouchTimer;
    let cubeElement;
    let animElement;
    let parentScene: ParentScene;
    let mesh: MeshType;
    const faces = {};
    let dimension = 0;
    const self = assign(positioned(assign(this, events)), {
        clone,
        animUp,
        animDown,
        addToScene,
        removeFromScene,
        setParentScene,
        removeParentScene,
        setDimension,
        getDimension,
        updateLightSource,
        setMesh,
        getMesh: () => mesh,
        getDomElement: () => cubeElement,
        getAnimatedElement: () => animElement
    });
    self.on('move', updatePosition);
    setDimension(size);
    createCube();
    self.setPosition(position);
    setMesh(isUndefined(options.mesh) ? new Mesh() : options.mesh);
    function setMesh(data: any = {}) {
        if (data.constructor === Mesh) {
            const old = mesh;
            old && old.off('change');
            mesh = data;
            mesh.on('change', () => {
                applyMesh();
                const target = self;
                self.trigger('change:mesh', {target, mesh});
            });
            applyMesh();
        }
    }
    function animUp(scene) {
        if (scene) {
            parentScene = scene;
            animElement.setAttribute('class', 'animated-up');
            appendToScene();
        } else {
            throw 'Scene required to add voxel to scene';
        }
    }
    function animDown(scene) {
        if (scene) {
            parentScene = scene;
            animElement.setAttribute('class', 'animated-down');
            appendToScene();
        } else {
            throw 'Scene required to add voxel to scene';
        }
    }
    function addToScene(scene) {
        if (scene) {
            parentScene = scene;
            animElement.setAttribute('class', 'animated');
            appendToScene();
        } else {
            throw 'Scene required to add voxel to scene';
        }
    }
    function appendToScene() {
        parentScene.add(self);
    }
    function removeFromScene() {
        parentScene && parentScene.remove(self);
    }
    function setParentScene(scene) {
        parentScene = scene;
    }
    function removeParentScene() {
        // $FlowFixMe
        parentScene = undefined;
    }
    function setDimension(val) {
        if (isNumber(val)) {
            dimension = val;
        }
    }
    function getDimension() {
        return dimension;
    }
    function clone() {
        return new Voxel([self.getPositionX(), self.getPositionY(), self.getPositionZ()], dimension, {mesh});
    }
    function updateLightSource(lightSources) {
        const cubed = val => pow(val, 3);
        let front = 1;
        let back = 1;
        let left = 1;
        let right = 1;
        let top = 1;
        let bottom = 1;
        lightSources.forEach(lightSource => {
            const position = [
                lightSource.getPositionX(),
                lightSource.getPositionY(),
                lightSource.getPositionZ()
            ];
            const brightness = lightSource.getBrightness();
            const travelDistance = lightSource.getTravelDistance();
            const scale = brightness[1] - brightness[0];
            const shift = 1 - brightness[1];
            const calculateOpacity = unitVector => {/* eslint-disable no-magic-numbers */
                const [A, B, C] = unitVector;
                const {angle, direction, distance} = angleFromLightSource(position, {A, B, C});
                const percent = (direction < 0) ? 1 : min(1, cubed(1 - angle / (PI / 2)) + pow(distance / travelDistance, 6));
                return 1 - (percent * scale + shift);
            };/* eslint-enable no-magic-numbers */
            back = max(0, back - calculateOpacity([0, 0, -1]));
            front = max(0, front - calculateOpacity([0, 0, 1]));
            left = max(0, left - calculateOpacity([-1, 0, 0]));
            right = max(0, right - calculateOpacity([1, 0, 0]));
            top = max(0, top - calculateOpacity([0, 1, 0]));
            bottom = max(0, bottom - calculateOpacity([0, -1, 0]));
        });
        const sides = {front, back, left, right, top, bottom};
        keys(sides).forEach(side => {
            faces[side].shader.style.opacity = sides[side];
        });
    }
    function angleFromLightSource(position, plane) {
        const xRotation = parentScene.getRotationX();
        const yRotation = parentScene.getRotationY();
        const zRotation = parentScene.getRotationZ();
        const rotationMatrix = generateRotationMatrix(xRotation, -yRotation, zRotation);
        const {A, B, C} = plane;
        let rotated = rotate(position, rotationMatrix);
        rotated = {
            x: rotated.x - self.getPositionX() - A * getDimension() / 2,
            y: rotated.y - self.getPositionY() - B * getDimension() / 2,
            z: rotated.z - self.getPositionZ() - C * getDimension() / 2
        };
        const {x, y, z} = rotated;
        const distance = sqrt(pow(x, 2) + pow(y, 2) + pow(z, 2));
        const direction = abs(C) === 1 ? C * z : (abs(B) === 1 ? B * y : A * x);
        const angle = asin(abs(x * A + y * B + z * C) / distance);
        return {angle, direction, distance};
    }
    function rotate(point, rotationMatrix) {
        const [x, y, z] = point;
        const columnVector = [[x], [y], [z]];
        const rotated = multiplyMatrices(rotationMatrix, columnVector);
        return {
            x: rotated[0][0],
            y: rotated[1][0],
            z: rotated[2][0]
        };
    }
    function applyMesh() {
        const data = mesh.getFaces();
        SIDES.forEach(side => {
            const faceMesh = data[side];
            // $FlowFixMe
            const face: Face = faces[side];
            if (faceMesh instanceof ImageFace) {
                face.src = faceMesh.getSource();
                face.removeAttribute('class');
            }
            if (faceMesh instanceof ColorFace) {
                const faceElem = face.parentElement;
                faceElem.style.background = `#${ faceMesh.getHex()}`;
                face.setAttribute('class', 'colored');
            }
        });
    }
    function createCube() {
        cubeElement = createElement('div', 'voxelcss-cube');
        animElement = createElement('div', 'animated');
        SIDES.forEach(side => createFace(side));
        cubeElement.appendChild(animElement);
    }
    function createFace(label) {
        const target = self;
        const transformLookup = {
            top:    transformX(dimension / 2),
            bottom: transformX(-dimension / 2),
            left:   transformY(-dimension / 2),
            right:  transformY(dimension / 2),
            front:  translate(dimension / 2),
            back:   translate(-dimension / 2)
        };
        const handlerLookup = SIDES.reduce((lookup, side) => assign(lookup, {[side]: () => self.trigger(`click:${side}`, {target})}), {});
        const image = createElement('img', '');
        const shader = createElement('div', 'shader');
        const wrapper = createElement('div', `voxelcss-face ${ label}`);
        // $FlowFixMe
        faces[label] = assign(image, {shader});
        assign(wrapper.style, {
            width:      pixels(dimension),
            height:     pixels(dimension),
            marginLeft: pixels(-1 * dimension / 2),
            marginTop:  pixels(-1 * dimension / 2),
            transform:  transformLookup[label]
        });
        wrapper.addEventListener('click', handlerLookup[label]);
        wrapper.addEventListener('contextmenu', (e: Event) => {
            e.preventDefault();
            self.trigger('contextmenu', {target: self});
            return false;
        });
        wrapper.addEventListener('touchstart', () => {
            longTouchTimer = setTimeout(() => self.trigger('contextmenu', {target: self}), LONG_PRESS_DURATION);
        });
        wrapper.addEventListener('touchend', (e: Event) => {
            e.preventDefault();
            clearTimeout(longTouchTimer);
            handlerLookup[label]();
        });
        wrapper.appendChild(image);
        wrapper.appendChild(shader);
        animElement.appendChild(wrapper);
    }
    function createElement(type, className) {
        const elem = document.createElement(type);
        elem.setAttribute('class', className);
        return elem;
    }
    function updatePosition() {
        const {x, y, z} = self.getPosition();
        cubeElement.style.transform = `translate3d(${x}px, ${-y}px, ${z}px)`;
    }
}
