webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IconCategories_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b36b4c4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_IconCategories_vue__ = __webpack_require__(51);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_IconCategories_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b36b4c4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_IconCategories_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\IconCategories.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] IconCategories.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b36b4c4", Component.options)
  } else {
    hotAPI.reload("data-v-9b36b4c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 9 */,
/* 10 */
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
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseJSON; });
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iconCategories; });
var iconCategories = ["directional", "ui", "unsorted"];



/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_jPages_min_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_jPages_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_jPages_min_js__);


var pager = {
  activate: function activate() {
    $(".jpages_pg").jPages({
      containerID: "jpages_pg-holder",
      first: "first",
      previous: "previous",
      next: "next",
      last: "last",
      links: "numeric", // blank || title
      delay: 0, // to remove fade
      fallback: 0, // to remove fade
      startPage: 1,
      perPage: 18,
      midRange: 5
    });
  },
  reActivate: function reActivate(timeout) {
    setTimeout(function () {
      pager.activate();
    }, timeout);
  },
  destroy: function destroy() {
    if ($(".jpages_pg").jPages()) {
      $(".jpages_pg").jPages("destroy");
    } else {
      return;
    }
  }
};



/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * jQuery jPages v0.7
 * Client side pagination with jQuery
 * http://luis-almeida.github.com/jPages
 *
 * Licensed under the MIT license.
 * Copyright 2012 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function ($, window, document, undefined) {
  var name = "jPages",
      instance = null,
      defaults = { containerID: "", first: false, previous: "← previous", next: "next →", last: false, links: "numeric", startPage: 1, perPage: 10, midRange: 5, startRange: 1, endRange: 1, keyBrowse: false, scrollBrowse: false, pause: 0, clickStop: false, delay: 50, direction: "forward", animation: "", fallback: 400, minHeight: true, callback: undefined };function Plugin(element, options) {
    this.options = $.extend({}, defaults, options);this._container = $("#" + this.options.containerID);if (!this._container.length) return;this.jQwindow = $(window);this.jQdocument = $(document);this._holder = $(element);this._nav = {};this._first = $(this.options.first);this._previous = $(this.options.previous);this._next = $(this.options.next);this._last = $(this.options.last);this._items = this._container.children(":visible");this._itemsShowing = $([]);this._itemsHiding = $([]);this._numPages = Math.ceil(this._items.length / this.options.perPage);this._currentPageNum = this.options.startPage;this._clicked = false;this._cssAnimSupport = this.getCSSAnimationSupport();this.init();
  }Plugin.prototype = { constructor: Plugin, getCSSAnimationSupport: function getCSSAnimationSupport() {
      var animation = false,
          animationstring = 'animation',
          keyframeprefix = '',
          domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
          pfx = '',
          elm = this._container.get(0);if (elm.style.animationName) animation = true;if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];animationstring = pfx + 'Animation';keyframeprefix = '-' + pfx.toLowerCase() + '-';animation = true;break;
          }
        }
      }return animation;
    }, init: function init() {
      this.setStyles();this.setNav();this.paginate(this._currentPageNum);this.setMinHeight();
    }, setStyles: function setStyles() {
      var requiredStyles = "<style>" + ".jp-invisible { visibility: hidden !important; } " + ".jp-hidden { display: none !important; }" + "</style>";$(requiredStyles).appendTo("head");if (this._cssAnimSupport && this.options.animation.length) this._items.addClass("animated jp-hidden");else this._items.hide();
    }, setNav: function setNav() {
      var navhtml = this.writeNav();this._holder.each(this.bind(function (index, element) {
        var holder = $(element);holder.html(navhtml);this.cacheNavElements(holder, index);this.bindNavHandlers(index);this.disableNavSelection(element);
      }, this));if (this.options.keyBrowse) this.bindNavKeyBrowse();if (this.options.scrollBrowse) this.bindNavScrollBrowse();
    }, writeNav: function writeNav() {
      var i = 1,
          navhtml;navhtml = this.writeBtn("first") + this.writeBtn("previous");for (; i <= this._numPages; i++) {
        if (i === 1 && this.options.startRange === 0) navhtml += "<span>...</span>";if (i > this.options.startRange && i <= this._numPages - this.options.endRange) navhtml += "<a href='#' class='jp-hidden'>";else navhtml += "<a>";switch (this.options.links) {case "numeric":
            navhtml += i;break;case "blank":
            break;case "title":
            var title = this._items.eq(i - 1).attr("data-title");navhtml += title !== undefined ? title : "";break;}navhtml += "</a>";if (i === this.options.startRange || i === this._numPages - this.options.endRange) navhtml += "<span>...</span>";
      }navhtml += this.writeBtn("next") + this.writeBtn("last") + "</div>";return navhtml;
    }, writeBtn: function writeBtn(which) {
      return this.options[which] !== false && !$(this["_" + which]).length ? "<a class='jp-" + which + "'>" + this.options[which] + "</a>" : "";
    }, cacheNavElements: function cacheNavElements(holder, index) {
      this._nav[index] = {};this._nav[index].holder = holder;this._nav[index].first = this._first.length ? this._first : this._nav[index].holder.find("a.jp-first");this._nav[index].previous = this._previous.length ? this._previous : this._nav[index].holder.find("a.jp-previous");this._nav[index].next = this._next.length ? this._next : this._nav[index].holder.find("a.jp-next");this._nav[index].last = this._last.length ? this._last : this._nav[index].holder.find("a.jp-last");this._nav[index].fstBreak = this._nav[index].holder.find("span:first");this._nav[index].lstBreak = this._nav[index].holder.find("span:last");this._nav[index].pages = this._nav[index].holder.find("a").not(".jp-first, .jp-previous, .jp-next, .jp-last");this._nav[index].permPages = this._nav[index].pages.slice(0, this.options.startRange).add(this._nav[index].pages.slice(this._numPages - this.options.endRange, this._numPages));this._nav[index].pagesShowing = $([]);this._nav[index].currentPage = $([]);
    }, bindNavHandlers: function bindNavHandlers(index) {
      var nav = this._nav[index];nav.holder.bind("click.jPages", this.bind(function (evt) {
        var newPage = this.getNewPage(nav, $(evt.target));if (this.validNewPage(newPage)) {
          this._clicked = true;this.paginate(newPage);
        }evt.preventDefault();
      }, this));if (this._first.length) {
        this._first.bind("click.jPages", this.bind(function () {
          if (this.validNewPage(1)) {
            this._clicked = true;this.paginate(1);
          }
        }, this));
      }if (this._previous.length) {
        this._previous.bind("click.jPages", this.bind(function () {
          var newPage = this._currentPageNum - 1;if (this.validNewPage(newPage)) {
            this._clicked = true;this.paginate(newPage);
          }
        }, this));
      }if (this._next.length) {
        this._next.bind("click.jPages", this.bind(function () {
          var newPage = this._currentPageNum + 1;if (this.validNewPage(newPage)) {
            this._clicked = true;this.paginate(newPage);
          }
        }, this));
      }if (this._last.length) {
        this._last.bind("click.jPages", this.bind(function () {
          if (this.validNewPage(this._numPages)) {
            this._clicked = true;this.paginate(this._numPages);
          }
        }, this));
      }
    }, disableNavSelection: function disableNavSelection(element) {
      if (typeof element.onselectstart != "undefined") element.onselectstart = function () {
        return false;
      };else if (typeof element.style.MozUserSelect != "undefined") element.style.MozUserSelect = "none";else element.onmousedown = function () {
        return false;
      };
    }, bindNavKeyBrowse: function bindNavKeyBrowse() {
      this.jQdocument.bind("keydown.jPages", this.bind(function (evt) {
        var target = evt.target.nodeName.toLowerCase();if (this.elemScrolledIntoView() && target !== "input" && target != "textarea") {
          var newPage = this._currentPageNum;if (evt.which == 37) newPage = this._currentPageNum - 1;if (evt.which == 39) newPage = this._currentPageNum + 1;if (this.validNewPage(newPage)) {
            this._clicked = true;this.paginate(newPage);
          }
        }
      }, this));
    }, elemScrolledIntoView: function elemScrolledIntoView() {
      var docViewTop, docViewBottom, elemTop, elemBottom;docViewTop = this.jQwindow.scrollTop();docViewBottom = docViewTop + this.jQwindow.height();elemTop = this._container.offset().top;elemBottom = elemTop + this._container.height();return elemBottom >= docViewTop && elemTop <= docViewBottom;
    }, bindNavScrollBrowse: function bindNavScrollBrowse() {
      this._container.bind("mousewheel.jPages DOMMouseScroll.jPages", this.bind(function (evt) {
        var newPage = (evt.originalEvent.wheelDelta || -evt.originalEvent.detail) > 0 ? this._currentPageNum - 1 : this._currentPageNum + 1;if (this.validNewPage(newPage)) {
          this._clicked = true;this.paginate(newPage);
        }evt.preventDefault();return false;
      }, this));
    }, getNewPage: function getNewPage(nav, target) {
      if (target.is(nav.currentPage)) return this._currentPageNum;if (target.is(nav.pages)) return nav.pages.index(target) + 1;if (target.is(nav.first)) return 1;if (target.is(nav.last)) return this._numPages;if (target.is(nav.previous)) return nav.pages.index(nav.currentPage);if (target.is(nav.next)) return nav.pages.index(nav.currentPage) + 2;
    }, validNewPage: function validNewPage(newPage) {
      return newPage !== this._currentPageNum && newPage > 0 && newPage <= this._numPages;
    }, paginate: function paginate(page) {
      var itemRange, pageInterval;itemRange = this.updateItems(page);pageInterval = this.updatePages(page);this._currentPageNum = page;if ($.isFunction(this.options.callback)) this.callback(page, itemRange, pageInterval);this.updatePause();
    }, updateItems: function updateItems(page) {
      var range = this.getItemRange(page);this._itemsHiding = this._itemsShowing;this._itemsShowing = this._items.slice(range.start, range.end);if (this._cssAnimSupport && this.options.animation.length) this.cssAnimations(page);else this.jQAnimations(page);return range;
    }, getItemRange: function getItemRange(page) {
      var range = {};range.start = (page - 1) * this.options.perPage;range.end = range.start + this.options.perPage;if (range.end > this._items.length) range.end = this._items.length;return range;
    }, cssAnimations: function cssAnimations(page) {
      clearInterval(this._delay);this._itemsHiding.removeClass(this.options.animation + " jp-invisible").addClass("jp-hidden");this._itemsShowing.removeClass("jp-hidden").addClass("jp-invisible");this._itemsOriented = this.getDirectedItems(page);this._index = 0;this._delay = setInterval(this.bind(function () {
        if (this._index === this._itemsOriented.length) clearInterval(this._delay);else {
          this._itemsOriented.eq(this._index).removeClass("jp-invisible").addClass(this.options.animation);
        }this._index = this._index + 1;
      }, this), this.options.delay);
    }, jQAnimations: function jQAnimations(page) {
      clearInterval(this._delay);this._itemsHiding.addClass("jp-hidden");this._itemsShowing.fadeTo(0, 0).removeClass("jp-hidden");this._itemsOriented = this.getDirectedItems(page);this._index = 0;this._delay = setInterval(this.bind(function () {
        if (this._index === this._itemsOriented.length) clearInterval(this._delay);else {
          this._itemsOriented.eq(this._index).fadeTo(this.options.fallback, 1);
        }this._index = this._index + 1;
      }, this), this.options.delay);
    }, getDirectedItems: function getDirectedItems(page) {
      var itemsToShow;switch (this.options.direction) {case "backwards":
          itemsToShow = $(this._itemsShowing.get().reverse());break;case "random":
          itemsToShow = $(this._itemsShowing.get().sort(function () {
            return Math.round(Math.random()) - 0.5;
          }));break;case "auto":
          itemsToShow = page >= this._currentPageNum ? this._itemsShowing : $(this._itemsShowing.get().reverse());break;default:
          itemsToShow = this._itemsShowing;}return itemsToShow;
    }, updatePages: function updatePages(page) {
      var interval, index, nav;interval = this.getInterval(page);for (index in this._nav) {
        if (this._nav.hasOwnProperty(index)) {
          nav = this._nav[index];this.updateBtns(nav, page);this.updateCurrentPage(nav, page);this.updatePagesShowing(nav, interval);this.updateBreaks(nav, interval);
        }
      }return interval;
    }, getInterval: function getInterval(page) {
      var neHalf, upperLimit, start, end;neHalf = Math.ceil(this.options.midRange / 2);upperLimit = this._numPages - this.options.midRange;start = page > neHalf ? Math.max(Math.min(page - neHalf, upperLimit), 0) : 0;end = page > neHalf ? Math.min(page + neHalf - (this.options.midRange % 2 > 0 ? 1 : 0), this._numPages) : Math.min(this.options.midRange, this._numPages);return { start: start, end: end };
    }, updateBtns: function updateBtns(nav, page) {
      if (page === 1) {
        nav.first.addClass("jp-disabled");nav.previous.addClass("jp-disabled");
      }if (page === this._numPages) {
        nav.next.addClass("jp-disabled");nav.last.addClass("jp-disabled");
      }if (this._currentPageNum === 1 && page > 1) {
        nav.first.removeClass("jp-disabled");nav.previous.removeClass("jp-disabled");
      }if (this._currentPageNum === this._numPages && page < this._numPages) {
        nav.next.removeClass("jp-disabled");nav.last.removeClass("jp-disabled");
      }
    }, updateCurrentPage: function updateCurrentPage(nav, page) {
      nav.currentPage.removeClass("jp-current");nav.currentPage = nav.pages.eq(page - 1).addClass("jp-current");
    }, updatePagesShowing: function updatePagesShowing(nav, interval) {
      var newRange = nav.pages.slice(interval.start, interval.end).not(nav.permPages);nav.pagesShowing.not(newRange).addClass("jp-hidden");newRange.not(nav.pagesShowing).removeClass("jp-hidden");nav.pagesShowing = newRange;
    }, updateBreaks: function updateBreaks(nav, interval) {
      if (interval.start > this.options.startRange || this.options.startRange === 0 && interval.start > 0) nav.fstBreak.removeClass("jp-hidden");else nav.fstBreak.addClass("jp-hidden");if (interval.end < this._numPages - this.options.endRange) nav.lstBreak.removeClass("jp-hidden");else nav.lstBreak.addClass("jp-hidden");
    }, callback: function callback(page, itemRange, pageInterval) {
      var pages = { current: page, interval: pageInterval, count: this._numPages },
          items = { showing: this._itemsShowing, oncoming: this._items.slice(itemRange.start + this.options.perPage, itemRange.end + this.options.perPage), range: itemRange, count: this._items.length };pages.interval.start = pages.interval.start + 1;items.range.start = items.range.start + 1;this.options.callback(pages, items);
    }, updatePause: function updatePause() {
      if (this.options.pause && this._numPages > 1) {
        clearTimeout(this._pause);if (this.options.clickStop && this._clicked) return;else {
          this._pause = setTimeout(this.bind(function () {
            this.paginate(this._currentPageNum !== this._numPages ? this._currentPageNum + 1 : 1);
          }, this), this.options.pause);
        }
      }
    }, setMinHeight: function setMinHeight() {
      if (this.options.minHeight && !this._container.is("table, tbody")) {
        setTimeout(this.bind(function () {
          this._container.css({ "min-height": this._container.css("height") });
        }, this), 1000);
      }
    }, bind: function bind(fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, destroy: function destroy() {
      this.jQdocument.unbind("keydown.jPages");this._container.unbind("mousewheel.jPages DOMMouseScroll.jPages");if (this.options.minHeight) this._container.css("min-height", "");if (this._cssAnimSupport && this.options.animation.length) this._items.removeClass("animated jp-hidden jp-invisible " + this.options.animation);else this._items.removeClass("jp-hidden").fadeTo(0, 1);this._holder.unbind("click.jPages").empty();
    } };$.fn[name] = function (arg) {
    var type = $.type(arg);if (type === "object") {
      if (this.length && !$.data(this, name)) {
        instance = new Plugin(this, arg);this.each(function () {
          $.data(this, name, instance);
        });
      }return this;
    }if (type === "string" && arg === "destroy") {
      instance.destroy();this.each(function () {
        $.removeData(this, name);
      });return this;
    }if (type === 'number' && arg % 1 === 0) {
      if (instance.validNewPage(arg)) instance.paginate(arg);return this;
    }return this;
  };
})(jQuery, window, document);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(47);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18).setImmediate, __webpack_require__(18).clearImmediate))

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_componentinjector_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_fetchutils_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_store_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_iconcategories_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_itemexists_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_favoriteexists_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_removeparamcolons_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_paginator_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_vendor_horsey_min_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_vendor_horsey_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__js_vendor_horsey_min_js__);
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
//
//
//
//

