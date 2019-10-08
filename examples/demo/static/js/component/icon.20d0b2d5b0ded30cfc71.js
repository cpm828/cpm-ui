webpackJsonp([6],{P8N6:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={name:"Icon",components:{codeBlock:t("O6xP").a},data:function(){return{list:[{title:"unicode渲染（ie6+）",showCode:!1,code:'<cIcon render="unicode" type="&#xe699;" color="white" size="15px" @onClick="cIconClick"></cIcon>'},{title:"font-class渲染（ie8+，默认）",showCode:!1,code:'<cIcon render="font-class" type="delete" color="white" size="2rem" @onClick="cIconClick"></cIcon>'},{title:"symbol渲染（ie9+，svg渲染）",showCode:!1,code:'<cIcon render="symbol" type="delete" color="white" size="2rem" @onClick="cIconClick"></cIcon>'}],list2:[{unicode:"&#xe65e;",font:"check"},{unicode:"&#xe660;",font:"check-filled"},{unicode:"&#xe65f;",font:"close"},{unicode:"&#xe65d;",font:"close-filled"},{unicode:"&#xe661;",font:"forbidden"},{unicode:"&#xe662;",font:"forbidden-filled"},{unicode:"&#xe666;",font:"help"},{unicode:"&#xe665;",font:"help-filled"},{unicode:"&#xe664;",font:"info"},{unicode:"&#xe663;",font:"info-filled"},{unicode:"&#xe68b;",font:"info-down"},{unicode:"&#xe68c;",font:"info-down-filled"},{unicode:"&#xe751;",font:"home"},{unicode:"&#xe750;",font:"home-filled"},{unicode:"&#xe65c;",font:"refresh"},{unicode:"&#xe63f;",font:"search"},{unicode:"&#xe72f;",font:"radio"},{unicode:"&#xe71e;",font:"radio-filled"},{unicode:"&#xe72f;",font:"radio(disabled)"},{unicode:"&#xe71f;",font:"radio-disabled"},{unicode:"&#xe720;",font:"checkbox"},{unicode:"&#xe721;",font:"checkbox-filled"},{unicode:"&#xe720;",font:"checkbox(disabled)"},{unicode:"&#xe722;",font:"checkbox-disabled"},{unicode:"&#xe66b;",font:"star"},{unicode:"&#xe66c;",font:"star-filled"},{unicode:"&#xe6e1;",font:"volume-off"},{unicode:"&#xe6e3;",font:"volume"},{unicode:"&#xe66d;",font:"arrow-up"},{unicode:"&#xe66f;",font:"arrow-down"},{unicode:"&#xe66e;",font:"arrow-left"},{unicode:"&#xe670;",font:"arrow-right"},{unicode:"&#xe677;",font:"show-less"},{unicode:"&#xe678;",font:"show-more"},{unicode:"&#xe675;",font:"page-turn-left"},{unicode:"&#xe676;",font:"page-turn-right"},{unicode:"&#xe687;",font:"benefits"},{unicode:"&#xe69e;",font:"close-simple"},{unicode:"&#xe699;",font:"delete"},{unicode:"&#xe640;",font:"edit"},{unicode:"&#xe726;",font:"jiahao2"},{unicode:"&#xe728;",font:"jiahao2-filled"},{unicode:"&#xe727;",font:"jiahao"},{unicode:"&#xe729;",font:"jianhao"},{unicode:"&#xe7a0;",font:"pullup"},{unicode:"&#xe79f;",font:"pulldown"}],iconColorArr:["#333","#4080e8","#079a07","#27c3d8","#960596"],iconColor:"#333"}},methods:{showCode:function(e,o){e.showCode?e.showCode=!1:(this.list.map(function(e){return e.showCode=!1}),this.list[o].showCode=!0)},cIconClick:function(){this.iconColor=this.iconColorArr[Math.floor(Math.random()*this.iconColorArr.length)]}}},c={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"page-wrap icon-wrap"},[t("div",{staticClass:"top"},[e._v("Icon")]),e._v(" "),t("div",{staticClass:"block"},e._l(e.list,function(o,n){return t("div",{key:n,staticClass:"block-item",class:{active:o.showCode}},[t("a",[t("span",{staticClass:"text"},[e._v(e._s(n+1)+"、"+e._s(o.title))]),e._v(" "),t("i",{on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showCode(o,n)}}},[e._v("code")])]),e._v(" "),o.showCode?t("code-block",{attrs:{type:"html",code:o.code}}):e._e()],1)}),0),e._v(" "),t("div",{staticClass:"block"},[e._m(0),e._v(" "),t("div",{attrs:{c_wrap:"flex ai-c fw-w"}},e._l(e.list2,function(o,n){return t("div",{key:n,staticStyle:{width:"25%",height:"3.2rem","margin-bottom":"10px"},attrs:{c_wrap:"flex fd-c jc-fs"}},[t("cIcon",{key:e.iconColor,attrs:{render:"unicode",type:o.unicode,color:e.iconColor,size:"1.3rem"},on:{onClick:e.cIconClick}}),e._v(" "),t("i",{attrs:{c_wrap:"fs-10 c-333"}},[e._v(e._s(o.unicode))]),e._v(" "),t("i",{attrs:{c_wrap:"fs-10 c-333"}},[e._v(e._s(o.font))]),e._v(" "),t("i",{attrs:{c_wrap:"fs-10 c-333"}},[e._v(e._s(o.symbol))])],1)}),0),e._v(" "),e._m(1),e._v(" "),e._m(2)])])},staticRenderFns:[function(){var e=this.$createElement,o=this._self._c||e;return o("div",{attrs:{c_wrap:"ta-l p-20"}},[o("p",{attrs:{c_wrap:"fs-18 c_000"}},[this._v("常用的icon如下：")]),this._v(" "),o("p",{attrs:{c_wrap:"fs-14 ta-j"}},[this._v("1. icon下方依次是unicode，font-class和symbol字段值，font-class和symbol同名，对应于组件内type；")]),this._v(" "),o("p",{attrs:{c_wrap:"fs-14 ta-j"}},[this._v("2. font-class和symbol真实字段前面有icon-，如icon-close，已在组件内统一处理。")]),this._v(" "),o("p",{attrs:{c_wrap:"fs-18 ta-l mt-20"}},[this._v("您可以点击icon随机更换颜色哦~")])])},function(){var e=this.$createElement,o=this._self._c||e;return o("div",[o("a",{staticClass:"aLink",attrs:{c_wrap:"fs-12",href:"https://cpm828.github.io/cpm_ui/fontdemo/demo_index.html"}},[this._v("以上只列举了使用频率较多的icon，更多请查看")])])},function(){var e=this.$createElement,o=this._self._c||e;return o("div",[o("a",{staticClass:"aLink",attrs:{c_wrap:"fs-12",href:"https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cIcon.md"}},[this._v("查看文档")])])}]};var i=t("VU/8")(n,c,!1,function(e){t("e+Au")},null,null);o.default=i.exports},"e+Au":function(e,o){}});
//# sourceMappingURL=icon.20d0b2d5b0ded30cfc71.js.map