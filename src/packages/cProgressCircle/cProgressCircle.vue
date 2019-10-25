<template>
  <div class="cpm-cProgressCircle">
    <svg
      class="progresscircle-svg"
      preserveAspectRatio="xMidYMid"
      :viewBox="`0 0 ${viewBoxSize} ${viewBoxSize}`"
      :style="{width: `${size / 18.75}rem`, height: `${size / 18.75}rem`}">
      <circle
        fill="none"
        :stroke="color[0]"
        :stroke-width="strokeWidth"
        :cx="viewBoxSize / 2"
        :cy="viewBoxSize / 2"
        :r="radius"
      ></circle>
      <g class="circle" v-if="!$slots.circle">
        <circle
          v-if="autoAni || process > 0"
          fill="transparent"
          :stroke-dasharray="`${110 * circlePerimeter / 125}`"
          stroke-linecap="round"
          :stroke="color[1]"
          :cx="viewBoxSize / 2"
          :cy="viewBoxSize / 2"
          :stroke-width="strokeWidth"
          :r="radius"
          class="stroke">
          <animate
            v-if="autoAni"
            attributeName="stroke-dashoffset"
            :values="autoAni ? `${360 * circlePerimeter / 125};${140 * circlePerimeter / 125}` : strokeDasharray"
            dur="2.2s"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
            keySplines="0.41,0.314,0.8,0.54"
            repeatCount="indefinite"
            begin="0"
          />
          <animateTransform
            v-if="autoAni"
            :dur="`${duration}s`"
            :values="`0 ${viewBoxSize / 2} ${viewBoxSize /2 };360 ${viewBoxSize / 2} ${viewBoxSize / 2}`"
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            keyTimes="0;1"
            begin="0"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </g>
      <slot name="circle" v-else></slot>
      <slot name="defs"></slot>
    </svg>
  </div>
</template>

<script>
/**
 * svg属性介绍：
 * svg:
 *    preserveAspectRatio: 保持宽高比
 *        viewBox的X轴中点对齐viewport的X轴中点，viewBox的Y轴中点对齐viewport的Y轴中点
 *    viewBox: 坐标系统，[min-x, min-y, width, height]
 *
 * circle:
 *    fill: 填充色
 *    stroke: 线颜色
 *    stroke-width: 线宽度
 *    cx: 圆心x
 *    cy: 圆心y
 *    r: 圆半径
 *    stroke-linecap: 结束点的样式，圆round / 方squar
 *    stroke-dasharray:
 */
export default {
  name: 'cProgressCircle',
  props: {
    // 进度百分比
    process: {
      type: Number,
      default: 0
    },
    // 是否开启动画
    transition: {
      type: Boolean,
      default: false
    },
    // duration: {
    //   type: Number,
    //   default: 1000
    // },
    // 是否显示进度提示
    showTip: {
      type: Boolean,
      default: false
    },
    // 圆环直径
    size: {
      type: Number,
      default: 100
    },
    // 圆环粗细
    strokeWidth: {
      type: Number,
      default: 8
    },
    // 颜色 [未激活，已激活]
    color: {
      type: Array,
      default: () => ['#C8C7CC', '#4574ff']
    }
  },
  data () {
    return {}
  },
  created () {
  },
  mounted () {
  },
  computed: {
    // 舞台size
    viewBoxSize () {
      return this.size + 2 * this.strokeWidth
    },
    // 半径
    radius () {
      return this.size / 2
    },
    // 周长
    circlePerimeter () {
      return this.size * Math.PI
    },
    //
    strokeDasharray () {
      return `${this.process * this.circlePerimeter} ${(1 - this.process) * this.circlePerimeter}`
    },
    autoAni () {
      return this.process === undefined
    },
    duration () {
      return 2
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.cpm-cProgressCircle {
  .progresscircle-svg{
    transform: rotateZ(-90deg);
  }
}
</style>
