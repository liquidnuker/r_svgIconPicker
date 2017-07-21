webpackJsonp([6],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
var store = {
  // for default items. not filtered
  allItems: "",

  // for filteredItems
  currentitems: "",

  // for category selector
  currentCategory: "",

  // favorites.vue
  favorites: [{
    category: "category1",
    id: "id1",
    type: "",
    src: "src1",
    svg: "svg1",
    date: "date1",
    notes: "notes1",
    description: "description1"
  }]
};



/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FavoriteCount_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e4252c8c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_FavoriteCount_vue__ = __webpack_require__(29);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FavoriteCount_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e4252c8c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_FavoriteCount_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\FavoriteCount.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FavoriteCount.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e4252c8c", Component.options)
  } else {
    hotAPI.reload("data-v-e4252c8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_store_js__ = __webpack_require__(10);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      favorites: __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].favorites
    };
  },

  watch: {
    favorites: function favorites() {
      // console.log("fc-favorites triggered");
    }
  }
});

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ic_favorites"
  }, [(_vm.favorites.length > 0) ? _c('p', [_c('a', {
    attrs: {
      "href": 'index.html#/favorites'
    }
  }, [_vm._v("favorites:")]), _vm._v(" "), _c('span', {
    staticClass: "ic_favorites_badge"
  }, [_c('p', [_vm._v(_vm._s(_vm.favorites.length))])])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e4252c8c", esExports)
  }
}

/***/ })

});