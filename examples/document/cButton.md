## [返回总文档](https://github.com/cpm828/cpm-ui)


# cButton组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/button)


## 二、使用文档
### 导入
main.js中：
```js
import { cButton } from 'cpm-ui'
Vue.use(cButton)
```

### 调用
```html
<cButton type="primary" size="large">primary</cButton>
```

### 属性props（propsData）
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|type|按钮类型|String|`default`、`primary`、`danger`|`default`|
|size|按钮大小，除large外其他均为行内|String|`smaller`、`small`、`normal`、`large`|`normal`|
|btnStyle|按钮样式，也可以通过css重置|Object||{}|
|plain|是否为幽灵按钮，即有边框无背景色|Boolean|`true`、`false`|`false`|
|disabled|是否为禁用按钮，0.6不透明度|Boolean|`true`、`false`|`false`|

### 初始化created或mounted
无

### 方法methods
|方法|说明|
|:---|:---|
|onClick|点击icon|

如：
```html
<cButton type="primary" size="large" @onClick="onClick">primary</cButton>
```

### 插槽slot
按钮内容放置在插槽中，可设置icon等
```html
<cButton>
  <cIcon class="icon-left" type="search" size="1rem" style="margin-right:0.26rem;"></cIcon>搜索
</cButton>
```
或：
```html
<cButton type="primary" size="large">
  <img src="../assets/img/arrow-left.png" style="width:1.4rem;">上一页
</cButton>
```



## 三、特别提示
无