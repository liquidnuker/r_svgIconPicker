webpackJsonp([4],{10:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n={allItems:"",currentitems:"",currentCategory:"",favorites:[{category:"category1",id:"id1",type:"shape1",src:"src1",svg:"svg1",date:"date1",notes:"notes1"}]}},18:function(e,t,r){var n=r(2)(r(28),r(37),null,null);e.exports=n.exports},28:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10);t.default={data:function(){return{favorites:n.a.favorites}},watch:{favorites:function(){console.log("fc-favorites triggered")}},mounted:function(){console.log("FavoriteCount.vue mounted")}}},37:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[e.favorites.length>0?r("p",[r("a",{attrs:{href:"index.html#/favorites"}},[e._v("favorites:")]),e._v(" "),r("span",{staticClass:"ic_favorites_badge"},[e._v(e._s(e.favorites.length))])]):e._e()])])},staticRenderFns:[]}}});