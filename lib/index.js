'use strict';

require('../dist/voxelcss.css');
const ColorFace     = require('./ColorFace');
const Editor        = require('./Editor');
const eventListener = require('./eventListener');
const ImageFace     = require('./ImageFace');
const LightSource   = require('./LightSource');
const Mesh          = require('./Mesh');
const meshes        = require('./meshes');
const Positioned    = require('./positioned');
const Scene         = require('./Scene');
const Voxel         = require('./Voxel');
const World         = require('./World');

module.exports = {
    ColorFace,
    Editor,
    eventListener,
    ImageFace,
    LightSource,
    Mesh,
    meshes,
    Positioned,
    Scene,
    Voxel,
    World
};
/**
 * @event module:core/ColorFace~change
 * @description Fired when face is changed
 * @type {object}
 * @prop {object} target Object that triggered event
**/
/**
 * @event module:core/ImageFace~change
 * @description Fired when face is changed
 * @type {object}
 * @prop {object} target Object that triggered event
**/
/**
 * @event module:core/LightSource~change
 * @description Fired when travelDistance, dark, or light is changed
 * @type {object}
 * @prop {object} target Object that triggered event
**/
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
