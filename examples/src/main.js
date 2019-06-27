// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// main文件会作为webpack的entry 文件，所有需要的其他资源可在此处导入

import Vue from 'vue'
import App from './App'
import router from './router'

import Toast from '@/packages/toast'
import Loading from '@/packages/loading'
import Dialog from '@/packages/dialog'

require('./assets/common.js')
require('./assets/common.scss')

const components = [
    Dialog,
    Toast,
    Loading
]

components.map(cp => Vue.use(cp))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
