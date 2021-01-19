module.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=n(10),r=(i=o)&&i.__esModule?i:{default:i};e.default={name:"VueBottomSheet",data:function(){return{opened:null,contentHeight:"auto",mc:null,cardPosition:null,cardHeight:null,moving:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.cardHeight=t.$refs.bottomSheetCard.clientHeight,t.contentHeight=t.cardHeight-t.$refs.pan.clientHeight+"px",t.cardPosition="-"+t.cardHeight+"px",t.mc=new r.default(t.$refs.pan),t.mc.get("pan").set({direction:r.default.DIRECTION_ALL}),t.mc.on("panstart",(function(){t.moving=!0})),t.mc.on("panup pandown",(function(e){var n=t.$refs.backdrop.clientHeight-t.cardHeight-e.center.y;n<0&&(console.log(n),t.cardPosition=n+"px")})),t.mc.on("panend",(function(e){t.moving=!1,t.$refs.backdrop.clientHeight-t.cardHeight-e.center.y<-30&&(t.opened=!1,t.cardPosition="-"+t.cardHeight+"px")}))}))},methods:{open:function(t){this.opened=t,this.cardPosition=t?0:"-"+this.cardHeight+"px"}},beforeDestroy:function(){this.mc.destroy()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=r[0],a=r[1],u=r[2],c=r[3],h={id:t+":"+o,css:a,media:u,sourceMap:c};i[s]?i[s].parts.push(h):n.push(i[s]={id:s,parts:[h]})}return n}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-sheet",class:{"bottom-sheet--opened":t.opened,"bottom-sheet--closed":!1===t.opened,"bottom-sheet--moving":t.moving}},[n("div",{ref:"backdrop",staticClass:"bottom-sheet__backdrop",on:{click:function(e){t.open(!1)}}}),t._v(" "),n("div",{ref:"bottomSheetCard",staticClass:"bottom-sheet__card",style:{bottom:t.cardPosition}},[n("div",{ref:"pan",staticClass:"bottom-sheet__pan"},[n("div",{ref:"bar",staticClass:"bottom-sheet__bar"})]),t._v(" "),n("div",{ref:"bottomSheetCardContent",staticClass:"bottom-sheet__content",style:{height:t.contentHeight},on:{click:function(e){t.open(!1)}}},[t._t("default")],2)])])},o=[];i._withStripped=!0},function(t,e,n){"use strict";function i(t,e,n,i,o,r,s,a){var u=typeof(t=t||{}).default;"object"!==u&&"function"!==u||(t=t.default);var c,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),i&&(h.functional=!0),r&&(h._scopeId=r),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(h.functional){h._injectStyles=c;var l=h.render;h.render=function(t,e){return c.call(e),l(t,e)}}else{var p=h.beforeCreate;h.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:h}}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VueBottomSheet=void 0;var i,o=n(5),r=(i=o)&&i.__esModule?i:{default:i};e.VueBottomSheet=r.default},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s=n(2),a=n(3);var u=function(t){n(6)},c=Object(a.a)(o.a,s.a,s.b,!1,u,"data-v-3b24359e",null);c.options.__file="src\\components\\VueBottomSheet.vue",e.default=c.exports},function(t,e,n){var i=n(7);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(9).default)("055986a9",i,!1,{})},function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"\n.bottom-sheet[data-v-3b24359e]{z-index:99999\n}\n.bottom-sheet__content[data-v-3b24359e]{overflow-y:scroll\n}\n.bottom-sheet__backdrop[data-v-3b24359e]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.3);z-index:9999;opacity:0;visibility:hidden\n}\n.bottom-sheet__card[data-v-3b24359e]{box-sizing:border-box;width:100%;position:fixed;background:white;border-radius:14px 14px 0 0;left:50%;transform:translate(-50%, 0);z-index:9999;max-height:95%;transition:bottom 0.3s ease;max-width:640px;margin:0 auto\n}\n.bottom-sheet__pan[data-v-3b24359e]{padding-bottom:20px;padding-top:15px;height:38px\n}\n.bottom-sheet__bar[data-v-3b24359e]{display:block;width:50%;height:3px;border-radius:14px;margin:0 auto;cursor:pointer;background:rgba(0,0,0,0.3)\n}\n.bottom-sheet--closed .bottom-sheet__backdrop[data-v-3b24359e]{-webkit-animation:hide-data-v-3b24359e 0.3s ease;animation:hide-data-v-3b24359e 0.3s ease\n}\n.bottom-sheet--moving .bottom-sheet__card[data-v-3b24359e]{transition:none\n}\n.bottom-sheet--opened[data-v-3b24359e]{position:fixed;top:0;left:0\n}\n.bottom-sheet--opened .bottom-sheet__backdrop[data-v-3b24359e]{-webkit-animation:show-data-v-3b24359e 0.3s ease;animation:show-data-v-3b24359e 0.3s ease;opacity:1;visibility:visible\n}\n@-webkit-keyframes show-data-v-3b24359e{\n0%{opacity:0;visibility:hidden\n}\n100%{opacity:1;visibility:visible\n}\n}\n@keyframes show-data-v-3b24359e{\n0%{opacity:0;visibility:hidden\n}\n100%{opacity:1;visibility:visible\n}\n}\n@-webkit-keyframes hide-data-v-3b24359e{\n0%{opacity:1;visibility:visible\n}\n100%{opacity:0;visibility:hidden\n}\n}\n@keyframes hide-data-v-3b24359e{\n0%{opacity:1;visibility:visible\n}\n100%{opacity:0;visibility:hidden\n}\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[n].concat(r).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var i=n(1),o=n.n(i),r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=r&&(document.head||document.getElementsByTagName("head")[0]),u=null,c=0,h=!1,l=function(){},p=null,f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,e,n,i){h=n,p=i||{};var r=o()(t,e);return v(r),function(e){for(var n=[],i=0;i<r.length;i++){var a=r[i];(u=s[a.id]).refs--,n.push(u)}e?v(r=o()(t,e)):r=[];for(i=0;i<n.length;i++){var u;if(0===(u=n[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete s[u.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],i=s[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(g(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(o=0;o<n.parts.length;o++)r.push(g(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:r}}}}function m(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(h)return l;i.parentNode.removeChild(i)}if(f){var o=c++;i=u||(u=m()),e=T.bind(null,i,o,!1),n=T.bind(null,i,o,!0)}else i=m(),e=_.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var y,b=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function T(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function _(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),p.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},function(t,e,n){"use strict";var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(r,s,a,u){var c,h=["","webkit","Moz","MS","ms","o"],l=s.createElement("div"),p=Math.round,f=Math.abs,d=Date.now;function v(t,e,n){return setTimeout(E(t,n),e)}function m(t,e,n){return!!Array.isArray(t)&&(g(t,n[e],n),!0)}function g(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(void 0!==t.length)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function y(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=r.console&&(r.console.warn||r.console.log);return o&&o.call(r.console,i,n),t.apply(this,arguments)}}c="function"!=typeof Object.assign?function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var o in i)i.hasOwnProperty(o)&&(e[o]=i[o])}return e}:Object.assign;var b=y((function(t,e,n){for(var i=Object.keys(e),o=0;o<i.length;)(!n||n&&void 0===t[i[o]])&&(t[i[o]]=e[i[o]]),o++;return t}),"extend","Use `assign`."),T=y((function(t,e){return b(t,e,!0)}),"merge","Use `assign`.");function _(t,e,n){var i,o=e.prototype;(i=t.prototype=Object.create(o)).constructor=t,i._super=o,n&&c(i,n)}function E(t,e){return function(){return t.apply(e,arguments)}}function x(t,e){return"function"==(void 0===t?"undefined":o(t))?t.apply(e&&e[0]||void 0,e):t}function C(t,e){return void 0===t?e:t}function S(t,e,n){g(A(e),(function(e){t.addEventListener(e,n,!1)}))}function w(t,e,n){g(A(e),(function(e){t.removeEventListener(e,n,!1)}))}function I(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function P(t,e){return t.indexOf(e)>-1}function A(t){return t.trim().split(/\s+/g)}function O(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function M(t){return Array.prototype.slice.call(t,0)}function R(t,e,n){for(var i=[],o=[],r=0;r<t.length;){var s=e?t[r][e]:t[r];O(o,s)<0&&i.push(t[r]),o[r]=s,r++}return n&&(i=e?i.sort((function(t,n){return t[e]>n[e]})):i.sort()),i}function D(t,e){for(var n,i,o=e[0].toUpperCase()+e.slice(1),r=0;r<h.length;){if((i=(n=h[r])?n+o:e)in t)return i;r++}}var k=1;function N(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}var z="ontouchstart"in r,H=void 0!==D(r,"PointerEvent"),j=z&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),X=["x","y"],Y=["clientX","clientY"];function F(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){x(t.options.enable,[t])&&n.handler(e)},this.init()}function L(t,e,n){var i=n.pointers.length,o=n.changedPointers.length,r=1&e&&i-o==0,s=12&e&&i-o==0;n.isFirst=!!r,n.isFinal=!!s,r&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,o=i.length;n.firstInput||(n.firstInput=U(e));o>1&&!n.firstMultiple?n.firstMultiple=U(e):1===o&&(n.firstMultiple=!1);var r=n.firstInput,s=n.firstMultiple,a=s?s.center:r.center,u=e.center=W(i);e.timeStamp=d(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=B(a,u),e.distance=$(a,u),function(t,e){var n=e.center,i=t.offsetDelta||{},o=t.prevDelta||{},r=t.prevInput||{};1!==e.eventType&&4!==r.eventType||(o=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y});e.deltaX=o.x+(n.x-i.x),e.deltaY=o.y+(n.y-i.y)}(n,e),e.offsetDirection=V(e.deltaX,e.deltaY);var c=q(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=f(c.x)>f(c.y)?c.x:c.y,e.scale=s?(h=s.pointers,l=i,$(l[0],l[1],Y)/$(h[0],h[1],Y)):1,e.rotation=s?function(t,e){return B(e[1],e[0],Y)+B(t[1],t[0],Y)}(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,function(t,e){var n,i,o,r,s=t.lastInterval||e,a=e.timeStamp-s.timeStamp;if(8!=e.eventType&&(a>25||void 0===s.velocity)){var u=e.deltaX-s.deltaX,c=e.deltaY-s.deltaY,h=q(a,u,c);i=h.x,o=h.y,n=f(h.x)>f(h.y)?h.x:h.y,r=V(u,c),t.lastInterval=e}else n=s.velocity,i=s.velocityX,o=s.velocityY,r=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=o,e.direction=r}(n,e);var h,l;var p=t.element;I(e.srcEvent.target,p)&&(p=e.srcEvent.target);e.target=p}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function U(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:p(t.pointers[n].clientX),clientY:p(t.pointers[n].clientY)},n++;return{timeStamp:d(),pointers:e,center:W(e),deltaX:t.deltaX,deltaY:t.deltaY}}function W(t){var e=t.length;if(1===e)return{x:p(t[0].clientX),y:p(t[0].clientY)};for(var n=0,i=0,o=0;o<e;)n+=t[o].clientX,i+=t[o].clientY,o++;return{x:p(n/e),y:p(i/e)}}function q(t,e,n){return{x:e/t||0,y:n/t||0}}function V(t,e){return t===e?1:f(t)>=f(e)?t<0?2:4:e<0?8:16}function $(t,e,n){n||(n=X);var i=e[n[0]]-t[n[0]],o=e[n[1]]-t[n[1]];return Math.sqrt(i*i+o*o)}function B(t,e,n){n||(n=X);var i=e[n[0]]-t[n[0]],o=e[n[1]]-t[n[1]];return 180*Math.atan2(o,i)/Math.PI}F.prototype={handler:function(){},init:function(){this.evEl&&S(this.element,this.evEl,this.domHandler),this.evTarget&&S(this.target,this.evTarget,this.domHandler),this.evWin&&S(N(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&w(this.element,this.evEl,this.domHandler),this.evTarget&&w(this.target,this.evTarget,this.domHandler),this.evWin&&w(N(this.element),this.evWin,this.domHandler)}};var G={mousedown:1,mousemove:2,mouseup:4};function Z(){this.evEl="mousedown",this.evWin="mousemove mouseup",this.pressed=!1,F.apply(this,arguments)}_(Z,F,{handler:function(t){var e=G[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var J={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},K={2:"touch",3:"pen",4:"mouse",5:"kinect"},Q="pointerdown",tt="pointermove pointerup pointercancel";function et(){this.evEl=Q,this.evWin=tt,F.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}r.MSPointerEvent&&!r.PointerEvent&&(Q="MSPointerDown",tt="MSPointerMove MSPointerUp MSPointerCancel"),_(et,F,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),o=J[i],r=K[t.pointerType]||t.pointerType,s="touch"==r,a=O(e,t.pointerId,"pointerId");1&o&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):12&o&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,o,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),n&&e.splice(a,1))}});var nt={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function it(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,F.apply(this,arguments)}function ot(t,e){var n=M(t.touches),i=M(t.changedTouches);return 12&e&&(n=R(n.concat(i),"identifier",!0)),[n,i]}_(it,F,{handler:function(t){var e=nt[t.type];if(1===e&&(this.started=!0),this.started){var n=ot.call(this,t,e);12&e&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var rt={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function st(){this.evTarget="touchstart touchmove touchend touchcancel",this.targetIds={},F.apply(this,arguments)}function at(t,e){var n=M(t.touches),i=this.targetIds;if(3&e&&1===n.length)return i[n[0].identifier]=!0,[n,n];var o,r,s=M(t.changedTouches),a=[],u=this.target;if(r=n.filter((function(t){return I(t.target,u)})),1===e)for(o=0;o<r.length;)i[r[o].identifier]=!0,o++;for(o=0;o<s.length;)i[s[o].identifier]&&a.push(s[o]),12&e&&delete i[s[o].identifier],o++;return a.length?[R(r.concat(a),"identifier",!0),a]:void 0}_(st,F,{handler:function(t){var e=rt[t.type],n=at.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});function ut(){F.apply(this,arguments);var t=E(this.handler,this);this.touch=new st(this.manager,t),this.mouse=new Z(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function ct(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,ht.call(this,e)):12&t&&ht.call(this,e)}function ht(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout((function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)}),2500)}}function lt(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var o=this.lastTouches[i],r=Math.abs(e-o.x),s=Math.abs(n-o.y);if(r<=25&&s<=25)return!0}return!1}_(ut,F,{handler:function(t,e,n){var i="touch"==n.pointerType,o="mouse"==n.pointerType;if(!(o&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)ct.call(this,e,n);else if(o&&lt.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var pt=D(l.style,"touchAction"),ft=void 0!==pt,dt=function(){if(!ft)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){t[n]=!e||r.CSS.supports("touch-action",n)})),t}();function vt(t,e){this.manager=t,this.set(e)}vt.prototype={set:function(t){"compute"==t&&(t=this.compute()),ft&&this.manager.element.style&&dt[t]&&(this.manager.element.style[pt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return g(this.manager.recognizers,(function(e){x(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(P(t,"none"))return"none";var e=P(t,"pan-x"),n=P(t,"pan-y");if(e&&n)return"none";if(e||n)return e?"pan-x":"pan-y";if(P(t,"manipulation"))return"manipulation";return"auto"}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,o=P(i,"none")&&!dt.none,r=P(i,"pan-y")&&!dt["pan-y"],s=P(i,"pan-x")&&!dt["pan-x"];if(o){var a=1===t.pointers.length,u=t.distance<2,c=t.deltaTime<250;if(a&&u&&c)return}if(!s||!r)return o||r&&6&n||s&&24&n?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function mt(t){this.options=c({},this.defaults,t||{}),this.id=k++,this.manager=null,this.options.enable=C(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function gt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function yt(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function bt(t,e){var n=e.manager;return n?n.get(t):t}function Tt(){mt.apply(this,arguments)}function _t(){Tt.apply(this,arguments),this.pX=null,this.pY=null}function Et(){Tt.apply(this,arguments)}function xt(){mt.apply(this,arguments),this._timer=null,this._input=null}function Ct(){Tt.apply(this,arguments)}function St(){Tt.apply(this,arguments)}function wt(){mt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function It(t,e){return(e=e||{}).recognizers=C(e.recognizers,It.defaults.preset),new Pt(t,e)}mt.prototype={defaults:{},set:function(t){return c(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(m(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=bt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return m(t,"dropRecognizeWith",this)||(t=bt(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(m(t,"requireFailure",this))return this;var e=this.requireFail;return-1===O(e,t=bt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(m(t,"dropRequireFailure",this))return this;t=bt(t,this);var e=O(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<8&&i(e.options.event+gt(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=8&&i(e.options.event+gt(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var e=c({},t);if(!x(this.options.enable,[this,e]))return this.reset(),void(this.state=32);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},_(Tt,mt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=6&e,o=this.attrTest(t);return i&&(8&n||!o)?16|e:i||o?4&n?8|e:2&e?4|e:2:32}}),_(_t,Tt,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push("pan-y"),24&t&&e.push("pan-x"),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,o=t.direction,r=t.deltaX,s=t.deltaY;return o&e.direction||(6&e.direction?(o=0===r?1:r<0?2:4,n=r!=this.pX,i=Math.abs(t.deltaX)):(o=0===s?1:s<0?8:16,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=o,n&&i>e.threshold&&o&e.direction},attrTest:function(t){return Tt.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=yt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),_(Et,Tt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),_(xt,mt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!i||!n||12&t.eventType&&!o)this.reset();else if(1&t.eventType)this.reset(),this._timer=v((function(){this.state=8,this.tryEmit()}),e.time,this);else if(4&t.eventType)return 8;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=d(),this.manager.emit(this.options.event,this._input)))}}),_(Ct,Tt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),_(St,Tt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return _t.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return 30&n?e=t.overallVelocity:6&n?e=t.overallVelocityX:24&n&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&f(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=yt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),_(wt,mt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,o=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(i&&o&&n){if(4!=t.eventType)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||$(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,s&&r?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=v((function(){this.state=8,this.tryEmit()}),e.interval,this),2):8}return 32},failTimeout:function(){return this._timer=v((function(){this.state=32}),this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),It.VERSION="2.0.7",It.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[Ct,{enable:!1}],[Et,{enable:!1},["rotate"]],[St,{direction:6}],[_t,{direction:6},["swipe"]],[wt],[wt,{event:"doubletap",taps:2},["tap"]],[xt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function Pt(t,e){var n;this.options=c({},It.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(H?et:j?st:z?ut:Z))(n,L),this.touchAction=new vt(this,this.options.touchAction),At(this,!0),g(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function At(t,e){var n,i=t.element;i.style&&(g(t.options.cssProps,(function(o,r){n=D(i.style,r),e?(t.oldCssProps[n]=i.style[n],i.style[n]=o):i.style[n]=t.oldCssProps[n]||""})),e||(t.oldCssProps={}))}Pt.prototype={set:function(t){return c(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,o=e.curRecognizer;(!o||o&&8&o.state)&&(o=e.curRecognizer=null);for(var r=0;r<i.length;)n=i[r],2===e.stopped||o&&n!=o&&!n.canRecognizeWith(o)?n.reset():n.recognize(t),!o&&14&n.state&&(o=e.curRecognizer=n),r++}},get:function(t){if(t instanceof mt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(m(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(m(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=O(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(void 0!==t&&void 0!==e){var n=this.handlers;return g(A(t),(function(t){n[t]=n[t]||[],n[t].push(e)})),this}},off:function(t,e){if(void 0!==t){var n=this.handlers;return g(A(t),(function(t){e?n[t]&&n[t].splice(O(n[t],e),1):delete n[t]})),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var n=s.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&At(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},c(It,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:Pt,Input:F,TouchAction:vt,TouchInput:st,MouseInput:Z,PointerEventInput:et,TouchMouseInput:ut,SingleTouchInput:it,Recognizer:mt,AttrRecognizer:Tt,Tap:wt,Pan:_t,Swipe:St,Pinch:Et,Rotate:Ct,Press:xt,on:S,off:w,each:g,merge:T,extend:b,assign:c,inherit:_,bindFn:E,prefixed:D}),(void 0!==r?r:"undefined"!=typeof self?self:{}).Hammer=It,void 0===(i=function(){return It}.call(e,n,e,t))||(t.exports=i)}(window,document)}]);