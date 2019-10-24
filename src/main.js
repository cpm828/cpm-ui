// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

// cpm-ui
import {
  Toast, Loading, Dialog, ActionSheet,
  cIcon, cButton, cIndexList, cRate, cProgress, cProgressCircle, cSearch, cCountDown,
  cSticky, cFixed, cTitleBar,
  cRadio, cRadioGroup, cCheckbox, cCheckboxGroup, cRange, cRangeDouble, cSwitch
} from '../../src/index'

// 代码code高亮
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css' // 配置主题颜色(https://highlightjs.org/static/demo/)

// 样式
require('../../src/index.scss') // 组件样式放在前面
require('./assets/common.js')
require('./assets/common.scss')

const components = [
  Toast, Loading, Dialog, ActionSheet,
  cIcon, cButton, cIndexList, cRate, cProgress, cProgressCircle, cSearch, cCountDown,
  cSticky, cFixed, cTitleBar,
  cRadio, cRadioGroup, cCheckbox, cCheckboxGroup, cRange, cRangeDouble, cSwitch
]
components.map(cp => Vue.use(cp))
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

// 全局设置标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
