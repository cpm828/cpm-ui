# cpm-ui

> 基于Vue.js 2.0 UI组件库.


## 查看示例

### 链接查看
[点击查看](https://cpm828.github.io/cpm-ui)

### 扫码查看
<img src="https://cpm828.github.io/cpm-ui/images/cpm_ui_qrcode.png">


## 查看教程

[点击查看](https://cpm828.github.io/cpm-ui-docs)


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


## 特别鸣谢
cpm-ui组件库部分组件心得来源于以下开源组件库：
- [mint-ui](http://mint-ui.github.io/docs/#/zh-cn2)
- [cube-ui](https://didi.github.io/cube-ui/)
- [rong-ui](https://rong360.github.io/rong-ui/demo/index.html#/)
- [vux](https://doc.vux.li/zh-CN/components/actionsheet.html)
- [iview](https://www.iviewui.com/docs/introduce)
- [element-ui](https://element.eleme.cn/#/zh-CN/component/quickstart)

以上排名不分先后，特别鸣谢。