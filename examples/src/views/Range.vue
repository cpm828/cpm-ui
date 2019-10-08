<template>
  <div class="page-wrap range-wrap">
    <div class="top">Range单滑块</div>
    <div c_wrap="pl-20 pr-20">
      <p c_wrap="fs-16 ta-l mb-20">内部识别了touch和mouse事件，兼容移动端和PC端</p>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 mb-10">默认，当前值：{{rangeConfig1.value}}</p>
        <cRange :min="rangeConfig1.min" :max="rangeConfig1.max" @onChange="onChange" v-model="rangeConfig1.value">
        </cRange>
        <span class="code-btn" @click.prevent.stop="showCode(1)">code</span>
        <code-block type="html" :code="rangeConfig1.code" v-if="rangeConfig1.showCode"></code-block>
      </div>

      <div c_wrap="mb-20">
        <p c_wrap="fs-14 mb-10">步长10，整除，当前值：{{rangeConfig2.value}}</p>
        <cRange :min="rangeConfig2.min" :max="rangeConfig2.max" :step="rangeConfig2.step" v-model="rangeConfig2.value">
          <div slot="left">{{rangeConfig2.min}}</div>
          <div slot="right">{{rangeConfig2.max}}</div>
        </cRange>
        <span class="code-btn" @click.prevent.stop="showCode(2)">code</span>
        <code-block type="html" :code="rangeConfig2.code" v-if="rangeConfig2.showCode"></code-block>
      </div>

      <div c_wrap="mb-20">
        <p c_wrap="fs-14 mb-10">步长{{rangeConfig3.step}}，非整除，当前值：{{rangeConfig3.value}}</p>
        <cRange :min="rangeConfig3.min" :max="rangeConfig3.max" :step="rangeConfig3.step" v-model="rangeConfig3.value">
          <div slot="left">{{rangeConfig3.min}}</div>
          <div slot="right">{{rangeConfig3.max}}</div>
        </cRange>
        <span class="code-btn" @click.prevent.stop="showCode(3)">code</span>
          <code-block type="html" :code="rangeConfig3.code" v-if="rangeConfig3.showCode"></code-block>
      </div>

      <div c_wrap="mb-20">
        <p c_wrap="fs-14 mb-10">disabled禁用，当前值：{{rangeConfig4.value}}</p>
        <cRange :min="rangeConfig4.min" :max="rangeConfig4.max" :step="rangeConfig4.step"
          :disabled="rangeConfig4.disabled" v-model="rangeConfig4.value">
        </cRange>
        <span class="code-btn" @click.prevent.stop="showCode(4)">code</span>
        <code-block type="html" :code="rangeConfig4.code" v-if="rangeConfig4.showCode"></code-block>
      </div>

      <div c_wrap="mb-20">
        <p c_wrap="fs-14 mb-10">左右slot显示最大最小值，当前值：{{rangeConfig5.value}}</p>
        <cRange :min="rangeConfig5.min" :max="rangeConfig5.max" :step="rangeConfig5.step" v-model="rangeConfig5.value">
          <div slot="left">{{rangeConfig5.min}}</div>
          <div slot="right">{{rangeConfig5.max}}</div>
        </cRange>
        <span class="code-btn" @click.prevent.stop="showCode(5)">code</span>
        <code-block type="html" :code="rangeConfig5.code" v-if="rangeConfig5.showCode"></code-block>
      </div>

      <div c_wrap="mb-20">
        <p c_wrap="fs-14 mb-10">左右slot显示加减按钮，当前值：{{rangeConfig6.value}}</p>
        <cRange class="range6" :min="rangeConfig6.min" :max="rangeConfig6.max" :step="rangeConfig6.step" v-model="rangeConfig6.value">
          <div :class="['left-btn', rangeConfig6.value === rangeConfig6.min ? 'disabled' : '']" slot="left" @click="sub(rangeConfig6)">
            <cIcon type="jianhao"></cIcon>
          </div>
          <div :class="['right-btn', rangeConfig6.value === rangeConfig6.max ? 'disabled' : '']" slot="right" @click="add(rangeConfig6)">
            <cIcon type="jiahao"></cIcon>
          </div>
        </cRange>
        <span class="code-btn" @click.prevent.stop="showCode(6)">code</span>
        <code-block type="html" :code="rangeConfig6.code" v-if="rangeConfig6.showCode"></code-block>
      </div>
    </div>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRange.md">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'Range',
  components: { codeBlock },
  data () {
    return {
      rangeConfig1: {
        value: 0,
        min: 0,
        max: 120,
        step: 1,
        showCode: false,
        code: `
<cRange :min="rangeConfig1.min" :max="rangeConfig1.max" @onChange="onChange" v-model="rangeConfig1.value"></cRange>

rangeConfig1: {
  value: 0,
  min: 0,
  max: 120,
  step: 1
}
`
      },
      rangeConfig2: {
        value: 40,
        min: 20,
        max: 120,
        step: 10,
        showCode: false,
        code: `<cRange :min="rangeConfig2.min" :max="rangeConfig2.max" :step="rangeConfig2.step" v-model="rangeConfig2.value">
  <div slot="left">{{rangeConfig2.min}}</div>
  <div slot="right">{{rangeConfig2.max}}</div>
</cRange>

rangeConfig2: {
  value: 40,
  min: 20,
  max: 120,
  step: 10
}`
      },
      rangeConfig3: {
        value: 0,
        min: 0,
        max: 100,
        step: 15,
        showCode: false,
        code: `<cRange :min="rangeConfig3.min" :max="rangeConfig3.max" :step="rangeConfig3.step" v-model="rangeConfig3.value">
  <div slot="left">{{rangeConfig3.min}}</div>
  <div slot="right">{{rangeConfig3.max}}</div>
</cRange>

rangeConfig3: {
  value: 0,
  min: 0,
  max: 100,
  step: 15
}`
      },
      rangeConfig4: {
        value: 50,
        min: 20,
        max: 120,
        step: 10,
        disabled: true,
        showCode: false,
        code: `<cRange :min="rangeConfig4.min" :max="rangeConfig4.max" :step="rangeConfig4.step" :disabled="rangeConfig4.disabled" v-model="rangeConfig4.value"></cRange>

rangeConfig4: {
  value: 50,
  min: 20,
  max: 120,
  step: 10,
  disabled: true
}`
      },
      rangeConfig5: {
        value: 0,
        min: 0,
        max: 100,
        step: 10,
        showCode: false,
        code: `<cRange :min="rangeConfig5.min" :max="rangeConfig5.max" :step="rangeConfig5.step" v-model="rangeConfig5.value">
  <div slot="left">{{rangeConfig5.min}}</div>
  <div slot="right">{{rangeConfig5.max}}</div>
</cRange>

rangeConfig5: {
  value: 0,
  min: 0,
  max: 100,
  step: 10
}`
      },
      rangeConfig6: {
        value: 0,
        min: 0,
        max: 100,
        step: 10,
        showCode: false,
        code: `<cRange class="range6" :min="rangeConfig6.min" :max="rangeConfig6.max" :step="rangeConfig6.step" v-model="rangeConfig6.value">
  <div :class="['left-btn', rangeConfig6.value === rangeConfig6.min ? 'disabled' : '']" slot="left" @click="sub(rangeConfig6)">
    <cIcon type="jianhao"></cIcon>
  </div>
  <div :class="['right-btn', rangeConfig6.value === rangeConfig6.max ? 'disabled' : '']" slot="right" @click="add(rangeConfig6)">
    <cIcon type="jiahao"></cIcon>
  </div>
</cRange>

rangeConfig6: {
  value: 0,
  min: 0,
  max: 100,
  step: 10
}

sub (config) {
  if (config.value === config.min) return
  config.value -= config.step
},
add (config) {
  if (config.value === config.max) return
  config.value += config.step
}`
      }
    }
  },
  created () { },
  mounted () { },
  methods: {
    showCode (type) {
      if (this[`rangeConfig${type}`].showCode) {
        this[`rangeConfig${type}`].showCode = false
        return
      }
      for (let i = 1, len = 6; i <= len; i++) {
        this[`rangeConfig${i}`].showCode = false
      }
      this[`rangeConfig${type}`].showCode = true
    },
    onChange (val) {
      this.$toast(`您选中的值为：${val}`)
    },
    sub (config) {
      if (config.value === config.min) return
      config.value -= config.step
    },
    add (config) {
      if (config.value === config.max) return
      config.value += config.step
    }
  }
}
</script>

