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
      name: 'toast',
      component: resolve => resolve(require('../views/Toast'))
    },
    {
      path: '/loading',
      name: 'loading',
      component: resolve => resolve(require('../views/Loading'))
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: resolve => resolve(require('../views/Dialog'))
    },
    {
      path: '/actionsheet',
      name: 'actionsheet',
      component: resolve => resolve(require('../views/ActionSheet'))
    },
    {
      path: '/icon',
      name: 'icon',
      component: resolve => resolve(require('../views/Icon'))
    }
  ]
})
