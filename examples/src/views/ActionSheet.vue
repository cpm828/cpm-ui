<template>
  <div class="page-wrap index-wrap">
    <h2>ActionSheet弹出选择</h2>

    <div class="block">
      <div
        class="block-item"
        :class="{'active': item.showCode}"
        v-for="(item, index) in list"
        :key="index"
      >
        <a @click.prevent="showActionSheet(item, index)">
          <span class="text">{{index + 1}}、{{item.title}}</span>
          <i @click.prevent.stop="showCode(item, index)">code</i>
          <span class="tip">{{item._choiceInfo && item._choiceInfo.value}}</span>
        </a>
        <code-block :code="item.code" v-if="item.showCode"></code-block>
      </div>
    </div>

    <a
      class="aLink"
      c_wrap="fs-12"
      href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/ActionSheet.md"
    >查看文档</a>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'toast',
  components: { codeBlock },
  data () {
    return {
      list: [
        {
          title: '简单选择',
          showCode: false,
          code: `showActionSheet1 (item) {
  const self = this
  this.$actionSheet({
    propsData: {
      showCancelBtn: false,
      actionSheetList: [
        {
          key: '1',
          value: '拍照'
        },
        {
          key: '2',
          value: '相册'
        }
      ],
      activeSheet: item._choiceInfo && item._choiceInfo.key
    },
    mounted () {
      this.$on('actionSheetChoiceItem', (actionSheet) => {
        self.$set(item, '_choiceInfo', actionSheet)
      })
    }
  })
}`
        },
        {
          title: '带提示文案',
          showCode: false,
          code: `showActionSheet2 (item) {
  const self = this
  this.$actionSheet({
    propsData: {
      actionSheetList: [
        {
          key: 'beijing',
          value: '北京'
        },
        {
          key: 'shanghai',
          value: '上海'
        },
        {
          key: 'guangzhou',
          value: '广州'
        },
        {
          key: 'shenzheng',
          value: '深圳'
        }
      ],
      actionSheetTip: '你最喜欢哪个城市',
      activeSheet: item._choiceInfo && item._choiceInfo.key
    },
    mounted () {
      this.$on('actionSheetChoiceItem', (actionSheet) => {
        self.$set(item, '_choiceInfo', actionSheet)
      })
    }
  })
}`
        },
        {
          title: '自定义取消文案',
          showCode: false,
          code: `showActionSheet3 (item) {
  const self = this
  this.$actionSheet({
    propsData: {
      showCancelBtn: false,
      actionSheetList: [
        {
          key: '1',
          value: '是'
        },
        {
          key: '0',
          value: '否'
        }
      ],
      actionSheetCancelText: '继续关注',
      activeSheet: item._choiceInfo && item._choiceInfo.key
    },
    mounted () {
      this.$on('actionSheetChoiceItem', (actionSheet) => {
        self.$set(item, '_choiceInfo', actionSheet)
      })
    }
  })
}`
        },
        {
          title: '每个actionSheet颜色都不一致',
          showCode: false,
          code: `showActionSheet4 (item) {
  const self = this
  this.$actionSheet({
    propsData: {
      showCancelBtn: false,
      actionSheetList: [
        {
          key: '1',
          value: '拍照',
          _actionsheetItemStyle: {
            color: 'red'
          }
        },
        {
          key: '2',
          value: '相册',
          _actionsheetItemStyle: {
            color: 'green'
          }
        }
      ],
      actionSheetCancelText: '继续关注',
      activeSheet: item._choiceInfo && item._choiceInfo.key
    },
    mounted () {
      this.$on('actionSheetChoiceItem', (actionSheet) => {
        self.$set(item, '_choiceInfo', actionSheet)
      })
    }
  })
}`
        },
        {
          title: '弹出后2s自动关闭',
          showCode: false,
          code: `showActionSheet5 (item) {
  // 模拟手动调用消失
  let actionSheet = this.$actionSheet({
    propsData: {
      actionSheetList: [
        {
          key: 'beijing',
          value: '北京'
        },
        {
          key: 'shanghai',
          value: '上海'
        }
      ],
      activeSheet: 'beijing'
    }
  })
  setTimeout(() => {
    actionSheet.remove()
  }, 2000)
}`
        },
        {
          title: '所有参数',
          showCode: false,
          code: `showActionSheet6 (item) {
  const self = this
  this.$actionSheet({
    propsData: {
      actionSheetList: [
        {
          key: 'beijing',
          value: '北京',
          _actionsheetItemStyle: {
            color: 'red'
          }
        },
        {
          key: 'shanghai',
          value: '上海',
          _actionsheetItemStyle: {
            color: 'orange'
          }
        },
        {
          key: 'guangzhou',
          value: '广州',
          _actionsheetItemStyle: {
            color: 'yellow'
          }
        },
        {
          key: 'shenzheng',
          value: '深圳',
          _actionsheetItemStyle: {
            color: 'green'
          }
        }
      ],
      activeSheet: item._choiceInfo && item._choiceInfo.key, // 默认勾选项
      showCancelBtn: true, // 是否显示取消按钮
      cliperStyleObj: {}, // 蒙层样式
      actionSheetWrapStyle: {}, // 下拉菜单样式
      actionSheetItemStyle: {}, // 下拉菜单选项样式
      actionSheetCancelStyle: {}, // 取消那妞样式
      removeOnHashChange: true // hash变化时是否移除，默认为true，使用与SPA
    },
    mounted () {
      this.$on('actionSheetChoiceItem', (actionSheet) => {
        self.$set(item, '_choiceInfo', actionSheet)
      })
    }
  })
}`
        }
      ]
    }
  },
  methods: {
    showCode (item, index) {
      if (item.showCode) {
        item.showCode = false
        return
      }
      this.list.map((item) => {
        return (item.showCode = false)
      })
      this.list[index].showCode = true
    },
    showActionSheet (item, index) {
      this[`showActionSheet${index + 1}`](item)
    },
    // 简单选择
    showActionSheet1 (item) {
      const self = this
      this.$actionSheet({
        propsData: {
          actionSheetList: [
            {
              key: '1',
              value: '拍照'
            },
            {
              key: '2',
              value: '相册'
            }
          ],
          activeSheet: item._choiceInfo && item._choiceInfo.key
        },
        mounted () {
          this.$on('actionSheetChoiceItem', (actionSheet) => {
            self.$set(item, '_choiceInfo', actionSheet)
          })
        }
      })
    },
    // 带提示文案
    showActionSheet2 (item) {
      const self = this
      this.$actionSheet({
        propsData: {
          actionSheetList: [
            {
              key: 'beijing',
              value: '北京'
            },
            {
              key: 'shanghai',
              value: '上海'
            },
            {
              key: 'guangzhou',
              value: '广州'
            },
            {
              key: 'shenzheng',
              value: '深圳'
            }
          ],
          actionSheetTip: '你最喜欢哪个城市',
          activeSheet: item._choiceInfo && item._choiceInfo.key
        },
        mounted () {
          this.$on('actionSheetChoiceItem', (actionSheet) => {
            self.$set(item, '_choiceInfo', actionSheet)
          })
        }
      })
    },
    showActionSheet3 (item) {
      const self = this
      this.$actionSheet({
        propsData: {
          actionSheetList: [
            {
              key: '1',
              value: '不再关注'
            }
          ],
          actionSheetItemStyle: {
            color: '#d45048'
          }, // 下拉菜单选项样式
          actionSheetTip: '不再关注“cpm-ui”，你将不再收到其下发的消息',
          actionSheetCancelText: '继续关注',
          activeSheet: item._choiceInfo && item._choiceInfo.key
        },
        mounted () {
          this.$on('actionSheetChoiceItem', (actionSheet) => {
            self.$set(item, '_choiceInfo', actionSheet)
          })
        }
      })
    },
    // 每个actionsheet样式都不一致
    showActionSheet4 (item) {
      const self = this
      this.$actionSheet({
        propsData: {
          actionSheetList: [
            {
              key: '1',
              value: '拍照',
              _actionsheetItemStyle: {
                color: 'red'
              }
            },
            {
              key: '2',
              value: '相册',
              _actionsheetItemStyle: {
                color: 'green'
              }
            }
          ],
          actionSheetTip: '不再关注“cpm-ui”，你将不再收到其下发的消息',
          activeSheet: item._choiceInfo && item._choiceInfo.key
        },
        mounted () {
          this.$on('actionSheetChoiceItem', (actionSheet) => {
            self.$set(item, '_choiceInfo', actionSheet)
          })
        }
      })
    },
    // 弹出后2s自动关闭
    showActionSheet5 (item) {
      // 模拟手动调用消失
      let actionSheet = this.$actionSheet({
        propsData: {
          actionSheetList: [
            {
              key: 'beijing',
              value: '北京'
            },
            {
              key: 'shanghai',
              value: '上海'
            }
          ],
          activeSheet: 'beijing'
        }
      })
      setTimeout(() => {
        actionSheet.remove()
      }, 2000)
    },
    // 全部参数
    showActionSheet6 (item) {
      const self = this
      this.$actionSheet({
        propsData: {
          actionSheetList: [
            {
              key: 'beijing',
              value: '北京',
              _actionsheetItemStyle: {
                color: 'red'
              }
            },
            {
              key: 'shanghai',
              value: '上海',
              _actionsheetItemStyle: {
                color: 'orange'
              }
            },
            {
              key: 'guangzhou',
              value: '广州',
              _actionsheetItemStyle: {
                color: 'yellow'
              }
            },
            {
              key: 'shenzheng',
              value: '深圳',
              _actionsheetItemStyle: {
                color: 'green'
              }
            }
          ],
          activeSheet: item._choiceInfo && item._choiceInfo.key, // 默认勾选项
          actionSheetTip: '不再关注“cpm-ui”，你将不再收到其下发的消息', // 提示文案
          actionSheetCancelText: '取消', // 取消按钮文案
          showCancelBtn: true, // 是否显示取消按钮
          cliperStyleObj: {}, // 蒙层样式
          actionSheetWrapStyle: {}, // 下拉菜单样式
          actionSheetItemStyle: {}, // 下拉菜单选项样式
          actionSheetCancelStyle: {}, // 取消那妞样式
          removeOnHashChange: true // hash变化时是否移除，默认为true，使用与SPA
        },
        mounted () {
          this.$on('actionSheetChoiceItem', (actionSheet) => {
            self.$set(item, '_choiceInfo', actionSheet)
          })
        }
      })
    }
  }
}
</script>
