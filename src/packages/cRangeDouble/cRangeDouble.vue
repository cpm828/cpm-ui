<template>
  <div :class="[
    'cpm-cRangeDouble',
    disabled ? 'cpm-cRangeDouble-disabled' : '',
    showValue ? 'cpm-cRangeDouble-paddingtop' : '',
    calibrateList.length ? 'cpm-cRangeDouble-paddingbottom' : '']">
    <slot name="left"></slot>
    <div class="c-rangedouble-wrap" ref="content">
      <!-- 可滑动区域 -->
      <div class="c-rangedouble-runway"></div>
      <!-- 已滑动进度 -->
      <div class="c-rangedouble-progress" :style="progressStyle"></div>
      <!-- 左滑块 -->
      <div class="c-rangedouble-thumb c-rangedouble-thumb-left" ref="leftThumb" :style="leftThumbStyle"><span v-if="showValue">{{value[0]}}</span></div>
      <!-- 右滑块 -->
      <div class="c-rangedouble-thumb c-rangedouble-thumb-right" ref="rightThumb" :style="rightThumbStyle"><span v-if="showValue">{{value[1]}}</span></div>
      <!-- 刻度 -->
      <div>
        <span class="c-rangedouble-calibrate" v-for="(calibrate, index) in calibrateList" :key="index" :style="{left:((calibrate - min) / (max-min) * 100 + '%')}"><i>{{calibrate}}</i></span>
      </div>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
