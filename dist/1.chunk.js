webpackJsonp([1],{10:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={allItems:"",currentitems:"",currentCategory:"",favorites:[{category:"category1",id:"id1",type:"",src:"src1",svg:"svg1",date:"date1",notes:"notes1",description:"description1"}]}},12:function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},16:function(t,e,i){"use strict";var n=i(17);i.n(n);i.d(e,"a",function(){return s});var s={activate:function(){$(".jpages_pg").jPages({containerID:"jpages_pg-holder",first:"first",previous:"previous",next:"next",last:"last",links:"numeric",delay:0,fallback:0,startPage:1,perPage:4,midRange:5})},reActivate:function(t){setTimeout(function(){s.activate()},t)},destroy:function(){$(".jpages_pg").jPages()&&$(".jpages_pg").jPages("destroy")}}},17:function(t,e){!function(t,e,i,n){function s(n,s){this.options=t.extend({},o,s),this._container=t("#"+this.options.containerID),this._container.length&&(this.jQwindow=t(e),this.jQdocument=t(i),this._holder=t(n),this._nav={},this._first=t(this.options.first),this._previous=t(this.options.previous),this._next=t(this.options.next),this._last=t(this.options.last),this._items=this._container.children(":visible"),this._itemsShowing=t([]),this._itemsHiding=t([]),this._numPages=Math.ceil(this._items.length/this.options.perPage),this._currentPageNum=this.options.startPage,this._clicked=!1,this._cssAnimSupport=this.getCSSAnimationSupport(),this.init())}var a="jPages",r=null,o={containerID:"",first:!1,previous:"← previous",next:"next →",last:!1,links:"numeric",startPage:1,perPage:10,midRange:5,startRange:1,endRange:1,keyBrowse:!1,scrollBrowse:!1,pause:0,clickStop:!1,delay:50,direction:"forward",animation:"",fallback:400,minHeight:!0,callback:n};s.prototype={constructor:s,getCSSAnimationSupport:function(){var t=!1,e="animation",i="",s="Webkit Moz O ms Khtml".split(" "),a="",r=this._container.get(0);if(r.style.animationName&&(t=!0),t===!1)for(var o=0;o<s.length;o++)if(r.style[s[o]+"AnimationName"]!==n){a=s[o],e=a+"Animation",i="-"+a.toLowerCase()+"-",t=!0;break}return t},init:function(){this.setStyles(),this.setNav(),this.paginate(this._currentPageNum),this.setMinHeight()},setStyles:function(){var e="<style>.jp-invisible { visibility: hidden !important; } .jp-hidden { display: none !important; }</style>";t(e).appendTo("head"),this._cssAnimSupport&&this.options.animation.length?this._items.addClass("animated jp-hidden"):this._items.hide()},setNav:function(){var e=this.writeNav();this._holder.each(this.bind(function(i,n){var s=t(n);s.html(e),this.cacheNavElements(s,i),this.bindNavHandlers(i),this.disableNavSelection(n)},this)),this.options.keyBrowse&&this.bindNavKeyBrowse(),this.options.scrollBrowse&&this.bindNavScrollBrowse()},writeNav:function(){var t,e=1;for(t=this.writeBtn("first")+this.writeBtn("previous");e<=this._numPages;e++){switch(1===e&&0===this.options.startRange&&(t+="<span>...</span>"),t+=e>this.options.startRange&&e<=this._numPages-this.options.endRange?"<a href='#' class='jp-hidden'>":"<a>",this.options.links){case"numeric":t+=e;break;case"blank":break;case"title":var i=this._items.eq(e-1).attr("data-title");t+=i!==n?i:""}t+="</a>",e!==this.options.startRange&&e!==this._numPages-this.options.endRange||(t+="<span>...</span>")}return t+=this.writeBtn("next")+this.writeBtn("last")+"</div>"},writeBtn:function(e){return this.options[e]===!1||t(this["_"+e]).length?"":"<a class='jp-"+e+"'>"+this.options[e]+"</a>"},cacheNavElements:function(e,i){this._nav[i]={},this._nav[i].holder=e,this._nav[i].first=this._first.length?this._first:this._nav[i].holder.find("a.jp-first"),this._nav[i].previous=this._previous.length?this._previous:this._nav[i].holder.find("a.jp-previous"),this._nav[i].next=this._next.length?this._next:this._nav[i].holder.find("a.jp-next"),this._nav[i].last=this._last.length?this._last:this._nav[i].holder.find("a.jp-last"),this._nav[i].fstBreak=this._nav[i].holder.find("span:first"),this._nav[i].lstBreak=this._nav[i].holder.find("span:last"),this._nav[i].pages=this._nav[i].holder.find("a").not(".jp-first, .jp-previous, .jp-next, .jp-last"),this._nav[i].permPages=this._nav[i].pages.slice(0,this.options.startRange).add(this._nav[i].pages.slice(this._numPages-this.options.endRange,this._numPages)),this._nav[i].pagesShowing=t([]),this._nav[i].currentPage=t([])},bindNavHandlers:function(e){var i=this._nav[e];i.holder.bind("click.jPages",this.bind(function(e){var n=this.getNewPage(i,t(e.target));this.validNewPage(n)&&(this._clicked=!0,this.paginate(n)),e.preventDefault()},this)),this._first.length&&this._first.bind("click.jPages",this.bind(function(){this.validNewPage(1)&&(this._clicked=!0,this.paginate(1))},this)),this._previous.length&&this._previous.bind("click.jPages",this.bind(function(){var t=this._currentPageNum-1;this.validNewPage(t)&&(this._clicked=!0,this.paginate(t))},this)),this._next.length&&this._next.bind("click.jPages",this.bind(function(){var t=this._currentPageNum+1;this.validNewPage(t)&&(this._clicked=!0,this.paginate(t))},this)),this._last.length&&this._last.bind("click.jPages",this.bind(function(){this.validNewPage(this._numPages)&&(this._clicked=!0,this.paginate(this._numPages))},this))},disableNavSelection:function(t){"undefined"!=typeof t.onselectstart?t.onselectstart=function(){return!1}:"undefined"!=typeof t.style.MozUserSelect?t.style.MozUserSelect="none":t.onmousedown=function(){return!1}},bindNavKeyBrowse:function(){this.jQdocument.bind("keydown.jPages",this.bind(function(t){var e=t.target.nodeName.toLowerCase();if(this.elemScrolledIntoView()&&"input"!==e&&"textarea"!=e){var i=this._currentPageNum;37==t.which&&(i=this._currentPageNum-1),39==t.which&&(i=this._currentPageNum+1),this.validNewPage(i)&&(this._clicked=!0,this.paginate(i))}},this))},elemScrolledIntoView:function(){var t,e,i,n;return t=this.jQwindow.scrollTop(),e=t+this.jQwindow.height(),i=this._container.offset().top,n=i+this._container.height(),n>=t&&i<=e},bindNavScrollBrowse:function(){this._container.bind("mousewheel.jPages DOMMouseScroll.jPages",this.bind(function(t){var e=(t.originalEvent.wheelDelta||-t.originalEvent.detail)>0?this._currentPageNum-1:this._currentPageNum+1;return this.validNewPage(e)&&(this._clicked=!0,this.paginate(e)),t.preventDefault(),!1},this))},getNewPage:function(t,e){return e.is(t.currentPage)?this._currentPageNum:e.is(t.pages)?t.pages.index(e)+1:e.is(t.first)?1:e.is(t.last)?this._numPages:e.is(t.previous)?t.pages.index(t.currentPage):e.is(t.next)?t.pages.index(t.currentPage)+2:void 0},validNewPage:function(t){return t!==this._currentPageNum&&t>0&&t<=this._numPages},paginate:function(e){var i,n;i=this.updateItems(e),n=this.updatePages(e),this._currentPageNum=e,t.isFunction(this.options.callback)&&this.callback(e,i,n),this.updatePause()},updateItems:function(t){var e=this.getItemRange(t);return this._itemsHiding=this._itemsShowing,this._itemsShowing=this._items.slice(e.start,e.end),this._cssAnimSupport&&this.options.animation.length?this.cssAnimations(t):this.jQAnimations(t),e},getItemRange:function(t){var e={};return e.start=(t-1)*this.options.perPage,e.end=e.start+this.options.perPage,e.end>this._items.length&&(e.end=this._items.length),e},cssAnimations:function(t){clearInterval(this._delay),this._itemsHiding.removeClass(this.options.animation+" jp-invisible").addClass("jp-hidden"),this._itemsShowing.removeClass("jp-hidden").addClass("jp-invisible"),this._itemsOriented=this.getDirectedItems(t),this._index=0,this._delay=setInterval(this.bind(function(){this._index===this._itemsOriented.length?clearInterval(this._delay):this._itemsOriented.eq(this._index).removeClass("jp-invisible").addClass(this.options.animation),this._index=this._index+1},this),this.options.delay)},jQAnimations:function(t){clearInterval(this._delay),this._itemsHiding.addClass("jp-hidden"),this._itemsShowing.fadeTo(0,0).removeClass("jp-hidden"),this._itemsOriented=this.getDirectedItems(t),this._index=0,this._delay=setInterval(this.bind(function(){this._index===this._itemsOriented.length?clearInterval(this._delay):this._itemsOriented.eq(this._index).fadeTo(this.options.fallback,1),this._index=this._index+1},this),this.options.delay)},getDirectedItems:function(e){var i;switch(this.options.direction){case"backwards":i=t(this._itemsShowing.get().reverse());break;case"random":i=t(this._itemsShowing.get().sort(function(){return Math.round(Math.random())-.5}));break;case"auto":i=e>=this._currentPageNum?this._itemsShowing:t(this._itemsShowing.get().reverse());break;default:i=this._itemsShowing}return i},updatePages:function(t){var e,i,n;e=this.getInterval(t);for(i in this._nav)this._nav.hasOwnProperty(i)&&(n=this._nav[i],this.updateBtns(n,t),this.updateCurrentPage(n,t),this.updatePagesShowing(n,e),this.updateBreaks(n,e));return e},getInterval:function(t){var e,i,n,s;return e=Math.ceil(this.options.midRange/2),i=this._numPages-this.options.midRange,n=t>e?Math.max(Math.min(t-e,i),0):0,s=t>e?Math.min(t+e-(this.options.midRange%2>0?1:0),this._numPages):Math.min(this.options.midRange,this._numPages),{start:n,end:s}},updateBtns:function(t,e){1===e&&(t.first.addClass("jp-disabled"),t.previous.addClass("jp-disabled")),e===this._numPages&&(t.next.addClass("jp-disabled"),t.last.addClass("jp-disabled")),1===this._currentPageNum&&e>1&&(t.first.removeClass("jp-disabled"),t.previous.removeClass("jp-disabled")),this._currentPageNum===this._numPages&&e<this._numPages&&(t.next.removeClass("jp-disabled"),t.last.removeClass("jp-disabled"))},updateCurrentPage:function(t,e){t.currentPage.removeClass("jp-current"),t.currentPage=t.pages.eq(e-1).addClass("jp-current")},updatePagesShowing:function(t,e){var i=t.pages.slice(e.start,e.end).not(t.permPages);t.pagesShowing.not(i).addClass("jp-hidden"),i.not(t.pagesShowing).removeClass("jp-hidden"),t.pagesShowing=i},updateBreaks:function(t,e){e.start>this.options.startRange||0===this.options.startRange&&e.start>0?t.fstBreak.removeClass("jp-hidden"):t.fstBreak.addClass("jp-hidden"),e.end<this._numPages-this.options.endRange?t.lstBreak.removeClass("jp-hidden"):t.lstBreak.addClass("jp-hidden")},callback:function(t,e,i){var n={current:t,interval:i,count:this._numPages},s={showing:this._itemsShowing,oncoming:this._items.slice(e.start+this.options.perPage,e.end+this.options.perPage),range:e,count:this._items.length};n.interval.start=n.interval.start+1,s.range.start=s.range.start+1,this.options.callback(n,s)},updatePause:function(){if(this.options.pause&&this._numPages>1){if(clearTimeout(this._pause),this.options.clickStop&&this._clicked)return;this._pause=setTimeout(this.bind(function(){this.paginate(this._currentPageNum!==this._numPages?this._currentPageNum+1:1)},this),this.options.pause)}},setMinHeight:function(){this.options.minHeight&&!this._container.is("table, tbody")&&setTimeout(this.bind(function(){this._container.css({"min-height":this._container.css("height")})},this),1e3)},bind:function(t,e){return function(){return t.apply(e,arguments)}},destroy:function(){this.jQdocument.unbind("keydown.jPages"),this._container.unbind("mousewheel.jPages DOMMouseScroll.jPages"),this.options.minHeight&&this._container.css("min-height",""),this._cssAnimSupport&&this.options.animation.length?this._items.removeClass("animated jp-hidden jp-invisible "+this.options.animation):this._items.removeClass("jp-hidden").fadeTo(0,1),this._holder.unbind("click.jPages").empty()}},t.fn[a]=function(e){var i=t.type(e);return"object"===i?(this.length&&!t.data(this,a)&&(r=new s(this,e),this.each(function(){t.data(this,a,r)})),this):"string"===i&&"destroy"===e?(r.destroy(),this.each(function(){t.removeData(this,a)}),this):"number"===i&&e%1===0?(r.validNewPage(e)&&r.paginate(e),this):this}}(jQuery,window,document)},25:function(t,e,i){"use strict";var n=i(10);i.d(e,"a",function(){return s});var s=function(t){for(var e=0;e<n.a.favorites.length;e++)if(n.a.favorites[e].id==t)return e}},33:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(16),s=i(10),a=i(25),r=i(38);e.default={data:function(){return{allItems:s.a.favorites,currentItems:s.a.favorites,addNewNote:!1,noteTitle:"",note:"",noteIndex:"",editNote:!1,editNoteId:"",currentNote:"",fcVisible:!0,gridView:!1}},watch:{allItems:function(){console.log("favorites triggered"),n.a.destroy(),this.refreshItems()}},updated:function(){r.highlightAll()},mounted:function(){console.log("Favorites.vue mounted"),this.refreshItems(),this.mountHeader(),r.highlightAll()},methods:{mountHeader:function(){var t=function(t){i.e(3).then(function(){t(i(11))}.bind(null,i)).catch(i.oe)};new Vue({el:"#vc-header-mount",render:function(e){return e(t)}})},toggleGrid:function(){this.gridView=!this.gridView},refreshItems:function(){n.a.activate()},pushitem:function(){var t=Date().toString();s.a.favorites.push({id:"id2",src:"src2",type:"type2",svg:"svg2",notes:t,date:t})},removeItem:function(t){n.a.destroy();var e=i.i(a.a)(t);s.a.favorites.splice(e,1),this.currentItems=this.allItems},editNoteToggle:function(t,e){this.editNote=!0,this.editNoteId=t,this.currentNote=e},addNoteToggle:function(t,e){this.addNewNote=!0,this.noteTitle=e},addNote:function(t,e){var n=i.i(a.a)(t);s.a.favorites[n].notes=e,this.cancelNote()},cancelNote:function(){this.note="",this.addNewNote=!1},updateNote:function(t,e){var n=i.i(a.a)(t);s.a.favorites[n].notes=e,this.cancelEdit()},cancelEdit:function(){this.currentNote="",this.editNote=!1},deleteNote:function(t){var e=i.i(a.a)(t);s.a.favorites[e].notes=""},filterItems:function(t){if("all"===t)n.a.destroy(),this.currentItems=this.allItems,n.a.reActivate(50);else{n.a.destroy();var e="";console.log(t),e=this.allItems.filter(function(e){return e.type===t}),this.currentItems=e,n.a.reActivate(50)}}}}},38:function(t,e,i){(function(e){var i="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var t=/\blang(?:uage)?-(\w+)\b/i,e=0,n=i.Prism={util:{encode:function(t){return t instanceof s?new s(t.type,n.util.encode(t.content),t.alias):"Array"===n.util.type(t)?t.map(n.util.encode):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1]},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++e}),t.__id},clone:function(t){var e=n.util.type(t);switch(e){case"Object":var i={};for(var s in t)t.hasOwnProperty(s)&&(i[s]=n.util.clone(t[s]));return i;case"Array":return t.map&&t.map(function(t){return n.util.clone(t)})}return t}},languages:{extend:function(t,e){var i=n.util.clone(n.languages[t]);for(var s in e)i[s]=e[s];return i},insertBefore:function(t,e,i,s){s=s||n.languages;var a=s[t];if(2==arguments.length){i=arguments[1];for(var r in i)i.hasOwnProperty(r)&&(a[r]=i[r]);return a}var o={};for(var l in a)if(a.hasOwnProperty(l)){if(l==e)for(var r in i)i.hasOwnProperty(r)&&(o[r]=i[r]);o[l]=a[l]}return n.languages.DFS(n.languages,function(e,i){i===s[t]&&e!=t&&(this[e]=o)}),s[t]=o},DFS:function(t,e,i,s){s=s||{};for(var a in t)t.hasOwnProperty(a)&&(e.call(t,a,t[a],i||a),"Object"!==n.util.type(t[a])||s[n.util.objId(t[a])]?"Array"!==n.util.type(t[a])||s[n.util.objId(t[a])]||(s[n.util.objId(t[a])]=!0,n.languages.DFS(t[a],e,a,s)):(s[n.util.objId(t[a])]=!0,n.languages.DFS(t[a],e,null,s)))}},plugins:{},highlightAll:function(t,e){var i={callback:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",i);for(var s,a=i.elements||document.querySelectorAll(i.selector),r=0;s=a[r++];)n.highlightElement(s,t===!0,i.callback)},highlightElement:function(e,s,a){for(var r,o,l=e;l&&!t.test(l.className);)l=l.parentNode;l&&(r=(l.className.match(t)||[,""])[1].toLowerCase(),o=n.languages[r]),e.className=e.className.replace(t,"").replace(/\s+/g," ")+" language-"+r,l=e.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+r);var c=e.textContent,u={element:e,language:r,grammar:o,code:c};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(u.element.textContent=u.code),void n.hooks.run("complete",u);if(n.hooks.run("before-highlight",u),s&&i.Worker){var h=new Worker(n.filename);h.onmessage=function(t){u.highlightedCode=t.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},h.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(e),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(t,e,i){var a=n.tokenize(t,e);return s.stringify(n.util.encode(a),i)},tokenize:function(t,e,i){var s=n.Token,a=[t],r=e.rest;if(r){for(var o in r)e[o]=r[o];delete e.rest}t:for(var o in e)if(e.hasOwnProperty(o)&&e[o]){var l=e[o];l="Array"===n.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],h=u.inside,d=!!u.lookbehind,g=!!u.greedy,p=0,m=u.alias;if(g&&!u.pattern.global){var v=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,v+"g")}u=u.pattern||u;for(var f=0,_=0;f<a.length;_+=a[f].length,++f){var b=a[f];if(a.length>t.length)break t;if(!(b instanceof s)){u.lastIndex=0;var w=u.exec(b),y=1;if(!w&&g&&f!=a.length-1){if(u.lastIndex=_,w=u.exec(t),!w)break;for(var k=w.index+(d?w[1].length:0),P=w.index+w[0].length,N=f,j=_,C=a.length;N<C&&j<P;++N)j+=a[N].length,k>=j&&(++f,_=j);if(a[f]instanceof s||a[N-1].greedy)continue;y=N-f,b=t.slice(_,j),w.index-=_}if(w){d&&(p=w[1].length);var k=w.index+p,w=w[0].slice(p),P=k+w.length,x=b.slice(0,k),S=b.slice(P),I=[f,y];x&&I.push(x);var A=new s(o,h?n.tokenize(w,h):w,m,w,g);I.push(A),S&&I.push(S),Array.prototype.splice.apply(a,I)}}}}}return a},hooks:{all:{},add:function(t,e){var i=n.hooks.all;i[t]=i[t]||[],i[t].push(e)},run:function(t,e){var i=n.hooks.all[t];if(i&&i.length)for(var s,a=0;s=i[a++];)s(e)}}},s=n.Token=function(t,e,i,n,s){this.type=t,this.content=e,this.alias=i,this.length=0|(n||"").length,this.greedy=!!s};if(s.stringify=function(t,e,i){if("string"==typeof t)return t;if("Array"===n.util.type(t))return t.map(function(i){return s.stringify(i,e,t)}).join("");var a={type:t.type,content:s.stringify(t.content,e,i),tag:"span",classes:["token",t.type],attributes:{},language:e,parent:i};if("comment"==a.type&&(a.attributes.spellcheck="true"),t.alias){var r="Array"===n.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(a.classes,r)}n.hooks.run("wrap",a);var o=Object.keys(a.attributes).map(function(t){return t+'="'+(a.attributes[t]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(o?" "+o:"")+">"+a.content+"</"+a.tag+">"},!i.document)return i.addEventListener?(i.addEventListener("message",function(t){var e=JSON.parse(t.data),s=e.language,a=e.code,r=e.immediateClose;i.postMessage(n.highlight(a,n.languages[s],s)),r&&i.close()},!1),i.Prism):i.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(n.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),i.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=n),"undefined"!=typeof e&&(e.Prism=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.util.clone(n.languages.css),n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript"}}),n.languages.js=n.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var i,s=e.getAttribute("data-src"),a=e,r=/\blang(?:uage)?-(?!\*)(\w+)\b/i;a&&!r.test(a.className);)a=a.parentNode;if(a&&(i=(e.className.match(r)||[,""])[1]),!i){var o=(s.match(/\.(\w+)$/)||[,""])[1];i=t[o]||o}var l=document.createElement("code");l.className="language-"+i,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",s,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,n.highlightElement(l)):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(e,i(12))},43:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row svgpker"},[i("div",{staticClass:"row ic_container"},[i("div",{attrs:{id:"vc-header-mount"}}),t._v(" "),t.editNote?i("div",{staticClass:"modal1_bg"},[i("div",{staticClass:"modal1_container col-xs-12"},[t._v("\n        edit note for: "+t._s(t.editNoteId)+"\n        "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentNote,expression:"currentNote"}],attrs:{rows:"3"},domProps:{value:t.currentNote},on:{input:function(e){e.target.composing||(t.currentNote=e.target.value)}}}),t._v(" "),i("button",{staticClass:"ic_btn",on:{click:function(e){t.updateNote(t.editNoteId,t.currentNote)}}},[t._v("update note")]),t._v(" "),i("button",{staticClass:"ic_btn",on:{click:function(e){t.cancelEdit()}}},[t._v("cancel")])])]):t._e(),t._v(" "),t.addNewNote?i("div",{staticClass:"modal1_bg"},[i("div",{staticClass:"modal1_container col-xs-12"},[t._v("\n        add note for: "+t._s(t.noteTitle)+"\n        "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],attrs:{rows:"3"},domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value)}}}),t._v(" "),i("button",{staticClass:"ic_btn",on:{click:function(e){t.addNote(t.noteTitle,t.note)}}},[t._v("save")]),t._v(" "),i("button",{staticClass:"ic_btn",on:{click:function(e){t.cancelNote()}}},[t._v("cancel")]),t._v(" "),i("hr")])]):t._e(),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"row ic_cattype"},[i("div",{staticClass:"col-sm-4"},[t._v("\n        extra\n      ")]),t._v(" "),i("div",{staticClass:"col-sm-8"},[t.fcVisible?i("span",{staticClass:"ic_filter-controls"},[t._v("\n          type:\n          "),i("img",{attrs:{src:"img/icons/unsorted/noborders_transpa1.svg"},on:{click:function(e){t.filterItems("all")}}}),t._v(" "),i("img",{attrs:{src:"img/icons/unsorted/noborders_transpa1.svg"},on:{click:function(e){t.filterItems("noborder")}}}),t._v(" "),i("img",{attrs:{src:"img/icons/unsorted/square_transpa1.svg"},on:{click:function(e){t.filterItems("square")}}}),t._v(" "),i("img",{attrs:{src:"img/icons/unsorted/circle_transpa1.svg"},on:{click:function(e){t.filterItems("circle")}}}),t._v(" "),i("img",{attrs:{src:"img/icons/unsorted/triangle_transpa1.svg"},on:{click:function(e){t.filterItems("triangle")}}}),t._v(" "),i("img",{attrs:{src:"img/icons/unsorted/rounded_transpa1.svg"},on:{click:function(e){t.filterItems("roundedborder")}}})]):t._e(),t._v(" "),i("button",{staticClass:"ic_gridlist_toggle ic_btn",on:{click:function(e){t.toggleGrid()}}},[t._v(t._s(t.gridView?"list":"grid"))])])]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"row col-sm-12",attrs:{id:"jpages_pg-holder"}},t._l(t.currentItems,function(e,n){return t.gridView?i("div",{key:e},[i("div",{staticClass:"col-xs-3 col-sm-2 ic_iconbox",attrs:{id:"ic_iconbox"}},[i("p",{staticClass:"ic_toggle"}),t._v(" "),i("img"),t._v(" "),i("div",{staticClass:"ic_tooltip"},[i("button",{staticClass:"ic_btn"},[t._v("add")]),t._v(" "),i("button",{staticClass:"ic_btn",on:{click:function(t){}}},[t._v("svg")])])])]):i("div",[i("div",{staticClass:"col-sm-12 row ic_listview"},[i("p",{staticClass:"ic_list_id"},[t._v(t._s(e.id))]),t._v(" "),i("button",{staticClass:"ic_btn",on:{click:function(i){t.removeItem(e.id)}}},[t._v("remove from favorites")]),t._v(" "),i("p",[t._v("category: "+t._s(e.category))]),t._v(" "),i("div",{staticClass:"col-sm-2"},[i("div",{staticClass:"ic_list_iconbox"},[i("img",{attrs:{src:"img/icons/"+e.category+"/"+e.src}})])]),t._v(" "),i("div",{staticClass:"col-sm-5 ic_listview_details"},[i("p",[t._v(t._s(e.description))]),t._v(" "),""!==e.notes?i("div",[i("p",{model:{value:e.notes,callback:function(t){e.notes=t},expression:"i.notes"}},[t._v(t._s(e.notes))]),t._v(" "),i("button",{staticClass:"ic_btn",on:{click:function(i){t.editNoteToggle(e.id,e.notes)}}},[t._v("update note")]),t._v(" "),i("button",{staticClass:"ic_btn",on:{click:function(i){t.deleteNote(e.id)}}},[t._v("delete note")])]):i("div",[i("button",{staticClass:"ic_btn",on:{click:function(i){t.addNoteToggle(n,e.id)}}},[t._v("add note for "+t._s(e.id))])])]),t._v(" "),i("div",{staticClass:"col-sm-5"},[i("pre",{staticClass:"line-numbers",attrs:{"data-start":"1"}},[t._v("\n              "),i("code",{staticClass:"language-markup"},[t._v("\n                "+t._s(e.svg)+"\n              ")]),t._v("\n            ")]),t._v(" "),i("button",{staticClass:"ic_btn"},[t._v("copy svg")])])])])})),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4 ic_breadcrumb"},[t._v("\n        Home > Favorites\n      ")]),t._v(" "),i("div",{staticClass:"col-sm-8"},[t._v("\n        search\n      ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-sm-12 row ic_pg-controls"},[i("div",{staticClass:"jpages_pg"},[t._v("\n        top paginator\n      ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-sm-12 row ic_pg-controls"},[i("div",{staticClass:"jpages_pg"},[t._v("\n        top paginator\n      ")])])}]}},7:function(t,e,i){var n=i(2)(i(33),i(43),null,null);t.exports=n.exports}});