<template>
  <div c_wrap="scroll-y" class="page-wrap sticky-wrap" id="stickyWrap" ref="stickyWrap">
    <div class="top">sticky吸顶</div>
    <p c_wrap="fs-14 mb-20 p-20 ta-j">
      提示：<br>
      1. 实现原理：比较getBoundingClientRect().top值和传入的top值（默认为0）。<br>
      2. 监听原理：iOS部分浏览器或webview（UC浏览器、今日头条）在监听scroll或touchend手指离开后产生的惯性滚动时均无法获取scroll各项值，停止滚动后才能获取。position:sticky也会受到惯性滚动的影响。除非禁用系统scroll，使用类似IScroll等三方插件来模拟滚动。本插件暂不考虑三方插件解决。<br>
      3. 最终处理：在支持sticky属性时使用sticky来自动吸附，不支持监听scroll来计算吸附。<br>
      4. 属性传参：当前页面设置height:100%时，传入container表示页面滚动dom，可传id、class或dom元素。top属性表示吸顶距离。
    </p>
    <cSticky :container="container">
      <div c_wrap="flex jc-c ai-c" class="tab">header1，吸顶</div>
    </cSticky>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <cSticky container="#stickyWrap" :top="100">
      <div c_wrap="flex jc-c ai-c" class="tab2">header2，距离顶部100px处吸顶</div>
    </cSticky>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <span class="code-btn" @click.prevent.stop="showCode">code</span>
    <code-block type="html" :code="code" v-if="showCodeFlag"></code-block>
    <div v-for="n in 50" :key="n" class="item">{{n}}</div>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://cpm828.github.io/cpm-ui-docs/layout/cSticky.html">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: '',
  components: { codeBlock },
  data () {
    return {
      container: null,
      showCodeFlag: false,
      code: `<!-- 未设置height:100%时 -->
<cSticky>
  <div class="tab">header1</div>
</cSticky>

<!-- 设置height:100%时 -->
<cSticky scrollEl=".sticky-wrap">
  <div class="tab">header2</div>
</cSticky>`
    }
  },
  created () {},
  mounted () {
    this.container = this.$refs.stickyWrap
  },
  methods: {
    showCode () {
      this.showCodeFlag = !this.showCodeFlag
    }
  }
}
</script>

<style lang="scss" scoped>
.sticky-wrap{
  height: 100%;
  padding: 0 !important;
  .tab{
    width: 100%;
    height: 45px;
    background-color: #fff;
  }
  .tab2{
    width: 90%;
    height: 30px;
    background-color: #ccc;
    border-radius: 15px;
    margin: 0 auto;
  }
}
</style>
