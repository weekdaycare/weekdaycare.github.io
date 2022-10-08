---
title: about
date: 2022-08-28 01:40:36
---

## 站点变更记录

### 2022/10/8

整了一个国庆算是把iSpeak部署好了，虽然bbtalk挂掉了，Artitalk的外观又没有bbtalk好看（主要是Aritalk部署后国内死活访问不上去），于是在四处翻博客的时候发现了一个好东西 [iSpeak](https://www.antmoe.com/speak/) 一顿折腾和作者提issue好不容易才部署完了，现在你可以在侧边栏里访问我的iSpeak页面啦。纯小白，看之后能不能改改css让iSpeak更契合我的主题。

![哎呀妈呀真香](https://pic1.imgdb.cn/item/634108e116f2c2beb1396805.jpg)

## 2022/9/27

本来打算继续白嫖一把 [BBtalk](https://bb.js.org/) 但是在关注黑石公众号绑定账号的时候被告知公众号服务异常，没办法，等吧，感觉 [Artitalk](https://artitalk.js.org/)没有 [BBtalk](https://bb.js.org/) 好看

~~罢了罢里，直接上Artitalk好吧，不纠结，反正都是白嫖。把侧边栏上原来的评论区换成了Artitalk~~。我tm不干了，不用了，整了一下午累死累活国内直连就是上不去，Artitalk直接参考官方文档会暴露Leancloud的Appid以及Appkey，使用中间代理cloudflare worker替换中间层避免泄露结果我构建完worker之后访问站点404？`(╯‵□′)╯︵┻━┻` 好好好，worker.dev被墙了是吧，我懂我懂，换域名就好了嘛。然后当我准备跑去freenom再嫖一个域名的时候，我用的机场他挂了(⊙ˍ⊙)freenom又会检测域名，域名不对你是注册不到的，麻了，等呗。好，注册完了解析到worker.dev之后还是进不去（报错`Error 1003`），人麻了。得，不整了，BBtalk寄掉了，Artitalk又没整好（其实翻出去是可以正常访问的，但是不翻就一直加载不出来）。天意啊，我不搞了！`(σ｀д′)σ`

## 2022/9/5

由于启用`katex`编辑数学公式导致cloudflare pages无法正常构建（主要是我用的`katex`插件是在本地渲染成HTML，这个插件需要借助另外一个本地的软件，这个路径问题导致cloudflare构建失败），我决定关闭cloudflare站点（减速CDN不嫖也罢），现在 https://weekdaycare.tk 仍然是托管在vercel， https://weekdaycare.cf 是直接解析到GitHub Page的来访问我的站点了

## 2022/8/29

picgo装了压缩图片的插件，更换网页图片为webp，减小图片大小，提高图片加载速度，webp似乎iOS14以下不支持

## 2022/8/28

心态崩了，一不小心把本地的Hexo仓库清除了，还好之前的文章有在Github上备份，整了半天总算是整回来了，然后发现不知道为什么旧域名vercel.app不能通过大陆访问了（至少我直连是上不去了）麻了

<img src="https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/15-02-17.webp" alt="找不到表情包来描述我的心情惹" style="zoom: 67%;" />

vercel.app 确认DNS被污染[`vercel.app` Blocked by SNI and DNS Pollution in China · Discussion #803 · vercel/community (github.com)](https://github.com/vercel/community/discussions/803)

焯，vercel直连不上去了，那我那些~~白嫖~~的东西岂不是全寄了，怪不得我说怎么Waline评论总是加载不出来

然后我发现换一个域名就又能访问了，把域名的nameservers换成vercel的，然后就成了，我的vercel又活过来里，就是这样，现在的网站域名是 https://weekdaycare.tk 和 https://weekdaycare.cf 

呜呜呜Cloudflare的速度是真的不敢恭维（不愧被称为减速CDN），而且cloudflare搭建的网站不知道为啥algolia搜索用不了ヽ（≧□≦）ノ

## 2022/8/27

将站点同时部署在[Cloudflare Page](https://pages.cloudflare.com/)（我馋它的~~速度~~更正：免费）上并启用新域名 https://weekdaycare.cf 

<img src="https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/15-03-11.webp" alt="有便宜不占王八蛋" style="zoom: 33%;" />

现在你访问https://weekdaycare.tk 是托管在vercel上的
https://weeldaycare.cf 是托管在cloudflare pages上的

增加评论邮件通知，参考官方文档：[评论通知 | Waline](https://waline.js.org/guide/server/notification.html#邮件通知)

## 2022/8/26

使用Github搭建图床（怕免费图床跑路）

本来想用又拍云的云储存服务，然而用又拍云的CDN需要备案了的域名，我没有（麻烦+穷），就算了

因为我使用的[Typora 官方中文站 (typoraio.cn)](https://typoraio.cn/)来进行Markdown写作的，Typora同时能使用[PicGo](https://picgo.github.io/PicGo-Doc/zh/)，就方便很多了，网上用github搭建图床的教程有很多，我就不在这里赘述了

## 2022/8/9

增加搜索，使用Algolia实现，同时优化站点配色

## 2022/6/25

成功搭建个人云盘，链接在侧边栏可以看到吼

![阿弥陀佛](https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/15-02-32.webp)

## 2021/11/23

搭建评论区成功，使用[Waline](https://waline.js.org/)托管评论（主要是穷）

## 2021/11/16

建站成功
