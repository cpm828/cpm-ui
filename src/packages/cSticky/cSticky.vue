<template>
  <div class="cpm-cSticky" :style="headerViewStyle" ref="headerView">
    <div class="c-sticky-wrap" :style="headerWrapStyle" ref="headerWrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cSticky',
  props: {
    scrollEl: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      headerViewStyle: {},
      headerWrapStyle: {}
    }
  },
  created () { },
  mounted () {
    // 获取初始值
    this.headerViewStyle = {
      height: this.$refs.headerWrap.offsetHeight + 'px'
    }
    this.headerOffsetTop = this.$refs.headerWrap.offsetTop
    // 监听touch事件
    this.scrollDom = this.scrollEl ? document.querySelector(this.scrollEl) : window
    this.scrollDom.addEventListener('touchstart', this.handleTouchStart)
  },
  methods: {
    handleTouchStart () {
      this.scrollDom.addEventListener('touchmove', this.handleTouchMove)
      this.scrollDom.addEventListener('touchend', this.handleTouchEnd)
      window.addEventListener('hashchange', this.hashChangeEvent)
    },
    handleTouchMove () {
      this.setHeader()
    },
    handleTouchEnd () {
      this.startAnimateWatch()
    },
    setHeader () {
      const scrollTop = this.scrollEl ? this.scrollDom.scrollTop : document.documentElement.scrollTop
      if (scrollTop >= this.headerOffsetTop) {
        this.headerWrapStyle = {
          position: 'fixed'
        }
      } else {
        this.headerWrapStyle = {
          position: 'relative'
        }
      }
    },
    // touchend存在惯性滚动，此时无法获取自动scrollTop，所以使用轮询监听，轮询5s
    startAnimateWatch () {
      const self = this
      let start = null // 起始时间

      function step (timestamp) {
        if (!start) start = timestamp
        const progress = timestamp - start
        if (progress < 5000) {
          self.timeId = requestAnimationFrame(step)
        }
        self.setHeader()
      }
      self.timeId && cancelAnimationFrame(self.timeId)
      self.timeId = requestAnimationFrame(step)
    },
    // hash变化时销毁监听
    hashChangeEvent () {
      this.timeId && cancelAnimationFrame(this.timeId)
      window.removeEventListener('hashchange', this.hashChange)
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cSticky {
  .c-sticky-wrap {
    width: 100%;
    left: 0;
    top: 0;
  }
}
</style>
