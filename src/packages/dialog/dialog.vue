<template>
  <div class="cpm-dialog" @touchstart="touchstartDialog($event)" @touchmove="touchmoveDialog($event)">
    <div class="cpm-dialog-cliper" :style="cliperStyleObj" @click="clickCliper" v-show="animateShow"></div>
    <div class="cpm-dialog-wrap" :style="dialogWrapStyle" v-show="animateShow">
      <div class="cpm-main">
        <div class="cpm-title" v-if="showTitle">系统通知</div>
        <div class="cpm-content" v-html="message"></div>
      </div>
      <div class="cpm-btn-box">
        <div class="cancel" v-if="showCancelBtn" :style="cancelBtnStyle">{{cancelBtnText}}</div>
        <div class="sure" v-if="showConfirmBtn" :style="confirmBtnStyle">{{confirmBtnText}}</div>
      </div>
      <!-- 关闭按钮在右上角 -->
      <cIcon type="close-simple" color="#333" size="1.2rem" class="close-simple" v-if="showCloseBtn && closeBtnPostion === 'rightTop'"></cIcon>
      <!-- 关闭按钮在底部 -->
      <cIcon type="close" color="white" size="1.7rem" class="close" v-else></cIcon>
    </div>
  </div>
</template>

<script>
import cIcon from '../cIcon'
export default {
  name: 'cpmDialog',
  components: { cIcon },
  props: {
    // 蒙层样式
    cliperStyleObj: {
      type: Object,
      default: () => { }
    },
    // 弹窗主内容样式
    dialogWrapStyle: {
      type: Object,
      default: () => { }
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      default: true
    },
    // 弹窗内容（html）
    message: {
      type: String,
      default: ''
    },
    // 是否取消按钮
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    // 取消按钮文本
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    // 取消按钮样式
    cancelBtnStyle: {
      type: Object,
      default: () => {}
    },
    // 是否确定按钮
    showConfirmBtn: {
      type: Boolean,
      default: true
    },
    // 确定按钮文本
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    // 确定按钮样式
    confirmBtnStyle: {
      type: Object,
      default: () => {}
    },
    // 是否显示关闭按钮
    showCloseBtn: {
      type: Boolean,
      default: false
    },
    // 关闭按钮的位置：rightTop/bottom
    closeBtnPostion: {
      type: String,
      default: 'rightTop'
    }
  },
  data () {
    return {
      animateShow: false,
      currentScrollArea: null, // 当前滚动的元素
      scrollList: null, // 弹窗内可滚动的元素集合
      dialogMouseInfo: {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
      }
    }
  },
  mounted () {
    this.animateShow = true
    // this.$nextTick(() => {
    //   this.viewWidth = document.documentElement.clientWidth
    //   this.viewHeight = document.documentElement.clientHeight
    // })
  },
  methods: {
    // touchstartDialog (e) {
    //   this.dialogMouseInfo.startX = e.targetTouches[0].clientX
    //   this.dialogMouseInfo.startY = e.targetTouches[0].clientY
    // },
    // touchmoveDialog (e) {
    //   this.dialogMouseInfo.endX = e.targetTouches[0].clientX
    //   this.dialogMouseInfo.endY = e.targetTouches[0].clientY

    //   // 获取滑动方向
    //   let directionY = ''
    //   if (this.dialogMouseInfo.endY - this.dialogMouseInfo.startY > 0) {
    //     directionY = 'down'
    //   } else if (this.dialogMouseInfo.endY - this.dialogMouseInfo.startY < 0) {
    //     directionY = 'up'
    //   }

    //   // 到达顶部（滚动条为0）或底部（滚动条大于scorllHeight-offsetHeight）时
    //   if (!this.currentScrollArea || (this.currentScrollArea &&
    //     (
    //       (directionY === 'up' && this.currentScrollArea.scrollTop === 0) ||
    //       (directionY === 'bottom' && this.currentScrollArea.scrollTop >= (this.currentScrollArea.scrollHeight - this.this.currentScrollArea.offsetHeight))
    //     )
    //   )) {
    //     e.preventDefault()
    //   }
    // },
    // 点击蒙层
    clickCliper () {
      this.$emit('dialogClickCliper')
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-dialog {
  .cpm-dialog-cliper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(14, 14, 14, 0.8);
    z-index: 888;
  }
  .cpm-dialog-wrap{
    width: 270px;
    border-radius: 8px;
    background-color: #fff;
    z-index: 999;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: -135px;
    .cpm-main{
      font-size: 14px;
      color: #333;
      padding: 30px;
      .cpm-title{
        font-size: 17px;
        color: #333;
        font-weight: bold;
        margin-bottom: 16px;
      }
    }
    .cpm-btn-box{
      height: 45px;
      display: flex;
      border-top: 1px solid #D8D8D8;
      div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        font-size: 15px;
        color: #333;
        &.cancel{
          border-right: 1px solid #D8D8D8;
        }
        &.sure{
          color: #415AF6;
        }
      }
    }
    .close-simple{
      position: absolute;
      right: 10px;
      top: 10px;
    }
    .close {
      position: absolute;
      bottom: -62px;
      left: 50%;
      margin-left: -16px;
    }
  }
}
</style>
