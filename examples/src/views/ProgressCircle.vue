<template>
  <div class="page-wrap progress-wrap">
    <div class="top">ProgressCircle圆环进度</div>
    <div c_wrap="pl-20 pr-20 ta-l">
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">默认：</p>
        <cProgressCircle :process="0.1">
          <slot></slot>
          <template slot="defs">
            <slot name="defs"></slot>
          </template>
        </cProgressCircle>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">带动画：</p>
        <cProgressCircle :process="0.5" :animate="true"></cProgressCircle>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">自定义颜色：</p>
        <cProgressCircle :process="0.5" :animate="true" :color="['#C8C7CC', '#f00']"></cProgressCircle>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">自定义线宽：</p>
        <cProgressCircle :process="0.5" :animate="true" :strokeWidth="12"></cProgressCircle>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">自定义大小：</p>
        <cProgressCircle :process="0.5" :animate="true" :size="150"></cProgressCircle>
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
