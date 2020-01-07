<template>
  <div class="page-wrap input-wrap">
    <div class="top">Input用户输入</div>

    <div c_wrap="ta-l pl-20 pr-20 mb-20">
      <h3 c_wrap="mb-15">请输入用户信息（{{usernameConfig.value}}、{{usernameConfig.newValue}}）</h3>
      <div c_wrap="mb-30">
        <cInput :ref="usernameConfig.name" :config="usernameConfig" @onFocus="onFocus" @onBlur="onBlur" @onInput="onInput" @onChange="onChange" @onClear="onClear"></cInput>
        <cInput :ref="telConfig.name" :config="telConfig"></cInput>
        <cInput :ref="amountConfig.name" :config="amountConfig"></cInput>
        <cInput :ref="dateConfig.name" :config="dateConfig" @onClickLabelIcon="onClickLabelIcon"></cInput>
        <cInput :ref="accountConfig.name" :config="accountConfig"></cInput>
        <cInput :ref="passwordConfig.name" :config="passwordConfig"></cInput>
        <cInput :ref="addressConfig.name" :config="addressConfig"></cInput>
      </div>
      <div c_wrap="mb-10">
        <cButton :type="isDisabled ? 'default' : 'primary'" size="large" :circle="true" @onClick="onSubmit1">提交（String）</cButton>
      </div>
      <div>
        <cButton :type="isDisabled ? 'default' : 'primary'" size="large" :circle="true" @onClick="onSubmit2">提交（键值对）</cButton>
      </div>
    </div>

    <span class="code-btn" @click.prevent.stop="showCode">code</span>
    <code-block type="html" :code="code" v-if="showCodeFlag"></code-block>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://cpm828.github.io/cpm-ui-docs/form/cInput.html">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'Input',
  components: { codeBlock },
  data () {
    return {
      usernameConfig: {
        name: 'username',
        title: '用户姓名',
        value: '张三',
        maxlength: 15
      },
      telConfig: {
        name: 'tel',
        title: '手机号',
        value: '15211112222',
        type: 'tel',
        maxlength: 11
      },
      amountConfig: {
        name: 'amount',
        title: '存款金额',
        value: '',
        type: 'number',
        unit: '元',
        maxlength: 10
      },
      dateConfig: {
        name: 'date',
        title: '日期',
        value: '2020-02-02',
        placeholder: '请选择',
        readonly: true,
        labelIconType: 'info',
        inputIconType: 'arrow-down'
      },
      accountConfig: {
        name: 'account',
        title: '账号',
        value: '',
        lr: 'left'
      },
      passwordConfig: {
        name: 'password',
        title: '密码',
        value: '',
        type: 'password',
        lr: 'left'
      },
      addressConfig: {
        name: 'address',
        title: '',
        value: '',
        placeholder: '请选择家庭详细地址',
        lr: 'left'
      },
      showCodeFlag: false,
      code: `
<cInput :config="config" v-model="config.value" @onFocus="onFocus" @onBlur="onBlur" @onInput="onInput" @onChange="onChange" @onClear="onClear"></cInput>

config: {
  name: 'username',
  title: '用户姓名',
  value: '', // value单独提取出来使用v-model双向绑定
  maxlength: 15
}`
    }
  },
  created () {},
  mounted () {},
  computed: {
    isDisabled () {
      return ['usernameConfig', 'telConfig', 'amountConfig', 'dateConfig', 'accountConfig', 'passwordConfig', 'addressConfig'].some(item => {
        return this[item].newValue === ''
      })
    }
  },
  methods: {
    showCode () {
      this.showCodeFlag = !this.showCodeFlag
    },
    onFocus (e) {
      // console.log('onFocus', e)
    },
    onBlur (e) {
      // console.log('onBlur', e)
    },
    onInput (e, value) {
      // console.log('onInput', e, value)
    },
    onChange (e, value) {
      // console.log('onChange', e, value)
    },
    onClear () {
      // console.log('onClear')
    },
    onClickLabelIcon () {
      this.$toast('日期组件开发中')
    },
    onSubmit1 () {
      if (this.isDisabled) return
      const nameArr = ['usernameConfig', 'telConfig', 'amountConfig', 'dateConfig', 'accountConfig', 'passwordConfig', 'addressConfig']
      let submitObj = {}
      nameArr.forEach(item => {
        Object.assign(submitObj, this.$refs[this[item].name].getKVObject())
      })
      console.log(submitObj)
    },
    onSubmit2 () {
      if (this.isDisabled) return
      const nameArr = ['usernameConfig', 'telConfig', 'amountConfig', 'dateConfig', 'accountConfig', 'passwordConfig', 'addressConfig']
      let submitArr = []
      nameArr.forEach(item => {
        submitArr.push(this.$refs[this[item].name].getKVString())
      })
      console.log(submitArr.join('&'))
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrap{
  min-height: 100%;
  background-color: #fff;
}
</style>
