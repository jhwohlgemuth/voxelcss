/**
 * @module core/Scene
 * @description Basically a camera that can rotate, pan, zoom and contain voxels
 * @requires events
**/
'use strict';

const {assign} = Object;
const {isNumber, isShiftKey, not} = require('./common');
const events = require('./events');

let getX = e => (e.x || e.clientX || e.touches[0].pageX);
let getY = e => (e.y || e.clientY || e.touches[0].pageY);

module.exports = Scene;

/**
 * @name Scene
 * @constructor
 * @fires module:core/Scene~rotate
 * @fires module:core/Scene~pan
 * @fires module:core/Scene~zoom
 * @example <caption>Add a light source to a scene</caption>
 * const Voxelcss = require('voxelcss');
 * let scene = new Voxelcss.Scene();
 * let position = [300, 300, 300];
 * let distance = 750;
 * let source = new Voxelcss.LightSource(position, distance);
 * scene.attach(document.body);
 * scene.addLightSource(source);
**/
function Scene() {
    let parentContainer;
    let sceneElement;
    let zoomElement;
    let cameraElement;
    let isAttached = false;
    let x = 0;
    let y = 0;
    let z = 0;
    let rotation = {x, y, z};
    let _pan = {x, y, z};
    let _zoom = 1;
    let mouse = {
        current: {x, y},
        shiftDown: false
    };
    let canRotate = true;
    let canPan = true;
    let canZoom = true;
    let lightSources = [];
    let voxels = [];
    let getVoxels = () => voxels;
    let getRotation = () => rotation;
    let getLightSources = () => lightSources;
    let self = assign(this, events, {
        attach,
        detach,
        add, // voxel
        remove, // voxel
        getVoxels,
        pan,
        setPan,
        getPan,
        rotate,
        setRotation,
        getRotation,
        zoom,
        setZoom,
        getZoom,
        addLightSource,
        getLightSources,
        removeLightSource,
        canRotate: () => canRotate,
        canPan: () => canPan,
        canZoom: () => canZoom,
        enableRotate: () => (canRotate = true),
        enablePan: () => (canPan = true),
        enableZoom: () => (canZoom = true),
        disableRotate: () => (canRotate = false),
        disablePan: () => (canPan = false),
        disableZoom: () => (canZoom = false),
        isAttached: () => isAttached,
        getRotationX: () => rotation.x,
        getRotationY: () => rotation.y,
        getRotationZ: () => rotation.z,
        rotateX: val => rotateDimension('x', val),
        rotateY: val => rotateDimension('y', val),
        rotateZ: val => rotateDimension('z', val),
        setRotationX: val => setSceneDimensionRotation('x', val),
        setRotationY: val => setSceneDimensionRotation('y', val),
        setRotationZ: val => setSceneDimensionRotation('z', val),
        panX: val => panDimension('x', val),
        panY: val => panDimension('y', val),
        panZ: val => panDimension('z', val),
        setPanX: val => setSceneDimensionPan('x', val),
        setPanY: val => setSceneDimensionPan('y', val),
        setPanZ: val => setSceneDimensionPan('z', val),
        getElement: () => sceneElement,
        getParentElement: () => parentContainer,
        getInteractionState: val => (val ? mouse[val] : mouse),
        bind: () => {
            bindMouse();
            bindKeyboard();
        },
        unbind: () => {
            unbindMouse();
            unbindKeyboard();
        }
    });
    createSceneElement();
    bindMouse();
    bindKeyboard();

    function rotate(x, y, z) {
        rotateDimension('x', x);
        rotateDimension('y', y);
        rotateDimension('z', z);
        return self;
    }
    function setRotation(x, y, z) {
        setSceneDimensionRotation('x', x);
        setSceneDimensionRotation('y', y);
        setSceneDimensionRotation('z', z);
        updateSceneTransforms();
        return self;
    }
    function rotateDimension(dim, val) {
        if (isNumber(val)) {
            rotation[dim] += val;
            updateSceneTransforms();
        }
        return self;
    }
    function setSceneDimensionRotation(dim, val) {
        if (isNumber(val)) {
            rotation[dim] = val;
            updateSceneTransforms();
        }
        return self;
    }
    function pan(x, y, z) {
        panDimension('x', x);
        panDimension('y', y);
        panDimension('z', z);
    }
    function setPan(x, y, z) {
        setSceneDimensionPan('x', x);
        setSceneDimensionPan('y', y);
        setSceneDimensionPan('z', z);
        updateSceneTransforms();
        return self;
    }
    function panDimension(dim, val) {
        if (isNumber(val)) {
            _pan[dim] += val;
            updateSceneTransforms();
        }
        return self;
    }
    function setSceneDimensionPan(dim, val) {
        if (isNumber(val)) {
            _pan[dim] = val;
            updateSceneTransforms();
        }
        return self;
    }
    function getPan() {
        return _pan;
    }
    function zoom(val) {
        if (isNumber(val)) {
            _zoom += val;
            updateSceneTransforms();
        }
        return self;
    }
    function setZoom(val) {
        if (isNumber(val)) {
            _zoom = val;
            updateSceneTransforms();
        }
        return self;
    }
    function getZoom() {
        return _zoom;
    }
    function attach(elem) {
        if (!isAttached) {
            parentContainer = elem;
            elem.appendChild(sceneElement);
            isAttached = true;
        } else {
            throw 'Cannot attach currently attached scene';
        }
    }
    function detach() {
        if (isAttached) {
            isAttached = false;
            let {parentElement} = sceneElement;
            parentElement && parentElement.removeChild(sceneElement);
        } else {
            throw 'Cannot detach currently detached scene';
        }
    }
    function add(voxel) {
        cameraElement.appendChild(voxel.getDomElement());
        voxels.push(voxel);
        voxel.setParentScene(self);
        if (lightSources.length !== 0) {voxel.updateLightSource(lightSources);}
    }
    function remove(voxel) {
        cameraElement.removeChild(voxel.getDomElement());
        voxels.splice(voxels.indexOf(voxel), 1);
        voxel.removeParentScene();
    }
    function addLightSource(source) {
        var index = lightSources.indexOf(source);
        if (index !== -1) {return false;}
        source.on('change move', updateVoxelLighting);
        lightSources.push(source);
        updateVoxelLighting();
        return true;
    }
    function removeLightSource(source) {
        var index = lightSources.indexOf(source);
        if (index === -1) {return false;}
        source.off('change move');
        lightSources.splice(index, 1);
        updateVoxelLighting();
        return true;
    }
    function createSceneElement() {
        sceneElement = document.createElement('div');
        zoomElement = document.createElement('div');
        cameraElement = document.createElement('div');
        sceneElement.setAttribute('class', 'voxelcss-scene');
        zoomElement.setAttribute('class', 'zoom');
        cameraElement.setAttribute('class', 'camera');
        sceneElement.appendChild(zoomElement);
        zoomElement.appendChild(cameraElement);
    }
    function updateMousePosition(event) {
        let x = getX(event);
        let y = getY(event);
        mouse.current = {x, y};
    }
    function onMouseDown(event) {
        updateMousePosition(event);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }
    function onTouchStart(event) {
        updateMousePosition(event);
        window.addEventListener('touchmove', onTouchMove, {passive: false});
    }
    function onMouseUp() {
        unbindMouse();
    }
    function onMouseMove(event) {
        let x = getX(event);
        let y = getY(event);
        let dx = x - mouse.current.x;
        let dy = y - mouse.current.y;
        mouse.current = {x, y};
        if (canPan && mouse.shiftDown) {
            pan(dx, dy);
            updateSceneTransforms();
            self.trigger('pan', getData());
        } else if (canRotate) {
            const rotations = 2;
            const ROTATION_SCALING_FACTOR = Math.PI * 2 * rotations;
            rotation.y += dx / window.innerWidth * ROTATION_SCALING_FACTOR;
            rotation.x -= dy / window.innerHeight * ROTATION_SCALING_FACTOR;
            updateSceneTransforms();
            self.trigger('rotate', getData());
        }
    }
    function onTouchMove(event) {
        event.preventDefault();
        let x = getX(event);
        let y = getY(event);
        let dx = x - mouse.current.x;
        let dy = y - mouse.current.y;
        mouse.current = {x, y};
        if (canPan && event.touches.length > 1) {
            pan(dx, dy);
            updateSceneTransforms();
            self.trigger('pan', getData());
        } else if (canRotate) {
            const rotations = 2;
            const ROTATION_SCALING_FACTOR = Math.PI * 2 * rotations;
            rotation.y += dx / window.innerWidth * ROTATION_SCALING_FACTOR;
            rotation.x -= dy / window.innerHeight * ROTATION_SCALING_FACTOR;
            updateSceneTransforms();
            self.trigger('rotate', getData());
        }
    }
    function onScroll(event) {
        if (canZoom) {
            const ZOOM_SCALING_FACTOR = 500;// larger --> slower zoom
            zoom(event.deltaY / ZOOM_SCALING_FACTOR);
            event.preventDefault();
            self.trigger('zoom', getData());
        }
        return false;
    }
    function bindMouse() {
        sceneElement.addEventListener('mousedown', onMouseDown);
        sceneElement.addEventListener('mousewheel', onScroll);
        sceneElement.addEventListener('wheel', onScroll);
        sceneElement.addEventListener('touchstart', onTouchStart);
    }
    function bindKeyboard() {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
    }
    function unbindMouse() {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    }
    function unbindKeyboard() {
        window.removeEventListener('keydown', onKeyDown);
        window.removeEventListener('keyup', onKeyUp);
    }
    function onKeyDown(event) {
        mouse.shiftDown = isShiftKey(event);
    }
    function onKeyUp(event) {
        mouse.shiftDown = not(isShiftKey)(event);
    }
    function getData() {
        return {
            rotation: getRotation(),
            pan: getPan(),
            zoom: getZoom(),
            target: self
        };
    }
    function updateSceneTransforms() {
        let {x, y, z} = getRotation();
        let zoom = getZoom();
        let pan = getPan();
        cameraElement.style.transform = `rotateX(${x}rad) rotateY(${y}rad) rotateZ(${z}rad)`;
        zoomElement.style.transform = `scale(${zoom}, ${zoom}) translateX(${pan.x}px) translateY(${pan.y}px) translateZ(${pan.z}px)`;
        updateVoxelLighting();
    }
    function updateVoxelLighting() {
        if (lightSources.length !== 0) {
            voxels.forEach(voxel => voxel.updateLightSource(lightSources));
        }
    }
}
