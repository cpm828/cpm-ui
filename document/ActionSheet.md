## [返回总文档](https://github.com/cpm828/cpm-ui)

# ActionSheet选择组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm-ui/demo/index.html)


## 二、使用文档
### 导入
main.js中：
```js
import { ActionSheet } from 'cpm-ui'
Vue.use(ActionSheet)
```

### 调用
挂载在vue.prototype上，vue实例中，直接使用 `this.$actionSheet({options})` 使用。
```js
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
    activeSheet: 'beijng'
  },
  mounted () {
    this.$on('actionSheetChoiceItem', (actionSheet) => {
      console.log(actionSheet)
    })
  }
})
```

### 属性props（propsData）
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|cliperStyleObj|蒙层样式|Object||{}|
|actionSheetWrapStyle|actionSheet样式|Object||{}|
|actionSheetItemStyle|actionSheet每个item样式|Object||{}|
|actionSheetCancelStyle|actionSheet取消按钮样式|Object||{}|
|actionSheetList|actionSheet数据|Array||[]|
|actionSheetList2|actionSheet数据2（少数时候需要分类展示）|Array||[]|
|activeSheet|激活的选项|String、Number|||
|actionSheetTip|提示文案|String||''|
|showCancelBtn|是否显示取消按钮|Boolean||true|
|actionSheetCancelText|取消按钮文案|String||''|
|removeOnHashChange|hash变化时是否移除|String||true|


### 初始化created或mounted
我们可以在mounted中设置 `this.$on` 来捕获组件内的派发的事件，即组件自身接受自己派发的事件。

|参数|说明|
|:---|:---|
|onClickCliper|点击蒙层|
|onCancel|点击取消|
|onChoiceItem|点击item|

如：
```js
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
    activeSheet: 'beijng'
  },
  mounted () {
    this.$on('onClickCliper', () => {
      console.log('onClickCliper')
    })
    this.$on('onCancel', () => {
      console.log('onCancel')
    })
    this.$on('onChoiceItem', (actionSheet) => {
      console.log('onChoiceItem', actionSheet)
    })
  }
})
```

### 方法methods
也可以在methods中重新覆盖组件的方法，进行重写。注意：重写时可能需要处理额外的事情，比如此例中需要调用 `remove` 来关闭actionSheet

|方法|说明|
|:---|:---|
|onClickCliper|点击蒙层|
|onCancel|点击取消|
|onChoiceItem|点击item|

如：
```js
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
    activeSheet: 'beijng'
  },
  methods: {
    onClickCliper () {
      this.remove()
      console.log('onClickCliper')
    },
    onCancel () {
      this.remove()
      console.log('onCancel')
    },
    onChoiceItem (actionSheet) {
      this.remove()
      console.log('onChoiceItem', actionSheet)
    }
  }
})
```



## 三、特别提示
无