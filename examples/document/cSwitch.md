## [返回总文档](https://github.com/cpm828/cpm-ui)


# cSwitch组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/switch)



## 二、使用文档
### 导入
main.js中：
```js
import { cSwitch } from 'cpm-ui'
Vue.use(cSwitch)
```

### 调用
```html
<cSwitch v-model="flag"></cSwitch>
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|color|颜色|String||`#4574ff`|
|disabled|是否禁用|Boolean|`true`、`false`|`false`|


### 事件Event
|方法|说明|
|:---|:---|
|onClick|点击切换switch|

如：
```html
<cSwitch v-model="flag" @onClick="onClick"></cSwitch>
```

### 插槽slot
可在插槽中设置开关状态
```html
<cSwitch v-model="flag">{{flag ? '开' : '关'}}</cSwitch>
```



## 三、特别提示
无