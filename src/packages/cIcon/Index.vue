<template>
  <span class="cpm-cIcon">
    <!-- unicode render -->
    <i
      class="iconfont"
      :style="cIconStyle"
      v-if="cIconRender === 'unicode'"
      @click="onClick"
      v-html="type"
    ></i>

    <!-- font-class render -->
    <i
      :class="['iconfont', cIconType]"
      :style="cIconStyle"
      v-if="cIconRender === 'font-class'"
      @click="onClick"
    ></i>

    <!-- symbol render -->
    <svg
      class="iconsymbol"
      aria-hidden="true"
      :style="cIconStyle"
      v-if="cIconRender === 'symbol'"
      @click="onClick"
    >
      <use :xlink:href="'#' + cIconType" />
    </svg>
  </span>
</template>

<script>
import '../../assets/iconfont/iconfont.js'
export default {
  name: 'cIcon',
  props: {
    // 渲染方式：unicode、font-class、symbol（推荐使用font-class方式）
    render: {
      type: String,
      default: 'font-class'
    },
    // 图标类型
    type: {
      type: String,
      default: ''
    },
    // 图标字号
    size: {
      type: String,
      default: ''
    },
    // 图标颜色
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    // 渲染图标方式
    cIconRender () {
      return this.render
    },
    // 图标类型
    cIconType () {
      return `icon-${this.type}`
    },
    // 图标样式
    cIconStyle () {
      let style = {}
      if (this.size) {
        style['font-size'] = this.size
        style['line-height'] = this.size
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    }
  },
  methods: {
    onClick (e) {
      this.$emit('onClick', e)
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/iconfont/iconfont.css";
/*
导入了阿里巴巴字体库，参考：https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.16&helptype=code
官方列举了三种导入方式：
    1. unicode引用（html+css）
        支持ie6+、不太直观
    2. font-class引用（css）
        支持ie8+、class定义图标、使用字体
    3. symbol引用（js）
        支持 ie9+、支持多色图标、svg渲染
*/
.cpm-cIcon{
  font-size: 0; // 清除行内元素产生的间隙
  .iconfont{
    width: 1em;
    height: 1em;
    line-height: 1em;
  }
  .iconsymbol {
    width: 1em;
    height: 1em;
    line-height: 1em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
