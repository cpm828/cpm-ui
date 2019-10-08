## [返回总文档](https://github.com/cpm828/cpm-ui)


# cRadio组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/radio)



## 二、使用文档
### 导入
main.js中：
```js
import { cRadio } from 'cpm-ui'
Vue.use(cRadio)
```

### 调用
```html
<cRadio label="已选择" v-model="flag1"></cRadio>
<cRadio label="未选择" v-model="flag2"></cRadio>
<cRadio label="已选择且禁用disabled" disabled v-model="flag3"></cRadio>
<cRadio label="未选择且禁用disabled" disabled v-model="flag4"></cRadio>
```
```js
{
  flag1: true,
  flag2: false,
  flag3: true,
  flag4: false
}
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|value|当前值，v-model双向绑定|`Boolean`、`String`、`Number`||false|
|type|使用类型，`cRadio` 组件可单独使用，也可被 `cRadioGroup` 套用|String|`radio`、`radioGroup`|`radio`|
|label|提示文字|String||''|
|disabled|是否禁止操作|Boolean|`true`、`false`|false|
|hidden|是否隐藏|Boolean|`true`、`false`|false|
|radioColor|radio颜色，可传一个字符串表示正常颜色，也可传数组['正常颜色', '不可选置灰色']|String、Array||['#4574ff', '#C8C7CC']|

### 事件Event
|方法|说明|
|:---|:---|
|onChange|被选中|

如：
```html
<cRadio label="未选择" v-model="flag" @onChange="onChange"></cRadio>
```

注：对于 `cRadio` 组件来说，本身状态的切换并不依赖于 `onChange` 事件的触发，而是依赖 `v-model` 双向绑定来视图的渲染。对于 [cRadioGroup](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRadioGroup.md) 组件，我将 `v-model` 双向绑定应用于group组上，`cRadio` 的切换依赖于 `onChange` 的触发。

### 插槽slot
无



## 三、特别提示

1. 考虑是移动端组件，几乎不存在使用form表单提价的情况。组件会按照form表单的思想来构建属性，但不会使用form提交。<br>
2. 考虑到页面设计的复杂可能性，组件本身只实现了功能，未配置相关style属性，推荐使用手写样式实现UI效果。