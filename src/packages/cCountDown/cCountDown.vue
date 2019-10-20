<template>
  <div class="cpm-cCountDown">
    <slot :timeData="timeData" v-if="$scopedSlots.default"></slot>
    <template v-else>{{formattedTime}}</template>
  </div>
</template>

<script>
import { formatMSTime } from '../../util/common'
export default {
  name: 'cCountDown',
  props: {
    // 倒计时时长，毫秒
    time: {
      type: Number,
      default: 0
    },
    // 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    // 是否自动开始倒计时
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      endTime: 0, // 结束时间戳
      remain: this.time // 剩余倒计时毫秒
    }
  },
  created () { },
  mounted () { },
  computed: {
    // 格式化后的时间obj: {d:0, h:0, m:0, s:0, ms:0}
    timeData () {
      return formatMSTime(this.remain)
    },
    // 显示的文本 HH:mm:ss
    formattedTime () {
      return this.parseFormatTime(this.format, this.timeData)
    }
  },
  methods: {
    // 根据时间格式转换时间值，如 HH:mm:ss 替换成 12:12:12
    parseFormatTime (format, timeData) {
      let { d, h, m, s, ms } = timeData
      if (format.includes('DD')) {
        format = format.replace('DD', d)
      } else {
        h += d * 24 // 超过上限且无上一个单位时自动补时间，如25个小时，无DD时，展示25:00:00
      }
      if (format.includes('HH')) {
        format = format.replace('HH', `0${h}`.slice(-2))
      } else {
        m += h * 60
      }
      if (format.includes('mm')) {
        format = format.replace('mm', `0${m}`.slice(-2))
      } else {
        s += m * 60
      }
      if (format.includes('ss')) {
        format = format.replace('ss', `0${s}`.slice(-2))
      } else {
        ms += s * 1000
      }
      if (format.includes('SSS')) {
        format = format.replace('SSS', `00${ms}`.slice(-3))
      }
      return format
    },
    // 倒计时
    countDownTime () {
      const leftMS = Math.max(this.endTime - Date.now(), 0) // 结束时间戳 - 当前时间戳 = 剩余时间戳
      this.remain = leftMS
      if (leftMS <= 0) {
        window.cancelAnimationFrame(this.rafId)
        this.$emit('onFinish')
        this.countingFlag = false
      }
    },
    // 开始倒计时
    start () {
      const self = this
      if (self.countingFlag) return
      self.endTime = Date.now() + self.remain
      function step () {
        self.rafId = window.requestAnimationFrame(step) // 注意顺序在前
        self.countDownTime()
      }
      self.rafId = window.requestAnimationFrame(step)
    },
    // 暂停倒计时
    pause () {
      this.countingFlag = false
      window.cancelAnimationFrame(this.rafId)
    },
    // 开始倒计时
    reset () {
      window.cancelAnimationFrame(this.rafId)
      this.countingFlag = false
      this.remain = this.time
      if (this.autoStart) {
        this.start()
      }
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: 'reset'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
