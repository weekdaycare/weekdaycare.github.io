---
wiki: doc 
menu_id: doc 
title: 文件目录树
---

```yaml source目录树
source
├─ _data # _data 下存放数据类 yaml 文件
│    ├─ widgets.yml # 小组件配置文件
│    ├─ authors.yml # 作者信息配置文件
│    ├─ wiki 
│    |      ├─ notes.yml # 笔记页面配置文件
│    │      └─ wiki.yml # wiki页面配置文件
│    └─ topic 
│           └─ blog.yml # 专栏配置文件
│
├─ asset # 网站资源存放处，需要引用时可以使用相对路径 /asset/css/pace.css
│    ├─ avatar.svg
│    ├─ favicon.svg
│    ├─ css
│    │    └─ pace.css
│    └─ js
│         └─ pace.min.js
│   
├─ _posts # 你创建的普通文章默认存放在此处
│    └─ hello-world.md  
├─ notes # 笔记文章存放处
│    ├─ 1.md
│    ├─ 2.md
│    ├─ 3.md
│    └─ 4.md
├─ wiki # wiki 文章存放处
│    ├─ 1.md
│    ├─ 2.md
│    ├─ 3.md
│    └─ 4.md
│
├─ about # 自建第三方页面
│    └─ index.md
├─ friends
│    └─ index.md
└─ shuoshuo
     └─ index.md
```