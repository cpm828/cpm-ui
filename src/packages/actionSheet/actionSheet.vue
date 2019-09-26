<template>
  <div class="cpm-actionsheet" @touchmove="touchmoveActionSheet($event)">
    <transition name="actionsheet-fade">
      <div
        class="cpm-actionsheet-cliper"
        :style="cliperStyleObj"
        @click="clickCliper"
        v-show="animateShow"
      ></div>
    </transition>

    <transition name="actionsheet-slide" v-on:after-leave="afterLeave">
      <div class="cpm-actionsheet-wrap" :style="actionSheetWrapStyle" v-show="animateShow">
        <div class="choice-box">
          <div
            v-for="(actionSheet, index) in actionSheetList"
            :key="index"
            :style="actionSheetItemStyle"
            :class="{'active': activeSheet === actionSheet.key}"
            @click="clickItem(actionSheet)"
          >{{actionSheet.value}}</div>
        </div>
        <div class="cancel-box" :style="actionSheetCancelStyle" v-if="showCancelBtn" @click="clickCancel">取消</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'cpmActionSheet',
  props: {
    // 蒙层样式
    cliperStyleObj: {
      type: Object,
      default: () => { }
    },
    // wrap样式
    actionSheetWrapStyle: {
      type: Object,
      default: () => { }
    },
    // item样式
    actionSheetItemStyle: {
      type: Object,
      default: () => { }
    },
    actionSheetCancelStyle: {
      type: Object,
      default: () => { }
    },
    // 备选列表
    actionSheetList: {
      type: Array,
      default: () => []
    },
    // 激活项
    activeSheet: [String, Number],
    // 是否显示取消按钮
    showCancelBtn: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      animateShow: false
    }
  },
  mounted () {
    this.animateShow = true
    window.addEventListener('hashchange', this.remove)
  },
  methods: {
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
        this.removeOnHashChange && window.removeEventListener('hashchange', this.remove)
      }
    },
    clickCliper () {
      this.$emit('actionSheetClickCliper')
      this.remove()
    },
    clickCancel () {
      this.$emit('actionSheetClickCancel')
      this.remove()
    },
    clickItem (actionSheet) {
      this.$emit('actionSheetChoiceItem', actionSheet)
      this.remove()
    },
    touchmoveActionSheet (e) {
      e.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-actionsheet {
  .cpm-actionsheet-cliper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(14, 14, 14, 0.8);
    z-index: 888;
  }
  .cpm-actionsheet-wrap {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #f3f4f7;
    overflow: hidden;
    z-index: 999;
    border-radius: 5px 5px 0 0;
    color: #333;
    font-size: 16px;
    .choice-box div {
      height: 45px;
      line-height: 45px;
      background: #fff;
      position: relative;
      text-align: center;
      &::after {
        display: block;
        content: "";
        background: #efeff4;
        width: 100%;
        height: 1px;
        overflow: hidden;
        transform: scaleY(0.5);
        position: absolute;
        bottom: 0;
        left: 0;
      }
      &:last-child {
        border-bottom: none;
        &::after {
          display: none;
        }
      }
      &.active {
        color: #415af6;
      }
    }
    .cancel-box {
      height: 45px;
      line-height: 45px;
      background: #fff;
      margin-top: 10px;
      text-align: center;
    }
  }

  // 动画完成流程：v-enter、v-enter-active、v-enter-to，v-leave、v-leave-active、v-leave-to
  .actionsheet-fade-enter,
  .actionsheet-fade-leave-to {
    opacity: 0;
  }
  .actionsheet-fade-enter-active,
  .actionsheet-fade-leave-active {
    transition: opacity 0.2s;
  }
  .actionsheet-fade-enter-to,
  .actionsheet-fade-leave {
    opacity: 1;
  }

  .actionsheet-slide-enter,
  .actionsheet-slide-leave-to {
    transform: translate(0, 100%);
  }
  .actionsheet-slide-enter-active,
  .actionsheet-slide-leave-active {
    transition: transform 0.2s;
  }
  .actionsheet-slide-enter-to,
  .actionsheet-slide-leave {
    transform: translate(0, 0);
  }
}
</style>
