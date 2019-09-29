<template>
  <div class="page-wrap radio-wrap">
    <div class="top">Radio</div>

    <div c_wrap="ta-l pl-20 pr-20">
      <p c_wrap="fs-14 mb-10 ta-j">特别说明：<br>
        1. 考虑是移动端组件，几乎不存在使用form表单提价的情况。组件会按照form表单的思想来构建属性，但不会使用form提交。<br>
        2. 考虑到页面设计的复杂可能性，组件本身只实现了功能，未配置相关style属性，推荐使用手写样式达到UI效果。<br>
        3. disabled禁止修改，hidden隐藏不展示，是否需要传给后端由实际业务决定。
      </p>

      <p c_wrap="fs-16 pb-10">状态如下，cRadio单独使用时不可取消：</p>
      <div c_wrap="pb-10">
        <cRadio v-model="single1"></cRadio>
      </div>
      <div c_wrap="pb-10">
        <cRadio v-model="single2" @onChange="onChange"></cRadio>
      </div>
      <div c_wrap="pb-10">
        <cRadio label="已选择" v-model="single3"></cRadio>
      </div>
      <div c_wrap="pb-10">
        <cRadio label="未选择" v-model="single4" @onChange="onChange"></cRadio>
      </div>
      <div c_wrap="pb-10">
        <cRadio label="已选择且修改激活色" radioColor="#f00" v-model="single5"></cRadio>
      </div>
      <div c_wrap="pb-10">
        <cRadio label="未选择且修改激活色" :radioColor="['#f00', '#ccc']" v-model="single6" @onChange="onChange"></cRadio>
      </div>
      <div c_wrap="pb-10">
        <cRadio label="已选择且禁用disabled" disabled v-model="single7"></cRadio>
      </div>
      <div c_wrap="pb-10">
        <cRadio label="未选择且禁用disabled" disabled v-model="single8"></cRadio>
      </div>
      <div c_wrap="pb-10">
        <cRadio label="已选择且隐藏hidden" hidden v-model="single9"></cRadio>
      </div>
      <div c_wrap="pb-10">
        <cRadio label="未选择且隐藏hidden" hidden v-model="single10"></cRadio>
      </div>

      <span class="code-btn" @click.prevent.stop="showCode">code</span>
      <code-block :code="code" v-if="showCodeFlag"></code-block>

      <div c_wrap="flex jc-c ai-c c-fff fs-16 mt-20" class="sumbit-btn" @click="getData">提交全部</div>
    </div>

    <a class="aLink" c_wrap="fs-12"
      href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRadio.md">查看文档</a>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'Radio',
  components: { codeBlock },
  data () {
    return {
      single1: true,
      single2: false,
      single3: true,
      single4: false,
      single5: true,
      single6: false,
      single7: true,
      single8: false,
      single9: true,
      single10: false,
      showCodeFlag: false,
      code: `<cRadio v-model="single1"></cRadio>
<cRadio v-model="single2" @onChange="onChange"></cRadio>
<cRadio label="已选择" v-model="single3"></cRadio>
<cRadio label="已选择" v-model="single4" @onChange="onChange"></cRadio>
<cRadio label="已选择且修改激活色" radioColor="#f00" v-model="single5"></cRadio>
<cRadio label="已选择且修改激活色" :radioColor="['#f00', '#ccc']" v-model="single6" @onChange="onChange"></cRadio>
<cRadio label="已选择且禁用disabled" disabled v-model="single7"></cRadio>
<cRadio label="未选择且禁用disabled" disabled v-model="single8"></cRadio>
<cRadio label="已选择且隐藏hidden" hidden v-model="single9"></cRadio>
<cRadio label="未选择且隐藏hidden" hidden v-model="single10"></cRadio>
`
    }
  },
  methods: {
    showCode () {
      this.showCodeFlag = !this.showCodeFlag
    },
    onChange () {
      this.$toast('被选中了')
    },
    getData () {
      let formObj = {
        single1: this.single1,
        single2: this.single2,
        single3: this.single3,
        single4: this.single4,
        single5: this.single5,
        single6: this.single6,
        single7: this.single7,
        single8: this.single8,
        single9: this.single9,
        single10: this.single10
      }
      // 以下为demo所需
      const message = `您要提交的数据为：<br>${JSON.stringify(formObj)}`
      this.$dialog({
        propsData: {
          animateName: 'zoom-in',
          message,
          showCancelBtn: false,
          confrimBtnText: '我知道了'
        },
        methods: {
          onConfirm () {
            this.remove()
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-wrap{
  .sumbit-btn{
    width: 100px;
    height: 30px;
    background-image: linear-gradient(-90deg, #508BEF 0%, #4B5FFE 100%);
    border-radius: 14px;
  }
}
</style>
