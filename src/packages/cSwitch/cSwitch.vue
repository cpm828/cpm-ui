<template>
  <div :class="[
    'cpm-cSwitch',
    size,
    value ? 'active' : '',
    disabled ? 'disabled' : '']" :style="switchStyle" @click="onClick">
      <span class="tip"><slot></slot></span>
    </div>
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
    // size: small/normal，也可以方式small样式进行覆盖
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      tpye: Boolean,
      default: false
    }
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
    height: 30px;
    position: absolute;
    left: 30px;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d9d9d9;
    font-size: 16px;
    transition: transform 0.3s linear;
  }

  // 开关闭合时的背景色
  &::before{
    content: '';
    width: 50px;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 15px;
    background-color: #fdfdfd;
    transition: transform 0.3s linear;
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
    transition: transform 0.3s linear;
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

  // small size
  &.small{
    width: 42px;
    height: 26px;
    border-radius: 13px;
    .tip{
      width: 14px;
      left: 24px;
    }
    &::before{
      width: 40px;
      height: 24px;
      border-radius: 12px;
    }
    &::after{
      width: 24px;
      height: 24px;
    }
    &.active{
      &::after{
        transform: translate(16px);
      }
      .tip{
        transform: translate(-24px);
        color: #fff;
      }
    }
  }
  // 禁用
  &.disabled{
    
  }
}
</style>
