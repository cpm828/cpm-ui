webpackJsonp([6],{Ghrv:function(e,t){},lN8y:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"Rate",components:{codeBlock:a("O6xP").a},data:function(){return{rateConfig1:{value:0,showCode:!1,code:'<cRate @onChange="onChange" v-model="rateConfig1.value"></cRate>\n\nrateConfig1: {\n  value: 0\n}'},rateConfig2:{type:"heart",value:1,showCode:!1,code:'<cRate :type="rateConfig2.type" v-model="rateConfig2.value"></cRate>\n\nrateConfig2: {\n  type: \'heart\',\n  value: 1\n}'},rateConfig3:{type:"smile",value:2,showCode:!1,code:'<cRate :type="rateConfig3.type" v-model="rateConfig3.value"></cRate>\n\nrateConfig3: {\n  type: \'smile\',\n  value: 2\n}'},rateConfig4:{value:0,max:6,texts:["极差","失望","一般","满意","惊喜","无敌"],showCode:!1,code:"<cRate :type=\"rateConfig4.type\" :max=\"rateConfig4.max\" v-model=\"rateConfig4.value\">\n  <span style=\"font-size:0.8rem;margin-left:0.3rem\">\n    {{rateConfig4.value ? rateConfig4.texts[rateConfig4.value - 1] : ''}}\n  </span>\n</cRate>\n\nrateConfig4: {\n  value: 0,\n  max: 6,\n  texts: ['极差', '失望', '一般', '满意', '惊喜', '无敌']\n}"},rateConfig5:{type:"smile",value:0,max:6,texts:["极差","失望","一般","满意","惊喜","无敌"],threshold:[2,5],showCode:!1,code:"<cRate :type=\"rateConfig5.type\" :max=\"rateConfig5.max\" :threshold=\"rateConfig5.threshold\" v-model=\"rateConfig5.value\">\n  <span style=\"font-size:0.8rem;margin-left:0.3rem\">\n    {{rateConfig5.value ? rateConfig5.texts[rateConfig5.value - 1] : ''}}\n  </span>\n</cRate>\n\nrateConfig5: {\n  type: 'smile',\n  value: 0,\n  max: 6,\n  texts: ['极差', '失望', '一般', '满意', '惊喜', '无敌'],\n  threshold: [2, 5]\n}"},rateConfig6:{type:"smile",value:0,max:6,texts:["极差","失望","一般","满意","惊喜","无敌"],threshold:[2,5],voidColor:"#ddd",colors:["green","blue","red"],showCode:!1,code:"<cRate :type=\"rateConfig6.type\" :max=\"rateConfig6.max\" :threshold=\"rateConfig6.threshold\" :voidColor=\"rateConfig6.voidColor\" :colors=\"rateConfig6.colors\" v-model=\"rateConfig6.value\">\n  <span style=\"font-size:0.8rem;margin-left:0.3rem\">\n    {{rateConfig6.value ? rateConfig6.texts[rateConfig6.value - 1] : ''}}\n  </span>\n</cRate>\n  \nrateConfig6: {\n  type: 'smile',\n  value: 0,\n  max: 6,\n  texts: ['极差', '失望', '一般', '满意', '惊喜', '无敌'],\n  threshold: [2, 5],\n  voidColor: '#ddd',\n  colors: ['green', 'blue', 'red']\n}"},rateConfig7:{type:"smile",value:4,disabled:!0,disabledVoidColor:"#ddd",showCode:!1,code:'<cRate :type="rateConfig7.type" :disabled="rateConfig7.disabled" :disabledVoidColor="rateConfig7.disabledVoidColor" v-model="rateConfig7.value">\n</cRate>\n  \nrateConfig7: {\n  type: \'smile\',\n  value: 4,\n  disabled: true,\n  disabledVoidColor: \'#ddd\'\n}'}}},created:function(){},mounted:function(){},methods:{showCode:function(e){if(this["rateConfig"+e].showCode)this["rateConfig"+e].showCode=!1;else{for(var t=1;t<=7;t++)this["rateConfig"+t].showCode=!1;this["rateConfig"+e].showCode=!0}},onChange:function(e){this.$toast("您给的评分为："+e)}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-wrap rate-wrap"},[a("div",{staticClass:"top"},[e._v("Rate评分")]),e._v(" "),a("div",{attrs:{c_wrap:"pl-20 pr-20"}},[a("div",{attrs:{c_wrap:"mb-20"}},[a("div",{attrs:{c_wrap:"flex fd ai-c"}},[a("span",{attrs:{c_wrap:"fs-14"}},[e._v("默认 星星：")]),e._v(" "),a("cRate",{on:{onChange:e.onChange},model:{value:e.rateConfig1.value,callback:function(t){e.$set(e.rateConfig1,"value",t)},expression:"rateConfig1.value"}})],1),e._v(" "),a("span",{staticClass:"code-btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showCode(1)}}},[e._v("code")]),e._v(" "),e.rateConfig1.showCode?a("code-block",{attrs:{type:"html",code:e.rateConfig1.code}}):e._e()],1),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("div",{attrs:{c_wrap:"flex fd ai-c"}},[a("span",{attrs:{c_wrap:"fs-14"}},[e._v("类型2 心形：")]),e._v(" "),a("cRate",{attrs:{type:e.rateConfig2.type},model:{value:e.rateConfig2.value,callback:function(t){e.$set(e.rateConfig2,"value",t)},expression:"rateConfig2.value"}})],1),e._v(" "),a("span",{staticClass:"code-btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showCode(2)}}},[e._v("code")]),e._v(" "),e.rateConfig2.showCode?a("code-block",{attrs:{type:"html",code:e.rateConfig2.code}}):e._e()],1),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("div",{attrs:{c_wrap:"flex fd ai-c"}},[a("span",{attrs:{c_wrap:"fs-14"}},[e._v("类型3 笑脸：")]),e._v(" "),a("cRate",{attrs:{type:e.rateConfig3.type},model:{value:e.rateConfig3.value,callback:function(t){e.$set(e.rateConfig3,"value",t)},expression:"rateConfig3.value"}})],1),e._v(" "),a("span",{staticClass:"code-btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showCode(3)}}},[e._v("code")]),e._v(" "),e.rateConfig3.showCode?a("code-block",{attrs:{type:"html",code:e.rateConfig3.code}}):e._e()],1),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("div",{attrs:{c_wrap:"flex fd ai-c"}},[a("span",{attrs:{c_wrap:"fs-14"}},[e._v("星星（6分制，带结果）：")]),e._v(" "),a("cRate",{attrs:{type:e.rateConfig4.type,max:e.rateConfig4.max},model:{value:e.rateConfig4.value,callback:function(t){e.$set(e.rateConfig4,"value",t)},expression:"rateConfig4.value"}},[a("span",{staticStyle:{"font-size":"0.8rem","margin-left":"0.3rem"}},[e._v("\n            "+e._s(e.rateConfig4.value?e.rateConfig4.texts[e.rateConfig4.value-1]:"")+"\n          ")])])],1),e._v(" "),a("span",{staticClass:"code-btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showCode(4)}}},[e._v("code")]),e._v(" "),e.rateConfig4.showCode?a("code-block",{attrs:{type:"html",code:e.rateConfig4.code}}):e._e()],1),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("div",{attrs:{c_wrap:"flex fd ai-c"}},[a("span",{attrs:{c_wrap:"fs-14"}},[e._v("笑脸（6分制，3种笑脸）：")]),e._v(" "),a("cRate",{attrs:{type:e.rateConfig5.type,max:e.rateConfig5.max,threshold:e.rateConfig5.threshold},model:{value:e.rateConfig5.value,callback:function(t){e.$set(e.rateConfig5,"value",t)},expression:"rateConfig5.value"}},[a("span",{staticStyle:{"font-size":"0.8rem","margin-left":"0.3rem"}},[e._v("\n            "+e._s(e.rateConfig5.value?e.rateConfig5.texts[e.rateConfig5.value-1]:"")+"\n          ")])])],1),e._v(" "),a("span",{staticClass:"code-btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showCode(5)}}},[e._v("code")]),e._v(" "),e.rateConfig5.showCode?a("code-block",{attrs:{type:"html",code:e.rateConfig5.code}}):e._e()],1),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("div",{attrs:{c_wrap:"flex fd ai-c"}},[a("span",{attrs:{c_wrap:"fs-14"}},[e._v("笑脸（6分制，设置颜色）：")]),e._v(" "),a("cRate",{attrs:{type:e.rateConfig6.type,max:e.rateConfig6.max,threshold:e.rateConfig6.threshold,voidColor:e.rateConfig6.voidColor,colors:e.rateConfig6.colors},model:{value:e.rateConfig6.value,callback:function(t){e.$set(e.rateConfig6,"value",t)},expression:"rateConfig6.value"}},[a("span",{staticStyle:{"font-size":"0.8rem","margin-left":"0.3rem"}},[e._v("\n            "+e._s(e.rateConfig6.value?e.rateConfig6.texts[e.rateConfig6.value-1]:"")+"\n          ")])])],1),e._v(" "),a("span",{staticClass:"code-btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showCode(6)}}},[e._v("code")]),e._v(" "),e.rateConfig6.showCode?a("code-block",{attrs:{type:"html",code:e.rateConfig6.code}}):e._e()],1),e._v(" "),a("div",{attrs:{c_wrap:"mb-20"}},[a("div",{attrs:{c_wrap:"flex fd ai-c"}},[a("span",{attrs:{c_wrap:"fs-14"}},[e._v("笑脸（只读）：")]),e._v(" "),a("cRate",{attrs:{type:e.rateConfig7.type,disabled:e.rateConfig7.disabled,disabledVoidColor:e.rateConfig7.disabledVoidColor},model:{value:e.rateConfig7.value,callback:function(t){e.$set(e.rateConfig7,"value",t)},expression:"rateConfig7.value"}})],1),e._v(" "),a("span",{staticClass:"code-btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showCode(7)}}},[e._v("code")]),e._v(" "),e.rateConfig7.showCode?a("code-block",{attrs:{type:"html",code:e.rateConfig7.code}}):e._e()],1)]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("a",{staticClass:"aLink",attrs:{c_wrap:"fs-12",href:"https://cpm828.github.io/cpm-ui-docs/basic/cRate.html"}},[this._v("查看文档")])])}]};var r=a("VU/8")(o,n,!1,function(e){a("Ghrv")},"data-v-a4559cd4",null);t.default=r.exports}});
//# sourceMappingURL=rate.1fb15fa1b1210ffa35ea.js.map