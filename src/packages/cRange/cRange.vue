<template>
  <div :class="['cpm-cRange', disabled ? 'cpm-cRange-disabled' : '']">
    <slot name="left"></slot>
    <div class="c-range-wrap" >
      <div class="c-range-content" ref="content">
        <!-- 可滑动区域 -->
        <div class="c-range-runway"></div>
        <!-- 已滑动进度 -->
        <div class="c-range-progress" :style="progressStyle"></div>
        <!-- 滑块 -->
        <div class="c-range-thumb" ref="thumb" :style="thumbStyle"></div>
      </div>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
import draggable from './draggable'
export default {
  name: 'cRange',
  props: {
    // 当前值，v-model绑定
    value: {
      type: Number,
      default: 0
    },
    // 最小阙值
    min: {
      type: Number,
      default: 0
    },
    // 最大阙值
    max: {
      type: Number,
      default: 100
    },
    // 步长
    step: {
      type: Number,
      default: 1
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  created () { },
  mounted () {
    const content = this.$refs.content // 整个滑块区域
    const thumb = this.$refs.thumb // 拖拽

    // 获取拖拽的位置
    const getThumbPosition = () => {
      const contentBox = content.getBoundingClientRect()
      const thumbBox = thumb.getBoundingClientRect()
      return {
        left: thumbBox.left - contentBox.left, // 滑块左侧距离滑块池左侧的距离
        thumbBoxLeft: thumbBox.left // 滑块距离屏幕左侧的距离
      }
    }

    let dragState = {} // 存储初始状态值
    draggable(thumb, {
      // touchstart / mousedown
      start: (event) => {
        if (this.disabled) return

        const thumbPosition = getThumbPosition()
        const thumbClickDetailX = event.clientX - thumbPosition.thumbBoxLeft // 触点距离滑块左侧距离
        dragState = {
          thumbStartLeft: thumbPosition.left,
          thumbClickDetailX: thumbClickDetailX
        }
      },
      // touchmove / mousemove
      drag: (event) => {
        if (this.disabled) return

        const contentBox = content.getBoundingClientRect()
        /**
         * event.pageX:   触点距离屏幕左侧的距离（变值）
         * contentBox.left:   底部滑块池距离屏幕左侧的距离（定值）
         * dragState.thumbStartLeft:   滑块左侧一开始距离滑块池左侧的距离（即初始进度，定值）
         * dragState.thumbClickDetailX:   触点一开始距离滑块左侧的距离（定值）
         *
         * 初始时 1 = 2 + 3 + 4
         * 1为变值，2、3、4为定值，差值即为拖动的距离
         */
        const diffX = event.pageX - contentBox.left - dragState.thumbStartLeft - dragState.thumbClickDetailX
        const stepCount = Math.ceil((this.max - this.min) / this.step)
        /**
         * dragState.thumbStartLeft + diffX: 当前值
         * (dragState.thumbStartLeft + diffX) % (contentBox.width / stepCount): 步长校验补偿值
         *
         * 差值为校验之后的当前值
         */
        const newPostion = (dragState.thumbStartLeft + diffX) - (dragState.thumbStartLeft + diffX) % (contentBox.width / stepCount)
        let newProgress = newPostion / contentBox.width
        // 处理边界
        if (newProgress < 0) {
          newProgress = 0
        } else if (newProgress > 1) {
          newProgress = 1
        }
        const currentVal = Math.round(this.min + newProgress * (this.max - this.min)) // 当前值
        this.$emit('input', currentVal)
      },
      // touchend / mouseup
      end: (event) => {
        if (this.disabled) return
        this.$emit('onChange', this.value) // 辅助使用
        dragState = {} // 清空
      }
    })
  },
  computed: {
    progress () {
      const value = this.value
      if (typeof value === 'undefined' || value === null) return 0
      return Math.floor((value - this.min) / (this.max - this.min) * 100)
    },
    // 进度条样式
    progressStyle () {
      return {
        width: `${this.progress}%`
      }
    },
    // 滑块样式
    thumbStyle () {
      return {
        left: `${this.progress}%`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cRange {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &.cpm-cRange-disabled{
    opacity: .6;
  }
  .c-range-wrap {
    width: 100%;
    height: 10px;
    display: flex;
    flex: 1;
    border-radius: 5px;
    background-color: #a9acb1;
    .c-range-content{
      width: 100%;
      height: 100%;
      position: relative;
      margin-right: 24px; // 偏离滑块的距离，父级多套了一层div，背景色给父级
    }
    .c-range-runway {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    .c-range-progress {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      border-radius: 5px 0 0 5px;
      background-image: linear-gradient(90deg, #508bef 0%, #4b5ffe 100%);
    }
    .c-range-thumb {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 0 4px 0 #d8d9dc;
      cursor: all-scroll;
    }
  }
}
</style>