<style lang="scss">
.range-wrap{
  .range6 {
    .left-btn, .right-btn{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      border: 1px solid #415AF6;
      color: #415AF6;
      border-radius: 50%;
      box-sizing: border-box;
      &.disabled{
        border: 1px solid #C8C7CC;
        color: #C8C7CC;
      }
    }
    .left-btn{
      margin-right: 10px;
    }
    .right-btn{
      margin-left: 10px;
    }
    .c-range-thumb{
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUCAIAAADkwkEeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg3Q0Y5MjA3OTk3RDExRTlBOUZFOUI4MzE4RTk0OEIxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg3Q0Y5MjA4OTk3RDExRTlBOUZFOUI4MzE4RTk0OEIxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODdDRjkyMDU5OTdEMTFFOUE5RkU5QjgzMThFOTQ4QjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODdDRjkyMDY5OTdEMTFFOUE5RkU5QjgzMThFOTQ4QjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4NSYc+AAAAn0lEQVR42syRwQ2DMAxFjQurce+FrboFEzACV6bhRJ2mdXEQIOLIoJz4hy/lxT+OE2Dmtn83r3F2XtX2UyBTkiAAdAMRicOqbnCBuCSRDIVi2iMnpBTzCJFMovYuSPqwLyJqk9w+8FFJk9x+nm98qk2WP1UVJsl/AyzK33FiVG+Ax7ulik7/VN3eJDnzSKbCx+aLbCKZZy2L2TfZ5C/AAE8zc7A4AvCfAAAAAElFTkSuQmCC") center center no-repeat;
      background-size: 9.5px auto;
    }
  }
}
</style>
