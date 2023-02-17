# 【rollup】专用于类库型项目, 类似于【webpack】的js模块打包工具，但他更轻量，快捷。【小巧而专注】

## 同时且仅支持JavaScript和Typescript

## 已配备【babel】插件，将 ES6+ 的js代码转为ES5 

## 支持js代码压缩



# rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export

## 而大量npm包是基于CommonJS模块

## 需要插件辅助【rollup.js】使用CommonJS模块的包
  - rollup-plugin-node-resolve@11 插件允许我们加载第三方模块
  - @rollup/plugin-commons@18 插件将它们转换为ES6版本
  - 
    export default {
        ...省略其他
        plugins: [
            ...省略其他
            resolve(),
            commonjs(),
            ...省略其他
        ]
    