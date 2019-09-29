<template>
  <div class="page-wrap index-wrap">
    <div class="top">
      <h2>cpm-ui</h2>
      <h4>A Mobile UI Toolkit for Vue 2.0</h4>
    </div>

    <div class="block">
      <div class="block-item" v-for="(item, index) in list1" :key="index">
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
    </div>

    <div class="block">
      <div class="block-item" v-for="(item, index) in list2" :key="index">
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
    </div>

    <div class="block">
      <div class="block-item" v-for="(item, index) in list3" :key="index">
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
    </div>

    <a class="aLink" c_wrap="fs-12" href="https://github.com/cpm828/cpm-ui">查看文档</a>
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
      ],
      list2: [
        {
          title: 'Icon图标',
          path: '/icon'
        }
      ],
      list3: [
        {
          title: 'Radio',
          path: '/radio'
        },
        {
          title: 'RadioGroup单选组',
          path: '/radiogroup'
        },
        {
          title: 'Checkbox',
          path: '/checkbox'
        },
        {
          title: 'CheckboxGroup多选组',
          path: '/checkboxgroup'
        },
        {
          title: 'Switch开关',
          path: '/switch'
        }
      ]
    }
  }
}
</script>
