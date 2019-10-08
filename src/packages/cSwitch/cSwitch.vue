<template>
  <div :class="[
    'cpm-cSwitch',
    hasSlot ? 'hasSlot' : '',
    value ? 'active' : '',
    disabled ? 'disabled' : '']" :style="switchStyle" @click="onClick">
      <span class="tip" ref="switchSlot"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'cSwitch',
  props: {
    // v-model传入
    value: {
      type: Boolean,
      default: false
    },
    // 颜色
    color: {
      type: String,
      default: '#4574ff'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hasSlot: false // 是否有插槽内容
    }
  },
  mounted () {
    this.hasSlot = this.$refs.switchSlot.innerHTML !== ''
  },
  computed: {
    switchStyle () {
      // 激活时
      if (this.value && this.color) {
        return {
          'border-color': this.color,
          'background-color': this.color
        }
      }
    }
  },
  methods: {
    onClick () {
      if (this.disabled) return
      this.$emit('input', !this.value)
      this.$emit('onClick') // 辅助使用
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cSwitch{
  display: inline-flex;
  position: relative;
  width: 52px;
  height: 32px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #d9d9d9;
  border: 1px solid #d9d9d9;

  // 插槽提示
  .tip{
    width: 20px;
    height: 100%;
    position: absolute;
    left: 30px;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d9d9d9;
    font-size: 16px;
    transition: all 0.3s linear;
  }

  // 开关闭合时的背景色
  &::before{
    content: '';
    width: 50px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 15px;
    background-color: #fdfdfd;
    transition: all 0.3s linear;
  }
  // 圆
  &::after{
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.3s linear;
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
  }

  // 打开开关
  &.active{
    border-color: #4574ff;
    background-color: #4574ff;
    &::before{
      transform: scale(0);
    }
    // 圆
    &::after{
      transform: translate(20px);
    }
    .tip{
      transform: translate(-30px);
      color: #fff;
    }
  }

  // 有插槽内容，需要改变宽度
  &.hasSlot{
    width: 62px;
    &::before{
      width: 60px;
    }
    &.active{
      &::after{
        transform: translate(30px);
      }
      .tip{
        margin-left: 2px;
      }
    }
    .tip{
      width: 30px;
      margin-left: -2px;
    }
  }

  // 禁用
  &.disabled{
    cursor: not-allowed;
    opacity: .4;
    &::before{
      background-color: #ccc;
    }
  }
}
</style>
