webpackJsonp([17],{G1Xs:function(e,n){},"Zdt/":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={name:"Search",components:{codeBlock:a("O6xP").a},data:function(){return{config1:{name:"tel",value:"",type:"tel",maxlength:11,placeholder:"请输入手机号",button:"搜索"},config2:{name:"text",value:"",placeholder:"请输入"},config3:{name:"address",value:"",placeholder:"",label:"地址"},config4:{name:"address",value:"",placeholder:"",label:"地址",button:"搜索"},config5:{name:"address",value:"",placeholder:"请输入您的地址",label:"地址",button:"搜索"},config6:{name:"tel",value:"",type:"tel",placeholder:"请输入您的电话",label:"电话",maxlength:11,button:"搜索"},config7:{name:"address",value:"",placeholder:"请输入您的地址",label:"地址",button:"搜索"},showCodeFlag:!1,code:"\n<cSearch :config=\"config7\" v-model=\"config7.value\" @onFocus=\"onFocus\" @onBlur=\"onBlur\" @onSearch=\"onSearch\"></cSearch>\n\nconfig7: {\n  name: 'address',\n  value: '',\n  placeholder: '请输入您的地址',\n  label: '地址',\n  button: '搜索'\n}\n"}},created:function(){},mounted:function(){},methods:{showCode:function(){this.showCodeFlag=!this.showCodeFlag},onFocus:function(){console.log("onFocus")},onBlur:function(){console.log("onBlur")},onInput:function(e,n){console.log("onInput",e,n)},onChange:function(e,n){console.log("onChange",e,n)},onClear:function(e){console.log("onClear")},onSearch:function(e){this.$toast("搜索："+e),console.log("onSearch")}}},c={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"page-wrap search-wrap"},[a("div",{attrs:{c_wrap:"mb-20"}},[a("cSearch",{attrs:{config:e.config1},model:{value:e.config1.value,callback:function(n){e.$set(e.config1,"value",n)},expression:"config1.value"}})],1),e._v(" "),a("div",{staticClass:"top"},[e._v("Search搜索")]),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("p",{attrs:{c_wrap:"fs-16 ta-l pl-20 mb-10"}},[e._v("默认")]),e._v(" "),a("cSearch",{attrs:{config:e.config2},model:{value:e.config2.value,callback:function(n){e.$set(e.config2,"value",n)},expression:"config2.value"}})],1),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("p",{attrs:{c_wrap:"fs-16 ta-l pl-20 mb-10"}},[e._v("左侧带label")]),e._v(" "),a("cSearch",{attrs:{config:e.config3},model:{value:e.config3.value,callback:function(n){e.$set(e.config3,"value",n)},expression:"config3.value"}})],1),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("p",{attrs:{c_wrap:"fs-16 ta-l pl-20 mb-10"}},[e._v("右侧带按钮")]),e._v(" "),a("cSearch",{attrs:{config:e.config4},model:{value:e.config4.value,callback:function(n){e.$set(e.config4,"value",n)},expression:"config4.value"}})],1),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("p",{attrs:{c_wrap:"fs-16 ta-l pl-20 mb-10"}},[e._v("提示文案")]),e._v(" "),a("cSearch",{attrs:{config:e.config5},model:{value:e.config5.value,callback:function(n){e.$set(e.config5,"value",n)},expression:"config5.value"}})],1),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("p",{attrs:{c_wrap:"fs-16 ta-l pl-20 mb-10"}},[e._v("键盘类型")]),e._v(" "),a("cSearch",{attrs:{config:e.config6},model:{value:e.config6.value,callback:function(n){e.$set(e.config6,"value",n)},expression:"config6.value"}})],1),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("p",{attrs:{c_wrap:"fs-16 ta-l pl-20 mb-10"}},[e._v("绑定触发事件")]),e._v(" "),a("cSearch",{attrs:{config:e.config7},on:{onFocus:e.onFocus,onBlur:e.onBlur,onInput:e.onInput,onChange:e.onChange,onSearch:e.onSearch},model:{value:e.config7.value,callback:function(n){e.$set(e.config7,"value",n)},expression:"config7.value"}})],1),e._v(" "),a("span",{staticClass:"code-btn",on:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.showCode(n)}}},[e._v("code")]),e._v(" "),e.showCodeFlag?a("code-block",{attrs:{type:"html",code:e.code}}):e._e(),e._v(" "),e._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("a",{staticClass:"aLink",attrs:{c_wrap:"fs-12",href:"https://cpm828.github.io/cpm-ui-docs/basic/cSearch.html"}},[this._v("查看文档")])])}]};var t=a("VU/8")(o,c,!1,function(e){a("G1Xs")},"data-v-18d7c3a7",null);n.default=t.exports}});
//# sourceMappingURL=search.855d2590aaba3fa00c8d.js.map