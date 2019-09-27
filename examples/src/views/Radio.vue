<template>
  <div class="page-wrap radio-wrap">
    <div class="top">Radio单选</div>

    <div c_wrap="ta-l pl-20 pb-20">
      <p c_wrap="fs-18 pb-10">1. 所有状态如下：</p>
      <p>1.1 为true的激活</p>
      <cRadio name="single1" v-model="single1"></cRadio>
      <cRadio name="single2" v-model="single2"></cRadio>
      <cRadio name="single3" label="已选择" v-model="single3"></cRadio>
      <cRadio name="single4" label="未选择" v-model="single4"></cRadio>
      <cRadio name="single5" label="已选择且禁用disabled" disabled v-model="single5"></cRadio>
      <cRadio name="single6" label="未选择且禁用disabled" disabled v-model="single6"></cRadio>
      <cRadio name="single7" label="已选择且隐为藏域hidden" hidden v-model="single7"></cRadio>
      <cRadio name="single8" label="未选择且为隐藏域hidden" hidden v-model="single8"></cRadio>
    </div>

    <div c_wrap="ta-l" style="padding-left:1rem">
      <p c_wrap="fs-18 pb-10">2. radioGroup：</p>
      <div c_wrap="flex pt-20">
        <div c_wrap="flex jc-c ai-c c-fff fs-16 mr-10" class="sumbit-btn" @click="getData(1)">提交(vue)</div>
        <div c_wrap="flex jc-c ai-c c-fff fs-16 mr-10" class="sumbit-btn" @click="getData(2)">提交(js)</div>
        <div c_wrap="flex jc-c ai-c c-fff fs-16" class="sumbit-btn" @click="getData(3)">表单提交</div>
      </div>
    </div>

    <!-- <cRadio label="男" v-model="sex"></cRadio> -->
    <!-- <cRadio label="女" v-model="sex"></cRadio> -->

    <a class="aLink" c_wrap="fs-12"
      href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/ActionSheet.md">查看文档</a>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data () {
    return {
      single1: true,
      single2: false,
      single3: true,
      single4: false,
      single5: true,
      single6: false,
      single7: true,
      single8: false
    }
  },
  created () { },
  mounted () { },
  methods: {
    /**
     * 模拟常见的几种提交方法，通常情况下使用方法1
     * @param type {Number} 1/提交vue、2/提交js、3/form表单提交
     */
    getData (type) {
      let formObj = {}
      if (type === 1) {
        ['single1', 'single2', 'single3', 'single4', 'single7', 'single8'].forEach((item) => {
          formObj[item] = this[item]
        })
      } else if (type === 2) {
        const inputList = this.$refs.form1
        inputList.querySelectorAll('input').forEach((el) => {
          if (!el.disabled) formObj[el.name] = el.value
        })
      } else if (type === 3) { // form表单提交
        this.$refs.form1.submit()
        return
      }
      console.log('需要接口传给后端的值：', formObj)

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
    width: 80px;
    height: 28px;
    background-image: linear-gradient(-90deg, #508BEF 0%, #4B5FFE 100%);
    border-radius: 14px;
  }
}
</style>
