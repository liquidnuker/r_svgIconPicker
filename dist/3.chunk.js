webpackJsonp([3],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a2801b6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__ = __webpack_require__(30);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a2801b6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a2801b6", Component.options)
  } else {
    hotAPI.reload("data-v-3a2801b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Vue from "vue";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  mounted: function mounted() {
    this.mountFavorites();
  },
  methods: {
    mountFavorites: function mountFavorites() {
      var vcFavoriteCount = function vcFavoriteCount(resolve) {
        __webpack_require__.e/* require.ensure */(6).then((function () {
          resolve(__webpack_require__(19));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      };
      new Vue({
        el: '#vc-fc-mount',
        render: function render(h) {
          return h(vcFavoriteCount);
        }
      });
    }
  }
});

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "row main_header"
  }, [_c('div', {
    staticClass: "col-sm-4 header_logo_container"
  }, [_vm._v("logo")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    attrs: {
      "id": "vc-fc-mount"
    }
  })])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a2801b6", esExports)
  }
}

/***/ })

});