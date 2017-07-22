webpackJsonp([14],{

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return favoriteExists; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(10);


// check if value exists in object inside array
// returns index
// favoriteExists("nonexistent")); // undefined
var favoriteExists = function favoriteExists(value) {
  for (var key = 0; key < __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].favorites.length; key++) {
    if (__WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].favorites[key].id == value) {
      return key;
    }
  }
};



/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IcListView_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fd2be46_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_IcListView_vue__ = __webpack_require__(65);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IcListView_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fd2be46_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_IcListView_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\IcListView.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] IcListView.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fd2be46", Component.options)
  } else {
    hotAPI.reload("data-v-3fd2be46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_store_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_favoriteexists_js__ = __webpack_require__(44);
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
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prCurrentCategory", "prCurrentItems"],
  components: {},
  mounted: function mounted() {
    console.log(" mounted");
  },
  methods: {
    addFavorite: function addFavorite(id, src, type, svg, desc) {
      // check before pushing
      if (__WEBPACK_IMPORTED_MODULE_1__js_favoriteexists_js__["a" /* favoriteExists */](id) !== undefined) {
        console.log("already in favorites");
      } else {
        var x = Date().toString();
        __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].favorites.push({
          category: this.currentCategory,
          id: id,
          type: type,
          src: src,
          svg: svg,
          description: desc,
          date: x,
          notes: ""
        });
      }
    }
  }
});

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.prCurrentItems), function(i, index) {
    return _c('div', {
      key: i.id
    }, [_c('div', {
      staticClass: "col-sm-12 row ic_listview"
    }, [_c('p', {
      staticClass: "ic_list_id"
    }, [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [_vm._v(_vm._s(i.id))])]), _vm._v(" "), _c('div', {
      staticClass: "col-sm-2"
    }, [_c('div', {
      staticClass: "ic_list_iconbox"
    }, [_c('img', {
      attrs: {
        "src": 'img/icons/' + _vm.prCurrentCategory + '/' + i.src,
        "alt": i.id
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "col-sm-5 ic_listview_details"
    }, [_c('p', [_vm._v(_vm._s(i.description))]), _vm._v(" "), _c('button', {
      staticClass: "ic_btn",
      on: {
        "click": function($event) {
          _vm.addFavorite(i.id, i.src, i.type, i.svg)
        }
      }
    }, [_vm._v("Add to favorites")]), _vm._v(" "), _c('button', {
      staticClass: "ic_btn",
      on: {
        "click": function($event) {}
      }
    }, [_vm._v("More info")])]), _vm._v(" "), _c('div', {
      staticClass: "col-sm-5 ic_listview_svg"
    }, [_c('textarea', {
      staticClass: "col-xs-12"
    }, [_vm._v(_vm._s(i.svg))]), _vm._v(" "), _c('button', {
      staticClass: "ic_btn"
    }, [_vm._v("Copy svg")])])])])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3fd2be46", esExports)
  }
}

/***/ })

});