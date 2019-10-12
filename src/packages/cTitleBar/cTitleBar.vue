<template>
  <div :class="['cpm-cTitleBar', showBottomBorder ? 'cpm-cTitleBar-bottomBorder' : '']" :style="wraperStyle">
    <div class="c-left" @click="onClickLeft" v-if="showBack">
      <slot name="left">
        <!-- 左侧默认展示返回icon -->
        <cIcon type="arrow-left" size="1.7rem" :color="iconColor"></cIcon>
      </slot>
    </div>

    <div class="c-center">
      <slot name="center">
        <div class="c-center-title">{{title}}</div>
      </slot>
    </div>

    <div class="c-right" @click="onClickRight">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cTitleBar',
  props: {
    // 标题内容
    title: {
      type: String,
      default: ''
    },
    // 左侧是否显示返回按钮
    showBack: {
      type: Boolean,
      default: true
    },
    // 是否全屏，全屏时需要预留paddingTop占据电池栏的高度，paddingTop需要考虑iOS刘海屏，通常安卓全屏时不包括电池栏。
    fullScreen: {
      type: Boolean,
      default: false
    },
    // titleBar颜色
    wraperStyle: {
      type: Object,
      default: () => { }
    },
    // 显示底边框
    showBottomBorder: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  computed: {
    // 设置了wraperStyle且带color时，icon使用该颜色
    iconColor () {
      if (this.wraperStyle && this.wraperStyle.color) {
        return this.wraperStyle.color
      }
      return '#333'
    }
  },
  methods: {
    onClickLeft () {
      this.$emit('onClickLeft')
    },
    onClickRight () {
      this.$emit('onClickRight')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/1px.scss";
.cpm-cTitleBar {
  height: 45px;
  line-height: 45px;
  background-color: #fff;
  color: #333;
  position: relative;
  font-family: 'PingFangSC-Medium';
  &.cpm-cTitleBar-bottomBorder{
    &:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #ddd;
      color: #ddd;
      transform-origin: 0 100%;
      transform: scaleY(0.5);
    }
  }
  .c-left{
    min-width: 45px;
    height: 45px;
    position: absolute;
    left: 5px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  .c-center{
    height: 45px;
    margin: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .c-center-title{
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .c-right{
    min-width: 45px;
    height: 45px;
    position: absolute;
    right: 5px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
}
</style>
