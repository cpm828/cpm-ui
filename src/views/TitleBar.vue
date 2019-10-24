<template>
  <div class="page-wrap titlebar-wrap">
    <cTitleBar title="默认" @onClickLeft="onClickLeft"></cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(1)">code</span>
    <code-block type="html" :code="titleBarConfig1.code" v-if="titleBarConfig1.showCode"></code-block>

    <cTitleBar title="显示底边框" :showBottomBorder="true" @onClickLeft="onClickLeft"></cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(2)">code</span>
    <code-block type="html" :code="titleBarConfig2.code" v-if="titleBarConfig2.showCode"></code-block>

    <cTitleBar title="超出自动隐藏超出自动隐藏超出自动隐藏超出自动隐藏超出自动隐藏超出自动隐藏" @onClickLeft="onClickLeft"></cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(3)">code</span>
    <code-block type="html" :code="titleBarConfig3.code" v-if="titleBarConfig3.showCode"></code-block>

    <cTitleBar title="右侧使用插槽显示文本" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
      <div slot="right">下一页</div>
    </cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(4)">code</span>
    <code-block type="html" :code="titleBarConfig4.code" v-if="titleBarConfig4.showCode"></code-block>

    <cTitleBar title="右侧使用插槽显示刷新按钮" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
      <cIcon slot="right" type="refresh" size="1.2rem" color="#333"></cIcon>
    </cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(5)">code</span>
    <code-block type="html" :code="titleBarConfig5.code" v-if="titleBarConfig5.showCode"></code-block>

    <cTitleBar title="右侧使用插槽显示横向更多按钮" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
      <cIcon slot="right" type="gengduo" size="1.1rem" color="#333"></cIcon>
    </cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(6)">code</span>
    <code-block type="html" :code="titleBarConfig6.code" v-if="titleBarConfig6.showCode"></code-block>

    <cTitleBar title="右侧使用插槽显示纵向更多按钮" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
      <cIcon slot="right" type="gengduo2" size="1.1rem" color="#333"></cIcon>
    </cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(7)">code</span>
    <code-block type="html" :code="titleBarConfig7.code" v-if="titleBarConfig7.showCode"></code-block>

    <cTitleBar title="不显示左侧默认的返回按钮" :showBack="false"></cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(8)">code</span>
    <code-block type="html" :code="titleBarConfig8.code" v-if="titleBarConfig8.showCode"></code-block>

    <cTitleBar title="左侧使用插槽显示文本" @onClickLeft="onClickLeft2">
      <div slot="left" style="color:#333">返回</div>
    </cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(9)">code</span>
    <code-block type="html" :code="titleBarConfig9.code" v-if="titleBarConfig9.showCode"></code-block>

    <cTitleBar title="左侧使用插槽显示icon" @onClickLeft="onClickLeft2">
      <cIcon slot="left" type="help" size="1.1rem" color="#333"></cIcon>
    </cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(10)">code</span>
    <code-block type="html" :code="titleBarConfig10.code" v-if="titleBarConfig10.showCode"></code-block>

    <cTitleBar title="中间使用插槽控制显示" @onClickLeft="onClickLeft" class="titlebar1">
      <div slot="center" class="titlebar-center">
        <div>评分优先</div>
        <div>销量优先</div>
      </div>
    </cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(11)">code</span>
    <code-block type="html" :code="titleBarConfig11.code" v-if="titleBarConfig11.showCode"></code-block>

    <cTitleBar title="wraperStyle自定义样式" :wraperStyle="{'background': '#4574ff', color: '#fff'}" @onClickLeft="onClickLeft"></cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(12)">code</span>
    <code-block type="html" :code="titleBarConfig12.code" v-if="titleBarConfig12.showCode"></code-block>

    <cTitleBar title="css重置样式" @onClickLeft="onClickLeft" class="titlebar2"></cTitleBar>
    <span class="code-btn" @click.prevent.stop="showCode(13)">code</span>
    <code-block type="html" :code="titleBarConfig13.code" v-if="titleBarConfig13.showCode"></code-block>

    <div class="top">TitleBar标题栏</div>
    <p c_wrap="fs-14 ta-j pl-20 pr-20">
      提示：<br>
      1. 在不设置插槽的情况下，左侧默认配置了返回按钮（默认显示），右侧默认配置了刷新按钮（默认隐藏）。<br>
      2. 在使用titleBar时，内部处理了iOS全屏显示时（即原生webview中隐藏title栏时）刘海屏顶部的占位，通常情况下安卓全屏时webview不包括电池栏。<br>
      3. 默认设置了白底黑字带底边框，可设置showBottomBorder=false不展示底边框，也可以设置wraperStyle={}来重置所有的样式。<br>
      4. cTitleBar组件应该搭配cFixed组件使用以达到吸顶的效果，详见cFixed组件。
    </p>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/fixed.md">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'TitleBar',
  components: { codeBlock },
  data () {
    return {
      titleBarConfig1: {
        showCode: false,
        code: `<cTitleBar title="默认" @onClickLeft="onClickLeft"></cTitleBar>`
      },
      titleBarConfig2: {
        showCode: false,
        code: `<cTitleBar title="显示底边框" :showBottomBorder="true" @onClickLeft="onClickLeft"></cTitleBar>`
      },
      titleBarConfig3: {
        showCode: false,
        code: `<cTitleBar title="超出自动隐藏超出自动隐藏超出自动隐藏超出自动隐藏超出自动隐藏超出自动隐藏" @onClickLeft="onClickLeft"></cTitleBar>`
      },
      titleBarConfig4: {
        showCode: false,
        code: `<cTitleBar title="右侧使用插槽显示文本" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
  <div slot="right">下一页</div>
</cTitleBar>`
      },
      titleBarConfig5: {
        showCode: false,
        code: `<cTitleBar title="右侧使用插槽显示刷新按钮" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
  <cIcon slot="right" type="refresh" size="1.2rem" color="#333"></cIcon>
</cTitleBar>`
      },
      titleBarConfig6: {
        showCode: false,
        code: `<cTitleBar title="右侧使用插槽显示横向更多按钮" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
  <cIcon slot="right" type="gengduo" size="1.1rem" color="#333"></cIcon>
</cTitleBar>`
      },
      titleBarConfig7: {
        showCode: false,
        code: `<cTitleBar title="右侧使用插槽显示竖向更多按钮" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
  <cIcon slot="right" type="gengduo2" size="1.1rem" color="#333"></cIcon>
</cTitleBar>`
      },
      titleBarConfig8: {
        showCode: false,
        code: `<cTitleBar title="不显示左侧默认的返回按钮" :showBack="false"></cTitleBar>`
      },
      titleBarConfig9: {
        showCode: false,
        code: `<cTitleBar title="左侧使用插槽显示文本">
  <div slot="left" style="color:#333">返回</div>
</cTitleBar>`
      },
      titleBarConfig10: {
        showCode: false,
        code: `<cTitleBar title="左侧使用插槽显示icon">
  <cIcon slot="left" type="help" size="1.1rem" color="#333"></cIcon>
</cTitleBar>`
      },
      titleBarConfig11: {
        showCode: false,
        code: `<cTitleBar title="中间使用插槽控制显示" class="titlebar1">
  <div slot="center" class="titlebar-center">
    <div>评分优先</div>
    <div>销量优先</div>
  </div>
</cTitleBar>`
      },
      titleBarConfig12: {
        showCode: false,
        code: `<cTitleBar title="wraperStyle自定义样式" :wraperStyle="{'background': '#4574ff', color: '#fff'}" @onClickLeft="onClickLeft"></cTitleBar>`
      },
      titleBarConfig13: {
        showCode: false,
        code: `<cTitleBar title="css重置样式" @onClickLeft="onClickLeft" class="titlebar2"></cTitleBar>`
      },
    }
  },
  created () {},
  mounted () {},
  methods: {
    showCode (type) {
      if (this[`titleBarConfig${type}`].showCode) {
        this[`titleBarConfig${type}`].showCode = false
        return
      }
      for (let i = 1, len = 11; i <= len; i++) {
        this[`titleBarConfig${i}`].showCode = false
      }
      this[`titleBarConfig${type}`].showCode = true
    },
    onClickLeft () {
      this.$router.back()
    },
    onClickLeft2 () {
      this.$toast('点击左侧按钮')
    },
    onClickRight () {
      this.$toast('点击右侧按钮')
    }
  }
}
</script>

<style lang="scss">
.titlebar-wrap{
  .titlebar1{
    .titlebar-center{
      width: 180px;
      height: 28px;
      border: 1px solid #4574ff;
      border-radius: 6px;
      font-size: 14px;
      display: flex;
      color: #4574ff;
      div{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:first-child{
          border-right: 1px solid #4574ff;
        }
      }
    }
  }
  .titlebar2{
    background-image: linear-gradient(90deg, #508BEF 0%, #4B5FFE 100%) !important;
    color: #fff !important;
    .iconfont{
      color: #fff !important;
    }
  }
}
</style>
