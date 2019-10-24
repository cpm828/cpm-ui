<template>
  <div class="page-wrap progress-wrap">
    <div class="top">ProgressCircle圆环进度</div>
    <div c_wrap="pl-20 pr-20 ta-l">
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">默认：</p>
        <cProgressCircle progress="50%"></cProgressCircle>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">带动画：</p>
        <cProgressCircle progress="50%" :animate="true"></cProgressCircle>
      </div>
    </div>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm-ui/tree/gh-pages/document/cProgressCircle.md">查看文档</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressCircle',
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
