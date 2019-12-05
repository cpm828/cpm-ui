<template>
  <div class="page-wrap rangedouble-wrap">
    <div class="top">RangeDouble双滑块</div>
    <div c_wrap="pl-20 pr-20">
      <p c_wrap="fs-14 ta-j mb-20">
        提示：<br>
        1. 内部识别了touch和mouse事件，兼容移动端和PC端。<br>
        2. 对于双滑块而言，我处理了最小范围为一个步长，所以当步长设置太小时，滑块会碰撞在一起。合理来说，我们应该设置一个合适的步长，避免发生碰撞。
      </p>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 mb-10">默认，当前值：{{rangeConfig1.value}}</p>
        <cRangeDouble :min="rangeConfig1.min" :max="rangeConfig1.max" @onChange="onChange(rangeConfig1.value)" v-model="rangeConfig1.value">
          <div slot="left">{{rangeConfig1.min}}</div>
          <div slot="right">{{rangeConfig1.max}}</div>
        </cRangeDouble>
        <span class="code-btn" @click.prevent.stop="showCode(1)">code</span>
        <code-block type="html" :code="rangeConfig1.code" v-if="rangeConfig1.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 mb-10">步长10，显示提示，当前值：{{rangeConfig2.value}}</p>
        <cRangeDouble :min="rangeConfig2.min" :max="rangeConfig2.max" :step="rangeConfig2.step" :showValue="rangeConfig2.showValue" v-model="rangeConfig2.value">
          <div slot="left">{{rangeConfig2.min}}</div>
          <div slot="right">{{rangeConfig2.max}}</div>
        </cRangeDouble>
        <span class="code-btn" @click.prevent.stop="showCode(2)">code</span>
        <code-block type="html" :code="rangeConfig2.code" v-if="rangeConfig2.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 mb-10">步长10，显示提示且带刻度，当前值：{{rangeConfig3.value}}</p>
        <cRangeDouble class="rangedouble3" :min="rangeConfig3.min" :max="rangeConfig3.max" :step="rangeConfig3.step" :showValue="rangeConfig3.showValue" :calibrateList="rangeConfig3.calibrateList" v-model="rangeConfig3.value">
        </cRangeDouble>
        <span class="code-btn" @click.prevent.stop="showCode(3)">code</span>
        <code-block type="html" :code="rangeConfig3.code" v-if="rangeConfig3.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 mb-10">disabled禁用，当前值：{{rangeConfig4.value}}</p>
        <cRangeDouble :min="rangeConfig4.min" :max="rangeConfig4.max" :step="rangeConfig4.step" :disabled="rangeConfig4.disabled" v-model="rangeConfig4.value">
          <div slot="left">{{rangeConfig4.min}}</div>
          <div slot="right">{{rangeConfig4.max}}</div>
        </cRangeDouble>
        <span class="code-btn" @click.prevent.stop="showCode(4)">code</span>
        <code-block type="html" :code="rangeConfig4.code" v-if="rangeConfig4.showCode"></code-block>
      </div>
    </div>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://cpm828.github.io/cpm-ui-docs/basic/cRate.html">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'RangeDouble',
  components: { codeBlock },
  data () {
    return {
      rangeConfig1: {
        value: [0, 120],
        min: 0,
        max: 120,
        step: 1,
        showCode: false,
        code: `<cRangeDouble :min="rangeConfig1.min" :max="rangeConfig1.max" @onChange="onChange(rangeConfig1.value)" v-model="rangeConfig1.value">
  <div slot="left">{{rangeConfig1.min}}</div>
  <div slot="right">{{rangeConfig1.max}}</div>
</cRangeDouble>
  
rangeConfig1: {
  value: [0, 120],
  min: 0,
  max: 120,
  step: 1
}`
      },
      rangeConfig2: {
        value: [20, 120],
        min: 20,
        max: 120,
        step: 10,
        showValue: true,
        showCode: false,
        code: `<cRangeDouble :min="rangeConfig2.min" :max="rangeConfig2.max" :step="rangeConfig2.step" :showValue="rangeConfig2.showValue" v-model="rangeConfig2.value">
  <div slot="left">{{rangeConfig2.min}}</div>
  <div slot="right">{{rangeConfig2.max}}</div>
</cRangeDouble>

rangeConfig2: {
  value: [20, 120],
  min: 20,
  max: 120,
  step: 10,
  showValue: true
}`
      },
      rangeConfig3: {
        value: [20, 120],
        min: 20,
        max: 120,
        step: 10,
        showValue: true,
        calibrateList: [20, 40, 60, 80, 100, 120],
        showCode: false,
        code: `<cRangeDouble class="rangedouble3" :min="rangeConfig3.min" :max="rangeConfig3.max" :step="rangeConfig3.step" :showValue="rangeConfig3.showValue" :calibrateList="rangeConfig3.calibrateList" v-model="rangeConfig3.value">
</cRangeDouble>

rangeConfig3: {
  value: [20, 120],
  min: 20,
  max: 120,
  step: 10,
  showValue: true,
  calibrateList: [20, 40, 60, 80, 100, 120]
}`
      },
      rangeConfig4: {
        value: [20, 120],
        min: 20,
        max: 120,
        step: 10,
        disabled: true,
        showCode: false,
        code: `<cRangeDouble :min="rangeConfig4.min" :max="rangeConfig4.max" :step="rangeConfig4.step" :disabled="rangeConfig4.disabled" v-model="rangeConfig4.value">
  <div slot="left">{{rangeConfig4.min}}</div>
  <div slot="right">{{rangeConfig4.max}}</div>
</cRangeDouble>

rangeConfig4: {
  value: [20, 120],
  min: 20,
  max: 120,
  step: 10,
  disabled: true
}`
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    showCode (type) {
      if (this[`rangeConfig${type}`].showCode) {
        this[`rangeConfig${type}`].showCode = false
        return
      }
      for (let i = 1, len = 4; i <= len; i++) {
        this[`rangeConfig${i}`].showCode = false
      }
      this[`rangeConfig${type}`].showCode = true
    },
    onChange (val) {
      this.$toast(`您选中的范围为：${val[0]}~${val[1]}`)
    }
  }
}
</script>

<style lang="scss">
.rangedouble-wrap{
  .rangedouble3{
    .c-rangedouble-thumb{
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUCAIAAADkwkEeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg3Q0Y5MjA3OTk3RDExRTlBOUZFOUI4MzE4RTk0OEIxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg3Q0Y5MjA4OTk3RDExRTlBOUZFOUI4MzE4RTk0OEIxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODdDRjkyMDU5OTdEMTFFOUE5RkU5QjgzMThFOTQ4QjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODdDRjkyMDY5OTdEMTFFOUE5RkU5QjgzMThFOTQ4QjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4NSYc+AAAAn0lEQVR42syRwQ2DMAxFjQurce+FrboFEzACV6bhRJ2mdXEQIOLIoJz4hy/lxT+OE2Dmtn83r3F2XtX2UyBTkiAAdAMRicOqbnCBuCSRDIVi2iMnpBTzCJFMovYuSPqwLyJqk9w+8FFJk9x+nm98qk2WP1UVJsl/AyzK33FiVG+Ax7ulik7/VN3eJDnzSKbCx+aLbCKZZy2L2TfZ5C/AAE8zc7A4AvCfAAAAAElFTkSuQmCC") center center no-repeat;
      background-size: 8.5px 10px;
    }
  }
}
</style>
