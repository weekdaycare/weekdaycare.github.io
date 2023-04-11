---
menu_id: about
sidebar:
  - layout: markdown
    title: '欢迎光临寒舍'
    content: |
      很高兴认识你，来了就随便逛逛，要是喜欢哪篇文章的话可以和我留言互动哦，欸嘿 ヾ(≧▽≦*)o
  - recent
  - timeline
---
{% quot 关于 %}

{% tabs active:1 align:center %}

<!-- tab 关于我 -->

{% about avatar:https://pic.imgdb.cn/item/630c05de16f2c2beb1d86de2.jpg height:60px %}

<center><b>苦难不值得追求，磨练意志是因为苦难无法躲开</b></br>事一个破学生，没事喜欢瞎捣鼓，Kono白嫖怪哒！</center>

<div align="center"><img src="https://raw.weekdaycare.cn/raw/weekdaycare/main/assets/github-contribution-grid-snake.svg"/></div>

{% navbar [📑文章](/) [📢说说](/shuoshuo/) [📌友链](/friends/) [📺追番](https://bangumi.tv/user/weekdaycare) %}

{% endabout %}

<!-- tab 关于本站 -->

{% folding 目前建站总花费 %}
|类别|￥|
|:-:|:-:|
|域名（三年）|99|
|去不图床（两年）|20|
{% endfolding %}

{% timeline %}
<!-- node 2022 年 11 月 23 日 -->

欸嘿我又回来啦！没有买服务器弄了个阿里云储存 oss 套的又拍云的 cdn ，我备案又回来啦ヾ(≧▽≦*)o

> 哎呀真香

{% image https://bu.dusays.com/2022/11/23/637e188ae973f.webp width:300px %}

<!-- node 2022 年 11 月 22 日 -->

由于没有使用服务器，导致阿里云今天和我发邮件说我的域名没有解析到他的云服务器，但是接入备案是要绑定阿里云的ip的，我又不想买服务器（穷）哎，难受，懒得搞了，还是乖乖用我的vercel吧，备案也不要了，又拍云要say goodbye了

{% image https://bu.dusays.com/2022/11/23/637e18e1c1edb.webp width:600px %}

<!-- node 2022 年 11 月 7 日 -->

正式加入十年之约

<!-- node 2022 年 10 月 17 日 -->

域名通过啦，欢迎访问我的新域名 weekdaycare.cn 

同时给我的网站套一层又拍云的CDN

<!-- node 2022 年 10 月 10 日 -->

购买了 weekdaycare.cn 域名，正在备案中，马上就能开启新一轮的白嫖咯 `(～￣▽￣)～`

同时原域名 weekdaycare.tk ~~暂停解析到这里，我把它用到另一个vercel项目上哩~~ 还是托管在vercel哦

<!-- node 2022 年 10 月 8 日 -->

整了一个国庆算是把iSpeak部署好了，虽然bbtalk挂掉了，Artitalk的外观又没有bbtalk好看（主要是Aritalk部署后国内死活访问不上去）

~~现在你可以在侧边栏里访问我的iSpeak页面啦~~现在没有用ispeak了，用的是主题支持的timeline动态时间线

{% image https://pic1.imgdb.cn/item/634108e116f2c2beb1396805.jpg width:200px %}

<!-- node 2022 年 9 月 27 日 -->

本来打算继续白嫖一把 [BBtalk](https://bb.js.org/) 但是在关注黑石公众号绑定账号的时候被告知公众号服务异常，没办法，等吧，感觉 [Artitalk](https://artitalk.js.org/)没有 [BBtalk](https://bb.js.org/) 好看

~~罢了罢里，直接上Artitalk好吧，不纠结，反正都是白嫖。把侧边栏上原来的评论区换成了Artitalk~~。

<!-- node 2022 年 9 月 5 日 -->

由于启用 `katex` 编辑数学公式导致cloudflare pages无法正常构建（主要是我用的 `katex` 插件是在本地渲染成HTML，这个插件需要借助另外一个本地的软件Pandoc，这个软件问题导致cloudflare构建失败），我决定关闭cloudflare站点（减速CDN不嫖也罢）

~~现在 https://weekdaycare.tk 仍然是托管在vercel， https://weekdaycare.cf 是直接解析到GitHub Page的来访问我的站点了~~

<!-- node 2022 年 8 月 28 日 -->

心态崩了，一不小心把本地的Hexo仓库清除了，还好之前的文章有在Github上备份，整了半天总算是整回来了，然后发现不知道为什么旧域名vercel.app不能通过大陆访问了（至少我直连是上不去了）麻了

然后我发现换一个域名就又能访问了，把域名的nameservers换成vercel的，然后就成了，我的vercel又活过来里，~~就是这样，现在的网站域名是 https://weekdaycare.tk 和 https://weekdaycare.cf~~

呜呜呜Cloudflare的速度是真的不敢恭维（不愧被称为减速CDN），而且cloudflare搭建的网站不知道为啥algolia搜索用不了 `ヽ（≧□≦）ノ`

<!-- node 2022 年 8 月 27 日 -->

将站点同时部署在 [Cloudflare Page](https://pages.cloudflare.com/) （我馋它的~~速度~~更正：免费）~~上并启用新域名 https://weekdaycare.cf~~

<!-- node 2022 年 8 月 9 日 -->

~~增加搜索，使用Algolia实现，同时优化站点配色~~ 由于迁移了其他博客主题，导致搜索现在不可用

<!-- node 2022 年 6 月 25 日 -->

成功搭建（白嫖）个人云盘，链接在侧边栏可以看到吼

<!-- node 2021 年 11 月 23 日 -->

使用 [Waline](https://waline.js.org/) 托管评论（主要是穷）

<!-- node 2021 年 11 月 16 日 -->

建站成功

{% endtimeline %}

{% endtabs %}