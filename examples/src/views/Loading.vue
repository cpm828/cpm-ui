<template>
  <div class="page-wrap loading-wrap">
    <div class="top">Loading加载中</div>

    <div class="block">
      <div class="block-item" :class="{'active': item.showCode}" v-for="(item, index) in list" :key="index">
        <a @click.prevent="showLoading(index)">
          <span class="text" v-if="index === 0">{{'默认' + item.title}}</span>
          <span class="text" v-else>{{item.title + index}}</span>
          <i @click.prevent.stop="showCode(item, index)">code</i>
        </a>
        <code-block :code="index === 0 ? 'this.$loading()' : 'this.$loading(' + index + ')'" v-if="item.showCode">
        </code-block>
      </div>
    </div>

    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://cpm828.github.io/cpm-ui-docs/feedback/Loading.html">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'Loading',
  components: { codeBlock },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    const list = new Array(17).join(',').split(',')
    this.list = list.map(() => {
      return {
        title: '类型',
        showCode: false,
        code: ''
      }
    })
  },
  methods: {
    showCode (item, index) {
      if (item.showCode) {
        item.showCode = false
        return
      }
      this.list.map((item) => {
        return (item.showCode = false)
      })
      this.list[index].showCode = true
    },
    showLoading (index) {
      if (this.loading) this.loading.remove() // 先清除

      if (index === 0) {
        this.loading = this.$loading()
      } else {
        this.loading = this.$loading(index)
      }
      setTimeout(() => {
        this.loading.remove()
      }, 3000)
    }
  }
}
</script>
