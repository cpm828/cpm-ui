<template>
  <div c_wrap="scroll-y" class="page-wrap sticky-wrap" id="stickyWrap">
    <div class="top">sticky吸顶</div>
    <p c_wrap="fs-14 mb-20 p-20 ta-j">
      注意：<br>
      1. 实现原理，touchmove时比较scollTop和offsetTop，所以需要在手机端测试效果，PC模拟器滚动鼠标无效。<br>
      2. 通常情况下，我们页面的最外层应该是100%高度，即在当前页面滚动，此时设置scrollEl即可。如果未设置高度100%，那么则无需设置scrollEl，会自动获取document的scrollTop来计算。<br>
      3. scrollEl传一个固定高度的元素id或class，如scrollEl="#stickyWrap"或scrollEl=".sticky-wrap".
    </p>
    <cSticky scrollEl=".sticky-wrap">
      <div c_wrap="flex jc-c ai-c" class="tab">header1</div>
    </cSticky>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <cSticky scrollEl="#stickyWrap">
      <div c_wrap="flex jc-c ai-c" class="tab2">header2</div>
    </cSticky>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <span class="code-btn" @click.prevent.stop="showCode">code</span>
    <code-block type="html" :code="code" v-if="showCodeFlag"></code-block>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/Sticky.md">查看文档</a>
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
  mounted () {},
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
    width: 40%;
    height: 30px;
    background-color: #ccc;
    border-radius: 15px;
    margin: 0 auto;
  }
}
</style>
