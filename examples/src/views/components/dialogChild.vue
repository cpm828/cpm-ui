<template>
  <div style="padding:1.6rem;">
    <h2 style="margin-bottom:1rem;">你喜欢的歌手的身价榜</h2>
    <p style="font-size:12px">提示：以下内容模拟纵向滚动</p>
    <ul style="font-size:0.8rem;margin-bottom:0.8rem;text-align:left;height:8rem;overflow-y:scroll;border:1px dashed #ccc;" class="scrollable">
      <li style="list-style: disc;" v-for="(item, index) in cContentData.list" :key="index">{{item.name}}的身价是：{{item.price}}</li>
    </ul>
    <p style="font-size:12px">提示：以下内容模拟横向滚动</p>
    <div style="font-size:0.8rem;white-space: nowrap;overflow-x:scroll;border:1px dashed #ccc;" class="scrollable">
      {{cContentData.content}}<br />
      {{cContentData.content}}
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    cContentData: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.scrollable{
  -webkit-overflow-scrolling: touch;
}
</style>
