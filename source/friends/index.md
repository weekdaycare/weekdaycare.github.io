---
robots: noindex,nofollow
title: 朋友圈
date: 2022-10-08 23:36:06
menu_id: friends
sidebar: [朋友圈]
---

## 五湖四海的友人

形形的人，色色达咩

{% friends api:https://raw.weekdaycare.cn/raw/friends/output/v2/data.json %}

## 单项链接

康康大佬萌的博客

{% friends 单向链接 %}

## 自助友链

先友后链，在我们之间有一定的交流后再申请链接会更好哦，希望你我能成为真正的朋友而非仅仅挂个链接在这里捏🥰

{% checkbox checked:true color:green 大陆内能够正常访问 %}
{% checkbox checked:true color:green 近三个月至少发布过一篇原创文章 %}
{% checkbox checked:true color:green 合法、非营利性、无商业广告（有广告的会酌情考虑） %}
{% checkbox checked:true color:green 至少与我有过三次次互动，来回往返站点算一次 %}
{% checkbox symbol:times color:red checked:true 不接受纯搬运站 %}

我会不定时访问您的站点，若您的站点出现404等情况，我会暂时下架您的网站链接并通过Github提醒，当您的站点恢复时于github下留言即可

{% folding 俺已经满足所有条件了 %}

{% timeline %}

<!-- node 第一步：新建 Issue -->

在 [GitHub Issue](https://github.com/weekdaycare/friends/issues/) 中按照模板格式填写并提交。

若您不方便使用 Github Issue，也可以直接在本贴下留言

为了提高加载速度，推荐使用webp格式，or 我会压缩您的头像并上传至我的网盘中。

<!-- node 第二步：添加友链并等待管理员审核 -->

请添加本站到您的友链中，如果您也使用 issue 作为友链源，只需要告知您的友链源仓库即可。

{% codeblock lang:yaml %}
title: 星日语
avatar: https://weekdaycare.cn/asset/avatar.svg
url: https://weekdaycare.cn/
description: 星语日点灯
{% endcodeblock %}

待管理员审核添加 {% mark active color:green %} 即可

{% endtimeline %}
{% endfolding %}