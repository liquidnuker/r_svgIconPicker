webpackJsonp([1],{

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

/***/ 16:
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

/***/ 17:
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_paginator_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_store_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_indexfinder_js__ = __webpack_require__(53);
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
      // for default items. not filtered
      allItems: __WEBPACK_IMPORTED_MODULE_1__js_store_js__["a" /* store */].favorites,

      // used for filter.
      currentItems: __WEBPACK_IMPORTED_MODULE_1__js_store_js__["a" /* store */].favorites,

      // add-notes
      addNewNote: false,
      noteTitle: "",
      note: "",
      noteIndex: "",

      // edit-notes
      editNote: false,
      editNoteId: "",
      currentNote: "",

      // filter buttons      
      fcVisible: true,

      gridView: false
    };
  },

  watch: {
    allItems: function allItems() {
      // console.log("favorites triggered");
      // destroy paginator instance
      __WEBPACK_IMPORTED_MODULE_0__js_paginator_js__["a" /* pager */].destroy();
      // optional
      this.refreshItems();
    }
  },
  mounted: function mounted() {
    this.refreshItems();
    this.mountHeader();
  },
  methods: {
    mountHeader: function mountHeader() {
      var vcHeader = function vcHeader(resolve) {
        __webpack_require__.e/* require.ensure */(3).then((function () {
          resolve(__webpack_require__(11));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      };
      new Vue({
        el: "#vc-header-mount",
        render: function render(h) {
          return h(vcHeader);
        }
      });
    },
    toggleGrid: function toggleGrid() {
      this.gridView = !this.gridView;
    },
    refreshItems: function refreshItems() {
      __WEBPACK_IMPORTED_MODULE_0__js_paginator_js__["a" /* pager */].activate();
    },
    pushitem: function pushitem() {
      var x = Date().toString();
      __WEBPACK_IMPORTED_MODULE_1__js_store_js__["a" /* store */].favorites.push({
        id: "id2",
        src: "src2",
        type: "type2",
        svg: "svg2",
        notes: x,
        date: x
      });
    },
    removeItem: function removeItem(id) {
      __WEBPACK_IMPORTED_MODULE_0__js_paginator_js__["a" /* pager */].destroy();
      // items change index when filtered, so lets find index by id
      var indexToRemove = __WEBPACK_IMPORTED_MODULE_2__js_indexfinder_js__["a" /* indexFinder */](id);
      __WEBPACK_IMPORTED_MODULE_1__js_store_js__["a" /* store */].favorites.splice(indexToRemove, 1);
      this.currentItems = this.allItems;
    },
    editNoteToggle: function editNoteToggle(id, notes) {
      this.editNote = true;
      this.editNoteId = id;
      this.currentNote = notes;
    },
    addNoteToggle: function addNoteToggle(index, id) {
      this.addNewNote = true;
      this.noteTitle = id;
    },
    addNote: function addNote(noteTitle, newNote) {
      var newNoteIndex = __WEBPACK_IMPORTED_MODULE_2__js_indexfinder_js__["a" /* indexFinder */](noteTitle);
      __WEBPACK_IMPORTED_MODULE_1__js_store_js__["a" /* store */].favorites[newNoteIndex].notes = newNote;

      // reset + close addNote area
      this.cancelNote();
    },
    cancelNote: function cancelNote() {
      this.note = "";
      this.addNewNote = false;
    },
    updateNote: function updateNote(id, updatedNote) {
      var indexToUpdate = __WEBPACK_IMPORTED_MODULE_2__js_indexfinder_js__["a" /* indexFinder */](id);
      __WEBPACK_IMPORTED_MODULE_1__js_store_js__["a" /* store */].favorites[indexToUpdate].notes = updatedNote;
      this.cancelEdit();
    },
    cancelEdit: function cancelEdit() {
      this.currentNote = "";
      this.editNote = false;
    },
    deleteNote: function deleteNote(id) {
      var indexToDelete = __WEBPACK_IMPORTED_MODULE_2__js_indexfinder_js__["a" /* indexFinder */](id);
      __WEBPACK_IMPORTED_MODULE_1__js_store_js__["a" /* store */].favorites[indexToDelete].notes = "";
    },
    filterItems: function filterItems(typeToFilter) {
      if (typeToFilter === "all") {
        __WEBPACK_IMPORTED_MODULE_0__js_paginator_js__["a" /* pager */].destroy();

        // set currentItems to default allItems
        this.currentItems = this.allItems;
        __WEBPACK_IMPORTED_MODULE_0__js_paginator_js__["a" /* pager */].reActivate(50);
      } else {
        __WEBPACK_IMPORTED_MODULE_0__js_paginator_js__["a" /* pager */].destroy();
        var filteredType = "";
        console.log(typeToFilter);

        filteredType = this.allItems.filter(function (el) {
          return el.type === typeToFilter;
          // && el.property2 === "this2";
        });

        // set currentItems to filtered items
        this.currentItems = filteredType;
        __WEBPACK_IMPORTED_MODULE_0__js_paginator_js__["a" /* pager */].reActivate(50);
      }
    }
  }
});

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return indexFinder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(10);


// index finder
var indexFinder = function indexFinder(value) {
  for (var key = 0; key < __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].favorites.length; key++) {
    if (__WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].favorites[key].id == value) {
      return key;
    }
  }
};



