/**
 * @file Scene module
 * @description Basically a camera that can rotate, pan, zoom and contain voxels
 * @requires eventListener
 * @module core/Scene
**/
'use strict';

const eventListener = require('./eventListener');

const SHIFT_KEYCODE = 16;

let getX = (e) => (e.x || e.clientX);
let getY = (e) => (e.y || e.clientY);

module.exports = Scene;

/**
 * @name Scene
 * @constructor
 * @fires module:core/Scene~orbit
 * @fires module:core/Scene~pan
 * @fires module:core/Scene~zoom
 * @example <caption>Add a light source to a scene</caption>
 * const Voxelcss = require('voxelcss');
 * let scene = new Voxelcss.Scene();
 * let [x, y, z, d, dark, light] = [300, 300, 300, 750, 0.3, 1];
 * let source = new Voxelcss.LightSource(x, y, z, d, dark, light);
 * scene.attach(document.body);
 * scene.addLightSource(source);
**/
function Scene() {
    let self = this;
    let parentContainer;
    let sceneElement;
    let zoomElement;
    let cameraElement;
    let isAttached = false;
    let x = 0;
    let y = 0;
    let z = 0;
    let rotation = {x, y, z};
    let pan = {x, y, z};
    let zoom = 1;
    let mouse = {
        start: {x, y},
        current: {x, y},
        lastMove: {x, y},
        shiftDown: false
    };
    let canOrbit = true;
    let canPan = true;
    let canZoom = true;
    let lightSources = [];
    let voxels = [];
    self.rotate = rotateScene;
    self.rotateX = rotateSceneX;
    self.rotateY = rotateSceneY;
    self.rotateZ = rotateSceneZ;
    self.pan = panScene;
    self.panX = panSceneX;
    self.panY = panSceneY;
    self.panZ = panSceneZ;
    self.setPan = setScenePan;
    self.setPanX = setScenePanX;
    self.setPanY = setScenePanY;
    self.setPanZ = setScenePanZ;
    self.getPan = getScenePan;
    self.zoom = sceneZoom;
    self.setZoom = setSceneZoom;
    self.getZoom = getSceneZoom;
    self.attach = attachScene;
    self.detach = detachScene;
    self.isAttached = isSceneAttached;
    self.getParentElement = getParentElement;
    self.enableOrbit = enableOrbit;
    self.disableOrbit = disableOrbit;
    self.canOrbit = CanOrbit;
    self.enablePan = enableScenePan;
    self.disablePan = disableScenePan;
    self.canPan = canScenePan;
    self.enableZoom = enableSceneZoom;
    self.disableZoom = disableSceneZoom;
    self.canZoom = canSceneZoom;
    self.add = addVoxel;
    self.remove = removeVoxel;
    self.getElement = () => sceneElement;
    self.getInteractionState = (val) => {
        return val ? mouse[val] : mouse;
    };
    self.unbind = () => {
        unbindMouse();
        unbindKeyboard();
    };
    Object.assign(self, {
        getVoxels,
        setRotation,
        setRotationX,
        setRotationY,
        setRotationZ,
        getRotation,
        getRotationX,
        getRotationY,
        getRotationZ,
        addLightSource,
        getLightSources,
        removeLightSource
    });
    function rotateScene(x, y, z) {
        return {
            x: rotateSceneX(x),
            y: rotateSceneY(y),
            z: rotateSceneZ(z)
        };
    }
    function rotateSceneX(x) {
        if (x === undefined || typeof x !== 'number') {return rotation.x;}
        var old = rotation.x;
        rotation.x += x;
        updateSceneTransforms();
        return old;
    }
    function rotateSceneY(y) {
        if (y === undefined || typeof y !== 'number') {return rotation.y;}
        var old = rotation.y;
        rotation.y += y;
        updateSceneTransforms();
        return old;
    }
    function rotateSceneZ(z) {
        if (z === undefined || typeof z !== 'number') {return rotation.z;}
        var old = rotation.z;
        rotation.z += z;
        updateSceneTransforms();
        return old;
    }
    function setRotation(x, y, z) {
        var old = {
            x: setRotationX(x),
            y: setRotationY(y),
            z: setRotationZ(z)
        };
        updateSceneTransforms();
        return old;
    }
    function setRotationX(x) {
        if (x === undefined || typeof x !== 'number') {return rotation.x;}
        var old = rotation.x;
        rotation.x = x;
        updateSceneTransforms();
        return old;
    }
    function setRotationY(y) {
        if (y === undefined || typeof y !== 'number') {return rotation.y;}
        var old = rotation.y;
        rotation.y = y;
        updateSceneTransforms();
        return old;
    }
    function setRotationZ(z) {
        if (z === undefined || typeof z !== 'number') {return rotation.z;}
        var old = rotation.z;
        rotation.z = z;
        updateSceneTransforms();
        return old;
    }
    function getRotation() {
        return {
            x: getRotationX(),
            y: getRotationY(),
            z: getRotationZ()
        };
    }
    function getRotationX() {
        return rotation.x;
    }
    function getRotationY() {
        return rotation.y;
    }
    function getRotationZ() {
        return rotation.z;
    }
    function panScene(x, y, z) {
        return {
            x: panSceneX(x),
            y: panSceneY(y),
            z: panSceneZ(z)
        };
    }
    function panSceneX(x) {
        if (x === undefined || typeof x !== 'number') {return pan.x;}
        var old = pan.x;
        pan.x += x;
        updateSceneTransforms();
        return old;
    }
    function panSceneY(y) {
        if (y === undefined || typeof y !== 'number') {return pan.y;}
        var old = pan.y;
        pan.y += y;
        updateSceneTransforms();
        return old;
    }
    function panSceneZ(z) {
        if (z === undefined || typeof z !== 'number') {return pan.z;}
        var old = pan.z;
        pan.z += z;
        updateSceneTransforms();
        return old;
    }
    function setScenePan(x, y, z) {
        var old = {
            x: setScenePanX(x),
            y: setScenePanY(y),
            z: setScenePanZ(z)
        };
        updateSceneTransforms();
        return old;
    }
    function setScenePanX(x) {
        if (x === undefined || typeof x !== 'number') {return pan.x;}
        var old = pan.x;
        pan.x = x;
        updateSceneTransforms();
        return old;
    }
    function setScenePanY(y) {
        if (y === undefined || typeof y !== 'number') {return pan.y;}
        var old = pan.y;
        pan.y = y;
        updateSceneTransforms();
        return old;
    }
    function setScenePanZ(z) {
        if (z === undefined || typeof z !== 'number') {return pan.z;}
        var old = pan.z;
        pan.z = z;
        updateSceneTransforms();
        return old;
    }
    function getScenePan() {
        return {
            x: pan.x,
            y: pan.y,
            z: pan.z
        };
    }
    function sceneZoom(_zoom) {
        if (_zoom === undefined || typeof _zoom !== 'number') {
            return zoom;
        }
        var old = zoom;
        zoom += _zoom;
        updateSceneTransforms();
        return old;
    }
    function setSceneZoom(_zoom) {
        if (_zoom === undefined || typeof _zoom !== 'number') {
            return zoom;
        }
        zoom = _zoom;
        updateSceneTransforms();
        return zoom;
    }
    function getSceneZoom() {
        return zoom;
    }
    function attachScene(elem) {
        if (isAttached) {
            throw 'Cannot attach currently attached scene';
        }
        parentContainer = elem;
        elem.appendChild(sceneElement);
        isAttached = true;
    }
    function detachScene() {
        if (!isAttached) {
            throw 'Cannot detach currently detached scene';
        }
        isAttached = false;
        let {parentElement} = sceneElement;
        parentElement && parentElement.removeChild(sceneElement);
    }
    function isSceneAttached() {
        return isAttached;
    }
    function getParentElement() {
        return parentContainer;
    }
    function enableOrbit() {
        if (canOrbit) {return;}
        canOrbit = true;
    }
    function disableOrbit() {
        if (!canOrbit) {return;}
        canOrbit = false;
    }
    function CanOrbit() {
        return canOrbit;
    }
    function enableScenePan() {
        if (canPan) {return;}
        canPan = true;
    }
    function disableScenePan() {
        if (!canPan) {return;}
        canPan = false;
    }
    function canScenePan() {
        return canPan;
    }
    function enableSceneZoom() {
        if (canZoom) {return;}
        canZoom = true;
    }
    function disableSceneZoom() {
        if (!canZoom) {return;}
        canZoom = false;
    }
    function canSceneZoom() {
        return canZoom;
    }
    function addVoxel(voxel) {
        cameraElement.appendChild(voxel.getDomElement());
        voxels.push(voxel);
        voxel.setParentScene(self);
        if (lightSources.length !== 0) {voxel.updateLightSource(lightSources);}
    }
    function removeVoxel(voxel) {
        cameraElement.removeChild(voxel.getDomElement());
        voxels.splice(voxels.indexOf(voxel), 1);
        voxel.removeParentScene();
    }
    function getVoxels() {
        return [].concat(voxels);
    }

    function addLightSource(source) {
        var index = lightSources.indexOf(source);
        if (index !== -1) {return false;}
        source.addEventListener('change', updateVoxelLighting);
        source.addEventListener('move', updateVoxelLighting);
        lightSources.push(source);
        updateVoxelLighting();
        return true;
    }
    function removeLightSource(source) {
        var index = lightSources.indexOf(source);
        if (index === -1) {return false;}
        source.removeEventListener('change', updateVoxelLighting);
        source.removeEventListener('move', updateVoxelLighting);
        lightSources.splice(index, 1);
        updateVoxelLighting();
        return true;
    }
    function getLightSources() {
        return lightSources;
    }
    function createSceneElement() {
        sceneElement = document.createElement('div');
        sceneElement.setAttribute('class', 'scene');
        zoomElement = document.createElement('div');
        zoomElement.setAttribute('class', 'zoom');
        cameraElement = document.createElement('div');
        cameraElement.setAttribute('class', 'camera');
        sceneElement.appendChild(zoomElement);
        zoomElement.appendChild(cameraElement);
    }
    function bindMouse() {
        sceneElement.addEventListener('mousedown', onMouseDown);
        sceneElement.addEventListener('mousewheel', onScroll);
        sceneElement.addEventListener('wheel', onScroll);
    }
    function onMouseDown(event) {
        let x = getX(event);
        let y = getY(event);
        mouse.start = {x, y};
        mouse.current = {x, y};
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
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
        mouse.lastMove = {dx, dy};
        if (canPan && mouse.shiftDown) {
            panScene(dx, dy);
            updateSceneTransforms();
            self.triggerEvent('pan', {
                rotation: getRotation(),
                pan: getScenePan(),
                zoom: getSceneZoom(),
                target: self
            });
        } else if (canOrbit) {
            const rotations = 2;
            const ROTATION_SCALING_FACTOR = Math.PI * 2 * rotations;
            rotation.y += dx / window.innerWidth * ROTATION_SCALING_FACTOR;
            rotation.x -= dy / window.innerHeight * ROTATION_SCALING_FACTOR;
            updateSceneTransforms();
            self.triggerEvent('orbit', {
                rotation: getRotation(),
                pan: getScenePan(),
                zoom: getSceneZoom(),
                target: self
            });
        }
    }
    function onScroll(event) {
        if (!canZoom) {return;}
        const ZOOM_SCALING_FACTOR = 500;// larger --> slower zoom
        zoom += event.deltaY / ZOOM_SCALING_FACTOR;
        updateSceneTransforms();
        event.preventDefault();
        self.triggerEvent('zoom', {
            rotation: getRotation(),
            pan: getScenePan(),
            zoom: getSceneZoom(),
            target: self
        });
        return false;
    }
    function bindKeyboard() {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
    }
    function unbindKeyboard() {
        window.removeEventListener('keydown', onKeyDown);
        window.removeEventListener('keyup', onKeyUp);
    }
    function unbindMouse() {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    }
    function onKeyDown(event) {
        mouse.shiftDown = (event.keyCode === SHIFT_KEYCODE || event.which === SHIFT_KEYCODE);
    }
    function onKeyUp(event) {
        mouse.shiftDown = !(event.keyCode === SHIFT_KEYCODE || event.which === SHIFT_KEYCODE);
    }
    function updateSceneTransforms() {
        cameraElement.style.transform = 'rotateX(' + rotation.x + 'rad) rotateY(' + rotation.y + 'rad) rotateZ(' + rotation.z + 'rad)';
        zoomElement.style.transform = 'scale(' + zoom + ', ' + zoom + ')';
        zoomElement.style.transform += ' translateX(' + pan.x + 'px) translateY(' + pan.y + 'px) translateZ(' + pan.z + 'px)';
        updateVoxelLighting();
    }
    function updateVoxelLighting() {
        if (lightSources.length === 0) {return;}
        for (var i = 0, voxel; voxel = voxels[i++];) {
            voxel.updateLightSource(lightSources);
        }
    }
    (function Constructor() {
        eventListener(self);
        createSceneElement();
        bindMouse();
        bindKeyboard();
    }).apply(self, arguments);
}

/**
 * @event module:core/Scene~orbit
 * @description Fired on scene rotation (mouse drag)
 * @type {object}
 * @prop {object} rotation Scene rotation object
 * @prop {object} pan Scene pan object
 * @prop {number} zoom Scene zoom
 * @prop {object} target Object that triggered event
**/
/**
 * @event module:core/Scene~pan
 * @description Fired on scene pan (mouse drag with shift pressed)
 * @type {object}
 * @prop {object} rotation Scene rotation object
 * @prop {object} pan Scene pan object
 * @prop {number} zoom Scene zoom
 * @prop {object} target Object that triggered event
**/
/**
 * @event module:core/Scene~zoom
 * @description Fired on scene zoom (mouse wheel scroll)
 * @type {object}
 * @prop {object} rotation Scene rotation object
 * @prop {object} pan Scene pan object
 * @prop {number} zoom Scene zoom
 * @prop {object} target Object that triggered event
**/