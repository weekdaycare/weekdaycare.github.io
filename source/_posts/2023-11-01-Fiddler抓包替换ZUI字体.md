---
title: Fiddler抓包替换ZUI字体
tags: 
- 整活
- 教程
categories: [奇技淫巧]
poster:
  topic: 标题上方的小字
  headline: 大标题
  caption: 标题下方的小字
  color: 标题颜色
date: 2023-11-01 14:48:10
description:
cover:
banner:
abbrlink: zui-font
---

最近联想的小新pad pro 12.7是真的香啊，一千三的价格带着870的配置真的是杀穿了啊，这个配置同价位无敌没意见吧？不过看基安反应这板子良品率堪忧，屏幕坏点进灰好像挺多的，充电口松动屏幕斜纹都是通病了，不过俗话说得好，没有卖不出去的产品只有卖不出去的价格，这个价格，缺点？我看不见！

板子到手我应该是运气比较好的吧，看着屏幕没有坏点。板子是好板子，不过，联想这系统……一言难尽，自定义太拉了，商店里带的主题又少又难看，也不能自定义字体，拉跨。虽然很想等大佬开发出MIUI的移植包，但是这个板子太新了，MIUI的包还得再等等，加上联想解锁bl丢保修，虽然说我不怎么在意保修，不过为了保险起见还是等包出来了再解锁吧。话不多说，直接开始吧。

## Fiddler

首先保证电脑和平板在同一局域网下，需要在电脑上安装 [Fiddler Classic](https://www.telerik.com/fiddler) ，直接官网安装即可。

打开 Fiddler ，我们需要生成ca证书安装到平板上以便电脑能够代理平板的流量。打开顶栏 `Tools` -> `Options` -> `Decrypt HTTPS traffic` ，这一项是解密 HTTPS 流量。

{% image https://bu.dusays.com/2023/11/02/65428a5b0e3fa.webp %}

然后我们点击顶栏的 Connections 查看端口号，默认是 8888，同时需要打开下方的 `Allow remote computers to connect`。

{% image https://bu.dusays.com/2023/11/02/654289d55790c.webp %}

现在打开你的电脑终端查看电脑的局域网ipv4地址，我的是 `172.20.10.2`，平板上打开 `设置` -> `WIFI` -> `选择你连接的WIFI` -> `右上角编辑` -> `高级选项` -> `代理` -> `手动` 填入你的电脑局域网ip地址以及对应端口。

{% image https://bu.dusays.com/2023/11/01/654271829567e.webp %}

完成后打开平板浏览器，输入 `ip:8888` ，会显示 Fiddler Echo Service，点击下方 FiddlerRoot certificate 下载cer证书，然后打开设置，搜索CA证书，输入平板密码，安装刚刚下载的证书。

{% image https://bu.dusays.com/2023/11/01/654273e141004.webp %}

安装完成后，我们随便打开一个浏览器网页，如果在电脑上看到了请求链接那么说明配置成功，前期准备工作至此完成。

## 抓包字体文件

进入联想的字体商城，随便选择一款免费的字体下载，我这里选择的是嘉丽书宋，进入字体界面的时候大概率网络会出现无法连接网络然后闪退，我们暂时切换至另一个正常网络进入字体详情页面后切换回来，下载字体，平板上显示0%没有关系，我们回到电脑，可以看到已经抓到字体文件的地址了，选中请求，右键 Copy Url，然后去浏览器打开这个链接，会下载这个字体文件 `TXJLSS.zf`。

{% image https://bu.dusays.com/2023/11/02/65428956f0187.webp %}

直接改后缀为 `zip` 解压，里面只有四个文件 `font.ttf`、`font.xml`、`preview.png`、`small.png`，不用我多说，看文件名就知道各个文件是啥了吧。直接拿出我们自己的字体文件替换掉 `font.ttf` ，记得替换后的文件名称也要是 `font.ttf` ，如果你想的话还可以改 xml 文件，里面是字体的作者信息。改完了打包回 `zip` 文件，改后缀为 `.zf` 。

```
TXJLSS.zf
└── TXJLSS
    ├── font.ttf
    ├── font.xml
    ├── preview.png
    └── small.png
```

## 断点续传

打开 Fiddler 的拦截模式。

{% image https://bu.dusays.com/2023/11/02/654288f128b55.webp %}

注意了啊接下来手速要快，否则就得重来！依旧是任意下载免费字体，在Fiddler中选中请求地址

{% image https://bu.dusays.com/2023/11/02/6542888c7eed9.webp %}

如果手速慢了没有拦截到，那只能remake了，你会发现你再下载其他字体Fiddler拦截不到了。这个主要是因为他第一次下载字体失败了，你没有即使返回压缩包，后面就不会发送下载请求了。解决方法是先关掉断点续传，重新下载一遍正常的字体文件，再开启拦截。没抓到多试几次手速快一点就ok了。

成功拦截之后就可以直接应用字体啦，记得后面把CA证书和WIFI代理给删了，now enjoy！