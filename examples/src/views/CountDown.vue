<template>
  <div class="page-wrap countdown-wrap">
    <div class="top">CountDown倒计时</div>
    <div c_wrap="pl-20 pr-20 ta-l">
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">默认：HH:mm:ss</p>
        <cCountDown :time="863999000"></cCountDown>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">自定义格式：DD天 HH 时 mm 分 ss 秒</p>
        <cCountDown :time="863999000" format="DD天 HH 时 mm 分 ss 秒"></cCountDown>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">毫秒级：HH:mm:ss:SSS</p>
        <cCountDown :time="36000023" format="HH:mm:ss:SSS"></cCountDown>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">自定义样式：HH:mm:ss</p>
        <cCountDown :time="864000000" class="count-down">
          <template v-slot="slotProps">
            <span>{{ slotProps.timeData.h }}</span>
            <span>{{ slotProps.timeData.m }}</span>
            <span>{{ slotProps.timeData.s }}</span>
          </template>
        </cCountDown>
        <cCountDown :time="864000000" class="count-down">
          <template v-slot="slotProps">
            <span>{{ slotProps.timeData.h }}</span>
            <i>:</i>
            <span>{{ slotProps.timeData.m }}</span>
            <i>:</i>
            <span>{{ slotProps.timeData.s }}</span>
          </template>
        </cCountDown>
      </div>
      <div c_wrap="mb-20">
        <p c_wrap="fs-14 c-999 mb-10">手动开始</p>
        <cCountDown :time="5000" :autoStart="false" format="ss:SSS" @onFinish="onFinish" ref="countDown"></cCountDown>
        <cButton type="primary" size="smaller" @onClick="startCount">开始</cButton>
        <cButton type="primary" size="smaller" @onClick="pauseCount">暂停</cButton>
        <cButton type="primary" size="smaller" @onClick="resetCount">结束</cButton>
      </div>
    </div>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cCountDown.md">查看文档</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountDown',
  data () {
    return {

    }
  },
  created () { },
  mounted () { },
  methods: {
    startCount () {
      this.$refs.countDown.start()
    },
    pauseCount () {

    },
    resetCount () {

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
