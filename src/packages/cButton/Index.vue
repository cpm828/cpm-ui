<template>
  <div :class="['cpm-cButton', `cpm-cButton--${this.size}`, `cpm-cButton--${this.type}`, {
    'cpm-cButton--plain': this.plain,
    'cpm-cButton--circle': this.circle,
    'cpm-cButton--disabled': this.disabled,
  }]" :style="btnStyle" @click="onClick">
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
    // 是否开启圆角
    circle: {
      type: Boolean,
      default: false
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
  created () { },
  mounted () { },
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
.cpm-cButton {
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  // smaller: 行内超小按钮
  &.cpm-cButton--smaller {
    white-space: nowrap;
    display: inline-flex;
    height: 22px;
    font-size: 12px;
    padding: 0 10px;
    &.cpm-cButton--circle {
      border-radius: 11px;
    }
  }
  // small: 行内小按钮
  &.cpm-cButton--small {
    white-space: nowrap;
    display: inline-flex;
    height: 30px;
    font-size: 14px;
    padding: 0 30px;
    &.cpm-cButton--circle {
      border-radius: 15px;
    }
  }
  // normal: 普通行内按钮
  &.cpm-cButton--normal {
    white-space: nowrap;
    display: inline-flex;
    height: 45px;
    font-size: 16px;
    padding: 0 50px;
    &.cpm-cButton--circle {
      border-radius: 22.5px;
    }
  }
  // 铺满一行大按钮，默认无圆角
  &.cpm-cButton--large {
    display: flex;
    height: 45px;
    font-size: 16px;
    &.cpm-cButton--circle {
      border-radius: 22.5px;
    }
  }

  // default样式
  &.cpm-cButton--default {
    background-color: #dde2ea;
    color: #8a99ab;
    &.cpm-cButton--plain {
      border: 1px solid #8a99ab;
      background-color: transparent;
      color: #8a99ab;
    }
    &.cpm-cButton--disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  // primary样式
  &.cpm-cButton--primary {
    background-image: linear-gradient(90deg, #508bef 0%, #4b5ffe 100%);
    color: #fff;
    &.cpm-cButton--plain {
      background-image: none;
      border: 1px solid #4b5ffe;
      color: #4b5ffe;
    }
    &.cpm-cButton--disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  // danger样式
  &.cpm-cButton--danger {
    background-image: linear-gradient(90deg, #fe7449 0%, #fb2842 100%);
    color: #fff;
    &.cpm-cButton--plain {
      background-image: none;
      border: 1px solid #fb2842;
      color: #fb2842;
    }
    &.cpm-cButton--disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}
</style>
