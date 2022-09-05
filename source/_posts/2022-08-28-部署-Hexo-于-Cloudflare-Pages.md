---
title: 部署 Hexo 于 Cloudflare Pages
date: 2022-08-28 15:53:27
tags: 
  - 整活
  - 白嫖
  - hexo
categories: 捣鼓
abbrlink: cloudflare-pages
---

> 前面的步骤与我之前的文章Hexo+Github+Vercel类似，我默认你已经在本地建好了Hexo仓库并连接到了你的Github

# 新建github分支

现在你的Github应该是类似这样的

![github](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/15-05-47.webp)

现在我们新建分支用来存放你的Hexo目录文件（注：main主分支中的是Hexo渲染好了的html文件）

<img src="https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/15-40-29.webp" alt="image-20220828171739789" style="zoom:80%;" />

点击view all branches，选择New branch（新建分支）

<img src="https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/15-40-41.webp" alt="image-20220828172008926" style="zoom:80%;" />

为你的分支取一个名字，我的分支名称是`source`

<img src="https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/15-40-46.webp" alt="image-20220828172142168" style="zoom:67%;" />

# 安装插件

我们进入你的Hexo目录中，我默认你的Hexo已经与Github链接了

右键，`git bash here`，安装[hexo-git-backup](https://github.com/coneycode/hexo-git-backup)这个插件

使用`hexo -v`命令查看`hexo`版本

- 如果你的hexo版本是2.x.x，你应该使用以下代码
  
  ```shell
  $ npm install hexo-git-backup@0.0.91 --save
  ```

- 如果你的hexo版本是3.x.x，你应该使用以下代码
  
  ```shell
  $ npm install hexo-git-backup --save
  ```

# 配置插件

安装完这个插件之后，我们配置这个插件，打开Hexo目录下的`_config.yml`

![config.yml](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/15-41-21.webp)

在文件末尾添加以下内容

```yml
backup:
    type: git
    repository:
    #branchName是分支名称，把branchName改为你刚刚新建的分支名称
    #github与gitcafe是托管平台
       github: git@github.com:xxx/xxx.git,branchName
       gitcafe: git@github.com:xxx/xxx.git,branchName
```

<img src="https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/15-51-56.webp" alt="git@github" style="zoom:80%;" />

<details>
<summary>这里给出我的文件配置</summary>

```yml
# Deployment

## Docs: https://hexo.io/docs/one-command-deployment

deploy:
  type: git
  repository: git@github.com:weekdaycare/weekdaycare.github.io.git
  branch: main

#备份
backup:
    type: git
    repository:
       github: git@github.com:weekdaycare/weekdaycare.github.io.git,source
```

</details>

# 启用插件

先不要着急，因为Cloudflare Pages创建的时候已经找不到Hexo的模板了，因此需要自己安装Hexo来编译输出，又因为Cloudflare Pages的构建命令只支持单行指令

因此我们在Hexo根目录中新建`build.sh`文件

如果你和我一样用的是[Yun](https://yun.yunyoujun.cn/)主题的话，那你可以照抄我的配置，否则请自行修改，要不然到时候站点缺少啥依赖不跑了

```sh
#!/bin/bash

#配置环境
npm install -g hexo-cli
mkdir hexo
cd hexo
hexo init
npm install
rm -rf source/_posts
mkdir -p source/_posts

#安装主题(你们可以改成自己喜欢的主题)
npm i hexo-theme-yun@latest

#安装algolia实现网页搜索功能(看你的主题是否支持algolia)(可选)
npm install --save hexo-algolia

#安装Hexo-tag-player(可选)
npm install --save hexo-tag-aplayer

#使用新的渲染器(我使用的主题要求)
npm install hexo-render-pug hexo-renderer-stylus --save

#复制文章到指定目录
cd ../
cp -r `ls | grep -v hexo | grep -v config.yml | xargs` hexo/source/_posts
#复制配置文件
cp config.yml hexo

#开始构建
cd hexo && hexo g --config config.yml
```

吼，编辑完文件后我们打开`git bash here`

```bash
hexo b
```

或者

```bash
hexo backup
```

现在打开你的Github，切换一下分支，你就可以看到你的Hexo目录已经上传到分支中咯

![github](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/15-55-59.webp)

<div class="danger">

> 注意：如果你的配置文件中存在密匙等隐私的内容，记住把你的仓库设为隐私！（不会影响站点访问）

</div>

# 创建Cloudflare Pages

前往Cloudflare Pages(https://pages.cloudflare.com/)点击一下`Sign UP`，登录或者注册一个Cloudflare账户。

而后我们便会跳转到Cloudflare Pages的控制台，在控制台处点击`新建项目`，`链接到git`

会让你登录Github账户，登录后在这里选择你的仓库（上一步创建的那个）即可。

![选择你的仓库](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/15-57-58.webp)

创建Cloudflare Pages站点

在下一个页面中，项目名称可以改成你喜欢的名字，生产分支选择你刚刚创建的分支，下面的内容按照这个填，不要改动

![image-20220828180256905](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/16-01-05.webp)

设置完成后，便可以直接保存并部署了。

部署成功的栗子

![部署成功的栗子](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/16-01-33.webp)

上面圈起来的地址即为你的网站地址，点击即可范围

经过上述的部署后，每当我们提交备份（即`hexo b`）至Github分支时，Cloudflare Pages项目便会自动拉取最新的内容，并将其根据上面的配置文件渲染出静态文件并部署到Cloudflare的全球边缘节点中。

# 自定义域名

<div class="info">

> 如果要部署到顶级域，则需要将站点添加到Cloudflare区域并配置名称服务器。example.com
> 
> 如果要部署到子域，则站点不必添加至Cloudflare区域。您需要添加自定义CNAME记录以将域指向Cloudflare Pages站点。

</div>

进入Cloudflare Pages，点击你的项目

![cloudflare pages](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/16-05-31.webp)

点击切换到自定义域，旁边有个设置自定义域

![image-20220828181730607](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/16-06-13.webp)

输入你的域名，按照流程走，完成后你就能通过自己的域名访问你的网站啦

# 补充

如果你原来就是在用Hexo+Github+Vercel的方案的话，你新建分支以后vercel也会构建新分支与`main`分支，如果你不介意每次更新都要部署两次的话就可以直接忽略，没什么问题。

但是如果你的`main`分支构建部署没有报错，而新分支部署出现问题的话，我们可以关掉新分支的部署，操作如下

在vercel进入你的项目，右上角点`settings`，找到侧边栏中的`Git`

<img src="https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/20-26-56.webp" alt="git" style="zoom:67%;" />

划到最下面有个`Ignored Build Step`，填入以下代码

<img src="https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/20-27-53.webp" alt="Ignored Build Step" style="zoom:67%;" />

```sh
[ "$VERCEL_ENV" != production ]
```

意思是忽略除了`prodution`的构建部署

同样，Cloudflare Pages在构建部署新分支`source`（我的是叫这个名儿）的时候检测到`main`分支有提交也会构建`main`分支，然而Cloudflare Pages构建`main`分支是不可能成功的，所以我们要禁用Cloudflare Pages的自动部署，因为Cloudflare Pages免费版限制每月500次构建（~~绝不是因为穷~~），操作如下

进入[Cloudflare Pages](https://dash.cloudflare.com/)，点击你的项目，上边点击进入**设置**，然后再进入侧边栏中的**构建与部署**，进入预览分支中的**配置预览部署**

![image-20220829203838036](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/20-38-38.webp)

选择**无（禁用自动分支部署）**，点保存就OK了

![配置预览部署](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/20-41-43.webp)

# 优缺点

1. 速度快：相对于单独购买VPS或使用GitHub Pages，Cloudflare Pages的全球相应速度挺不错的。

2. 免费：每个月有一定的免费配额（500次构建），不折腾的话够用了（除非你非常高产）。

3. 迁移方便：这不是超简单的吗（指抄教程的情况下）。

4. 慢（？）：由于众所周知的原因，国内速度可能会不咋地。

5. 自定义程度低：其实是由于我的部署方案导致的，如果要自定义主题之类的话就需要自己fork一份回来修改了。

6. 部署时间长：由于每次部署都要安装一次环境，服务器队列繁忙时还需要排队，因此从推送更新到部署完成，大概需要花费3~5分钟才能看见网站内容有更新。

7. 折腾麻烦：虽然每月有500次免费构建，但没有教程的话可能会一直踩坑（我今天配置完就跑了22次），导致消耗了太多的构建次数，而且每次修改还要等一段时间才能看得见效果。

参考文章：

- [使用Cloudflare Pages部署Hexo - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv15174123/)
