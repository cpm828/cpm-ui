webpackJsonp([6],{"/cCW":function(a,c){},O6fW:function(a,c,t){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var l={name:"Swtich",components:{codeBlock:t("O6xP").a},data:function(){return{flag1:!0,flag2:!0,flag3:!0,flag4:!0,flag5:!1,flag6:!0,flag7:!1,showCodeFlag:!1,code:'<cSwitch v-model="flag1"></cSwitch>\n\n<cSwitch v-model="flag2" color="red"></cSwitch>\n<cSwitch v-model="flag3" color="green"></cSwitch>\n\n<cSwitch v-model="flag4">{{flag4 ? \'开\' : \'关\'}}</cSwitch>\n<cSwitch v-model="flag5">{{flag5 ? \'on\' : \'off\'}}</cSwitch>\n\n<cSwitch v-model="flag6" disabled></cSwitch>\n<cSwitch v-model="flag7" disabled></cSwitch>'}},created:function(){},mounted:function(){},methods:{showCode:function(){this.showCodeFlag=!this.showCodeFlag}}},e={render:function(){var a=this,c=a.$createElement,t=a._self._c||c;return t("div",{staticClass:"page-wrap switch-wrap"},[t("div",{staticClass:"top"},[a._v("Switch开关")]),a._v(" "),t("div",{attrs:{c_wrap:"flex fd-c ai-fs mb-20"}},[t("p",{attrs:{c_wrap:"fs-16"}},[a._v("默认蓝色：")]),a._v(" "),t("cSwitch",{model:{value:a.flag1,callback:function(c){a.flag1=c},expression:"flag1"}})],1),a._v(" "),t("div",{attrs:{c_wrap:"flex fd-c ai-fs mb-20"}},[t("p",{attrs:{c_wrap:"fs-16"}},[a._v("自定义颜色：")]),a._v(" "),t("cSwitch",{attrs:{color:"red"},model:{value:a.flag2,callback:function(c){a.flag2=c},expression:"flag2"}}),a._v(" "),t("cSwitch",{attrs:{color:"green"},model:{value:a.flag3,callback:function(c){a.flag3=c},expression:"flag3"}})],1),a._v(" "),t("div",{attrs:{c_wrap:"flex fd-c ai-fs mb-20"}},[t("p",{attrs:{c_wrap:"fs-16"}},[a._v("带插槽显示状态（自动加宽10px）：")]),a._v(" "),t("cSwitch",{model:{value:a.flag4,callback:function(c){a.flag4=c},expression:"flag4"}},[a._v(a._s(a.flag4?"开":"关"))]),a._v(" "),t("cSwitch",{model:{value:a.flag5,callback:function(c){a.flag5=c},expression:"flag5"}},[a._v(a._s(a.flag5?"on":"off"))])],1),a._v(" "),t("div",{attrs:{c_wrap:"flex fd-c ai-fs mb-20"}},[t("p",{attrs:{c_wrap:"fs-16"}},[a._v("禁用")]),a._v(" "),t("cSwitch",{attrs:{disabled:""},model:{value:a.flag6,callback:function(c){a.flag6=c},expression:"flag6"}}),a._v(" "),t("cSwitch",{attrs:{disabled:""},model:{value:a.flag7,callback:function(c){a.flag7=c},expression:"flag7"}})],1),a._v(" "),t("span",{staticClass:"code-btn",on:{click:function(c){return c.preventDefault(),c.stopPropagation(),a.showCode(c)}}},[a._v("code")]),a._v(" "),a.showCodeFlag?t("code-block",{attrs:{type:"html",code:a.code}}):a._e(),a._v(" "),a._m(0)],1)},staticRenderFns:[function(){var a=this.$createElement,c=this._self._c||a;return c("div",[c("a",{staticClass:"aLink",attrs:{c_wrap:"fs-12",href:"https://github.com/cpm828/cpm-ui/tree/gh-pages/document/cSwitch.md"}},[this._v("查看文档")])])}]};var o=t("VU/8")(l,e,!1,function(a){t("/cCW")},null,null);c.default=o.exports}});
//# sourceMappingURL=switch.31a7b5c91a605afc082e.js.map