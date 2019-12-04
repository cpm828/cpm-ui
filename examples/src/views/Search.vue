<template>
  <div class="page-wrap search-wrap">
    <div c_wrap="mb-20">
      <cSearch :config="config1" v-model="config1.value"></cSearch>
    </div>
    <div class="top">Search搜索</div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">默认</p>
      <cSearch :config="config2" v-model="config2.value"></cSearch>
    </div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">左侧带label</p>
      <cSearch :config="config3" v-model="config3.value"></cSearch>
    </div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">右侧带按钮</p>
      <cSearch :config="config4" v-model="config4.value"></cSearch>
    </div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">提示文案</p>
      <cSearch :config="config5" v-model="config5.value"></cSearch>
    </div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">键盘类型</p>
      <cSearch :config="config6" v-model="config6.value"></cSearch>
    </div>
    <div c_wrap="mb-20">
      <p c_wrap="fs-16 ta-l pl-20 mb-10">绑定触发事件</p>
      <cSearch :config="config7" v-model="config7.value" @onFocus="onFocus" @onBlur="onBlur" @onInput="onInput" @onChange="onChange" @onSearch="onSearch"></cSearch>
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
      config1: {
        name: 'tel',
        value: '',
        type: 'tel',
        maxlength: 11,
        placeholder: '请输入手机号',
        button: '搜索'
      },
      config2: {
        name: 'text',
        value: '',
        placeholder: '请输入'
      },
      config3: {
        name: 'address',
        value: '',
        placeholder: '',
        label: '地址'
      },
      config4: {
        name: 'address',
        value: '',
        placeholder: '',
        label: '地址',
        button: '搜索'
      },
      config5: {
        name: 'address',
        value: '',
        placeholder: '请输入您的地址',
        label: '地址',
        button: '搜索'
      },
      config6: {
        name: 'tel',
        value: '',
        type: 'tel',
        placeholder: '请输入您的电话',
        label: '电话',
        maxlength: 11,
        button: '搜索'
      },
      config7: {
        name: 'address',
        value: '',
        placeholder: '请输入您的地址',
        label: '地址',
        button: '搜索'
      },
      showCodeFlag: false,
      code: `
<cSearch :config="config7" v-model="config7.value" @onFocus="onFocus" @onBlur="onBlur" @onSearch="onSearch"></cSearch>

config7: {
  name: 'address',
  value: '',
  placeholder: '请输入您的地址',
  label: '地址',
  button: '搜索'
}
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
    onInput (e, value) {
      console.log('onInput', e, value)
    },
    onChange (e, value) {
      console.log('onChange', e, value)
    },
    onClear (value) {
      console.log('onClear')
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
