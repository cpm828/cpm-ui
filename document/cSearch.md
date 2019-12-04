## [返回总文档](https://github.com/cpm828/cpm-ui)


# cSearch搜索组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm-ui/demo/index.html#/search)


## 二、使用文档
### 导入
main.js中：
```js
import { cSearch } from 'cpm-ui'
Vue.use(cSearch)
```

### 调用
```html
<cSearch :config="config" v-model="config.value"></cSearch>
```

```js
config: {
  value: ''
}
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|config|配置项|Object||`{}`|

config中包含的属性：
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|value|当前值，v-model双向绑定|String||''|
|type|input类型|String||`search`|
|placeholder|提示文字|String|''|''|
|label|搜索框前面的label|String|''|''|
|button|搜索框后面的按钮文案|String|''|''|
|maxlength|最大输入长度|Number||1000|


### 事件Event
|方法|说明|
|:---|:---|
|onFocus|输入框激活|
|onBlur|输入框失焦|
|onInput|输入时|
|onChange|输入后失焦时|
|onClear|点击清除按钮|
|onSearch|点击搜索按钮|

如：
```html
<cSearch :config="config" v-model="config.value" @onFocus="onFocus" @onBlur="onBlur" @onInput="onInput" @onChange="onChange" @onClear="onClear" @onSearch="onSearch"></cSearch>
```

```js
config: {
  value: '',
  placeholder: '请输入您的地址',
  label: '地址',
  button: '搜索'
}
```

### 插槽slot
无



## 三、特别提示
内部使用了v-springBack自定义指令来解决iOS微信端input失焦时页面无法回弹的bug