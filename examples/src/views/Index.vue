<template>
  <div class="page-wrap index-wrap">
    <div class="top">
      <h2>cpm-ui</h2>
      <h4>A Mobile UI Toolkit for Vue 2.0</h4>
    </div>

    <div class="block">
      <p class="block-title">反馈组件</p>
      <div class="block-item" v-for="(item, index) in list1" :key="index">
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
    </div>

    <div class="block">
      <p class="block-title">基础组件</p>
      <div class="block-item" v-for="(item, index) in list2" :key="index">
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
    </div>

    <div class="block">
      <p class="block-title">表单组件</p>
      <div class="block-item" v-for="(item, index) in list3" :key="index">
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
    </div>

    <div class="block">
      <p class="block-title">布局组件</p>
      <div class="block-item" v-for="(item, index) in list4" :key="index">
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
    </div>

    <div class="block">
      <p class="block-title">CSS组件</p>
      <div class="block-item" v-for="(item, index) in list5" :key="index">
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
    </div>

    <div>
      <a class="aLink" c_wrap="fs-12" href="https://cpm828.github.io/cpm-ui-docs">查看文档</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      list1: [
        {
          title: 'Toast提示',
          path: '/toast'
        },
        {
          title: 'Loading加载中',
          path: '/loading'
        },
        {
          title: 'Dialog弹窗',
          path: '/dialog'
        },
        {
          title: 'ActionSheet选择',
          path: '/actionsheet'
        }
        // {
        //   title: 'Picker选择器',
        //   path: '/picker'
        // }
        // {
        //   title: 'DatePicker日期选择器',
        //   path: '/datepicker'
        // }
      ],
      list2: [
        {
          title: 'Icon图标',
          path: '/icon'
        },
        {
          title: 'Button按钮',
          path: '/button'
        },
        // {
        //   title: 'IndexList索引列表',
        //   path: '/indexlist'
        // },
        {
          title: 'Rate评分',
          path: '/rate'
        },
        {
          title: 'Progress长条进度',
          path: '/progress'
        },
        {
          title: 'Search搜索',
          path: '/search'
        },
        {
          title: 'CountDown倒计时',
          path: '/countdown'
        }
      ],
      list3: [
        {
          title: 'Radio单选框',
          path: '/radio'
        },
        {
          title: 'RadioGroup单选组',
          path: '/radiogroup'
        },
        {
          title: 'Checkbox复选框',
          path: '/checkbox'
        },
        {
          title: 'CheckboxGroup复选组',
          path: '/checkboxgroup'
        },
        {
          title: 'Range单滑块',
          path: '/range'
        },
        {
          title: 'RangeDouble双滑块',
          path: '/rangedouble'
        },
        {
          title: 'Switch开关',
          path: '/switch'
        },
        {
          title: 'Input用户输入',
          path: '/input'
        }
      ],
      list4: [
        {
          title: 'Sticky滚动吸顶',
          path: '/sticky'
        },
        {
          title: 'Fixed顶部或底部固定',
          path: '/fixed'
        },
        {
          title: 'TitleBar标题栏',
          path: '/titlebar'
        }
      ],
      list5: [
        {
          title: '1px边框解决方案',
          path: '/cssonepx'
        }
      ]
    }
  }
}
</script>
