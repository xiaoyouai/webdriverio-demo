## Install

cnpm i/yarn

## Usage

## 两种方式运行文件
## 第一种：

1. 将wdio.conf.js的services: ["selenium-standalone"],解除注释

2. 测试所有的文件：npm run test,测试单个文件：例如测试test文件夹下的test1文件：npx wdio --spec test/test1.js

## 第二种：

1. 保持services: ["selenium-standalone"]的注释

2. 执行npm run selenium

3. 测试所有的文件：npm run test,测试单个文件：例如测试test文件夹下的test1文件：npx wdio --spec test/test1.js

## 设置代理

set http_proxy=http://127.0.0.1:808
