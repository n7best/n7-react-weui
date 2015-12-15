##此git不再继续维护，请大家使用官方的[git](https://github.com/weui/react-weui)
# WeUI - React
[![travis build](https://img.shields.io/travis/n7best/react-weui.svg?style=flat-square)](https://travis-ci.org/n7best/react-weui)
[![version](https://img.shields.io/npm/v/n7-react-weui.svg?style=flat-square)](https://www.npmjs.com/package/n7-react-weui)
[![MIT License](https://img.shields.io/npm/l/react-weui.svg?style=flat-square)](http://opensource.org/licenses/MIT)


React-WeUI是[weui](https://github.com/weui/weui)的第三方扩展，独立输出成[react](http://facebook.github.io/react/)组件. React-WeUI使用了[webpack](http://webpack.github.io/)环境，配合[less-loader](https://github.com/webpack/less-loader)输出inline样式. 代码标准使用了ES2015,以[babel-loader](https://github.com/babel/babel-loader)来输出成现有可运行网页.

## 具体说明
[http://n7best.github.io/react-weui-page/](http://n7best.github.io/react-weui-page/)

## 手机预览

请用微信扫码

![](./dist/images/qrcode.png)

[http://n7best.github.io/react-weui/](http://n7best.github.io/react-weui/)

## 快速使用

使用npm安装
```
npm install --save n7-react-weui
```
内嵌到你的react开发当中
```
import React from 'react';
//读取组件
import Button from 'n7-react-weui/lib/button';

//创建一个自定义迷你绿色按钮
const CustomButton = () => {
  return (
        <Button type="primary" mini>按钮</Button>
  );
}

export default CustomButton;
```

## 开发

```
git clone https://github.com/n7best/react-weui
cd react-weui
npm install
npm start
```
然后在浏览器打开 `http://localhost:8080`。

## 技术支持 & Sponsor
[![BrowserStack](https://jquery.org/resources/members/browserstack.png)](https://www.browserstack.com/)

