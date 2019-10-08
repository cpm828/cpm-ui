## [返回总文档](https://github.com/cpm828/cpm-ui)


# cCheckbox组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/checkbox)



## 二、使用文档
### 导入
main.js中：
```js
import { cCheckbox } from 'cpm-ui'
Vue.use(cCheckbox)
```

### 调用
```html
<cCheckbox label="已选择" v-model="flag1"></cCheckbox>
<cCheckbox label="未选择" v-model="flag2"></cCheckbox>
<cCheckbox label="已选择且禁用disabled" disabled v-model="flag3"></cCheckbox>
<cCheckbox label="未选择且禁用disabled" disabled v-model="flag4"></cCheckbox>
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
|type|使用类型，`cCheckbox` 组件可单独使用，也可被 `cCheckbox` 套用|String|`checkbox`、`checkboxGroup`|`checkbox`|
|label|提示文字|String||''|
|disabled|是否禁止操作|Boolean|`true`、`false`|false|
|hidden|是否隐藏|Boolean|`true`、`false`|false|
|checkboxColor|checkbox颜色，可传一个字符串表示正常颜色，也可传数组['正常颜色', '不可选置灰色']|String、Array||['#4574ff', '#C8C7CC']|


### 事件Event
|方法|说明|
|:---|:---|
|onChange|被选中|

如：
```html
<cCheckbox label="未选择" v-model="flag" @onChange="onChange"></cCheckbox>
```

注：对于 `cCheckbox` 组件来说，本身状态的切换并不依赖于 `onChange` 事件的触发，而是依赖 `v-model` 双向绑定来视图的渲染。对于 [cCheckboxGroup](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cCheckboxGroup.md) 组件，我将 `v-model` 双向绑定应用于group组上，`cCheckbox` 的切换依赖于 `onChange` 的触发。

### 插槽slot
无



## 三、特别提示
1. 考虑是移动端组件，几乎不存在使用form表单提价的情况。组件会按照form表单的思想来构建属性，但不会使用form提交。<br>
2. 考虑到页面设计的复杂可能性，组件本身只实现了功能，未配置相关style属性，推荐使用手写样式实现UI效果。