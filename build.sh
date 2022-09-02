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

# 安装algolia实现网页搜索功能(看你的主题是否支持algolia)(可选)
npm install --save hexo-algolia

# 安装Hexo-tag-player(可选)
npm install --save hexo-tag-aplayer

# 安装RSS插件
npm install hexo-generator-feed --save

# 使用新的渲染器(我使用的主题要求)
npm install hexo-render-pug hexo-renderer-stylus --save

# 复制文章到指定目录
cd ../
cp -r `ls | grep -v hexo | grep -v config.yml | xargs` hexo/source/_posts
# 复制配置文件
cp config.yml hexo

# 开始构建
cd hexo && hexo g --config config.yml