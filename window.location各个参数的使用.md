# 如何使用window.location

## window.location的作用主要获取与用户浏览器中对于网页地址的信息与管理

## location.href
    
    参数 \/\/空 或者 要跳转的网页地址

    location.href 的作用可以进行读写，当读取时就可以获取到当前网页的地址，如果是写入则会使浏览器进行跳转

## location.URL

    参数 \/\/空

    location.URL 与 location.href 一样可以获取到当前网址，但是不同的是，location.URL是只读的，并不能写入

## location.replace 
    
    参数 \/\/要跳转的网页地址

    location.replace 会对页面进行切换，但是使用时需要注意的是，使用location.href 进行的跳转可以使用后退进行返回到上一个页面
    而location.replace 则不能通过返回回到上一个页面
