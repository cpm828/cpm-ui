webpackJsonp([26],{ifu0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={name:"ActionSheet",components:{codeBlock:t("O6xP").a},data:function(){return{list:[{title:"简单选择",showCode:!1,code:"showActionSheet1 (item) {\n  const self = this\n  this.$actionSheet({\n    propsData: {\n      showCancelBtn: false,\n      actionSheetList: [\n        {\n          key: '1',\n          value: '拍照'\n        },\n        {\n          key: '2',\n          value: '相册'\n        }\n      ],\n      activeSheet: item._choiceInfo && item._choiceInfo.key\n    },\n    mounted () {\n      this.$on('onChoiceItem', (actionSheet) => {\n        self.$set(item, '_choiceInfo', actionSheet)\n      })\n    }\n  })\n}"},{title:"带提示文案",showCode:!1,code:"showActionSheet2 (item) {\n  const self = this\n  this.$actionSheet({\n    propsData: {\n      actionSheetList: [\n        {\n          key: 'beijing',\n          value: '北京'\n        },\n        {\n          key: 'shanghai',\n          value: '上海'\n        },\n        {\n          key: 'guangzhou',\n          value: '广州'\n        },\n        {\n          key: 'shenzheng',\n          value: '深圳'\n        }\n      ],\n      actionSheetTip: '你最喜欢哪个城市',\n      activeSheet: item._choiceInfo && item._choiceInfo.key\n    },\n    mounted () {\n      this.$on('onChoiceItem', (actionSheet) => {\n        self.$set(item, '_choiceInfo', actionSheet)\n      })\n    }\n  })\n}"},{title:"自定义取消文案",showCode:!1,code:"showActionSheet3 (item) {\n  const self = this\n  this.$actionSheet({\n    propsData: {\n      showCancelBtn: false,\n      actionSheetList: [\n        {\n          key: '1',\n          value: '是'\n        },\n        {\n          key: '0',\n          value: '否'\n        }\n      ],\n      actionSheetCancelText: '继续关注',\n      activeSheet: item._choiceInfo && item._choiceInfo.key\n    },\n    mounted () {\n      this.$on('onChoiceItem', (actionSheet) => {\n        self.$set(item, '_choiceInfo', actionSheet)\n      })\n    }\n  })\n}"},{title:"每个actionSheet颜色都不一致",showCode:!1,code:"showActionSheet4 (item) {\n  const self = this\n  this.$actionSheet({\n    propsData: {\n      showCancelBtn: false,\n      actionSheetList: [\n        {\n          key: '1',\n          value: '拍照',\n          _actionsheetItemStyle: {\n            color: 'red'\n          }\n        },\n        {\n          key: '2',\n          value: '相册',\n          _actionsheetItemStyle: {\n            color: 'green'\n          }\n        }\n      ],\n      actionSheetCancelText: '继续关注',\n      activeSheet: item._choiceInfo && item._choiceInfo.key\n    },\n    mounted () {\n      this.$on('onChoiceItem', (actionSheet) => {\n        self.$set(item, '_choiceInfo', actionSheet)\n      })\n    }\n  })\n}"},{title:"弹出后2s自动关闭",showCode:!1,code:"showActionSheet5 (item) {\n  // 模拟手动调用消失\n  let actionSheet = this.$actionSheet({\n    propsData: {\n      actionSheetList: [\n        {\n          key: 'beijing',\n          value: '北京'\n        },\n        {\n          key: 'shanghai',\n          value: '上海'\n        }\n      ],\n      activeSheet: 'beijing'\n    }\n  })\n  setTimeout(() => {\n    actionSheet.remove()\n  }, 2000)\n}"},{title:"分类选择",showCode:!1,code:"showActionSheet6 (item) {\n  const self = this\n  this.$actionSheet({\n    propsData: {\n      actionSheetList: [\n        {\n          key: 'beijing',\n          value: '北京',\n          _actionsheetItemStyle: {\n            color: 'red'\n          }\n        },\n        {\n          key: 'shanghai',\n          value: '上海',\n          _actionsheetItemStyle: {\n            color: 'orange'\n          }\n        },\n        {\n          key: 'guangzhou',\n          value: '广州',\n          _actionsheetItemStyle: {\n            color: 'yellow'\n          }\n        },\n        {\n          key: 'shenzheng',\n          value: '深圳',\n          _actionsheetItemStyle: {\n            color: 'green'\n          }\n        }\n      ],\n      activeSheet: item._choiceInfo && item._choiceInfo.key, // 默认勾选项\n    },\n    mounted () {\n      this.$on('onChoiceItem', (actionSheet) => {\n        self.$set(item, '_choiceInfo', actionSheet)\n      })\n    }\n  })\n}"},{title:"所有参数",showCode:!1,code:"showActionSheet7 (item) {\n  const self = this\n  this.$actionSheet({\n    propsData: {\n      actionSheetList: [\n        {\n          key: 'beijing',\n          value: '北京',\n          _actionsheetItemStyle: {\n            color: 'red'\n          }\n        },\n        {\n          key: 'shanghai',\n          value: '上海',\n          _actionsheetItemStyle: {\n            color: 'orange'\n          }\n        },\n        {\n          key: 'guangzhou',\n          value: '广州',\n          _actionsheetItemStyle: {\n            color: 'yellow'\n          }\n        },\n        {\n          key: 'shenzheng',\n          value: '深圳',\n          _actionsheetItemStyle: {\n            color: 'green'\n          }\n        }\n      ],\n      activeSheet: item._choiceInfo && item._choiceInfo.key, // 默认勾选项\n      showCancelBtn: true, // 是否显示取消按钮\n      cliperStyleObj: {}, // 蒙层样式\n      actionSheetWrapStyle: {}, // 下拉菜单样式\n      actionSheetItemStyle: {}, // 下拉菜单选项样式\n      actionSheetCancelStyle: {} // 取消那妞样式\n    },\n    mounted () {\n      this.$on('onChoiceItem', (actionSheet) => {\n        self.$set(item, '_choiceInfo', actionSheet)\n      })\n    },\n    methods: {\n      // 也可以使用methods覆盖的方式来捕获事件\n      // onChoiceItem (actionSheet) {\n      //   console.log(2, actionSheet)\n      //   this.remove()\n      // }\n    }\n  })\n}"}]}},methods:{showCode:function(e,n){e.showCode?e.showCode=!1:(this.list.map(function(e){return e.showCode=!1}),this.list[n].showCode=!0)},showActionSheet:function(e,n){this["showActionSheet"+(n+1)](e)},showActionSheet1:function(e){var n=this;this.$actionSheet({propsData:{actionSheetList:[{key:"1",value:"拍照"},{key:"2",value:"相册"}],activeSheet:e._choiceInfo&&e._choiceInfo.key},mounted:function(){this.$on("onChoiceItem",function(t){n.$set(e,"_choiceInfo",t)})}})},showActionSheet2:function(e){var n=this;this.$actionSheet({propsData:{actionSheetList:[{key:"beijing",value:"北京"},{key:"shanghai",value:"上海"},{key:"guangzhou",value:"广州"},{key:"shenzheng",value:"深圳"}],actionSheetTip:"你最喜欢哪个城市",activeSheet:e._choiceInfo&&e._choiceInfo.key},mounted:function(){this.$on("onChoiceItem",function(t){n.$set(e,"_choiceInfo",t)})}})},showActionSheet3:function(e){var n=this;this.$actionSheet({propsData:{actionSheetList:[{key:"1",value:"不再关注"}],actionSheetItemStyle:{color:"#d45048"},actionSheetTip:"不再关注“cpm-ui”，你将不再收到其下发的消息",actionSheetCancelText:"继续关注",activeSheet:e._choiceInfo&&e._choiceInfo.key},mounted:function(){this.$on("onChoiceItem",function(t){n.$set(e,"_choiceInfo",t)})}})},showActionSheet4:function(e){var n=this;this.$actionSheet({propsData:{actionSheetList:[{key:"1",value:"拍照",_actionsheetItemStyle:{color:"red"}},{key:"2",value:"相册",_actionsheetItemStyle:{color:"green"}}],actionSheetTip:"不再关注“cpm-ui”，你将不再收到其下发的消息",activeSheet:e._choiceInfo&&e._choiceInfo.key},mounted:function(){this.$on("onChoiceItem",function(t){n.$set(e,"_choiceInfo",t)})}})},showActionSheet5:function(e){var n=this.$actionSheet({propsData:{actionSheetList:[{key:"beijing",value:"北京"},{key:"shanghai",value:"上海"}],activeSheet:"beijing"}});setTimeout(function(){n.remove()},2e3)},showActionSheet6:function(e){var n=this;this.$actionSheet({propsData:{actionSheetList:[{key:0,value:"发送给朋友"},{key:1,value:"收藏"},{key:2,value:"保存图片"}],actionSheetList2:[{key:3,value:"识别图中二维码 >"}],activeSheet:e._choiceInfo&&e._choiceInfo.key},mounted:function(){this.$on("onChoiceItem",function(t){n.$set(e,"_choiceInfo",t)})}})},showActionSheet7:function(e){var n=this;this.$actionSheet({propsData:{actionSheetList:[{key:"beijing",value:"北京",_actionsheetItemStyle:{color:"red"}},{key:"shanghai",value:"上海",_actionsheetItemStyle:{color:"orange"}},{key:"guangzhou",value:"广州",_actionsheetItemStyle:{color:"yellow"}},{key:"shenzheng",value:"深圳",_actionsheetItemStyle:{color:"green"}}],activeSheet:e._choiceInfo&&e._choiceInfo.key,actionSheetTip:"不再关注“cpm-ui”，你将不再收到其下发的消息",actionSheetCancelText:"取消",showCancelBtn:!0,cliperStyleObj:{},actionSheetWrapStyle:{},actionSheetItemStyle:{},actionSheetCancelStyle:{}},mounted:function(){this.$on("onChoiceItem",function(t){console.log(1,t),n.$set(e,"_choiceInfo",t)})},methods:{onChoiceItem:function(e){console.log(2,e),this.remove()}}})}}},i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page-wrap actionsheet-wrap"},[t("div",{staticClass:"top"},[e._v("ActionSheet弹出选择")]),e._v(" "),t("div",{staticClass:"block"},e._l(e.list,function(n,o){return t("div",{key:o,staticClass:"block-item",class:{active:n.showCode}},[t("a",{on:{click:function(t){return t.preventDefault(),e.showActionSheet(n,o)}}},[t("span",{staticClass:"text"},[e._v(e._s(o+1)+"、"+e._s(n.title))]),e._v(" "),t("i",{on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showCode(n,o)}}},[e._v("code")]),e._v(" "),t("span",{staticClass:"tip"},[e._v(e._s(n._choiceInfo&&n._choiceInfo.value))])]),e._v(" "),n.showCode?t("code-block",{attrs:{code:n.code}}):e._e()],1)}),0),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("a",{staticClass:"aLink",attrs:{c_wrap:"fs-12",href:"https://cpm828.github.io/cpm-ui-docs/feedback/ActionSheet.html"}},[this._v("查看文档")])])}]},c=t("VU/8")(o,i,!1,null,null,null);n.default=c.exports}});
//# sourceMappingURL=actionsheet.ee45bc8ae76dcd6dcd95.js.map