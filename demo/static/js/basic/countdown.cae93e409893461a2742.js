webpackJsonp([11],{Wy66:function(t,o){},oKZy:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s={name:"CountDown",components:{codeBlock:n("O6xP").a},data:function(){return{countDownConfig1:{showCode:!1,code:'<cCountDown :time="5 * 60 * 60 * 1000"></cCountDown>'},countDownConfig2:{showCode:!1,code:'<cCountDown :time="30 * 60 * 60 * 1000" format="DD天 HH 时 mm 分 ss 秒"></cCountDown>'},countDownConfig3:{showCode:!1,code:'<cCountDown :time="30 * 60 * 60 * 1000"></cCountDown>'},countDownConfig4:{showCode:!1,code:'<cCountDown :time="30 * 60 * 60 * 1000" format="HH:mm:ss:SSS"></cCountDown>'},countDownConfig5:{showCode:!1,code:'<cCountDown :time="30 * 60 * 60 * 1000" class="count-down">\n  <template v-slot="slotProps">\n    <span>{{ slotProps.timeData.h }}</span>\n    <span>{{ slotProps.timeData.m }}</span>\n    <span>{{ slotProps.timeData.s }}</span>\n  </template>\n</cCountDown>\n<cCountDown :time="30 * 60 * 60 * 1000" class="count-down">\n  <template v-slot="slotProps">\n    <span>{{ (\'0\' + slotProps.timeData.h).slice(-2) }}</span>\n    <i>:</i>\n    <span>{{ (\'0\' + slotProps.timeData.m).slice(-2) }}</span>\n    <i>:</i>\n    <span>{{ (\'0\' + slotProps.timeData.s).slice(-2) }}</span>\n  </template>\n</cCountDown>'},countDownConfig6:{showCode:!1,code:'<cCountDown :time="5000" :autoStart="false" format="ss:SSS" @onFinish="onFinish" ref="countDown"></cCountDown>\n<cButton type="primary" size="smaller" @onClick="startCount">开始</cButton>\n<cButton type="primary" size="smaller" @onClick="pauseCount">暂停</cButton>\n<cButton type="primary" size="smaller" @onClick="resetCount">重置</cButton>\n\nstartCount () {\n  this.$refs.countDown.start()\n},\npauseCount () {\n  this.$refs.countDown.pause()\n},\nresetCount () {\n  this.$refs.countDown.reset()\n},\nonFinish () {\n  this.$toast(\'结束了\')\n}'}}},created:function(){},mounted:function(){},methods:{showCode:function(t){if(this["countDownConfig"+t].showCode)this["countDownConfig"+t].showCode=!1;else{for(var o=1;o<=6;o++)this["countDownConfig"+o].showCode=!1;this["countDownConfig"+t].showCode=!0}},startCount:function(){this.$refs.countDown.start()},pauseCount:function(){this.$refs.countDown.pause()},resetCount:function(){this.$refs.countDown.reset()},onFinish:function(){this.$toast("结束了")}}},e={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"page-wrap countdown-wrap"},[n("div",{staticClass:"top"},[t._v("CountDown倒计时")]),t._v(" "),n("div",{attrs:{c_wrap:"pl-20 pr-20 ta-l"}},[n("div",{attrs:{c_wrap:"mb-20"}},[n("p",{attrs:{c_wrap:"fs-14 c-999 mb-10"}},[t._v("默认：HH:mm:ss")]),t._v(" "),n("cCountDown",{attrs:{time:18e6}}),t._v(" "),n("span",{staticClass:"code-btn",on:{click:function(o){return o.preventDefault(),o.stopPropagation(),t.showCode(1)}}},[t._v("code")]),t._v(" "),t.countDownConfig1.showCode?n("code-block",{attrs:{type:"html",code:t.countDownConfig1.code}}):t._e()],1),t._v(" "),n("div",{attrs:{c_wrap:"mb-20"}},[n("p",{attrs:{c_wrap:"fs-14 c-999 mb-10"}},[t._v("自定义格式：DD天 HH 时 mm 分 ss 秒")]),t._v(" "),n("cCountDown",{attrs:{time:108e6,format:"DD天 HH 时 mm 分 ss 秒"}}),t._v(" "),n("span",{staticClass:"code-btn",on:{click:function(o){return o.preventDefault(),o.stopPropagation(),t.showCode(2)}}},[t._v("code")]),t._v(" "),t.countDownConfig2.showCode?n("code-block",{attrs:{type:"html",code:t.countDownConfig2.code}}):t._e()],1),t._v(" "),n("div",{attrs:{c_wrap:"mb-20"}},[n("p",{attrs:{c_wrap:"fs-14 c-999 mb-10"}},[t._v("自动补时长（>24h）：HH:mm:ss")]),t._v(" "),n("cCountDown",{attrs:{time:108e6}}),t._v(" "),n("span",{staticClass:"code-btn",on:{click:function(o){return o.preventDefault(),o.stopPropagation(),t.showCode(3)}}},[t._v("code")]),t._v(" "),t.countDownConfig3.showCode?n("code-block",{attrs:{type:"html",code:t.countDownConfig3.code}}):t._e()],1),t._v(" "),n("div",{attrs:{c_wrap:"mb-20"}},[n("p",{attrs:{c_wrap:"fs-14 c-999 mb-10"}},[t._v("毫秒级：HH:mm:ss:SSS")]),t._v(" "),n("cCountDown",{attrs:{time:108e6,format:"HH:mm:ss:SSS"}}),t._v(" "),n("span",{staticClass:"code-btn",on:{click:function(o){return o.preventDefault(),o.stopPropagation(),t.showCode(4)}}},[t._v("code")]),t._v(" "),t.countDownConfig4.showCode?n("code-block",{attrs:{type:"html",code:t.countDownConfig4.code}}):t._e()],1),t._v(" "),n("div",{attrs:{c_wrap:"mb-20"}},[n("p",{attrs:{c_wrap:"fs-14 c-999 mb-10"}},[t._v("自定义样式：HH:mm:ss")]),t._v(" "),n("cCountDown",{staticClass:"count-down",attrs:{time:108e6},scopedSlots:t._u([{key:"default",fn:function(o){return[n("span",[t._v(t._s(o.timeData.h))]),t._v(" "),n("span",[t._v(t._s(o.timeData.m))]),t._v(" "),n("span",[t._v(t._s(o.timeData.s))])]}}])}),t._v(" "),n("cCountDown",{staticClass:"count-down",attrs:{time:108e6},scopedSlots:t._u([{key:"default",fn:function(o){return[n("span",[t._v(t._s(("0"+o.timeData.h).slice(-2)))]),t._v(" "),n("i",[t._v(":")]),t._v(" "),n("span",[t._v(t._s(("0"+o.timeData.m).slice(-2)))]),t._v(" "),n("i",[t._v(":")]),t._v(" "),n("span",[t._v(t._s(("0"+o.timeData.s).slice(-2)))])]}}])}),t._v(" "),n("span",{staticClass:"code-btn",on:{click:function(o){return o.preventDefault(),o.stopPropagation(),t.showCode(5)}}},[t._v("code")]),t._v(" "),t.countDownConfig5.showCode?n("code-block",{attrs:{type:"html",code:t.countDownConfig5.code}}):t._e()],1),t._v(" "),n("div",{attrs:{c_wrap:"mb-20"}},[n("p",{attrs:{c_wrap:"fs-14 c-999 mb-10"}},[t._v("手动开始")]),t._v(" "),n("cCountDown",{ref:"countDown",attrs:{time:5e3,autoStart:!1,format:"ss:SSS"},on:{onFinish:t.onFinish}}),t._v(" "),n("cButton",{attrs:{type:"primary",size:"smaller"},on:{onClick:t.startCount}},[t._v("开始")]),t._v(" "),n("cButton",{attrs:{type:"primary",size:"smaller"},on:{onClick:t.pauseCount}},[t._v("暂停")]),t._v(" "),n("cButton",{attrs:{type:"primary",size:"smaller"},on:{onClick:t.resetCount}},[t._v("重置")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"code-btn",on:{click:function(o){return o.preventDefault(),o.stopPropagation(),t.showCode(6)}}},[t._v("code")]),t._v(" "),t.countDownConfig6.showCode?n("code-block",{attrs:{type:"html",code:t.countDownConfig6.code}}):t._e()],1)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("div",[o("a",{staticClass:"aLink",attrs:{c_wrap:"fs-12",href:"https://github.com/cpm828/cpm-ui/tree/gh-pages/document/cCountDown.md"}},[this._v("查看文档")])])}]};var c=n("VU/8")(s,e,!1,function(t){n("Wy66")},"data-v-4acf673f",null);o.default=c.exports}});
//# sourceMappingURL=countdown.cae93e409893461a2742.js.map