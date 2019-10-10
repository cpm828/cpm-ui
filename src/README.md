# cpm-ui

> 基于Vue.js 2.0 UI组件库.

## 快速查看

### 链接
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/)

### 扫码查看
<img src="https://blog.pimichen.com/images/public/cpm_ui.png">


## 使用说明

### 安装组件
```
npm install cpm-ui --save
```


### 安装 `node-sass`、`sass-loader`依赖
```
npm install node-sass --save-dev
npm install sass-loader@7.3.1 --save-dev
```
如果安装 `sass-loader` 版本的版本大于8，会报错 `Module build failed: TypeError: this.getResolve is not a function` ，只需要将 `sass-loader` 降级到v7即可

### 引入组件
main.js中引入
```js
import { Toast, Loading, Dialog, ActionSheet, cIcon } from 'cpm-ui'

// Vue.use
let components = [Toast, Loading, Dialog, ActionSheet, cIcon]
components.map(component => Vue.use(component))
```



## 使用文档
<!--
  非markdown文档: https://cpm828.github.io/cpm_ui/***
  markdown文档:   https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/***
-->
|组件|调用方法|[使用教程](http://cpm828.github.io/cpm_ui/demo/index.html)|[使用文档](https://github.com/cpm828/cpm828.github.io/tree/master/cpm_ui/document)|
|:---|:---|:---|:---|
|全局组件↓||||
|Toast|`this.$toast()`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/toast)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/Toast.md)|
|Loading|`this.$loading()`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/loading)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/Loading.md)|
|Dialog|`this.$dialog()`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/dialog)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/Dialog.md)|
|ActionSheet|`this.$actionSheet()`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/actionsheet)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/ActionSheet.md)|
|页面内组件↓||||
|cIcon|`<cIcon></cIcon>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/icon)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cIcon.md)|
|cButton|`<cButton></cButton>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/button)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cButton.md)|
|cRange|`<cRange></cRange>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/range)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRange.md)|
|cRangeDouble|`<cRangeDouble></cRangeDouble>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/rangedouble)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRangeDouble.md)|
|cIndexList|`<cIndexList></cIndexList>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/indexlist)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cIndexList.md)|
|cRate|`<cRate></cRate>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/rate)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRate.md)|
|布局类组件↓||||
|cSticky|`<cSticky></cSticky>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/sticky)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cSticky.md)|
|cHeader|`<cHeader></cHeader>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/header)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cHeader.md)|
|cFooter|`<cFooter></cFooter>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/footer)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cFooter.md)|
|表单类组件↓||||
|cRadio|`<cRadio></cRadio>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/radio)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRadio.md)|
|cRadioGroup|`<cRadioGroup></cRadioGroup>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/radiogroup)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRadioGroup.md)|
|cCheckbox|`<cCheckbox></cCheckbox>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/checkbox)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cCheckbox.md)|
|cCheckboxGroup|`<cCheckboxGroup></cCheckboxGroup>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/checkboxgroup)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cCheckboxGroup.md)|
|cSwitch|`<cSwitch></cSwitch>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/switch)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cSwitch.md)|
|css组件↓||||
|1px边框|`class="cpm-1px"`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/cssonepx)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cssOnePx.md)|

> 未完待续...