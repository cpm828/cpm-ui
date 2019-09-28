<template>
  <div class="page-wrap radiogroup-wrap">
    <div class="top">RadioGroup单选组</div>

    <div c_wrap="ta-l pl-20 pb-20">
      <h3 c_wrap="fs-18 mb-10">1. 选择正确的答案：{{config1.activeValue1}}</h3>
      <cRadioGroup :options="config1.options" v-model="config1.activeValue"></cRadioGroup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioGroup',
  data () {
    return {
      config1: {
        options: [
          {
            label: '选项A',
            value: 'A'
          },
          {
            label: '选项B',
            value: 'B'
          },
          {
            label: '选项C',
            value: 'C'
          }
        ],
        activeValue: ''
      }
    }
  }
}
</script>

<style lang="scss">
.radiogroup-wrap{

}
</style>
