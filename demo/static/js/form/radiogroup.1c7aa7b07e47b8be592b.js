webpackJsonp([19],{VYcu:function(n,e){},ffZz:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("mvHQ"),i=o.n(a),c={name:"RadioGroup",components:{codeBlock:o("O6xP").a},data:function(){return{config1:{options:[{label:"男",value:"male"},{label:"女",value:"female"}],activeValue:"",showCode:!1,code:"config1: {\n  options: [\n    {\n      label: '男',\n      value: 'male'\n    },\n    {\n      label: '女',\n      value: 'female'\n    }\n  ],\n  activeValue: '',\n}\n\n<cRadioGroup :options=\"config1.options\" v-model=\"config1.activeValue\"></cRadioGroup>"},config2:{options:[{label:"男",value:"male"},{label:"女",value:"female"}],activeValue:"male",showCode:!1,code:"config2: {\n  options: [\n    {\n      label: '男',\n      value: 'male'\n    },\n    {\n      label: '女',\n      value: 'female'\n    }\n  ],\n  activeValue: 'male',\n}\n\n<cRadioGroup :options=\"config2.options\" v-model=\"config2.activeValue\"></cRadioGroup>"},config3:{options:[{label:"一年级",value:1,disabled:!1},{label:"二年级",value:2,disabled:!1},{label:"三年级",value:3,disabled:!1},{label:"四年级",value:4,disabled:!0}],activeValue:1,showCode:!1,code:"config3: {\n  options: [\n    {\n      label: '一年级',\n      value: 1,\n      disabled: false\n    },\n    {\n      label: '二年级',\n      value: 2,\n      disabled: false\n    },\n    {\n      label: '三年级',\n      value: 3,\n      disabled: false\n    },\n    {\n      label: '四年级',\n      value: 4,\n      disabled: true\n    }\n  ],\n  activeValue: 1,\n}\n\n<cRadioGroup :options=\"config3.options\" v-model=\"config3.activeValue\"></cRadioGroup>"},config4:{options:[{label:"一年级",value:1,hidden:!1},{label:"二年级",value:2,hidden:!1},{label:"三年级",value:3,hidden:!1},{label:"四年级",value:4,hidden:!0}],activeValue:1,showCode:!1,code:"config4: {\n  options: [\n    {\n      label: '一年级',\n      value: 1,\n      hidden: false\n    },\n    {\n      label: '二年级',\n      value: 2,\n      hidden: false\n    },\n    {\n      label: '三年级',\n      value: 3,\n      hidden: false\n    },\n    {\n      label: '四年级',\n      value: 4,\n      hidden: true\n    }\n  ],\n  activeValue: 1,\n}\n\n<cRadioGroup :options=\"config4.options\" v-model=\"config4.activeValue\"></cRadioGroup>"},config5:{options:[{label:"选项A",value:"A"},{label:"选项B",value:"B"},{label:"选项C",value:"C"},{label:"选项D",value:"D"}],activeValue:"A",showCode:!1,code:"config5: {\n  options: [\n    {\n      label: '选项A',\n      value: 'A'\n    },\n    {\n      label: '选项B',\n      value: 'B'\n    },\n    {\n      label: '选项C',\n      value: 'C'\n    },\n    {\n      label: '选项D',\n      value: 'D'\n    }\n  ],\n  activeValue: 'A',\n}\n\n<cRadioGroup :options=\"config5.options\" v-model=\"config5.activeValue\"></cRadioGroup>\n\n.config5 {\n  .cpm-cRadio {\n    display: inline-flex;\n    margin-right: 10px;\n  }\n}"},config6:{options:[{label:"选项A",value:"A",disabled:!1,hidden:!1,radioColor:["#f00","#ccc"]},{label:"选项B",value:"B",disabled:!1,hidden:!1,radioColor:["#f00","#ccc"]},{label:"选项C",value:"C",disabled:!1,hidden:!1,radioColor:["#f00","#ccc"]},{label:"选项D",value:"D",disabled:!0,hidden:!1,radioColor:["#f00","#ccc"]},{label:"选项E",value:"E",disabled:!1,hidden:!0,radioColor:["#f00","#ccc"]}],activeValue:"A",showCode:!1,code:"config6: {\n  options: [\n    {\n      label: '选项A',\n      value: 'A',\n      disabled: false,\n      hidden: false,\n      radioColor: ['#f00', '#ccc']\n    },\n    {\n      label: '选项B',\n      value: 'B',\n      disabled: false,\n      hidden: false,\n      radioColor: ['#f00', '#ccc']\n    },\n    {\n      label: '选项C',\n      value: 'C',\n      disabled: false,\n      hidden: false,\n      radioColor: ['#f00', '#ccc']\n    },\n    {\n      label: '选项D',\n      value: 'D',\n      disabled: true,\n      hidden: false,\n      radioColor: ['#f00', '#ccc']\n    },\n    {\n      label: '选项E',\n      value: 'E',\n      disabled: false,\n      hidden: true,\n      radioColor: ['#f00', '#ccc']\n    }\n  ],\n  activeValue: 'A',\n}\n\n<cRadioGroup :options=\"config6.options\" v-model=\"config6.activeValue\"></cRadioGroup>\n\n.config6 {\n  .cpm-cRadio {\n    padding: 6px 0;\n    .iconfont {\n      font-size: 1.4rem !important;\n    }\n    .label {\n      flex: 1;\n      text-align: right;\n      font-size: 0.9rem;\n    }\n  }\n}"}}},methods:{showCode:function(n){var e=this;n.showCode?n.showCode=!1:(["config1","config2","config3","config4","config5","config6"].forEach(function(n){e[n].showCode=!1}),n.showCode=!0)},onChange1:function(n){this.$toast("您选中了"+n.value)},getData:function(){var n={sex1:this.config1.activeValue,sex2:this.config2.activeValue,grade1:this.config3.activeValue,grade2:this.config4.activeValue,answer1:this.config5.activeValue,answer2:this.config6.activeValue},e="您要提交的数据为：<br>"+i()(n);this.$dialog({propsData:{animateName:"zoom-in",message:e,showCancelBtn:!1,confrimBtnText:"我知道了"},methods:{onConfirm:function(){this.remove()}}})}}},l={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"page-wrap radiogroup-wrap"},[o("div",{staticClass:"top"},[n._v("RadioGroup单选组")]),n._v(" "),o("div",{attrs:{c_wrap:"ta-l pl-20 pr-20"}},[n._m(0),n._v(" "),o("div",{attrs:{c_wrap:"pb-10"}},[o("h3",{attrs:{c_wrap:"fs-18 mb-10"}},[n._v("1. 普通使用，性别："+n._s(n.config1.activeValue))]),n._v(" "),o("cRadioGroup",{attrs:{options:n.config1.options},on:{onChange:n.onChange1},model:{value:n.config1.activeValue,callback:function(e){n.$set(n.config1,"activeValue",e)},expression:"config1.activeValue"}}),n._v(" "),o("span",{staticClass:"code-btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),n.showCode(n.config1)}}},[n._v("code")]),n._v(" "),n.config1.showCode?o("code-block",{attrs:{code:n.config1.code}}):n._e()],1),n._v(" "),o("div",{attrs:{c_wrap:"pb-10"}},[o("h3",{attrs:{c_wrap:"fs-18 mb-10"}},[n._v("2. 默认选中，性别："+n._s(n.config2.activeValue))]),n._v(" "),o("cRadioGroup",{attrs:{options:n.config2.options},model:{value:n.config2.activeValue,callback:function(e){n.$set(n.config2,"activeValue",e)},expression:"config2.activeValue"}}),n._v(" "),o("span",{staticClass:"code-btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),n.showCode(n.config2)}}},[n._v("code")]),n._v(" "),n.config2.showCode?o("code-block",{attrs:{code:n.config2.code}}):n._e()],1),n._v(" "),o("div",{attrs:{c_wrap:"pb-10"}},[o("h3",{attrs:{c_wrap:"fs-18 mb-10"}},[n._v("3. 禁用disabled，年级："+n._s(n.config3.activeValue))]),n._v(" "),o("cRadioGroup",{attrs:{options:n.config3.options},model:{value:n.config3.activeValue,callback:function(e){n.$set(n.config3,"activeValue",e)},expression:"config3.activeValue"}}),n._v(" "),o("span",{staticClass:"code-btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),n.showCode(n.config3)}}},[n._v("code")]),n._v(" "),n.config3.showCode?o("code-block",{attrs:{code:n.config3.code}}):n._e()],1),n._v(" "),o("div",{attrs:{c_wrap:"pb-10"}},[o("h3",{attrs:{c_wrap:"fs-18 mb-10"}},[n._v("4. 隐藏hidden（四年级），年级："+n._s(n.config4.activeValue))]),n._v(" "),o("cRadioGroup",{attrs:{options:n.config4.options},model:{value:n.config4.activeValue,callback:function(e){n.$set(n.config4,"activeValue",e)},expression:"config4.activeValue"}}),n._v(" "),o("span",{staticClass:"code-btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),n.showCode(n.config4)}}},[n._v("code")]),n._v(" "),n.config4.showCode?o("code-block",{attrs:{code:n.config4.code}}):n._e()],1),n._v(" "),o("div",{staticClass:"config5",attrs:{c_wrap:"pb-10"}},[o("h3",{attrs:{c_wrap:"fs-18 mb-10"}},[n._v("5. inline-block（改写样式），年级："+n._s(n.config5.activeValue))]),n._v(" "),o("cRadioGroup",{attrs:{options:n.config5.options},model:{value:n.config5.activeValue,callback:function(e){n.$set(n.config5,"activeValue",e)},expression:"config5.activeValue"}}),n._v(" "),o("span",{staticClass:"code-btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),n.showCode(n.config5)}}},[n._v("code")]),n._v(" "),n.config5.showCode?o("code-block",{attrs:{code:n.config5.code}}):n._e()],1),n._v(" "),o("div",{staticClass:"config6",attrs:{c_wrap:"pb-10"}},[o("h3",{attrs:{c_wrap:"fs-18 mb-10"}},[n._v("6. 全部参数（改写样式），选择答案："+n._s(n.config6.activeValue))]),n._v(" "),o("cRadioGroup",{attrs:{options:n.config6.options},model:{value:n.config6.activeValue,callback:function(e){n.$set(n.config6,"activeValue",e)},expression:"config6.activeValue"}}),n._v(" "),o("span",{staticClass:"code-btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),n.showCode(n.config6)}}},[n._v("code")]),n._v(" "),n.config6.showCode?o("code-block",{attrs:{code:n.config6.code}}):n._e()],1),n._v(" "),o("div",{attrs:{c_wrap:"mt-20"}},[o("cButton",{attrs:{type:"primary",size:"small"},on:{onClick:n.getData}},[n._v("提交全部")])],1)]),n._v(" "),n._m(1)])},staticRenderFns:[function(){var n=this.$createElement,e=this._self._c||n;return e("p",{attrs:{c_wrap:"fs-14 mb-10 ta-j"}},[this._v("\n      提示："),e("br"),this._v("\n      1. 考虑是移动端组件，几乎不存在使用form表单提价的情况。组件会按照form表单的思想来构建属性，但不会使用form提交。"),e("br"),this._v("\n      2. 考虑到页面设计的复杂可能性，组件本身只实现了功能，未配置相关style属性，推荐使用手写样式达到UI效果，如案例5、案例6。"),e("br"),this._v("\n      3. 对于hidden属性，设计之初的目的是为了过滤掉某些不需要展示的项，hidden属性为true时隐藏组件。\n    ")])},function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("a",{staticClass:"aLink",attrs:{c_wrap:"fs-12",href:"https://cpm828.github.io/cpm-ui-docs/form/cRadioGroup.html"}},[this._v("查看文档")])])}]};var t=o("VU/8")(c,l,!1,function(n){o("VYcu")},null,null);e.default=t.exports}});
//# sourceMappingURL=radiogroup.1c7aa7b07e47b8be592b.js.map