# New-Waterfall

一个基于Jquery开发的瀑布流插件

[官网](https://github.com/1217950746/New-Waterfall)

[下载地址](https://github.com/1217950746/New-Waterfall/archive/master.zip)

## 食用方法

```
<ul id="waterfall">
    <li>
        <div>
            内容1
        </div>
    </li>
    <li>
        <div>
            内容2
        </div>
    </li>
</ul>

// 执行瀑布流代码
$(document).ready(function ()
{
    $('#waterfall').NewWaterfall({
        width: 360,
        delay: 100,
    });
});
```

* ul 是瀑布流
* li 是瀑布流其中一个列表，主要用来做定位
* li中的div是用来做样式的



## 效果图
![1](Screenshots/1.png)

