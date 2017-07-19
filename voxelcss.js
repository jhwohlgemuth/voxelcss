"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};(function(a){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,b.voxelcss=a()}})(function(){var a=Math.PI;return function b(c,d,e){function a(h,i){if(!d[h]){if(!c[h]){var j="function"==typeof require&&require;if(!i&&j)return j(h,!0);if(g)return g(h,!0);var k=new Error("Cannot find module '"+h+"'");throw k.code="MODULE_NOT_FOUND",k}var f=d[h]={exports:{}};c[h][0].call(f.exports,function(b){var d=c[h][1][b];return a(d?d:b)},f,f.exports,b,c,d,e)}return d[h].exports}for(var g="function"==typeof require&&require,f=0;f<e.length;f++)a(e[f]);return a}({1:[function(a,b){"use strict";function c(){function a(){return 1===arguments.length&&arguments[0].constructor!==Number?arguments[0].constructor===String?h(arguments[0]):g(arguments[0]):b.apply(this,arguments)}function f(){return m}function b(c,d,e,b){var a=f();return void 0!==c&&c.constructor===Number&&(m.r=c),void 0!==d&&d.constructor===Number&&(m.g=d),void 0!==e&&e.constructor===Number&&(m.b=e),void 0!==b&&b.constructor===Number&&(m.a=b),k(),a}function g(a){return void 0===a?f():b(a.r,a.g,a.b,a.a)}function h(a){return a&&a.constructor===String?(m=i(a),m.a=1,k(),f()):f()}function i(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(b,function(a,c,d,e){return c+c+d+d+e+e});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return c?{r:parseInt(c[1],e),g:parseInt(c[2],e),b:parseInt(c[3],e)}:null}function j(a,c,d){return""+(16777216+(a<<e)+(c<<8)+d).toString(e).slice(1)}function k(){l.triggerEvent("change",{target:l})}var l=this,m={r:0,g:0,b:0,a:1};l.setColor=a,l.getRGBA=f,l.getHex=function(){return j(m.r,m.g,m.b)},l.serialize=function(){return JSON.stringify(m)},l.clone=function(){return new c(m)},function(){d(l),a.apply(this,arguments)}.apply(l,arguments)}var d=a("./eventListener"),e=16;b.exports=c,c.loadFromSerial=function(a){var b=JSON.parse(a);return new c(b)}},{"./eventListener":10}],2:[function(a,b){"use strict";b.exports=function(){function a(){r=!0}function b(){p.save()}function c(a){e(a);var c=p.add(a);return r&&b(),c}function d(a){var c=p.remove(a);return c&&f(a),r&&b(),c}function e(a){a.addEventListener("VoxelClick",g),a.addEventListener("TopClick",h),a.addEventListener("BottomClick",i),a.addEventListener("FrontClick",j),a.addEventListener("BackClick",k),a.addEventListener("LeftClick",l),a.addEventListener("RightClick",m),a.addEventListener("MeshChange",function(){r&&b()})}function f(a){a.removeEventListener("VoxelClick",g),a.removeEventListener("TopClick",h),a.removeEventListener("BottomClick",i),a.removeEventListener("FrontClick",j),a.removeEventListener("BackClick",k),a.removeEventListener("LeftClick",l),a.removeEventListener("RightClick",m)}function g(a){if(s){var b=a.target;d(b)}}function h(a){if(s){var b=a.target;n(b,0,1,0)}}function i(a){if(s){var b=a.target;n(b,0,-1,0)}}function j(a){if(s){var b=a.target;n(b,0,0,1)}}function k(a){if(s){var b=a.target;n(b,0,0,-1)}}function l(a){if(s){var b=a.target;n(b,-1,0,0)}}function m(a){if(s){var b=a.target;n(b,1,0,0)}}function n(a,b,d,e){var f=a.clone(),g=f.getDimension();f.setMesh(t.mesh),f.translate(b*g,d*g,e*g),c(f)}function o(){for(var a,b=0;a=p.getVoxels()[b++];)e(a)}var p,q=this,r=!1,s=!0,t={mesh:{}};q.enable=function(){s=!0},q.disable=function(){s=!1},q.isEnabled=function(){return s},q.enableAutoSave=a,q.disableAutoSave=function(){r=!1},q.canAutoSave=function(){return r},q.save=b,q.load=function(){var a=p.load();return o(),a},q.isSaved=function(){return p.isSaved()},q.deleteSave=function(){return p.deleteSave()},q.export=function(){return p.export()},q.import=function(a){var b=p.import(a);return o(),b},q.add=c,q.remove=d,q.getWorld=function(){return p},q.setToolMesh=function(a){if(void 0===a)return t.mesh;var b=t.mesh;return t.mesh=a,b},function(b,c){if(b===void 0)throw"Editor requires World instance for initialization";p=b,c!==void 0&&!0===c.autosave&&a(),o()}.apply(q,arguments)}},{}],3:[function(a,b){"use strict";function c(){function a(a){if(!a)return f;var c=f;return f=a,b.triggerEvent("change",{target:b}),c}var b=this,f=e;b.setSource=a,b.getSource=function(){return f},b.serialize=function(){return f},b.clone=function(){return new c(f)},function(c){d(b),a(c)}.apply(b,arguments)}var d=a("./eventListener"),e="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";b.exports=c,c.loadFromSerial=function(a){return new c(a)}},{"./eventListener":10}],4:[function(a,b){"use strict";var c=a("./eventListener"),d=a("./positioned");b.exports=function(){function a(a){if(void 0===a||"number"!=typeof a)return g;var b=g;return g=a,f.triggerEvent("change",{target:f}),b}function b(a,b){var c=e();return"number"==typeof b&&(h=b),"number"==typeof a&&(i=a),f.triggerEvent("change",{target:f}),c}function e(){return[i,h]}var f=this,g=500,h=1,i=0;f.setTravelDistance=a,f.getTravelDistance=function(){return g},f.setBrightness=b,f.getBrightness=e,function(e,g,h,i,j,k){d(c(f)),f.setPosition(e,g,h),a(i),b(j,k)}.apply(f,arguments)}},{"./eventListener":10,"./positioned":12}],5:[function(a,b){"use strict";function c(){function a(a){if(void 0!==a&&m(a)){var b=q;return!b||b.removeEventListener("change",o),q=a,q.addEventListener("change",o),x&&p(),b}}function b(a){if(void 0!==a&&m(a)){var b=r;return!b||b.removeEventListener("change",o),r=a,r.addEventListener("change",o),x&&p(),b}}function c(a){if(void 0!==a&&m(a)){var b=s;return!b||b.removeEventListener("change",o),s=a,s.addEventListener("change",o),x&&p(),b}}function d(a){if(void 0!==a&&m(a)){var b=t;return!b||b.removeEventListener("change",o),t=a,t.addEventListener("change",o),x&&p(),b}}function g(a){if(void 0!==a&&m(a)){var b=u;return!b||b.removeEventListener("change",o),u=a,u.addEventListener("change",o),x&&p(),b}}function i(a){if(void 0!==a&&m(a)){var b=v;return!b||b.removeEventListener("change",o),v=a,v.addEventListener("change",o),x&&p(),b}}function j(e){var f=k();return void 0===e?f:(m(e)&&(e={front:e,back:e,top:e,bottom:e,left:e,right:e}),x=!1,a(e.front),b(e.back),c(e.left),d(e.right),g(e.top),i(e.bottom),p(),x=!0,f)}function k(){return{front:q,back:r,left:s,right:t,top:u,bottom:v}}function l(a){return n(a.constructor)+"("+a.serialize()+")"}function m(a){return!!n(a.constructor)}function n(a){for(var b in h){var c=h[b];if(c===a)return b}return null}function o(){p()}function p(){w.triggerEvent("change",{target:w,faces:k()})}var q,r,s,t,u,v,w=this,x=!0;Object.assign(w,{setFront:a,setBack:b,setLeft:c,setRight:d,setTop:g,setBottom:i,getFront:function(){return q},getBack:function(){return r},getLeft:function(){return s},getRight:function(){return t},getTop:function(){return u},getBottom:function(){return v},setFaces:j,getFaces:k,serialize:function(){return JSON.stringify({front:l(q),back:l(r),left:l(s),right:l(t),top:l(u),bottom:l(v)})}}),function(a){e(w),j(new f),j(a)}.apply(w,arguments)}function d(a){var b=a.indexOf("("),c=a.slice(0,b),d=a.slice(b+1,-1);return h[c].loadFromSerial(d)}var e=a("./eventListener"),f=a("./ImageFace"),g=a("./ColorFace"),h={image:f,color:g};b.exports=c,c.loadFromSerial=function(a){var b=JSON.parse(a),e=b.front,f=b.back,g=b.left,h=b.right,i=b.top,j=b.bottom;return new c({front:d(e),back:d(f),left:d(g),right:d(h),top:d(i),bottom:d(j)})}},{"./ColorFace":1,"./ImageFace":3,"./eventListener":10}],6:[function(a,b){"use strict";var c=a("./Mesh"),d=a("./ImageFace");b.exports={dirt:new c(new d("http://voxelcss.com/res/dirt/main.png")),grass:new c({top:new d("http://voxelcss.com/res/grass/top.png"),bottom:new d("http://voxelcss.com/res/grass/bottom.png"),front:new d("http://voxelcss.com/res/grass/side.png"),back:new d("http://voxelcss.com/res/grass/side.png"),left:new d("http://voxelcss.com/res/grass/side.png"),right:new d("http://voxelcss.com/res/grass/side.png")}),water:new c(new d("http://voxelcss.com/res/water/main.png")),waterFall:new c({top:new d("http://voxelcss.com/res/water/main.png"),bottom:new d("http://voxelcss.com/res/water/main.png"),front:new d("http://voxelcss.com/res/water/fall.png"),back:new d("http://voxelcss.com/res/water/fall.png"),left:new d("http://voxelcss.com/res/water/fall.png"),right:new d("http://voxelcss.com/res/water/fall.png")}),waterFallTop:new c({top:new d("http://voxelcss.com/res/water/main.png"),bottom:new d("http://voxelcss.com/res/water/main.png"),front:new d("http://voxelcss.com/res/water/falltop.png"),back:new d("http://voxelcss.com/res/water/falltop.png"),left:new d("http://voxelcss.com/res/water/falltop.png"),right:new d("http://voxelcss.com/res/water/falltop.png")}),waterFallCrash:new c({top:new d("http://voxelcss.com/res/water/main.png"),bottom:new d("http://voxelcss.com/res/water/main.png"),front:new d("http://voxelcss.com/res/water/crash.png"),back:new d("http://voxelcss.com/res/water/crash.png"),left:new d("http://voxelcss.com/res/water/crash.png"),right:new d("http://voxelcss.com/res/water/crash.png")}),treeTrunk:new c({top:new d("http://voxelcss.com/res/tree/rings.png"),bottom:new d("http://voxelcss.com/res/tree/rings.png"),front:new d("http://voxelcss.com/res/tree/bark.png"),back:new d("http://voxelcss.com/res/tree/bark.png"),left:new d("http://voxelcss.com/res/tree/bark.png"),right:new d("http://voxelcss.com/res/tree/bark.png")}),treeLeaves:new c(new d("http://voxelcss.com/res/tree/leaves.png"))}},{"./ImageFace":3,"./Mesh":5}],7:[function(b,c){"use strict";var d=b("./eventListener"),e=16;c.exports=function(){function b(a){if(void 0===a||"number"!=typeof a)return K.x;var b=K.x;return K.x+=a,C(),b}function c(a){if(void 0===a||"number"!=typeof a)return K.y;var b=K.y;return K.y+=a,C(),b}function f(a){if(void 0===a||"number"!=typeof a)return K.z;var b=K.z;return K.z+=a,C(),b}function g(a){if(void 0===a||"number"!=typeof a)return K.x;var b=K.x;return K.x=a,C(),b}function h(a){if(void 0===a||"number"!=typeof a)return K.y;var b=K.y;return K.y=a,C(),b}function i(a){if(void 0===a||"number"!=typeof a)return K.z;var b=K.z;return K.z=a,C(),b}function j(){return{x:K.x,y:K.y,z:K.z}}function k(a,b,c){return{x:l(a),y:m(b),z:n(c)}}function l(a){if(void 0===a||"number"!=typeof a)return L.x;var b=L.x;return L.x+=a,C(),b}function m(a){if(void 0===a||"number"!=typeof a)return L.y;var b=L.y;return L.y+=a,C(),b}function n(a){if(void 0===a||"number"!=typeof a)return L.z;var b=L.z;return L.z+=a,C(),b}function o(a){if(void 0===a||"number"!=typeof a)return L.x;var b=L.x;return L.x=a,C(),b}function p(a){if(void 0===a||"number"!=typeof a)return L.y;var b=L.y;return L.y=a,C(),b}function q(a){if(void 0===a||"number"!=typeof a)return L.z;var b=L.z;return L.z=a,C(),b}function r(){return{x:L.x,y:L.y,z:L.z}}function s(){return M}function t(){F=document.createElement("div"),F.setAttribute("class","scene"),G=document.createElement("div"),G.setAttribute("class","zoom"),H=document.createElement("div"),H.setAttribute("class","camera"),F.appendChild(G),G.appendChild(H)}function u(){F.addEventListener("mousedown",v),F.addEventListener("mousewheel",y),F.addEventListener("wheel",y)}function v(a){N.start.x=a.x||a.clientX,N.start.y=a.y||a.clientY,N.current.x=a.x||a.clientX,N.current.y=a.y||a.clientY,window.addEventListener("mousemove",x),window.addEventListener("mouseup",w)}function w(){window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",w)}function x(b){if(N.lastMove.dx=(b.x||b.clientX)-N.current.x,N.lastMove.dy=(b.y||b.clientY)-N.current.y,N.current.x=b.x||b.clientX,N.current.y=b.y||b.clientY,P&&N.shiftDown)k(N.lastMove.dx,N.lastMove.dy),C(),I.triggerEvent("pan",{rotation:j(),pan:r(),zoom:s(),target:I});else if(O){var c=2*a*2;K.y+=N.lastMove.dx/window.innerWidth*c,K.x-=N.lastMove.dy/window.innerHeight*c,C(),I.triggerEvent("orbit",{rotation:j(),pan:r(),zoom:s(),target:I})}}function y(a){if(Q){return M+=a.deltaY/50,C(),a.preventDefault(),I.triggerEvent("zoom",{rotation:j(),pan:r(),zoom:s(),target:I}),!1}}function z(){window.addEventListener("keydown",A),window.addEventListener("keyup",B)}function A(a){N.shiftDown=a.keyCode===e||a.which===e}function B(a){N.shiftDown=a.keyCode!==e&&a.which!==e}function C(){H.style.transform="rotateX("+K.x+"rad) rotateY("+K.y+"rad) rotateZ("+K.z+"rad)",G.style.transform="scale("+M+", "+M+")",G.style.transform+=" translateX("+L.x+"px) translateY("+L.y+"px) translateZ("+L.z+"px)",D()}function D(){if(0!==R.length)for(var a,b=0;a=S[b++];)a.updateLightSource(R)}var E,F,G,H,I=this,J=!1,K={x:0,y:0,z:0},L={x:0,y:0,z:0},M=1,N={start:{x:0,y:0},current:{x:0,y:0},lastMove:{x:0,y:0},shiftDown:!1},O=!0,P=!0,Q=!0,R=[],S=[];I.rotate=function(a,d,e){return{x:b(a),y:c(d),z:f(e)}},I.rotateX=b,I.rotateY=c,I.rotateZ=f,I.pan=k,I.panX=l,I.panY=m,I.panZ=n,I.setPan=function(a,b,c){var d={x:o(a),y:p(b),z:q(c)};return C(),d},I.setPanX=o,I.setPanY=p,I.setPanZ=q,I.getPan=r,I.getPanX=function(){return L.x},I.getPanY=function(){return L.y},I.getPanZ=function(){return L.z},I.zoom=function(a){if(void 0===a||"number"!=typeof a)return M;var b=M;return M+=a,C(),b},I.setZoom=function(a){return void 0===a||"number"!=typeof a?M:(M=a,C(),M)},I.getZoom=s,I.attach=function(a){if(J)throw"Cannot attach currently attached scene";E=a,a.appendChild(F),J=!0},I.detach=function(){if(!J)throw"Cannot detach currently detached scene";J=!1,F.parentElement.removeChild(F)},I.isAttached=function(){return J},I.getParentElement=function(){return E},I.enableOrbit=function(){O||(O=!0)},I.disableOrbit=function(){O&&(O=!1)},I.canOrbit=function(){return O},I.enablePan=function(){P||(P=!0)},I.disablePan=function(){P&&(P=!1)},I.canPan=function(){return P},I.enableZoom=function(){Q||(Q=!0)},I.disableZoom=function(){Q&&(Q=!1)},I.canZoom=function(){return Q},I.add=function(a){H.appendChild(a.getDomElement()),S.push(a),a.setParentScene(I),0!==R.length&&a.updateLightSource(R)},I.remove=function(a){H.removeChild(a.getDomElement()),S.splice(S.indexOf(a),1),a.removeParentScene()},Object.assign(I,{setRotation:function(a,b,c){var d={x:g(a),y:h(b),z:i(c)};return C(),d},setRotationX:g,setRotationY:h,setRotationZ:i,getRotation:j,getRotationX:function(){return K.x},getRotationY:function(){return K.y},getRotationZ:function(){return K.z},getVoxels:function(){return S.concat([])},addLightSource:function(a){var b=R.indexOf(a);return!(-1!==b)&&(a.addEventListener("change",D),a.addEventListener("move",D),R.push(a),D(),!0)},getLightSources:function(){return R},removeLightSource:function(a){var b=R.indexOf(a);return-1!==b&&(a.removeEventListener("change",D),a.removeEventListener("move",D),R.splice(b,1),D(),!0)}}),function(){d(I),t(),u(),z()}.apply(I,arguments)}},{"./eventListener":10}],8:[function(b,c){"use strict";function d(){function b(a){if(void 0!==a&&a.constructor===g){var b=H;return!b||b.removeEventListener("change",o),H=a,H.addEventListener("change",o),p(),b}}function c(a){if(void 0===a||"number"!=typeof a)return I;var b=I;return I=a,b}function j(a){return C(a,3)}function k(a,b,c,d){var e=Math.abs,f=l(J.getRotationX(),-J.getRotationY(),J.getRotationZ()),g=m({x:a,y:b,z:c},f);g={x:g.x-D.getPositionX()-d.A*D.getDimension()/2,y:g.y-D.getPositionY()-d.B*D.getDimension()/2,z:g.z-D.getPositionZ()-d.C*D.getDimension()/2};var h=e,i=Math.asin,j=C,k=Math.sqrt,n=k(j(g.x,2)+j(g.y,2)+j(g.z,2)),o=1===h(d.C)?d.C*g.z:1===e(d.B)?d.B*g.y:d.A*g.x,p=i(h(g.x*d.A+g.y*d.B+g.z*d.C)/k(j(g.x,2)+j(g.y,2)+j(g.z,2)));return{angle:p,direction:o,distance:n}}function l(a,b,c){var d=Math.sin,e=Math.cos,f=[[1,0,0],[0,e(a),-d(a)],[0,d(a),e(a)]],g=[[e(b),0,d(b)],[0,1,0],[-d(b),0,e(b)]],h=[[e(c),-d(c),0],[d(c),e(c),0],[0,0,1]];return n(n(h,g),f)}function m(a,b){var c=[[a.x],[a.y],[a.z]],d=n(b,c);return{x:d[0][0],y:d[1][0],z:d[2][0]}}function n(d,a){for(var b=d.length,e=d[0].length,f=a[0].length,g=Array(b),h=0;h<b;++h){g[h]=Array(f);for(var j=0;j<f;++j){g[h][j]=0;for(var c=0;c<e;++c)g[h][j]+=d[h][c]*a[c][j]}}return g}function o(){p(),D.triggerEvent("MeshChange",{target:D,mesh:H})}function p(){var a=H.getFaces();for(var b in G){var c=a[b];if(c instanceof h)G[b].src=c.getSource(),G[b].removeAttribute("class");else if(c instanceof i){var d=G[b].parentElement;d.style.background="#"+c.getHex(),G[b].setAttribute("class","colored")}}}function q(){E=s("div","cube"),F=s("div","anim"),r("top"),r("bottom"),r("front"),r("back"),r("left"),r("right"),E.appendChild(F)}function r(a){var b=s("div","face "+a);switch(b.style.width=I+"px",b.style.height=I+"px",b.style.marginLeft=-I/2+"px",b.style.marginTop=-I/2+"px",a){case"top":b.style.transform="rotateX(90deg) translateZ("+I/2+"px)",b.addEventListener("click",w);break;case"bottom":b.style.transform="rotateX(90deg) translateZ(-"+I/2+"px)",b.addEventListener("click",x);break;case"left":b.style.transform="rotateY(90deg) translateZ(-"+I/2+"px)",b.addEventListener("click",y);break;case"right":b.style.transform="rotateY(90deg) translateZ("+I/2+"px)",b.addEventListener("click",z);break;case"front":b.style.transform="translateZ("+I/2+"px)",b.addEventListener("click",A);break;case"back":b.style.transform="translateZ(-"+I/2+"px)",b.addEventListener("click",B);break;default:}b.addEventListener("contextmenu",v);var c=s("img","");G[a]=c;var d=s("div","shader");G[a].shader=d,b.appendChild(c),b.appendChild(d),F.appendChild(b)}function s(a,b){var c=document.createElement(a);return c.setAttribute("class",b),c}function t(){var a=D.getPosition();E.style.transform="translate3d("+a.x+"px, "+-a.y+"px, "+a.z+"px)"}function u(){J.add(D)}function v(a){return a.preventDefault(),D.triggerEvent("VoxelClick",{target:D}),!1}function w(){D.triggerEvent("TopClick",{target:D})}function x(){D.triggerEvent("BottomClick",{target:D})}function y(){D.triggerEvent("LeftClick",{target:D})}function z(){D.triggerEvent("RightClick",{target:D})}function A(){D.triggerEvent("FrontClick",{target:D})}function B(){D.triggerEvent("BackClick",{target:D})}var C=Math.pow,D=this,E=void 0,F=void 0,G={},H=void 0,I=0,J=void 0;Object.assign(D,{setMesh:b,getMesh:function(){return H},animUp:function(a){if(a===void 0)throw"Scene required to add voxel to scene";J=a,F.setAttribute("class","anim up"),u()},animDown:function(a){if(a===void 0)throw"Scene required to add voxel to scene";J=a,F.setAttribute("class","anim down"),u()},addToScene:function(a){if(a===void 0)throw"Scene required to add voxel to scene";J=a,F.setAttribute("class","anim"),u()},removeFromScene:function(){void 0===J||J.remove(D)},setParentScene:function(a){J=a},removeParentScene:function(){J=void 0},setDimension:c,getDimension:function(){return I},getDomElement:function(){return E},updateLightSource:function(b){for(var c,d=Math.max,e=Math.min,f=1,g=1,h=1,l=1,m=1,n=1,o=0;c=b[o++];){var i,p,q,r,s=c.getBrightness(),t=s[1]-s[0],u=1-s[1],v=c.getPositionX(),w=c.getPositionY(),x=c.getPositionZ();0<g&&(i=k(v,w,x,{A:0,B:0,C:-1}),p=i.angle,q=1-p/(a/2),q=j(q),q=e(1,q+C(i.distance/c.getTravelDistance(),6)),r=(0>i.direction?1:q)*t+u,g=d(0,g-(1-r))),0<f&&(i=k(v,w,x,{A:0,B:0,C:1}),p=i.angle,q=1-p/(a/2),q=j(q),q=e(1,q+C(i.distance/c.getTravelDistance(),6)),r=(0>i.direction?1:q)*t+u,f=d(0,f-(1-r))),0<h&&(i=k(v,w,x,{A:-1,B:0,C:0}),p=i.angle,q=1-p/(a/2),q=j(q),q=e(1,q+C(i.distance/c.getTravelDistance(),6)),r=(0>i.direction?1:q)*t+u,h=d(0,h-(1-r))),0<l&&(i=k(v,w,x,{A:1,B:0,C:0}),p=i.angle,q=1-p/(a/2),q=j(q),q=e(1,q+C(i.distance/c.getTravelDistance(),6)),r=(0>i.direction?1:q)*t+u,l=d(0,l-(1-r))),0<m&&(i=k(v,w,x,{A:0,B:1,C:0}),p=i.angle,q=1-p/(a/2),q=j(q),q=e(1,q+C(i.distance/c.getTravelDistance(),6)),r=(0>i.direction?1:q)*t+u,m=d(0,m-(1-r))),0<n&&(i=k(v,w,x,{A:0,B:-1,C:0}),p=i.angle,q=1-p/(a/2),q=j(q),q=e(1,q+C(i.distance/c.getTravelDistance(),6)),r=(0>i.direction?1:q)*t+u,n=d(0,n-(1-r)))}G.front.shader.style.opacity=f,G.back.shader.style.opacity=g,G.left.shader.style.opacity=h,G.right.shader.style.opacity=l,G.top.shader.style.opacity=m,G.bottom.shader.style.opacity=n},clone:function(){return new d(D.getPositionX(),D.getPositionY(),D.getPositionZ(),I,{mesh:H})}}),function(a,d,h,i,j){f(e(D)),D.addEventListener("move",t),c(i),q(),D.setPosition(a,d,h),b(new g),j!==void 0&&j.mesh!==void 0&&b(j.mesh)}.apply(D,arguments)}var e=b("./eventListener"),f=b("./positioned"),g=b("./Mesh"),h=b("./ImageFace"),i=b("./ColorFace");c.exports=d},{"./ColorFace":1,"./ImageFace":3,"./Mesh":5,"./eventListener":10,"./positioned":12}],9:[function(a,b){"use strict";var c=a("./Mesh"),d=a("./Voxel");b.exports=function(){function a(a){return l.push(a),i.add(a)}function b(a){var b=l.indexOf(a);return!(0>b)&&(i.remove(a),l.splice(b,1),!0)}function e(){for(var a,b=[],c=0;a=l[c++];)b.push({position:a.getPosition(),dimension:a.getDimension(),mesh:a.getMesh().serialize()});return JSON.stringify(b)}function f(b){g();for(var e,f,h=JSON.parse(b+""),j=0;e=h[j++];)f=new d(e.position.x,e.position.y,e.position.z,e.dimension),f.setMesh(c.loadFromSerial(e.mesh)),a(f)}function g(){for(;0<l.length;)b(l[0])}function h(){return"savedWorld<"+k+">"}var i,j=this,k="*",l=[];j.add=a,j.remove=b,j.export=e,j.import=f,j.save=function(){localStorage.setItem(h(),e())},j.load=function(){f(localStorage.getItem(h())||"[]")},j.isSaved=function(){return!!localStorage.getItem(h())},j.deleteSave=function(){localStorage.setItem(h(),"")},j.getScene=function(){return i},j.getVoxels=function(){return l.concat([])},function(a,b){if(a===void 0)throw"World cannot be instantiated without a Scene instance";i=a,b!==void 0&&(k=b)}.apply(j,arguments)}},{"./Mesh":5,"./Voxel":8}],10:[function(a,b){"use strict";b.exports=function(a){var b=a||new Function,c={};return b.addEventListener=function(a,b){(a="on"+a,"function"==typeof b)&&(c[a]||(c[a]=[]),-1<c[a].indexOf(b)||c[a].push(b))},b.removeEventListener=function(a,b){a="on"+a,c[a]&&c[a].splice(c[a].indexOf(b),1)},b.triggerEvent=function(a,b){a="on"+a;var d=c[a];if(d)for(var e,f=0;e=d[f++];)e(b)},b}},{}],11:[function(a,b){"use strict";a("./voxelcss.css");var c=a("./ColorFace"),d=a("./Editor"),e=a("./eventListener"),f=a("./ImageFace"),g=a("./LightSource"),h=a("./Mesh"),i=a("./Meshes"),j=a("./positioned"),k=a("./Scene"),l=a("./Voxel"),m=a("./World");b.exports={ColorFace:c,Editor:d,eventListener:e,ImageFace:f,LightSource:g,Mesh:h,Meshes:i,Positioned:j,Scene:k,Voxel:l,World:m}},{"./ColorFace":1,"./Editor":2,"./ImageFace":3,"./LightSource":4,"./Mesh":5,"./Meshes":6,"./Scene":7,"./Voxel":8,"./World":9,"./eventListener":10,"./positioned":12,"./voxelcss.css":13}],12:[function(a,b){"use strict";b.exports=function(a){function b(a){if(void 0===a||"number"!=typeof a)return i.x;var b=i.x;return i.x=a,j&&h.triggerEvent("move"),b}function c(a){if(void 0===a||"number"!=typeof a)return i.y;var b=i.y;return i.y=a,j&&h.triggerEvent("move"),b}function d(a){if(void 0===a||"number"!=typeof a)return i.z;var b=i.z;return i.z=a,j&&h.triggerEvent("move"),b}function e(a){return void 0===a||"number"!=typeof a?i.x:b(a+i.x)}function f(a){return void 0===a||"number"!=typeof a?i.y:c(a+i.y)}function g(a){return void 0===a||"number"!=typeof a?i.z:d(a+i.z)}var h=a||new Function,i={x:0,y:0,z:0},j=!0;return Object.assign(h,{setPosition:function(a,e,f){j=!1;var g={x:b(a),y:c(e),z:d(f)};return j=!0,h.triggerEvent("move"),g},setPositionX:b,setPositionY:c,setPositionZ:d,getPosition:function(){return{x:i.x,y:i.y,z:i.z}},getPositionX:function(){return i.x},getPositionY:function(){return i.y},getPositionZ:function(){return i.z},translate:function(a,b,c){j=!1;var d={x:e(a),y:f(b),z:g(c)};return j=!0,h.triggerEvent("move"),d},translateX:e,translateY:f,translateZ:g}),h}},{}],13:[function(a,b){var c=".scene {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  cursor: move;\n}\n.scene,\n.scene .camera,\n.scene .zoom {\n  position: absolute;\n}\n.scene .camera,\n.scene .zoom {\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  overflow: visible;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.face {\n  display: block;\n  position: absolute;\n  outline: none;\n  border: none;\n  margin-left: -18px;\n  margin-top: -18px;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n}\n.face img {\n  width: 100%;\n  height: 100%;\n}\n.face img.colored {\n  visibility: hidden;\n}\n.cube:hover img {\n  visibility: hidden!important;\n}\n.cube:hover .face {\n  background: rgba(0,0,0,.3)!important;\n}\n.cube:hover .face .shader {\n  opacity: 0!important;\n}\n.face .shader {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n}\n.cube {\n  position: absolute;\n}\n.cube,\n.cube .anim {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.cube .anim.down {\n  -webkit-animation: b 1s linear both;\n  animation: b 1s linear both;\n}\n.cube .anim.up {\n  -webkit-animation: a 1s linear both;\n  animation: a 1s linear both;\n}\n@-webkit-keyframes a {\n  0% {\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n    opacity: 0;\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n    opacity: 1;\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes a {\n  0% {\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n    opacity: 0;\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n    opacity: 1;\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@-webkit-keyframes b {\n  0% {\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n    opacity: 0;\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n    opacity: 1;\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes b {\n  0% {\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n    opacity: 0;\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n    opacity: 1;\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n";a("browserify-css").createStyle(c,{href:"lib/voxelcss.css"},{insertAt:"bottom"}),b.exports=c},{"browserify-css":14}],14:[function(a,b){"use strict";var c=[],d=function(a,b){var d=document.head||document.getElementsByTagName("head")[0],e=c[c.length-1];if(b=b||{},b.insertAt=b.insertAt||"bottom","top"===b.insertAt)e?e.nextSibling?d.insertBefore(a,e.nextSibling):d.appendChild(a):d.insertBefore(a,d.firstChild),c.push(a);else if("bottom"===b.insertAt)d.appendChild(a);else throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")};b.exports={createLink:function createLink(a,b){var c=document.head||document.getElementsByTagName("head")[0],d=document.createElement("link");for(var e in d.href=a,d.rel="stylesheet",b)if(b.hasOwnProperty(e)){var f=b[e];d.setAttribute("data-"+e,f)}c.appendChild(d)},createStyle:function createStyle(a,b,c){c=c||{};var e=document.createElement("style");for(var f in e.type="text/css",b)if(b.hasOwnProperty(f)){var g=b[f];e.setAttribute("data-"+f,g)}e.sheet?(e.innerHTML=a,e.sheet.cssText=a,d(e,{insertAt:c.insertAt})):e.styleSheet?(d(e,{insertAt:c.insertAt}),e.styleSheet.cssText=a):(e.appendChild(document.createTextNode(a)),d(e,{insertAt:c.insertAt}))}}},{}]},{},[11])(11)});
