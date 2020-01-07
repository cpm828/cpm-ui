<template>
  <span :class="['cpm-cRate', disabled ? 'cpm-cRate-disabled' : '']">
    <template v-for="i in max" >
      <cIcon :key="i" :type="currentType(i)" :color="currentColor(i)" :size="size" @onClick="onClick(i)"></cIcon>
    </template>
    <!-- 结果 -->
    <slot></slot>
  </span>
</template>

<script>
import cIcon from '../cIcon'
export default {
  name: 'cRate',
  components: { cIcon },
  props: {
    // 评分0~5，v-model双向绑定
    value: {
      type: Number,
      default: 0
    },
    // 类型，star/heart/smile
    type: {
      type: String,
      default: 'star'
    },
    // 最大分值
    max: {
      type: Number,
      default: 5
    },
    // 图标size
    size: {
      type: String,
      default: '1.2rem'
    },
    // 阙值，选择低分和中分界限（值本身被划分在低分中），中分和高分界限（值本身被划分在高分中）
    // 如默认的5分值，1~2分为低分，3分为中分，4~5分为高分
    threshold: {
      type: Array,
      default: () => [2, 4]
    },
    // 各个阙值对应的颜色
    colors: {
      type: Array,
      default: () => ['#F7BA2A', '#F7BA2A', '#F7BA2A']
    },
    // 未选中时的颜色
    voidColor: {
      type: String,
      default: '#C6D1DE'
    },
    // 只读
    disabled: {
      type: Boolean,
      default: false
    },
    // 只读时未选中时的颜色，搭配disabled使用
    disabledVoidColor: {
      type: String,
      default: '#EFF2F7'
    }
  },
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  methods: {
    onClick (index) {
      if (this.disabled) return
      this.$emit('input', index)
      this.$emit('onChange', index) // 辅助使用
    },
    // 图标类型
    currentType (index) {
      if (this.type === 'star') {
        return index <= this.value ? 'star-filled' : 'star'
      } else if (this.type === 'heart') {
        return index <= this.value ? 'like-filled' : 'like'
      } else if (this.type === 'smile') {
        if (!this.value) return 'meh'
        if (this.value <= this.threshold[0]) { // 低分
          return index <= this.value ? 'frown-filled' : 'frown'
        } else if (this.value >= this.threshold[1]) { // 高分
          return index <= this.value ? 'smile-filled' : 'smile'
        } else { // 中分
          return index <= this.value ? 'meh-filled' : 'meh'
        }
      }
    },
    // 图标颜色
    currentColor (index) {
      if (index > this.value) { // 未选中的
        if (this.disabled) { // 只读时
          return this.disabledVoidColor
        } else {
          return this.voidColor
        }
      } else { // 已选中的
        if (this.value <= this.threshold[0]) { // 低分
          return this.colors[0]
        } else if (this.value >= this.threshold[1]) { // 高分
          return this.colors[2]
        } else { // 中分
          return this.colors[1]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cpm-cRate{
  font-size: 0;
  display: inline-flex;
  align-items: center;
  &.cpm-cRate-disabled{
    cursor: not-allowed;
  }
}
</style>
