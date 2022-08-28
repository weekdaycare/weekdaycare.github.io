---
title: about
date: 2022-08-28 01:40:36
---

# 站点变更记录

## 2022/8/28

心态崩了，一不小心把本地的Hexo仓库清除了，还好之前的文章有在Github上备份，整了半天总算是整回来了，然后发现不知道为什么旧域名vercel.app不能通过大陆访问了（至少我直连是上不去了）麻了

<img src="https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/28/15-16-39.png" alt="找不到表情包来描述我的心情惹" style="zoom: 67%;" />

vercel.app 确认被污染，我焯，看来我把站点部署在cf上是个正确的选择

[`vercel.app` Blocked by SNI and DNS Pollution in China · Discussion #803 · vercel/community (github.com)](https://github.com/vercel/community/discussions/803)

焯，vercel直连不上去了，那我那些~~白嫖~~的东西岂不是全寄了，怪不得我说怎么Waline评论总是加载不出来

然后我发现换一个域名就又能访问了，把域名的nameservers换成vercel的，然后就成了，我的vercel又活过来里，就是这样，现在的网站域名是 https://weekdaycare.tk 和 https://weekdaycare.cf 

呜呜呜Cloudflare的速度是真的不敢恭维，而且cloudflare搭建的网站不知道为啥algolia搜索用不了╰（‵□′）╯

## 2022/8/27

将站点同时部署在[Cloudflare Page](https://pages.cloudflare.com/)（我馋它的~~速度~~更正：免费）上并启用新域名 https://weekdaycare.cf 

<img src="https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/28/16-47-25.jpg" alt="有便宜不占王八蛋" style="zoom: 33%;" />

现在你访问https://weekdaycare.tk 是托管在vercel上的
https://weeldaycare.cf 是托管在cloudflare pages上的

增加评论邮件通知，参考官方文档：[评论通知 | Waline](https://waline.js.org/guide/server/notification.html#邮件通知)

## 2022/8/26

使用Github搭建图床并加速（怕免费图床跑路）

因为我使用的[Typora 官方中文站 (typoraio.cn)](https://typoraio.cn/)来进行Markdown写作的，Typora同时能使用[PicGo](https://picgo.github.io/PicGo-Doc/zh/)，就方便很多了，网上用github搭建图床的教程有很多，我就不在这里赘述了

## 2022/8/9

增加搜索，使用Algolia实现，同时优化站点配色

## 2022/6/25

成功搭建个人云盘，链接在侧边栏可以看到吼

![阿弥陀佛](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/28/16-45-26.jpg)

## 2021/11/23

搭建评论区成功，使用[Waline](https://waline.js.org/)托管评论（主要是穷）

## 2021/11/16

建站成功