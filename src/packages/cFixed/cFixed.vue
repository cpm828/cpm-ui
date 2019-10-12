<template>
  <div class="cpm-cFixed" ref="cFixedContent">
    <!-- 固定头部 -->
    <header @touchmove.prevent>
      <slot name="header" ref="header"></slot>
    </header>

    <!-- 主内容 -->
    <main ref="main" @touchstart="touchstartMain" @touchmove="touchmoveMain">
      <!-- 不具名的slot会自动读取除具名slot外的所有元素 -->
      <slot></slot>
    </main>

    <!-- 固定底部 -->
    <footer @touchmove.prevent>
      <slot name="footer" ref="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'cFixed',
  data () {
    return {
      mouseInfo: {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
      } // 触摸滑动所需参数
    }
  },
  created () {},
  mounted () {},
  methods: {
    touchstartMain (e) {
      this.mouseInfo.startX = e.targetTouches[0].clientX
      this.mouseInfo.startY = e.targetTouches[0].clientY
    },
    touchmoveMain (e) {
      const mainContent = this.$refs.main
      this.mouseInfo.endX = e.targetTouches[0].clientX
      this.mouseInfo.endY = e.targetTouches[0].clientY

      const { startX, startY, endX, endY } = this.mouseInfo
      // 获取滑动方向
      let directionY = ''
      if (endY > startY) {
        directionY = 'down'
      } else if (endY < startY) {
        directionY = 'up'
      }

      let directionX = ''
      if (endX > startX) {
        directionX = 'right'
      } else if (endX < startX) {
        directionX = 'left'
      }

      if (
        (
          (directionX === 'right' && mainContent.scrollLeft === 0) ||
          (directionX === 'left' && mainContent.scrollLeft >= (mainContent.scrollWidth - mainContent.offsetWidth))
        ) &&
        (
          (directionY === 'down' && mainContent.scrollTop === 0) ||
          (directionY === 'up' && mainContent.scrollTop >= (mainContent.scrollHeight - mainContent.offsetHeight))
        )
      ) {
        e.cancelable && e.preventDefault()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cFixed{
  display: flex;
  flex-direction: column;
  height: 100%;
  >main{
    display: block;
    flex: 1;
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
