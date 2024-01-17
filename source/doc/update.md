---
layout: wiki
wiki: doc 
menu_id: doc 
title: 跟随更新
---

## 1.26.0

### ⚠️ 主题配置变更

search 组件大改，现在请将 `/_data/widget.yml` 中的 `search` 组件删除，默认会配置好 wiki 和 post 的 `search` 组件，可以看到新的配置文件中均没有 search 组件 [# widgets.yml](https://github.com/xaoxuu/hexo-theme-stellar/blob/main/_data/widgets.yml)

```yaml blog/_config.stellar.yml
######## Main ########
# 站点主结构树
site_tree:
  # 主页配置
  home:
    sidebar: recent, timeline
  # 博客列表配置
  blog:
    base_dir: blog # 只影响自动生成的页面路径
    menu_id: post # 未在 front-matter 中指定 menu_id 时，layout 为 post 的页面默认使用这里配置的 menu_id
    sidebar: recent, timeline # for categories/tags/archives
    nav_tabs:  # 近期发布 分类 标签 专栏 归档 and ...
      # '朋友文章': /friends/rss/
  # 博客文章配置
  post:
    menu_id: post # 未在 front-matter 中指定 menu_id 时，layout 为 post 的页面默认使用这里配置的 menu_id
    sidebar: toc, related, ghrepo, ghissues, recent # for pages using 'layout:post'
  # 博客专栏配置
  topic:
    base_dir: topic # 只影响自动生成的页面路径
    menu_id: post # 未在 front-matter 中指定 menu_id 时，layout 为 topic 的页面默认使用这里配置的 menu_id
    sidebar: toc, related # for topic
  # wiki配置
  wiki:
    base_dir: wiki # 只影响自动生成的页面路径
    menu_id: wiki # 未在 front-matter 中指定 menu_id 时，layout 为 wiki 的页面默认使用这里配置的 menu_id
    sidebar: toc, ghissues, related, recent # for wiki
  # 作者信息配置
  author: 
    base_dir: author # 只影响自动生成的页面路径
    menu_id: post
    sidebar: recent, timeline
  # 错误页配置
  error_page:
    menu_id: post
    '404': '/404.html'
    sidebar: recent, timeline
  # 其它自定义页面配置 layout: page
  page:
    sidebar: toc, timeline
```

## 1.25.0

### ⚠️ 主题配置变更

Sidebar 配置大改，比起看文字说明，对照新配置文件改更快

```yaml blog/_config.stellar.yml
######## Sidebar ########
# 左上角显示的 logo 区域，包含图标、大标题、副标题
logo:
  avatar: '[config.avatar](/about/)' # you can set avatar link in _config.yml or '[https://xxx.png](/about/)'
  title: '[config.title](/)' # you can set html tag like: '[<img no-lazy height="32px" src="xxx"/>](/)'
  subtitle: '' # '文字1 | 文字2' (鼠标放上去会切换到文字2)

# 侧边栏主功能导航菜单
# 自己可以增加任意的键值对
# 键：就是 menu_id，后面需要用到
# 值：就是显示的 md 链接，方括号内支持文字和图片标签
menu:
  # post: '[btn.blog](/)'
  # wiki: '[btn.wiki](/wiki/)'
  # friends: '[友链](/friends/)'
  # about: '[关于](/about/)'

######## Main ########
# 站点主结构树
site_tree:
  # 主页配置
  home:
    sidebar: search, recent, timeline
  # 博客配置
  blog:
    base_dir: blog # 只影响自动生成的页面路径
    menu_id: post # 未在 front-matter 中指定 menu_id 时，layout 为 post 的页面默认使用这里配置的 menu_id
    sidebar: search_blog, recent, timeline # for categories/tags/archives
    nav_tabs:  # 近期发布 分类 标签 专栏 归档 and ...
      # '朋友文章': /friends/rss/
  # 博客文章配置
  post:
    menu_id: post # 未在 front-matter 中指定 menu_id 时，layout 为 post 的页面默认使用这里配置的 menu_id
    sidebar: search_blog, toc, related, ghrepo, ghissues # for pages using 'layout:post'
  # 博客专栏配置
  topic:
    base_dir: topic # 只影响自动生成的页面路径
    menu_id: post # 未在 front-matter 中指定 menu_id 时，layout 为 topic 的页面默认使用这里配置的 menu_id
    sidebar: search_blog, toc, related # for topic
  # wiki配置
  wiki:
    base_dir: wiki # 只影响自动生成的页面路径
    menu_id: wiki # 未在 front-matter 中指定 menu_id 时，layout 为 wiki 的页面默认使用这里配置的 menu_id
    sidebar: search_docs, toc, ghissues, related # for wiki
  # 作者信息配置
  author: 
    base_dir: author # 只影响自动生成的页面路径
    menu_id: post
    sidebar: search_blog, recent, timeline
  # 错误页配置
  error_page:
    menu_id: post
    '404': '/404.html'
    sidebar: search, recent, timeline
  # 其它自定义页面配置 layout: page
  page:
    sidebar: toc, search
```

### 功能新增

1. 新增「专栏」功能 [实现博客专栏/专题](https://xaoxuu.com/wiki/stellar/topic.html)

2. audio 标签组件现在支持 netease 歌曲歌单 [#audio-音频标签](https://xaoxuu.com/wiki/stellar/tag-plugins/express/#audio-%E9%9F%B3%E9%A2%91%E6%A0%87%E7%AD%BE)
   - 歌曲 `{% audio netease:1856385686 %}`
   - 歌单 `{% audio type:0 netease:9145113820 autoplay:1 %}`
   - 音乐外链不支持autoplay参数

3. video 标签组件支持设置最大宽度 [#video-视频标签](https://xaoxuu.com/wiki/stellar/tag-plugins/express/#video-%E8%A7%86%E9%A2%91%E6%A0%87%E7%AD%BE)
   - `{% video bilibili:BV1GP4y1d729 width:100% autoplay:1 %}`
   - `{% video https://...mov width:100% %}`
   - `width` 须**设置单位**，如80%、500px、10em...
   - 视频外链不支持autoplay参数

## 1.24.1

### 功能新增

video 标签组件现在支持 bilibili [#video](https://xaoxuu.com/wiki/stellar/tag-plugins/express/#video-%E8%A7%86%E9%A2%91%E6%A0%87%E7%AD%BE)

使用方法 `{% video bilibili:BV1GP4y1d729 %}`

## 1.24.0 

### ⚠️ 标签写法变更

[grid-网格分区容器](https://xaoxuu.com/wiki/stellar/tag-plugins/container/index.html#grid-%E7%BD%91%E6%A0%BC%E5%88%86%E5%8C%BA%E5%AE%B9%E5%99%A8) 写法变更，从原来的 `<!-- cell left/right -->` 变为 `<!-- cell -->` 。不再支持 `left/right` ，同时该组件**支持设置列数、列宽、间距、圆角**了。此处给出查找替换用的正则表达式

```
<!--\s*cell\s+(left|right)\s*-->
替换为
<!-- cell -->
```

### 功能新增

1. 新增 [md 标签组件](https://xaoxuu.com/wiki/stellar/tag-plugins/data/#md-%E6%B8%B2%E6%9F%93%E5%A4%96%E9%83%A8-markdown-%E6%96%87%E4%BB%B6)，使用方法为 `{% md https://...md %}` 同时侧边栏 markdown 小组件也支持渲染外部 markdown 文件，在小组件配置中加入 src 字段即可，具体看[#markdown](https://xaoxuu.com/wiki/stellar/widgets/#markdown)

2. 新增 [audio 组件](https://xaoxuu.com/wiki/stellar/tag-plugins/express/index.html#audio-%E9%9F%B3%E9%A2%91%E6%A0%87%E7%AD%BE)，使用方法为 `{% audio https://...mp3 %}`

3. 新增 [video 组件](https://xaoxuu.com/wiki/stellar/tag-plugins/express/index.html#video-%E8%A7%86%E9%A2%91%E6%A0%87%E7%AD%BE)，使用方法为 `{% video https://...mov %}`

4. 设置好默认作者或者文章作者后（1.23.0版本支持），在 [license](https://xaoxuu.com/wiki/stellar/pages/#许可协议) 中可以使用 ${author.name} 来自动替换为当前文章作者名字，`_config.stellar.yml` 和 `_data/wiki/hexo-stellar.yml` 中的 license 均可。

## 1.23.0

waiting for write...