import draggable from './draggable'
export default {
  name: 'cRangeDouble',
  props: {
    // 当前范围
    value: {
      type: Array,
      default: () => [0, 100]
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
    },
    // 显示当前值
    showValue: {
      type: Boolean,
      default: false
    },
    // 显示的刻度
    calibrateList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    const { leftThumb, rightThumb, content } = this.$refs

    // 获取拖拽的位置
    const getThumbPosition = (direction) => {
      const contentBox = content.getBoundingClientRect()
      const leftThumbBox = leftThumb.getBoundingClientRect()
      const rightThumbBox = rightThumb.getBoundingClientRect()
      const thumbBoxLeftValue = direction === 'left' ? leftThumbBox.left : rightThumbBox.left
      return {
        left: thumbBoxLeftValue - contentBox.left, // 滑块左侧距离滑块池左侧的距离
        thumbBoxLeft: thumbBoxLeftValue // 滑块距离屏幕左侧的距离
      }
    }

    let leftDragState = {} // 存储左滑块初始状态值，只存储每次接触时的状态，故使用临时变量
    let rightDragState = {} // 存储右滑块初始状态值
    // 左滑块
    draggable(leftThumb, {
      // touchstart / mousedown
      start: (event) => {
        if (this.disabled) return

        const thumbPosition = getThumbPosition('left')
        const thumbClickDetailX = event.clientX - thumbPosition.thumbBoxLeft // 触点距离滑块左侧距离
        leftDragState = {
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
         * leftDragState.thumbStartLeft:   滑块左侧一开始距离滑块池左侧的距离（即初始进度，定值）
         * leftDragState.thumbClickDetailX:   触点一开始距离滑块左侧的距离（定值）
         *
         * 初始时 1 = 2 + 3 + 4
         * 1为变值，2、3、4为定值，差值即为拖动的距离
         */
        const diffX = event.pageX - contentBox.left - leftDragState.thumbStartLeft - leftDragState.thumbClickDetailX
        const stepCount = Math.ceil((this.max - this.min) / this.step) // 步数
        /**
         * leftDragState.thumbStartLeft + diffX: 当前值
         * (leftDragState.thumbStartLeft + diffX) % (contentBox.width / stepCount): 步长校验补偿值
         *
         * 差值为校验之后的当前值
         */
        const newPostion = (leftDragState.thumbStartLeft + diffX) - (leftDragState.thumbStartLeft + diffX) % (contentBox.width / stepCount)
        let newProgress = newPostion / contentBox.width
        // 处理边界
        if (newProgress < 0) {
          newProgress = 0
        } else if (newProgress > 1) {
          newProgress = 1
        }
        const currentVal = Math.round(this.min + newProgress * (this.max - this.min)) // 当前值
        if (currentVal + this.step > this.value[1]) return
        this.$emit('input', [currentVal, this.value[1]])
      },
      // touchend / mouseup
      end: (event) => {
        if (this.disabled) return
        this.$emit('onChange', this.value) // 辅助使用
        leftDragState = {} // 清空
      }
    })

    // 右滑块
    draggable(rightThumb, {
      start: (event) => {
        if (this.disabled) return
        const thumbPosition = getThumbPosition('right')
        const thumbClickDetailX = event.clientX - thumbPosition.thumbBoxLeft // 触点距离滑块左侧距离
        rightDragState = {
          thumbStartLeft: thumbPosition.left,
          thumbClickDetailX: thumbClickDetailX
        }
      },
      drag: (event) => {
        if (this.disabled) return
        const contentBox = content.getBoundingClientRect()
        const diffX = event.pageX - contentBox.left - rightDragState.thumbStartLeft - rightDragState.thumbClickDetailX
        const stepCount = Math.ceil((this.max - this.min) / this.step) // 步数
        const newPostion = (rightDragState.thumbStartLeft + diffX) - (rightDragState.thumbStartLeft + diffX) % (contentBox.width / stepCount)
        let newProgress = newPostion / contentBox.width
        if (newProgress < 0) {
          newProgress = 0
        } else if (newProgress > 1) {
          newProgress = 1
        }
        const currentVal = Math.round(this.min + newProgress * (this.max - this.min)) // 当前值
        if (currentVal - this.step < this.value[0]) return
        this.$emit('input', [this.value[0], currentVal])
      },
      end: (event) => {
        if (this.disabled) return
        this.$emit('onChange', this.value) // 辅助使用
        rightDragState = {} // 清空
      }
    })
  },
  computed: {
    // 进度
    progress () {
      const value = this.value
      if (typeof value === 'undefined' || value === null || !(value instanceof Array)) return [this.min, this.max]
      return [
        Math.floor((this.value[0] - this.min) / (this.max - this.min) * 100),
        Math.floor((this.value[1] - this.min) / (this.max - this.min) * 100)
      ]
    },
    // 进度条样式
    progressStyle () {
      return {
        width: `${this.progress[1] - this.progress[0]}%`,
        left: `${this.progress[0]}%`
      }
    },
    // 左滑块样式
    leftThumbStyle () {
      return {
        left: `${this.progress[0]}%`
      }
    },
    // 右滑块样式
    rightThumbStyle () {
      return {
        left: `${this.progress[1]}%`
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.cpm-cRangeDouble {
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &.cpm-cRangeDouble-disabled{
    cursor: not-allowed;
    opacity: .6;
  }
  &.cpm-cRangeDouble-paddingtop{
    padding-top: 20px;
  }
  &.cpm-cRangeDouble-paddingbottom{
    padding-bottom: 20px;
  }
  .c-rangedouble-wrap {
    display: flex;
    flex: 1;
    width: 100%;
    height: 10px;
    margin: 0 15px;
    border-radius: 5px;
    background-color: #a9acb1;
    position: relative;
    .c-rangedouble-runway {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    .c-rangedouble-progress {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-image: linear-gradient(90deg, #508bef 0%, #4b5ffe 100%);
    }
    .c-rangedouble-thumb {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 24px;
      height: 24px;
      margin-left: -12px; // 偏离半个滑块
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 0 4px 0 #d8d9dc;
      cursor: all-scroll;
      span{
        position: absolute;
        top: -20px;
        left: 0;
        width: 24px;
        text-align: center;
        font-size: 12px;
      }
      &.c-rangedouble-thumb-left{
        left: 0;
      }
      &.c-rangedouble-thumb-right {
        right: 0;
      }
    }
    .c-rangedouble-calibrate{
      width: 1px;
      height: 10px;
      background-color: #fff;
      position: absolute;
      left: 40%;
      i{
        width: 24px;
        position: absolute;
        top: 20px;
        left: 0;
        text-align: center;
        font-size: 12px;
        margin-left: -12px;
      }
    }
  }
}
</style>
