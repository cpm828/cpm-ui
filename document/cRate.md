## [返回总文档](https://github.com/cpm828/cpm-ui)


# cRate评分组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/rate)



## 二、使用文档
### 导入
main.js中：
```js
import { cRate } from 'cpm-ui'
Vue.use(cRate)
```

### 调用
```html
<cRate v-model="value"></cRate>

{
  value: 0
}
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|value|当前值，v-model双向绑定|Number||0|
|type|类型|String|`star`、`heart`、`smile`|`star`|
|max|分值|Number||5|
|size|icon大小|String||1.2rem|
|threshold|阙值，选择低分和中分界限（值本身被划分在低分中），中分和高分界限（值本身被划分在高分中）|Array||[2, 4]|
|colors|各个阙值对应的颜色|Array||[`#F7BA2A`, `#F7BA2A`, `#F7BA2A`]|
|voidColor|未选中时的颜色|String||`#C6D1DE`|
|disabled|是否禁用|Boolean|`true`、`false`|`false`|
|disabledVoidColor|只读时未选中时的颜色，disabled为true时生效|String||`#EFF2F7`|


### 事件Event
|方法|说明|
|:---|:---|
|onChange|点击评分后触发|

如：
```html
<cRate @onChange="onChange" v-model="value"></cRate>

{
  value: 0
}
```

### 插槽slot
评分右侧展示当前状态

如：
```html
<cRate v-model="value">
  <span style="font-size:0.8rem;margin-left:0.3rem">
    {{value ? texts[value - 1] : ''}}
  </span>
</cRate>

{
  value: 2,
  texts: ['极差', '失望', '一般', '满意', '惊喜']
}
```



## 三、特别提示
无