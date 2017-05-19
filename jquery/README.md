# Smile Waterfall

[预览页面](https://1217950746.github.io/New-Waterfall/jquery)

## 食用方法

```html
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
