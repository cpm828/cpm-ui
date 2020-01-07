<template>
  <div class="cpm-cCheckboxGroup">
    <template v-for="(option, index) in checkboxGroupOpt">
      <cCheckbox :key="index" type="checkboxGroup" :label="option.label" :select="option._select" :disabled="option.disabled"
        :hidden="option.hidden" :checkboxColor="option.checkboxColor" @onChange="onChange(option)"></cCheckbox>
    </template>
  </div>
</template>

<script>
import cCheckbox from '../cCheckbox'

/**
 * 数据变动流程：
 * 1. 正向（数据回显）：watch value(修改currentValue) -> watch currentValue
 * 2. 反向（操作回显）：$on onChange(获取操作)-> watch currentValue(修改value)-> watch value
 */
export default {
  name: 'cCheckboxGroup',
  components: { cCheckbox },
  props: {
    // 当前选中的值(数组)，v-model传入
    value: {
      type: Array,
      default: () => []
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
      checkboxGroupOpt: []
    }
  },
  created () {
    // 增加一个_select，用于标记是否选中
    this.checkboxGroupOpt = this.options.map((item) => {
      return Object.assign({}, item, { _select: this.value.includes(item.value) })
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
    onChange (option) {
      option._select = !option._select
      if (option._select) { // 选中则增加
        this.currentValue.push(option.value)
      } else { // 取消则删除
        const index = this.currentValue.indexOf(option.value)
        this.currentValue.splice(index, 1)
      }
      this.$emit('onChange', option) // 辅助使用
    }
  }
}
</script>

<style>
</style>
