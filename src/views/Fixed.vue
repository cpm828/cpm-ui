<template>
  <div class="page-wrap fixed-wrap">
    <cFixed>
      <cTitleBar slot="header" title="Fixed" @onClickLeft="$router.back()"></cTitleBar>

      <div class="top">Fixed顶部或底部固定</div>
      <p c_wrap="fs-14 ta-j pl-20 pr-20">
        提示：<br>
        1. 吸顶和吸底使用flex布局完成。<br>
        2. 默认状态下，按住页面上拉或上拉，会将header拉下去或将footer拉上去，体验没有原生好，所以在touchmove的时候做了一些处理达到原生效果。
      </p>
      <p c_wrap="fs-14 mt-20">模拟纵向滚动</p>
      <div c_wrap="scroll-y" class="box1">
        <p>哈哈哈哈哈哈1</p>
        <p>哈哈哈哈哈哈2</p>
        <p>哈哈哈哈哈哈3</p>
        <p>哈哈哈哈哈哈4</p>
        <p>哈哈哈哈哈哈5</p>
        <p>哈哈哈哈哈哈6</p>
        <p>哈哈哈哈哈哈7</p>
        <p>哈哈哈哈哈哈8</p>
        <p>哈哈哈哈哈哈9</p>
        <p>哈哈哈哈哈哈10</p>
        <p>哈哈哈哈哈哈11</p>
        <p>哈哈哈哈哈哈12</p>
      </div>
      <p c_wrap="fs-14">模拟横向滚动</p>
      <div c_wrap="scroll-x" class="box2">
        <p>哈1哈2哈3哈4哈5哈6哈7哈8哈9哈10哈11哈12哈13哈14哈15哈16</p>
      </div>
      1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>
      <div>
        <a class="aLink" c_wrap="fs-12"
          href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/fixed.md">查看文档</a>
      </div>

      <cButton slot="footer" type="primary" size="large" @onClick="onClick('header')">footer</cButton>
    </cFixed>
  </div>
</template>

<script>
export default {
  name: 'Fixed',
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  methods: {
    onClick (type) {
      this.$toast(`您点击了${type}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed-wrap{
  height: 100%;
  padding-bottom: 0 !important;
  .box1{
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    margin: 0 auto 20px;
  }
  .box2{
    width: 200px;
    height: 25px;
    border: 1px solid #ccc;
    margin: 0 auto 20px;
    white-space: nowrap;
  }
}
</style>
