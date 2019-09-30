## [返回总文档](https://github.com/cpm828/cpm-ui)


# cCheckboxGroup组件

`cCheckboxGroup` 组件依赖 [cCheckbox](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cCheckbox.md) 构建。


## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/checkboxgroup)



## 二、使用文档
### 导入
main.js中：
```js
import { cCheckboxGroup } from 'cpm-ui'
Vue.use(cCheckboxGroup)
```

### 调用
```html
<cCheckboxGroup :options="config.options" v-model="config.activeValue"></cCheckboxGroup>
```
```js
config: {
  options: [
    {
      label: '苹果',
      value: 'apple',
      disabled: false
    },
    {
      label: '香蕉',
      value: 'banana',
      disabled: false
    },
    {
      label: '西瓜',
      value: 'watermelon',
      disabled: false
    },
    {
      label: '橘子',
      value: 'orange',
      disabled: true
    }
  ],
  activeValue: ['banana']
}
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|options|可选数据，list map结构|Array|`checkbox`、`checkboxGroup`|`checkbox`|

options结构，基本同 [cCheckbox](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cCheckbox.md) 组件

|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|label|提示文字|String||''|
|value|checkbox值|String、Number、Boolean|||
|disabled|是否禁止操作|Boolean|`true`、`false`|false|
|hidden|是否隐藏|Boolean|`true`、`false`|false|
|checkboxColor|checkbox颜色，可传一个字符串表示正常颜色，也可传数组['正常颜色', '不可选置灰色']|String、Array||['#4574ff', '#C8C7CC']|


### 事件Event
|方法|说明|
|:---|:---|
|onChange|点击选中|

如：
```html
<cCheckboxGroup :options="config.options" v-model="config.activeValue" @onChange="onChange"></cCheckboxGroup>
```

注：`cCheckboxGroup` 内部使用 `cCheckbox` 进行构建。对于 [cCheckbox](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cCheckbox.md) 组件来说，本身状态的切换并不依赖于 `onChange` 事件的触发，而是依赖 `v-model` 双向绑定来视图的渲染。对于 `cCheckboxGroup` 组件，我将 `v-model` 双向绑定应用于group组上，`cCheckbox` 的切换依赖于 `onChange` 的触发，同时也派发了一个 `onChange` 事件，用于处理一些额外的事情，如打点等。

### 插槽slot
无



## 三、特别提示
1. 考虑是移动端组件，几乎不存在使用form表单提价的情况。组件会按照form表单的思想来构建属性，但不会使用form提交。<br>
2. 考虑到页面设计的复杂可能性，组件本身只实现了功能，未配置相关style属性，推荐使用手写样式实现UI效果。