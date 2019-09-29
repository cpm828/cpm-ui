## [返回总文档](https://github.com/cpm828/cpm-ui)


# Toast组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/toast)


## 二、使用文档
### 导入
main.js中：
```js
import { Toast } from 'cpm-ui'
Vue.use(Toast)
```

### 调用
挂载在vue.prototype上，vue实例中，直接使用 `this.$toast({options})` 使用。
```js
this.$toast('系统出错，稍后重试');

this.$toast({
  propsData: {
    message: '系统出错，稍后重试',
    type: 'error'
  },
  methods: {
    callback () {
      console.log('toast消失了')
    }
  }
});
```


### 属性props（propsData）
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|position|toast显示的位置|String|`top`、`middle`、`bottom`|middle|
|wrapStyleObj|toast样式|Object||{}|
|message|toast显示的文案|String||''|
|time|toast显示的时间|Number||2000|
|type|toast类型（icon）|String|`success`、`info`、`error`|''|


### 初始化mounted
无

### 方法methods
|方法|说明|
|:---|:---|
|callback|toast消失回调|
|remove|移除toast|

### 插槽slot
无



## 三、特别提示
无