<template>
  <div class="cpm-cProgress">
    <!-- 线条进度 -->
    <div :class="['progress-line-wrap', showTip ? 'progress-line-padding' : '']" v-if="type === 'line'">
      <div class="progress-line">
        <div class="progress-line-content" :style="progressStyle"></div>
      </div>
      <span class="progress-line-tip">30%</span>
    </div>
    <!-- 圆环进度 -->
    <div class="progress-circle" v-else-if="type === 'circle'"></div>
  </div>
</template>

<script>
export default {
  name: 'cProgress',
  props: {
    // 类型：line / circle
    type: {
      type: String,
      default: 'line'
    },
    // 进度百分比
    progress: {
      type: String,
      default: '0'
    },
    // 是否显示进度提示
    showTip: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {

    }
  },
  created () { },
  mounted () { },
  computed: {
    progressStyle () {
      return {
        width: this.progress
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.cpm-cProgress {
  .progress-line-wrap{
    position: relative;
    &.progress-line-padding {
      padding-top: 15px;
    }
    .progress-line {
      height: 4px;
      border-radius: 4px;
      background-color: #e5e5e5;
      overflow: hidden;
      .progress-line-content{
        width: 30%;
        height: 4px;
        background-image: linear-gradient(90deg, #508BEF 0%, #4B5FFE 100%);
      }
    }
    .progress-line-tip{
      width: 30px;
      height: 15px;
      position: absolute;
      bottom: 4px;
      left: 30%;
      margin-left: -15px;
      font-size: 10px;
      color: #333;
    }
  }
}
</style>
