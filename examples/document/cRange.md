## [返回总文档](https://github.com/cpm828/cpm-ui)


# cRange组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/range)



## 二、使用文档
### 导入
main.js中：
```js
import { cRange } from 'cpm-ui'
Vue.use(cRange)
```

### 调用
```html
<cRange :min="0" :max="100" :step="5" v-model="0"></cRange>
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|value|当前值，v-model双向绑定|Number||0|
|color|颜色|String||`#4574ff`|
|min|最小阙值|Number||0|
|max|最大阙值|Number||100|
|step|步长|Number||1|
|disabled|是否禁用|Boolean|`true`、`false`|`false`|


### 事件Event
|方法|说明|
|:---|:---|
|onChange|接受拖拽后的触发事件|

如：
```html
<cRange :min="0" :max="100" :step="5" @onChange="onChange" v-model="0"></cRange>
```

### 插槽slot
|name|说明|
|:---|:---|
|left|拖拽左侧|
|right|拖拽右侧|

如：
```html
<cRange :min="0" :max="100" :step="5" @onChange="onChange" v-model="0">
  <div slot="left">0</div>
  <div slot="right">100</div>
</cRange>
```



## 三、特别提示
无