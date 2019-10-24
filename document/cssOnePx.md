## [返回总文档](https://github.com/cpm828/cpm-ui)


# CSS 1px解决方案

## 一、使用教程
[点击查看教程](https://cpm828.github.io/cpm_ui/demo/index.html#/onepx)

## 二、使用文档
### 导入
main.js中：
```js
import "cpm-ui/index.scss"
```

### 调用
```html
<div class="cpm-1px">全边框</div>
<div class="cpm-1px-t">上边框</div>
<div class="cpm-1px-b">下边框</div>
<div class="cpm-1px-l">左边框</div>
<div class="cpm-1px-r">右边框</div>
<div class="cpm-1px-tb">上下边框</div>
<div class="cpm-1px-lr">左右边框</div>
```


默认设置了边框颜色为：`#C7C7C7`，如需设置颜色，覆盖即可
```css
div{
  &::before{
    color: red;
    border-color: red;
  }
  &::after{
    color: red;
    border-color: red;
  }
}
```

## 三、特别提示
无