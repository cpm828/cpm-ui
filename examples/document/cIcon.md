## [返回总文档](https://github.com/cpm828/cpm-ui)


# cIcon组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/icon)


## 二、使用文档
### 导入
main.js中：
```js
import { cIcon } from 'cpm-ui'
Vue.use(cIcon)
```

### 调用
```html
<!-- unicode渲染 -->
<cIcon render="unicode" type="&#xe699;" color="white" size="15px" @cIconClick="cIconClick"></cIcon>

<!-- font-class渲染 -->
<cIcon render="font-class" type="delete" color="white" size="2rem" @cIconClick="cIconClick"></cIcon>

<!-- symbol渲染 -->
<cIcon render="symbol" type="delete" color="white" size="2rem" @cIconClick="cIconClick"></cIcon>
```

### 属性props（propsData）
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|render|渲染方式|String|`unicode`、`font-class`、`symbol`|`font-class`|
|type|icon类型|String|`&#xe65e;`、`check`、`close`...|''|
|size|icon大小|String||继承父级|
|color|icon颜色|String||继承父级|

### 初始化created或mounted
无

### 方法methods
|方法|说明|
|:---|:---|
|onClick|点击icon|

如：
```js
<cIcon type="delete" color="white" size="2rem" @onClick="onClick"></cIcon>
```

### 插槽slot
无



## 三、特别提示
无