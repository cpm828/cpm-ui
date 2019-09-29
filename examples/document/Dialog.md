## [返回总文档](https://github.com/cpm828/cpm-ui)


# Dialog组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/dialog)


## 二、使用文档
### 导入
main.js中：
```js
import { Dialog } from 'cpm-ui'
Vue.use(Dialog)
```

### 调用
挂载在vue.prototype上，vue实例中，直接使用 `this.$dialog({options})` 使用。


### 属性props（propsData）

|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|cliperStyleObj|蒙层样式|Object||{}|
|dialogWrapStyle|弹窗样式|Object||{}|
|contentWrapStyle|主内容样式|Object||{}|
|animateName|弹窗出现和消失动画|String|''、`zoom-in`、`bounce-in-up`、`bounce-in-down`|''表示不开启动画|
|showTitle|是否显示标题|Boolean|`true`、`false`|`false`|
|titleText|标题文本|String|''|''|
|message|主内容|String|''|''|
|messageAlign|主内容对齐方式|String|`left`、`center`、`right`|`center`|
|showCloseBtn|是否显示关闭按钮|Boolean|`true`、`false`|`false`|
|closeBtnPostion|关闭按钮位置|String|`bottom`、`rightTop`|`rightTop`|
|showCancelBtn|是否显示取消按钮|Boolean|`true`、`false`|`true`|
|cancelBtnText|取消按钮文本|String|''|'取消'|
|cancelBtnStyle|取消按钮样式|Object||{}|
|showConfirmBtn|是否显示确定按钮|Boolean|`true`、`false`|`true`|
|confirmBtnText|确定按钮文本|String|''|'确定'|
|confirmBtnStyle|确定按钮样式|Object||{}|
|cContentData|插入组件|Object||{}|

插入组件时：
`propsData`中`cContentData` 存储组件数据，`components` 导入组件，如：
```js
this.$dialog({
  propsData: {
    animateName: 'zoom-in',
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
```


### 初始化mounted
我们可以在mounted中设置 `this.$on` 来捕获组件内的派发的事件。

|参数|说明|
|:---|:---|
|onClickCliper|点击蒙层|
|onClose|点击关闭按钮|
|onCancel|点击取消按钮|
|onConfirm|点击确定按钮|

如：
```js
this.$dialog({
  propsData: {
    showTitle: true,
    showCloseBtn: true,
    titleText: '请完成实名认证',
    message: '实名认证后您可以得到0~10万的人民币奖励，名额有限，先到先得'
  },
  mounted () {
    this.$on('onClickCliper', () => {
      this.remove()
      console.log('点击蒙层')
    });
    this.$on('onClose', () => {
      this.remove()
      console.log('点击关闭按钮')
    });
    this.$on('onCancel', () => {
      this.remove()
      console.log('点击取消按钮')
    });
    this.$on('onConfirm', () => {
      this.remove()
      console.log('点击确定按钮')
    });
  }
})
```

### 方法methods
也可以在methods中重新覆盖组件的方法，进行重写。注意：重写时可能需要处理额外的事情。

|方法|说明|
|:---|:---|
|onClickCliper|点击蒙层|
|onClose|点击关闭按钮|
|onCancel|点击取消按钮|
|onConfirm|点击确定按钮|

如：
```js
this.$dialog({
  propsData: {
    showTitle: true,
    showCloseBtn: true,
    titleText: '请完成实名认证',
    message: '实名认证后您可以得到0~10万的人民币奖励，名额有限，先到先得'
  },
  methods: {
    onClickCliper () {
      this.remove()
      console.log('点击蒙层')
    },
    onClose () {
      this.remove()
      console.log('点击关闭按钮')
    },
    onCancel () {
      this.remove()
      console.log('点击取消按钮')
    },
    onConfirm () {
      this.remove()
      console.log('点击确定按钮')
    }
  }
})
```


### 插槽slot
无


## 三、特别提示
dialog组件处理了内部滑动，保证弹出时无法滑动弹窗。对于弹窗内容需要滑动时，给需要滑动的元素增加 `class="scrollable"` 