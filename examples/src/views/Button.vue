<template>
   <div class="page-wrap button-wrap">
    <div class="top">Button按钮</div>

    <p c_wrap="fs-16 ta-l pb-10">1. default按钮四种状态：</p>
    <div c_wrap="pb-10">
      <cButton type="default" size="large">default</cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="default" size="large" plain>default + plain</cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="default" size="large" disabled>default + disabled</cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="default" size="large" plain disabled>default + plain + disabled</cButton>
    </div>
    <span class="code-btn" @click.prevent.stop="showCode(1)">code</span>
    <code-block type="html" :code="code1" v-if="showCodeFlag1"></code-block>

    <p c_wrap="fs-16 ta-l pb-10 pt-20">2. primary按钮四种状态：</p>
    <div c_wrap="pb-10">
      <cButton type="primary" size="large">primary</cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="primary" size="large" plain>primary + plain</cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="primary" size="large" disabled>primary + disabled</cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="primary" size="large" plain disabled>primary + plain + disabled</cButton>
    </div>
    <span class="code-btn" @click.prevent.stop="showCode(2)">code</span>
    <code-block type="html" :code="code2" v-if="showCodeFlag2"></code-block>

    <p c_wrap="fs-16 ta-l pb-10  pt-20">3. danger按钮四种状态：</p>
    <div c_wrap="pb-10">
      <cButton type="danger" size="large">danger</cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="danger" size="large" plain>danger + plain</cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="danger" size="large" disabled>danger + disabled</cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="danger" size="large" plain disabled>danger + plain + disabled</cButton>
    </div>
    <span class="code-btn" @click.prevent.stop="showCode(3)">code</span>
    <code-block type="html" :code="code3" v-if="showCodeFlag3"></code-block>

    <p c_wrap="fs-16 ta-l pb-10  pt-20">4. 自定义按钮样式</p>
    <div c_wrap="pb-10">
      <cButton type="primary" size="large" :btnStyle="{ color: '#fff', backgroundColor: '#999', backgroundImage: 'none' }">确定</cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton class="button-42" size="large" type="primary">确定</cButton>
    </div>
    <div c_wrap="pb-10 flex jc-sa">
      <cButton class="button-43" size="large" type="primary">分享(各50%)</cButton>
      <cButton class="button-44" size="large" type="danger">保存图片(各50%)</cButton>
    </div>
    <span class="code-btn" @click.prevent.stop="showCode(4)">code</span>
    <code-block type="html" :code="code4" v-if="showCodeFlag4"></code-block>

    <p c_wrap="fs-16 ta-l pb-10  pt-20">5. 不同size的按钮</p>
    <div c_wrap="pb-10 flex">
      <cButton class="button-55" type="primary" size="normal">normal</cButton>
      <cButton class="button-55" type="primary" size="normal" plain>确定</cButton>
    </div>
    <div c_wrap="pb-10 flex">
      <cButton class="button-56" type="primary" size="small">small</cButton>
      <cButton class="button-56" type="primary" size="small" plain>确定</cButton>
    </div>
    <div c_wrap="pb-10 flex">
      <cButton class="button-57" type="primary" size="smaller">smaller</cButton>
      <cButton class="button-57" type="primary" size="smaller" plain>确定</cButton>
    </div>
    <span class="code-btn" @click.prevent.stop="showCode(5)">code</span>
    <code-block type="html" :code="code5" v-if="showCodeFlag5"></code-block>

    <p c_wrap="fs-16 ta-l pb-10  pt-20">6. 按钮带icon</p>
    <div c_wrap="pb-10">
      <cButton type="primary" size="large">
        <cIcon class="icon-left" type="search" size="1rem" style="margin-right:0.26rem;"></cIcon>搜索
      </cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="primary" size="large">
        搜索<cIcon class="icon-left" type="search" size="1rem" style="margin-left:0.26rem;"></cIcon>
      </cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="primary" size="large">
        <img src="../assets/img/arrow-left.png" style="width:1.4rem;">
        上一页
      </cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="primary" size="large">
        下一页
        <img src="../assets/img/arrow-right.png" style="width:1.4rem;">
      </cButton>
    </div>
    <div c_wrap="pb-10">
      <cButton type="primary" size="large" @onClick="onClick('collect')">
        <img src="../assets/img/like.png" style="width:1.2rem;margin-right:0.26rem;" v-if="!collectFlag">
        <img src="../assets/img/like-filled.png" style="width:1.2rem;margin-right:0.26rem;" v-else>
        收藏
      </cButton>
    </div>
    <span class="code-btn" size="large" @click.prevent.stop="showCode(6)">code</span>
    <code-block type="html" :code="code6" v-if="showCodeFlag6"></code-block>

    <div>
      <a class="aLink" c_wrap="fs-12"
      href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cButton.md">查看文档</a>
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
      collectFlag: false,
      showCodeFlag1: false,
      showCodeFlag2: false,
      showCodeFlag3: false,
      showCodeFlag4: false,
      showCodeFlag5: false,
      showCodeFlag6: false,
      code1: `<cButton type="default" size="large">default</cButton>
<cButton type="default" size="large" plain>default + plain</cButton>
<cButton type="default" size="large" disabled>default + disabled</cButton>
<cButton type="default" size="large" plain disabled>default + plain + disabled</cButton>`,
      code2: `<cButton type="primary" size="large">primary</cButton>
<cButton type="primary" size="large" plain>primary + plain</cButton>
<cButton type="primary" size="large" disabled>primary + disabled</cButton>
<cButton type="primary" size="large" plain disabled>primary + plain + disabled</cButton>`,
      code3: `<cButton type="danger" size="large">danger</cButton>
<cButton type="danger" size="large" plain>danger + plain</cButton>
<cButton type="danger" size="large" disabled>danger + disabled</cButton>
<cButton type="danger" size="large" plain disabled>danger + plain + disabled</cButton>`,
      code4: `<cButton type="primary" size="large" :btnStyle="{ color: '#fff', backgroundColor: '#999', backgroundImage: 'none' }">确定</cButton>

<cButton class="button-42" size="large" type="primary">确定</cButton>

<cButton class="button-43" size="large" type="primary">分享(各50%)</cButton>
<cButton class="button-44" size="large" type="danger">保存图片(各50%)</cButton>`,
      code5: `<cButton class="button-55" type="primary" size="normal">normal</cButton>
<cButton class="button-55" type="primary" size="normal" plain>确定</cButton>

<cButton class="button-56" type="primary" size="small">small</cButton>
<cButton class="button-56" type="primary" size="small" plain>确定</cButton>

<cButton class="button-57" type="primary" size="smaller">smaller</cButton>
<cButton class="button-57" type="primary" size="smaller" plain>确定</cButton>`,
      code6: `<cButton type="primary" size="large">
  <cIcon class="icon-left" type="search" size="1rem" style="margin-right:0.26rem;"></cIcon>
  搜索
</cButton>

<cButton type="primary" size="large">
  搜索
  <cIcon class="icon-left" type="search" size="1rem" style="margin-left:0.26rem;"></cIcon>
</cButton>

<cButton type="primary" size="large">
  <img src="../assets/img/arrow-left.png" style="width:1.4rem;">
  上一页
</cButton>

<cButton type="primary" size="large">
  下一页
  <img src="../assets/img/arrow-right.png" style="width:1.4rem;">
</cButton>

<cButton type="primary" size="large" @onClick="onClick('collect')">
  <img src="../assets/img/like.png" style="width:1.2rem;margin-right:0.26rem;" v-if="!collectFlag">
  <img src="../assets/img/like-filled.png" style="width:1.2rem;margin-right:0.26rem;" v-else>
  收藏
</cButton>`
    }
  },
  created () {},
  mounted () {},
  methods: {
    onClick (type) {
      if (type === 'collect') {
        this.collectFlag = !this.collectFlag
      }
    },
    showCode (type) {
      if (this[`showCodeFlag${type}`]) {
        this[`showCodeFlag${type}`] = false
        return
      }
      for (let i = 1, len = 6; i <= len; i++) {
        this[`showCodeFlag${i}`] = false
      }
      this[`showCodeFlag${type}`] = true
    }
  }
}
</script>

<style lang="scss" scoped>
.button-wrap{
  .button-42{
    margin: 0 47.5px;
    border-radius: 22.5px;
  }
  .button-43, .button-44{
    width: 50%;
  }
  .button-55, .button-56, .button-57{
    margin-right: 5px;
  }
}
</style>
