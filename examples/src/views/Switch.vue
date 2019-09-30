<template>
  <div class="page-wrap switch-wrap">
    <div class="top">Switch开关</div>

    <div c_wrap="flex">
      默认颜色：<cSwitch v-model="flag1"></cSwitch>
    </div>
    <div c_wrap="flex">
      自定义颜色：<cSwitch v-model="flag2" color="red"></cSwitch>
    </div>
    <div c_wrap="flex">
      带插槽显示结果：
      <cSwitch v-model="flag3" class="switch3">
        {{flag3 ? '开' : '关'}}
      </cSwitch>
    </div>
    <div c_wrap="flex">
      small size：
      <cSwitch v-model="flag4" size="small"></cSwitch>
    </div>
    <div c_wrap="flex" >
      自定义size：
      <cSwitch v-model="flag5" class="switch5">
        {{flag5 ? '开' : '关'}}
      </cSwitch>
    </div>

    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cSwitch.md">查看文档</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swtich',
  data () {
    return {
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang="scss">
.switch-wrap{
  .switch3{
    width: 62px !important;
    &::before{
      width: 60px !important;
    }
    &.active{
      &::after{
        transform: translate(30px) !important;
      }
    }
    .tip{
      width: 30px !important;
    }
  }

  // 完全覆盖样式
  .switch5{
    width: 52px !important;
    height: 26px !important;
    border-radius: 13px;
    .tip{
      width: 24px !important;
      height: 26px !important;
      left: 28px !important;
    }
    &::before{
      width: 50px !important;
      height: 24px !important;
      border-radius: 12px !important;
    }
    &::after{
      width: 24px !important;
      height: 24px !important;
    }
    &.active{
      &::after{
        transform: translate(26px) !important;
      }
      .tip{
        transform: translate(-28px) !important;
        color: #fff;
      }
    }
  }
}
</style>
