// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

import { Toast, Loading, Dialog, ActionSheet, cIcon, cRadio, cRadioGroup, cCheckbox, cCheckboxGroup, cSwitch } from '../../src/index'

// 代码code高亮
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css' // 配置主题颜色(https://highlightjs.org/static/demo/)

require('./assets/common.js')
require('./assets/common.scss')

const components = [Toast, Loading, Dialog, ActionSheet, cIcon, cRadio, cRadioGroup, cCheckbox, cCheckboxGroup, cSwitch]

components.map(cp => Vue.use(cp))
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
