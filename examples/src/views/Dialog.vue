<template>
  <div class="page-wrap dialog-wrap">
    <h2>Dialog弹窗</h2>
    <a class="aLink" c_wrap="fs-12" href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/Dialog.md">查看文档</a>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'dialog',
  components: { codeBlock },
  mounted () {
    this.$dialog({
      propsData: {
        showCancelBtn: true,
        cancelBtnPostion: 'rightTop'
      }
    })
  },
  methods: {
  }
}
</script>
