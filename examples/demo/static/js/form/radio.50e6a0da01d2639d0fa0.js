webpackJsonp([4],{IBDs:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=n("mvHQ"),l=n.n(a),s={name:"Radio",components:{codeBlock:n("O6xP").a},data:function(){return{single1:!0,single2:!1,single3:!0,single4:!1,single5:!0,single6:!1,single7:!0,single8:!1,single9:!0,single10:!1,showCodeFlag:!1,code:'<cRadio v-model="single1"></cRadio>\n<cRadio v-model="single2" @onChange="onChange"></cRadio>\n<cRadio label="已选择" v-model="single3"></cRadio>\n<cRadio label="已选择" v-model="single4" @onChange="onChange"></cRadio>\n<cRadio label="已选择且修改激活色" radioColor="#f00" v-model="single5"></cRadio>\n<cRadio label="已选择且修改激活色" :radioColor="[\'#f00\', \'#ccc\']" v-model="single6" @onChange="onChange"></cRadio>\n<cRadio label="已选择且禁用disabled" disabled v-model="single7"></cRadio>\n<cRadio label="未选择且禁用disabled" disabled v-model="single8"></cRadio>\n<cRadio label="已选择且隐藏hidden" hidden v-model="single9"></cRadio>\n<cRadio label="未选择且隐藏hidden" hidden v-model="single10"></cRadio>\n'}},methods:{showCode:function(){this.showCodeFlag=!this.showCodeFlag},onChange:function(){this.$toast("被选中了")},getData:function(){var e={single1:this.single1,single2:this.single2,single3:this.single3,single4:this.single4,single5:this.single5,single6:this.single6,single7:this.single7,single8:this.single8,single9:this.single9,single10:this.single10},i="您要提交的数据为：<br>"+l()(e);this.$dialog({propsData:{animateName:"zoom-in",message:i,showCancelBtn:!1,confrimBtnText:"我知道了"},methods:{onConfirm:function(){this.remove()}}})}}},o={render:function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"page-wrap radio-wrap"},[n("div",{staticClass:"top"},[e._v("Radio")]),e._v(" "),n("div",{attrs:{c_wrap:"ta-l pl-20 pr-20"}},[e._m(0),e._v(" "),n("p",{attrs:{c_wrap:"fs-16 pb-10"}},[e._v("状态如下，cRadio单独使用时不可取消：")]),e._v(" "),n("div",{attrs:{c_wrap:"pb-10"}},[n("cRadio",{model:{value:e.single1,callback:function(i){e.single1=i},expression:"single1"}})],1),e._v(" "),n("div",{attrs:{c_wrap:"pb-10"}},[n("cRadio",{on:{onChange:e.onChange},model:{value:e.single2,callback:function(i){e.single2=i},expression:"single2"}})],1),e._v(" "),n("div",{attrs:{c_wrap:"pb-10"}},[n("cRadio",{attrs:{label:"已选择"},model:{value:e.single3,callback:function(i){e.single3=i},expression:"single3"}})],1),e._v(" "),n("div",{attrs:{c_wrap:"pb-10"}},[n("cRadio",{attrs:{label:"未选择"},on:{onChange:e.onChange},model:{value:e.single4,callback:function(i){e.single4=i},expression:"single4"}})],1),e._v(" "),n("div",{attrs:{c_wrap:"pb-10"}},[n("cRadio",{attrs:{label:"已选择且修改激活色",radioColor:"#f00"},model:{value:e.single5,callback:function(i){e.single5=i},expression:"single5"}})],1),e._v(" "),n("div",{attrs:{c_wrap:"pb-10"}},[n("cRadio",{attrs:{label:"未选择且修改激活色",radioColor:["#f00","#ccc"]},on:{onChange:e.onChange},model:{value:e.single6,callback:function(i){e.single6=i},expression:"single6"}})],1),e._v(" "),n("div",{attrs:{c_wrap:"pb-10"}},[n("cRadio",{attrs:{label:"已选择且禁用disabled",disabled:""},model:{value:e.single7,callback:function(i){e.single7=i},expression:"single7"}})],1),e._v(" "),n("div",{attrs:{c_wrap:"pb-10"}},[n("cRadio",{attrs:{label:"未选择且禁用disabled",disabled:""},model:{value:e.single8,callback:function(i){e.single8=i},expression:"single8"}})],1),e._v(" "),n("div",{attrs:{c_wrap:"pb-10"}},[n("cRadio",{attrs:{label:"已选择且隐藏hidden",hidden:""},model:{value:e.single9,callback:function(i){e.single9=i},expression:"single9"}})],1),e._v(" "),n("div",{attrs:{c_wrap:"pb-10"}},[n("cRadio",{attrs:{label:"未选择且隐藏hidden",hidden:""},model:{value:e.single10,callback:function(i){e.single10=i},expression:"single10"}})],1),e._v(" "),n("span",{staticClass:"code-btn",on:{click:function(i){return i.preventDefault(),i.stopPropagation(),e.showCode(i)}}},[e._v("code")]),e._v(" "),e.showCodeFlag?n("code-block",{attrs:{type:"html",code:e.code}}):e._e(),e._v(" "),n("div",{attrs:{c_wrap:"mt-20"}},[n("cButton",{attrs:{type:"primary",size:"small"},on:{onClick:e.getData}},[e._v("提交全部")])],1)],1),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this.$createElement,i=this._self._c||e;return i("p",{attrs:{c_wrap:"fs-14 mb-10 ta-j"}},[this._v("特别说明："),i("br"),this._v("\n      1. 考虑是移动端组件，几乎不存在使用form表单提价的情况。组件会按照form表单的思想来构建属性，但不会使用form提交。"),i("br"),this._v("\n      2. 考虑到页面设计的复杂可能性，组件本身只实现了功能，未配置相关style属性，推荐使用手写样式达到UI效果。"),i("br"),this._v("\n      3. disabled禁止修改，hidden隐藏不展示，是否需要传给后端由实际业务决定。\n    ")])},function(){var e=this.$createElement,i=this._self._c||e;return i("div",[i("a",{staticClass:"aLink",attrs:{c_wrap:"fs-12",href:"https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRadio.md"}},[this._v("查看文档")])])}]};var t=n("VU/8")(s,o,!1,function(e){n("oOhd")},"data-v-acac00c0",null);i.default=t.exports},oOhd:function(e,i){}});
//# sourceMappingURL=radio.50e6a0da01d2639d0fa0.js.map