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
      remain: 0 // 剩余倒计时毫秒
    }
  },
  created () {
  },
  mounted () {
    // 部分webview退出后台时可能会停止倒计时，所以不可以直接使用time进行递减，开始倒计时加上当前时间戳得到结束倒计时，后续一直与结束时间比较
    // if (this.autoStart) {
    //     console.log(Date.now() + this.time)
    //     this.countDownTime(Date.now() + this.time)
    // }
  },
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
      const { d, h, m, s, ms } = timeData
      if (format.includes('DD')) {
        format = format.replace('DD', d)
      }
      if (format.includes('HH')) {
        format = format.replace('HH', h)
      }
      if (format.includes('mm')) {
        format = format.replace('mm', m)
      }
      if (format.includes('ss')) {
        format = format.replace('ss', s)
      }
      if (format.includes('SSS')) {
        format = format.replace('SSS', ms)
      }
      return format
    },
    // 倒计时
    countDownTime () {
      const leftMS = Math.max(this.endTime - Date.now(), 0) // 结束时间戳 - 当前时间戳 = 剩余时间戳
      this.remain = leftMS
      if (leftMS === 0) {
        clearInterval(this.countId)
        this.remain = 0 // 存在5ms左右的偏差，需要手动清零
        this.$emit('onFinish')
      }
    },
    // 开始倒计时
    start () {
      this.remain = this.time
      this.endTime = Date.now() + this.remain
      this.countDownTime()
      this.countId = setInterval(() => {
        this.countDownTime()
      }, this.format.includes('SSS') ? 1 : 1000)
    },
    // 暂停倒计时
    pause () {

    },
    // 开始倒计时
    reset () {
      // this.remain = this.time
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
