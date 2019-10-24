## [返回总文档](https://github.com/cpm828/cpm-ui)


# TitleBar标题栏

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/titlebar)


## 二、使用文档
### 导入
main.js中：
```js
import { cTitleBar } from 'cpm-ui'
Vue.use(cTitleBar)
```

### 调用
```html
<cTitleBar title="标题" @onClickLeft="onClickLeft"></cTitleBar>
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|title|当前title内容|String||''|
|showBack|否显示返回按钮|Boolean|`true`、`false`|`true`|
|fullScreen|是否为全屏状态，处理iOS刘海屏|Boolean|`true`、`false`|`false`|
|wraperStyle|重置样式|Object||`{}`|
|showBottomBorder|是否显示下边框|Boolean|`true`、`false`|`false`|


### 事件Event
|方法|说明|
|:---|:---|
|onClickLeft|点击左侧返回按钮|
|onClickRight|点击右侧按钮|

如：
```html
<cTitleBar title="标题" @onClickLeft="onClickLeft" @onClickRight="onClickRight">
  <div slot="right">下一页</div>
</cTitleBar>
```

### 插槽slot
|方法|说明|
|:---|:---|
|left|左侧|
|center|中间|
|right|右侧|

```html
<cTitleBar title="带插槽">
  <div slot="left">返回</div>
  <div slot="center">标题</div>
  <div slot="right">下一页</div>
</cTitleBar>
```



## 三、特别提示
无