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
    // 吸顶距离
    top: {
      type: Number,
      default: 0
    },
    // 滚动元素（可传class或id，也可传dom对象）
    container: null
  },
  data () {
    return {
      headerViewStyle: {},
      headerWrapStyle: {}
    }
  },
  created () { },
  mounted () {
    this.$nextTick(() => {
      // 支持sticky布局的走stick，不支持的安卓走scroll监听，iOS走touch监听
      if (CSS.supports('position', 'sticky') || CSS.supports('position', '-webkit-sticky')) {
        this.headerViewStyle = {
          'position': '-webkit-sticky',
          'position': 'sticky',
          'top': `${this.top}px`
        }
      } else {
        // 获取初始值
        this.headerViewStyle = {
          height: this.$refs.headerWrap.offsetHeight + 'px'
        }
        this.scrollDom = this.container || window
        if (!this.container) {
          this.scrollDom = window
        } else if (typeof this.container === 'object') {
          this.scrollDom = this.container
        } else {
          this.scrollDom = document.querySelector(this.container)
        }
        this.scrollDom.addEventListener('scroll', this.setHeader)
      }
    })
  },
  methods: {
    setHeader () {
      if (this.$refs.headerView.getBoundingClientRect().top <= this.top) {
        this.headerWrapStyle = {
          position: 'fixed',
          top: `${this.top}px`
        }
      } else {
        this.headerWrapStyle = {
          position: 'relative'
        }
      }
    },
    // hash变化时销毁监听
    hashChangeEvent () {
      this.scrollDom.removeEventListener('scroll', this.setHeader)
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
