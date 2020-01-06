<template>
  <div class="page-wrap dialog-wrap">
    <div class="top">Dialog弹窗</div>

    <div class="block">
      <div
        class="block-item"
        :class="{'active': item.showCode}"
        v-for="(item, index) in list"
        :key="index"
      >
        <a @click.prevent="showDialog(index)">
          <span class="text">{{index + 1}}、{{item.title}}</span>
          <i @click.prevent.stop="showCode(item, index)">code</i>
        </a>
        <code-block :code="item.code" v-if="item.showCode"></code-block>
      </div>
    </div>

    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://cpm828.github.io/cpm-ui-docs/feedback/Dialog.html">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'Dialog',
  data () {
    return {
      list: [
        {
          title: '普通dialog',
          showCode: false,
          code: `this.$dialog({
  propsData: {
    message: '您确认要付费购买周董的《说好不哭》吗？'
  },
  methods: {
    onCancel () {
      this.remove()
    },
    onConfirm () {
      this.remove()
    }
  }
})`
        },
        {
          title: '通知类dialog',
          showCode: false,
          code: `this.$dialog({
  propsData: {
    showTitle: true,
    titleText: '系统通知',
    showCloseBtn: false,
    showCancelBtn: false,
    confirmBtnText: '我知道了',
    message: '恭喜您，您抽中了2000万人民币奖励，快去买买买吧！'
  },
  methods: {
    onConfirm () {
      this.remove()
    }
  }
})`
        },
        {
          title: '确认类dialog',
          showCode: false,
          code: `this.$dialog({
  propsData: {
    showTitle: true,
    titleText: '请完成实名认证',
    message: '实名认证后您可以得到0~10万的人民币奖励，名额有限，先到先得'
  },
  methods: {
    onCancel () {
      this.remove()
    },
    onConfirm () {
      this.remove()
    }
  }
})`
        },
        {
          title: '带关闭按钮1的dialog',
          showCode: false,
          code: `this.$dialog({
  propsData: {
    showTitle: true,
    showCloseBtn: true,
    titleText: '请完成实名认证',
    message: '实名认证后您可以得到0~10万的人民币奖励，名额有限，先到先得'
  },
  methods: {
    onClose () {
      this.remove()
    },
    onCancel () {
      this.remove()
    },
    onConfirm () {
      this.remove()
    }
  }
})`
        },
        {
          title: '带关闭按钮2的dialog',
          showCode: false,
          code: `this.$dialog({
  propsData: {
    showTitle: true,
    showCloseBtn: true,
    closeBtnPostion: 'bottom',
    titleText: '请完成实名认证',
    message: '实名认证后您可以得到0~10万的人民币奖励，名额有限，先到先得'
  },
  methods: {
    onClose () {
      this.remove()
    },
    onCancel () {
      this.remove()
    },
    onConfirm () {
      this.remove()
    }
  }
})`
        },
        {
          title: '带动效的dialog',
          showCode: false,
          code: `this.$dialog({
  propsData: {
    animate: true,
    showTitle: true,
    titleText: '请完成实名认证',
    message: '实名认证后您可以得到0~10万的人民币奖励，名额有限，先到先得'
  },
  methods: {
    onCancel () {
      this.remove()
    },
    onConfirm () {
      this.remove()
    }
  }
})`
        },
        {
          title: '传入组件的dialog',
          showCode: false,
          code: `this.$dialog({
  propsData: {
    animate: true,
    cContentData: {
      title: '你喜欢的歌手的身价榜',
      list: [
        { name: '汪苏泷', price: '10,000,000' },
        { name: '薛之谦', price: '20,000,000' },
        { name: '罗志祥', price: '30,000,000' },
        { name: '王力宏', price: '40,000,000' },
        { name: '林俊杰', price: '50,000,000' },
        { name: '陈奕迅', price: '60,000,000' },
        { name: '周杰伦', price: '70,000,000' },
        { name: '张国荣', price: '80,000,000' },
        { name: '中国星', price: '90,000,000' }
      ],
      content: '歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手'
    }
  },
  components: {
    // 传入方式1：
    // cContent: { // 子组件
    //   props: {
    //     cContentData: {
    //       type: Object,
    //       default: () => { }
    //     }
    //   },
    //   template: ${`
    //     <div style="padding:1.6rem;">
    //       <h2 style="margin-bottom:1rem">{{cContentData.title}}</h2>
    //       <ul style="font-size:0.8rem;text-align:left;height:8rem;overflow-y:scroll" class="scrollable">
    //         <li style="list-style: disc;" v-for="(item, index) in cContentData.list" :key="index">{{item.name}}的身价是：{{item.price}}</li>
    //       </ul>
    //       <div style="font-size:0.8rem;white-space: nowrap;overflow-x:scroll" class="scrollable">{{cContentData.content}}</div>
    //     </div>
    //   `}
    // }

    // 传入方式2
    cContent: resolve => resolve(require('./components/dialogChild.vue'))
  },
  methods: {
    onCancel () {
      this.remove()
    },
    onConfirm () {
      this.remove()
    }
  }
})`
        }
      ]
    }
  },
  components: { codeBlock },
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
    showDialog (index) {
      this[`showDialog${index + 1}`]()
    },
    // 普通dialog
    showDialog1 () {
      this.$dialog({
        propsData: {
          message: '您确认要付费购买周董的《说好不哭》吗？'
        },
        methods: {
          onCancel () {
            this.remove()
          },
          onConfirm () {
            this.remove()
          }
        }
      })
    },
    // 通知类dialog
    showDialog2 () {
      this.$dialog({
        propsData: {
          showTitle: true,
          titleText: '系统通知',
          showCloseBtn: false,
          showCancelBtn: false,
          confirmBtnText: '我知道了',
          message: '恭喜您，您抽中了2000万人民币奖励，快去买买买吧！'
        },
        methods: {
          onConfirm () {
            this.remove()
          }
        }
      })
    },
    // 确认类dialog
    showDialog3 () {
      this.$dialog({
        propsData: {
          showTitle: true,
          titleText: '请完成实名认证',
          message: '实名认证后您可以得到0~10万的人民币奖励，名额有限，先到先得'
        },
        methods: {
          onCancel () {
            this.remove()
          },
          onConfirm () {
            this.remove()
          }
        }
      })
    },
    // 带关闭按钮1的dialog
    showDialog4 () {
      this.$dialog({
        propsData: {
          showTitle: true,
          showCloseBtn: true,
          titleText: '请完成实名认证',
          message: '实名认证后您可以得到0~10万的人民币奖励，名额有限，先到先得'
        },
        methods: {
          onClose () {
            this.remove()
          },
          onCancel () {
            this.remove()
          },
          onConfirm () {
            this.remove()
          }
        }
      })
    },
    // 带关闭按钮2的dialog
    showDialog5 () {
      this.$dialog({
        propsData: {
          showTitle: true,
          showCloseBtn: true,
          closeBtnPostion: 'bottom',
          titleText: '请完成实名认证',
          message: '实名认证后您可以得到0~10万的人民币奖励，名额有限，先到先得'
        },
        methods: {
          onClose () {
            this.remove()
          },
          onCancel () {
            this.remove()
          },
          onConfirm () {
            this.remove()
          }
        }
      })
    },
    // 带动效的dialog
    showDialog6 () {
      this.$dialog({
        propsData: {
          animate: true,
          showTitle: true,
          titleText: '请完成实名认证',
          message: '实名认证后您可以得到0~10万的人民币奖励，名额有限，先到先得'
        },
        methods: {
          onCancel () {
            this.remove()
          },
          onConfirm () {
            this.remove()
          }
        }
      })
    },
    // 传入组件的dialog2
    showDialog7 () {
      this.$dialog({
        propsData: {
          animate: true,
          cContentData: {
            title: '你喜欢的歌手的身价榜',
            list: [
              { name: '汪苏泷', price: '10,000,000' },
              { name: '薛之谦', price: '20,000,000' },
              { name: '罗志祥', price: '30,000,000' },
              { name: '王力宏', price: '40,000,000' },
              { name: '林俊杰', price: '50,000,000' },
              { name: '陈奕迅', price: '60,000,000' },
              { name: '周杰伦', price: '70,000,000' },
              { name: '张国荣', price: '80,000,000' },
              { name: '中国星', price: '90,000,000' }
            ],
            content: '歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手歌手'
          }
        },
        components: {
          // 传入方式1：
          // cContent: { // 子组件
          //   props: {
          //     cContentData: {
          //       type: Object,
          //       default: () => { }
          //     }
          //   },
          //   template: `
          //     <div style="padding:1.6rem;">
          //       <h2 style="margin-bottom:1rem">{{cContentData.title}}</h2>
          //       <ul style="font-size:0.8rem;text-align:left;height:8rem;overflow-y:scroll" class="scrollable">
          //         <li style="list-style: disc;" v-for="(item, index) in cContentData.list" :key="index">{{item.name}}的身价是：{{item.price}}</li>
          //       </ul>
          //       <div style="font-size:0.8rem;white-space: nowrap;overflow-x:scroll" class="scrollable">{{cContentData.content}}</div>
          //     </div>
          //   `
          // }

          // 传入方式2
          cContent: resolve => resolve(require('./components/dialogChild.vue'))
        },
        methods: {
          onCancel () {
            this.remove()
          },
          onConfirm () {
            this.remove()
          }
        }
      })
    }
  }
}
</script>
