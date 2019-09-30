## [返回总文档](https://github.com/cpm828/cpm-ui)


# cRadioGroup组件

`cRadioGroup` 组件依赖 [cRadio](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRadio.md) 构建。


## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/radiogroup)



## 二、使用文档
### 导入
main.js中：
```js
import { cRadioGroup } from 'cpm-ui'
Vue.use(cRadioGroup)
```

### 调用
```html
<cRadioGroup :options="config.options" v-model="config.activeValue"></cRadioGroup>
```
```js
config: {
  options: [
    {
      label: '一年级',
      value: 1,
      disabled: false
    },
    {
      label: '二年级',
      value: 2,
      disabled: false
    },
    {
      label: '三年级',
      value: 3,
      disabled: false
    },
    {
      label: '四年级',
      value: 4,
      disabled: true
    }
  ],
  activeValue: 1
}
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|options|可选数据，list map结构|Array|`radio`、`radioGroup`|`radio`|

options结构，基本同 [cRadio](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRadio.md) 组件

|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|label|提示文字|String||''|
|value|radio值|String、Number、Boolean|||
|disabled|是否禁止操作|Boolean|`true`、`false`|false|
|hidden|是否隐藏|Boolean|`true`、`false`|false|
|radioColor|radio颜色，可传一个字符串表示正常颜色，也可传数组['正常颜色', '不可选置灰色']|String、Array||['#4574ff', '#C8C7CC']|


### 事件Event
|方法|说明|
|:---|:---|
|onChange|点击选中|

如：
```html
<cRadioGroup :options="config.options" v-model="config.activeValue" @onChange="onChange"></cRadioGroup>
```

注：`cRadioGroup` 内部使用 `cRadio` 进行构建。对于 [cRadio](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRadio.md) 组件来说，本身状态的切换并不依赖于 `onChange` 事件的触发，而是依赖 `v-model` 双向绑定来视图的渲染。对于 `cRadioGroup` 组件，我将 `v-model` 双向绑定应用于group组上，`cRadio` 的切换依赖于 `onChange` 的触发，同时我也派发了一个 `onChange` 事件，用于处理一些额外的事情，如打点等。


### 插槽slot
无



## 三、特别提示
1. 考虑是移动端组件，几乎不存在使用form表单提价的情况。组件会按照form表单的思想来构建属性，但不会使用form提交。<br>
2. 考虑到页面设计的复杂可能性，组件本身只实现了功能，未配置相关style属性，推荐使用手写样式实现UI效果。