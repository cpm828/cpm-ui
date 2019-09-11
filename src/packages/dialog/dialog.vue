<template>
  <div
    class="cpm-dialog"
    @touchstart="touchstartActionSheet($event)"
    @touchmove="touchmoveActionSheet($event)"
  ></div>
</template>

<script>
export default {
  data () {
    return {
      currentScrollArea: null, // 当前滚动的元素
      scrollList: null, // 弹窗内可滚动的元素集合
      actionSheetMouseInfo: {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.viewWidth = document.documentElement.clientWidth
      this.viewHeight = document.documentElement.clientHeight
    })
  },
  methods: {
    touchstartActionSheet (e) {
      this.actionSheetMouseInfo.startX = e.targetTouches[0].clientX
      this.actionSheetMouseInfo.startY = e.targetTouches[0].clientY
    },
    touchmoveActionSheet (e) {
      this.actionSheetMouseInfo.endX = e.targetTouches[0].clientX
      this.actionSheetMouseInfo.endY = e.targetTouches[0].clientY

      // 获取滑动方向
      let directionY = ''
      if (this.actionSheetMouseInfo.endY - this.actionSheetMouseInfo.startY > 0) {
        directionY = 'down'
      } else if (this.actionSheetMouseInfo.endY - this.actionSheetMouseInfo.startY < 0) {
        directionY = 'up'
      }

      // 到达顶部（滚动条为0）或底部（滚动条大于scorllHeight-offsetHeight）时
      if (!this.currentScrollArea || (this.currentScrollArea &&
        (
          (directionY === 'up' && this.currentScrollArea.scrollTop === 0) ||
          (directionY === 'bottom' && this.currentScrollArea.scrollTop >= (this.currentScrollArea.scrollHeight - this.this.currentScrollArea.offsetHeight))
        )
      )) {
        e.preventDefault()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-dialog {
}
</style>
