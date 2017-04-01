# webpack


-   先全局安装webpack      npm install webpack -g
-   npm init -y
-   npm install webpack --save-dev
-   创建配置文件 webpack.config.js 配置参考如下：
```js
    var path = require('path');
    module.exports = {
        // entry 表示输入的文件
        entry: path.resolve(__dirname, 'src/js/app.js'),
        // output 表示输出的文件路径和文件名
        output:{
            path: path.resolve(__dirname, 'dist/js'),
            filename:'bundle.js'
        }
    }
```

配置output中publicPath属性
配置devServer中的contentBase属性
运行webpack-dev-server或者npm run default(我这里在package.json中配置的是default)