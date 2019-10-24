## [返回总文档](https://github.com/cpm828/cpm-ui)


# cRangeDouble双滑块组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/rangedouble)



## 二、使用文档
### 导入
main.js中：
```js
import { cRangeDouble } from 'cpm-ui'
Vue.use(cRangeDouble)
```

### 调用
```html
<cRangeDouble :min="0" :max="100" :step="5" v-model="value"></cRangeDouble>

{
  value: [0, 100]
}
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|value|当前值，v-model双向绑定|Number||0|
|min|最小阙值|Number||0|
|max|最大阙值|Number||100|
|step|步长|Number||1|
|disabled|是否禁用|Boolean|`true`、`false`|`false`|
|showValue|是否显示滑块上方当前值|Boolean|`true`、`false`|`false`|
|calibrateList|刻度值list，可设置无规律|Array||[]|


### 事件Event
|方法|说明|
|:---|:---|
|onChange|拖拽松开后的触发事件|

如：
```html
<cRangeDouble :min="0" :max="100" :step="5" @onChange="onChange" v-model="value"></cRangeDouble>

{
  value: [0, 100]
}
```

### 插槽slot
|name|说明|
|:---|:---|
|left|拖拽左侧|
|right|拖拽右侧|

如：
```html
<cRangeDouble :min="0" :max="100" :step="5" @onChange="onChange" v-model="value">
  <div slot="left">0</div>
  <div slot="right">100</div>
</cRangeDouble>

{
  value: [0, 100]
}
```



## 三、特别提示
1. 内部识别了touch和mouse事件，兼容移动端和PC端。
2. 对于双滑块而言，我处理了最小范围为一个步长，所以当步长设置太小时，滑块会碰撞在一起。合理来说，我们应该设置一个合适的步长，避免发生碰撞。