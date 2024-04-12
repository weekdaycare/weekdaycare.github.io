---
title: hexo-renderer-pandoc渲染swiper失败问题
tags:
- Stellar
- hexo
- 教程
- 编程
categories: [奇技淫巧]
poster:
  topic: 标题上方的小字
  headline: 大标题
  caption: 标题下方的小字
  color: 标题颜色
date: 2024-04-06 21:12:58
description:
cover:
banner:
abbrlink: fix-swiper-invalid
---

## 水 pr

> 不想看废话的可以跳过我的碎碎念 [解决方法](#咋办)

日常逛博客的时候瞄了瞄主题仓库，瞟到了 issue: 关于swiper轮播容器右箭头失效 [#408](https://github.com/xaoxuu/hexo-theme-stellar/issues/408)，想起来之前用 Swiper 的时候也出现了一样的问题，于是我就跑去翻了翻 Swiper API 的官方文档。很快啊很快，啪的一下，我就翻到了，和轮播有关的参数就俩儿，一个 `loop` ，一个 `rewind`。

看看官方怎么解释的：

|名称|描述|
|:---|:---|
|loop|设置true为启用连续循环模式<br>由于循环模式的工作原理（它将重新排列幻灯片），幻灯片总数必须为：<br>大于或等于 `slidesPerView+slidesPerGroup` ；<br>甚至 `slidesPerGroup`（或使用 `loopAddBlankSlides` 参数）；<br>甚至 `grid.rows`（或使用 `loopAddBlankSlides` 参数）|
|rewind|设置true为启用倒带模式<br>在最后一张幻灯片上单击“下一页”导航按钮将滑回到第一张幻灯片。<br>在第一张幻灯片上单击“上一页”导航按钮将向前滑动到最后一张幻灯片。|

根据 issue 所提，在 Swiper 中图片数量不超过两张时轮询会失效，这是怎么回事呢？我们看看主题的引入脚本就知道了

```ejs theme/layout/_plugins/swiper.ejs
var swiper = new Swiper('.swiper#swiper-api', {
  slidesPerView: 'auto',
  spaceBetween: 8,
  centeredSlides: true,
  effect: effect,
  loop: true, //这里
  pagination: {
	el: '.swiper-pagination',
	clickable: true,
  },
```

上面这一段就是主题调用的 api 参数，我们可以看到在这里主题使用的是 loop 参数，根据官方 api 说明，当图片数量小于 3 的时候应该没满足 loop 的条件，所以不会轮询，还会带有莫名的鬼畜。那直接改成 rewind 就好了，简单粗暴。

那么这样就水了一个 pr 了 {% emoji blobcatheadphones %}

但是提交 pr 之前惯例是要先本地测试一波的，这一测不要紧，却测出来另外一个 Bug。

## 来真的了

撇脚英语：How I find it？Activating the command `hexo s` , I discovered an unexpected void in the designated area where "Swiper" should have emerged. There's nothing! Dumbfounded, for I had merely made a solitary alteration to an API parameter. Urgency seized me, for I am the monarch of haste. Consequently, I promptly executed the command cl once more. Alas, to no avail!

当我启动 `hexo s` 的时候，我发现本该显示 `Swiper` 的地方居然是空的！啥都没有！我傻掉了。不应该啊，我只改了一个 api 参数，不可能连 Swiper 都显示不了啊？急急急，我是急急国王。所以我赶紧 `cl` 重新跑了一遍。但是，没有！{% emoji blobcatshocked %}

好好，看我 {% kbd Ctrl %} + {% kbd Z %} 大法好！

泻药，失败了。不对啊，之前都好好的，怎么现在就出问题了。转身我就跑去看我之前写的MD，然后我 Copy 了一份放到新的文章里，再次预览。没用嘞！不是我直接复制的怎么还出问题，我敲我傻了。我坐在这里ponder是不是我改主题文件把哪里动了，于是我去翻了翻我之前的用过 Swiper 的文章，是正常显示的啊。等等，等等等，好像有哪里不对劲，哥们我的图呢？{% emoji blobcatshocked %}

四张图你给我偷两张是叭！看了看其他的都是只有两张图，就尼玛奇怪。

{% image https://bu.dusays.com/2024/04/06/661159b767e82.webp %}

查 Bug 第一步，{% kbd F12 %} 启动！

然而怪，很怪，网页元素里只有那两张图，另外两张图甚至连网络请求都没有，仿佛从来不存在一样。我看了看我的主题文件，也没改过 Swiper 啊，莫非是 Bug ，提个 issue ？但是官网又是好的，肯定是我哪里出问题了。直接拉了个新仓库，不改配置但是主题仓库用我自己的，跑了一下，嘿！可以嘞没得问题。既然如此那肯定是装的第三方插件有冲突了。{% emoji blobbanhammerr %}

一个个的排查，最后，我发现你了！`hexo-renderer-pandoc`

{% image https://bu.dusays.com/2024/04/06/66115f565d67c.webp width:300px %}

## 分析

找到了没用啊，让我把 `hexo-renderer-pandoc` 卸了吧，你别说它还挺好用的，至少我的数学公式他就渲染的挺好，而且不用引入额外的 JS 和 CSS。那只能回去看看 Swiper 那边的逻辑咯。瞄一眼

`Swiper.js` 核心就两句

```js theme/scripts/tag/lib/swiper.js
let imgs = ctx.render.renderSync({text: content, engine: 'markdown'})
imgs = imgs.match(/<img(.*?)src="(.*?)"(.*?)>/gi)
```

第一句用 Hexo 默认的渲染器把获取到的 `content` 内容转化为 HTML 元素。第二句则是用正则匹配去获取 `<img>` 标签中 `src` 的内容。

这下子就不难解释为什么我生成 Swiper 会出错了，Hexo 默认的渲染器是  `hexo-renderer-marked` ，但是我把它干掉了，这一干掉就出问题了。`ctx.render.renderSync` 是一个同步渲染函数，但是 `hexo-renderer-pandoc` 是调用 Pandoc 渲染，基于异步的渲染逻辑的，它没法立即获取渲染结果。所以两个玩意儿不兼容，自然整不出来结果。{% emoji blobcatfearful %}

## 咋办

不会写异步函数啊，改渲染器那更不会了，还是要在 `Swiper.js` 上动刀比较好。记得我们刚刚说的那关键的两句吗？翻译一下就是，我要拿到 `content` 字段中所有的图片地址然后存入 `imgs` 中。那我为什么不直接从 `content` 字段中获取嘞？这样不就可以直接跳过生成 HTML 这一步了，动手！

```js theme/scripts/tag/lib/swiper.js
'use strict'

module.exports = ctx => function(args, content) {
  args = ctx.args.map(args, ['width', 'effect'])
  var el = ''
  function slide() {
    let matches = content.match(/!\[.*?\]\((.*?)\)/g) || [];
    let imgUrls = matches.map(img => {
      let match = img.match(/!\[.*?\]\((.*?)\)/);
      return match && match[1];
    });

    if (imgUrls.length > 0) {
      imgUrls.forEach((url, i) => {
        el += `<div class="swiper-slide"><img no-lazy src="${url}" alt="image-${i}"></div>`;
      });
    }
  }

  el += '<div class="tag-plugin swiper fancybox" id="swiper-api"'
  el += ' ' + ctx.args.joinTags(args, ['width', 'effect']).join(' ')
  el += '>'
  el += '<div class="swiper-wrapper">'
  slide()
  el += '</div>'
  el += '<div class="swiper-pagination"></div>'
  el += '<div class="swiper-button-prev blur"></div>'
  el += '<div class="swiper-button-next blur"></div>'
  el += '</div>'
  return el
}
```

我直接从 `content` 中匹配 MD 语法获取图片地址，缺点就是只支持严格的 MD 语法，就是只能写成 `![xxx](https://xxx)` 这种，不过无伤大雅{% emoji ablobcatrainbow %}

{% image https://bu.dusays.com/2024/04/06/66116793abdb3.webp width:230px %}