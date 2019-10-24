## [返回总文档](https://github.com/cpm828/cpm-ui)


# Fixed顶部或底部固定组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/fixed)


## 二、使用文档
### 导入
main.js中：
```js
import { cFixed } from 'cpm-ui'
Vue.use(cFixed)
```

### 调用
```html
<cFixed>
  <div slot="left"></div>
  正文
  正文
  正文
  <div slot="right"></div>
</cFixed>
```

### 属性props
无


### 事件Event
无


### 插槽slot
|方法|说明|
|:---|:---|
|left|header吸顶|
|right|footer吸顶|

```html
<cFixed>
  <div slot="left"></div>
  正文
  正文
  正文
  <div slot="right"></div>
</cFixed>
```



## 三、特别提示
无