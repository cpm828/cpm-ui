webpackJsonp([16],{"4R+b":function(t,c){},no8B:function(t,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var s={name:"",components:{codeBlock:e("O6xP").a},data:function(){return{container:null,showCodeFlag:!1,code:'\x3c!-- 未设置height:100%时 --\x3e\n<cSticky>\n  <div class="tab">header1</div>\n</cSticky>\n\n\x3c!-- 设置height:100%时 --\x3e\n<cSticky scrollEl=".sticky-wrap">\n  <div class="tab">header2</div>\n</cSticky>'}},created:function(){},mounted:function(){this.container=this.$refs.stickyWrap},methods:{showCode:function(){this.showCodeFlag=!this.showCodeFlag}}},i={render:function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{ref:"stickyWrap",staticClass:"page-wrap sticky-wrap",attrs:{c_wrap:"scroll-y",id:"stickyWrap"}},[e("div",{staticClass:"top"},[t._v("sticky吸顶")]),t._v(" "),t._m(0),t._v(" "),e("cSticky",{attrs:{container:t.container}},[e("div",{staticClass:"tab",attrs:{c_wrap:"flex jc-c ai-c"}},[t._v("header1，吸顶")])]),t._v(" "),e("p",[t._v("1")]),t._v(" "),e("p",[t._v("2")]),t._v(" "),e("p",[t._v("3")]),t._v(" "),e("p",[t._v("4")]),t._v(" "),e("p",[t._v("5")]),t._v(" "),e("cSticky",{attrs:{container:"#stickyWrap",top:100}},[e("div",{staticClass:"tab2",attrs:{c_wrap:"flex jc-c ai-c"}},[t._v("header2，距离顶部100px处吸顶")])]),t._v(" "),e("p",[t._v("1")]),t._v(" "),e("p",[t._v("2")]),t._v(" "),e("p",[t._v("3")]),t._v(" "),e("p",[t._v("4")]),t._v(" "),e("p",[t._v("5")]),t._v(" "),e("span",{staticClass:"code-btn",on:{click:function(c){return c.preventDefault(),c.stopPropagation(),t.showCode(c)}}},[t._v("code")]),t._v(" "),t.showCodeFlag?e("code-block",{attrs:{type:"html",code:t.code}}):t._e(),t._v(" "),t._l(50,function(c){return e("div",{key:c,staticClass:"item"},[t._v(t._s(c))])}),t._v(" "),t._m(1)],2)},staticRenderFns:[function(){var t=this.$createElement,c=this._self._c||t;return c("p",{attrs:{c_wrap:"fs-14 mb-20 p-20 ta-j"}},[this._v("\n    提示："),c("br"),this._v("\n    1. 实现原理：比较getBoundingClientRect().top值和传入的top值（默认为0）。"),c("br"),this._v("\n    2. 监听原理：iOS部分浏览器或webview（UC浏览器、今日头条）在监听scroll或touchend手指离开后产生的惯性滚动时均无法获取scroll各项值，停止滚动后才能获取。position:sticky也会受到惯性滚动的影响。除非禁用系统scroll，使用类似IScroll等三方插件来模拟滚动。本插件暂不考虑三方插件解决。"),c("br"),this._v("\n    3. 最终处理：在支持sticky属性时使用sticky来自动吸附，不支持监听scroll来计算吸附。"),c("br"),this._v("\n    4. 属性传参：当前页面设置height:100%时，传入container表示页面滚动dom，可传id、class或dom元素。top属性表示吸顶距离。\n  ")])},function(){var t=this.$createElement,c=this._self._c||t;return c("div",[c("a",{staticClass:"aLink",attrs:{c_wrap:"fs-12",href:"https://github.com/cpm828/cpm-ui/tree/gh-pages/document/Sticky.md"}},[this._v("查看文档")])])}]};var a=e("VU/8")(s,i,!1,function(t){e("4R+b")},"data-v-1a427468",null);c.default=a.exports}});
//# sourceMappingURL=sticky.b76987d266b5084377f9.js.map