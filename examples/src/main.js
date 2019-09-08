// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

import Toast from '@/packages/toast'
import Loading from '@/packages/loading'
import Dialog from '@/packages/dialog'

import cIcon from '@/packages/cIcon'

import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css' // 配置主题颜色(https://highlightjs.org/static/demo/)

require('./assets/common.js')
require('./assets/common.scss')

const components = [Toast, Loading, Dialog, cIcon]

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
