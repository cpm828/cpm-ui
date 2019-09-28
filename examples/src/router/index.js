import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 页面类
    {
      path: '/',
      name: 'Index',
      component: resolve => resolve(require('../views/Index'))
    },
    {
      path: '/toast',
      name: 'Toast',
      component: resolve => resolve(require('../views/Toast'))
    },
    {
      path: '/loading',
      name: 'Loading',
      component: resolve => resolve(require('../views/Loading'))
    },
    {
      path: '/dialog',
      name: 'Dialog', // dialog为保留字
      component: resolve => resolve(require('../views/Dialog'))
    },
    {
      path: '/actionsheet',
      name: 'ActionSheet',
      component: resolve => resolve(require('../views/ActionSheet'))
    },
    // 组件类
    {
      path: '/icon',
      name: 'Icon',
      component: resolve => resolve(require('../views/Icon'))
    },
    // 表单类
    {
      path: '/radio',
      name: 'Radio',
      component: resolve => resolve(require('../views/Radio'))
    },
    {
      path: '/radiogroup',
      name: 'RadioGroup',
      component: resolve => resolve(require('../views/RadioGroup'))
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: resolve => resolve(require('../views/Checkbox'))
    },
    {
      path: '/switch',
      name: 'Switch',
      component: resolve => resolve(require('../views/Switch'))
    }
  ]
})
