<template>
  <!-- 动画参考：https://github.com/duenyang/css3-loading -->
  <div class="cpm-loading" id="cpmLoading" @touchmove="touchmoveLoading($event)">
    <div class="cpm-loading-cliper" :sytle="cliperStyleObj"></div>
    <div class="cpm-loading-wrap">
      <!-- ball-spin-fade-loader -->
      <div class="loader-inner ball-spin-fade-loader" v-if="type === 1">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- ball-pulse -->
      <div class="loader-inner ball-pulse" v-else-if="type === 2">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="loader-inner ball-rotate" v-else-if="type === 3">
        <div></div>
      </div>

      <div class="loader-inner ball-pulse-sync" v-else-if="type === 4">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="loader-inner ball-beat" v-else-if="type === 5">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- ball-clip-rotate -->
      <div class="loader-inner ball-clip-rotate" v-else-if="type === 6">
        <div></div>
      </div>

      <!-- ball-clip-rotate-pulse -->
      <div class="loader-inner ball-clip-rotate-pulse" v-else-if="type === 7">
        <div></div>
        <div></div>
      </div>

      <!-- ball-clip-rotate-multiple -->
      <div class="loader-inner ball-clip-rotate-multiple" v-else-if="type === 8">
        <div></div>
        <div></div>
      </div>

      <!-- ball-scale -->
      <div class="loader-inner ball-scale" v-else-if="type === 9">
        <div></div>
      </div>

      <!-- ball-scale-multiple -->
      <div class="loader-inner ball-scale-multiple" v-else-if="type === 10">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- ball-scale-ripple -->
      <div class="loader-inner ball-scale-ripple" v-else-if="type === 11">
        <div></div>
      </div>

      <!-- ball-scale-ripple-multiple -->
      <div class="loader-inner ball-scale-ripple-multiple" v-else-if="type === 12">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- line-scale -->
      <div class="loader-inner line-scale" v-else-if="type === 13">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- loader-inner line-scale-pulse-out -->
      <div class="loader-inner line-scale-pulse-out" v-else-if="type === 14">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- line-scale-pulse-out-rapid -->
      <div class="loader-inner line-scale-pulse-out-rapid" v-else-if="type === 15">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- square-spin -->
      <div class="loader-inner square-spin" v-else>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cLoading',
  props: {
    // 蒙层样式
    cliperStyleObj: {
      type: Object,
      default: () => { }
    },
    // loading风格（暂时列举了16中风格的loading）
    type: {
      type: Number,
      default: 1
    }
  },
  mounted () {
    window.addEventListener('hashchange', this.remove) // 监听SPA页面hash的变化
  },
  methods: {
    remove () {
      this.$el.remove() // 删除toast
      this.$destroy() // 销毁组件
      window.removeEventListener('hashchange', this.remove)
    },
    touchmoveLoading (e) {
      e.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-loading {
  .cpm-loading-cliper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(14, 14, 14, 0.8);
    z-index: 888;
  }
  .cpm-loading-wrap {
    width: 100%;
    position: fixed;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 888;
    text-align: center;
    .loader-inner {
      display: inline-block;
    }
  }

  // ball-spin-fade-loader
  .ball-spin-fade-loader {
    width: 15px;
    height: 15px;
    position: relative;
  }
  .ball-spin-fade-loader > div:nth-child(1) {
    top: 25px;
    left: 0;
    animation: ball-spin-fade-loader 1s 0s infinite linear;
  }
  .ball-spin-fade-loader > div:nth-child(2) {
    top: 17.04545px;
    left: 17.04545px;
    animation: ball-spin-fade-loader 1s 0.12s infinite linear;
  }
  .ball-spin-fade-loader > div:nth-child(3) {
    top: 0;
    left: 25px;
    animation: ball-spin-fade-loader 1s 0.24s infinite linear;
  }
  .ball-spin-fade-loader > div:nth-child(4) {
    top: -17.04545px;
    left: 17.04545px;
    animation: ball-spin-fade-loader 1s 0.36s infinite linear;
  }
  .ball-spin-fade-loader > div:nth-child(5) {
    top: -25px;
    left: 0;
    animation: ball-spin-fade-loader 1s 0.48s infinite linear;
  }
  .ball-spin-fade-loader > div:nth-child(6) {
    top: -17.04545px;
    left: -17.04545px;
    animation: ball-spin-fade-loader 1s 0.6s infinite linear;
  }
  .ball-spin-fade-loader > div:nth-child(7) {
    top: 0;
    left: -25px;
    animation: ball-spin-fade-loader 1s 0.72s infinite linear;
  }
  .ball-spin-fade-loader > div:nth-child(8) {
    top: 17.04545px;
    left: -17.04545px;
    animation: ball-spin-fade-loader 1s 0.84s infinite linear;
  }
  .ball-spin-fade-loader > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    animation-fill-mode: both;
    position: absolute;
  }

  // ball-pulse
  .ball-pulse > div:nth-child(0) {
    animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
  .ball-pulse > div:nth-child(1) {
    animation: scale 0.75s 0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
  .ball-pulse > div:nth-child(2) {
    animation: scale 0.75s 0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
  .ball-pulse > div:nth-child(3) {
    animation: scale 0.75s 0.36s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
  .ball-pulse > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
  }

  // ball-rotate
  .ball-rotate {
    position: relative;
  }
  .ball-rotate > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: relative;
  }
  .ball-rotate > div:first-child {
    animation: rotate 1s 0s cubic-bezier(0.7, -0.13, 0.22, 0.86) infinite;
  }
  .ball-rotate > div:before,
  .ball-rotate > div:after {
    content: "";
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    position: absolute;
    opacity: 0.8;
  }
  .ball-rotate > div:before {
    top: 0px;
    left: -28px;
  }
  .ball-rotate > div:after {
    top: 0px;
    left: 25px;
  }

  // ball-pulse-sync
  .ball-pulse-sync > div:nth-child(0) {
    animation: ball-pulse-sync 0.6s 0s infinite ease-in-out;
  }
  .ball-pulse-sync > div:nth-child(1) {
    animation: ball-pulse-sync 0.6s 0.07s infinite ease-in-out;
  }
  .ball-pulse-sync > div:nth-child(2) {
    animation: ball-pulse-sync 0.6s 0.14s infinite ease-in-out;
  }
  .ball-pulse-sync > div:nth-child(3) {
    animation: ball-pulse-sync 0.6s 0.21s infinite ease-in-out;
  }
  .ball-pulse-sync > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
  }

  // ball-beat
  .ball-beat > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    animation: ball-beat 0.7s 0s infinite linear;
  }
  .ball-beat > div:nth-child(2n-1) {
    animation-delay: 0.35s !important;
  }

  // ball-clip-rotate
  .ball-clip-rotate > div {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 2px;
    border: 2px solid #fff;
    background-color: #fff;
    border-bottom-color: transparent;
    border-radius: 100%;
    background: transparent !important;
    animation: rotate 0.75s 0s linear infinite;
    animation-fill-mode: both;
  }

  // ball-clip-rotate-pulse
  .ball-clip-rotate-pulse {
    width: 34px;
    height: 34px;
    position: relative;
  }
  .ball-clip-rotate-pulse > div {
    animation-fill-mode: both;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 100%;
  }
  .ball-clip-rotate-pulse > div:first-child {
    background: #fff;
    width: 16px;
    height: 16px;
    top: 9px;
    left: 9px;
    animation: scale 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
  }
  .ball-clip-rotate-pulse > div:last-child {
    position: absolute;
    border: 2px solid #fff;
    width: 30px;
    height: 30px;
    background: transparent;
    border: 2px solid;
    border-color: #fff transparent #fff transparent;
    animation: rotate 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
    animation-duration: 1s;
  }

  // ball-clip-rotate-multiple
  .ball-clip-rotate-multiple {
    width: 39px;
    height: 39px;
    position: relative;
  }
  .ball-clip-rotate-multiple > div {
    width: 35px;
    height: 35px;
    position: absolute;
    left: 0px;
    top: 0px;
    border: 2px solid #fff;
    border-bottom-color: transparent;
    border-top-color: transparent;
    border-radius: 100%;
    animation: rotate 1s 0s ease-in-out infinite;
    animation-fill-mode: both;
  }
  .ball-clip-rotate-multiple > div:last-child {
    width: 15px;
    height: 15px;
    display: inline-block;
    top: 10px;
    left: 10px;
    border-color: #fff transparent #fff transparent;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }

  // ball-scale
  .ball-scale > div {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    margin: 2px;
    display: inline-block;
    background-color: #fff;
    animation: ball-scale 1s 0s ease-in-out infinite;
    animation-fill-mode: both;
  }

  // ball-scale-multiple
  .ball-scale-multiple {
    width: 60px;
    height: 60px;
    position: relative;
  }
  .ball-scale-multiple > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  .ball-scale-multiple > div:nth-child(3) {
    animation-delay: 0.4s;
  }
  .ball-scale-multiple > div {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    margin: 2px;
    background-color: #fff;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0;
    margin: 0;
    animation: ball-scale-multiple 1s 0s linear infinite;
    animation-fill-mode: both;
  }

  // ball-scale-ripple
  .ball-scale-ripple > div {
    animation-fill-mode: both;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 2px solid #fff;
    animation: ball-scale-ripple 1s 0s infinite
      cubic-bezier(0.21, 0.53, 0.56, 0.8);
  }

  // ball-scale-ripple-multiple
  .ball-scale-ripple-multiple {
    width: 50px;
    height: 50px;
    position: relative;
  }
  .ball-scale-ripple-multiple > div:nth-child(0) {
    animation-delay: -0.2s;
  }
  .ball-scale-ripple-multiple > div:nth-child(1) {
    animation-delay: 0s;
  }
  .ball-scale-ripple-multiple > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  .ball-scale-ripple-multiple > div:nth-child(3) {
    animation-delay: 0.4s;
  }
  .ball-scale-ripple-multiple > div {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100%;
    border: 2px solid #fff;
    animation: ball-scale-ripple-multiple 1.25s 0s infinite
      cubic-bezier(0.21, 0.53, 0.56, 0.8);
    animation-fill-mode: both;
  }

  .line-scale > div:nth-child(1) {
    animation: line-scale 1s 0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
  .line-scale > div:nth-child(2) {
    animation: line-scale 1s 0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
  .line-scale > div:nth-child(3) {
    animation: line-scale 1s 0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
  .line-scale > div:nth-child(4) {
    animation: line-scale 1s 0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
  .line-scale > div:nth-child(5) {
    animation: line-scale 1s 0.5s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
  .line-scale > div {
    background-color: #fff;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 2px;
    animation-fill-mode: both;
    display: inline-block;
  }

  // line-scale-pulse-out
  .line-scale-pulse-out > div {
    background-color: #fff;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    animation: line-scale-pulse-out 0.9s 0s infinite
      cubic-bezier(0.85, 0.25, 0.37, 0.85);
  }
  .line-scale-pulse-out > div:nth-child(2),
  .line-scale-pulse-out > div:nth-child(4) {
    animation-delay: 0.2s !important;
  }
  .line-scale-pulse-out > div:nth-child(1),
  .line-scale-pulse-out > div:nth-child(5) {
    animation-delay: 0.4s !important;
  }

  // line-scale-pulse-out-rapid
  .line-scale-pulse-out-rapid > div {
    background-color: #fff;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    animation: line-scale-pulse-out-rapid 0.9s 0s infinite
      cubic-bezier(0.11, 0.49, 0.38, 0.78);
  }
  .line-scale-pulse-out-rapid > div:nth-child(2),
  .line-scale-pulse-out-rapid > div:nth-child(4) {
    animation-delay: 0.25s !important;
  }
  .line-scale-pulse-out-rapid > div:nth-child(1),
  .line-scale-pulse-out-rapid > div:nth-child(5) {
    animation-delay: 0.5s !important;
  }

  // square-spin
  .square-spin > div {
    animation-fill-mode: both;
    width: 50px;
    height: 50px;
    background: #fff;
    animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
  }

  // keyframes
  @keyframes ball-spin-fade-loader {
    50% {
      opacity: 0.3;
      transform: scale(0.4);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(0.6);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
  @keyframes scale {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    45% {
      transform: scale(0.1);
      opacity: 0.7;
    }
    80% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes ball-scale {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  @keyframes ball-scale-multiple {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  @keyframes ball-scale-ripple {
    0% {
      transform: scale(0.1);
      opacity: 1;
    }
    70% {
      transform: scale(1);
      opacity: 0.7;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes ball-scale-ripple-multiple {
    0% {
      transform: scale(0.1);
      opacity: 1;
    }
    70% {
      transform: scale(1);
      opacity: 0.7;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes ball-pulse-sync {
    33% {
      transform: translateY(10px);
    }
    66% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes ball-beat {
    50% {
      opacity: 0.2;
      transform: scale(0.75);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes line-scale {
    0% {
      transform: scaley(1);
    }
    50% {
      transform: scaley(0.4);
    }
    100% {
      transform: scaley(1);
    }
  }
  @keyframes line-scale-pulse-out {
    0% {
      transform: scaley(1);
    }
    50% {
      transform: scaley(0.4);
    }
    100% {
      transform: scaley(1);
    }
  }
  @keyframes line-scale-pulse-out-rapid {
    0% {
      transform: scaley(1);
    }
    80% {
      transform: scaley(0.3);
    }
    90% {
      transform: scaley(1);
    }
  }
  @keyframes square-spin {
    25% {
      transform: perspective(100px) rotateX(180deg) rotateY(0);
    }
    50% {
      transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    }
    75% {
      transform: perspective(100px) rotateX(0) rotateY(180deg);
    }
    100% {
      transform: perspective(100px) rotateX(0) rotateY(0);
    }
  }
}
</style>
