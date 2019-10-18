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
<cSticky container=".sticky-wrap">
  <div class="tab">header2</div>
</cSticky>
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|container|滚动的元素dom|String|`.page-wrap`、`#pageWrap`、Dom元素|null|
|top|吸顶距离|Number||0|


### 事件Event
无


### 插槽slot
需要制定的元素

如：
```html
<cSticky container=".sticky-wrap" top="100">
  <div class="tab-box">
    <div>tab1</div>
    <div>tab2</div>
  </div>
</cSticky>
```



## 三、特别提示
1. 实现原理：比较getBoundingClientRect().top值和传入的top值（默认为0）。
2. 监听原理：iOS部分浏览器或webview（UC浏览器、今日头条）在监听scroll或touchend手指离开后产生的惯性滚动时均无法获取scroll各项值，停止滚动后才能获取。position:sticky也会受到惯性滚动的影响。除非禁用系统scroll，使用类似IScroll等三方插件来模拟滚动。本插件暂不考虑三方插件解决。
3. 最终处理：在支持sticky属性时使用sticky来自动吸附，不支持监听scroll来计算吸附。
4. 属性传参：当前页面设置height:100%时，传入container表示页面滚动dom，可传id、class或dom元素。top属性表示吸顶距离。