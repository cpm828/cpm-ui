<template>
  <div class="page-wrap progress-wrap">
    <div class="top">Progress长条进度</div>
    <div c_wrap="pl-20 pr-20 ta-l">
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">默认：</p>
        <cProgress progress="20%"></cProgress>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">带动画：</p>
        <cProgress progress="50%" :animate="true"></cProgress>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">带提示：</p>
        <cProgress progress="50%" :animate="true" :showTip="true"></cProgress>
      </div>
    </div>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cProgress.md">查看文档</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  data () {
    return {

    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
