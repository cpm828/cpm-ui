<template>
  <div class="cpm-toast">
    <div class="cpm-toast-wrap" v-bind:style="[styleObj, wrapStyleObj]">
      <cIcon class="icon" :type="iconType" color="white" size="2rem" v-if="iconType"></cIcon>
      <div class="cpm-toast-msg" v-html="message"></div>
    </div>
  </div>
</template>

<script>
import cIcon from '../cIcon'
import { isEmptyObj } from '../../util/common'
export default {
  name: 'cToast',
  components: { cIcon },
  props: {
    // toast位置(top、middle、bottom)
    position: {
      type: String,
      default: 'middle'
    },
    // toast样式
    wrapStyleObj: {
      type: Object,
      default: () => { }
    },
    // toast显示信息
    message: {
      type: String
    },
    // toast显示时间（ms）
    time: {
      type: Number,
      default: 2000
    },
    // toast 类型（success、info、error）
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    const self = this
    self.timeoutId = setTimeout(() => {
      self.remove()
      self.callback()
    }, self.time)
    window.addEventListener('hashchange', this.remove) // 监听SPA页面hash的变化
  },
  computed: {
    styleObj () {
      let obj = {}
      if (this.position === 'top') {
        obj = Object.assign(obj, { 'top': '10%' })
      } else if (this.position === 'middle') {
        obj = Object.assign(obj, {
          'top': '50%',
          '-webkit-transform': 'translate(0, -50%)',
          'transform': 'translate(0, -50%)'
        })
      } else if (this.position === 'bottom') {
        obj = Object.assign(obj, { 'bottom': '10%' })
      }

      return isEmptyObj(this.wrapStyleObj)
        ? Object.assign(obj, this.wrapStyleObj)
        : obj
    },
    iconType () {
      const i = ['success', 'info', 'error'].indexOf(this.type)
      if (i > -1) return ['check-filled', 'info-filled', 'close-filled'][i]
      return ''
    }
  },
  methods: {
    callback () {
      // 组件调用时设置
    },
    remove () {
      const self = this
      clearTimeout(self.timeoutId)
      window.removeEventListener('hashchange', this.remove) // SPA单页需要
      self.$el.remove() // 删除toast
      self.$destroy() // 销毁组件
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-toast {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 888;
  color: #fff;

  .cpm-toast-wrap {
    position: fixed;
    left: 50%;
    background: #4c4c4c;
    border-radius: 7px;
    width: 144px;
    margin-left: -92px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;

    .icon{
      margin-bottom: 10px;
    }
    .cpm-toast-msg {
      font-size: 14px;
    }
  }

  .box {
    span {
      font-size: 2rem;
      vertical-align: middle;
    }
  }
}
</style>
