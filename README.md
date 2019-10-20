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
|反馈组件↓||||
|Toast|`this.$toast()`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/toast)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/Toast.md)|
|Loading|`this.$loading()`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/loading)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/Loading.md)|
|Dialog|`this.$dialog()`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/dialog)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/Dialog.md)|
|ActionSheet|`this.$actionSheet()`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/actionsheet)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/ActionSheet.md)|
|基础组件||||
|cIcon|`<cIcon></cIcon>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/icon)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cIcon.md)|
|cButton|`<cButton></cButton>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/button)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cButton.md)|
|cIndexList|`<cIndexList></cIndexList>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/indexlist)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cIndexList.md)|
|cRate|`<cRate></cRate>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/rate)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRate.md)|
|cCountDown|`<cCountDown></cCountDown>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/countdown)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cCountDown.md)|
|表单组件↓||||
|cRadio|`<cRadio></cRadio>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/radio)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRadio.md)|
|cRadioGroup|`<cRadioGroup></cRadioGroup>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/radiogroup)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRadioGroup.md)|
|cCheckbox|`<cCheckbox></cCheckbox>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/checkbox)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cCheckbox.md)|
|cCheckboxGroup|`<cCheckboxGroup></cCheckboxGroup>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/checkboxgroup)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cCheckboxGroup.md)|
|cRange|`<cRange></cRange>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/range)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRange.md)|
|cRangeDouble|`<cRangeDouble></cRangeDouble>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/rangedouble)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRangeDouble.md)|
|cSwitch|`<cSwitch></cSwitch>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/switch)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cSwitch.md)|
|布局组件↓||||
|cSticky|`<cSticky></cSticky>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/sticky)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cSticky.md)|
|cFixed|`<cFixed></cFixed>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/fixed)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cFixed.md)|
|cTitleBar|`<cTitleBar></cTitleBar>`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/titlebar)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cTitleBar.md)|
|CSS组件↓||||
|1px边框|`class="cpm-1px"`|[点击查看](https://cpm828.github.io/cpm_ui/demo/index.html#/cssonepx)|[点击查看](https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cssOnePx.md)|

> 未完待续...


## 特别鸣谢
cpm-ui组件库部分组件心得来源于以下开源组件库：
- [mint-ui](http://mint-ui.github.io/docs/#/zh-cn2)
- [cube-ui](https://didi.github.io/cube-ui/)
- [rong-ui](https://rong360.github.io/rong-ui/demo/index.html#/)
- [vux](https://doc.vux.li/zh-CN/components/actionsheet.html)
- [iview](https://www.iviewui.com/docs/introduce)
- [element-ui](https://element.eleme.cn/#/zh-CN/component/quickstart)

以上排名不分先后，特别鸣谢。