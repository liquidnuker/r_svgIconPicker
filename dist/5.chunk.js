webpackJsonp([5],{10:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n={allItems:"",currentitems:"",currentCategory:"",favorites:[{category:"category1",id:"id1",type:"",src:"src1",svg:"svg1",date:"date1",notes:"notes1",description:"description1"}]}},20:function(t,e,r){var n=r(2)(r(32),r(43),null,null);t.exports=n.exports},32:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(10);e.default={data:function(){return{favorites:n.a.favorites}},watch:{favorites:function(){console.log("fc-favorites triggered")}},mounted:function(){console.log("FavoriteCount.vue mounted")}}},43:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[t.favorites.length>0?r("p",[r("a",{attrs:{href:"index.html#/favorites"}},[t._v("favorites:")]),t._v(" "),r("span",{staticClass:"ic_favorites_badge"},[t._v(t._s(t.favorites.length))])]):t._e()])])},staticRenderFns:[]}}});