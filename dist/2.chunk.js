webpackJsonp([2],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inject; });
// for injecting components in mounts
var inject = function inject(mount, component) {
  new Vue({
    el: mount,
    render: function render(h) {
      return h(component);
    }
  });
};



/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_componentinjector_js__ = __webpack_require__(15);
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

var vcHeader = function vcHeader() {
  return __webpack_require__.e/* import() */(3/* duplicate */).then(__webpack_require__.bind(null, 11));
};
var vcHomeCatSelector = function vcHomeCatSelector() {
  return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 20));
};
var vcFeaturedIcon = function vcFeaturedIcon() {
  return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 21));
};
var vcHomeCarousel = function vcHomeCarousel() {
  return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 22));
};


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  components: {
    vcHeader: vcHeader,
    vcHomeCatSelector: vcHomeCatSelector,
    vcFeaturedIcon: vcFeaturedIcon,
    vcHomeCarousel: vcHomeCarousel
  },
  mounted: function mounted() {},
  methods: {
    // todo: inject this later
    mountCommitFetcher: function mountCommitFetcher() {
      var vcCommitFetcher = function vcCommitFetcher(resolve) {
        __webpack_require__.e/* require.ensure */(5).then((function () {
          resolve(__webpack_require__(23));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      };
      __WEBPACK_IMPORTED_MODULE_0__js_componentinjector_js__["a" /* inject */]('#vc_commit_fetcher', vcCommitFetcher);
    }
  }
});

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row svgpker"
  }, [_c('div', {
    staticClass: "row container-fluid spreader"
  }, [_c('div', {
    staticClass: "ic_container"
  }, [_c('vcHeader')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row ic_container"
  }, [_c('div', {
    staticClass: "row home_stage"
  }, [_c('section', {
    staticClass: "col-sm-4 home_fi_container"
  }, [_c('vcFeaturedIcon')], 1), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8 home_carousel_container"
  }, [_c('vcHomeCarousel')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row home_news_categories"
  }, [_vm._m(0), _vm._v(" "), _c('section', {
    staticClass: "col-sm-8 home_ic_selector"
  }, [_c('vcHomeCatSelector')], 1)])]), _vm._v(" "), _vm._m(1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "col-sm-4 home_news_container"
  }, [_c('div', {
    attrs: {
      "id": "vc_commit_fetcher"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row container-fluid spreader2"
  }, [_c('div', {
    staticClass: "ic_container"
  }, [_c('footer', {
    staticClass: "col-sm-12 row main_footer"
  }, [_vm._v("\n        mini footer\n      ")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19b7a970", esExports)
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19b7a970_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(41);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19b7a970_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19b7a970", Component.options)
  } else {
    hotAPI.reload("data-v-19b7a970", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});