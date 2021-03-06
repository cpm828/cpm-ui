<template>
  <div :class="{'cpm-cInput': true, 'c-input--borderbottom': conf.showBottomBorder, 'c-input--ios': isIos}">
    <div class="c-input-wrap">
      <div class="label-wrap" v-if="conf.title || conf.labelIconType">
        <div class="label">{{conf.title}}</div>
        <cIcon :type="conf.labelIconType" size="0.8rem" color="#333" @onClick="onClickLabelIcon" style="margin-left:0.267rem" v-if="conf.labelIconType"></cIcon>
      </div>
      <div class="input-wrap">
        <input v-springBack :ref="conf.name" :style="inputStyle" :type="conf.type" :maxlength="conf.maxlength"
          :placeholder="conf.placeholder" :readonly="conf.readonly" :disabled="conf.disabled" @focus="onfocus"
          @blur="onblur" @input="onInput" @change="onChange" v-model="config.value">
        <cIcon type="close-filled" color="#d0d0d3" style="margin-left:.37333rem;" @onClick="onClear"
          v-if="clearIconShow2"></cIcon>
      </div>
      <div class="unit-wrap" v-if="conf.unit || conf.inputIconType">
        <span v-if="conf.unit">{{conf.unit}}</span>
        <cIcon v-else :type="conf.inputIconType" size="0.8rem" color="#333"></cIcon>
      </div>
    </div>
  </div>
</template>

<script>
import { isIos } from '../../util/env'
import cIcon from '../cIcon'
import springBack from '../../directives/springBack'
export default {
  name: 'cInput',
  directives: springBack,
  components: { cIcon },
  props: {
    // 表单值：v-model传入
    value: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      isIos,
      clearIconShow: false // 是否显示清除icon
    }
  },
  computed: {
    conf () {
      const defaultConfig = {
        name: '', // name字段为回传给后端的key
        title: '', // label文字
        value: '', // 输入框初始值
        type: 'text', // 输入框类型
        placeholder: '请输入',
        maxlength: 20, // 最大输入长度
        lr: 'right', // 输入框对齐方式
        readonly: false, // 是否只读
        disabled: false, // 是否禁用
        showBottomBorder: true, // 是否显示底边框
        labelIconType: '', // label后面的icon
        unit: '', // 单位（与inputIconType互斥，优先取unit）
        inputIconType: '' // 输入框后面的icon类型（引用cIcon）
      }
      return Object.assign(defaultConfig, this.config)
    },
    // input样式
    inputStyle () {
      const { conf } = this
      let obj = {
        'text-align': conf.lr
      }
      return obj
    },
    // 控制清除按钮的显示
    clearIconShow2 () {
      return this.clearIconShow && !!this.config.value
    }
  },
  methods: {
    onfocus (e) {
      // 解决iOS部分浏览器设置readonly后底部仍弹出bug
      if (this.conf.readonly) {
        e.target.blur()
        return
      }
      if (this.config.value) this.clearIconShow = true
      this.$emit('onFocus', e)
    },
    onblur (e) {
      // 异步目的：不加异步时，点击clear icon，同时触发blur，icon隐藏，事件无法响应
      setTimeout(() => {
        this.clearIconShow = false
        this.$emit('onBlur', e)
      }, 0)
    },
    // 输入即触发
    onInput (e) {
      this.clearIconShow = true
      // 解决type=number时maxlength不生效问题
      if (this.conf.type === 'number' && this.config.value.length > this.conf.maxlength) {
        this.config.value = this.config.value.slice(0, this.conf.maxlength)
      }
      this.$emit('onInput', e, this.config.value)
      this.$emit('input', this.config.value)
    },
    // 失去焦点时才触发
    onChange (e) {
      this.$emit('onChange', e, this.config.value)
      this.$emit('input', this.config.value)
    },
    // 点击输入框后面的清除按钮
    onClear () {
      this.$refs[this.conf.name].focus()
      this.config.value = ''
      this.$emit('input', '')
      this.$emit('onClear')
    },
    // 点击label后面的icon，如说明弹窗
    onClickLabelIcon () {
      this.$emit('onClickLabelIcon')
    },
    // 获取key=value字符串
    getKVString () {
      return `${this.conf.name}=${this.config.value}`
    },
    // 获取key:value键值对
    getKVObject () {
      let obj = {}
      obj[this.conf.name] = this.config.value
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cInput {
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #333;
  height: 45px;
  position: relative;
  // 显示底部边框
  &.c-input--borderbottom {
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #EFEFF4;
    }
  }
  &.c-input--ios {
    // iOS 设备增加一个placeholder的样式
    input {
      &::-webkit-input-placeholder {
        line-height: 1.39em;
      }
    }
  }
  .c-input-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    .label-wrap{
      height: 25px;
      display: flex;
      align-items: center;
      padding-right: 20px;
      flex-shrink: 0;
    }
    .input-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      input {
        height: 25px;
        flex: 1;
        &::-webkit-input-placeholder {
          color: #bbc8d6;
        }
      }
    }
    .unit-wrap {
      display: flex;
      align-items: center;
      min-width: 15px;
      height: 25px;
      padding-left: 5px;
      flex-shrink: 0;
    }
  }
}
</style>
