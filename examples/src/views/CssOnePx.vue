<template>
  <div class="page-wrap cssonepx-wrap">
    <div class="top">CSS 1px边框解决方案</div>

    <p c_wrap="fs-14">使用transform:scale(.5)放缩来实现1px，使用伪类构建边框线</p>
    <div c_wrap="p-20">
      <div class="cssonepx-btnbox">
        <span c_wrap="fs-14">添加class: 空</span>
        <div class="cssonepx-btn">无边框</div>
      </div>
      <div class="cssonepx-btnbox">
        <span c_wrap="fs-14">添加class: cpm-1px</span>
        <div class="cssonepx-btn cpm-1px">全边框</div>
      </div>
      <div class="cssonepx-btnbox">
        <span c_wrap="fs-14">添加class: cpm-1px-t</span>
        <div class="cssonepx-btn cpm-1px-t">上边框</div>
      </div>
      <div class="cssonepx-btnbox">
        <span c_wrap="fs-14">添加class: cpm-1px-b</span>
        <div class="cssonepx-btn cpm-1px-b">下边框</div>
      </div>
      <div class="cssonepx-btnbox">
        <span c_wrap="fs-14">添加class: cpm-1px-l</span>
        <div class="cssonepx-btn cpm-1px-l">左边框</div>
      </div>
      <div class="cssonepx-btnbox">
        <span c_wrap="fs-14">添加class: cpm-1px-r</span>
        <div class="cssonepx-btn cpm-1px-r">右边框</div>
      </div>
      <div class="cssonepx-btnbox">
        <span c_wrap="fs-14">添加class: cpm-1px-tb</span>
        <div class="cssonepx-btn cpm-1px-tb">上下边框</div>
      </div>
      <div class="cssonepx-btnbox">
        <span c_wrap="fs-14">添加class: cpm-1px-lr</span>
        <div class="cssonepx-btn cpm-1px-lr">左右边框</div>
      </div>
      <div class="cssonepx-btnbox">
        <span c_wrap="fs-14">添加class: cpm-1px，覆盖颜色</span>
        <div class="cssonepx-btn cssonepx-btn2 cpm-1px">全边框</div>
      </div>
      <div class="cssonepx-btnbox">
        <span c_wrap="fs-14">添加class: cpm-1px-tb，覆盖颜色</span>
        <div class="cssonepx-btn cssonepx-btn3 cpm-1px-tb">上下边框</div>
      </div>
    </div>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cssOnePx.md">查看文档</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnePx',
  data () {
    return {

    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang="scss" scoped>
.cssonepx-wrap{
  .cssonepx-btnbox{
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
  }
  .cssonepx-btn{
    width: 100px;
    height: 30px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cssonepx-btn2{
    &::before{
      color: red;
      border-color: red;
    }
    &::after{
      color: red;
      border-color: red;
    }
  }
  .cssonepx-btn3{
    &::before{
      color: green;
      border-color: green;
    }
    &::after{
      color: green;
      border-color: green;
    }
  }
}
</style>