/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row svgpker"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row ic_container"
  }, [(_vm.editNote) ? _c('div', {
    staticClass: "modal1_bg"
  }, [_c('div', {
    staticClass: "modal1_container col-xs-12"
  }, [_c('label', {
    attrs: {
      "for": "currentNote"
    }
  }, [_vm._v("edit note for: " + _vm._s(_vm.editNoteId))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentNote),
      expression: "currentNote"
    }],
    attrs: {
      "id": "currentNote",
      "rows": "3"
    },
    domProps: {
      "value": (_vm.currentNote)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentNote = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "ic_btn",
    on: {
      "click": function($event) {
        _vm.updateNote(_vm.editNoteId, _vm.currentNote)
      }
    }
  }, [_vm._v("update note")]), _vm._v(" "), _c('button', {
    staticClass: "ic_btn",
    on: {
      "click": function($event) {
        _vm.cancelEdit()
      }
    }
  }, [_vm._v("cancel")])])]) : _vm._e(), _vm._v(" "), (_vm.addNewNote) ? _c('div', {
    staticClass: "modal1_bg"
  }, [_c('div', {
    staticClass: "modal1_container col-xs-12"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v("add note for: " + _vm._s(_vm.noteTitle))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.note),
      expression: "note"
    }],
    attrs: {
      "id": "note",
      "rows": "3"
    },
    domProps: {
      "value": (_vm.note)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.note = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "ic_btn",
    on: {
      "click": function($event) {
        _vm.addNote(_vm.noteTitle, _vm.note)
      }
    }
  }, [_vm._v("save")]), _vm._v(" "), _c('button', {
    staticClass: "ic_btn",
    on: {
      "click": function($event) {
        _vm.cancelNote()
      }
    }
  }, [_vm._v("cancel")]), _vm._v(" "), _c('hr')])]) : _vm._e(), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "row ic_cattype_container"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_vm._v("\n        extra\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-8"
  }, [(_vm.fcVisible) ? _c('span', {
    staticClass: "ic_filter-controls"
  }, [_c('p', [_vm._v("Type:")]), _vm._v(" "), _c('img', {
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
    }
  }, _vm._l((_vm.currentItems), function(i, index) {
    return (_vm.gridView) ? _c('div', {
      key: i
    }, [_c('div', {
      staticClass: "col-xs-3 col-sm-2 fav_ic_iconbox",
      attrs: {
        "id": "ic_iconbox"
      }
    }, [_c('div', {
      staticClass: "fav_ic_holder"
    }, [_c('p', {
      staticClass: "ic_toggle"
    }, [_vm._v(_vm._s(i.id))]), _vm._v(" "), _c('img', {
      attrs: {
        "src": 'img/icons/' + i.category + '/' + i.src,
        "alt": i.id
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "ic_tooltip"
    }, [_c('button', {
      staticClass: "ic_btn",
      on: {
        "click": function($event) {
          _vm.removeItem(i.id)
        }
      }
    }, [_vm._v("remove")])])])])]) : _c('div', [_c('div', {
      staticClass: "col-sm-12 row ic_listview"
    }, [_c('div', {
      staticClass: "row favorites_list_title"
    }, [_c('p', {
      staticClass: "ic_list_id"
    }, [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [_vm._v(_vm._s(i.id))])]), _vm._v(" "), _c('button', {
      staticClass: "ic_btn",
      on: {
        "click": function($event) {
          _vm.removeItem(i.id)
        }
      }
    }, [_vm._v("remove from favorites")])]), _vm._v(" "), _c('p', {
      staticClass: "favorites_category"
    }, [_vm._v("category: " + _vm._s(i.category))]), _vm._v(" "), _c('div', {
      staticClass: "col-sm-2"
    }, [_c('div', {
      staticClass: "ic_list_iconbox"
    }, [_c('img', {
      attrs: {
        "src": 'img/icons/' + i.category + '/' + i.src,
        "alt": i.id
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "col-sm-5 ic_listview_details"
    }, [_c('p', [_vm._v(_vm._s(i.description))]), _vm._v(" "), (i.notes !== '') ? _c('div', [_c('p', {
      model: {
        value: (i.notes),
        callback: function($$v) {
          i.notes = $$v
        },
        expression: "i.notes"
      }
    }, [_vm._v(_vm._s(i.notes))]), _vm._v(" "), _c('button', {
      staticClass: "ic_btn",
      on: {
        "click": function($event) {
          _vm.editNoteToggle(i.id, i.notes)
        }
      }
    }, [_vm._v("update note")]), _vm._v(" "), _c('button', {
      staticClass: "ic_btn",
      on: {
        "click": function($event) {
          _vm.deleteNote(i.id)
        }
      }
    }, [_vm._v("delete note")])]) : _c('div', [_c('button', {
      staticClass: "ic_btn",
      on: {
        "click": function($event) {
          _vm.addNoteToggle(index, i.id)
        }
      }
    }, [_vm._v("add note for " + _vm._s(i.id))])])]), _vm._v(" "), _c('div', {
      staticClass: "col-sm-5 ic_listview_svg"
    }, [_c('textarea', {
      staticClass: "col-xs-12"
    }, [_vm._v(_vm._s(i.svg))]), _vm._v(" "), _c('button', {
      staticClass: "ic_btn"
    }, [_vm._v("copy svg")])])])])
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
    staticClass: "row bc_search_container"
  }, [_c('div', {
    staticClass: "col-sm-12 ic_breadcrumb"
  }, [_c('a', {
    attrs: {
      "href": "index.html#/"
    }
  }, [_vm._v("Home")]), _vm._v(" "), _c('p', [_vm._v(">")]), _vm._v(" \n        "), _c('p', [_vm._v("Favorites")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row pg_container"
  }, [_c('div', {
    staticClass: "col-sm-12 row ic_pg-controls"
  }, [_c('div', {
    staticClass: "jpages_pg"
  }, [_vm._v("\n          top paginator\n        ")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row pg_container"
  }, [_c('div', {
    staticClass: "col-sm-12 row ic_pg-controls"
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
     require("vue-hot-reload-api").rerender("data-v-abeb0e84", esExports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Favorites_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_abeb0e84_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Favorites_vue__ = __webpack_require__(54);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Favorites_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_abeb0e84_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Favorites_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Favorites.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Favorites.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-abeb0e84", Component.options)
  } else {
    hotAPI.reload("data-v-abeb0e84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});