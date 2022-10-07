---
title: Speak
date: 2022-10-08 00:50:11
comments: false
---

<center>🍭欢迎你的来访</center>

<center>🍭这里是我的speak页面</center>

<div id="tip" style="text-align:center;">ipseak加载中</div>
<div id="ispeak"></div>
<link
  rel="stylesheet"
  href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/ispeak@4.4.0/style.css"
/>

<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>

<script src="https://cdn.staticfile.org/marked/2.0.0/marked.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/ispeak@4.4.0/ispeak.umd.js"></script>

<!-- CSS -->

<!-- JS -->
<script>
  var head = document.getElementsByTagName('head')[0]
  var meta = document.createElement('meta')
  meta.name = 'referrer'
  meta.content = 'no-referrer'
  head.appendChild(meta)
  if (ispeak) {
    ispeak
      .init({
        el: '#ispeak',
        api: 'https://weetalk.tk/',
        author: '633d47f5ba160b6b32db2e2b',
        pageSize: 15,
        loading_img: 'https://bu.dusays.com/2021/03/04/d2d5e983e2961.gif'
      })
      .then(function () {
        console.log('ispeak 加载完成')
        document.getElementById('tip').style.display = 'none'
      })
  } else {
    document.getElementById('tip').innerHTML = 'ipseak依赖加载失败！'
  }
</script>
