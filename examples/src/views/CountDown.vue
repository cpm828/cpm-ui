<template>
  <div class="page-wrap countdown-wrap">
    <div class="top">CountDown倒计时</div>
    <div c_wrap="pl-20 pr-20 ta-l">
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">默认：HH:mm:ss</p>
        <cCountDown :time="5 * 60 * 60 * 1000"></cCountDown>
        <span class="code-btn" @click.prevent.stop="showCode(1)">code</span>
        <code-block type="html" :code="countDownConfig1.code" v-if="countDownConfig1.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">自定义格式：DD天 HH 时 mm 分 ss 秒</p>
        <cCountDown :time="30 * 60 * 60 * 1000" format="DD天 HH 时 mm 分 ss 秒"></cCountDown>
        <span class="code-btn" @click.prevent.stop="showCode(2)">code</span>
        <code-block type="html" :code="countDownConfig2.code" v-if="countDownConfig2.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">自动补时长（>24h）：HH:mm:ss</p>
        <cCountDown :time="30 * 60 * 60 * 1000"></cCountDown>
        <span class="code-btn" @click.prevent.stop="showCode(3)">code</span>
        <code-block type="html" :code="countDownConfig3.code" v-if="countDownConfig3.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">毫秒级：HH:mm:ss:SSS</p>
        <cCountDown :time="30 * 60 * 60 * 1000" format="HH:mm:ss:SSS"></cCountDown>
        <span class="code-btn" @click.prevent.stop="showCode(4)">code</span>
        <code-block type="html" :code="countDownConfig4.code" v-if="countDownConfig4.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">自定义样式：HH:mm:ss</p>
        <cCountDown :time="30 * 60 * 60 * 1000" class="count-down">
          <template v-slot="slotProps">
            <span>{{ slotProps.timeData.h }}</span>
            <span>{{ slotProps.timeData.m }}</span>
            <span>{{ slotProps.timeData.s }}</span>
          </template>
        </cCountDown>
        <cCountDown :time="30 * 60 * 60 * 1000" class="count-down">
          <template v-slot="slotProps">
            <span>{{ `0${slotProps.timeData.h}`.slice(-2) }}</span>
            <i>:</i>
            <span>{{ `0${slotProps.timeData.m}`.slice(-2) }}</span>
            <i>:</i>
            <span>{{ `0${slotProps.timeData.s}`.slice(-2) }}</span>
          </template>
        </cCountDown>
        <span class="code-btn" @click.prevent.stop="showCode(5)">code</span>
        <code-block type="html" :code="countDownConfig5.code" v-if="countDownConfig5.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">手动开始</p>
        <cCountDown :time="5000" :autoStart="false" format="ss:SSS" @onFinish="onFinish" ref="countDown"></cCountDown>
        <cButton type="primary" size="smaller" @onClick="startCount">开始</cButton>
        <cButton type="primary" size="smaller" @onClick="pauseCount">暂停</cButton>
        <cButton type="primary" size="smaller" @onClick="resetCount">重置</cButton>
        <br>
        <span class="code-btn" @click.prevent.stop="showCode(6)">code</span>
        <code-block type="html" :code="countDownConfig6.code" v-if="countDownConfig6.showCode"></code-block>
      </div>
    </div>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://cpm828.github.io/cpm-ui-docs/basic/cCountDown.html">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'CountDown',
  components: { codeBlock },
  data () {
    return {
      countDownConfig1: {
        showCode: false,
        code: `<cCountDown :time="5 * 60 * 60 * 1000"></cCountDown>`
      },
      countDownConfig2: {
        showCode: false,
        code: `<cCountDown :time="30 * 60 * 60 * 1000" format="DD天 HH 时 mm 分 ss 秒"></cCountDown>`
      },
      countDownConfig3: {
        showCode: false,
        code: `<cCountDown :time="30 * 60 * 60 * 1000"></cCountDown>`
      },
      countDownConfig4: {
        showCode: false,
        code: `<cCountDown :time="30 * 60 * 60 * 1000" format="HH:mm:ss:SSS"></cCountDown>`
      },
      countDownConfig5: {
        showCode: false,
        code: `<cCountDown :time="30 * 60 * 60 * 1000" class="count-down">
  <template v-slot="slotProps">
    <span>{{ slotProps.timeData.h }}</span>
    <span>{{ slotProps.timeData.m }}</span>
    <span>{{ slotProps.timeData.s }}</span>
  </template>
</cCountDown>
<cCountDown :time="30 * 60 * 60 * 1000" class="count-down">
  <template v-slot="slotProps">
    <span>{{ ('0' + slotProps.timeData.h).slice(-2) }}</span>
    <i>:</i>
    <span>{{ ('0' + slotProps.timeData.m).slice(-2) }}</span>
    <i>:</i>
    <span>{{ ('0' + slotProps.timeData.s).slice(-2) }}</span>
  </template>
</cCountDown>`
      },
      countDownConfig6: {
        showCode: false,
        code: `<cCountDown :time="5000" :autoStart="false" format="ss:SSS" @onFinish="onFinish" ref="countDown"></cCountDown>
<cButton type="primary" size="smaller" @onClick="startCount">开始</cButton>
<cButton type="primary" size="smaller" @onClick="pauseCount">暂停</cButton>
<cButton type="primary" size="smaller" @onClick="resetCount">重置</cButton>

startCount () {
  this.$refs.countDown.start()
},
pauseCount () {
  this.$refs.countDown.pause()
},
resetCount () {
  this.$refs.countDown.reset()
},
onFinish () {
  this.$toast('结束了')
}`
      }
    }
  },
  created () { },
  mounted () { },
  methods: {
    showCode (type) {
      if (this[`countDownConfig${type}`].showCode) {
        this[`countDownConfig${type}`].showCode = false
        return
      }
      for (let i = 1, len = 6; i <= len; i++) {
        this[`countDownConfig${i}`].showCode = false
      }
      this[`countDownConfig${type}`].showCode = true
    },
    startCount () {
      this.$refs.countDown.start()
    },
    pauseCount () {
      this.$refs.countDown.pause()
    },
    resetCount () {
      this.$refs.countDown.reset()
    },
    onFinish () {
      this.$toast('结束了')
    }
  }
}
</script>

<style lang="scss" scoped>
.countdown-wrap {
  .count-down {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      background-color: #4574ff;
      border-radius: 2px;
      font-size: 12px;
      color: #fff;
      margin-right: 5px;
    }
    i{
      font-size: 14px;
      margin-right: 5px;
    }
  }
}
</style>
