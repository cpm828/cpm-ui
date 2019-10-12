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
    // 页面类page
    {
      path: '/toast',
      name: 'Toast',
      component: () => import(/* webpackChunkName: "/page/toast" */ '../views/Toast'),
      meta: {
        title: 'Toast'
      }
    },
    {
      path: '/loading',
      name: 'Loading',
      component: () => import(/* webpackChunkName: "/page/loading" */ '../views/Loading'),
      meta: {
        title: 'Loading'
      }
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: () => import(/* webpackChunkName: "/page/dialog" */ '../views/Dialog'),
      meta: {
        title: 'Dialog'
      }
    },
    {
      path: '/actionsheet',
      name: 'ActionSheet',
      component: () => import(/* webpackChunkName: "/page/actionsheet" */ '../views/ActionSheet'),
      meta: {
        title: 'ActionSheet'
      }
    },
    // 组件类component
    {
      path: '/icon',
      name: 'Icon',
      component: () => import(/* webpackChunkName: "/component/icon" */ '../views/Icon'),
      meta: {
        title: 'Icon'
      }
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import(/* webpackChunkName: "/component/button" */ '../views/Button'),
      meta: {
        title: 'Button'
      }
    },
    {
      path: '/range',
      name: 'Range',
      component: () => import(/* webpackChunkName: "/component/range" */ '../views/Range'),
      meta: {
        title: 'Range'
      }
    },
    {
      path: '/rangedouble',
      name: 'RangeDouble',
      component: () => import(/* webpackChunkName: "/component/rangedouble" */ '../views/RangeDouble'),
      meta: {
        title: 'RangeDouble'
      }
    },
    {
      path: '/indexlist',
      name: 'IndexList',
      component: () => import(/* webpackChunkName: "/component/range" */ '../views/IndexList'),
      meta: {
        title: 'IndexList'
      }
    },
    {
      path: '/rate',
      name: 'Rate',
      component: () => import(/* webpackChunkName: "/component/rate" */ '../views/Rate'),
      meta: {
        title: 'Rate'
      }
    },
    // 布局类
    {
      path: '/sticky',
      name: 'Sticky',
      component: () => import(/* webpackChunkName: "/component/sticky" */ '../views/Sticky'),
      meta: {
        title: 'Sticky'
      }
    },
    {
      path: '/fixed',
      name: 'Fixed',
      component: () => import(/* webpackChunkName: "/component/fixed" */ '../views/Fixed'),
      meta: {
        title: 'Fixed'
      }
    },
    {
      path: '/titlebar',
      name: 'TitleBar',
      component: () => import(/* webpackChunkName: "/component/titlebar" */ '../views/TitleBar'),
      meta: {
        title: 'TitleBar'
      }
    },
    // 表单类form
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
      path: '/switch',
      name: 'Switch',
      component: () => import(/* webpackChunkName: "/form/switch" */ '../views/Switch'),
      meta: {
        title: 'Switch'
      }
    },
    // css
    {
      path: '/cssonepx',
      name: 'CssOnePx',
      component: () => import(/* webpackChunkName: "/form/onepx" */ '../views/CssOnePx'),
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
