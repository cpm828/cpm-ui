<template>
  <div class="page-wrap input-wrap">
    <div class="top">Input用户输入</div>

    <div c_wrap="ta-l pl-20 pr-20 mb-20">
      <h3 c_wrap="mb-15">请输入用户信息</h3>
      <div c_wrap="mb-30">
        <cInput :ref="usernameConfig.name" :config="usernameConfig" v-model="usernameConfig.value" @onFocus="onFocus" @onBlur="onBlur" @onInput="onInput" @onChange="onChange" @onClear="onClear"></cInput>
        <cInput :ref="telConfig.name" :config="telConfig" v-model="telConfig.value"></cInput>
        <cInput :ref="amountConfig.name" :config="amountConfig" v-model="amountConfig.value"></cInput>
        <cInput :ref="dateConfig.name" :config="dateConfig" v-model="dateConfig.value" @onClickLabelIcon="onClickLabelIcon"></cInput>
        <cInput :ref="accountConfig.name" :config="accountConfig" v-model="accountConfig.value"></cInput>
        <cInput :ref="passwordConfig.name" :config="passwordConfig" v-model="passwordConfig.value"></cInput>
        <cInput :ref="addressConfig.name" :config="addressConfig" v-model="addressConfig.value"></cInput>
      </div>
      <div c_wrap="mb-10">
        <cButton type="primary" size="large" :circle="true" @onClick="onSubmit1">提交（String）</cButton>
      </div>
      <div>
        <cButton type="primary" size="large" :circle="true" @onClick="onSubmit2">提交（键值对）</cButton>
      </div>
    </div>

    <span class="code-btn" @click.prevent.stop="showCode">code</span>
    <code-block type="html" :code="code" v-if="showCodeFlag"></code-block>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm-ui/tree/gh-pages/document/cInput.md">查看文档</a>
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
        value: '', // value单独提取出来使用v-model双向绑定
        maxlength: 15
      },
      telConfig: {
        name: 'tel',
        title: '手机号',
        value: '',
        type: 'tel',
        maxlength: 11
      },
      amountConfig: {
        name: 'amount',
        title: '存款金额',
        value: 0,
        type: 'number',
        unit: '元',
        maxlength: 10
      },
      dateConfig: {
        name: 'date',
        title: '日期',
        value: '',
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
  methods: {
    showCode () {
      this.showCodeFlag = !this.showCodeFlag
    },
    onFocus (e) {
      console.log('onFocus', e)
    },
    onBlur (e) {
      console.log('onBlur', e)
    },
    onInput (e, value) {
      console.log('onInput', e, value)
    },
    onChange (e, value) {
      console.log('onChange', e, value)
    },
    onClear () {
      console.log('onClear')
    },
    onClickLabelIcon () {
      this.$toast('日期组件开发中')
    },
    onSubmit1 () {
      const nameArr = ['usernameConfig', 'telConfig', 'amountConfig', 'dateConfig', 'accountConfig', 'passwordConfig', 'addressConfig']
      let submitObj = {}
      nameArr.forEach(item => {
        Object.assign(submitObj, this.$refs[this[item].name].getKVObject())
      })
      console.log(submitObj)
    },
    onSubmit2 () {
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
