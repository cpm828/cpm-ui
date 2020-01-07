<template>
  <div class="cpm-dialog" @touchstart="touchstartDialog($event)" @touchmove="touchmoveDialog($event)">
    <transition name="dialog-fade">
      <div class="cpm-dialog-cliper" :style="cliperStyleObj" @click="onClickCliper" v-show="animateShow"></div>
    </transition>

    <transition :name="animate ? 'zoom-in' : ''" v-on:after-leave="afterLeave">
      <div class="cpm-dialog-wrap" ref="cpmDialog" :style="dialogWrapStyle" v-show="animateShow">
        <!-- 常规传入 -->
        <div class="cpm-main" :style="contentWrapStyle" v-if="message">
          <div class="cpm-title" v-html="titleText" v-if="showTitle"></div>
          <div class="cpm-content" v-html="message" :style="messageStyle"></div>
        </div>
        <!-- 组件传入 -->
        <cContent :cContentData="cContentData"></cContent>

        <div class="cpm-btn-box">
          <div class="cancel" v-if="showCancelBtn" :style="cancelBtnStyle" @click="onCancel">{{cancelBtnText}}</div>
          <div class="sure" v-if="showConfirmBtn" :style="confirmBtnStyle" @click="onConfirm">{{confirmBtnText}}</div>
        </div>

        <template v-if="showCloseBtn">
          <!-- 右上角关闭按钮 -->
          <cIcon type="close-simple" color="#333" size="1.2rem" class="close-simple"
            v-if="closeBtnPostion === 'rightTop'" @onClick="onClose"></cIcon>
          <!-- 底部关闭按钮 -->
          <cIcon type="close" color="white" size="1.7rem" class="close" v-else @onClick="onClose"></cIcon>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
import cIcon from '../cIcon'
export default {
  name: 'cDialog',
  components: {
    cIcon,
    cContent: {
      template: '<div></div>'
    }
  },
  props: {
    // 蒙层样式
    cliperStyleObj: {
      type: Object,
      default: () => { }
    },
    // 弹窗样式
    dialogWrapStyle: {
      type: Object,
      default: () => { }
    },
    // 主内容样式
    contentWrapStyle: {
      type: Object,
      default: () => { }
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      default: false
    },
    // 标题文本（html）
    titleText: {
      type: String,
      default: '系统通知'
    },
    // 弹窗内容（html）
    message: {
      type: String,
      default: ''
    },
    // 弹窗内容对齐方式：left/center/right
    messageAlign: {
      type: String,
      default: 'center'
    },
    // 是否有动画
    animate: {
      type: Boolean,
      default: false
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
      default: () => { }
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
      default: () => { }
    },
    // 插入组件
    cContentData: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      animateShow: false, // 动画
      scrollableList: null, // 弹窗内可滚动的元素集合
      currentScrollArea: null, // 当前滚动的元素
      dialogMouseInfo: {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
      } // 触摸弹窗阻止滑动所需参数
    }
  },
  mounted () {
    this.animateShow = true
    this.$nextTick(() => {
      if (this.scrollableList === null) {
        this.scrollableList = this.$refs.cpmDialog.querySelectorAll('.scrollable') // 查找所有带scrollable的子元素
      }
    })
    window.addEventListener('hashchange', this.remove)
  },
  computed: {
    messageStyle () {
      return {
        'text-align': this.messageAlign
      }
    }
  },
  methods: {
    touchstartDialog (e) {
      this.currentScrollArea = null
      this.dialogMouseInfo.startX = e.targetTouches[0].clientX
      this.dialogMouseInfo.startY = e.targetTouches[0].clientY
      // 遍历查找到当前触摸且需要滚动的元素，在touchmove时判断是否到达顶部或底部，再决定是否阻止默认行为
      this.scrollableList.forEach((el) => {
        if (el.contains(e.target)) {
          this.currentScrollArea = el
        }
      })
    },
    touchmoveDialog (e) {
      this.dialogMouseInfo.endX = e.targetTouches[0].clientX
      this.dialogMouseInfo.endY = e.targetTouches[0].clientY
      const { startX, startY, endX, endY } = this.dialogMouseInfo

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

      /**
       * 1. 无滑动区域时禁止滑动
       * 2. 有滑动区域时
       *    2.1 横向滑动，右滑到达左侧（el.scrollLeft=0）或左滑到右侧（滚动条大于scorllWidth-offsetWidth）时 阻止滑动
       *    2.2 纵向滑动，下滑到达顶部（el.scrollTop=0）或上滑到达底部（滚动条大于scorllHeight-offsetHeight）时 阻止滑动
       */
      const el = this.currentScrollArea
      if (!el || (el &&
        (
          (directionX === 'right' && el.scrollLeft === 0) ||
          (directionX === 'left' && el.scrollLeft >= (el.scrollWidth - el.offsetWidth))
        ) &&
        (
          (directionY === 'down' && el.scrollTop === 0) ||
          (directionY === 'up' && el.scrollTop >= (el.scrollHeight - el.offsetHeight))
        )
      )) {
        e.preventDefault()
      }
    },
    // 移除
    remove () {
      this.animateShow = false
    },
    // transition leave动画结束
    afterLeave () {
      this._remove()
    },
    // 移除dom、注销组件、移除hash监听
    _remove () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
        this.$destroy()
        window.removeEventListener('hashchange', this.remove)
      }
    },
    // 点击蒙层
    onClickCliper () {
      this.$emit('onClickCliper')
    },
    // 关闭弹窗
    onClose () {
      this.$emit('onClose')
    },
    onCancel () {
      this.$emit('onCancel')
    },
    onConfirm () {
      this.$emit('onConfirm')
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
  .cpm-dialog-wrap {
    width: 270px;
    border-radius: 8px;
    background-color: #fff;
    z-index: 999;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: -135px;
    .cpm-main {
      font-size: 14px;
      color: #333;
      padding: 30px;
      .cpm-title {
        font-size: 17px;
        color: #333;
        font-weight: bold;
        margin-bottom: 16px;
      }
      .cpm-content{
        word-break: break-all;
      }
    }
    .cpm-btn-box {
      height: 45px;
      display: flex;
      border-top: 1px solid #d8d8d8;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        font-size: 15px;
        color: #333;
        &.cancel {
          border-right: 1px solid #d8d8d8;
        }
        &.sure {
          // color: #415af6;
        }
      }
    }
    .close-simple {
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

  // 蒙层动画
  .dialog-fade-enter,
  .dialog-fade-leave-to {
    opacity: 0;
  }
  .dialog-fade-enter-active {
    transition: opacity 0.3s;
  }
  .dialog-fade-leave-active {
    transition: opacity 0.3s 0.2s;
  }
  .dialog-fade-enter-to,
  .dialog-fade-leave {
    opacity: 1;
  }
  // 弹窗内容动画1：zoom-in（中间区域缩小至放大）
  .zoom-in-enter-active {
    animation: zoom-in 0.5s;
  }
  .zoom-in-leave-active {
    animation: zoom-in 0.5s reverse;
  }
  @keyframes zoom-in {
    0% {
      transform: translate(0, -50%) scale(0); // 注意先后顺序
    }
    70% {
      transform: translate(0, -50%) scale(1);
    }
    85% {
      transform: translate(0, -50%) scale(0.95);
    }
    100% {
      transform: translate(0, -50%) scale(1);
    }
  }
}
</style>
