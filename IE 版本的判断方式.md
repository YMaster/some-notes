# IE版本判断

    HTML 的注释格式是 <!-- Comment content  --> ， IE 对HTML注释做了一些扩展，使之可以支持条件判断表达式：
    <!--[if expression]> HTML <![endif]-->   当表达式expression 为True 的时候，显示 HTML 内容。
    例子：
    view plaincopy to clipboardprint?
    <!--[if IE 5]>  
    <p>Welcome to Internet Explorer 5.</p>  
    <![endif]-->  
    <!--[if IE 5]>
    <p>Welcome to Internet Explorer 5.</p>
    <![endif]-->
    和编程语言类似，这里的表达式还支持大于(gt)、小于(lt)、 与或非 等操作符。 下面是一些例子。
    [if IE]   判断是否IE
    [if IE 7]  判断是否是IE7
    [if !IE]  判断是否不是IE
    [if lt IE 5.5]  判断是否是IE5.5 以下版本。  (<)
    [if lte IE 6]   判断是否等于IE6 版本或者以下 (<=)
    [if gt IE 5]  判断是否IE5以上版本  （> ）
    [if gte IE 7]  判断是否 IE7 版本或者以上
    [if !(IE 7)] 判断是否不是IE7
    [if (gt IE 5)&(lt IE 7)]   判断是否大于IE5， 小于IE7
    [if (IE 6)|(IE 7)]  判断是否IE6 或者 IE7
    代码示例：
    view plaincopy to clipboardprint?
    <!--[if IE]><p>You are using Internet Explorer.</p><![endif]-->  
    <![if !IE]><p>You are not using Internet Explorer.</p><![endif]>  
   
    <!--[if IE 7]><p>Welcome to Internet Explorer 7!</p><![endif]-->  
    <!--[if !(IE 7)]><p>You are not using version 7.</p><![endif]-->  
    
    <!--[if gte IE 7]><p>You are using IE 7 or greater.</p><![endif]-->  
    <!--[if (IE 5)]><p>You are using IE 5 (any version).</p><![endif]-->  
    <!--[if (gte IE 5.5)&(lt IE 7)]><p>You are using IE 5.5 or IE 6.</p><![endif]-->  
    <!--[if lt IE 5.5]><p>Please upgrade your version of Internet Explorer.</p><![endif]-->  
    <!--[if IE]><p>You are using Internet Explorer.</p><![endif]-->
    <![if !IE]><p>You are not using Internet Explorer.</p><![endif]>
    <!--[if IE 7]><p>Welcome to Internet Explorer 7!</p><![endif]-->
    <!--[if !(IE 7)]><p>You are not using version 7.</p><![endif]-->
    <!--[if gte IE 7]><p>You are using IE 7 or greater.</p><![endif]-->
    <!--[if (IE 5)]><p>You are using IE 5 (any version).</p><![endif]-->
    <!--[if (gte IE 5.5)&(lt IE 7)]><p>You are using IE 5.5 or IE 6.</p><![endif]-->
    <!--[if lt IE 5.5]><p>Please upgrade your version of Internet Explorer.</p><![endif]-->
>    注：IE5 以下的版本不支持这种注释扩展