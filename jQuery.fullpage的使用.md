# fullPage.js的使用

============================= <br>
    *插件描述：fullPage.js 是一个基于 jQuery 的插件，它能够很方便、很轻松的制作出全屏网站。*

## 主要功能
>支持鼠标滚动
>支持前进后退和键盘控制
>多个回调函数
>支持手机、平板触摸事件
>支持 CSS3 动画
>支持窗口缩放
>窗口缩放时自动调整
>可设置滚动宽度、背景颜色、滚动速度、循环选项、回调、文本对齐方式等等

## 使用方法

-   引入方法
```html
    <link rel="stylesheet" href="css/jquery.fullPage.css">
    <script src="js/jquery.min.js"></script>
    
    <!-- jquery.easings.min.js 是必须的，用于 easing 参数，也可以使用完整的 jQuery UI 代替 -->
    <script src="js/jquery.easings.min.js"></script>
    
    <!-- 如果 scrollOverflow 设置为 true，则需要引入 jquery.slimscroll.min.js，一般情况下不需要 -->
    <script src="js/jquery.slimscroll.min.js"></script>
    
    <script src="js/jquery.fullPage.js"></script>
```

-   HTML部分
```html
    <div id="fullpage">
        <div class="section">第一屏</div>
        <div class="section">第二屏</div>
        <div class="section">
            <div class="slide">第三屏的第一屏</div>
            <div class="slide">第三屏的第二屏</div>
            <div class="slide">第三屏的第三屏</div>
            <div class="slide">第三屏的第四屏</div>
        </div>
        <div class="section">第四屏</div>
    </div>
```

-   JS部分
```js
    $(function(){
        $('#fullpage').fullpage();
    });
```