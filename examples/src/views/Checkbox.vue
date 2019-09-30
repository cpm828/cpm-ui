<template>
  <div class="page-wrap checkbox-wrap">
    <div class="top">Checkbox</div>

    <div c_wrap="ta-l pl-20 pr-20">
      <p c_wrap="fs-14 mb-10 ta-j">特别说明：<br>
        1. 考虑是移动端组件，几乎不存在使用form表单提价的情况。组件会按照form表单的思想来构建属性，但不会使用form提交。<br>
        2. 考虑到页面设计的复杂可能性，组件本身只实现了功能，未配置相关style属性，推荐使用手写样式达到UI效果。<br>
        3. disabled禁止修改，hidden隐藏不展示，是否需要传给后端由实际业务决定。
      </p>

      <p c_wrap="fs-16 pb-10">状态如下，cCheckbox单独使用时可取消：</p>
      <div c_wrap="pb-10">
        <cCheckbox v-model="single1" @onChange="onChange"></cCheckbox>
      </div>
      <div c_wrap="pb-10">
        <cCheckbox v-model="single2" @onChange="onChange"></cCheckbox>
      </div>
      <div c_wrap="pb-10">
        <cCheckbox label="已选择" v-model="single3" @onChange="onChange"></cCheckbox>
      </div>
      <div c_wrap="pb-10">
        <cCheckbox label="未选择" v-model="single4" @onChange="onChange"></cCheckbox>
      </div>
      <div c_wrap="pb-10">
        <cCheckbox label="已选择且修改激活色" checkboxColor="#f00" v-model="single5" @onChange="onChange"></cCheckbox>
      </div>
      <div c_wrap="pb-10">
        <cCheckbox label="未选择且修改激活色" :checkboxColor="['#f00', '#ccc']" v-model="single6" @onChange="onChange"></cCheckbox>
      </div>
      <div c_wrap="pb-10">
        <cCheckbox label="已选择且禁用disabled" disabled v-model="single7"></cCheckbox>
      </div>
      <div c_wrap="pb-10">
        <cCheckbox label="未选择且禁用disabled" disabled v-model="single8"></cCheckbox>
      </div>
      <div c_wrap="pb-10">
        <cCheckbox label="已选择且隐藏hidden" hidden v-model="single9"></cCheckbox>
      </div>
      <div c_wrap="pb-10">
        <cCheckbox label="未选择且隐藏hidden" hidden v-model="single10"></cCheckbox>
      </div>

      <span class="code-btn" @click.prevent.stop="showCode">code</span>
      <code-block type="html" :code="code" v-if="showCodeFlag"></code-block>

      <div c_wrap="mt-20">
        <cButton type="primary" size="small" @onClick="getData">提交全部</cButton>
      </div>
    </div>

    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cCheckbox.md">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'Checkbox',
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
      code: `<cCheckbox v-model="single1" @onChange="onChange"></cCheckbox>
<cCheckbox v-model="single2" @onChange="onChange"></cCheckbox>
<cCheckbox label="已选择" v-model="single3" @onChange="onChange"></cCheckbox>
<cCheckbox label="已选择" v-model="single4" @onChange="onChange"></cCheckbox>
<cCheckbox label="已选择且修改激活色" checkboxColor="#f00" v-model="single5" @onChange="onChange"></cCheckbox>
<cCheckbox label="已选择且修改激活色" :checkboxColor="['#f00', '#ccc']" v-model="single6" @onChange="onChange"></cCheckbox>
<cCheckbox label="已选择且禁用disabled" disabled v-model="single7"></cCheckbox>
<cCheckbox label="未选择且禁用disabled" disabled v-model="single8"></cCheckbox>
<cCheckbox label="已选择且隐藏hidden" hidden v-model="single9"></cCheckbox>
<cCheckbox label="未选择且隐藏hidden" hidden v-model="single10"></cCheckbox>
`
    }
  },
  methods: {
    showCode () {
      this.showCodeFlag = !this.showCodeFlag
    },
    onChange (flag) {
      this.$toast(flag ? '被选中了' : '被取消了')
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
</style>
