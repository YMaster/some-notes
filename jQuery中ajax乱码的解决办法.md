# jQuery中提交Ajax乱码问题


### jQuery中的Ajax提交数据时，data如果传递了一个对象中包含中文则有可能乱码
    解决办法有以下三种 

    1、 提交前使用 codeURI编译两次，记得是两次
    data:{id:1, type:encodeURI(encodeURI('商品'))}
    再在后台对字符串进行 decode

    在Ajax配置contenType属性，加上charset=UTF-8
    在ajax方法中加入以下参数
    contentType:"application/x-www-form-urlencoded;charset=UTF-8" 
    // 原理就是设置请求头的编码 格式contentType即可
    此时使用get时
```js
    // 服务器端
    String name = new String(request.getParameter("name").getBytes("iso8859-1"),"utf-8");
    // 客户端
   $.ajax({url: "2.jsp",type: "get",data: "name=中文",success: function(response){ 
        alert(response); 
    }});
    // 或者
    $.get("2.jsp", "name=中文",function(response){ 
        alert(response); 
    }); 
```

    使用post时
```js
    // 服务器端 java
    request.setCharacterEncoding("UTF-8"); 
    String name = request.getParameter("name"); 
    // 客户端
    $.ajax({url: "3.jsp",type: "post",data: "method=testAjaxPost&name=中文",success: function(response){ 
        alert(response); 
    }}); 
    // 或
    $.ajax({url: "3.jsp",type: "post",data: {name:"中文"},success: function(response){ 
        alert(response); 
    }}); 
    // 或
    $.post("3.jsp", { name: "中文" },function(response){ 
        alert(response); 
    }); 
    // 或者
    $.post("3.jsp", "name=中文",function(response){ 
        alert(response); 
    }); 
```
