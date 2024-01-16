---
layout: wiki
wiki: doc 
menu_id: doc 
title: 标签组件
---

## about 关于块容器

{% note color:warning 这个功能即将废弃 在 1.21.0 版本后请使用 banner 组件代替。 %}

方便在关于页面显示一段图文信息，比普通块容器稍微有一点点不一样：

```
{% about avatar:/assets/xaoxuu/avatar/rect-256@2x.png height:80px %}

<img height="32px" alt="XAOXUU" src="/assets/xaoxuu/logo/180x30@2x.png">

**如果宇宙中真有什么终极的逻辑，那就是我们终有一天会在舰桥上重逢，直到生命终结。**

XAOXUU 目前是一个 iOS 开发者，代表作品有：ProHUD、ValueX 等。在业余时间也开发了 Stellar 博客主题，更多的作品可以去项目主页查看，希望大家喜欢～

{% navbar [文章](/) [项目](/wiki/) [留言](#comments) [GitHub](https://github.com/xaoxuu/) %}

{% endabout %}
```

## albums 专辑容器

类似于 gallery 但是支持点击跳转，数据来源于 `blog/source/_data/links/group_id.yml`

```md blog/source/_posts/xxx.md
{% albums group_id %}
```

{% albums music %}

## audio 音频标签

支持音乐外链以及网易云音乐，网易云支持设置 `type` 以及 `autoplay` 参数。

{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}

{% audio type:2 netease:1856385686 autoplay:0 %}

```md 写法如下
{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}

{% audio netease:1856385686 %}

{% audio type:2 netease:1856385686 autoplay:0 %}
```

```yaml 支持的参数
type: 2/0 # 歌曲/歌单 # 不设置默认为2歌曲模式
netease: xxx # 歌曲/歌单 id ，具体 id 在网易云网页版的网址链接中寻找 
autoplay: 1/0 # 自动播放/手动播放 # 不设置默认0手动播放
```

## banner 横幅容器

这个功能在 {% mark 1.21.0 color:dark %} 版本后开始支持，将会取代 about 组件，请尽快完成迁移。

### 用于独立页面顶部

