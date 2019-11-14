<template>
  <div class="page-wrap progress-wrap">
    <div c_wrap="mb-20">
      <cSearch v-model="inputText" type="tel" placeholder="请输入手机号" button="搜索"></cSearch>
    </div>
    <div class="top">Search搜索</div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">默认</p>
      <cSearch v-model="inputText"></cSearch>
    </div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">左侧带label</p>
      <cSearch label="地址" v-model="inputText"></cSearch>
    </div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">右侧带按钮</p>
      <cSearch label="地址" button="搜索" v-model="inputText"></cSearch>
    </div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">提示文案</p>
      <cSearch label="地址" button="搜索" placeholder="请输入您的地址" v-model="inputText"></cSearch>
    </div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">键盘类型</p>
      <cSearch label="电话" button="搜索" placeholder="请输入您的手机号" :maxlength="11" type="tel" v-model="inputText"></cSearch>
    </div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">绑定触发事件</p>
      <cSearch label="地址" button="搜索" placeholder="请输入您的地址" v-model="inputText" @onFocus="onFocus" @onBlur="onBlur" @onSearch="onSearch"></cSearch>
    </div>
    <span class="code-btn" @click.prevent.stop="showCode">code</span>
    <code-block type="html" :code="code" v-if="showCodeFlag"></code-block>
    <div>
      <a class="aLink" c_wrap="fs-12" href="https://github.com/cpm828/cpm-ui/tree/gh-pages/document/cSearch.md">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'Search',
  components: { codeBlock },
  data () {
    return {
      inputText: '',
      showCodeFlag: false,
      code: `
<cSearch label="地址" button="搜索" placeholder="请输入您的地址" v-model="inputText" @onFocus="onFocus" @onBlur="onBlur" @onSearch="onSearch"></cSearch>
`
    }
  },
  created () { },
  mounted () { },
  methods: {
    showCode () {
      this.showCodeFlag = !this.showCodeFlag
    },
    onFocus () {
      console.log('onFocus')
    },
    onBlur () {
      console.log('onBlur')
    },
    onSearch (value) {
      this.$toast(`搜索：${value}`)
      console.log('onSearch')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
