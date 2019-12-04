import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页index
    {
      path: '/',
      name: 'Index',
      component: () => import(/* webpackChunkName: "/index/index" */ '../views/Index'),
      meta: {
        title: 'cpm-ui'
      }
    },
    // 反馈组件
    {
      path: '/toast',
      name: 'Toast',
      component: () => import(/* webpackChunkName: "/feedback/toast" */ '../views/Toast'),
      meta: {
        title: 'Toast'
      }
    },
    {
      path: '/loading',
      name: 'Loading',
      component: () => import(/* webpackChunkName: "/feedback/loading" */ '../views/Loading'),
      meta: {
        title: 'Loading'
      }
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: () => import(/* webpackChunkName: "/feedback/dialog" */ '../views/Dialog'),
      meta: {
        title: 'Dialog'
      }
    },
    {
      path: '/actionsheet',
      name: 'ActionSheet',
      component: () => import(/* webpackChunkName: "/feedback/actionsheet" */ '../views/ActionSheet'),
      meta: {
        title: 'ActionSheet'
      }
    },
    {
      path: '/datepicker',
      name: 'DatePicker',
      component: () => import(/* webpackChunkName: "/feedback/datepicker" */ '../views/DatePicker'),
      meta: {
        title: 'DatePicker'
      }
    },
    // 基础组件
    {
      path: '/icon',
      name: 'Icon',
      component: () => import(/* webpackChunkName: "/basic/icon" */ '../views/Icon'),
      meta: {
        title: 'Icon'
      }
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import(/* webpackChunkName: "/basic/button" */ '../views/Button'),
      meta: {
        title: 'Button'
      }
    },
    {
      path: '/indexlist',
      name: 'IndexList',
      component: () => import(/* webpackChunkName: "/basic/range" */ '../views/IndexList'),
      meta: {
        title: 'IndexList'
      }
    },
    {
      path: '/rate',
      name: 'Rate',
      component: () => import(/* webpackChunkName: "/basic/rate" */ '../views/Rate'),
      meta: {
        title: 'Rate'
      }
    },
    {
      path: '/progress',
      name: 'Progress',
      component: () => import(/* webpackChunkName: "/basic/progress" */ '../views/Progress'),
      meta: {
        title: 'Progress'
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import(/* webpackChunkName: "/basic/search" */ '../views/Search'),
      meta: {
        title: 'Search'
      }
    },
    {
      path: '/countdown',
      name: 'CountDown',
      component: () => import(/* webpackChunkName: "/basic/countdown" */ '../views/CountDown'),
      meta: {
        title: 'CountDown'
      }
    },
    // 表单组件
    {
      path: '/radio',
      name: 'Radio',
      component: () => import(/* webpackChunkName: "/form/radio" */ '../views/Radio'),
      meta: {
        title: 'Radio'
      }
    },
    {
      path: '/radiogroup',
      name: 'RadioGroup',
      component: () => import(/* webpackChunkName: "/form/radiogroup" */ '../views/RadioGroup'),
      meta: {
        title: 'RadioGroup'
      }
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: () => import(/* webpackChunkName: "/form/checkbox" */ '../views/Checkbox'),
      meta: {
        title: 'Checkbox'
      }
    },
    {
      path: '/checkboxgroup',
      name: 'CheckboxGroup',
      component: () => import(/* webpackChunkName: "/form/checkboxgroup" */ '../views/CheckboxGroup'),
      meta: {
        title: 'CheckboxGroup'
      }
    },
    {
      path: '/range',
      name: 'Range',
      component: () => import(/* webpackChunkName: "/form/range" */ '../views/Range'),
      meta: {
        title: 'Range'
      }
    },
    {
      path: '/rangedouble',
      name: 'RangeDouble',
      component: () => import(/* webpackChunkName: "/form/rangedouble" */ '../views/RangeDouble'),
      meta: {
        title: 'RangeDouble'
      }
    },
    {
      path: '/switch',
      name: 'Switch',
      component: () => import(/* webpackChunkName: "/form/switch" */ '../views/Switch'),
      meta: {
        title: 'Switch'
      }
    },
    {
      path: '/input',
      name: 'Input',
      component: () => import(/* webpackChunkName: "/form/input" */ '../views/Input'),
      meta: {
        title: 'Input'
      }
    },
    // 布局组件
    {
      path: '/sticky',
      name: 'Sticky',
      component: () => import(/* webpackChunkName: "/layout/sticky" */ '../views/Sticky'),
      meta: {
        title: 'Sticky'
      }
    },
    {
      path: '/fixed',
      name: 'Fixed',
      component: () => import(/* webpackChunkName: "/layout/fixed" */ '../views/Fixed'),
      meta: {
        title: 'Fixed'
      }
    },
    {
      path: '/titlebar',
      name: 'TitleBar',
      component: () => import(/* webpackChunkName: "/layout/titlebar" */ '../views/TitleBar'),
      meta: {
        title: 'TitleBar'
      }
    },
    // css组件
    {
      path: '/cssonepx',
      name: 'CssOnePx',
      component: () => import(/* webpackChunkName: "/css/onepx" */ '../views/CssOnePx'),
      meta: {
        title: '1px解决方案'
      }
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
