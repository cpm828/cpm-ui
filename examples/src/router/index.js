import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => resolve(require('../views/Index'))
    },
    {
      path: '/toast',
      name: 'index',
      component: resolve => resolve(require('../views/Toast'))
    },
    {
      path: '/loading',
      name: 'index',
      component: resolve => resolve(require('../views/Loading'))
    },
    {
      path: '/dialog',
      name: 'index',
      component: resolve => resolve(require('../views/Dialog'))
    },
    {
      path: '/icon',
      name: 'icon',
      component: resolve => resolve(require('../views/Icon'))
    }
  ]
})
