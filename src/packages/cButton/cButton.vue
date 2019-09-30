<template>
  <div :class="[
    'cpm-cButton',
    this.size,
    this.type,
    this.plain ? 'plain' : '' ,
    this.disabled ? 'disabled' : ''
  ]" :style="btnStyle" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import cIcon from '../cIcon'
export default {
  name: 'cButton',
  components: { cIcon },
  props: {
    // 按钮类型：default、primary、danger
    type: {
      type: String,
      default: 'default'
    },
    // 尺寸: smaller/超小行内按钮、small/行内小按钮、normal/普通行内按钮、large/铺满块级按钮
    size: {
      type: String,
      default: 'normal'
    },
    // 按钮样式，可设置背景色、文字颜色等
    btnStyle: {
      type: Object,
      default: () => { }
    },
    // 幽灵按钮：有边框无背景色
    plain: {
      type: Boolean,
      default: false
    },
    // 按钮禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  computed: {
    // icon配置，Object类型，设定某些字段的默认值
    iconOpt () {
      return Object.assign({
        position: 'left', // icon的位置，文字前left、文字后right
        type: '', // icon类型
        render: 'font-class', // 默认采用font-class方式渲染
        color: '',
        size: ''
      }, this.icon)
    }
  },
  methods: {
    onClick () {
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cButton{
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  // smaller: 行内超小按钮
  &.smaller{
    white-space: nowrap;
    display: inline-flex;
    height: 22px;
    font-size: 12px;
    padding: 0 10px;
    border-radius: 11px;
  }
  // small: 行内小按钮
  &.small{
    white-space: nowrap;
    display: inline-flex;
    height: 30px;
    font-size: 14px;
    padding: 0 30px;
    border-radius: 30px;
  }
  // normal: 普通行内按钮
  &.normal{
    white-space: nowrap;
    display: inline-flex;
    height: 45px;
    font-size: 16px;
    padding: 0 50px;
    border-radius: 22.5px;
  }
  // 铺满一行大按钮，默认无圆角
  &.large{
    display: flex;
    height: 45px;
    font-size: 16px;
  }
  // 样式
  &.default{
    background-color: #dde2ea;
    // color: #acbed0;
    color: #8A99AB;
    &.plain{
      border: 1px solid #8A99AB;
      background-color: transparent;
      color: #8A99AB;
    }
    &.disabled {
      opacity: .6;
      cursor: not-allowed;
    }
  }
  &.primary{
    background-image: linear-gradient(90deg, #508BEF 0%, #4B5FFE 100%);
    color: #fff;
    &.plain{
      background-image: none;
      border: 1px solid #4B5FFE;
      color: #4B5FFE;
    }
    &.disabled {
      opacity: .6;
      cursor: not-allowed;
    }
  }
  &.danger{
    background-image: linear-gradient(90deg, #FE7449 0%, #FB2842 100%);
    color: #fff;
    &.plain{
      background-image: none;
      border: 1px solid #FB2842;
      color: #FB2842;
    }
    &.disabled {
      opacity: .6;
      cursor: not-allowed;
    }
  }
}
</style>
