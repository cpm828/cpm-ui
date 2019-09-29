<template>
  <div class="code-view">
    <pre v-highlightjs="code" class="code-pre">
      <i class="copy" @click="copyCode">copy</i>
      <code class="javascript"></code>
    </pre>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard'
export default {
  name: 'codeBlock',
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  methods: {
    copyCode () {
      const self = this
      try {
        if (ClipboardJS.isSupported()) {
          var clipboard = new ClipboardJS('.copy', {
            text: function () {
              return self.code
            }
          })
          clipboard.on('success', function (e) {
            self.$toast({
              propsData: {
                message: '复制成功',
                type: 'success'
              }
            })
            e.clearSelection()
          })
          clipboard.on('error', function (e) {
            self.$toast({
              propsData: {
                message: '复制失败请手动复制',
                type: 'error'
              }
            })
          })
        } else {
          self.$toast({
            propsData: {
              message: '复制失败请手动复制',
              type: 'error'
            }
          })
        }
      } catch (e) {
        self.$toast({
          propsData: {
            message: '复制失败请手动复制',
            type: 'error'
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.code-view {
  width: 100%;
  position: relative;
  .code-pre{
    position: relative;
  }
  .copy{
    display: inline-block;
    color: #fff;
    height: 20px;
    padding: 0 5px;
    line-height: 20px;
    background-color: #999;
    border-radius: 5px;
    font-size: 12px;
    margin-left: 5px;
    position: absolute;
    right: 0;
  }
  code{
    font-size: 12px;
  }
}
</style>
