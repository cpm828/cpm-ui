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
    {
      path: '/button',
      name: 'Button',
      component: resolve => resolve(require('../views/Button'))
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
      path: '/checkboxgroup',
      name: 'CheckboxGroup',
      component: resolve => resolve(require('../views/CheckboxGroup'))
    },
    {
      path: '/switch',
      name: 'Switch',
      component: resolve => resolve(require('../views/Switch'))
    },
    // 匹配不到重定向到首页
    {
      path: '*',
      redirect: {
        name: 'Index'
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
