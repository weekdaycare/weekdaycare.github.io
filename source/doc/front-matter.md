---
layout: wiki
wiki: doc 
menu_id: doc 
title: front-matter
h1: 文章可配置项目
---

我十分建议您先去 `blog/scaffolds` 目录中改动 `post.md` ，新建一篇文章时的以该文件为模板新建文章，配置一次之后就不需要每次都去写那冗杂的 `front-matter` ，下面给出全面配置，请按需删改。

```md blog/scaffolds/post.md
---
title: {{ title }}
h1: {{ title }} # 默认的一级标题是 title，可以指定 h1 为一级标题，也可以设置 h1: '' 来隐藏标题
date: {{ date }}
tags: []
categories: []
description: 
cover: # 文章封面
banner: # 文章横幅
poster: # 海报（可选，全图封面卡片）
  topic: # 标题上方的小字
  headline: # 大标题 # 必选
  caption: # 标题下方的小字 
  color: # 标题颜色 
open_graph: # 如果分享到社交平台的缩略图不理想，可以通过这个特性覆盖为自己想要的
  image: 
sidebar:
  - toc # 只写一个字符串代表引用对应的通用组件
  - override: timeline # 覆盖组件
    api: https://xxx # 在该页面设置单独的 api 地址
  - layout: markdown
    title: ''
    content: | # 支持 MD 语法
      
    src: # 可以设置外部 md 文件链接
mermaid: # 先安装mermaid插件，要使用图表请在该处写上 true
katex: # 要使用katex请在该处写上 true
author: # 若配置了作者信息，默认作者为第一作者，用该项指定其他作者
references: # 用 markdown 格式填写引用的文章
  - '[]()'
---
```