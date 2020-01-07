<template>
  <div class="cpm-cCheckbox" @click="onClick" v-if="!hidden">
    <cIcon :type="iconType" :color="iconColor" :size="'1.067rem'"></cIcon><span class="label" v-if="label">{{label}}</span>
  </div>
</template>

<script>
import cIcon from '../cIcon'

/**
 * cCheckbox组件可单独使用，也应用于cCheckboxGroup复选组，由type判断，使用时不需要设置
 * cCheckbox单独使用所需核心字段：value(v-model传入)、currentValue
 * cCheckboxGroup复选组使用所需核心字段：select
 */
export default {
  name: 'cCheckbox',
  components: { cIcon },
  props: {
    // 类型：checkbox/checkbox使用，checkboxGroup/checkboxGroup使用
    type: {
      type: String,
      default: 'checkbox'
    },
    // 表单值：checkbox使用，v-model传入
    value: {
      type: [Boolean, Number, String],
      default: false
    },
    // 当前checkbox是否选中：checkboxGroup单选组使用
    select: {
      type: Boolean,
      default: false
    },
    // 文字：为空时只显示checkbox
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
    // checkbox icon颜色：'正常颜色' 、 ['正常颜色', '不可选置灰色']
    checkboxColor: {
      type: [String, Array],
      default: () => ['#4574ff', '#C8C7CC']
    }
  },
  data () {
    return {
      currentValue: false // 设置一个中间变量，防止修改父组件数据，checkbox使用
    }
  },
  created () { },
  mounted () { },
  computed: {
    // 处理一下checkboxColor传参类型，既可以传一个字符串表示正常颜色，也可以传数组['正常颜色', '不可选置灰色']
    checkboxColorList () {
      if (typeof this.checkboxColor === 'string') return this.checkboxColor ? [this.checkboxColor, '#C8C7CC'] : ['#4574ff', '#C8C7CC']
      return this.checkboxColor
    },
    // 图标类型
    iconType () {
      // checkbox（未选中、未选中置灰）、checkbox-filled（选中）、checkbox-disabled（选中置灰）
      if (this.currentValue || this.select) { // 选中
        if (this.disabled) return 'checkbox-disabled'
        return 'checkbox-filled'
      }
      return 'checkbox'
    },
    // 图标颜色
    iconColor () {
      if (this.disabled) return this.checkboxColorList[1]
      return this.checkboxColorList[0]
    }
  },
  methods: {
    onClick () {
      // disabled、hidden、已选中均不处理
      if (this.disabled || this.hidden) return

      if (this.type === 'checkbox') { // checkbox
        this.currentValue = !this.currentValue
        this.$emit('input', this.currentValue) // 修改v-model绑定的值
      }
      this.$emit('onChange', this.currentValue) // checkboxGroup必需，checkbox选用
    }
  },
  watch: {
    // checkbox单选使用--控制v-model value
    value: {
      handler: function (val) {
        if (this.type === 'checkbox') {
          this.currentValue = val
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cCheckbox{
  display: flex;
  align-items: center;
  .label{
    font-size: 14px;
    margin-left: 5px;
  }
}
</style>
