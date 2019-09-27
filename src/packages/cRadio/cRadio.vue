<template>
  <div class="cpm-radio">
    <span class="cpm-radio-wrap" @click="onClick" v-if="!hidden">
      <cIcon :type="iconType" :color="iconColor" :size="size" class="icon"></cIcon><span class="label" :style="labelStyle" v-if="label">{{label}}</span>
    </span>
    <!-- 将状态同步到input上，便于父级使用form表单提交数据，也可以不使用表单，直接获取状态使用 -->
    <!-- 对于非radioGroup来说value为true时表示选中 -->
    <input :name="name" :type="inputType" :disabled="disabled" :value="activeValue" v-model="currentValue">
  </div>
</template>

<script>
import cIcon from '../cIcon'
export default {
  name: 'cRadio',
  components: { cIcon },
  props: {
    // 表单值（v-model传入）
    value: {
      type: [Boolean, Number, String],
      default: false
    },
    // 激活radio的值
    activeValue: {
      type: [Boolean, Number, String],
      default: true
    },
    // 选中时的值
    // trueValue: [Boolean, Number, String],
    // 未选中时的值
    // falseValue: [Boolean, Number, String],
    // 表单name
    name: {
      type: String,
      default: ''
    },
    // 文字：为空时只显示radio
    label: {
      type: String,
      default: ''
    },
    // 文字样式
    labelStyle: {
      type: Object,
      default: () => { }
    },
    // 是否禁用（不可点击 且 不上传）
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否设置为隐藏域（隐藏 且 上传）
    hidden: {
      type: Boolean,
      default: false
    },
    // 图标尺寸
    size: {
      type: String,
      default: '1rem'
    }
  },
  data () {
    return {
      currentValue: false // 设置一个中间变量，防止修改父组件数据
    }
  },
  mounted () {
    this.currentValue = this.value // 获取初始值
  },
  computed: {
    // 图标类型
    iconType () {
      // radio（未选中、未选中置灰）、radio-filled（选中）、radio-disabled（选中置灰）
      if (this.currentValue) { // 选中
        if (this.disabled) return 'radio-disabled'
        return 'radio-filled'
      }
      return 'radio'
    },
    // 图标颜色
    iconColor () {
      if (this.disabled) return '#C8C7CC'
      return '#4574ff'
    },
    // 隐藏的input类型
    inputType () {
      if (this.hidden) return 'hidden'
      return 'radio'
    }
  },
  methods: {
    onClick () {
      // disabled、hidden 均不处理
      if (this.disabled || this.hidden || this.currentValue === this.activeValue) return
      this.currentValue = !this.value
      this.$emit('input', this.currentValue) // 对应于v-model
      this.$emit('onChange', this.currentValue) // 辅助使用，少数情况下我们需要捕获change事件，如打点等
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-radio{
  font-size: 0; // 清除行内元素间隙
  .cpm-radio-wrap{
    display: inline-flex;
    align-items: center;
    .icon{
      margin-right: 5px;
    }
    .label{
      font-size: 14px;
    }
  }
}
</style>
