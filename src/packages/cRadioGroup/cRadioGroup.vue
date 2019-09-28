<template>
  <div class="cpm-radio-group">
    <template v-for="(option, index) in radioGroupOpt">
      <cRadio :key="index" type="radioGroup" :label="option.label" :select="option._select" @onChange="onChange(option)"></cRadio>
    </template>
  </div>
</template>

<script>
import cRadio from '../cRadio'
export default {
  name: 'cRadioGroup',
  components: { cRadio },
  props: {
    // 当前选中的值
    value: {
      type: [Number, String, Boolean],
      default: false
    },
    // list
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
    onChange (option) {
      this.radioGroupOpt.forEach((item) => {
        item = Object.assign(item, { '_select': false })
      })
      this.currentValue = option.value
      option._select = true
      console.log(this.radioGroupOpt)
    }
  }
}
</script>

<style>
</style>
