<template>
  <div class="cpm-cProgressCircle">
    <canvas ref="progressCanvas" :width="size" :height="size"></canvas>
  </div>
</template>

<script>
export default {
  name: 'cProgressCircle',
  props: {
    // 进度百分比
    progress: {
      type: String,
      default: '0'
    },
    // 是否开启动画
    animate: {
      type: Boolean,
      default: false
    },
    // 是否显示进度提示
    showTip: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
    this.initDraw()
  },
  computed: {
    canvasStyle () {
      const sizeRem = `${this.size / 18.75}rem`
      return {
        width: sizeRem,
        height: sizeRem
      }
    }
  },
  methods: {
    initDraw () {
      const canvas = this.$refs.progressCanvas,
        context = canvas.getContext('2d'),
        cirX = canvas.width / 2, // 圆心x
        cirY = canvas.height / 2, // 圆心y
        rad = Math.PI * 2 / 100,
        speed = 100,
        r = this.size / 2 // 半径
      let n = 1

      // 绘制最外层细圈
      function writeCircle () {
        context.save()
        context.beginPath() // 开始路径
        context.strokeStyle = '#ccc' // 设置边线的颜色
        context.lineWidth = 10
        context.arc(cirX, cirY, r - 5, 0, Math.PI * 2, false) // 画一个圆的路径
        context.stroke() // 绘制边线
        context.restore()
      }

      // 绘制蓝色外圈
      function writeBlue (n) {
        context.save()
        context.strokeStyle = '#4574ff'
        context.lineWidth = 10
        context.beginPath()
        context.arc(cirX, cirY, r - 5, -Math.PI / 2, -Math.PI / 2 + rad * n, false)
        context.stroke()
        context.restore()
      }

      // 绘制文本
      function writeText (n) {
        context.save()
        context.strokeStyle = '#4574ff'
        context.font = '26px Arial'
        context.strokeText(n.toFixed(0) + '%', cirX - 30, cirY + 10)
        context.stroke()
        context.restore()
      }

      function DreamLoading () {
        // 清除所有，重新绘制
        context.clearRect(0, 0, canvas.width, canvas.height)
        writeCircle()
        writeText(n)
        writeBlue(n)
        if (n < 100) {
          n = n + 2
        }
        requestAnimationFrame(DreamLoading)
      }
      DreamLoading()
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cProgressCircle {
}
</style>
