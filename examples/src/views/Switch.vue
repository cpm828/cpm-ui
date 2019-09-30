<template>
  <div class="page-wrap switch-wrap">
    <div class="top">Switch开关</div>

    <div c_wrap="flex fd-c ai-fs mb-20">
      <p c_wrap="fs-16">默认蓝色：</p>
      <cSwitch v-model="flag1"></cSwitch>
    </div>
    <div c_wrap="flex fd-c ai-fs mb-20">
      <p c_wrap="fs-16">自定义颜色：</p>
      <cSwitch v-model="flag2" color="red"></cSwitch>
    </div>
    <div c_wrap="flex fd-c ai-fs mb-20">
      <p c_wrap="fs-16">带插槽显示状态（自动加宽）：</p>
      <cSwitch v-model="flag3">{{flag3 ? '开' : '关'}}</cSwitch>
    </div>
    <div c_wrap="flex fd-c ai-fs mb-20">
      <p c_wrap="fs-16">禁用</p>
      <cSwitch v-model="flag4" disabled></cSwitch>
      <cSwitch v-model="flag5" disabled></cSwitch>
    </div>

    <span class="code-btn" @click.prevent.stop="showCode">code</span>
    <code-block type="html" :code="code" v-if="showCodeFlag"></code-block>

    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cSwitch.md">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'Swtich',
  components: { codeBlock },
  data () {
    return {
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: true,
      flag5: false,
      showCodeFlag: false,
      code: `<cSwitch v-model="flag1"></cSwitch>

<cSwitch v-model="flag2" color="red"></cSwitch>

<cSwitch v-model="flag3">{{flag3 ? '开' : '关'}}</cSwitch>

<cSwitch v-model="flag4" disabled></cSwitch>
<cSwitch v-model="flag5" disabled></cSwitch>`
    }
  },
  created () { },
  mounted () { },
  methods: {
    showCode () {
      this.showCodeFlag = !this.showCodeFlag
    }
  }
}
</script>

<style lang="scss">
</style>
