!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,function(){return function(n){var i={};function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s="+Cbf")}({"+Cbf":function(t,e,n){"use strict";n.r(e);var i=function(t,e,n,i,o,r,s,l){var a,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=a):o&&(a=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(d.functional){d._injectStyles=a;var u=d.render;d.render=function(t,e){return a.call(e),u(t,e)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,a):[a]}return{exports:t,options:d}}({name:"vueScrollHelper",props:{mode:{type:String,default:"auto"},limit:{type:Number,default:0},pageStart:{type:Number,default:0},threshold:{type:Number,default:250},isOver:{type:Boolean,default:!1},isAutoLoad:{type:Boolean,default:!1},isInWindow:{type:Boolean,default:!1},onLoadNextFn:{type:Function,default:function(){},required:!0},wrapStyle:{type:Object},wrapClass:{default:""},isLoading:{default:"null"}},watch:{isLoading:function(){this.loading=this.isLoading}},data:function(){return{loading:!0,isNextEnd:!1,page:this.isAutoLoad?0:this.pageStart,autoLoaded:!1}},computed:{scrollEl:function(){return this.isInWindow?window:this.$refs.wrap},isEnd:function(){return this.isOver||this.isNextEnd}},components:{},created:function(){this.onAutoLoad()},beforeUpdate:function(){},beforeDestroy:function(){this.detachScrollEvent()},mounted:function(){this.attachScrollEvent()},methods:{isInner:function(){return"null"===this.isLoading},fnNext:function(t){t&&(this.isNextEnd=!0),this.isInner()&&(this.loading=!1)},onAutoLoad:function(){this.isAutoLoad&&!this.autoLoaded&&(this.autoLoaded=!0,this.loading=!0,this.onLoadNextFn(this.page,this.fnNext))},onClickLoadMore:function(){this.onLoadNextFn(this.page+=1,this.fnNext),this.loading=!0},calcTop:function(t){return t?t.offsetTop+this.calcTop(t.offsetParent):0},scrollHandler:function(){var t,e,n=this.$refs.content;if(this.isInWindow){var i=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;t=this.calcTop(n)+n.offsetHeight-i-window.innerHeight}else t=n.scrollHeight-n.parentNode.scrollTop-n.parentNode.clientHeight;t<Number(this.threshold)&&("manual"===this.mode?this.isInner()&&(this.loading=!1):(e=!this.limit||this.page+1<this.limit,!this.isEnd&&!this.loading&&(this.page+=1),e&&!this.isEnd&&!this.loading&&this.onLoadNextFn(this.page,this.fnNext),this.isInner()&&(this.loading=!0)))},attachScrollEvent:function(){var t=this.scrollHandler;this.scrollEl.addEventListener("scroll",t,!1),this.scrollEl.addEventListener("resize",t,!1)},detachScrollEvent:function(){var t=this.scrollHandler;this.scrollEl.removeEventListener("scroll",t,!1),this.scrollEl.removeEventListener("resize",t,!1)},reset:function(){this.page=0,this.isNextEnd=!1}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrap",class:t.wrapClass,staticStyle:{"overflow-x":"hidden","overflow-y":"scroll","-webkit-overflow-scrolling":"touch"},style:t.wrapStyle},[n("div",{ref:"content",staticClass:"content"},[t._t("list")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading&&!t.isEnd&&(!t.limit||t.page<t.limit),expression:"loading && !isEnd && (!limit || page<limit)"}]},[t._t("loading")],2),t._v(" "),t.loading||t.isEnd||t.limit&&!(t.page<t.limit)||"manual"!==t.mode?t._e():n("div",{on:{click:t.onClickLoadMore}},[t._t("loadMore")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isEnd||t.limit&&t.page===t.limit,expression:"isEnd || (limit && page===limit)"}]},[t._t("noMore")],2)])},[],!1,null,null,null);i.options.__file="index.vue";e.default=i.exports}})});