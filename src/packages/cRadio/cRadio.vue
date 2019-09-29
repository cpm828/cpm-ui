<template>
  <div class="cpm-cRadio" @click="onClick" v-if="!hidden">
    <cIcon :type="iconType" :color="iconColor"></cIcon><span class="label" v-if="label">{{label}}</span>
  </div>
</template>

<script>
import cIcon from '../cIcon'

/**
 * cRadio组件可单独使用，也应用于cRadioGroup单选组，由type判断
 * cRadio单独使用所需核心字段：value(v-model传入)、currentValue
 * cRadioGroup单选组使用所需核心字段：select
 */
export default {
  name: 'cRadio',
  components: { cIcon },
  props: {
    // 类型：radio/radio使用，radioGroup/radioGroup使用
    type: {
      type: String,
      default: 'radio'
    },
    // 表单值：radio单选使用，v-model传入
    value: {
      type: [Boolean, Number, String],
      default: false
    },
    // 当前radio是否选中：radioGroup单选组使用
    select: {
      type: Boolean,
      default: false
    },
    // 文字：为空时只显示radio
    label: {
      type: String,
      default: ''
    },
    // 是否禁用（不可点击 且 不上传）
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否设置为隐藏（隐藏 且 上传）
    hidden: {
      type: Boolean,
      default: false
    },
    // radio icon颜色：'正常颜色' 、 ['正常颜色', '不可选置灰色']
    radioColor: {
      type: [String, Array],
      default: () => ['#4574ff', '#C8C7CC']
    }
  },
  data () {
    return {
      currentValue: false // 设置一个中间变量，防止修改父组件数据，radio使用
    }
  },
  computed: {
    // 处理一下radioColor传参类型，既可以传一个字符串表示正常颜色，也可以传数组['正常颜色', '不可选置灰色']
    radioColorList () {
      if (typeof this.radioColor === 'string') return this.radioColor ? [this.radioColor, '#C8C7CC'] : ['#4574ff', '#C8C7CC']
      return this.radioColor
    },
    // 图标类型
    iconType () {
      // radio（未选中、未选中置灰）、radio-filled（选中）、radio-disabled（选中置灰）
      if (this.currentValue || this.select) { // 选中
        if (this.disabled) return 'radio-disabled'
        return 'radio-filled'
      }
      return 'radio'
    },
    // 图标颜色
    iconColor () {
      if (this.disabled) return this.radioColorList[1]
      return this.radioColorList[0]
    },
    // 隐藏的input类型
    inputType () {
      if (this.hidden) return 'hidden'
      return 'radio'
    }
  },
  methods: {
    onClick () {
      // disabled、hidden、已选中均不处理
      if (this.disabled || this.hidden || this.currentValue || this.select) return

      if (this.type === 'radio') { // 单选
        this.currentValue = true
        this.$emit('input', this.currentValue) // 修改v-model绑定的值
      }
      this.$emit('onChange') // radioGroup必需，radio选用
    }
  },
  watch: {
    // radio单选使用--控制v-model value
    value: {
      handler: function (val) {
        if (this.type === 'radio') {
          this.currentValue = val
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cRadio{
  display: flex;
  align-items: center;
  &.inline{
    display: inline-flex;
  }
  .label{
    font-size: 14px;
    margin-left: 5px;
  }
}
</style>
