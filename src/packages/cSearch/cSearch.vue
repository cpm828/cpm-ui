<template>
  <div class="cpm-cSearch">
    <div class="c-search-content">
      <div class="c-search-label">{{label}}</div>
      <div class="c-search-field">
        <div class="c-seach-icon">
          <cIcon type="search" size="1rem"></cIcon>
        </div>
        <div class="c-search-box">
          <form action="javascript:;">
            <input ref="input" :type="type" :maxlength="maxlength" :placeholder="placeholder" @focus="onfocus"
              @blur="onblur" @input="onInput" @change="onChange" @keyup.enter="onEnter" v-springBack
              v-model="currentValue">
          </form>
          <cIcon class="c-seach-clear" type="close-filled" size="1rem" color="#ccc" @onClick="onClear"
            v-if="clearIconShow2"></cIcon>
        </div>
      </div>
    </div>
    <div class="c-search-button" @click="onSearch">{{button}}</div>
  </div>
</template>

<script>
import springBack from '../../directives/springBack' // iOS微信input失焦回弹
import cIcon from '../cIcon'
export default {
  name: 'cSearch',
  directives: springBack,
  props: {
    // 双向绑定的输入信息
    value: {
      type: String,
      default: ''
    },
    // 输入框提示文案
    placeholder: {
      type: String,
      default: ''
    },
    // 输入框前提示文案
    label: {
      type: String,
      default: ''
    },
    // 输入框后按钮文案
    button: {
      type: String,
      default: ''
    },
    // 键盘类型
    type: {
      type: String,
      default: 'search'
    },
    // 最大输入长度
    maxlength: {
      type: Number,
      default: 1000
    }
  },
  components: { cIcon },
  data () {
    return {
      currentValue: this.value,
      clearIconShow: false
    }
  },
  created () { },
  mounted () { },
  computed: {
    clearIconShow2 () {
      return this.clearIconShow && this.currentValue
    }
  },
  methods: {
    onfocus (e) {
      if (this.currentValue) this.clearIconShow = true
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
      this.$emit('input', this.currentValue)
      this.$emit('onInput', e, this.currentValue)
    },
    // 失去焦点时才触发
    onChange (e) {
      this.$emit('onInput', e, this.currentValue)
    },
    onClear () {
      this.$refs.input.focus()
      this.currentValue = ''
      this.$emit('input', '')
      this.$emit('onClear')
    },
    onEnter () {
      this.$refs.input.blur()
      this.$emit('onSearch', this.currentValue)
    },
    onSearch (e) {
      this.$emit('onSearch', this.currentValue)
    }
  },
  watch: {
    value: {
      handler: function (val) {
        this.currentValue = val
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cSearch {
  height: 54px;
  background-color: #fff;
  padding: 10px 12px;
  box-sizing: border-box;
  display: flex;
  .c-search-content {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #f7f8fa;
    border-radius: 27px;
    padding: 0 8px;
    margin-right: 5px;
  }
  .c-search-label {
    font-size: 14px;
    color: #333;
    margin-right: 3px;
  }
  .c-search-field {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    .c-seach-icon {
      display: flex;
      align-items: center;
      margin-right: 3px;
    }
    .c-search-box {
      height: 100%;
      flex: 1;
      display: flex;
      form {
        width: 100%;
        height: 100%;
      }
      input {
        width: 100%;
        height: 100%;
        line-height: normal;
        font-size: 14px;
        color: #333;
        &::-webkit-search-cancel-button {
          display: none;
        }
      }
      .c-seach-clear {
        display: flex;
        align-items: center;
      }
    }
  }
  .c-search-button {
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
  }
}
</style>
