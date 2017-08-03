"use strict";var _slicedToArray=function(){function e(e,t){var r=[],a=!0,o=!1,n=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(e){o=!0,n=e}finally{try{!a&&i["return"]&&i["return"]()}finally{if(o)throw n}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(function(e){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,t.voxelcss=e()}})(function(){var e=Math.PI;return function m(c,e,t){function r(s,o){if(!e[s]){if(!c[s]){var i="function"==typeof require&&require;if(!o&&i)return i(s,!0);if(n)return n(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var x=e[s]={exports:{}};c[s][0].call(x.exports,function(t){var e=c[s][1][t];return r(e?e:t)},x,x.exports,m,c,e,t)}return e[s].exports}for(var n="function"==typeof require&&require,a=0;a<t.length;a++)r(t[a]);return r}({1:[function(e,t){var r=".voxelcss-scene {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  cursor: move;\n}\n.voxelcss-scene .camera,\n.voxelcss-scene .zoom {\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  overflow: visible;\n}\n.voxelcss-cube,\n.voxelcss-scene .camera,\n.voxelcss-scene .zoom {\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.voxelcss-cube:hover img {\n  visibility: hidden!important;\n}\n.voxelcss-cube:hover .voxelcss-face {\n  background: rgba(0,0,0,.3)!important;\n}\n.voxelcss-cube:hover .voxelcss-face .shader {\n  opacity: 0!important;\n}\n.voxelcss-cube .animated-down,\n.voxelcss-cube .animated-up {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.voxelcss-cube .animated-up {\n  -webkit-animation: a 1s linear both;\n  animation: a 1s linear both;\n}\n.voxelcss-cube .animated-down {\n  -webkit-animation: b 1s linear both;\n  animation: b 1s linear both;\n}\n.voxelcss-face {\n  display: block;\n  position: absolute;\n  outline: none;\n  border: none;\n  margin-left: -18px;\n  margin-top: -18px;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n}\n.voxelcss-face img {\n  width: 100%;\n  height: 100%;\n}\n.voxelcss-face img.colored {\n  visibility: hidden;\n}\n.voxelcss-face .shader {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n}\n@-webkit-keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@-webkit-keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n";e("browserify-css").createStyle(r,{href:"dist/voxelcss.css"},{insertAt:"bottom"}),t.exports=r},{"browserify-css":15}],2:[function(e,t){"use strict";function r(){function e(){return 1===arguments.length&&arguments[0].constructor!==Number?arguments[0].constructor===String?m(arguments[0]):i(arguments[0]):a.apply(this,arguments)}function t(){return x}function a(e,r,o,n){var a=t();return void 0!==e&&e.constructor===Number&&(x.r=e),void 0!==r&&r.constructor===Number&&(x.g=r),void 0!==o&&o.constructor===Number&&(x.b=o),void 0!==n&&n.constructor===Number&&(x.a=n),c(),a}function i(e){return a(e.r,e.g,e.b,e.a)}function m(e){return x=o(e),x.a=1,c(),t()}function c(){l.triggerEvent("change",{target:l})}var l=this,x={r:0,g:0,b:0,a:1};Object.assign(l,{setColor:e,getColor:t,getHex:function getHex(){return n(x.r,x.g,x.b)},serialize:function serialize(){return JSON.stringify(x)},clone:function clone(){return new r(x)}}),s(l),e.apply(void 0,arguments)}var a=e("./common"),o=a.hexToRgb,n=a.rgbToHex,s=e("./eventListener");t.exports=r,r.loadFromSerial=function(e){var t=JSON.parse(e);return new r(t)}},{"./common":10,"./eventListener":11}],3:[function(e,t){"use strict";t.exports=function(e,t){function r(){h=!0}function a(){e.save()}function o(t){s(t);var r=e.add(t);return h&&a(),r}function n(t){var r=e.remove(t);return r&&i(t),h&&a(),r}function s(e){e.addEventListener("VoxelClick",m),e.addEventListener("TopClick",c),e.addEventListener("BottomClick",l),e.addEventListener("FrontClick",x),e.addEventListener("BackClick",g),e.addEventListener("LeftClick",d),e.addEventListener("RightClick",f),e.addEventListener("MeshChange",function(){h&&a()})}function i(e){e.removeEventListener("VoxelClick",m),e.removeEventListener("TopClick",c),e.removeEventListener("BottomClick",l),e.removeEventListener("FrontClick",x),e.removeEventListener("BackClick",g),e.removeEventListener("LeftClick",d),e.removeEventListener("RightClick",f)}function m(e){if(k){var t=e.target;n(t)}}function c(e){if(k){var t=e.target;p(t,0,1,0)}}function l(e){if(k){var t=e.target;p(t,0,-1,0)}}function x(e){if(k){var t=e.target;p(t,0,0,1)}}function g(e){if(k){var t=e.target;p(t,0,0,-1)}}function d(e){if(k){var t=e.target;p(t,-1,0,0)}}function f(e){if(k){var t=e.target;p(t,1,0,0)}}function p(e,t,r,a){var n=e.clone(),s=n.getDimension();n.setMesh(u.mesh),n.translate(t*s,r*s,a*s),o(n)}function v(){for(var t,r=0;t=e.getVoxels()[r++];)s(t)}if(e===void 0)throw"Editor requires World instance for initialization";t!==void 0&&!0===t.autosave&&r();var b=this,h=!1,k=!0,u={mesh:{}};b.enable=function(){k=!0},b.disable=function(){k=!1},b.isEnabled=function(){return k},b.enableAutoSave=r,b.disableAutoSave=function(){h=!1},b.canAutoSave=function(){return h},b.save=a,b.load=function(){var t=e.load();return v(),t},b.isSaved=function(){return e.isSaved()},b.deleteSave=function(){return e.deleteSave()},b.export=function(){return e.export()},b.import=function(t){var r=e.import(t);return v(),r},b.add=o,b.remove=n,b.getWorld=function(){return e},b.setToolMesh=function(e){if(void 0===e)return u.mesh;var t=u.mesh;return u.mesh=e,t},v()}},{}],4:[function(e,t){"use strict";function r(e){function t(e){if(!e)return s;var t=s;return s=e,n.triggerEvent("change",{target:n}),t}var n=this,s=o;Object.assign(n,{setSource:t,getSource:function getSource(){return s},serialize:function serialize(){return s},clone:function clone(){return new r(s)}}),a(n),t(e)}var a=e("./eventListener"),o="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";t.exports=r,r.loadFromSerial=function(e){return new r(e)}},{"./eventListener":11}],5:[function(e,t){"use strict";var r=e("./eventListener"),a=e("./positioned");t.exports=function(e,t,o,n){function s(e){if(void 0===e||"number"!=typeof e)return l;var t=l;return l=e,c.triggerEvent("change",{target:c}),t}function i(e,t){var r=m();return"number"==typeof t&&(x=t),"number"==typeof e&&(g=e),c.triggerEvent("change",{target:c}),r}function m(){return[g,x]}var c=this,l=500,x=1,g=0;Object.assign(c,{setTravelDistance:s,setBrightness:i,getBrightness:m,getTravelDistance:function getTravelDistance(){return l}}),a(r(c)),c.setPosition(e),s(t),i(o,n)}},{"./eventListener":11,"./positioned":14}],6:[function(e,t){"use strict";function r(e){function t(e){for(var t in i){var r=i[t];if(r===e)return t}return null}function r(e){return!!t(e.constructor)}function a(e){if(!A(e)){var t=b;return!t||t.removeEventListener("change",p),b=e,b.addEventListener("change",p),L&&v(),t}}function s(e){if(!A(e)){var t=h;return!t||t.removeEventListener("change",p),h=e,h.addEventListener("change",p),L&&v(),t}}function m(e){if(!A(e)){var t=k;return!t||t.removeEventListener("change",p),k=e,k.addEventListener("change",p),L&&v(),t}}function c(e){if(!A(e)){var t=u;return!t||t.removeEventListener("change",p),u=e,u.addEventListener("change",p),L&&v(),t}}function l(e){if(!A(e)){var t=w;return!t||t.removeEventListener("change",p),w=e,w.addEventListener("change",p),L&&v(),t}}function x(e){if(!A(e)){var t=y;return!t||t.removeEventListener("change",p),y=e,y.addEventListener("change",p),L&&v(),t}}function g(e){var t=d();return void 0===e?t:(r(e)&&(e={front:e,back:e,top:e,bottom:e,left:e,right:e}),L=!1,a(e.front),s(e.back),m(e.left),c(e.right),l(e.top),x(e.bottom),v(),L=!0,t)}function d(){return{front:b,back:h,left:k,right:u,top:w,bottom:y}}function f(e){return t(e.constructor)+"("+e.serialize()+")"}function p(){v()}function v(){var e=d();E.triggerEvent("change",{target:E,faces:e})}var b,h,k,u,w,y,E=this,L=!0,A=function(e){return e===void 0||!r(e)};Object.assign(E,{setFront:a,setBack:s,setLeft:m,setRight:c,setTop:l,setBottom:x,setFaces:g,getFaces:d,serialize:function(){return JSON.stringify({front:f(b),back:f(h),left:f(k),right:f(u),top:f(w),bottom:f(y)})},getFront:function getFront(){return b},getBack:function getBack(){return h},getLeft:function getLeft(){return k},getRight:function getRight(){return u},getTop:function getTop(){return w},getBottom:function getBottom(){return y}}),o(E),g(new n),g(e)}function a(e){var t=e.indexOf("("),r=e.slice(0,t),a=e.slice(t+1,-1);return i[r].loadFromSerial(a)}var o=e("./eventListener"),n=e("./ImageFace"),s=e("./ColorFace"),i={image:n,color:s};t.exports=r,r.loadFromSerial=function(e){var t=JSON.parse(e),o=t.front,n=t.back,s=t.left,i=t.right,m=t.top,c=t.bottom;return new r({front:a(o),back:a(n),left:a(s),right:a(i),top:a(m),bottom:a(c)})}},{"./ColorFace":2,"./ImageFace":4,"./eventListener":11}],7:[function(t,r){"use strict";var a=t("./eventListener"),o=16,n=function(t){return t.x||t.clientX},s=function(t){return t.y||t.clientY};r.exports=function(){function t(e){if(void 0===e||"number"!=typeof e)return U.x;var t=U.x;return U.x+=e,D(),t}function r(e){if(void 0===e||"number"!=typeof e)return U.y;var t=U.y;return U.y+=e,D(),t}function i(e){if(void 0===e||"number"!=typeof e)return U.z;var t=U.z;return U.z+=e,D(),t}function m(e){if(void 0===e||"number"!=typeof e)return U.x;var t=U.x;return U.x=e,D(),t}function c(e){if(void 0===e||"number"!=typeof e)return U.y;var t=U.y;return U.y=e,D(),t}function l(e){if(void 0===e||"number"!=typeof e)return U.z;var t=U.z;return U.z=e,D(),t}function g(){return{x:d(),y:f(),z:p()}}function d(){return U.x}function f(){return U.y}function p(){return U.z}function v(e,t,r){return{x:b(e),y:h(t),z:k(r)}}function b(e){if(void 0===e||"number"!=typeof e)return _.x;var t=_.x;return _.x+=e,D(),t}function h(e){if(void 0===e||"number"!=typeof e)return _.y;var t=_.y;return _.y+=e,D(),t}function k(e){if(void 0===e||"number"!=typeof e)return _.z;var t=_.z;return _.z+=e,D(),t}function u(e){if(void 0===e||"number"!=typeof e)return _.x;var t=_.x;return _.x=e,D(),t}function w(e){if(void 0===e||"number"!=typeof e)return _.y;var t=_.y;return _.y=e,D(),t}function E(e){if(void 0===e||"number"!=typeof e)return _.z;var t=_.z;return _.z=e,D(),t}function L(){return{x:_.x,y:_.y,z:_.z}}function A(){return j}function C(e){var t=n(e),r=s(e);Q.start={x:t,y:r},Q.current={x:t,y:r},window.addEventListener("mousemove",P),window.addEventListener("mouseup",S)}function S(){M()}function P(t){var r=n(t),a=s(t),o=r-Q.current.x,i=a-Q.current.y;if(Q.current={x:r,y:a},Q.lastMove={dx:o,dy:i},K&&Q.shiftDown)v(o,i),D(),N.triggerEvent("pan",{rotation:g(),pan:L(),zoom:A(),target:N});else if(G){var m=2*e*2;U.y+=o/window.innerWidth*m,U.x-=i/window.innerHeight*m,D(),N.triggerEvent("orbit",{rotation:g(),pan:L(),zoom:A(),target:N})}}function F(e){if(J){return j+=e.deltaY/500,D(),e.preventDefault(),N.triggerEvent("zoom",{rotation:g(),pan:L(),zoom:A(),target:N}),!1}}function M(){window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",S)}function B(){window.removeEventListener("keydown",Z),window.removeEventListener("keyup",T)}function Z(e){Q.shiftDown=e.keyCode===o||e.which===o}function T(e){Q.shiftDown=e.keyCode!==o&&e.which!==o}function D(){O.style.transform="rotateX("+U.x+"rad) rotateY("+U.y+"rad) rotateZ("+U.z+"rad)",X.style.transform="scale("+j+", "+j+")",X.style.transform+=" translateX("+_.x+"px) translateY("+_.y+"px) translateZ("+_.z+"px)",R()}function R(){if(0!==$.length)for(var e,t=0;e=ee[t++];)e.updateLightSource($)}var I,Y,X,O,N=this,V=!1,W=0,H=0,q=0,U={x:W,y:H,z:q},_={x:W,y:H,z:q},j=1,Q={start:{x:W,y:H},current:{x:W,y:H},lastMove:{x:W,y:H},shiftDown:!1},G=!0,K=!0,J=!0,$=[],ee=[];N.rotate=function(e,a,o){return{x:t(e),y:r(a),z:i(o)}},N.rotateX=t,N.rotateY=r,N.rotateZ=i,N.pan=v,N.panX=b,N.panY=h,N.panZ=k,N.setPan=function(e,t,r){var a={x:u(e),y:w(t),z:E(r)};return D(),a},N.setPanX=u,N.setPanY=w,N.setPanZ=E,N.getPan=L,N.zoom=function(e){if(void 0===e||"number"!=typeof e)return j;var t=j;return j+=e,D(),t},N.setZoom=function(e){return void 0===e||"number"!=typeof e?j:(j=e,D(),j)},N.getZoom=A,N.attach=function(e){if(V)throw"Cannot attach currently attached scene";I=e,e.appendChild(Y),V=!0},N.detach=function(){if(!V)throw"Cannot detach currently detached scene";V=!1;var e=Y,t=e.parentElement;t&&t.removeChild(Y)},N.isAttached=function(){return V},N.getParentElement=function(){return I},N.enableOrbit=function(){G||(G=!0)},N.disableOrbit=function(){G&&(G=!1)},N.canOrbit=function(){return G},N.enablePan=function(){K||(K=!0)},N.disablePan=function(){K&&(K=!1)},N.canPan=function(){return K},N.enableZoom=function(){J||(J=!0)},N.disableZoom=function(){J&&(J=!1)},N.canZoom=function(){return J},N.add=function(e){O.appendChild(e.getDomElement()),ee.push(e),e.setParentScene(N),0!==$.length&&e.updateLightSource($)},N.remove=function(e){O.removeChild(e.getDomElement()),ee.splice(ee.indexOf(e),1),e.removeParentScene()},N.getElement=function(){return Y},N.getInteractionState=function(e){return e?Q[e]:Q},N.unbind=function(){M(),B()},Object.assign(N,{getVoxels:function(){return[].concat(ee)},setRotation:function(e,t,r){var a={x:m(e),y:c(t),z:l(r)};return D(),a},setRotationX:m,setRotationY:c,setRotationZ:l,getRotation:g,getRotationX:d,getRotationY:f,getRotationZ:p,addLightSource:function(e){var t=$.indexOf(e);return!(-1!==t)&&(e.addEventListener("change",R),e.addEventListener("move",R),$.push(e),R(),!0)},getLightSources:function(){return $},removeLightSource:function(e){var t=$.indexOf(e);return-1!==t&&(e.removeEventListener("change",R),e.removeEventListener("move",R),$.splice(t,1),R(),!0)}}),a(N),function(){Y=document.createElement("div"),Y.setAttribute("class","voxelcss-scene"),X=document.createElement("div"),X.setAttribute("class","zoom"),O=document.createElement("div"),O.setAttribute("class","camera"),Y.appendChild(X),X.appendChild(O)}(),function(){Y.addEventListener("mousedown",C),Y.addEventListener("mousewheel",F),Y.addEventListener("wheel",F)}(),function(){window.addEventListener("keydown",Z),window.addEventListener("keyup",T)}()}},{"./eventListener":11}],8:[function(t,r){"use strict";function a(e,t,r,x,w){function y(e){if(void 0!==e&&e.constructor===h){var t=T;return!t||t.removeEventListener("change",F),T=e,T.addEventListener("change",F),z(),t}}function E(e){if(void 0===e||"number"!=typeof e)return Y;var t=Y;return Y=e,t}function L(e,t,r,a){var o=p(D.getRotationX(),-D.getRotationY(),D.getRotationZ()),n=A({x:e,y:t,z:r},o);n={x:n.x-R.getPositionX()-a.A*R.getDimension()/2,y:n.y-R.getPositionY()-a.B*R.getDimension()/2,z:n.z-R.getPositionZ()-a.C*R.getDimension()/2};var m=d(g(n.x,2)+g(n.y,2)+g(n.z,2)),c=1===s(a.C)?a.C*n.z:1===s(a.B)?a.B*n.y:a.A*n.x,l=i(s(n.x*a.A+n.y*a.B+n.z*a.C)/m);return{angle:l,direction:c,distance:m}}function A(e,t){var r=[[e.x],[e.y],[e.z]],a=f(t,r);return{x:a[0][0],y:a[1][0],z:a[2][0]}}function z(){var e=T.getFaces();for(var t in I){var r=e[t];if(r instanceof k)I[t].src=r.getSource(),I[t].removeAttribute("class");else if(r instanceof u){var a=I[t].parentElement;a.style.background="#"+r.getHex(),I[t].setAttribute("class","colored")}}}function C(e){var t=function(e){return e+"px"},r=Y/2,a=R,n=S("img",""),s=S("div","shader"),i=S("div","voxelcss-face "+e);I[e]=o(n,{shader:s}),o(i.style,{width:t(Y),height:t(Y),marginLeft:t(-1*r),marginTop:t(-1*r),transform:{top:"rotateX(90deg) translateZ("+r+"px)",bottom:"rotateX(90deg) translateZ(-"+r+"px)",left:"rotateY(90deg) translateZ(-"+r+"px)",right:"rotateY(90deg) translateZ("+r+"px)",front:"translateZ("+r+"px)",back:"translateZ(-"+r+"px)"}[e]}),i.addEventListener("click",{top:function top(){return R.triggerEvent("TopClick",{target:a})},bottom:function bottom(){return R.triggerEvent("BottomClick",{target:a})},left:function left(){return R.triggerEvent("LeftClick",{target:a})},right:function right(){return R.triggerEvent("RightClick",{target:a})},front:function front(){return R.triggerEvent("FrontClick",{target:a})},back:function back(){return R.triggerEvent("BackClick",{target:a})}}[e]),i.addEventListener("contextmenu",M),i.appendChild(n),i.appendChild(s),Z.appendChild(i)}function S(e,t){var r=document.createElement(e);return r.setAttribute("class",t),r}function P(){D.add(R)}function F(){z(),R.triggerEvent("MeshChange",{target:R,mesh:T})}function M(e){return e.preventDefault(),R.triggerEvent("VoxelClick",{target:R}),!1}var B,Z,T,D,R=this,I={},Y=0;o(R,{setMesh:y,getMesh:function(){return T},animUp:function(e){if(e===void 0)throw"Scene required to add voxel to scene";D=e,Z.setAttribute("class","animated-up"),P()},animDown:function(e){if(e===void 0)throw"Scene required to add voxel to scene";D=e,Z.setAttribute("class","animated-down"),P()},addToScene:function(e){if(e===void 0)throw"Scene required to add voxel to scene";D=e,Z.setAttribute("class","animated"),P()},removeFromScene:function(){void 0===D||D.remove(R)},setParentScene:function(e){D=e},removeParentScene:function(){D=void 0},setDimension:E,getDimension:function(){return Y},getDomElement:function(){return B},updateLightSource:function(e){var t=function(e){return g(e,3)},r=1,a=1,o=1,s=1,i=1,x=1;e.forEach(function(e){var n=[e.getPositionX(),e.getPositionY(),e.getPositionZ()],d=e.getBrightness(),f=e.getTravelDistance(),p=d[1]-d[0],v=1-d[1],b=function(e){var r=_slicedToArray(e,3),a=r[0],o=r[1],s=r[2],i=L.apply(void 0,n.concat([{A:a,B:o,C:s}])),m=i.angle,x=i.direction,d=i.distance,b=0>x?1:c(1,t(1-m/(l/2))+g(d/f,6));return 1-(b*p+v)};a=m(0,a-b([0,0,-1])),r=m(0,r-b([0,0,1])),o=m(0,o-b([-1,0,0])),s=m(0,s-b([1,0,0])),i=m(0,i-b([0,1,0])),x=m(0,x-b([0,-1,0]))});var d={front:r,back:a,left:o,right:s,top:i,bottom:x};n(d).forEach(function(e){I[e].shader.style.opacity=d[e]})},clone:function(){return new a(R.getPositionX(),R.getPositionY(),R.getPositionZ(),Y,{mesh:T})}}),b(v(R)),R.addEventListener("move",function(){var e=R.getPosition();B.style.transform="translate3d("+e.x+"px, "+-e.y+"px, "+e.z+"px)"}),E(x),function(){B=S("div","voxelcss-cube"),Z=S("div","animated"),C("top"),C("bottom"),C("front"),C("back"),C("left"),C("right"),B.appendChild(Z)}(),R.setPosition([e,t,r]),y(new h),w!==void 0&&w.mesh!==void 0&&y(w.mesh)}var o=Object.assign,n=Object.keys,s=Math.abs,i=Math.asin,m=Math.max,c=Math.min,l=e,g=Math.pow,d=Math.sqrt,x=t("./common"),f=x.multiplyMatrices,p=x.generateRotationMatrix,v=t("./eventListener"),b=t("./positioned"),h=t("./Mesh"),k=t("./ImageFace"),u=t("./ColorFace");r.exports=a},{"./ColorFace":2,"./ImageFace":4,"./Mesh":6,"./common":10,"./eventListener":11,"./positioned":14}],9:[function(e,t){"use strict";var r=e("./Mesh"),a=e("./Voxel");t.exports=function(e,t){function o(t){return g.push(t),e.add(t)}function n(t){var r=g.indexOf(t);return!(0>r)&&(e.remove(t),g.splice(r,1),!0)}function s(){for(var e,t=[],r=0;e=g[r++];)t.push({position:e.getPosition(),dimension:e.getDimension(),mesh:e.getMesh().serialize()});return JSON.stringify(t)}function i(e){m();for(var t,n,s=JSON.parse(e+""),c=0;t=s[c++];)n=new a(t.position.x,t.position.y,t.position.z,t.dimension),n.setMesh(r.loadFromSerial(t.mesh)),o(n)}function m(){for(;0<g.length;)n(g[0])}function c(){return"savedWorld<"+x+">"}if(e===void 0)throw"World cannot be instantiated without a Scene instance";var l=this,x=t||"*",g=[];l.add=o,l.remove=n,l.export=s,l.import=i,l.save=function(){localStorage.setItem(c(),s())},l.load=function(){i(localStorage.getItem(c())||"[]")},l.isSaved=function(){return!!localStorage.getItem(c())},Object.assign(l,{deleteSave:function(){localStorage.setItem(c(),"")},getScene:function(){return e},getVoxels:function(){return g.concat([])}})}},{"./Mesh":6,"./Voxel":8}],10:[function(e,t){"use strict";function r(e,t){for(var a=e.length,o=e[0].length,n=t[0].length,s=Array(a),m=0;m<a;++m){s[m]=Array(n);for(var r=0;r<n;++r){s[m][r]=0;for(var c=0;c<o;++c)s[m][r]+=e[m][c]*t[c][r]}}return s}var a=Math.cos,o=Math.sin,n=16;t.exports={hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a});var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{r:parseInt(r[1],n),g:parseInt(r[2],n),b:parseInt(r[3],n)}:null},rgbToHex:function(e,t,r){return""+(16777216+(e<<16)+(t<<8)+r).toString(16).slice(1)},generateRotationMatrix:function(e,t,n){var s=[[1,0,0],[0,a(e),-o(e)],[0,o(e),a(e)]],i=[[a(t),0,o(t)],[0,1,0],[-o(t),0,a(t)]],m=[[a(n),-o(n),0],[o(n),a(n),0],[0,0,1]];return r(r(m,i),s)},multiplyMatrices:r}},{}],11:[function(e,t){"use strict";t.exports=function(e){var t=e||new Function,r={};return Object.assign(t,{addEventListener:function(e,t){(e="on"+e,"function"==typeof t)&&(r[e]||(r[e]=[]),-1<r[e].indexOf(t)||r[e].push(t))},removeEventListener:function(e,t){e="on"+e,r[e]&&r[e].splice(r[e].indexOf(t),1)},triggerEvent:function(e,t){e="on"+e;var a=r[e];if(a)for(var o,n=0;o=a[n++];)o(t)}}),t}},{}],12:[function(e,t){"use strict";e("../dist/voxelcss.css");var r=e("./ColorFace"),a=e("./Editor"),o=e("./eventListener"),n=e("./ImageFace"),s=e("./LightSource"),i=e("./Mesh"),m=e("./meshes"),c=e("./positioned"),l=e("./Scene"),x=e("./Voxel"),g=e("./World");t.exports={ColorFace:r,Editor:a,eventListener:o,ImageFace:n,LightSource:s,Mesh:i,meshes:m,Positioned:c,Scene:l,Voxel:x,World:g}},{"../dist/voxelcss.css":1,"./ColorFace":2,"./Editor":3,"./ImageFace":4,"./LightSource":5,"./Mesh":6,"./Scene":7,"./Voxel":8,"./World":9,"./eventListener":11,"./meshes":13,"./positioned":14}],13:[function(e,t){"use strict";var r=e("./Mesh"),a=e("./ImageFace");t.exports={dirt:new r(new a("http://voxelcss.com/res/dirt/main.png")),grass:new r({top:new a("http://voxelcss.com/res/grass/top.png"),bottom:new a("http://voxelcss.com/res/grass/bottom.png"),front:new a("http://voxelcss.com/res/grass/side.png"),back:new a("http://voxelcss.com/res/grass/side.png"),left:new a("http://voxelcss.com/res/grass/side.png"),right:new a("http://voxelcss.com/res/grass/side.png")}),water:new r(new a("http://voxelcss.com/res/water/main.png")),waterFall:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/fall.png"),back:new a("http://voxelcss.com/res/water/fall.png"),left:new a("http://voxelcss.com/res/water/fall.png"),right:new a("http://voxelcss.com/res/water/fall.png")}),waterFallTop:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/falltop.png"),back:new a("http://voxelcss.com/res/water/falltop.png"),left:new a("http://voxelcss.com/res/water/falltop.png"),right:new a("http://voxelcss.com/res/water/falltop.png")}),waterFallCrash:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/crash.png"),back:new a("http://voxelcss.com/res/water/crash.png"),left:new a("http://voxelcss.com/res/water/crash.png"),right:new a("http://voxelcss.com/res/water/crash.png")}),treeTrunk:new r({top:new a("http://voxelcss.com/res/tree/rings.png"),bottom:new a("http://voxelcss.com/res/tree/rings.png"),front:new a("http://voxelcss.com/res/tree/bark.png"),back:new a("http://voxelcss.com/res/tree/bark.png"),left:new a("http://voxelcss.com/res/tree/bark.png"),right:new a("http://voxelcss.com/res/tree/bark.png")}),treeLeaves:new r(new a("http://voxelcss.com/res/tree/leaves.png"))}},{"./ImageFace":4,"./Mesh":6}],14:[function(e,t){"use strict";t.exports=function(e){function t(e){if(void 0===e||"number"!=typeof e)return m.x;var t=m.x;return m.x=e,c&&i.triggerEvent("move"),t}function r(e){if(void 0===e||"number"!=typeof e)return m.y;var t=m.y;return m.y=e,c&&i.triggerEvent("move"),t}function a(e){if(void 0===e||"number"!=typeof e)return m.z;var t=m.z;return m.z=e,c&&i.triggerEvent("move"),t}function o(e){return void 0===e||"number"!=typeof e?m.x:t(e+m.x)}function n(e){return void 0===e||"number"!=typeof e?m.y:r(e+m.y)}function s(e){return void 0===e||"number"!=typeof e?m.z:a(e+m.z)}var i=e||new Function,m={x:0,y:0,z:0},c=!0;return Object.assign(i,{setPosition:function(e){var o=_slicedToArray(e,3),n=o[0],s=o[1],m=o[2];c=!1;var l={x:t(n),y:r(s),z:a(m)};return c=!0,i.triggerEvent("move"),l},setPositionX:t,setPositionY:r,setPositionZ:a,getPosition:function(){return{x:m.x,y:m.y,z:m.z}},getPositionX:function(){return m.x},getPositionY:function(){return m.y},getPositionZ:function(){return m.z},translate:function(e,t,r){c=!1;var a={x:o(e),y:n(t),z:s(r)};return c=!0,i.triggerEvent("move"),a},translateX:o,translateY:n,translateZ:s}),i}},{}],15:[function(e,t){"use strict";var r=[],a=function(e,t){var a=document.head||document.getElementsByTagName("head")[0],o=r[r.length-1];if(t=t||{},t.insertAt=t.insertAt||"bottom","top"===t.insertAt)o?o.nextSibling?a.insertBefore(e,o.nextSibling):a.appendChild(e):a.insertBefore(e,a.firstChild),r.push(e);else if("bottom"===t.insertAt)a.appendChild(e);else throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")};t.exports={createLink:function createLink(e,t){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("link");for(var o in a.href=e,a.rel="stylesheet",t)if(t.hasOwnProperty(o)){var n=t[o];a.setAttribute("data-"+o,n)}r.appendChild(a)},createStyle:function createStyle(e,t,r){r=r||{};var o=document.createElement("style");for(var n in o.type="text/css",t)if(t.hasOwnProperty(n)){var s=t[n];o.setAttribute("data-"+n,s)}o.sheet?(o.innerHTML=e,o.sheet.cssText=e,a(o,{insertAt:r.insertAt})):o.styleSheet?(a(o,{insertAt:r.insertAt}),o.styleSheet.cssText=e):(o.appendChild(document.createTextNode(e)),a(o,{insertAt:r.insertAt}))}}},{}]},{},[12])(12)});
