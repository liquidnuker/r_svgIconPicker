!function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t=window.webpackJsonp;window.webpackJsonp=function(n,r,u){for(var c,i,a=0,s=[];a<n.length;a++)i=n[a],o[i]&&s.push(o[i][0]),o[i]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);for(t&&t(n,r,u);s.length;)s.shift()()};var r={},o={10:0};n.e=function(e){function t(){i.onerror=i.onload=null,clearTimeout(a);var n=o[e];0!==n&&(n&&n[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var u=new Promise(function(n,t){r=o[e]=[n,t]});r[2]=u;var c=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.timeout=12e4,n.nc&&i.setAttribute("nonce",n.nc),i.src=n.p+""+e+".chunk.js";var a=setTimeout(t,12e4);return i.onerror=i.onload=t,c.appendChild(i),u},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="dist/",n.oe=function(e){throw console.error(e),e},n(n.s=2)}([function(e,n){e.exports=function(e,n,t,r){var o,u=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,u=e.default);var i="function"==typeof u?u.options:u;if(n&&(i.render=n.render,i.staticRenderFns=n.staticRenderFns),t&&(i._scopeId=t),r){var a=i.computed||(i.computed={});Object.keys(r).forEach(function(e){var n=r[e];a[e]=function(){return n}})}return{esModule:o,exports:u,options:i}}},function(e,n,t){"use strict";t.d(n,"a",function(){return s});var r=t(4),o=t.n(r);Vue.use(VueRouter);var u=function(e){return t.e(2).then(t.bind(null,7)).then(e)},c=function(e){return t.e(0).then(t.bind(null,8)).then(e)},i=function(e){return t.e(1).then(t.bind(null,9)).then(e)},a=[{path:"/",component:u},{path:"/category/:category",component:c},{path:"/favorites",component:i}],s=new VueRouter({routes:a});new Vue({el:"#app",router:s,render:function(e){return e(o.a)}})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(3);t.n(r),t(1)},function(e,n){},function(e,n,t){var r=t(0)(t(5),t(6),null,null);e.exports=r.exports},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}}}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("router-view",{staticClass:"router-view"})],1)},staticRenderFns:[]}}]);