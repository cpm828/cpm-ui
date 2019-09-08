<template>
  <div class="page-wrap index-wrap">
    <h2>cpm-ui--vue2.0</h2>

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

    <a class="aLink" c_wrap="fs-12" href="https://github.com/cpm828/cpm-ui">查看文档</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list1: [
        {
          title: 'Toast提示',
          path: '/toast'
        },
        {
          title: 'Loading加载',
          path: '/loading'
        },
        {
          title: 'Dialog弹窗',
          path: '/dailog'
        }
      ],
      list2: [
        {
          title: 'Icon图标',
          path: '/icon'
        }
      ]
    }
  }
}
</script>