{% banner 随记 bg:https://pic.imgdb.cn/item/630c11b216f2c2beb1ddc531.jpg %}
{% navbar active:/doc/ [随记](/doc/) [关于](/about/) %}
{% endbanner %}

```md 写法如下：
{% banner 随记 bg:https://pic.imgdb.cn/item/630c11b216f2c2beb1ddc531.jpg %}
{% navbar active:/doc/ [随记](/doc/) [关于](/about/) %}
{% endbanner %}
```

### 用于用户个人资料页

{% banner 某某 这是个人简介 avatar:/asset/avatar.svg bg:https://pic.imgdb.cn/item/630c11b216f2c2beb1ddc531.jpg %}
{% endbanner %}

```md 写法如下：
{% banner 某某 这是个人简介 avatar:/asset/avatar.svg bg:https://pic.imgdb.cn/item/630c11b216f2c2beb1ddc531.jpg %}
{% endbanner %}
```

### 用作文章摘要卡片

设置 link 可以让整个卡片响应点击事件，实现点击跳转到对应文章：

```md
{% banner 博客进阶：自动化部署 本文讲了如何利用脚本和 GitHub Actions 简化博客搭建和部署流程，提高效率。 bg:https://pic.imgdb.cn/item/630c11b216f2c2beb1ddc531.jpg link:https://xaoxuu.com/blog/20221126/ %}
{% endbanner %}
```

{% banner 博客进阶：自动化部署 本文讲了如何利用脚本和 GitHub Actions 简化博客搭建和部署流程，提高效率。 bg:https://pic.imgdb.cn/item/630c11b216f2c2beb1ddc531.jpg link:https://xaoxuu.com/blog/20221126/ %}
{% endbanner %}

## box 盒子容器

note 标签就是使用 box 容器实现的，它们样式是相同的：

{% folding 更名记录（Stellar 1.18.0） color:warning %}
因为原 noteblock 标签在升级到 hexo 6.0 之后跟官方库冲突了，官方一直没有解释原因，后不得不改名：
noteblock -> grid -> border -> ablock -> box
详情见：[#172](https://github.com/volantis-x/hexo-theme-volantis/issues/712)
{% endfolding %}

```md 语法格式
{% box [title] [color:color] [child:codeblock/tabs] %}
...
{% endbox %}
```

```md 写法如下
{% box Stellar v1.12.0 color:warning %}
因为原 noteblock 标签在升级到 hexo 6.0 之后跟官方库冲突了，官方一直没有解释原因，后不得不改名：
noteblock -> grid -> border -> ablock -> box
详情见：[#172](https://github.com/volantis-x/hexo-theme-volantis/issues/712)
{% endbox %}
```

## checkbox 复选

{% tabs %}

<!-- tab 示例 -->
{% checkbox 普通的没有勾选的复选框 %}
{% checkbox checked:true 普通的已勾选的复选框 %}
{% checkbox symbol:plus color:green checked:true 显示为加号的绿色的已勾选的复选框 %}
{% checkbox symbol:minus color:yellow checked:true 显示为减号的黄色的已勾选的复选框 %}
{% checkbox symbol:times color:red checked:true 显示为乘号的红色的已勾选的复选框 %}
<!-- tab 写法 -->
```md
{% checkbox 普通的没有勾选的复选框 %}
{% checkbox checked:true 普通的已勾选的复选框 %}
{% checkbox symbol:plus color:green checked:true 显示为加号的绿色的已勾选的复选框 %}
{% checkbox symbol:minus color:yellow checked:true 显示为减号的黄色的已勾选的复选框 %}
{% checkbox symbol:times color:red checked:true 显示为乘号的红色的已勾选的复选框 %}
```

```yaml 支持的参数
checked: true/false
color: red/orange/yellow/green/cyan/blue/purple
symbol: plus/minus/times
```

{% endtabs %}

## copy 复制行

{% tabs %}
<!-- tab 示例 -->
对于单行内容，可以使用 `copy` 标签来实现复制功能：

{% copy curl -s https://sh.xaox.cc/install | sh prefix:$ %}

您可以设置 `git:https` 或者 `git:ssh` 或者 `git:gh` 来快速放置一个 git 仓库链接：
{% copy git:https xaoxuu.com/hexo-theme-stellar prefix:HTTPS %}
<!-- tab 写法 -->
```md
{% copy curl -s https://sh.xaox.cc/install | sh %}
{% copy curl -s https://sh.xaox.cc/install | sh prefix:$ %}
{% copy git:https xaoxuu.com/hexo-theme-stellar %}
{% copy git:ssh xaoxuu.com/hexo-theme-stellar %}
{% copy git:gh xaoxuu.com/hexo-theme-stellar %}
```
{% endtabs %}

## emoji 表情包

{% tabs %}
<!-- tab 效果演示 -->
内置了可配置的表情标签 {% emoji 爱你 %} {% emoji blobcat ablobcatattentionreverse %} {% emoji tieba 滑稽 %} 使用方法如下：

```
{% emoji 爱你 %}
{% emoji blobcat ablobcatattentionreverse %}
{% emoji tieba 滑稽 %}
```

如果对高度有特别要求，可以指定高度，例如：
<center>{% emoji blobcat ablobcatrainbow height:1em %}{% emoji blobcat ablobcatrainbow height:2em %}{% emoji blobcat ablobcatrainbow height:3em %}{% emoji blobcat ablobcatrainbow height:2em %}{% emoji blobcat ablobcatrainbow height:1em %}</center>

```
<center>{% emoji blobcat ablobcatrainbow height:1em %}{% emoji blobcat ablobcatrainbow height:2em %}{% emoji blobcat ablobcatrainbow height:3em %}{% emoji blobcat ablobcatrainbow height:2em %}{% emoji blobcat ablobcatrainbow height:1em %}</center>
```

<!-- tab 语法格式 -->

```
{% emoji [source] name [height:1.75em] %}
```

其中 `source` 可省略，默认为配置中的第一个 `source`（详见「引入表情包」部分）

> 表情速查表：[Stellar内嵌blobcat小表情](https://weekdaycare.cn/posts/emoji-blob/)

<!-- tab 引入表情包 -->

```yaml blog/_config.stellar.yml
tag_plugins:
  ...
  emoji:
    default: https://gcore.jsdelivr.net/gh/cdn-x/emoji/qq/${name}.gif
    twemoji: https://gcore.jsdelivr.net/gh/twitter/twemoji/assets/svg/${name}.svg
    qq: https://gcore.jsdelivr.net/gh/cdn-x/emoji/qq/${name}.gif
    aru: https://gcore.jsdelivr.net/gh/cdn-x/emoji/aru-l/${name}.gif
    tieba: https://gcore.jsdelivr.net/gh/cdn-x/emoji/tieba/${name}.png
```

> 在配置文件中，文件名用 `${name}` 代替。

{% endtabs %}

## folding 折叠容器

折叠块标签的语法格式为：

```
{% folding title [codeblock:bool] [open:bool] [color:color] %}
content
{% endfolding %}
```

```yaml 参数说明
codeblock: true/false
open: true/false
color: red/orange/yellow/green/cyan/blue/purple/light/dark
```

### 彩色可折叠代码块

备注标签相较于旧版进行了增强，可以实现更多种颜色，还可以通过设置 `child:codeblock` 来实现可折叠的代码块。以下是一个默认打开的代码折叠框：

{% folding child:codeblock open:true color:yellow 默认打开的代码折叠框 %}
```swift
func test() {
  print("hello world")
}
```
{% endfolding %}

代码如下：

```
{% folding child:codeblock open:true color:yellow 默认打开的代码折叠框 %}
代码块
{% endfolding %}
```

{% folding color:yellow 危险，请不要打开这个 %}
通过设置颜色，以实现更醒目的作用，但不要滥用色彩哦～
{% folding color:orange 警告，真的很危险 %}
通过设置颜色，以实现更醒目的作用，但不要滥用色彩哦～
{% folding color:red 最后一次警告，千万不要打开这个 %}
不要说我们没有警告过你，Windows 10 不是為所有人設計，而是為每個人設計。
{% endfolding %}
{% endfolding %}
{% endfolding %}

## folders 多个折叠容器聚合

样式相比 `folding` 简单一些，适用于多个折叠标签平铺显示的场景，例如题目列表：

{% folders %}
<!-- folder 题目1 -->
这是答案1
<!-- folder 题目2 -->
这是答案2
<!-- folder 题目3 -->
这是答案3
{% endfolders %}

代码如下：

```
{% folders %}
<!-- folder 题目1 -->
这是答案1
<!-- folder 题目2 -->
这是答案2
<!-- folder 题目3 -->
这是答案3
{% endfolders %}
```

## frame 设备框架


{% tabs %}
<!-- tab 示例 -->
{% frame iphone11 img:/assets/wiki/prohud/toast/demo-loading.png video:/assets/wiki/prohud/toast/demo-loading.mp4 focus:top %}
<!-- tab 写法 -->
```md
{% frame iphone11 img:/assets/wiki/prohud/toast/demo-loading.png video:/assets/wiki/prohud/toast/demo-loading.mp4 focus:top %}
```
{% endtabs %}

## friends 友链

{% friends ios_developer %}

您可以在任何位置插入友链组，支持静态数据和动态数据，静态数据需要写在数据文件中：

```yaml blog/source/_data/links/ios_developer.yml
- title: 某某某
  url: https://
  cover:
  icon:
  description:
```

在需要的位置这样写：

```md
{% friends ios_developer %}
```

### 实现动态友链

从 [xaoxuu/issues-json-generator](https://github.com/xaoxuu/issues-json-generator) 作为模板克隆或者 fork 仓库

修改 `config.yml` 并打开 github action 的运行权限

```yaml config.yml
# 要抓取的 issues 配置
issues:
  repo: xaoxuu/friends # 仓库持有者/仓库名（改成自己的）
  label: active # 筛选具有 active 标签的 issue ，取消此项则会提取所有 open 状态的 issue
  sort: # updated-desc # 排序，按最近更新，取消此项则按创建时间排序
```

不出意外的话，仓库中已经配置好了 issue 模板，只需要在模板中指定的位置填写信息就可以了。然后在自己的仓库里提交一个 issue 并将 `Label` 设置为 `active` 进行测试。

提交完 issue 一分钟左右，如果仓库中出现了 `output` 分支提交，可以点击查看一下文件内容是否已经包含了刚刚提交的 issue 中的数据，如果包含，那么前端页面就可以使用友链数据了：

```
{% friends api:https://raw.github.xaox.cc/xaoxuu/friends/output/v2/data.json %}
```

### 数据托管与加速

{% box 特别感谢 color:green %}
特别感谢小冰博客的加速访问方案，解决了直接请求 GitHub API 速度过慢的问题，详见 [小冰博客](https://zfe.space/post/python-issues-api.html) 的教程。
{% endbox %}

支持把数据托管到任何其他地方来使用，例如：

```
{% friends api:https://raw.github.xaox.cc/xaoxuu/friends/output/v2/data.json %}
```

{% box Stellar 1.13.0 color:warning %}
动态数据 API 升级至 v2 版本，原使用 issue-api 仓库的需要将友链仓库同步更新。
v1 版本已经停止维护。
{% endbox %}

> 你可以有 N 种办法加速访问 GitHub 仓库里的文件。

## gallery 图库容器

这个功能在 {% mark 1.21.0 color:dark %} 版本后开始支持，其内部只能填写 md 格式的图片。

{% gallery %}
![@tianhao_wang](https://images.unsplash.com/photo-1688142202243-e218ad203952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D)
![@eberhard](https://images.unsplash.com/photo-1700994630045-f7a20df6d92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjN8fHxlbnwwfHx8fHw%3D)
![@eberhard](https://images.unsplash.com/photo-1533274221104-015a584a1005?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D)
![@eberhard](https://images.unsplash.com/photo-1539604214100-ab860d9082e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D)
{% endgallery %}

```md 写法如下
{% gallery %}
![@tianhao_wang](https://images.unsplash.com/photo-1688142202243-e218ad203952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D)
![@eberhard](https://images.unsplash.com/photo-1700994630045-f7a20df6d92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjN8fHxlbnwwfHx8fHw%3D)
![@eberhard](https://images.unsplash.com/photo-1533274221104-015a584a1005?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D)
![@eberhard](https://images.unsplash.com/photo-1539604214100-ab860d9082e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D)
{% endgallery %}
```

详细用法请看这篇文章：

{% link https://xaoxuu.com/blog/20231223/ %}

## ghcard 卡片

{% ghcard xaoxuu %}

{% ghcard xaoxuu/hexo-theme-stellar theme:dark %}

```md 写法如下
{% ghcard xaoxuu %}
{% ghcard xaoxuu/hexo-theme-stellar theme:dark %}
```

{% link https://github.com/anuraghazra/github-readme-stats GitHub&nbsp;Card&nbsp;API %}

## grid 网格分区容器

这个功能在 {% mark 1.24.0 %} 版本后获得重构，支持固定列数、动态列数、设置间距和圆角。

{% quot el:h3 动态列数 %}

默认的布局为【最小宽度为240px】即如果页面宽度大于 480px 则会显示为 2 列，大于 720px 则会显示为 3 列，以此类推，下面是效果：

{% grid %}
<!-- cell -->
{% image https://images.unsplash.com/photo-1653979731557-530f259e0c2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 download:https://unsplash.com/photos/bcql6CtuNv0/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8NnNNVmpUTFNrZVF8fHx8fDJ8fDE2Njg4NDAxMDI&force=true %}
<!-- cell -->
**[Unsplash Photo](https://unsplash.com/photos/bcql6CtuNv0)**

The Galactic Center is the rotational center of the Milky Way galaxy. Its central massive object is a supermassive black hole of about 4 million solar masses, which is called Sagittarius A*. Its mass is equal to four million suns. The center is located 25,800 light years away from Earth.

> Ōwhiro Bay, Wellington, New Zealand
> Published on May 31, 2022
> SONY, ILCE-6000
> Free to use under the Unsplash License

{% endgrid %}

```md 示例写法如下：
{% grid %}
<!-- cell -->
{% image https://images.unsplash.com/photo-1653979731557-530f259e0c2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 download:https://unsplash.com/photos/bcql6CtuNv0/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8NnNNVmpUTFNrZVF8fHx8fDJ8fDE2Njg4NDAxMDI&force=true %}
<!-- cell -->
**[Unsplash Photo](https://unsplash.com/photos/bcql6CtuNv0)**

The Galactic Center is the rotational center of the Milky Way galaxy. Its central massive object is a supermassive black hole of about 4 million solar masses, which is called Sagittarius A*. Its mass is equal to four million suns. The center is located 25,800 light years away from Earth.

> Ōwhiro Bay, Wellington, New Zealand
> Published on May 31, 2022
> SONY, ILCE-6000
> Free to use under the Unsplash License

{% endgrid %}
```

如果要修改最小宽度，可以这样写：

```md
{% grid w:350px %}
...
{% endgrid %}
```

{% quot el:h3 固定列数 %}

如果要固定为 2 列，可以这样写：

```md
{% grid c:2 %}
...
{% endgrid %}
```

{% quot el:h3 背景样式 %}

普通 Box 样式：

{% grid bg:box w:150px %}
<!-- cell -->
cell 1
<!-- cell -->
cell 2
<!-- cell -->
cell 3
<!-- cell -->
cell 4
{% endgrid %}

可浮起的卡片样式：

{% grid bg:card w:150px %}
<!-- cell -->
cell 1
<!-- cell -->
cell 2
<!-- cell -->
cell 3
<!-- cell -->
cell 4
{% endgrid %}

```md 示例写法如下：
普通 Box 样式：

{% grid bg:box w:150px %}
<!-- cell -->
cell 1
<!-- cell -->
cell 2
<!-- cell -->
cell 3
<!-- cell -->
cell 4
{% endgrid %}

可浮起的卡片样式：

{% grid bg:card w:150px %}
<!-- cell -->
cell 1
<!-- cell -->
cell 2
<!-- cell -->
cell 3
<!-- cell -->
cell 4
{% endgrid %}
```


{% quot el:h3 设置间距 %}

默认间距为 `16px`，如果需要修改，可以这样写：

```md
{% grid bg:card gap:32px w:120px %}
<!-- cell -->
cell 1
<!-- cell -->
cell 2
<!-- cell -->
cell 3
<!-- cell -->
cell 4
{% endgrid %}
```

{% grid bg:card gap:32px w:120px %}
<!-- cell -->
cell 1
<!-- cell -->
cell 2
<!-- cell -->
cell 3
<!-- cell -->
cell 4
{% endgrid %}

{% quot el:h3 设置圆角半径 %}

默认圆角半径等同于卡片的圆角半径，如果需要修改，可以这样写：

```md
{% grid bg:card br:4px w:150px %}
<!-- cell -->
cell 1
<!-- cell -->
cell 2
<!-- cell -->
cell 3
<!-- cell -->
cell 4
{% endgrid %}
```

{% grid bg:card br:4px w:150px %}
<!-- cell -->
cell 1
<!-- cell -->
cell 2
<!-- cell -->
cell 3
<!-- cell -->
cell 4
{% endgrid %}

> 这里的 br 是 border-radius 的缩写，虽然和 `<br>` 易混淆，但是我不知道是否有其他更好的命名，全称太长了。

## hashtag 标签

{% hashtag Stellar https://xaoxuu.com/wiki/stellar/ %}
{% hashtag Hexo https://hexo.io/ %}
{% hashtag GitHub https://github.com/xaoxuu/ %}
{% hashtag Gitea https://git.xaox.cc/ color:green %}

如果没有指定颜色，且没有设置默认颜色，则随机取一个颜色，快来试试吧～

```
{% hashtag Stellar https://xaoxuu.com/wiki/stellar/ %}
{% hashtag Hexo https://hexo.io/ %}
{% hashtag GitHub https://github.com/xaoxuu/ %}
{% hashtag Gitea https://git.xaox.cc/ color:green %}
```

## image 图片标签

图片标签是一个精心设计的应对各种尺寸插图的标签，对于大图，可以放置一个「下载」按钮，语法格式如下：

```
{% image src [description] [download:bool/string] [width:px] [padding:px] [bg:hex] %}
```

```yaml 参数说明
src: 图片地址
description: 图片描述
download: href # 下载地址，设置此值后鼠标放在图片上会显示下载地址，如果下载地址为图片地址，可以设置为 true
width: 200px # 图片宽度
padding: 16px # 图片四周填充宽度
bg: '#ffffff' # 图片区域背景颜色，16进制
```

### 横向铺满的图片

无论在什么宽度的设备上都希望横向铺满的图片，一般不需要额外操作。可以在链接后面写上图片描述，如有必要，可以通过设置 `download:true` 使其显示一个「下载」按钮链接指向图片地址，如果下载链接与显示的图片地址不同，可以 `download:下载链接` 来使其能够下载原图。

{% image https://s.xaox.cc/xaoxuu/posts/202401131914137.jpg-hd 图片由 xaoxuu 拍摄于一个普通的阳光明媚的下午 download:https://s.xaox.cc/xaoxuu/posts/202401131914137.jpg-hd %}

```md 写法如下
{% image https://s.xaox.cc/xaoxuu/posts/202401131914137.jpg-hd 图片由 xaoxuu 拍摄于一个普通的阳光明媚的下午 download:https://s.xaox.cc/xaoxuu/posts/202401131914137.jpg-hd %}
```

### 竖图（小图）优化

宽度较小而高度较大的图片，可以设置宽、高、填充间距、背景色等对其布局进行优化，使得它在不同宽度的屏幕下都能获得不错的视觉体验：

{% tabs %}

<!-- tab 限制宽度 -->

{% image https://s.xaox.cc/xaoxuu/posts/202401131924265.jpg-hd width:350px 图片由 xaoxuu 拍摄于 Dattle 幼年时期 %}

```
{% image /assets/xaoxuu/mirror/apple/documentation/watchkit/06d45110-1dd7-49a4-a413-9f5159ecdd0e.png width:200px padding:16px bg:white %}
```

{% folding 如果不进行约束，在宽屏设备上会占用很大篇幅 %}
{% image https://s.xaox.cc/xaoxuu/posts/202401131924265.jpg-hd %}
{% endfolding %}

<!-- tab 设置填充区域 -->

可以设置填充宽度和颜色，支持 `bg:var(--card)` 动态颜色，能够适配暗黑模式：

{% image /asset/avatar.svg bg:var(--card) padding:16px width:100px %}

```
{% image /asset/avatar.svg bg:var(--card) padding:16px %}
```

{% endtabs %}

### Fancybox 插件点击放大

由于 Stellar 主题的插件具有按需加载的特性，所以 Fancybox 插件默认也是已经配置好了的，在任意 `image` 标签中增加 `fancybox:true` 参数即可为特定图片开启缩放功能。如果一个页面没有任何地方使用，则不会加载 Fancybox 插件。

{% image fancybox:true https://www.apple.com.cn/newsroom/images/product/iphone/lifestyle/2022/Apple_Shot-on-iphone-macro-challenge_Cat_big.jpg.large_2x.jpg download:https://www.apple.com.cn/newsroom/images/product/iphone/lifestyle/2022/Images-of-Shot-on-iphone-macro-challenge.zip 图片来自 Apple 官网 %}

如果您希望全站所有的 `image` 标签都开启此功能，可在主题配置文件中修改以下参数：

```yaml blog/_config.stellar.yml
######## Tag Plugins ########
tag_plugins:
  # {% image %}
  image:
    fancybox: false
```

## link 链接卡片

{% tabs %}

<!-- tab 效果演示 -->
{% link https://xaoxuu.com/blog/20221029/ %}
{% link https://xaoxuu.com/blog/20221029/ desc:true %}
<!-- tab 语法格式 -->
外链卡片标签的语法格式为：
```
{% link href [title] [icon:src] [desc:true/false] %}
```
参数含义：
```yaml
href: 链接
title: 可选，手动设置标题（为空时会自动抓取页面标题）
icon: 可选，手动设置图标（为空时会自动抓取页面图标）
desc: 可选，是否显示摘要描述，为true时将会显示页面描述
```
<!-- tab 写法示例 -->
```md
不带摘要的样式：
{% link https://xaoxuu.com/blog/20221029/ %}
带摘要的样式：
{% link https://xaoxuu.com/blog/20221029/ desc:true %}
```
{% endtabs %}

## mark 标记标签

支持多彩标记，包括：{% mark 默认 %} {% mark 红 color:red %} {% mark 橙 color:orange %} {% mark 黄 color:yellow %} {% mark 绿 color:green %} {% mark 青 color:cyan %} {% mark 蓝 color:blue %} {% mark 紫 color:purple %} {% mark 亮 color:light %} {% mark 暗 color:dark %} {% mark 警告 color:warning %} {% mark 错误 color:error %} 一共 12 种颜色。

```
支持多彩标记，包括：{% mark 默认 %} {% mark 红 color:red %} {% mark 橙 color:orange %} {% mark 黄 color:yellow %} {% mark 绿 color:green %} {% mark 青 color:cyan %} {% mark 蓝 color:blue %} {% mark 紫 color:purple %} {% mark 亮 color:light %} {% mark 暗 color:dark %} {% mark 警告 color:warning %} {% mark 错误 color:error %} 一共 12 种颜色。
```

## md 渲染外部 markdown 文件

```md
{% folding %}
{% md https://raw.github.xaox.cc/xaoxuu/hexo-theme-stellar/main/README.md %}
{% endfolding %}
```

{% folding 效果如下 %}
{% md https://raw.github.xaox.cc/xaoxuu/hexo-theme-stellar/main/README.md %}
{% endfolding %}

## navbar 导航栏

文章内也可以插入一个导航栏：

```md
{% navbar active:/wiki/ [文章](/) [项目](/wiki/) [留言](#comments) [GitHub](https://github.com/xaoxuu/) %}
```

> active 传入要高亮的那个按钮的 url

{% navbar active:/wiki/ [文章](/) [项目](/wiki/) [留言](#comments) [GitHub](https://github.com/xaoxuu/) %}


## note 备注块

{% tabs %}
<!-- tab 示例 -->
```md
{% note [title] content [color:color] %}
```
<!-- tab 写法 -->
```yaml
title: 标题（可选）
content: 内容
color: red/orange/yellow/green/cyan/blue/purple/light/dark/warning/error
```
{% endtabs %}

### 具有标题的备注块

直接写备注内容，默认是和代码块一样的样式，第一个空格前面的是标题，后面的是正文，如果标题中需要显示空格，请使用 `&nbsp;` 代替。

{% tabs %}

<!-- tab 示例 -->
{% note 这&nbsp;是标题 这是正文 哈哈。 %}
<!-- tab 写法 -->
```
{% note 这&nbsp;是标题 这是正文 哈哈。 %}
```
{% endtabs %}

### 彩色备注块

{% tabs %}

<!-- tab 示例 -->
{% folding 备注块示例 open:false %}
{% note 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:red 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:orange 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:yellow 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:green 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:cyan 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:blue 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:purple 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:light 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:dark 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:warning 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:error 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% endfolding %}
<!-- tab 写法 -->

```md
{% note 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
{% note color:cyan 一共支持12种颜色，可以满足几乎所有的需求了。 color 可设置 red、orange、yellow、green、cyan、blue、purple、light、dark、warning、error 几种取值。 %}
```
{% endtabs %}

## okr 目标管理

这个功能在 {% mark 1.20.0 color:dark %} 版本后开始支持，这是一个 OKR（Objectives and Key Results）示例：

{% okr o1 %}

2024年的小目标：完成 Volantis 6.0 并发布上线
来自2025年的复盘：已《基本》实现目标 {% emoji tieba 滑稽 %}

<!-- okr kr1 percent:1 -->
重构 tag-plugins 和 wiki 系统
- 当 {% mark KR %} 进度为 100% 时，标签默认显示为 {% mark color:green 已完成 %}
- 当 {% mark KR %} 未设置进度时，默认为 {% mark 0% %}
- 当 {% mark O %} 未设置进度时，则显示所有 {% mark KR %} 进度平均值

<!-- okr kr2 percent:0.9 status:off_track -->
完成主要页面设计稿
{% tabs align:left %}
<!-- tab 小提示1 -->
您可以在 _config.yml 文件中修改标签的颜色和文案
<!-- tab 小提示2 -->
您可以在 _config.yml 文件中增加任意的标签配置
{% endtabs %}

<!-- okr kr3 percent:-0.12 status:unfinished -->
完成前置准备工作（如果你知道答案，请在留言区帮帮我！🥹）
{% checkbox 在咸水和海滩之间找一亩地 %}
{% checkbox 求出圆周率后15位 %}
{% checkbox 找出宇宙的终极逻辑 %}
{% checkbox 去地狱里走两步 %}

<!-- okr kr-4 status:at_risk -->
开发、测试和发布
{% image /asset/avatar.svg height:64px 支持嵌套插入图片等其它简单组件 %}

{% endokr %}

第一行会被作为标题并加粗，写法如下：

```
{% okr o1 %}

2024年的小目标：完成 Volantis 6.0 并发布上线
来自2025年的复盘：已《基本》实现目标 {% emoji tieba 滑稽 %}

<!-- okr kr1 percent:1 -->
重构 tag-plugins 和 wiki 系统
- 当 {% mark KR %} 进度为 100% 时，标签默认显示为 {% mark color:green 已完成 %}
- 当 {% mark KR %} 未设置进度时，默认为 {% mark 0% %}
- 当 {% mark O %} 未设置进度时，则显示所有 {% mark KR %} 进度平均值

<!-- okr kr2 percent:0.9 status:off_track -->
完成主要页面设计稿
{% tabs align:left %}
<!-- tab 小提示1 -->
您可以在 _config.yml 文件中修改标签的颜色和文案
<!-- tab 小提示2 -->
您可以在 _config.yml 文件中增加任意的标签配置
{% endtabs %}

<!-- okr kr3 percent:-0.12 status:unfinished -->
完成前置准备工作（如果你知道答案，请在留言区帮帮我！🥹）
{% checkbox 在咸水和海滩之间找一亩地 %}
{% checkbox 求出圆周率后15位 %}
{% checkbox 找出宇宙的终极逻辑 %}
{% checkbox 去地狱里走两步 %}

<!-- okr kr-4 status:at_risk -->
开发、测试和发布
{% image /assets/wiki/stellar/icon.svg height:64px 支持嵌套插入图片等其它简单组件 %}

{% endokr %}
```

## poetry 诗词

{% tabs %}

<!-- tab 示例 -->

{% poetry 游山西村 author:陆游 footer:诗词节选 %}
莫笑农家腊酒浑，丰年留客足鸡豚。
**山重水复疑无路，柳暗花明又一村。**
箫鼓追随春社近，衣冠简朴古风存。
从今若许闲乘月，拄杖无时夜叩门。
{% endpoetry %}

<!-- tab 写法 -->
```
{% poetry 游山西村 author:陆游 footer:诗词节选 %}
莫笑农家腊酒浑，丰年留客足鸡豚。
**山重水复疑无路，柳暗花明又一村。**
箫鼓追随春社近，衣冠简朴古风存。
从今若许闲乘月，拄杖无时夜叩门。
{% endpoetry %}
```
{% endtabs %}

## posters 海报容器

类似于 gallery 但是支持点击跳转，数据来源于 `blog/source/_data/links/group_id.yml`

```md blog/source/_posts/xxx.md
{% posters group_id %}
```

{% posters games %}

## quot 引用

适合居中且醒目的引用：{% quot Stellar 是迄今为止最好用的主题 %}

支持自定义引号：{% quot 热门话题 icon:hashtag %}

其中自定义引号素材在主题配置文件的 `tag_plugins.quot` 中配置：

```yaml
tag_plugins:
  ...
  # {% quot %}
  quot:
    default: # 可以自行配置多种图标方案
      prefix: https://bu.dusays.com/2022/10/24/63567d3e092ff.png
      suffix: https://bu.dusays.com/2022/10/24/63567d3e0ab55.png
    hashtag:
      prefix: https://bu.dusays.com/2022/10/24/63567d3e07da3.png
```

{% folding child:codeblock 写法如下 open:true %}
```
适合居中且醒目的引用：{% quot Stellar 是迄今为止最好用的主题 %}
支持自定义引号：{% quot 热门话题 icon:hashtag %}、{% quot 特别引用 icon:default %}
```
{% endfolding %}

{% quot 特别引用 icon:default %}

> 此外，加上 `el:h2/h3/h4/h5/h6` 可以作为标题使用

## radio 单选

{% tabs %}
<!-- tab 示例 -->
{% radio 没有勾选的单选框 %}
{% radio checked:true 已勾选的单选框 %}
<!-- tab 写法 -->
```
{% radio 没有勾选的单选框 %}
{% radio checked:true 已勾选的单选框 %}
```
```yaml 支持的参数
checked: true/false
color: red/orange/yellow/green/cyan/blue/purple
```
{% endtabs %}

## sites 网站卡片

{% sites sites_design %}

您可以在任何位置插入网站卡片组，支持静态数据和动态数据，静态数据需要写在数据文件中：

```yaml blog/source/_data/links/sites_design.yml
- title: 标题
  url: https://
  cover:
  icon:
  description:
```

在需要的位置这样写：

```md
{% sites 分组名 %}
```

{% box Stellar v1.13.0 color:warning %}
原 friends 和 sites 标签数据合并至 `links/xxx.yml` 文件，动态数据使用方法同友链，数据源格式相同，与友链共享数据，仅样式不同，也可以用 `sites` 标签做友链。
{% endbox %}

## swiper 轮播容器

默认一张图片是 50% 宽度，通过设置 `width:min` 设置为 25% 宽度，`width:max` 设置为 100% 宽度。

{% swiper effect:cards %}
![](https://images.unsplash.com/photo-1625171515821-1870deb2743b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1528283648649-33347faa5d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1524797905120-92940d3a18d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
{% endswiper %}

```md 写法如下
{% swiper effect:cards %}
![](https://images.unsplash.com/photo-1625171515821-1870deb2743b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1528283648649-33347faa5d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1524797905120-92940d3a18d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
{% endswiper %}
```

{% tabs %}
<!-- tab 宽度 -->

```md 写法如下
{% swiper width:min/max %}
...
{% endswiper %}
```
<!-- tab 切换效果 -->
```
{% swiper effect:cards/coverflow %}
...
{% endswiper %}
```

{% note color:warning 注意 一个页面只能设置一次，第一个 `swiper` 容器的效果全局生效。 %}

{% endtabs %}

## tabs 分栏容器

这个标签移植自 [NexT](https://theme-next.js.org/docs/tag-plugins/tabs.html) 主题，但做了以下修改：

- 支持设置 `align:center` 来使内容居中
- 设置默认激活的标签方式为 `active:1` 而非 `, 1`（使用默认格式降低学习成本，且显式声明可读性更强）
- 不需要 `<!-- endtab -->` 来作为结束标识（因为 Stellar 会自动判断）
- 不需要 `tabs id` 来保证唯一性（因为 Stellar 会设置唯一标识）
- 不支持 `@icon` 方式设置图标（因为 Stellar 不再内置 `fontawesome` 图标库）
- 轮廓样式简化，可以搭配其它容器类标签嵌套使用。

{% tabs active:1 align:center %}

<!-- tab 演示效果 -->

{% tabs active:2 align:center %}

<!-- tab 图片 -->
{% image https://pic.imgdb.cn/item/630c11b216f2c2beb1ddc531.jpg width:300px %}

<!-- tab 代码块 -->
```swift
let x = 123
print("hello world")
```

<!-- tab 表格 -->
| a | b | c |
| --- | --- | --- |
| a1 | b1 | c1 |
| a2 | b2 | c2 |

{% endtabs %}

<!-- tab 示例代码 -->
<script src="https://gist.github.xaox.cc/xaoxuu/cfd4e9645047115c6aa9b19cd9b28e97.js"></script>

{% endtabs %}

## timeline 时间线

支持静态和动态时间线数据源：
- 静态数据
- github issues 支持多种筛选参数，详见 [API](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-issues-assigned-to-the-authenticated-user)
- github releases 支持多种筛选参数，详见 [API](https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#list-releases)
- gitea issues 支持多种筛选参数，详见 [API](https://docs.gitea.com/zh-cn/api/1.20/#tag/issue/operation/issueListIssues)
- gitea releases 支持多种筛选参数，详见 [API](https://docs.gitea.com/zh-cn/api/1.20/#tag/repository/operation/repoListReleases)
- memos
- ...

常见的使用场景请看这篇文章：

{% link https://xaoxuu.com/blog/20221029/ desc:true %}


### 静态时间线

静态数据是写死在 `md` 源文件中的，在 `deploy` 时就已经确定了。

{% timeline %}
<!-- node 2021 年 2 月 16 日 -->
主要部分功能已经开发的差不多了。
{% image https://pic.imgdb.cn/item/630c11b216f2c2beb1ddc531.jpg width:300px %}
<!-- node 2021 年 2 月 11 日 -->
今天除夕，也是生日，一个人在外地过年+过生日，熬夜开发新主题，尽量在假期结束前放出公测版。
{% endtimeline %}

```md 写法如下
{% timeline %}
<!-- node 2021 年 2 月 16 日 -->
主要部分功能已经开发的差不多了。
{% image /assets/wiki/stellar/photos/hello@1x.png width:300px %}
<!-- node 2021 年 2 月 11 日 -->
今天除夕，也是生日，一个人在外地过年+过生日，熬夜开发新主题，尽量在假期结束前放出公测版。
{% endtimeline %}
```

### 动态时间线

{% tabs active:1 align:center %}

<!-- tab 动态说说 -->

动态数据是从 GitHub Issues 中拉取的，使用方法为：

1. 建一个仓库
2. 创建一个 `issue` 并添加一个 `label` 进行测试
3. 写 `timeline` 标签时加上 `api:https://api.github.com/repos/your-name/your-repo/issues`

例如：
```md _posts/xxx.md
{% timeline api:https://api.github.com/repos/xaoxuu/blog-timeline/issues?direction=asc&per_page=3 %}{% endtimeline %}
```

效果如下：
{% timeline api:https://api.github.com/repos/xaoxuu/blog-timeline/issues?direction=asc&per_page=3 %}{% endtimeline %}

<!-- tab 朋友圈 -->

{% link https://xaoxuu.com/wiki/stellar/third-party/fcircle/ %}

```md _posts/xxx.md
{% timeline type:fcircle api:https://raw.github.xaox.cc/xaoxuu/friends-rss-generator/output/data.json %}
{% endtimeline %}
```

<!-- tab 微博动态 -->

1. fork shaoyaoqian/WeiboSpider 的爬虫，修改自己的仓库名
2. 修改 `.github/workflows/main.yml` 中的微博ID为你想爬取的ID，修改完后每天会自动爬取你的微博，存储为 json 文件，输出文件在 {% mark output %} 分支

```md _posts/xxx.md
{% timeline limit:20 type:weibo api:你的json文件地址 %}{% endtimeline %}
```

{% endtabs %}

### 静态 + 动态

用法同静态和动态单独使用时一样，例如：

```
{% timeline reversed:true api:https://api.github.com/repos/xaoxuu/blog-timeline/issues?per_page=2 %}
<!-- node 这条内容为静态数据 -->
这条内容为静态数据，静态数据在 `deploy` 时就已经确定了。
{% endtimeline %}
```

### 数据筛选

{% folders %}
<!-- folder 只显示某个人的数据 -->
{% timeline user:xaoxuu api:https://api.github.xaox.cc/repos/volantis-x/hexo-theme-volantis/issues %}{% endtimeline %}
<!-- folder 筛选最近3条todo -->
{% timeline api:https://api.github.xaox.cc/repos/xaoxuu/hexo-theme-stellar/issues?labels=todo&per_page=3 %}{% endtimeline %}
<!-- folder 筛选评论最多的3条建议 -->
{% timeline api:https://api.github.xaox.cc/repos/volantis-x/hexo-theme-volantis/issues?labels=feature-request&per_page=3&sort=comments %}{% endtimeline %}
{% endfolders %}

上述示例代码如下：

```
{% folders %}
<!-- 只显示某个人的数据 -->
{% timeline user:xaoxuu api:https://api.github.com/repos/volantis-x/hexo-theme-volantis/issues %}{% endtimeline %}
<!-- 筛选最近3条todo -->
{% timeline api:https://api.github.com/repos/xaoxuu/hexo-theme-stellar/issues?labels=todo&per_page=3 %}{% endtimeline %}
<!-- 筛选评论最多的3条建议 -->
{% timeline api:https://api.github.com/repos/volantis-x/hexo-theme-volantis/issues?labels=feature-request&per_page=3&sort=comments %}{% endtimeline %}
{% endfolders %}
```

更多用法详见：

{% link https://docs.github.com/en/rest/issues/issues#list-issues-assigned-to-the-authenticated-user GitHub&nbsp;REST&nbsp;API %}

## toc 文档目录树

```
{% toc wiki:xxx [open:true] [display:mobile] title %}
```

## video 视频标签

支持 bilibili 和视频外链，可设置最大宽度， bili 可设置自动播放

{% video bilibili:BV1GP4y1d729 %}

{% grid c:2 %}
<!-- cell -->
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
<!-- cell -->
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endgrid %}

```md 写法如下
{% video bilibili:BV1GP4y1d729 %}

{% video bilibili:BV1GP4y1d729 width:100% autoplay:0 %}

{% grid c:2 %}
<!-- cell -->
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
<!-- cell -->
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov width:100% %}
{% endgrid %}
```

```yaml 支持的参数
width: 500px # 须带单位 80% 20em 100mm...
autoplay: 1/0 # 自动播放/手动播放 # 不设置默认为0手动播放
```

> 目前 bilibili 的 iframe 标签不能放进 grid 容器里，原因未知。