// import Vue from "vue";










/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      currentCategory: "",

      // for displaying items
      currentItems: "",

      hoveritem: "",
      snippet: "",

      // filter buttons
      fcVisible: false,

      gridView: true,

      favorites: __WEBPACK_IMPORTED_MODULE_3__js_store_js__["a" /* store */].favorites
    };
  },

  mounted: function mounted() {
    this.checkCategory();
    this.mountHeader();
  },
  watch: {
    $route: function $route() {
      __WEBPACK_IMPORTED_MODULE_8__js_paginator_js__["a" /* pager */].destroy();
      this.checkCategory();
    }
  },
  methods: {
    mountHeader: function mountHeader() {
      var vcHeader = function vcHeader(resolve) {
        __webpack_require__.e/* require.ensure */(3/* duplicate */).then((function () {
          resolve(__webpack_require__(11));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      };
      __WEBPACK_IMPORTED_MODULE_1__js_componentinjector_js__["a" /* inject */]('#vc-header-mount', vcHeader);
    },
    mountCatSelector: function mountCatSelector() {
      var vcCatSelector = function vcCatSelector(resolve) {
        __webpack_require__.e/* require.ensure */(9).then((function () {
          resolve(__webpack_require__(25));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      };
      __WEBPACK_IMPORTED_MODULE_1__js_componentinjector_js__["a" /* inject */]('#cat-selector-mount', vcCatSelector);
    },
    refreshItems: function refreshItems() {
      this.favorites = __WEBPACK_IMPORTED_MODULE_3__js_store_js__["a" /* store */].favorites;
      this.currentItems = __WEBPACK_IMPORTED_MODULE_3__js_store_js__["a" /* store */].currentItems;
    },
    showIconInfo: function showIconInfo(item) {
      this.hoveritem = item;
    },
    selectitem: function selectitem(item) {
      this.snippet = item;
    },
    checkCategory: function checkCategory() {
      // check if category exists before loading json
      var categoryToCheck = __WEBPACK_IMPORTED_MODULE_7__js_removeparamcolons_js__["a" /* removeParamColons */](this.$route.params.category);
      if (!__WEBPACK_IMPORTED_MODULE_5__js_itemexists_js__["a" /* itemExists */](categoryToCheck, __WEBPACK_IMPORTED_MODULE_4__js_iconcategories_js__["a" /* iconCategories */])) {
        console.log("404");
      } else {
        this.currentCategory = categoryToCheck;
        this.loadItems();
      }
    },
    loadItems: function loadItems() {
      var jsonUrl = "./src/js/ajax/" + this.currentCategory + ".json";
      var self = this;

      fetch(jsonUrl).then(__WEBPACK_IMPORTED_MODULE_2__js_fetchutils_js__["a" /* checkStatus */]).then(__WEBPACK_IMPORTED_MODULE_2__js_fetchutils_js__["b" /* parseJSON */]).then(function (data) {
        // insert to allitems/default items.
        __WEBPACK_IMPORTED_MODULE_3__js_store_js__["a" /* store */].allItems = data[self.currentCategory];

        // insert to currentItems
        __WEBPACK_IMPORTED_MODULE_3__js_store_js__["a" /* store */].currentItems = data[self.currentCategory];

        // for category selector
        __WEBPACK_IMPORTED_MODULE_3__js_store_js__["a" /* store */].currentCategory = self.currentCategory;
      }).then(function () {
        // set currentItems to allitems/default
        self.currentItems = __WEBPACK_IMPORTED_MODULE_3__js_store_js__["a" /* store */].currentItems;
      }).then(function () {
        self.refreshItems();
        // item type filter
        self.fcVisible = true;
        self.mountCatSelector();
        self.activateSearch();
        __WEBPACK_IMPORTED_MODULE_8__js_paginator_js__["a" /* pager */].activate();
      }).catch(function (error) {
        console.log('request failed', error);
      });
    },
    filterItems: function filterItems(typeToFilter) {
      if (typeToFilter === "all") {
        __WEBPACK_IMPORTED_MODULE_8__js_paginator_js__["a" /* pager */].destroy();

        this.currentItems = __WEBPACK_IMPORTED_MODULE_3__js_store_js__["a" /* store */].allItems;
        __WEBPACK_IMPORTED_MODULE_8__js_paginator_js__["a" /* pager */].reActivate(4);
      } else {
        __WEBPACK_IMPORTED_MODULE_8__js_paginator_js__["a" /* pager */].destroy();

        var filteredType = "";
        filteredType = __WEBPACK_IMPORTED_MODULE_3__js_store_js__["a" /* store */].allItems.filter(function (el) {
          return el.type === typeToFilter;
        });

        __WEBPACK_IMPORTED_MODULE_3__js_store_js__["a" /* store */].currentItems = filteredType;

        this.refreshItems();
        __WEBPACK_IMPORTED_MODULE_8__js_paginator_js__["a" /* pager */].reActivate(4);
      }
    },
    activateSearch: function activateSearch() {
      __WEBPACK_IMPORTED_MODULE_9__js_vendor_horsey_min_js___default.a(document.querySelector('#hy'), {
        source: [{
          list: this.currentItems
        }],
        getText: 'id',
        limit: 6
        // getValue: 'value'
      });

      // events of horsey instance
      document.getElementById("hy").addEventListener('horsey-show', function () {
        // console.log('h-show')
      });
    },
    toggleGrid: function toggleGrid() {
      __WEBPACK_IMPORTED_MODULE_8__js_paginator_js__["a" /* pager */].destroy();
      this.gridView = !this.gridView;
      __WEBPACK_IMPORTED_MODULE_8__js_paginator_js__["a" /* pager */].reActivate(4);
    },
    addFavorite: function addFavorite(id, src, type, svg, desc) {

      // check before pushing
      if (__WEBPACK_IMPORTED_MODULE_6__js_favoriteexists_js__["a" /* favoriteExists */](id) !== undefined) {
        console.log("already in favorites");
      } else {
        var x = Date().toString();
        __WEBPACK_IMPORTED_MODULE_3__js_store_js__["a" /* store */].favorites.push({
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return itemExists; });
// for single arrays
var itemExists = function itemExists(item, array) {
  return array.indexOf(item) > -1;
};



/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeParamColons; });
var removeParamColons = function removeParamColons(routeParam) {
  var replacer = routeParam.replace(/:/g, '');
  return replacer;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.horsey = e();
  }
}(function () {
  return function e(t, n, r) {
    function o(a, u) {
      if (!n[a]) {
        if (!t[a]) {
          var c = "function" == typeof require && require;if (!u && c) return require(a, !0);if (i) return i(a, !0);var f = new Error("Cannot find module '" + a + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[a] = { exports: {} };t[a][0].call(l.exports, function (e) {
          var n = t[a][1][e];return o(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[a].exports;
    }for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) {
      o(r[a]);
    }return o;
  }({ 1: [function (e, t) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { "default": e };
      }function r(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) {
            n[t] = e[t];
          }return n;
        }return Array.from(e);
      }function o(e) {
        function t(e) {
          return r.noMatches ? e.query.length : !1;
        }function n(t, n) {
          function o(t, r) {
            t && (console.log("Autocomplete source error.", t, e), n(t, []));var o = Array.isArray(r) ? r : [];b && (l[u] = { created: new Date(), items: o }), S = o, n(null, o.slice());
          }var i = t.query,
              a = t.limit;if (!r.blankSearch && 0 === i.length) return void n(null, [], !0);O && O.emit("beforeUpdate");var u = d["default"](i);if (b) {
            var c = l[u];if (c) {
              var f = c.created.getTime(),
                  s = l.duration || 86400,
                  v = 1e3 * s,
                  g = new Date(f + v) > new Date();if (g) return void n(null, c.items.slice());
            }
          }var y = { previousSuggestions: S.slice(), previousSelection: E, input: i, renderItem: h, renderCategory: p, limit: a };"function" == typeof r.source ? r.source(y, o) : o(null, r.source);
        }var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
            o = r.setAppends,
            a = r.set,
            u = r.filter,
            c = r.source,
            f = r.cache,
            l = void 0 === f ? {} : f,
            s = r.predictNextSearch,
            h = r.renderItem,
            p = r.renderCategory,
            v = r.blankSearch,
            g = r.appendTo,
            y = r.anchor,
            m = r.debounce,
            b = r.cache !== !1;if (c) {
          var w = r.getText,
              x = r.getValue,
              C = "string" == typeof w ? function (e) {
            return e[w];
          } : "function" == typeof w ? w : function (e) {
            return e.toString();
          },
              T = "string" == typeof x ? function (e) {
            return e[x];
          } : "function" == typeof x ? x : function (e) {
            return e;
          },
              S = [],
              E = null,
              N = Number(r.limit) || 1 / 0,
              O = i(e, { source: n, limit: N, getText: C, getValue: T, setAppends: o, predictNextSearch: s, renderItem: h, renderCategory: p, appendTo: g, anchor: y, noMatches: t, noMatchesText: r.noMatches, blankSearch: v, debounce: m, set: function set(t) {
              o !== !0 && (e.value = ""), E = t, (a || O.defaultSetter)(C(t), t), O.emit("afterSet");
            }, filter: u });return O;
        }
      }function i(e) {
        function t(e) {
          tt(!0), qt = Jt.attachment = e, zt = "INPUT" === qt.tagName || "TEXTAREA" === qt.tagName, Ft = zt || l(qt), tt();
        }function n() {
          Bt && Bt.refresh();
        }function o(e) {
          function t(t, n, o) {
            Dt.counter === r && (i(n, e), (t || o) && (Gt = !1));
          }if ("function" == typeof bt) {
            C["default"].remove(qt, "focus", o);var n = d();if (n !== Dt.query) {
              Gt = !1, Dt.query = n;var r = ++Dt.counter;bt({ query: n, limit: Lt }, t);
            }
          }
        }function i(e, t) {
          s(), Gt = !0, Jt.source = [], e.forEach(function (e) {
            return e.list.forEach(function (t) {
              return v(t, e);
            });
          }), t && U(), Y();
        }function s() {
          for (W(); Mt.lastChild;) {
            Mt.removeChild(Mt.lastChild);
          }Ut = Object.create(null), Gt = !1;
        }function d() {
          return (zt ? e.value : e.innerHTML).trim();
        }function h(e) {
          function t() {
            var t = u("div", "sey-category"),
                n = u("ul", "sey-list");return At(t, e), t.appendChild(n), Mt.appendChild(t), { data: e, ul: n };
          }return e.id || (e.id = "default"), Ut[e.id] || (Ut[e.id] = t()), Ut[e.id];
        }function v(t, n) {
          function r() {
            q(f);
          }function o() {
            var n = gt(t);T(t), F(), qt.focus(), $t = pt.predictNextSearch && pt.predictNextSearch({ input: n, source: Jt.source.slice(), selection: t }) || "", $t && (e.value = $t, e.select(), U(), Y());
          }function i() {
            var e = d();E(e, t) ? f.className = f.className.replace(/ sey-hide/g, "") : C["default"].fabricate(f, "horsey-hide");
          }function a() {
            D(f) || (f.className += " sey-hide", Pt === f && W());
          }var c = h(n),
              f = u("li", "sey-item");return Ot(f, t), Tt && y(f), C["default"].add(f, "mouseenter", r), C["default"].add(f, "click", o), C["default"].add(f, "horsey-filter", i), C["default"].add(f, "horsey-hide", a), c.ul.appendChild(f), Jt.source.push(t), f;
        }function y(e) {
          x(e).forEach(function (e) {
            function t(e) {
              var t = j.createElement("span");return t.className = "sey-char", t.textContent = t.innerText = e, t;
            }var n = e.parentElement,
                r = e.textContent || e.nodeValue || "";if (0 !== r.length) {
              var o = !0,
                  i = !1,
                  a = void 0;try {
                for (var u, c = r[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
                  var f = u.value;n.insertBefore(t(f), e);
                }
              } catch (l) {
                i = !0, a = l;
              } finally {
                try {
                  !o && c["return"] && c["return"]();
                } finally {
                  if (i) throw a;
                }
              }n.removeChild(e);
            }
          });
        }function b(e, t) {
          function n() {
            d = s.map(function (e) {
              return e.innerText || e.textContent;
            });
          }function o() {
            var e = !0,
                r = !1,
                o = void 0;try {
              for (var i, a = l[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                var c = i.value,
                    f = h;e: for (; -1 !== f;) {
                  var p = !0,
                      v = f,
                      g = !0,
                      y = !1,
                      m = void 0;try {
                    for (var b, w = c[Symbol.iterator](); !(g = (b = w.next()).done); g = !0) {
                      var x = b.value,
                          C = d.indexOf(x, v + 1),
                          T = -1 === C || !p && v + 1 !== C;if (p && (p = !1, f = C), T) continue e;v = C;
                    }
                  } catch (S) {
                    y = !0, m = S;
                  } finally {
                    try {
                      !g && w["return"] && w["return"]();
                    } finally {
                      if (y) throw m;
                    }
                  }var E = !0,
                      N = !1,
                      O = void 0;try {
                    for (var R, A = s.splice(f, 1 + v - f)[Symbol.iterator](); !(E = (R = A.next()).done); E = !0) {
                      var k = R.value;u(k);
                    }
                  } catch (S) {
                    N = !0, O = S;
                  } finally {
                    try {
                      !E && A["return"] && A["return"]();
                    } finally {
                      if (N) throw O;
                    }
                  }n(), t = t.replace(c, "");break;
                }
              }
            } catch (S) {
              r = !0, o = S;
            } finally {
              try {
                !e && a["return"] && a["return"]();
              } finally {
                if (r) throw o;
              }
            }
          }function i() {
            var e = !0,
                n = !1,
                r = void 0;try {
              for (var o, i = t[Symbol.iterator](); !(e = (o = i.next()).done); e = !0) {
                for (var a = o.value; s.length;) {
                  var f = s.shift();if ((f.innerText || f.textContent) === a) {
                    u(f);break;
                  }c(f);
                }
              }
            } catch (l) {
              n = !0, r = l;
            } finally {
              try {
                !e && i["return"] && i["return"]();
              } finally {
                if (n) throw r;
              }
            }
          }function a() {
            for (; s.length;) {
              c(s.shift());
            }
          }function u(e) {
            e.classList.add("sey-char-highlight");
          }function c(e) {
            e.classList.remove("sey-char-highlight");
          }var f = /[\s,._\[\]{}()-]/g,
              l = t.split(f).filter(function (e) {
            return e.length;
          }),
              s = [].concat(r(e.querySelectorAll(".sey-char"))),
              d = void 0,
              h = 0;n(), Et && o(), i(), a();
        }function x(e) {
          for (var t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1), r = void 0; r = n.nextNode();) {
            t.push(r);
          }return t;
        }function T(e) {
          return pt.anchor ? (I() ? Jt.appendText : Jt.appendHTML)(yt(e)) : void jt(e);
        }function E(e, t) {
          if (pt.anchor) {
            var n = (I() ? Jt.filterAnchoredText : Jt.filterAnchoredHTML)(e, t);return n ? _t(n.input, n.suggestion) : !1;
          }return _t(e, t);
        }function I() {
          return a(qt);
        }function H() {
          return -1 !== It.className.indexOf("sey-show");
        }function D(e) {
          return -1 !== e.className.indexOf("sey-hide");
        }function U() {
          Bt.refresh(), H() || (It.className += " sey-show", C["default"].fabricate(qt, "horsey-show"));
        }function P(e) {
          var t = 1 === e.which && !e.metaKey && !e.ctrlKey;t !== !1 && B();
        }function B() {
          H() ? F() : U();
        }function q(e) {
          W(), e && (Pt = e, Pt.className += " sey-selected");
        }function W() {
          Pt && (Pt.className = Pt.className.replace(/ sey-selected/g, ""), Pt = null);
        }function z(e, t) {
          function n(e) {
            for (; e;) {
              if (g["default"].matchesSelector(e.parentElement, ".sey-category")) return e.parentElement;e = e.parentElement;
            }return null;
          }function r() {
            if (Pt) {
              if (Pt[u]) return Pt[u];if (i[u] && dt(i[u])[a]) return dt(i[u])[a];
            }return dt(Mt[a])[a];
          }var o = Jt.source.length;if (0 !== o) {
            if (t > o) return void W();var i = n(Pt) || Mt.firstChild,
                a = e ? "lastChild" : "firstChild",
                u = e ? "previousSibling" : "nextSibling",
                c = r();q(c), D(c) && z(e, t ? t + 1 : 1);
          }
        }function F() {
          Bt.sleep(), It.className = It.className.replace(/ sey-show/g, ""), W(), C["default"].fabricate(qt, "horsey-hide"), e.value === $t && (e.value = "");
        }function X(e) {
          var t = H(),
              n = e.which || e.keyCode;n === L ? (Ft && pt.autoShowOnUpDown && U(), t && (z(), V(e))) : n === k ? (Ft && pt.autoShowOnUpDown && U(), t && (z(!0), V(e))) : n === O ? Ft && pt.autoShowOnUpDown && U() : t && (n === R ? (Pt ? C["default"].fabricate(Pt, "click") : F(), V(e)) : n === A && (F(), V(e)));
        }function V(e) {
          e.stopPropagation(), e.preventDefault();
        }function $() {
          Wt && Wt.classList.remove("sey-hide");
        }function K() {
          Wt && Wt.classList.add("sey-hide");
        }function Y() {
          function e() {
            for (var e = Mt.firstChild, n = 0; e;) {
              var r = dt(e),
                  o = t(r);0 === o ? e.classList.add("sey-hide") : e.classList.remove("sey-hide"), n += o, e = e.nextSibling;
            }return n;
          }function t(e) {
            for (var t = e.firstChild, r = 0; t;) {
              r >= Lt ? C["default"].fabricate(t, "horsey-hide") : (C["default"].fabricate(t, "horsey-filter"), -1 === t.className.indexOf("sey-hide") && (r++, Tt && b(t, n))), t = t.nextSibling;
            }return r;
          }if (H()) {
            Yt(!0), C["default"].fabricate(qt, "horsey-filter");var n = d();if (!pt.blankSearch && !n) return void F();var r = wt({ query: n }),
                o = e();0 === o && r && Gt ? $() : K(), Pt || z(), Pt || r || F();
          }
        }function G(e) {
          var t = e.which || e.keyCode;t !== R && Ht();
        }function J(e) {
          var t = e.which || e.keyCode;t !== R && t !== _ && setTimeout(U, 0);
        }function Q(e) {
          var t = e.target;if (t === qt) return !0;for (; t;) {
            if (t === It || t === qt) return !0;t = t.parentNode;
          }
        }function Z(e) {
          var t = e.which || e.keyCode;t === _ && F();
        }function et(e) {
          Q(e) || F();
        }function tt(e) {
          var t = e ? "remove" : "add";Bt && (Bt.destroy(), Bt = null), e || (Bt = w["default"](It, qt, { caret: Ft && "INPUT" !== qt.tagName, context: pt.appendTo }), H() || Bt.sleep()), e || Ft && j.activeElement !== qt ? C["default"][t](qt, "focus", o) : o(), Ft ? (C["default"][t](qt, "keypress", J), C["default"][t](qt, "keypress", Ht), C["default"][t](qt, "keydown", G), C["default"][t](qt, "paste", Ht), C["default"][t](qt, "keydown", X), pt.autoHideOnBlur && C["default"][t](qt, "keydown", Z)) : (C["default"][t](qt, "click", P), C["default"][t](M, "keydown", X)), pt.autoHideOnClick && C["default"][t](j, "click", et), mt && C["default"][t](mt, "submit", F);
        }function nt() {
          tt(!0), vt.contains(It) && vt.removeChild(It);
        }function rt(t) {
          zt ? kt === !0 ? e.value += " " + t : e.value = t : kt === !0 ? e.innerHTML += " " + t : e.innerHTML = t;
        }function ot(e, t) {
          f(e, gt(t));
        }function it(e, t) {
          if ("default" !== t.id) {
            var n = u("div", "sey-category-id");e.appendChild(n), f(n, t.id);
          }
        }function at(e, t) {
          var n = e.toLowerCase(),
              r = gt(t) || "";if (S["default"](n, r.toLowerCase())) return !0;var o = yt(t) || "";return "string" != typeof o ? !1 : S["default"](n, o.toLowerCase());
        }function ut(e, t) {
          for (var n = "", r = !1, o = t.start; r === !1 && o >= 0;) {
            n = e.substr(o - 1, t.start - o + 1), r = Xt.test(n), o--;
          }return { text: r ? n : null, start: o };
        }function ct(t, n) {
          var r = p["default"](e),
              o = ut(t, r).text;return o ? { input: o, suggestion: n } : void 0;
        }function ft(t) {
          var n = e.value,
              r = p["default"](e),
              o = ut(n, r),
              i = n.substr(0, o.start),
              a = n.substr(o.start + o.text.length + (r.end - r.start)),
              u = i + t + " ";e.value = u + a, p["default"](e, { start: u.length, end: u.length });
        }function lt() {
          throw new Error("Anchoring in editable elements is disabled by default.");
        }function st() {
          throw new Error("Anchoring in editable elements is disabled by default.");
        }function dt(e) {
          return g["default"](".sey-list", e)[0];
        }var ht = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
            pt = ht,
            vt = pt.appendTo || j.body,
            gt = pt.getText,
            yt = pt.getValue,
            mt = pt.form,
            bt = pt.source,
            wt = pt.noMatches,
            xt = pt.noMatchesText,
            Ct = pt.highlighter,
            Tt = void 0 === Ct ? !0 : Ct,
            St = pt.highlightCompleteWords,
            Et = void 0 === St ? !0 : St,
            Nt = pt.renderItem,
            Ot = void 0 === Nt ? ot : Nt,
            Rt = pt.renderCategory,
            At = void 0 === Rt ? it : Rt,
            kt = pt.setAppends,
            Lt = "number" == typeof pt.limit ? pt.limit : 1 / 0,
            _t = pt.filter || at,
            jt = pt.set || rt,
            Mt = u("div", "sey-categories"),
            It = u("div", "sey-container"),
            Ht = c(Y),
            Dt = { counter: 0, query: null },
            Ut = Object.create(null),
            Pt = null,
            Bt = void 0,
            qt = e,
            Wt = void 0,
            zt = void 0,
            Ft = void 0,
            Xt = void 0,
            Vt = void 0,
            $t = "",
            Kt = pt.debounce || 300,
            Yt = N["default"](o, Kt);void 0 === pt.autoHideOnBlur && (pt.autoHideOnBlur = !0), void 0 === pt.autoHideOnClick && (pt.autoHideOnClick = !0), void 0 === pt.autoShowOnUpDown && (pt.autoShowOnUpDown = "INPUT" === e.tagName), pt.anchor && (Xt = new RegExp("^" + pt.anchor), Vt = new RegExp(pt.anchor + "$"));var Gt = !1,
            Jt = m["default"]({ anchor: pt.anchor, clear: s, show: U, hide: F, toggle: B, destroy: nt, refreshPosition: n, appendText: ft, appendHTML: st, filterAnchoredText: ct, filterAnchoredHTML: lt, defaultAppendText: ft, defaultFilter: at, defaultItemRenderer: ot, defaultCategoryRenderer: it, defaultSetter: rt, retarget: t, attachment: qt, source: [] });return t(e), It.appendChild(Mt), wt && xt && (Wt = u("div", "sey-empty sey-hide"), f(Wt, xt), It.appendChild(Wt)), vt.appendChild(It), e.setAttribute("autocomplete", "off"), Array.isArray(bt) && i(bt, !1), Jt;
      }function a(e) {
        return "INPUT" === e.tagName || "TEXTAREA" === e.tagName;
      }function u(e, t) {
        var n = j.createElement(e);return n.className = t, n;
      }function c(e) {
        return function () {
          setTimeout(e, 0);
        };
      }function f(e, t) {
        e.innerText = e.textContent = t;
      }function l(e) {
        var t = e.getAttribute("contentEditable");return "false" === t ? !1 : "true" === t ? !0 : e.parentElement ? l(e.parentElement) : !1;
      }var s = e("hash-sum"),
          d = n(s),
          h = e("sell"),
          p = n(h),
          v = e("sektor"),
          g = n(v),
          y = e("contra/emitter"),
          m = n(y),
          b = e("bullseye"),
          w = n(b),
          x = e("crossvent"),
          C = n(x),
          T = e("fuzzysearch"),
          S = n(T),
          E = e("lodash/debounce"),
          N = n(E),
          O = 8,
          R = 13,
          A = 27,
          k = 38,
          L = 40,
          _ = 9,
          j = document,
          M = j.documentElement;t.exports = o;
    }, { bullseye: 3, "contra/emitter": 7, crossvent: 8, fuzzysearch: 11, "hash-sum": 12, "lodash/debounce": 13, sektor: 20, sell: 29 }], 2: [function (e, t) {
      t.exports = function (e, t) {
        return Array.prototype.slice.call(e, t);
      };
    }, {}], 3: [function (e, t) {
      "use strict";
      function n(e, t, n) {
        function a() {
          g.sleeping = !0;
        }function u() {
          return c();
        }function c(e) {
          var n = t.getBoundingClientRect(),
              r = document.body.scrollTop || document.documentElement.scrollTop;return y ? (e = y.read(), { x: (e.absolute ? 0 : n.left) + e.x, y: (e.absolute ? 0 : n.top) + r + e.y + 20 }) : { x: n.left, y: n.top + r };
        }function f(e) {
          l(e);
        }function l(n) {
          if (p) throw new Error("Bullseye can't refresh after being destroyed. Create another instance instead.");if (y && !n) return g.sleeping = !1, void y.refresh();var r = c(n);y || t === e || (r.y += t.offsetHeight);var o = d.context;e.style.left = r.x + "px", e.style.top = (o ? o.offsetHeight : r.y) + "px";
        }function s() {
          y && y.destroy(), r.remove(window, "resize", v), p = !0;
        }var d = n,
            h = t && t.tagName;h || 2 !== arguments.length || (d = t), h || (t = e), d || (d = {});var p = !1,
            v = o(l, 30),
            g = { update: d.autoupdateToCaret !== !1 && f },
            y = d.caret && i(t, g);return l(), d.tracking !== !1 && r.add(window, "resize", v), { read: u, refresh: l, destroy: s, sleep: a };
      }var r = e("crossvent"),
          o = e("./throttle"),
          i = e("./tailormade");t.exports = n;
    }, { "./tailormade": 4, "./throttle": 5, crossvent: 8 }], 4: [function (e, t) {
      (function (n) {
        "use strict";
        function r(e, t) {
          function n() {}function r() {
            return (x ? h : p)();
          }function a() {
            return T.sleeping ? void 0 : (T.update || n)(r());
          }function h() {
            var t = o(e),
                n = y(),
                r = v(n, t.start);return s.body.removeChild(n.mirror), r;
          }function p() {
            var e = c();if (e.rangeCount) {
              var t = e.getRangeAt(0),
                  n = "P" === t.startContainer.nodeName && 0 === t.startOffset;if (n) return { x: t.startContainer.offsetLeft, y: t.startContainer.offsetTop, absolute: !0 };if (t.getClientRects) {
                var r = t.getClientRects();if (r.length > 0) return { x: r[0].left, y: r[0].top, absolute: !0 };
              }
            }return { x: 0, y: 0 };
          }function v(t, n) {
            var r = s.createElement("span"),
                o = t.mirror,
                i = t.computed;return m(o, g(e).substring(0, n)), "INPUT" === e.tagName && (o.textContent = o.textContent.replace(/\s/g, " ")), m(r, g(e).substring(n) || "."), o.appendChild(r), { x: r.offsetLeft + parseInt(i.borderLeftWidth), y: r.offsetTop + parseInt(i.borderTopWidth) };
          }function g(e) {
            return x ? e.value : e.innerHTML;
          }function y() {
            function t(e) {
              o[e] = n[e];
            }var n = l.getComputedStyle ? getComputedStyle(e) : e.currentStyle,
                r = s.createElement("div"),
                o = r.style;return s.body.appendChild(r), "INPUT" !== e.tagName && (o.wordWrap = "break-word"), o.whiteSpace = "pre-wrap", o.position = "absolute", o.visibility = "hidden", f.forEach(t), d ? (o.width = parseInt(n.width) - 2 + "px", e.scrollHeight > parseInt(n.height) && (o.overflowY = "scroll")) : o.overflow = "hidden", { mirror: r, computed: n };
          }function m(e, t) {
            x ? e.textContent = t : e.innerHTML = t;
          }function b(t) {
            var n = t ? "remove" : "add";i[n](e, "keydown", C), i[n](e, "keyup", C), i[n](e, "input", C), i[n](e, "paste", C), i[n](e, "change", C);
          }function w() {
            b(!0);
          }var x = "INPUT" === e.tagName || "TEXTAREA" === e.tagName,
              C = u(a, 30),
              T = t || {};return b(), { read: r, refresh: C, destroy: w };
        }var o = e("sell"),
            i = e("crossvent"),
            a = e("seleccion"),
            u = e("./throttle"),
            c = a.get,
            f = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing"],
            l = n,
            s = document,
            d = null !== l.mozInnerScreenX && void 0 !== l.mozInnerScreenX;t.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { "./throttle": 5, crossvent: 8, seleccion: 27, sell: 29 }], 5: [function (e, t) {
      "use strict";
      function n(e, t) {
        var n,
            r = -1 / 0;return function () {
          function o() {
            clearTimeout(n), n = null;var i = r + t,
                a = Date.now();a > i ? (r = a, e()) : n = setTimeout(o, i - a);
          }n || o();
        };
      }t.exports = n;
    }, {}], 6: [function (e, t) {
      "use strict";
      var n = e("ticky");t.exports = function (e, t, r) {
        e && n(function () {
          e.apply(r || null, t || []);
        });
      };
    }, { ticky: 30 }], 7: [function (e, t) {
      "use strict";
      var n = e("atoa"),
          r = e("./debounce");t.exports = function (e, t) {
        var o = t || {},
            i = {};return void 0 === e && (e = {}), e.on = function (t, n) {
          return i[t] ? i[t].push(n) : i[t] = [n], e;
        }, e.once = function (t, n) {
          return n._once = !0, e.on(t, n), e;
        }, e.off = function (t, n) {
          var r = arguments.length;if (1 === r) delete i[t];else if (0 === r) i = {};else {
            var o = i[t];if (!o) return e;o.splice(o.indexOf(n), 1);
          }return e;
        }, e.emit = function () {
          var t = n(arguments);return e.emitterSnapshot(t.shift()).apply(this, t);
        }, e.emitterSnapshot = function (t) {
          var a = (i[t] || []).slice(0);return function () {
            var i = n(arguments),
                u = this || e;if ("error" === t && o["throws"] !== !1 && !a.length) throw 1 === i.length ? i[0] : i;return a.forEach(function (n) {
              o.async ? r(n, i, u) : n.apply(u, i), n._once && e.off(t, n);
            }), e;
          };
        }, e;
      };
    }, { "./debounce": 6, atoa: 2 }], 8: [function (e, t) {
      (function (n) {
        "use strict";
        function r(e, t, n, r) {
          return e.addEventListener(t, n, r);
        }function o(e, t, n) {
          return e.attachEvent("on" + t, f(e, t, n));
        }function i(e, t, n, r) {
          return e.removeEventListener(t, n, r);
        }function a(e, t, n) {
          var r = l(e, t, n);return r ? e.detachEvent("on" + t, r) : void 0;
        }function u(e, t, n) {
          function r() {
            var e;return p.createEvent ? (e = p.createEvent("Event"), e.initEvent(t, !0, !0)) : p.createEventObject && (e = p.createEventObject()), e;
          }function o() {
            return new d(t, { detail: n });
          }var i = -1 === h.indexOf(t) ? o() : r();e.dispatchEvent ? e.dispatchEvent(i) : e.fireEvent("on" + t, i);
        }function c(e, t, r) {
          return function (t) {
            var o = t || n.event;o.target = o.target || o.srcElement, o.preventDefault = o.preventDefault || function () {
              o.returnValue = !1;
            }, o.stopPropagation = o.stopPropagation || function () {
              o.cancelBubble = !0;
            }, o.which = o.which || o.keyCode, r.call(e, o);
          };
        }function f(e, t, n) {
          var r = l(e, t, n) || c(e, t, n);return y.push({ wrapper: r, element: e, type: t, fn: n }), r;
        }function l(e, t, n) {
          var r = s(e, t, n);if (r) {
            var o = y[r].wrapper;return y.splice(r, 1), o;
          }
        }function s(e, t, n) {
          var r, o;for (r = 0; r < y.length; r++) {
            if (o = y[r], o.element === e && o.type === t && o.fn === n) return r;
          }
        }var d = e("custom-event"),
            h = e("./eventmap"),
            p = n.document,
            v = r,
            g = i,
            y = [];n.addEventListener || (v = o, g = a), t.exports = { add: v, remove: g, fabricate: u };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { "./eventmap": 9, "custom-event": 10 }], 9: [function (e, t) {
      (function (e) {
        "use strict";
        var n = [],
            r = "",
            o = /^on/;for (r in e) {
          o.test(r) && n.push(r.slice(2));
        }t.exports = n;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}], 10: [function (e, t) {
      (function (e) {
        function n() {
          try {
            var e = new r("cat", { detail: { foo: "bar" } });return "cat" === e.type && "bar" === e.detail.foo;
          } catch (t) {}return !1;
        }var r = e.CustomEvent;t.exports = n() ? r : "function" == typeof document.createEvent ? function (e, t) {
          var n = document.createEvent("CustomEvent");return t ? n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail) : n.initCustomEvent(e, !1, !1, void 0), n;
        } : function (e, t) {
          var n = document.createEventObject();return n.type = e, t ? (n.bubbles = Boolean(t.bubbles), n.cancelable = Boolean(t.cancelable), n.detail = t.detail) : (n.bubbles = !1, n.cancelable = !1, n.detail = void 0), n;
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}], 11: [function (e, t) {
      "use strict";
      function n(e, t) {
        var n = t.length,
            r = e.length;if (r > n) return !1;if (r === n) return e === t;e: for (var o = 0, i = 0; r > o; o++) {
          for (var a = e.charCodeAt(o); n > i;) {
            if (t.charCodeAt(i++) === a) continue e;
          }return !1;
        }return !0;
      }t.exports = n;
    }, {}], 12: [function (e, t) {
      "use strict";
      function n(e, t) {
        for (; e.length < t;) {
          e = "0" + e;
        }return e;
      }function r(e, t) {
        var n, r, o;if (0 === t.length) return e;for (n = 0, o = t.length; o > n; n++) {
          r = t.charCodeAt(n), e = (e << 5) - e + r, e |= 0;
        }return 0 > e ? -2 * e : e;
      }function o(e, t, n) {
        function r(e, r) {
          return i(e, t[r], r, n);
        }return Object.keys(t).sort().reduce(r, e);
      }function i(e, t, n, i) {
        var u = r(r(r(e, n), a(t)), typeof t === "undefined" ? "undefined" : _typeof(t));return null === t ? r(u, "null") : void 0 === t ? r(u, "undefined") : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? -1 !== i.indexOf(t) ? r(u, "[Circular]" + n) : (i.push(t), o(u, t, i)) : r(u, t.toString());
      }function a(e) {
        return Object.prototype.toString.call(e);
      }function u(e) {
        return n(i(0, e, "", []).toString(16), 8);
      }t.exports = u;
    }, {}], 13: [function (e, t) {
      function n(e, t, n) {
        function f(t) {
          var n = m,
              r = b;return m = b = void 0, S = t, x = e.apply(r, n);
        }function l(e) {
          return S = e, C = setTimeout(h, t), E ? f(e) : x;
        }function s(e) {
          var n = e - T,
              r = e - S,
              o = t - n;return N ? c(o, w - r) : o;
        }function d(e) {
          var n = e - T,
              r = e - S;return void 0 === T || n >= t || 0 > n || N && r >= w;
        }function h() {
          var e = o();return d(e) ? p(e) : void (C = setTimeout(h, s(e)));
        }function p(e) {
          return C = void 0, O && m ? f(e) : (m = b = void 0, x);
        }function v() {
          S = 0, m = T = b = C = void 0;
        }function g() {
          return void 0 === C ? x : p(o());
        }function y() {
          var e = o(),
              n = d(e);if (m = arguments, b = this, T = e, n) {
            if (void 0 === C) return l(T);if (N) return C = setTimeout(h, t), f(T);
          }return void 0 === C && (C = setTimeout(h, t)), x;
        }var m,
            b,
            w,
            x,
            C,
            T,
            S = 0,
            E = !1,
            N = !1,
            O = !0;if ("function" != typeof e) throw new TypeError(a);return t = i(t) || 0, r(n) && (E = !!n.leading, N = "maxWait" in n, w = N ? u(i(n.maxWait) || 0, t) : w, O = "trailing" in n ? !!n.trailing : O), y.cancel = v, y.flush = g, y;
      }var r = e("./isObject"),
          o = e("./now"),
          i = e("./toNumber"),
          a = "Expected a function",
          u = Math.max,
          c = Math.min;t.exports = n;
    }, { "./isObject": 15, "./now": 18, "./toNumber": 19 }], 14: [function (e, t) {
      function n(e) {
        var t = r(e) ? u.call(e) : "";return t == o || t == i;
      }var r = e("./isObject"),
          o = "[object Function]",
          i = "[object GeneratorFunction]",
          a = Object.prototype,
          u = a.toString;t.exports = n;
    }, { "./isObject": 15 }], 15: [function (e, t) {
      function n(e) {
        var t = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == t || "function" == t);
      }t.exports = n;
    }, {}], 16: [function (e, t) {
      function n(e) {
        return !!e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
      }t.exports = n;
    }, {}], 17: [function (e, t) {
      function n(e) {
        return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || r(e) && a.call(e) == o;
      }var r = e("./isObjectLike"),
          o = "[object Symbol]",
          i = Object.prototype,
          a = i.toString;t.exports = n;
    }, { "./isObjectLike": 16 }], 18: [function (e, t) {
      function n() {
        return Date.now();
      }t.exports = n;
    }, {}], 19: [function (e, t) {
      function n(e) {
        if ("number" == typeof e) return e;if (i(e)) return a;if (o(e)) {
          var t = r(e.valueOf) ? e.valueOf() : e;e = o(t) ? t + "" : t;
        }if ("string" != typeof e) return 0 === e ? e : +e;e = e.replace(u, "");var n = f.test(e);return n || l.test(e) ? s(e.slice(2), n ? 2 : 8) : c.test(e) ? a : +e;
      }var r = e("./isFunction"),
          o = e("./isObject"),
          i = e("./isSymbol"),
          a = 0 / 0,
          u = /^\s+|\s+$/g,
          c = /^[-+]0x[0-9a-f]+$/i,
          f = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          s = parseInt;t.exports = n;
    }, { "./isFunction": 14, "./isObject": 15, "./isSymbol": 17 }], 20: [function (e, t) {
      (function (e) {
        "use strict";
        function n(e, t) {
          var n,
              r,
              o,
              i,
              a,
              l = t !== f;l && (n = t.getAttribute("id"), r = n || u, o = "#" + r + " ", i = o + e.replace(/,/g, "," + o), a = c.test(e) && t.parentNode, n || t.setAttribute("id", r));try {
            return (a || t).querySelectorAll(i || e);
          } catch (s) {
            return [];
          } finally {
            null === n && t.removeAttribute("id");
          }
        }function r(e, t, r, o) {
          var a,
              u = t || f,
              c = r || [],
              l = 0;if ("string" != typeof e) return c;if (1 !== u.nodeType && 9 !== u.nodeType) return [];if (o) for (; a = o[l++];) {
            i(a, e) && c.push(a);
          } else c.push.apply(c, n(e, u));return c;
        }function o(e, t) {
          return r(e, null, null, t);
        }function i(e, t) {
          return s.call(e, t);
        }function a() {
          return !1;
        }var u = "sektor-" + Date.now(),
            c = /[+~]/,
            f = e.document,
            l = f.documentElement || {},
            s = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector || l.msMatchesSelector || a;t.exports = r, r.matches = o, r.matchesSelector = i;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}], 21: [function (e, t) {
      (function (n) {
        "use strict";
        var r,
            o = n.document,
            i = e("./getSelectionRaw"),
            a = e("./getSelectionNullOp"),
            u = e("./getSelectionSynthetic"),
            c = e("./isHost");r = c.method(n, "getSelection") ? i : "object" == _typeof(o.selection) && o.selection ? u : a, t.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { "./getSelectionNullOp": 22, "./getSelectionRaw": 23, "./getSelectionSynthetic": 24, "./isHost": 25 }], 22: [function (e, t) {
      "use strict";
      function n() {}function r() {
        return { removeAllRanges: n, addRange: n };
      }t.exports = r;
    }, {}], 23: [function (e, t) {
      (function (e) {
        "use strict";
        function n() {
          return e.getSelection();
        }t.exports = n;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}], 24: [function (e, t) {
      (function (n) {
        "use strict";
        function r(e) {
          var t = this,
              n = e.createRange();this._selection = e, this._ranges = [], "Control" === e.type ? d(t) : l(n) ? s(t, n) : u(t);
        }function o(e, t) {
          for (var n, r = b.createControlRange(), o = 0, i = t.length; i > o; ++o) {
            n = f(t[o]);try {
              r.add(n);
            } catch (a) {
              throw new Error("setRanges(): Element could not be added to control selection");
            }
          }r.select(), d(e);
        }function i(e, t) {
          var n = e.getAllRanges();e.removeAllRanges();for (var r = 0, o = n.length; o > r; ++r) {
            p(t, n[r]) || e.addRange(n[r]);
          }e.rangeCount || u(e);
        }function a(e, t) {
          var n = "start",
              r = "end";e.anchorNode = t[n + "Container"], e.anchorOffset = t[n + "Offset"], e.focusNode = t[r + "Container"], e.focusOffset = t[r + "Offset"];
        }function u(e) {
          e.anchorNode = e.focusNode = null, e.anchorOffset = e.focusOffset = 0, e.rangeCount = 0, e.isCollapsed = !0, e._ranges.length = 0;
        }function c(e) {
          if (!e.length || 1 !== e[0].nodeType) return !1;for (var t = 1, n = e.length; n > t; ++t) {
            if (!v(e[0], e[t])) return !1;
          }return !0;
        }function f(e) {
          var t = e.getNodes();if (!c(t)) throw new Error("getSingleElementFromRange(): range did not consist of a single element");return t[0];
        }function l(e) {
          return e && void 0 !== e.text;
        }function s(e, t) {
          e._ranges = [t], a(e, t, !1), e.rangeCount = 1, e.isCollapsed = t.collapsed;
        }function d(e) {
          if (e._ranges.length = 0, "None" === e._selection.type) u(e);else {
            var t = e._selection.createRange();if (l(t)) s(e, t);else {
              e.rangeCount = t.length;for (var n, r = 0; r < e.rangeCount; ++r) {
                n = m.createRange(), n.selectNode(t.item(r)), e._ranges.push(n);
              }e.isCollapsed = 1 === e.rangeCount && e._ranges[0].collapsed, a(e, e._ranges[e.rangeCount - 1], !1);
            }
          }
        }function h(e, t) {
          for (var n = e._selection.createRange(), r = f(t), o = b.createControlRange(), i = 0, a = n.length; a > i; ++i) {
            o.add(n.item(i));
          }try {
            o.add(r);
          } catch (u) {
            throw new Error("addRange(): Element could not be added to control selection");
          }o.select(), d(e);
        }function p(e, t) {
          return e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset;
        }function v(e, t) {
          for (var n = t; n.parentNode;) {
            if (n.parentNode === e) return !0;n = n.parentNode;
          }return !1;
        }function g() {
          return new r(n.document.selection);
        }var y = e("./rangeToTextRange"),
            m = n.document,
            b = m.body,
            w = r.prototype;w.removeAllRanges = function () {
          var e;try {
            this._selection.empty(), "None" !== this._selection.type && (e = b.createTextRange(), e.select(), this._selection.empty());
          } catch (t) {}u(this);
        }, w.addRange = function (e) {
          "Control" === this._selection.type ? h(this, e) : (y(e).select(), this._ranges[0] = e, this.rangeCount = 1, this.isCollapsed = this._ranges[0].collapsed, a(this, e, !1));
        }, w.setRanges = function (e) {
          this.removeAllRanges();var t = e.length;t > 1 ? o(this, e) : t && this.addRange(e[0]);
        }, w.getRangeAt = function (e) {
          if (0 > e || e >= this.rangeCount) throw new Error("getRangeAt(): index out of bounds");return this._ranges[e].cloneRange();
        }, w.removeRange = function (e) {
          if ("Control" !== this._selection.type) return void i(this, e);for (var t, n = this._selection.createRange(), r = f(e), o = b.createControlRange(), a = !1, u = 0, c = n.length; c > u; ++u) {
            t = n.item(u), t !== r || a ? o.add(n.item(u)) : a = !0;
          }o.select(), d(this);
        }, w.eachRange = function (e, t) {
          var n = 0,
              r = this._ranges.length;for (n = 0; r > n; ++n) {
            if (e(this.getRangeAt(n))) return t;
          }
        }, w.getAllRanges = function () {
          var e = [];return this.eachRange(function (t) {
            e.push(t);
          }), e;
        }, w.setSingleRange = function (e) {
          this.removeAllRanges(), this.addRange(e);
        }, t.exports = g;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { "./rangeToTextRange": 26 }], 25: [function (e, t) {
      "use strict";
      function n(e, t) {
        var n = _typeof(e[t]);return "function" === n || !("object" !== n || !e[t]) || "unknown" === n;
      }function r(e, t) {
        return "undefined" != typeof e[t];
      }function o(e) {
        return function (t, n) {
          for (var r = n.length; r--;) {
            if (!e(t, n[r])) return !1;
          }return !0;
        };
      }t.exports = { method: n, methods: o(n), property: r, properties: o(r) };
    }, {}], 26: [function (e, t) {
      (function (e) {
        "use strict";
        function n(e) {
          if (e.collapsed) return o({ node: e.startContainer, offset: e.startOffset }, !0);var t = o({ node: e.startContainer, offset: e.startOffset }, !0),
              n = o({ node: e.endContainer, offset: e.endOffset }, !1),
              r = a.createTextRange();return r.setEndPoint("StartToStart", t), r.setEndPoint("EndToEnd", n), r;
        }function r(e) {
          var t = e.nodeType;return 3 === t || 4 === t || 8 === t;
        }function o(e, t) {
          var n,
              o,
              u,
              c,
              f = e.offset,
              l = a.createTextRange(),
              s = r(e.node);return s ? (n = e.node, o = n.parentNode) : (c = e.node.childNodes, n = f < c.length ? c[f] : null, o = e.node), u = i.createElement("span"), u.innerHTML = "&#feff;", n ? o.insertBefore(u, n) : o.appendChild(u), l.moveToElementText(u), l.collapse(!t), o.removeChild(u), s && l[t ? "moveStart" : "moveEnd"]("character", f), l;
        }var i = e.document,
            a = i.body;t.exports = n;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}], 27: [function (e, t) {
      "use strict";
      var n = e("./getSelection"),
          r = e("./setSelection");t.exports = { get: n, set: r };
    }, { "./getSelection": 21, "./setSelection": 28 }], 28: [function (e, t) {
      (function (n) {
        "use strict";
        function r(e) {
          function t() {
            var t = o(),
                n = a.createRange();e.startContainer && (e.endContainer ? n.setEnd(e.endContainer, e.endOffset) : n.setEnd(e.startContainer, e.startOffset), n.setStart(e.startContainer, e.startOffset), t.removeAllRanges(), t.addRange(n));
          }function n() {
            i(e).select();
          }a.createRange ? t() : n();
        }var o = e("./getSelection"),
            i = e("./rangeToTextRange"),
            a = n.document;t.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { "./getSelection": 21, "./rangeToTextRange": 26 }], 29: [function (e, t) {
      "use strict";
      function n(e) {
        return { start: e.selectionStart, end: e.selectionEnd };
      }function r(e) {
        function t(t, r) {
          return n !== e && (n ? n.focus() : e.blur()), { start: t, end: r };
        }var n = document.activeElement;n !== e && e.focus();var r = document.selection.createRange(),
            a = r.getBookmark(),
            u = e.value,
            c = o(u),
            f = r.parentElement();if (null === f || !i(f)) return t(0, 0);r.text = c + r.text + c;var l = e.value;return e.value = u, r.moveToBookmark(a), r.select(), t(l.indexOf(c), l.lastIndexOf(c) - c.length);
      }function o(e) {
        var t;do {
          t = "@@marker." + Math.random() * new Date();
        } while (-1 !== e.indexOf(t));return t;
      }function i(e) {
        return "INPUT" === e.tagName && "text" === e.type || "TEXTAREA" === e.tagName;
      }function a(e, t) {
        e.selectionStart = c(e, t.start), e.selectionEnd = c(e, t.end);
      }function u(e, t) {
        var n = e.createTextRange();"end" === t.start && "end" === t.end ? (n.collapse(!1), n.select()) : (n.collapse(!0), n.moveEnd("character", c(e, t.end)), n.moveStart("character", c(e, t.start)), n.select());
      }function c(e, t) {
        return "end" === t ? e.value.length : t || 0;
      }function f(e, t) {
        return 2 === arguments.length && s(e, t), l(e);
      }var l = n,
          s = a;document.selection && document.selection.createRange && (l = r, s = u), t.exports = f;
    }, {}], 30: [function (e, t) {
      var n,
          r = "function" == typeof setImmediate;n = r ? function (e) {
        setImmediate(e);
      } : function (e) {
        setTimeout(e, 0);
      }, t.exports = n;
    }, {}] }, {}, [1])(1);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24), __webpack_require__(18).setImmediate))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24), __webpack_require__(48)))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row svgpker"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row ic_container"
  }, [_c('div', {
    staticClass: "row ic_tophover"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('p', [_vm._v(_vm._s(_vm.hoveritem))])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('p', [_vm._v(_vm._s(_vm.snippet))])])]), _vm._v(" "), _c('div', {
    staticClass: "row bc_search_container"
  }, [_c('div', {
    staticClass: "col-sm-4 ic_breadcrumb"
  }, [_c('a', {
    attrs: {
      "href": "index.html#/"
    }
  }, [_vm._v("Home")]), _vm._v(" "), _c('p', [_vm._v(">")]), _vm._v(" \n          "), _c('p', [_vm._v(_vm._s(this.$route.params.category))])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8 ic_search"
  }, [_c('label', {
    attrs: {
      "for": "hy"
    }
  }, [_vm._v("Search " + _vm._s(_vm.currentCategory) + ":")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "id": "hy"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row ic_cattype_container"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8 ic_filter-controls"
  }, [(_vm.fcVisible) ? _c('span', [_c('p', [_vm._v("Type:")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "img/icons/unsorted/noborders_transpa1.svg",
      "alt": "show all"
    },
    on: {
      "click": function($event) {
        _vm.filterItems('all')
      }
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "img/icons/unsorted/noborders_transpa1.svg",
      "alt": "show noborders"
    },
    on: {
      "click": function($event) {
        _vm.filterItems('noborder')
      }
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "img/icons/unsorted/square_transpa1.svg",
      "alt": "show square"
    },
    on: {
      "click": function($event) {
        _vm.filterItems('square')
      }
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "img/icons/unsorted/circle_transpa1.svg",
      "alt": "show circle"
    },
    on: {
      "click": function($event) {
        _vm.filterItems('circle')
      }
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "img/icons/unsorted/triangle_transpa1.svg",
      "alt": "show triangle"
    },
    on: {
      "click": function($event) {
        _vm.filterItems('triangle')
      }
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "img/icons/unsorted/rounded_transpa1.svg",
      "alt": "show rounded border"
    },
    on: {
      "click": function($event) {
        _vm.filterItems('roundedborder')
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "ic_gridlist_toggle ic_btn",
    on: {
      "click": function($event) {
        _vm.toggleGrid()
      }
    }
  }, [_vm._v(_vm._s(_vm.gridView ? "list" : "grid"))])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "row ic_pg_container"
  }, [_c('div', {
    staticClass: "col-sm-12",
    attrs: {
      "id": "jpages_pg-holder"
    },
    on: {
      "mouseout": function($event) {
        _vm.showIconInfo()
      }
    }
  }, _vm._l((_vm.currentItems), function(i, index) {
    return (_vm.gridView) ? _c('div', {
      key: i.id
    }, [_c('div', {
      staticClass: "col-xs-3 col-sm-2 ic_iconbox",
      attrs: {
        "id": "ic_iconbox"
      }
    }, [_c('div', {
      on: {
        "mouseover": function($event) {
          _vm.showIconInfo(i.id)
        },
        "click": function($event) {
          _vm.selectitem(i.svg)
        }
      }
    }, [_c('p', {
      staticClass: "ic_toggle"
    }, [_vm._v(_vm._s(i.id))]), _vm._v(" "), _c('img', {
      attrs: {
        "src": 'img/icons/' + _vm.currentCategory + '/' + i.src,
        "alt": i.id
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "ic_tooltip"
    }, [_c('button', {
      staticClass: "ic_btn",
      on: {
        "click": function($event) {
          _vm.addFavorite(i.id, i.src, i.type, i.svg, i.description)
        }
      }
    }, [_vm._v("add")]), _vm._v(" "), _c('button', {
      staticClass: "ic_btn",
      on: {
        "click": function($event) {}
      }
    }, [_vm._v("svg")])])])])]) : _c('div', [_c('div', {
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
        "src": 'img/icons/' + _vm.currentCategory + '/' + i.src,
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
  }))]), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _vm._m(4)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row container-fluid spreader"
  }, [_c('div', {
    staticClass: "ic_container"
  }, [_c('div', {
    attrs: {
      "id": "vc-header-mount"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    attrs: {
      "id": "cat-selector-mount"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row pg_container"
  }, [_c('div', {
    staticClass: "col-sm-12 ic_pg-controls"
  }, [_c('div', {
    staticClass: "jpages_pg"
  }, [_vm._v("\n          top paginator\n          ")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row pg_container"
  }, [_c('div', {
    staticClass: "col-sm-12 ic_pg-controls"
  }, [_c('div', {
    staticClass: "jpages_pg"
  }, [_vm._v("\n          top paginator\n        ")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row container-fluid spreader"
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
     require("vue-hot-reload-api").rerender("data-v-9b36b4c4", esExports)
  }
}

/***/ })
]);