<template>
  <div class="page-wrap toast-wrap">
    <div class="top">Toast提示</div>

    <div class="block">
      <div class="block-item" :class="{'active': item.showCode}" v-for="(item, index) in list" :key="index">
        <a @click.prevent="showToast(index)">
          <span class="text">{{index + 1}}、{{item.title}}</span>
          <i @click.prevent.stop="showCode(item, index)">code</i>
        </a>
        <code-block :code="item.code" v-if="item.showCode"></code-block>
      </div>
    </div>

    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm-ui/tree/gh-pages/document/Toast.md">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'Toast',
  components: { codeBlock },
  data () {
    return {
      list: [
        {
          title: '简单传参',
          showCode: false,
          code: `this.$toast('普通toast')`
        },
        {
          title: '自定义关闭时间',
          showCode: false,
          code: `this.$toast({
  propsData: {
    message: '3s后关闭',
    time: 3000
  }
})`
        },
        {
          title: '选择显示位置',
          showCode: false,
          code: `this.$toast({
  propsData: {
    message: '选择显示位置',
    position: 'top'
  }
})`
        },
        {
          title: '自定义toast样式',
          showCode: false,
          code: `this.$toast({
  propsData: {
    message: '自定义toast样式',
    wrapStyleObj: {
      'background': '#666'
    }
  }
})`
        },
        {
          title: '带icon的toast',
          showCode: false,
          code: `this.$toast({
  propsData: {
    message: '带icon的toast',
    type: 'success'
  }
})
 `
        },
        {
          title: '带倒计时回调的toast',
          showCode: false,
          code: `this.$toast({
  propsData: {
    message: '带倒计时回调的toast',
    type: 'success'
  },
  methods: {
    callback () {
      alert('toast 消失了')
    }
  }
})
 `
        },
        {
          title: '全部参数',
          showCode: false,
          code: `this.$toast({
  propsData: {
    message: '全部传参',
    type: 'info',
    time: 3000,
    position: 'middle',
    wrapStyleObj: {
      'background': '#4c4c4c'
    }
  },
  methods: {
    callback () {
        alert('toast 消失了')
    }
  }
})
 `
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
    showToast (index) {
      this[`showToast${index + 1}`]()
    },
    // 普通toast
    showToast1 () {
      this.$toast('普通toast')
    },
    // 自定义关闭时间
    showToast2 () {
      this.$toast({
        propsData: {
          message: '3s后关闭',
          time: 3000
        }
      })
    },
    // 选择显示位置
    showToast3 () {
      this.$toast({
        propsData: {
          message: '选择显示位置',
          position: 'top'
        }
      })
    },
    // 自定义toast样式
    showToast4 () {
      this.$toast({
        propsData: {
          message: '自定义toast样式',
          wrapStyleObj: {
            'background': '#666'
          }
        }
      })
    },
    // 带icon的toast
    showToast5 () {
      this.$toast({
        propsData: {
          message: '带icon的toast',
          type: 'success',
          time: 3000
        }
      })
    },
    // 带倒计时回调的toast
    showToast6 () {
      this.$toast({
        propsData: {
          message: '带倒计时回调的toast',
          type: 'success'
        },
        methods: {
          callback () {
            alert('toast 消失了')
          }
        }
      })
    },
    // 全部参数
    showToast7 () {
      // 注：调用方法除props改用propsData外，其余都与组件内部一致，可使用propsData、data、computed、methods、watch
      this.$toast({
        propsData: {
          message: '全部传参',
          type: 'info',
          time: 3000,
          position: 'middle',
          wrapStyleObj: {
            'background': '#4c4c4c'
          }
        },
        methods: {
          callback () {
            alert('toast 消失了')
          }
        }
      })
    }
  }
}
</script>
