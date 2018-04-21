/**
 * @module meshes
 * @requires core/Mesh
 * @requires core/ImageFace
**/

const Mesh      = require('./Mesh');
const ImageFace = require('./ImageFace');

module.exports = {
    dirt: new Mesh(
        new ImageFace('http://voxelcss.com/res/dirt/main.png')
    ),
    grass: new Mesh({
        top: new ImageFace('http://voxelcss.com/res/grass/top.png'),
        bottom: new ImageFace('http://voxelcss.com/res/grass/bottom.png'),
        front: new ImageFace('http://voxelcss.com/res/grass/side.png'),
        back: new ImageFace('http://voxelcss.com/res/grass/side.png'),
        left: new ImageFace('http://voxelcss.com/res/grass/side.png'),
        right: new ImageFace('http://voxelcss.com/res/grass/side.png')
    }),
    water: new Mesh(
        new ImageFace('http://voxelcss.com/res/water/main.png')
    ),
    waterFall: new Mesh({
        top: new ImageFace('http://voxelcss.com/res/water/main.png'),
        bottom: new ImageFace('http://voxelcss.com/res/water/main.png'),
        front: new ImageFace('http://voxelcss.com/res/water/fall.png'),
        back: new ImageFace('http://voxelcss.com/res/water/fall.png'),
        left: new ImageFace('http://voxelcss.com/res/water/fall.png'),
        right: new ImageFace('http://voxelcss.com/res/water/fall.png')
    }),
    waterFallTop: new Mesh({
        top: new ImageFace('http://voxelcss.com/res/water/main.png'),
        bottom: new ImageFace('http://voxelcss.com/res/water/main.png'),
        front: new ImageFace('http://voxelcss.com/res/water/falltop.png'),
        back: new ImageFace('http://voxelcss.com/res/water/falltop.png'),
        left: new ImageFace('http://voxelcss.com/res/water/falltop.png'),
        right: new ImageFace('http://voxelcss.com/res/water/falltop.png')
    }),
    waterFallCrash: new Mesh({
        top: new ImageFace('http://voxelcss.com/res/water/main.png'),
        bottom: new ImageFace('http://voxelcss.com/res/water/main.png'),
        front: new ImageFace('http://voxelcss.com/res/water/crash.png'),
        back: new ImageFace('http://voxelcss.com/res/water/crash.png'),
        left: new ImageFace('http://voxelcss.com/res/water/crash.png'),
        right: new ImageFace('http://voxelcss.com/res/water/crash.png')
    }),
    treeTrunk: new Mesh({
        top: new ImageFace('http://voxelcss.com/res/tree/rings.png'),
        bottom: new ImageFace('http://voxelcss.com/res/tree/rings.png'),
        front: new ImageFace('http://voxelcss.com/res/tree/bark.png'),
        back: new ImageFace('http://voxelcss.com/res/tree/bark.png'),
        left: new ImageFace('http://voxelcss.com/res/tree/bark.png'),
        right: new ImageFace('http://voxelcss.com/res/tree/bark.png')
    }),
    treeLeaves: new Mesh(
        new ImageFace('http://voxelcss.com/res/tree/leaves.png')
    )
};
