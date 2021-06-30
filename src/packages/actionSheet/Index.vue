<template>
  <div class="cpm-actionsheet" id="cpmActionSheet" @touchmove="touchmoveActionSheet($event)">
    <transition name="actionsheet-fade">
      <div
        class="cpm-actionsheet-cliper"
        :style="cliperStyleObj"
        @click="onClickCliper"
        v-show="animateShow"
      ></div>
    </transition>

    <transition name="actionsheet-slide" v-on:after-leave="afterLeave">
      <div class="cpm-actionsheet-wrap" :style="actionSheetWrapStyle" v-show="animateShow">
        <div v-if="actionSheetTip" class="cpm-actionsheet-tip">{{actionSheetTip}}</div>

        <div class="choice-box">
          <div
            v-for="actionSheet in actionSheetList"
            :key="actionSheet.key"
            :style="[actionSheetItemStyle, actionSheet._actionsheetItemStyle]"
            :class="{'active': activeSheet === actionSheet.key}"
            @click="onChoiceItem(actionSheet)"
          >{{actionSheet.value}}</div>
        </div>

        <div class="choice-box choice-box2">
          <div
            v-for="actionSheet in actionSheetList2"
            :key="actionSheet.key"
            :style="[actionSheetItemStyle, actionSheet._actionsheetItemStyle]"
            :class="{'active': activeSheet === actionSheet.key}"
            @click="onChoiceItem(actionSheet)"
          >{{actionSheet.value}}</div>
        </div>

        <div
          class="cancel-box"
          :style="actionSheetCancelStyle"
          v-if="showCancelBtn"
          @click="onCancel"
        >{{actionSheetCancelText}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'cActionSheet',
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
    // 备选列表（对于绝大多数场景来说，使用actionSheetItemStyle可以实现样式的统一控制，但是如果出现每个item样式不一样的情况，可在actionSheetList每一项中增加一个_actionsheetItemStyle）
    actionSheetList: {
      type: Array,
      default: () => []
    },
    // 极少数情况下，我们需要将备选项分类展示，目前暂时只考虑2级分类
    actionSheetList2: {
      type: Array,
      default: () => []
    },
    // 激活项
    activeSheet: [String, Number],
    // 是否显示提示文案（非空时默认占第一行）
    actionSheetTip: {
      type: String,
      default: ''
    },
    // 是否显示取消按钮
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    // 取消按钮文案
    actionSheetCancelText: {
      type: String,
      default: '取消'
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
    window.addEventListener('pushstate', this.remove)
    window.addEventListener('replacestate', this.remove)
    window.addEventListener('popstate', this.remove)
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
        window.removeEventListener('hashchange', this.remove)
        window.removeEventListener('pushstate', this.remove)
        window.removeEventListener('replacestate', this.remove)
        window.removeEventListener('popstate', this.remove)
      }
    },
    onClickCliper () {
      this.$emit('onClickCliper')
      this.remove()
    },
    onCancel () {
      this.$emit('onCancel')
      this.remove()
    },
    onChoiceItem (actionSheet) {
      this.$emit('onChoiceItem', actionSheet)
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
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #f3f4f7;
    overflow: hidden;
    z-index: 999;
    border-radius: 5px 5px 0 0;
    color: #333;
    font-size: 16px;
    .cpm-actionsheet-tip{
      font-size: 12px;
      color: #888;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 10px;
      height: 45px;
      line-height: 45px;
      background: #fff;
      position: relative;
      &::after {
        content: "";
        display: block;
        background: #efeff4;
        width: 100%;
        height: 1px;
        overflow: hidden;
        transform: scaleY(0.5);
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    .choice-box div {
      height: 45px;
      line-height: 45px;
      background: #fff;
      position: relative;
      text-align: center;
      &::after {
        content: "";
        display: block;
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
    .choice-box2 {
      margin-top: 10px;
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
