## [返回总文档](https://github.com/cpm828/cpm-ui)

# Loading组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/loading)



## 二、使用文档
### 导入
main.js中：
```js
import { Loading } from 'cpm-ui'
Vue.use(Loading)
```

### 调用
挂载在vue.prototype上，vue实例中，直接使用 `this.$loading({options})` 使用。
```js
this.$loading('');

this.$loading(1); // 1 ~ 16
```

### 属性props（propsData）
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|cliperStyleObj|loading蒙层样式|Ojbect||{}|
|type|loading类型|Number|1~16|1|

### 方法methods
|参数|说明|
|:---|:---|
|remove|移除loading|

如：
```js
const loading = this.$loading()

setTimeout(() => {
  loading.remove()
}, 2000)
```

### 插槽slot
无


## 三、特别提示
无