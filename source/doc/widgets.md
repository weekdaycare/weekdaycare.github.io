---
wiki: doc 
menu_id: doc 
title: widgets.yml
h1: 小组件配置
---

您可以在这里创建属于自己的侧边栏组件库，在主题配置的相应位置放置自己的组件，`layout` 即组件布局模板，支持自定义的有：
- markdown: 渲染 md 文本

```yaml blog/source/_data/widgets.yml
# welcome 为组件名，可自由设置，在主题配置中会引用到，其他组件同理
welcome: 
  layout: markdown
  title: 你好，旅人：
  content: | 
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script><span id="hitokoto">一言ing……</span>

# --------- 内置组件请不要改动 ----------
# github 仓库，在 wiki 或者其他页面设置显示 ghrepo 时会用到
ghrepo:
  layout: ghrepo

# 相关 wiki，在主题配置文件中设置该项会在侧边栏中展示相关的 wiki
related:
  layout: related
# ----------------

# 展示 github 仓库
ghissues:
  layout: ghissues
  title: # Recent Issues
  limit: 3 # 显示的issues最大数量
  labels: # 过滤只显示具有某些标签的issues

# 将其覆盖设置为空，可删除一个默认组件，例如 welcome:
# Recent update
recent:
  layout: recent
  rss: # /atom.xml # npm i hexo-generator-feed
  limit: 10 # Count of posts

# TOC (valid only in layout:post/wiki)
toc:
  layout: toc
  list_number: false
  min_depth: 2
  max_depth: 4
  fallback: # recent # Use a backup widget when toc does not exist.
  collapse: false # true / false / auto

# github user info
ghuser:
  layout: ghuser
  username: github # your github login username
  avatar: true # show avatar or not
  menu: true # show menu or not

tagcloud:
  layout: tagcloud
  title: 标签云
  # 标签云配置
  min_font: 12
  max_font: 24
  amount: 100
  orderby: name
  order: 1 # 1, sac 升序；-1, desc 降序
  color: false # 使用颜色
  start_color: # 开始的颜色。您可使用十六进位值（#b700ff），rgba（rgba(183, 0, 255, 1)），hsla（hsla(283, 100%, 50%, 1)）或 颜色关键字。此变量仅在 color 参数开启时才有用。
  end_color: # 结束的颜色，设置同上
  show_count: false # 显示每个标签的文章总数

timeline:
  layout: timeline
  title: 近期动态
  api: # https://api.github.com/repos/xaoxuu/hexo-theme-stellar/issues?per_page=3 # 通过 api 上增加 per_page 来限制获取的数量
  user: # 默认显示所有人的数据，设置名称可过滤为仅显示某人的数据，多个名称用英文逗号隔开，不要加空格
  type: # 默认不写，如果是友链朋友圈数据请写 fcircle
  limit: # 默认不写，如果是友链朋友圈，可通过这个设置数量
```