#!/bin/bash

# 配置环境
npm install -g hexo-cli
mkdir hexo
cd hexo
hexo init
npm install
rm -rf source/_posts
mkdir -p source/_posts

# 安装主题(你们可以改成自己喜欢的主题)
npm i hexo-theme-yun@latest

# 使用新的渲染器
npm install hexo-render-pug hexo-renderer-stylus --save

# 复制文章到指定目录
cd ../
cp -r `ls | grep -v hexo | grep -v config.yml | xargs` hexo/source/_posts
# 复制配置文件
cp config.yml hexo

# 开始构建
cd hexo && hexo g --config config.yml 作者：两条小鱼 https://www.bilibili.com/read/cv15174123/ 出处：bilibili