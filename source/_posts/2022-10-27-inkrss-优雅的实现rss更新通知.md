---
title: inkrss：优雅的实现rss更新通知
cover_info:
  meta: 
  title: 
date: 2022-10-27 08:25:57
updated: 2022-10-27 08:27:00
tags: 
  - 白嫖
  - rss
categories: 奇技淫巧
abbrlink: inkrss
cover:
---

[RSS](https://zh.wikipedia.org/wiki/RSS)是个好东西，然而市面上的大部分本地rss阅读器并不支持通知推送，因为这需要软件在后台定时抓取更新，这显然不够优雅。一些在线的RSS阅读器似乎支持邮件订阅，然而抓取频率感人，价格感人，遂不做考虑。那rss的折腾之旅就要止步于此了吗？当然不会，办法总比困难多，现在就来看看今天的主角——[inkrss](https://github.com/pureink/inkrss)

<!-- more -->

## 特点

* 🎊 免费 - 部署在 cloudflare workers（白嫖）
* ⚡️ 即时 - 最短一分钟进行一次监测
* ♻️ 省心 - serverless，无需管理服务器和数据库
* 🎨 定制 - 多种订阅和通知方式，包括不限于 telegram，bark，微信

话不多说，直接上链接

{% link https://github.com/pureink/inkrss icon:https://github.githubassets.com/favicons/favicon.svg desc:true
 %}

## 部署

官网的文档其实已经很详细了，然而我部署的时候还是踩了一些坑

### 下载最新的[releases](https://github.com/pureink/inkrss/releases/tag/v0.3.0)并解压到本地
   
解压目录下执行

{% copy wrangler kv:namespace create "KV" %}

### 配置 `wrangler.toml` 
   
填入 `account_id` （cloudflare的account_id）

```toml inkrss/wrangler.toml
account_id = ""
```

也可以设置爬取频率

```toml inkrss/wrangler.toml
crons = ["*/1 * * * *"]
```

### 设置通知方式
   
```js inkrss/config.js
//choose telegram / wechat / bark
export const mode = 'telegram'
```

### 配置通知

#### bark
```json inkrss/config/bark/config.json
{
"SECRET_PATH": "",
"PARSE_URL": "",
"BARK_URL": ""
}
```

{% note 注意：`SECRET_PATH`仅使用大小写字母和数字进行编写即可（无`/`），`PARSE_URL`链接后面**没有**`/`，`BARK_URL`后面**有**`/` %}

#### telegram

```json inkrss/config/telegram/config.json
{
    "SECRET_PATH": "",
    "PARSE_URL": "",
    "TG_TOKEN": "",
    "TELEGRAPH_TOKEN": "",
    "TG_USERID": ,
    "TG_SENDID": 
}
```

{% note `TELEGRAPH_TOKEN`访问此[链接](https://api.telegra.ph/createAccount?short_name=ink&author_name=inkrss)🪜截取其中`access_token`的值 %}

```json 返回值
{
  "ok":true,
  "result":
  {
    "short_name":"ink",
    "author_name":"inkrss",
    "author_url":"",
    "access_token":"a33381d987e5d199e4881e425e3bd2ddffe4b97afd68b879648fb556c1e0",
    "auth_url":"https:\/\/edit.telegra.ph\/auth\/pPLiD5dyXz4C2J2y85XshYcfniFbF8n2V6kybx7969"
  }
}
```

#### 微信

```json inkrss/config/wechat/config.json
{
    "SECRET_PATH": "",
    "PARSE_URL": "",
    "WECHAT_URL": ""
}
```

部署麻烦，到现在都没整明白怎么微信推送

### 构建推送到cloudflare
    
{% copy wrangler publish %}

{% folding child:codeblock 返回值 %}
```bash
    Your configuration file is missing compatibility_date, so a past date is assumed.
    To get the latest possibly-breaking bug fixes, add this line to your wrangler.toml:

        compatibility_date = "2022-10-27"

    For more information, see: https://developers.cloudflare.com/workers/platform/compatibility-dates

 Built successfully, built project size is 221 KiB.
 Using namespace for Workers Site "__inkrss-workers_sites_assets"
⠴   Preparing ./public\_next\static\media\noto-sans-sc-all-500-normal.189af95d2b Success
 Uploading site files
 Successfully published your script to
 https://inkrss.xxxxxx.workers.dev
with this schedule
 */30 * * * *
```
{% endfolding %}

要是没有报错就OK，它会返回一个url，这个就是你的workers地址

你可以访问 https://inkrss.xxx.workers.dev/secret_path 进入前端控制台

### 绑定自定义域名
    
同样由于和vercel一样的原因，workers.dev在国内也是无法正常访问的🪜，所以白嫖一个域名托管到cloudflare解析到workers就可以啦

部署完成后你可以到Cloudflare Workers的日志中查看Workers工作的状态（初次部署得等一段时间）

然后你就可以去 https://your-domain/secret_path 开启愉快得玩耍啦，更多进阶玩法可以自行去官网查看官方文档吼