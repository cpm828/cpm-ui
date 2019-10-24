## [返回总文档](https://github.com/cpm828/cpm-ui)


# cCountDown倒计时组件

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/countdown)


## 二、使用文档
### 导入
main.js中：
```js
import { cCountDown } from 'cpm-ui'
Vue.use(cCountDown)
```

### 调用
```html
<cCountDown :time="5 * 60 * 60 * 1000"></cCountDown>
```

### 属性props
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|time|剩余时间戳（毫秒）|Number||0|
|format|时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒|String||`HH:mm:ss`|
|autoStart|是否自定开始倒计时|Boolean|`true`、`false`|`true`|


### 事件Event
|方法|说明|
|:---|:---|
|onFinish|倒计时结束回调|

如：
```html
<cCountDown :time="5 * 60 * 60 * 1000" @onFinish="onFinish"></cCountDown>
```

如需手动控制倒计时，可手动调用内部的 `start`、`pause`、`reset` 方法，如：
```html
<cCountDown :time="5000" :autoStart="false" format="ss:SSS" ref="countDown"></cCountDown>
<cButton type="primary" size="smaller" @onClick="startCount">开始</cButton>
<cButton type="primary" size="smaller" @onClick="pauseCount">暂停</cButton>
<cButton type="primary" size="smaller" @onClick="resetCount">重置</cButton>
```

```js
startCount () {
  this.$refs.countDown.start()
},
pauseCount () {
  this.$refs.countDown.pause()
},
resetCount () {
  this.$refs.countDown.reset()
},
```

### 插槽slot
如需自定义样式，采用slot的方式插入dom，slotProps为自定义的名称，timeData为格式化时间对象（未处理补时长），如：

```html
<cCountDown :time="30 * 60 * 60 * 1000" class="count-down">
  <template v-slot="slotProps">
    <span>{{ slotProps.timeData.h }}</span>
    <span>{{ slotProps.timeData.m }}</span>
    <span>{{ slotProps.timeData.s }}</span>
  </template>
</cCountDown>

<cCountDown :time="30 * 60 * 60 * 1000" class="count-down">
  <template v-slot="slotProps">
    <span>{{ ('0' + slotProps.timeData.h).slice(-2) }}</span>
    <i>:</i>
    <span>{{ ('0' + slotProps.timeData.m).slice(-2) }}</span>
    <i>:</i>
    <span>{{ ('0' + slotProps.timeData.s).slice(-2) }}</span>
  </template>
</cCountDown>
```



## 三、特别提示
无