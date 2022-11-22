---
title: Hello World
tags:
  - hexo
categories:
  - 奇技淫巧
abbrlink: hello
date: 2021-11-16 17:13:47
updated: 2021-11-16 17:13:47
---

Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

<!-- more -->

这里仅记录一些我常用的语法

## 文本修饰标签集

- 支持多彩标记标签，包括：{% mark 默认 %}{% mark 红 color:red %}{% mark 橙 color:orange %}{% mark 黄 color:yellow %}{% mark 绿 color:green %}{% mark 青 color:cyan %}{% mark 蓝 color:blue %}{% mark 紫 color:purple %}{% mark 浅 color:light %}{% mark 深 color:dark %} 一共 10 种颜色。  
- 这是 {% psw 密码 %} 标签  
- 这是 {% u 下划线 %} 标签  
- 这是 {% emp 着重号 %} 标签  
- 这是 {% wavy 波浪线 %} 标签  
- 这是 {% del 删除线 %} 标签  
- 这是 {% sup 上角标 color:red %} 标签  
- 这是 {% sub 下角标 %} 标签  
- 这是 {% kbd 键盘样式 %} 标签，试一试：{% kbd ⌘ %} + {% kbd D %} 

{% folding 多彩标记 codeblock:true open:false color:light %}
```markdown
- 支持多彩标记标签，包括：{% mark 默认 %}{% mark 红 color:red %}{% mark 橙 color:orange %}{% mark 黄 color:yellow %}{% mark 绿 color:green %}{% mark 青 color:cyan %}{% mark 蓝 color:blue %}{% mark 紫 color:purple %}{% mark 浅 color:light %}{% mark 深 color:dark %} 一共 10 种颜色。  
- 这是 {% psw 密码 %} 标签  
- 这是 {% u 下划线 %} 标签  
- 这是 {% emp 着重号 %} 标签  
- 这是 {% wavy 波浪线 %} 标签  
- 这是 {% del 删除线 %} 标签  
- 这是 {% sup 上角标 color:red %} 标签  
- 这是 {% sub 下角标 %} 标签  
- 这是 {% kbd 键盘样式 %} 标签，试一试：{% kbd ⌘ %} + {% kbd D %}  
```
{% endfolding %}
