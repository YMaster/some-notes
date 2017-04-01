# vue中不理解的部分

## immediate

-   在选项参数中指定 immediate： true 将立即一表达式的当前值触发回调
```js
    vm.$watch('a', callback,{
        immediate: true
    })
```

## vm.$set(object,key,value)
-   参数：
    -   {Object} object
    -   {string} key
    -   {any} value
-   返回值： 设置的值

-   用法： 
    这是全局 Vue.set 的别名
