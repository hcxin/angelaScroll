# angelaScroll
### 初衷

如今网站越来越多，滚动到页面顶部和底部的需求非常的常见，所以能我就随便写了一个。

### angelaScroll.js介绍
angelaScroll是一个依赖jquery的插件，为增强用户体验而开发，体积极小（未压缩不到2k），可配置性高(可以自定义挂载元素、自定义滚动速度、自定义滚动之后的回调函数)。源码地址: https://github.com/hcxin/angelaScroll

### 兼容性
支持全部主流浏览器。

### 使用
可以直接用script标签引入。

```javascript
<link rel="stylesheet" href="css/angelaScroll.css">
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="js/angelaScroll.js"></script>
```

你的dom结构是这样的

```html
<div class="tool-bar" id="toolBar">
    <button class="go-top-btn" id="topBtn">返回顶部</button>
    <button class="go-bottom-btn" id="bottomBtn">回到低部</button>
</div>
```

### 用法
下面是js的用法

```javascript
    $(function () {
        //初始化插件
        $.angelaScroll();
    });
```

下面是自定义参数的用法

```javascript
    $(function () {
        //初始化插件
        $.angelaScroll({
            topBtn: '#topBtn',
            topSpeed: 1000,
            topCallBack: function () {
                console.log("到顶部了");
            },
            bottomBtn: '#bottomBtn',
            bottomSpeed: 1000,
            bottomCallBack: function () {
                console.log("到底部了");
            }
        });
    });
```