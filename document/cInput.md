## [返回总文档](https://github.com/cpm828/cpm-ui)


# cInput用户输入组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm-ui/demo/index.html#/input)


## 二、使用文档
### 导入
main.js中：
```js
import { cInput } from 'cpm-ui'
Vue.use(cInput)
```

### 调用
```html
<cInput :config="config" v-model="config.value"></cInput>
```

```js
config: {
  name: '用户姓名',
  value: '', // value单独提取出来使用v-model双向绑定
  maxlength: 15
}
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|config|配置项|Object||`{}`|


config中包含的属性：

|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|name|当前input key值|String||''|
|title|当前提示文案|String||''|
|value|当前值，v-model双向绑定|String||''|
|type|input类型|String||`text`|
|placeholder|提示文字|String||''|
|maxlength|最大输入长度|Number||1000|
|lr|输入框对齐方式|String||`right`|
|readonly|是否只读|Boolean||`false`|
|disabled|是否禁用|Boolean||`false`|
|showBottomBorder|是否显示底边框|Boolean||`true`|
|labelIconType|label后面的icon类型|String||''|
|unit|input后面的单位|String||''|
|inputIconType|input后面的icon类型|String||''|

### 事件Event
|方法|说明|
|:---|:---|
|onFocus|输入框激活|
|onBlur|输入框失焦|
|onInput|输入时|
|onChange|输入后失焦时|
|onClear|点击清除按钮|
|onClickLabelIcon|当labelIconType存在时，点击的回调|
|getKVObject|返回 `{key: value}` 键值对，提交信息时使用|
|getKVString|返回 `key=value` 字符串，提交信息时使用|

如：
```html
<cInput :config="config" v-model="config.value" @onFocus="onFocus" @onBlur="onBlur" @onInput="onInput" @onChange="onChange" @onClear="onClear"></cInput>
```

```js
config: {
  name: 'username',
  title: '用户姓名',
  value: '', // value单独提取出来使用v-model双向绑定
  maxlength: 15
}
```

当存在很多个input组件时，在点击提交的时候：
```js
usernameConfig: {
  name: 'username',
  title: '用户姓名',
  value: '', // value单独提取出来使用v-model双向绑定
  maxlength: 15
}
// 其他config略

// String
onSubmit1 () {
  const nameArr = ['usernameConfig', 'telConfig', 'amountConfig', 'dateConfig', 'accountConfig', 'passwordConfig', 'addressConfig']
  let submitObj = {}
  nameArr.forEach(item => {
    Object.assign(submitObj, this.$refs[this[item].name].getKVObject())
  })
  console.log(submitObj) // 最终拼成的对象：{username: "", tel: "", amount: "", date: "", account: "", password: "", address: ""}
}
// 键值对
onSubmit2 () {
  const nameArr = ['usernameConfig', 'telConfig', 'amountConfig', 'dateConfig', 'accountConfig', 'passwordConfig', 'addressConfig']
  let submitArr = []
  nameArr.forEach(item => {
    submitArr.push(this.$refs[this[item].name].getKVString())
  })
  console.log(submitArr.join('&')) // 最终拼成的字符串：username=&tel=&amount=&date=&account=&password=&address=
}
```


### 插槽slot
无



## 三、特别提示
内部使用了v-springBack自定义指令来解决iOS微信端input失焦时页面无法回弹的bug