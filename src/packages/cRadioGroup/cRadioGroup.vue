<template>
  <div class="cpm-cRadioGroup">
    <template v-for="(option, index) in radioGroupOpt">
      <cRadio :key="index" type="radioGroup" :label="option.label" :select="option._select" :disabled="option.disabled"
        :hidden="option.hidden" :radioColor="option.radioColor" @onChange="onChange(option)"></cRadio>
    </template>
  </div>
</template>

<script>
import cRadio from '../cRadio'

/**
 * 数据变动流程：
 * 1. 正向（数据回显）：watch value(修改currentValue) -> watch currentValue
 * 2. 反向（操作回显）：$on onChange(获取操作)-> watch currentValue(修改value)-> watch value
 */
export default {
  name: 'cRadioGroup',
  components: { cRadio },
  props: {
    // 当前选中的值，v-model传入
    value: {
      type: [Number, String, Boolean],
      default: false
    },
    // list数据：包含label、value、disabled、hidden、labelStyle等数据
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentValue: '',
      radioGroupOpt: []
    }
  },
  created () {
    // 增加一个_select，用于标记是否选中
    this.radioGroupOpt = this.options.map((item) => {
      return Object.assign({}, item, { _select: this.value === item.value })
    })
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    },
    value: {
      handler: function (val) {
        this.currentValue = val
      },
      immediate: true
    }
  },
  methods: {
    // 点击radio时，先清除所有radio的选中，再选中当前操作的
    onChange (option) {
      this.radioGroupOpt.forEach((item) => {
        item = Object.assign(item, { '_select': false })
      })
      option._select = true
      this.currentValue = option.value
      this.$emit('onChange', option) // 辅助使用
    }
  }
}
</script>

<style>
</style>
