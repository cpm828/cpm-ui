<template>
  <div :class="['cpm-cProgress', showTip ? 'progress-padding' : '']">
    <div class="progress">
      <transition v-on:before-enter="beforeEnter1" v-on:enter="enter1">
        <div class="progress-content" v-show="animateShow"></div>
      </transition>
    </div>
    <template v-if="showTip">
      <transition v-on:before-enter="beforeEnter2" v-on:enter="enter2">
        <span class="progress-tip" v-show="animateShow">{{progress}}</span>
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  name: 'cProgress',
  props: {
    // 进度百分比
    progress: {
      type: String,
      default: '0'
    },
    // 是否开启动画
    animate: {
      type: Boolean,
      default: false
    },
    // 是否显示进度提示
    showTip: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      animateShow: false,
      progressStyle: {}
    }
  },
  created () {
  },
  mounted () {
    this.animateShow = true
  },
  computed: {
  },
  methods: {
    beforeEnter1 (el) {
      el.style.width = '0px'
    },
    enter1 (el, done) {
      if (this.animate) {
        setTimeout(() => {
          el.style.width = this.progress
        }, 0)
      } else {
        el.style.width = this.progress
      }
      done()
    },
    beforeEnter2 (el) {
      el.style.left = '0px'
    },
    enter2 (el, done) {
      if (this.animate) {
        setTimeout(() => {
          el.style.left = this.progress
        }, 0)
      } else {
        el.style.left = this.progress
      }
      done()
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cProgress {
  position: relative;
  &.progress-padding {
    padding-top: 15px;
  }
  .progress {
    display: flex;
    height: 4px;
    border-radius: 4px;
    background-color: #e5e5e5;
    overflow: hidden;
    .progress-content{
      width: 0;
      height: 100%;
      transition: width 0.3s;
      background-image: linear-gradient(90deg, #508BEF 0%, #4B5FFE 100%);
    }
  }
  .progress-tip{
    width: 30px;
    height: 15px;
    position: absolute;
    bottom: 4px;
    transition: left 0.3s;
    margin-left: -15px;
    font-size: 10px;
    color: #333;
  }
}
</style>
