"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};(function(t){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,e.voxelcss=t()}})(function(){var t=Math.PI;return function m(c,t,e){function r(i,o){if(!t[i]){if(!c[i]){var s="function"==typeof require&&require;if(!o&&s)return s(i,!0);if(n)return n(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var x=t[i]={exports:{}};c[i][0].call(x.exports,function(t){var e=c[i][1][t];return r(e?e:t)},x,x.exports,m,c,t,e)}return t[i].exports}for(var n="function"==typeof require&&require,a=0;a<e.length;a++)r(e[a]);return r}({1:[function(t,e){var r=".scene {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  cursor: move;\n}\n.scene .camera,\n.scene .zoom {\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  overflow: visible;\n}\n.cube,\n.scene .camera,\n.scene .zoom {\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.cube:hover img {\n  visibility: hidden!important;\n}\n.cube:hover .face {\n  background: rgba(0,0,0,.3)!important;\n}\n.cube:hover .face .shader {\n  opacity: 0!important;\n}\n.cube .anim {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.cube .anim.down {\n  -webkit-animation: b 1s linear both;\n  animation: b 1s linear both;\n}\n.cube .anim.up {\n  -webkit-animation: a 1s linear both;\n  animation: a 1s linear both;\n}\n.face {\n  display: block;\n  position: absolute;\n  outline: none;\n  border: none;\n  margin-left: -18px;\n  margin-top: -18px;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n}\n.face img {\n  width: 100%;\n  height: 100%;\n}\n.face img.colored {\n  visibility: hidden;\n}\n.face .shader {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n}\n@-webkit-keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@-webkit-keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n";t("browserify-css").createStyle(r,{href:"dist/voxelcss.css"},{insertAt:"bottom"}),e.exports=r},{"browserify-css":15}],2:[function(t,e){"use strict";function r(){function t(){return 1===arguments.length&&arguments[0].constructor!==Number?arguments[0].constructor===String?s(arguments[0]):i(arguments[0]):o.apply(this,arguments)}function e(){return d}function o(t,r,n,o){var a=e();return void 0!==t&&t.constructor===Number&&(d.r=t),void 0!==r&&r.constructor===Number&&(d.g=r),void 0!==n&&n.constructor===Number&&(d.b=n),void 0!==o&&o.constructor===Number&&(d.a=o),l(),a}function i(t){return void 0===t?e():o(t.r,t.g,t.b,t.a)}function s(t){return t&&t.constructor===String?(d=m(t),d.a=1,l(),e()):e()}function m(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,r,a){return e+e+r+r+a+a});var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?{r:parseInt(r[1],n),g:parseInt(r[2],n),b:parseInt(r[3],n)}:null}function c(t,e,r){return""+(16777216+(t<<n)+(e<<8)+r).toString(n).slice(1)}function l(){x.triggerEvent("change",{target:x})}var x=this,d={r:0,g:0,b:0,a:1};x.setColor=t,x.getRGBA=e,x.getHex=function(){return c(d.r,d.g,d.b)},x.serialize=function(){return JSON.stringify(d)},x.clone=function(){return new r(d)},function(){a(x),t.apply(this,arguments)}.apply(x,arguments)}var a=t("./eventListener"),n=16;e.exports=r,r.loadFromSerial=function(t){var e=JSON.parse(t);return new r(e)}},{"./eventListener":11}],3:[function(t,e){"use strict";e.exports=function(){function t(){h=!0}function e(){f.save()}function r(t){n(t);var r=f.add(t);return h&&e(),r}function a(t){var r=f.remove(t);return r&&o(t),h&&e(),r}function n(t){t.addEventListener("VoxelClick",i),t.addEventListener("TopClick",s),t.addEventListener("BottomClick",m),t.addEventListener("FrontClick",c),t.addEventListener("BackClick",l),t.addEventListener("LeftClick",x),t.addEventListener("RightClick",g),t.addEventListener("MeshChange",function(){h&&e()})}function o(t){t.removeEventListener("VoxelClick",i),t.removeEventListener("TopClick",s),t.removeEventListener("BottomClick",m),t.removeEventListener("FrontClick",c),t.removeEventListener("BackClick",l),t.removeEventListener("LeftClick",x),t.removeEventListener("RightClick",g)}function i(t){if(b){var e=t.target;a(e)}}function s(t){if(b){var e=t.target;d(e,0,1,0)}}function m(t){if(b){var e=t.target;d(e,0,-1,0)}}function c(t){if(b){var e=t.target;d(e,0,0,1)}}function l(t){if(b){var e=t.target;d(e,0,0,-1)}}function x(t){if(b){var e=t.target;d(e,-1,0,0)}}function g(t){if(b){var e=t.target;d(e,1,0,0)}}function d(t,e,a,n){var o=t.clone(),i=o.getDimension();o.setMesh(k.mesh),o.translate(e*i,a*i,n*i),r(o)}function p(){for(var t,e=0;t=f.getVoxels()[e++];)n(t)}var f,v=this,h=!1,b=!0,k={mesh:{}};v.enable=function(){b=!0},v.disable=function(){b=!1},v.isEnabled=function(){return b},v.enableAutoSave=t,v.disableAutoSave=function(){h=!1},v.canAutoSave=function(){return h},v.save=e,v.load=function(){var t=f.load();return p(),t},v.isSaved=function(){return f.isSaved()},v.deleteSave=function(){return f.deleteSave()},v.export=function(){return f.export()},v.import=function(t){var e=f.import(t);return p(),e},v.add=r,v.remove=a,v.getWorld=function(){return f},v.setToolMesh=function(t){if(void 0===t)return k.mesh;var e=k.mesh;return k.mesh=t,e},function(e,r){if(e===void 0)throw"Editor requires World instance for initialization";f=e,r!==void 0&&!0===r.autosave&&t(),p()}.apply(v,arguments)}},{}],4:[function(t,e){"use strict";function r(){function t(t){if(!t)return o;var r=o;return o=t,e.triggerEvent("change",{target:e}),r}var e=this,o=n;e.setSource=t,e.getSource=function(){return o},e.serialize=function(){return o},e.clone=function(){return new r(o)},function(r){a(e),t(r)}.apply(e,arguments)}var a=t("./eventListener"),n="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";e.exports=r,r.loadFromSerial=function(t){return new r(t)}},{"./eventListener":11}],5:[function(t,e){"use strict";var r=t("./eventListener"),a=t("./positioned");e.exports=function(){function t(t){if(void 0===t||"number"!=typeof t)return i;var e=i;return i=t,o.triggerEvent("change",{target:o}),e}function e(t,e){var r=n();return"number"==typeof e&&(s=e),"number"==typeof t&&(m=t),o.triggerEvent("change",{target:o}),r}function n(){return[m,s]}var o=this,i=500,s=1,m=0;Object.assign(o,{setTravelDistance:t,getTravelDistance:function(){return i},setBrightness:e,getBrightness:n}),function(n,i,s,m,c,l){a(r(o)),o.setPosition(n,i,s),t(m),e(c,l)}.apply(o,arguments)}},{"./eventListener":11,"./positioned":14}],6:[function(t,e){"use strict";function r(){function t(t){if(void 0!==t&&g(t)){var e=v;return!e||e.removeEventListener("change",p),v=t,v.addEventListener("change",p),E&&f(),e}}function e(t){if(void 0!==t&&g(t)){var e=h;return!e||e.removeEventListener("change",p),h=t,h.addEventListener("change",p),E&&f(),e}}function r(t){if(void 0!==t&&g(t)){var e=b;return!e||e.removeEventListener("change",p),b=t,b.addEventListener("change",p),E&&f(),e}}function a(t){if(void 0!==t&&g(t)){var e=k;return!e||e.removeEventListener("change",p),k=t,k.addEventListener("change",p),E&&f(),e}}function i(t){if(void 0!==t&&g(t)){var e=y;return!e||e.removeEventListener("change",p),y=t,y.addEventListener("change",p),E&&f(),e}}function m(t){if(void 0!==t&&g(t)){var e=u;return!e||e.removeEventListener("change",p),u=t,u.addEventListener("change",p),E&&f(),e}}function c(n){var o=l();return void 0===n?o:(g(n)&&(n={front:n,back:n,top:n,bottom:n,left:n,right:n}),E=!1,t(n.front),e(n.back),r(n.left),a(n.right),i(n.top),m(n.bottom),f(),E=!0,o)}function l(){return{front:v,back:h,left:b,right:k,top:y,bottom:u}}function x(t){return d(t.constructor)+"("+t.serialize()+")"}function g(t){return!!d(t.constructor)}function d(t){for(var e in s){var r=s[e];if(r===t)return e}return null}function p(){f()}function f(){w.triggerEvent("change",{target:w,faces:l()})}var v,h,b,k,y,u,w=this,E=!0;Object.assign(w,{setFront:t,setBack:e,setLeft:r,setRight:a,setTop:i,setBottom:m,getFront:function(){return v},getBack:function(){return h},getLeft:function(){return b},getRight:function(){return k},getTop:function(){return y},getBottom:function(){return u},setFaces:c,getFaces:l,serialize:function(){return JSON.stringify({front:x(v),back:x(h),left:x(b),right:x(k),top:x(y),bottom:x(u)})}}),function(t){n(w),c(new o),c(t)}.apply(w,arguments)}function a(t){var e=t.indexOf("("),r=t.slice(0,e),a=t.slice(e+1,-1);return s[r].loadFromSerial(a)}var n=t("./eventListener"),o=t("./ImageFace"),i=t("./ColorFace"),s={image:o,color:i};e.exports=r,r.loadFromSerial=function(t){var e=JSON.parse(t),n=e.front,o=e.back,i=e.left,s=e.right,m=e.top,c=e.bottom;return new r({front:a(n),back:a(o),left:a(i),right:a(s),top:a(m),bottom:a(c)})}},{"./ColorFace":2,"./ImageFace":4,"./eventListener":11}],7:[function(e,r){"use strict";var a=e("./eventListener"),n=16;r.exports=function(){function e(t){if(void 0===t||"number"!=typeof t)return H.x;var e=H.x;return H.x+=t,Z(),e}function r(t){if(void 0===t||"number"!=typeof t)return H.y;var e=H.y;return H.y+=t,Z(),e}function o(t){if(void 0===t||"number"!=typeof t)return H.z;var e=H.z;return H.z+=t,Z(),e}function i(t){if(void 0===t||"number"!=typeof t)return H.x;var e=H.x;return H.x=t,Z(),e}function s(t){if(void 0===t||"number"!=typeof t)return H.y;var e=H.y;return H.y=t,Z(),e}function m(t){if(void 0===t||"number"!=typeof t)return H.z;var e=H.z;return H.z=t,Z(),e}function c(){return{x:l(),y:g(),z:d()}}function l(){return H.x}function g(){return H.y}function d(){return H.z}function p(t,e,r){return{x:f(t),y:v(e),z:h(r)}}function f(t){if(void 0===t||"number"!=typeof t)return U.x;var e=U.x;return U.x+=t,Z(),e}function v(t){if(void 0===t||"number"!=typeof t)return U.y;var e=U.y;return U.y+=t,Z(),e}function h(t){if(void 0===t||"number"!=typeof t)return U.z;var e=U.z;return U.z+=t,Z(),e}function b(t){if(void 0===t||"number"!=typeof t)return U.x;var e=U.x;return U.x=t,Z(),e}function k(t){if(void 0===t||"number"!=typeof t)return U.y;var e=U.y;return U.y=t,Z(),e}function u(t){if(void 0===t||"number"!=typeof t)return U.z;var e=U.z;return U.z=t,Z(),e}function w(){return{x:U.x,y:U.y,z:U.z}}function E(){return G}function L(){Y=document.createElement("div"),Y.setAttribute("class","scene"),X=document.createElement("div"),X.setAttribute("class","zoom"),I=document.createElement("div"),I.setAttribute("class","camera"),Y.appendChild(X),X.appendChild(I)}function A(){Y.addEventListener("mousedown",C),Y.addEventListener("mousewheel",F),Y.addEventListener("wheel",F)}function C(t){_.start.x=t.x||t.clientX,_.start.y=t.y||t.clientY,_.current.x=t.x||t.clientX,_.current.y=t.y||t.clientY,window.addEventListener("mousemove",P),window.addEventListener("mouseup",S)}function S(){window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",S)}function P(e){if(_.lastMove.dx=(e.x||e.clientX)-_.current.x,_.lastMove.dy=(e.y||e.clientY)-_.current.y,_.current.x=e.x||e.clientX,_.current.y=e.y||e.clientY,Q&&_.shiftDown)p(_.lastMove.dx,_.lastMove.dy),Z(),O.triggerEvent("pan",{rotation:c(),pan:w(),zoom:E(),target:O});else if(j){var r=2*t*2;H.y+=_.lastMove.dx/window.innerWidth*r,H.x-=_.lastMove.dy/window.innerHeight*r,Z(),O.triggerEvent("orbit",{rotation:c(),pan:w(),zoom:E(),target:O})}}function F(t){if(K){return G+=t.deltaY/50,Z(),t.preventDefault(),O.triggerEvent("zoom",{rotation:c(),pan:w(),zoom:E(),target:O}),!1}}function B(){window.addEventListener("keydown",M),window.addEventListener("keyup",D)}function M(t){_.shiftDown=t.keyCode===n||t.which===n}function D(t){_.shiftDown=t.keyCode!==n&&t.which!==n}function Z(){I.style.transform="rotateX("+H.x+"rad) rotateY("+H.y+"rad) rotateZ("+H.z+"rad)",X.style.transform="scale("+G+", "+G+")",X.style.transform+=" translateX("+U.x+"px) translateY("+U.y+"px) translateZ("+U.z+"px)",T()}function T(){if(0!==J.length)for(var t,e=0;t=$[e++];)t.updateLightSource(J)}var R,Y,X,I,O=this,N=!1,V=0,W=0,q=0,H={x:V,y:W,z:q},U={x:V,y:W,z:q},G=1,_={start:{x:V,y:W},current:{x:V,y:W},lastMove:{x:V,y:W},shiftDown:!1},j=!0,Q=!0,K=!0,J=[],$=[];O.rotate=function(t,a,n){return{x:e(t),y:r(a),z:o(n)}},O.rotateX=e,O.rotateY=r,O.rotateZ=o,O.pan=p,O.panX=f,O.panY=v,O.panZ=h,O.setPan=function(t,e,r){var a={x:b(t),y:k(e),z:u(r)};return Z(),a},O.setPanX=b,O.setPanY=k,O.setPanZ=u,O.getPan=w,O.zoom=function(t){if(void 0===t||"number"!=typeof t)return G;var e=G;return G+=t,Z(),e},O.setZoom=function(t){return void 0===t||"number"!=typeof t?G:(G=t,Z(),G)},O.getZoom=E,O.attach=function(t){if(N)throw"Cannot attach currently attached scene";R=t,t.appendChild(Y),N=!0},O.detach=function(){if(!N)throw"Cannot detach currently detached scene";N=!1,Y.parentElement.removeChild(Y)},O.isAttached=function(){return N},O.getParentElement=function(){return R},O.enableOrbit=function(){j||(j=!0)},O.disableOrbit=function(){j&&(j=!1)},O.canOrbit=function(){return j},O.enablePan=function(){Q||(Q=!0)},O.disablePan=function(){Q&&(Q=!1)},O.canPan=function(){return Q},O.enableZoom=function(){K||(K=!0)},O.disableZoom=function(){K&&(K=!1)},O.canZoom=function(){return K},O.add=function(t){I.appendChild(t.getDomElement()),$.push(t),t.setParentScene(O),0!==J.length&&t.updateLightSource(J)},O.remove=function(t){I.removeChild(t.getDomElement()),$.splice($.indexOf(t),1),t.removeParentScene()},Object.assign(O,{getVoxels:function(){return $.concat([])},setRotation:function(t,e,r){var a={x:i(t),y:s(e),z:m(r)};return Z(),a},setRotationX:i,setRotationY:s,setRotationZ:m,getRotation:c,getRotationX:l,getRotationY:g,getRotationZ:d,addLightSource:function(t){var e=J.indexOf(t);return!(-1!==e)&&(t.addEventListener("change",T),t.addEventListener("move",T),J.push(t),T(),!0)},getLightSources:function(){return J},removeLightSource:function(t){var e=J.indexOf(t);return-1!==e&&(t.removeEventListener("change",T),t.removeEventListener("move",T),J.splice(e,1),T(),!0)}}),function(){a(O),L(),A(),B()}.apply(O,arguments)}},{"./eventListener":11}],8:[function(e,r){"use strict";function a(){function e(t){if(void 0!==t&&t.constructor===c){var e=D;return!e||e.removeEventListener("change",p),D=t,D.addEventListener("change",p),f(),e}}function r(t){if(void 0===t||"number"!=typeof t)return Z;var e=Z;return Z=t,e}function n(t){return S(t,3)}function g(t,e,r,a){var n=Math.abs,o=i(T.getRotationX(),-T.getRotationY(),T.getRotationZ()),s=d({x:t,y:e,z:r},o);s={x:s.x-P.getPositionX()-a.A*P.getDimension()/2,y:s.y-P.getPositionY()-a.B*P.getDimension()/2,z:s.z-P.getPositionZ()-a.C*P.getDimension()/2};var m=n,c=Math.asin,l=S,g=Math.sqrt,p=g(l(s.x,2)+l(s.y,2)+l(s.z,2)),f=1===m(a.C)?a.C*s.z:1===n(a.B)?a.B*s.y:a.A*s.x,v=c(m(s.x*a.A+s.y*a.B+s.z*a.C)/g(l(s.x,2)+l(s.y,2)+l(s.z,2)));return{angle:v,direction:f,distance:p}}function d(t,e){var r=[[t.x],[t.y],[t.z]],a=o(e,r);return{x:a[0][0],y:a[1][0],z:a[2][0]}}function p(){f(),P.triggerEvent("MeshChange",{target:P,mesh:D})}function f(){var t=D.getFaces();for(var e in M){var r=t[e];if(r instanceof l)M[e].src=r.getSource(),M[e].removeAttribute("class");else if(r instanceof x){var a=M[e].parentElement;a.style.background="#"+r.getHex(),M[e].setAttribute("class","colored")}}}function v(){F=b("div","cube"),B=b("div","anim"),h("top"),h("bottom"),h("front"),h("back"),h("left"),h("right"),F.appendChild(B)}function h(t){var e=b("div","face "+t);switch(e.style.width=Z+"px",e.style.height=Z+"px",e.style.marginLeft=-Z/2+"px",e.style.marginTop=-Z/2+"px",t){case"top":e.style.transform="rotateX(90deg) translateZ("+Z/2+"px)",e.addEventListener("click",w);break;case"bottom":e.style.transform="rotateX(90deg) translateZ(-"+Z/2+"px)",e.addEventListener("click",E);break;case"left":e.style.transform="rotateY(90deg) translateZ(-"+Z/2+"px)",e.addEventListener("click",L);break;case"right":e.style.transform="rotateY(90deg) translateZ("+Z/2+"px)",e.addEventListener("click",A);break;case"front":e.style.transform="translateZ("+Z/2+"px)",e.addEventListener("click",C);break;case"back":e.style.transform="translateZ(-"+Z/2+"px)",e.addEventListener("click",z);break;default:}e.addEventListener("contextmenu",u);var r=b("img","");M[t]=r;var a=b("div","shader");M[t].shader=a,e.appendChild(r),e.appendChild(a),B.appendChild(e)}function b(t,e){var r=document.createElement(t);return r.setAttribute("class",e),r}function k(){var t=P.getPosition();F.style.transform="translate3d("+t.x+"px, "+-t.y+"px, "+t.z+"px)"}function y(){T.add(P)}function u(t){return t.preventDefault(),P.triggerEvent("VoxelClick",{target:P}),!1}function w(){P.triggerEvent("TopClick",{target:P})}function E(){P.triggerEvent("BottomClick",{target:P})}function L(){P.triggerEvent("LeftClick",{target:P})}function A(){P.triggerEvent("RightClick",{target:P})}function C(){P.triggerEvent("FrontClick",{target:P})}function z(){P.triggerEvent("BackClick",{target:P})}var S=Math.pow,P=this,F=void 0,B=void 0,M={},D=void 0,Z=0,T=void 0;Object.assign(P,{setMesh:e,getMesh:function(){return D},animUp:function(t){if(t===void 0)throw"Scene required to add voxel to scene";T=t,B.setAttribute("class","anim up"),y()},animDown:function(t){if(t===void 0)throw"Scene required to add voxel to scene";T=t,B.setAttribute("class","anim down"),y()},addToScene:function(t){if(t===void 0)throw"Scene required to add voxel to scene";T=t,B.setAttribute("class","anim"),y()},removeFromScene:function(){void 0===T||T.remove(P)},setParentScene:function(t){T=t},removeParentScene:function(){T=void 0},setDimension:r,getDimension:function(){return Z},getDomElement:function(){return F},updateLightSource:function(e){for(var r,a=Math.max,o=Math.min,s=1,m=1,c=1,l=1,d=1,p=1,f=0;r=e[f++];){var i,v,h,b,k=r.getBrightness(),u=k[1]-k[0],w=1-k[1],E=r.getPositionX(),x=r.getPositionY(),y=r.getPositionZ();0<m&&(i=g(E,x,y,{A:0,B:0,C:-1}),v=i.angle,h=1-v/(t/2),h=n(h),h=o(1,h+S(i.distance/r.getTravelDistance(),6)),b=(0>i.direction?1:h)*u+w,m=a(0,m-(1-b))),0<s&&(i=g(E,x,y,{A:0,B:0,C:1}),v=i.angle,h=1-v/(t/2),h=n(h),h=o(1,h+S(i.distance/r.getTravelDistance(),6)),b=(0>i.direction?1:h)*u+w,s=a(0,s-(1-b))),0<c&&(i=g(E,x,y,{A:-1,B:0,C:0}),v=i.angle,h=1-v/(t/2),h=n(h),h=o(1,h+S(i.distance/r.getTravelDistance(),6)),b=(0>i.direction?1:h)*u+w,c=a(0,c-(1-b))),0<l&&(i=g(E,x,y,{A:1,B:0,C:0}),v=i.angle,h=1-v/(t/2),h=n(h),h=o(1,h+S(i.distance/r.getTravelDistance(),6)),b=(0>i.direction?1:h)*u+w,l=a(0,l-(1-b))),0<d&&(i=g(E,x,y,{A:0,B:1,C:0}),v=i.angle,h=1-v/(t/2),h=n(h),h=o(1,h+S(i.distance/r.getTravelDistance(),6)),b=(0>i.direction?1:h)*u+w,d=a(0,d-(1-b))),0<p&&(i=g(E,x,y,{A:0,B:-1,C:0}),v=i.angle,h=1-v/(t/2),h=n(h),h=o(1,h+S(i.distance/r.getTravelDistance(),6)),b=(0>i.direction?1:h)*u+w,p=a(0,p-(1-b)))}M.front.shader.style.opacity=s,M.back.shader.style.opacity=m,M.left.shader.style.opacity=c,M.right.shader.style.opacity=l,M.top.shader.style.opacity=d,M.bottom.shader.style.opacity=p},clone:function(){return new a(P.getPositionX(),P.getPositionY(),P.getPositionZ(),Z,{mesh:D})}}),function(t,a,n,o,i){m(s(P)),P.addEventListener("move",k),r(o),v(),P.setPosition(t,a,n),e(new c),i!==void 0&&i.mesh!==void 0&&e(i.mesh)}.apply(P,arguments)}var n=e("./common"),o=n.multiplyMatrices,i=n.generateRotationMatrix,s=e("./eventListener"),m=e("./positioned"),c=e("./Mesh"),l=e("./ImageFace"),x=e("./ColorFace");r.exports=a},{"./ColorFace":2,"./ImageFace":4,"./Mesh":6,"./common":10,"./eventListener":11,"./positioned":14}],9:[function(t,e){"use strict";var r=t("./Mesh"),a=t("./Voxel");e.exports=function(){function t(t){return x.push(t),m.add(t)}function e(t){var e=x.indexOf(t);return!(0>e)&&(m.remove(t),x.splice(e,1),!0)}function n(){for(var t,e=[],r=0;t=x[r++];)e.push({position:t.getPosition(),dimension:t.getDimension(),mesh:t.getMesh().serialize()});return JSON.stringify(e)}function o(e){s();for(var n,o,m=JSON.parse(e+""),c=0;n=m[c++];)o=new a(n.position.x,n.position.y,n.position.z,n.dimension),o.setMesh(r.loadFromSerial(n.mesh)),t(o)}function s(){for(;0<x.length;)e(x[0])}function i(){return"savedWorld<"+l+">"}var m,c=this,l="*",x=[];c.add=t,c.remove=e,c.export=n,c.import=o,c.save=function(){localStorage.setItem(i(),n())},c.load=function(){o(localStorage.getItem(i())||"[]")},c.isSaved=function(){return!!localStorage.getItem(i())},c.deleteSave=function(){localStorage.setItem(i(),"")},c.getScene=function(){return m},c.getVoxels=function(){return x.concat([])},function(t,e){if(t===void 0)throw"World cannot be instantiated without a Scene instance";m=t,e!==void 0&&(l=e)}.apply(c,arguments)}},{"./Mesh":6,"./Voxel":8}],10:[function(t,e){"use strict";function r(t,e){for(var a=t.length,n=t[0].length,o=e[0].length,s=Array(a),m=0;m<a;++m){s[m]=Array(o);for(var r=0;r<o;++r){s[m][r]=0;for(var c=0;c<n;++c)s[m][r]+=t[m][c]*e[c][r]}}return s}var a=Math.cos,n=Math.sin;e.exports={generateRotationMatrix:function(t,e,o){var i=[[1,0,0],[0,a(t),-n(t)],[0,n(t),a(t)]],s=[[a(e),0,n(e)],[0,1,0],[-n(e),0,a(e)]],m=[[a(o),-n(o),0],[n(o),a(o),0],[0,0,1]];return r(r(m,s),i)},multiplyMatrices:r}},{}],11:[function(t,e){"use strict";e.exports=function(t){var e=t||new Function,r={};return e.addEventListener=function(t,e){(t="on"+t,"function"==typeof e)&&(r[t]||(r[t]=[]),-1<r[t].indexOf(e)||r[t].push(e))},e.removeEventListener=function(t,e){t="on"+t,r[t]&&r[t].splice(r[t].indexOf(e),1)},e.triggerEvent=function(t,e){t="on"+t;var a=r[t];if(a)for(var n,o=0;n=a[o++];)n(e)},e}},{}],12:[function(t,e){"use strict";t("../dist/voxelcss.css");var r=t("./ColorFace"),a=t("./Editor"),n=t("./eventListener"),o=t("./ImageFace"),i=t("./LightSource"),s=t("./Mesh"),m=t("./meshes"),c=t("./positioned"),l=t("./Scene"),x=t("./Voxel"),g=t("./World");e.exports={ColorFace:r,Editor:a,eventListener:n,ImageFace:o,LightSource:i,Mesh:s,meshes:m,Positioned:c,Scene:l,Voxel:x,World:g}},{"../dist/voxelcss.css":1,"./ColorFace":2,"./Editor":3,"./ImageFace":4,"./LightSource":5,"./Mesh":6,"./Scene":7,"./Voxel":8,"./World":9,"./eventListener":11,"./meshes":13,"./positioned":14}],13:[function(t,e){"use strict";var r=t("./Mesh"),a=t("./ImageFace");e.exports={dirt:new r(new a("http://voxelcss.com/res/dirt/main.png")),grass:new r({top:new a("http://voxelcss.com/res/grass/top.png"),bottom:new a("http://voxelcss.com/res/grass/bottom.png"),front:new a("http://voxelcss.com/res/grass/side.png"),back:new a("http://voxelcss.com/res/grass/side.png"),left:new a("http://voxelcss.com/res/grass/side.png"),right:new a("http://voxelcss.com/res/grass/side.png")}),water:new r(new a("http://voxelcss.com/res/water/main.png")),waterFall:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/fall.png"),back:new a("http://voxelcss.com/res/water/fall.png"),left:new a("http://voxelcss.com/res/water/fall.png"),right:new a("http://voxelcss.com/res/water/fall.png")}),waterFallTop:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/falltop.png"),back:new a("http://voxelcss.com/res/water/falltop.png"),left:new a("http://voxelcss.com/res/water/falltop.png"),right:new a("http://voxelcss.com/res/water/falltop.png")}),waterFallCrash:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/crash.png"),back:new a("http://voxelcss.com/res/water/crash.png"),left:new a("http://voxelcss.com/res/water/crash.png"),right:new a("http://voxelcss.com/res/water/crash.png")}),treeTrunk:new r({top:new a("http://voxelcss.com/res/tree/rings.png"),bottom:new a("http://voxelcss.com/res/tree/rings.png"),front:new a("http://voxelcss.com/res/tree/bark.png"),back:new a("http://voxelcss.com/res/tree/bark.png"),left:new a("http://voxelcss.com/res/tree/bark.png"),right:new a("http://voxelcss.com/res/tree/bark.png")}),treeLeaves:new r(new a("http://voxelcss.com/res/tree/leaves.png"))}},{"./ImageFace":4,"./Mesh":6}],14:[function(t,e){"use strict";e.exports=function(t){function e(t){if(void 0===t||"number"!=typeof t)return m.x;var e=m.x;return m.x=t,c&&s.triggerEvent("move"),e}function r(t){if(void 0===t||"number"!=typeof t)return m.y;var e=m.y;return m.y=t,c&&s.triggerEvent("move"),e}function a(t){if(void 0===t||"number"!=typeof t)return m.z;var e=m.z;return m.z=t,c&&s.triggerEvent("move"),e}function n(t){return void 0===t||"number"!=typeof t?m.x:e(t+m.x)}function o(t){return void 0===t||"number"!=typeof t?m.y:r(t+m.y)}function i(t){return void 0===t||"number"!=typeof t?m.z:a(t+m.z)}var s=t||new Function,m={x:0,y:0,z:0},c=!0;return Object.assign(s,{setPosition:function(t,n,o){c=!1;var i={x:e(t),y:r(n),z:a(o)};return c=!0,s.triggerEvent("move"),i},setPositionX:e,setPositionY:r,setPositionZ:a,getPosition:function(){return{x:m.x,y:m.y,z:m.z}},getPositionX:function(){return m.x},getPositionY:function(){return m.y},getPositionZ:function(){return m.z},translate:function(t,e,r){c=!1;var a={x:n(t),y:o(e),z:i(r)};return c=!0,s.triggerEvent("move"),a},translateX:n,translateY:o,translateZ:i}),s}},{}],15:[function(t,e){"use strict";var r=[],a=function(t,e){var a=document.head||document.getElementsByTagName("head")[0],n=r[r.length-1];if(e=e||{},e.insertAt=e.insertAt||"bottom","top"===e.insertAt)n?n.nextSibling?a.insertBefore(t,n.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),r.push(t);else if("bottom"===e.insertAt)a.appendChild(t);else throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")};e.exports={createLink:function createLink(t,e){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("link");for(var n in a.href=t,a.rel="stylesheet",e)if(e.hasOwnProperty(n)){var o=e[n];a.setAttribute("data-"+n,o)}r.appendChild(a)},createStyle:function createStyle(t,e,r){r=r||{};var n=document.createElement("style");for(var o in n.type="text/css",e)if(e.hasOwnProperty(o)){var i=e[o];n.setAttribute("data-"+o,i)}n.sheet?(n.innerHTML=t,n.sheet.cssText=t,a(n,{insertAt:r.insertAt})):n.styleSheet?(a(n,{insertAt:r.insertAt}),n.styleSheet.cssText=t):(n.appendChild(document.createTextNode(t)),a(n,{insertAt:r.insertAt}))}}},{}]},{},[12])(12)});
