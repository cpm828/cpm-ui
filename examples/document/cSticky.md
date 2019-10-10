## [返回总文档](https://github.com/cpm828/cpm-ui)


# cSticky吸顶组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/sticky)



## 二、使用文档
### 导入
main.js中：
```js
import { cSticky } from 'cpm-ui'
Vue.use(cSticky)
```

### 调用
```html
<cSticky scrollEl=".sticky-wrap">
  <div class="tab">header2</div>
</cSticky>
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|scrollEl|滚动的元素dom|String|`.page-wrap`、`#pageWrap`||


### 事件Event
无


### 插槽slot
需要制定的元素

如：
```html
<cSticky scrollEl=".sticky-wrap">
  <div class="tab-box">
    <div>tab1</div>
    <div>tab2</div>
  </div>
</cSticky>
```



## 三、特别提示
无