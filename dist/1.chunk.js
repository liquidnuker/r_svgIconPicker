webpackJsonp([1],{10:function(t,i,e){"use strict";e.d(i,"a",function(){return s});var s={allItems:"",currentitems:"",currentCategory:"",favorites:[{category:"category1",id:"id1",type:"",src:"src1",svg:"svg1",date:"date1",notes:"notes1",description:"description1"}]}},16:function(t,i,e){"use strict";e.d(i,"a",function(){return n});var s=e(17),n=(e.n(s),{activate:function(){$(".jpages_pg").jPages({containerID:"jpages_pg-holder",first:"first",previous:"previous",next:"next",last:"last",links:"numeric",delay:0,fallback:0,startPage:1,perPage:18,midRange:5})},reActivate:function(t){setTimeout(function(){n.activate()},t)},destroy:function(){$(".jpages_pg").jPages()&&$(".jpages_pg").jPages("destroy")}})},17:function(t,i){!function(t,i,e,s){function n(s,n){this.options=t.extend({},r,n),this._container=t("#"+this.options.containerID),this._container.length&&(this.jQwindow=t(i),this.jQdocument=t(e),this._holder=t(s),this._nav={},this._first=t(this.options.first),this._previous=t(this.options.previous),this._next=t(this.options.next),this._last=t(this.options.last),this._items=this._container.children(":visible"),this._itemsShowing=t([]),this._itemsHiding=t([]),this._numPages=Math.ceil(this._items.length/this.options.perPage),this._currentPageNum=this.options.startPage,this._clicked=!1,this._cssAnimSupport=this.getCSSAnimationSupport(),this.init())}var a="jPages",o=null,r={containerID:"",first:!1,previous:"← previous",next:"next →",last:!1,links:"numeric",startPage:1,perPage:10,midRange:5,startRange:1,endRange:1,keyBrowse:!1,scrollBrowse:!1,pause:0,clickStop:!1,delay:50,direction:"forward",animation:"",fallback:400,minHeight:!0,callback:void 0};n.prototype={constructor:n,getCSSAnimationSupport:function(){var t=!1,i="Webkit Moz O ms Khtml".split(" "),e="",s=this._container.get(0);if(s.style.animationName&&(t=!0),!1===t)for(var n=0;n<i.length;n++)if(void 0!==s.style[i[n]+"AnimationName"]){e=i[n],e+"Animation","-"+e.toLowerCase()+"-",t=!0;break}return t},init:function(){this.setStyles(),this.setNav(),this.paginate(this._currentPageNum),this.setMinHeight()},setStyles:function(){t("<style>.jp-invisible { visibility: hidden !important; } .jp-hidden { display: none !important; }</style>").appendTo("head"),this._cssAnimSupport&&this.options.animation.length?this._items.addClass("animated jp-hidden"):this._items.hide()},setNav:function(){var i=this.writeNav();this._holder.each(this.bind(function(e,s){var n=t(s);n.html(i),this.cacheNavElements(n,e),this.bindNavHandlers(e),this.disableNavSelection(s)},this)),this.options.keyBrowse&&this.bindNavKeyBrowse(),this.options.scrollBrowse&&this.bindNavScrollBrowse()},writeNav:function(){var t,i=1;for(t=this.writeBtn("first")+this.writeBtn("previous");i<=this._numPages;i++){switch(1===i&&0===this.options.startRange&&(t+="<span>...</span>"),i>this.options.startRange&&i<=this._numPages-this.options.endRange?t+="<a href='#' class='jp-hidden'>":t+="<a>",this.options.links){case"numeric":t+=i;break;case"blank":break;case"title":var e=this._items.eq(i-1).attr("data-title");t+=void 0!==e?e:""}t+="</a>",i!==this.options.startRange&&i!==this._numPages-this.options.endRange||(t+="<span>...</span>")}return t+=this.writeBtn("next")+this.writeBtn("last")+"</div>"},writeBtn:function(i){return!1===this.options[i]||t(this["_"+i]).length?"":"<a class='jp-"+i+"'>"+this.options[i]+"</a>"},cacheNavElements:function(i,e){this._nav[e]={},this._nav[e].holder=i,this._nav[e].first=this._first.length?this._first:this._nav[e].holder.find("a.jp-first"),this._nav[e].previous=this._previous.length?this._previous:this._nav[e].holder.find("a.jp-previous"),this._nav[e].next=this._next.length?this._next:this._nav[e].holder.find("a.jp-next"),this._nav[e].last=this._last.length?this._last:this._nav[e].holder.find("a.jp-last"),this._nav[e].fstBreak=this._nav[e].holder.find("span:first"),this._nav[e].lstBreak=this._nav[e].holder.find("span:last"),this._nav[e].pages=this._nav[e].holder.find("a").not(".jp-first, .jp-previous, .jp-next, .jp-last"),this._nav[e].permPages=this._nav[e].pages.slice(0,this.options.startRange).add(this._nav[e].pages.slice(this._numPages-this.options.endRange,this._numPages)),this._nav[e].pagesShowing=t([]),this._nav[e].currentPage=t([])},bindNavHandlers:function(i){var e=this._nav[i];e.holder.bind("click.jPages",this.bind(function(i){var s=this.getNewPage(e,t(i.target));this.validNewPage(s)&&(this._clicked=!0,this.paginate(s)),i.preventDefault()},this)),this._first.length&&this._first.bind("click.jPages",this.bind(function(){this.validNewPage(1)&&(this._clicked=!0,this.paginate(1))},this)),this._previous.length&&this._previous.bind("click.jPages",this.bind(function(){var t=this._currentPageNum-1;this.validNewPage(t)&&(this._clicked=!0,this.paginate(t))},this)),this._next.length&&this._next.bind("click.jPages",this.bind(function(){var t=this._currentPageNum+1;this.validNewPage(t)&&(this._clicked=!0,this.paginate(t))},this)),this._last.length&&this._last.bind("click.jPages",this.bind(function(){this.validNewPage(this._numPages)&&(this._clicked=!0,this.paginate(this._numPages))},this))},disableNavSelection:function(t){void 0!==t.onselectstart?t.onselectstart=function(){return!1}:void 0!==t.style.MozUserSelect?t.style.MozUserSelect="none":t.onmousedown=function(){return!1}},bindNavKeyBrowse:function(){this.jQdocument.bind("keydown.jPages",this.bind(function(t){var i=t.target.nodeName.toLowerCase();if(this.elemScrolledIntoView()&&"input"!==i&&"textarea"!=i){var e=this._currentPageNum;37==t.which&&(e=this._currentPageNum-1),39==t.which&&(e=this._currentPageNum+1),this.validNewPage(e)&&(this._clicked=!0,this.paginate(e))}},this))},elemScrolledIntoView:function(){var t,i,e;return t=this.jQwindow.scrollTop(),i=t+this.jQwindow.height(),e=this._container.offset().top,e+this._container.height()>=t&&e<=i},bindNavScrollBrowse:function(){this._container.bind("mousewheel.jPages DOMMouseScroll.jPages",this.bind(function(t){var i=(t.originalEvent.wheelDelta||-t.originalEvent.detail)>0?this._currentPageNum-1:this._currentPageNum+1;return this.validNewPage(i)&&(this._clicked=!0,this.paginate(i)),t.preventDefault(),!1},this))},getNewPage:function(t,i){return i.is(t.currentPage)?this._currentPageNum:i.is(t.pages)?t.pages.index(i)+1:i.is(t.first)?1:i.is(t.last)?this._numPages:i.is(t.previous)?t.pages.index(t.currentPage):i.is(t.next)?t.pages.index(t.currentPage)+2:void 0},validNewPage:function(t){return t!==this._currentPageNum&&t>0&&t<=this._numPages},paginate:function(i){var e,s;e=this.updateItems(i),s=this.updatePages(i),this._currentPageNum=i,t.isFunction(this.options.callback)&&this.callback(i,e,s),this.updatePause()},updateItems:function(t){var i=this.getItemRange(t);return this._itemsHiding=this._itemsShowing,this._itemsShowing=this._items.slice(i.start,i.end),this._cssAnimSupport&&this.options.animation.length?this.cssAnimations(t):this.jQAnimations(t),i},getItemRange:function(t){var i={};return i.start=(t-1)*this.options.perPage,i.end=i.start+this.options.perPage,i.end>this._items.length&&(i.end=this._items.length),i},cssAnimations:function(t){clearInterval(this._delay),this._itemsHiding.removeClass(this.options.animation+" jp-invisible").addClass("jp-hidden"),this._itemsShowing.removeClass("jp-hidden").addClass("jp-invisible"),this._itemsOriented=this.getDirectedItems(t),this._index=0,this._delay=setInterval(this.bind(function(){this._index===this._itemsOriented.length?clearInterval(this._delay):this._itemsOriented.eq(this._index).removeClass("jp-invisible").addClass(this.options.animation),this._index=this._index+1},this),this.options.delay)},jQAnimations:function(t){clearInterval(this._delay),this._itemsHiding.addClass("jp-hidden"),this._itemsShowing.fadeTo(0,0).removeClass("jp-hidden"),this._itemsOriented=this.getDirectedItems(t),this._index=0,this._delay=setInterval(this.bind(function(){this._index===this._itemsOriented.length?clearInterval(this._delay):this._itemsOriented.eq(this._index).fadeTo(this.options.fallback,1),this._index=this._index+1},this),this.options.delay)},getDirectedItems:function(i){var e;switch(this.options.direction){case"backwards":e=t(this._itemsShowing.get().reverse());break;case"random":e=t(this._itemsShowing.get().sort(function(){return Math.round(Math.random())-.5}));break;case"auto":e=i>=this._currentPageNum?this._itemsShowing:t(this._itemsShowing.get().reverse());break;default:e=this._itemsShowing}return e},updatePages:function(t){var i,e,s;i=this.getInterval(t);for(e in this._nav)this._nav.hasOwnProperty(e)&&(s=this._nav[e],this.updateBtns(s,t),this.updateCurrentPage(s,t),this.updatePagesShowing(s,i),this.updateBreaks(s,i));return i},getInterval:function(t){var i,e,s,n;return i=Math.ceil(this.options.midRange/2),e=this._numPages-this.options.midRange,s=t>i?Math.max(Math.min(t-i,e),0):0,n=t>i?Math.min(t+i-(this.options.midRange%2>0?1:0),this._numPages):Math.min(this.options.midRange,this._numPages),{start:s,end:n}},updateBtns:function(t,i){1===i&&(t.first.addClass("jp-disabled"),t.previous.addClass("jp-disabled")),i===this._numPages&&(t.next.addClass("jp-disabled"),t.last.addClass("jp-disabled")),1===this._currentPageNum&&i>1&&(t.first.removeClass("jp-disabled"),t.previous.removeClass("jp-disabled")),this._currentPageNum===this._numPages&&i<this._numPages&&(t.next.removeClass("jp-disabled"),t.last.removeClass("jp-disabled"))},updateCurrentPage:function(t,i){t.currentPage.removeClass("jp-current"),t.currentPage=t.pages.eq(i-1).addClass("jp-current")},updatePagesShowing:function(t,i){var e=t.pages.slice(i.start,i.end).not(t.permPages);t.pagesShowing.not(e).addClass("jp-hidden"),e.not(t.pagesShowing).removeClass("jp-hidden"),t.pagesShowing=e},updateBreaks:function(t,i){i.start>this.options.startRange||0===this.options.startRange&&i.start>0?t.fstBreak.removeClass("jp-hidden"):t.fstBreak.addClass("jp-hidden"),i.end<this._numPages-this.options.endRange?t.lstBreak.removeClass("jp-hidden"):t.lstBreak.addClass("jp-hidden")},callback:function(t,i,e){var s={current:t,interval:e,count:this._numPages},n={showing:this._itemsShowing,oncoming:this._items.slice(i.start+this.options.perPage,i.end+this.options.perPage),range:i,count:this._items.length};s.interval.start=s.interval.start+1,n.range.start=n.range.start+1,this.options.callback(s,n)},updatePause:function(){if(this.options.pause&&this._numPages>1){if(clearTimeout(this._pause),this.options.clickStop&&this._clicked)return;this._pause=setTimeout(this.bind(function(){this.paginate(this._currentPageNum!==this._numPages?this._currentPageNum+1:1)},this),this.options.pause)}},setMinHeight:function(){this.options.minHeight&&!this._container.is("table, tbody")&&setTimeout(this.bind(function(){this._container.css({"min-height":this._container.css("height")})},this),1e3)},bind:function(t,i){return function(){return t.apply(i,arguments)}},destroy:function(){this.jQdocument.unbind("keydown.jPages"),this._container.unbind("mousewheel.jPages DOMMouseScroll.jPages"),this.options.minHeight&&this._container.css("min-height",""),this._cssAnimSupport&&this.options.animation.length?this._items.removeClass("animated jp-hidden jp-invisible "+this.options.animation):this._items.removeClass("jp-hidden").fadeTo(0,1),this._holder.unbind("click.jPages").empty()}},t.fn[a]=function(i){var e=t.type(i);return"object"===e?(this.length&&!t.data(this,a)&&(o=new n(this,i),this.each(function(){t.data(this,a,o)})),this):"string"===e&&"destroy"===i?(o.destroy(),this.each(function(){t.removeData(this,a)}),this):"number"===e&&i%1==0?(o.validNewPage(i)&&o.paginate(i),this):this}}(jQuery,window,document)},61:function(t,i,e){"use strict";var s=e(16),n=e(10),a=e(62),o=function(){return e.e(3).then(e.bind(null,11))};i.a={data:function(){return{allItems:n.a.favorites,currentItems:n.a.favorites,addNewNote:!1,noteTitle:"",note:"",noteIndex:"",editNote:!1,editNoteId:"",currentNote:"",fcVisible:!0,gridView:!1}},components:{vcHeader:o},watch:{allItems:function(){s.a.destroy(),this.refreshItems()}},mounted:function(){this.refreshItems(),this.mountHeader()},methods:{mountHeader:function(){var t=function(t){e.e(3).then(function(){t(e(11))}.bind(null,e)).catch(e.oe)};new Vue({el:"#vc-header-mount",render:function(i){return i(t)}})},toggleGrid:function(){this.gridView=!this.gridView},refreshItems:function(){s.a.activate()},pushitem:function(){var t=Date().toString();n.a.favorites.push({id:"id2",src:"src2",type:"type2",svg:"svg2",notes:t,date:t})},removeItem:function(t){s.a.destroy();var i=a.a(t);n.a.favorites.splice(i,1),this.currentItems=this.allItems},editNoteToggle:function(t,i){this.editNote=!0,this.editNoteId=t,this.currentNote=i},addNoteToggle:function(t,i){this.addNewNote=!0,this.noteTitle=i},addNote:function(t,i){var e=a.a(t);n.a.favorites[e].notes=i,this.cancelNote()},cancelNote:function(){this.note="",this.addNewNote=!1},updateNote:function(t,i){var e=a.a(t);n.a.favorites[e].notes=i,this.cancelEdit()},cancelEdit:function(){this.currentNote="",this.editNote=!1},deleteNote:function(t){var i=a.a(t);n.a.favorites[i].notes=""},filterItems:function(t){if("all"===t)s.a.destroy(),this.currentItems=this.allItems,s.a.reActivate(50);else{s.a.destroy();var i="";console.log(t),i=this.allItems.filter(function(i){return i.type===t}),this.currentItems=i,s.a.reActivate(50)}}}}},62:function(t,i,e){"use strict";e.d(i,"a",function(){return n});var s=e(10),n=function(t){for(var i=0;i<s.a.favorites.length;i++)if(s.a.favorites[i].id==t)return i}},63:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row svgpker"},[e("div",{staticClass:"row container-fluid spreader"},[e("div",{staticClass:"ic_container"},[e("vcHeader")],1)]),t._v(" "),e("div",{staticClass:"row ic_container"},[t.editNote?e("div",{staticClass:"modal1_bg"},[e("div",{staticClass:"modal1_container col-xs-12"},[e("label",{attrs:{for:"currentNote"}},[t._v("edit note for: "+t._s(t.editNoteId))]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentNote,expression:"currentNote"}],attrs:{id:"currentNote",rows:"3"},domProps:{value:t.currentNote},on:{input:function(i){i.target.composing||(t.currentNote=i.target.value)}}}),t._v(" "),e("button",{staticClass:"ic_btn",on:{click:function(i){t.updateNote(t.editNoteId,t.currentNote)}}},[t._v("update note")]),t._v(" "),e("button",{staticClass:"ic_btn",on:{click:function(i){t.cancelEdit()}}},[t._v("cancel")])])]):t._e(),t._v(" "),t.addNewNote?e("div",{staticClass:"modal1_bg"},[e("div",{staticClass:"modal1_container col-xs-12"},[e("label",{attrs:{for:"note"}},[t._v("add note for: "+t._s(t.noteTitle))]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],attrs:{id:"note",rows:"3"},domProps:{value:t.note},on:{input:function(i){i.target.composing||(t.note=i.target.value)}}}),t._v(" "),e("button",{staticClass:"ic_btn",on:{click:function(i){t.addNote(t.noteTitle,t.note)}}},[t._v("save")]),t._v(" "),e("button",{staticClass:"ic_btn",on:{click:function(i){t.cancelNote()}}},[t._v("cancel")]),t._v(" "),e("hr")])]):t._e(),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"row ic_cattype_container"},[e("div",{staticClass:"col-sm-4"},[t._v("\n        extra\n      ")]),t._v(" "),e("div",{staticClass:"col-sm-8"},[t.fcVisible?e("span",{staticClass:"ic_filter-controls"},[e("p",[t._v("Type:")]),t._v(" "),e("img",{attrs:{src:"img/icons/unsorted/noborders_transpa1.svg",alt:"show all"},on:{click:function(i){t.filterItems("all")}}}),t._v(" "),e("img",{attrs:{src:"img/icons/unsorted/noborders_transpa1.svg",alt:"show noborders"},on:{click:function(i){t.filterItems("noborder")}}}),t._v(" "),e("img",{attrs:{src:"img/icons/unsorted/square_transpa1.svg",alt:"show square"},on:{click:function(i){t.filterItems("square")}}}),t._v(" "),e("img",{attrs:{src:"img/icons/unsorted/circle_transpa1.svg",alt:"show circle"},on:{click:function(i){t.filterItems("circle")}}}),t._v(" "),e("img",{attrs:{src:"img/icons/unsorted/triangle_transpa1.svg",alt:"show triangle"},on:{click:function(i){t.filterItems("triangle")}}}),t._v(" "),e("img",{attrs:{src:"img/icons/unsorted/rounded_transpa1.svg",alt:"show rounded border"},on:{click:function(i){t.filterItems("roundedborder")}}})]):t._e(),t._v(" "),e("button",{staticClass:"ic_gridlist_toggle ic_btn",on:{click:function(i){t.toggleGrid()}}},[t._v(t._s(t.gridView?"list":"grid"))])])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"row ic_pg_container"},[e("div",{staticClass:"col-sm-12",attrs:{id:"jpages_pg-holder"}},t._l(t.currentItems,function(i,s){return t.gridView?e("div",{key:i},[e("div",{staticClass:"col-xs-3 col-sm-2 fav_ic_iconbox",attrs:{id:"ic_iconbox"}},[e("div",{staticClass:"fav_ic_holder"},[e("p",{staticClass:"ic_toggle"},[t._v(t._s(i.id))]),t._v(" "),e("img",{attrs:{src:"img/icons/"+i.category+"/"+i.src,alt:i.id}}),t._v(" "),e("div",{staticClass:"ic_tooltip"},[e("button",{staticClass:"ic_btn",on:{click:function(e){t.removeItem(i.id)}}},[t._v("remove")])])])])]):e("div",[e("div",{staticClass:"col-sm-12 row ic_listview"},[e("div",{staticClass:"row favorites_list_title"},[e("p",{staticClass:"ic_list_id"},[e("a",{attrs:{href:"#"}},[t._v(t._s(i.id))])]),t._v(" "),e("button",{staticClass:"ic_btn",on:{click:function(e){t.removeItem(i.id)}}},[t._v("remove from favorites")])]),t._v(" "),e("p",{staticClass:"favorites_category"},[t._v("category: "+t._s(i.category))]),t._v(" "),e("div",{staticClass:"col-sm-2"},[e("div",{staticClass:"ic_list_iconbox"},[e("img",{attrs:{src:"img/icons/"+i.category+"/"+i.src,alt:i.id}})])]),t._v(" "),e("div",{staticClass:"col-sm-5 ic_listview_details"},[e("p",[t._v(t._s(i.description))]),t._v(" "),""!==i.notes?e("div",[e("p",{model:{value:i.notes,callback:function(t){i.notes=t},expression:"i.notes"}},[t._v(t._s(i.notes))]),t._v(" "),e("button",{staticClass:"ic_btn",on:{click:function(e){t.editNoteToggle(i.id,i.notes)}}},[t._v("update note")]),t._v(" "),e("button",{staticClass:"ic_btn",on:{click:function(e){t.deleteNote(i.id)}}},[t._v("delete note")])]):e("div",[e("button",{staticClass:"ic_btn",on:{click:function(e){t.addNoteToggle(s,i.id)}}},[t._v("add note for "+t._s(i.id))])])]),t._v(" "),e("div",{staticClass:"col-sm-5 ic_listview_svg"},[e("textarea",{staticClass:"col-xs-12"},[t._v(t._s(i.svg))]),t._v(" "),e("button",{staticClass:"ic_btn"},[t._v("copy svg")])])])])}))]),t._v(" "),t._m(2)]),t._v(" "),t._m(3)])},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row bc_search_container"},[e("div",{staticClass:"col-sm-12 ic_breadcrumb"},[e("a",{attrs:{href:"index.html#/"}},[t._v("Home")]),t._v(" "),e("p",[t._v(">")]),t._v(" \n        "),e("p",[t._v("Favorites")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row pg_container"},[e("div",{staticClass:"col-sm-12 row ic_pg-controls"},[e("div",{staticClass:"jpages_pg"},[t._v("\n          top paginator\n        ")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row pg_container"},[e("div",{staticClass:"col-sm-12 row ic_pg-controls"},[e("div",{staticClass:"jpages_pg"},[t._v("\n          top paginator\n        ")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row container-fluid spreader"},[e("div",{staticClass:"ic_container"},[e("footer",{staticClass:"col-sm-12 row main_footer"},[t._v("\n        mini footer\n      ")])])])}],a={render:s,staticRenderFns:n};i.a=a},9:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(61),n=e(63),a=e(0),o=a(s.a,n.a,null,null,null);i.default=o.exports}});