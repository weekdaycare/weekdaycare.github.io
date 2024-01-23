---
wiki: doc 
menu_id: doc 
title: 跟随更新
---

{% quot 1.27.0 el:h2 icon:hashtag %}

### ⚠️ 主题配置变更

#### 取消 layout: wiki

不再需要在 wiki 类页面文章的 `front-matter` 中设置 `layout: wiki`，例如

```yaml blog/source/wiki/stellar/index.md
---
wiki: hexo-stellar # 这是项目id，对应 /data/wiki/hexo-stellar.yml
title: 这是分页标题
---
```

#### 引用版本更新

`jquery`,`flying_pages`,`lazyload`,`highlightjs_theme`,`fancybox`的`js`,`css`版本引用更新

> 具体见该条[commit](https://github.com/xaoxuu/hexo-theme-stellar/commit/afb0e5f734f13f8631968f036b3ae05b18c5ce14) 和该条 [commit](https://github.com/xaoxuu/hexo-theme-stellar/commit/c640310b06e9de09b96d070be11ae0a7e9ee70c6)

{% quot 1.26.0 el:h2 icon:hashtag %}

### ⚠️ 写法变更

#### pin 不再支持

不再支持在front-matter中设置 `pin: true` 来置顶，因为官方已经支持该功能，方法为： `sticky: 数字`

好像是按数字升序排序吧？数字越大越排前，我没用过，自测。

### ⚠️ 主题配置变更

#### path 路径更改

原 wiki、笔记的项目配置中的 `path` 变为 `base_dir`

```yaml blog/source/_data/wiki/xxx.yml
base_dir: /wiki/stellar/
```

#### logo 配置

从 `[config.avatar]` 变为 `[${config.avatar}]` 和 `[${config.title}]`

```yaml blog/_config.stellar.yml
logo:
  avatar: '[${config.avatar}](/about/)' # you can set avatar link in _config.yml or '[https://xxx.png](/about/)'
  title: '[${config.title}](/)' # you can set html tag like: '[<img no-lazy height="32px" src="xxx"/>](/)'
```

#### subtitle 配置

subtitle 现在已从 `_config.yml` 移至主题配置 `_config.stellar.yml` 中

#### search 组件

search 组件大改，搜索框不再是组件，而是独立功能，现在请将 `/_data/widget.yml` 中的 `search` 组件删除，默认会配置好 wiki 和 post 的 `search` 组件，可以看到新的配置文件中均没有 search 组件 [# widgets.yml](https://github.com/xaoxuu/hexo-theme-stellar/blob/main/_data/widgets.yml)

支持在 front-matter 和项目配置文件中覆盖参数

{% folding site_tree child:codeblock %}
```yaml blog/_config.stellar.yml
######## Main ########
# 站点主结构树
site_tree:
  # -- 列表类页面 -- #
  # 主页配置
  home:
    sidebar: welcome, recent, timeline
  # 博客列表页配置
  index_blog:
    base_dir: blog # 只影响自动生成的页面路径
    menu_id: post # 未在 front-matter 中指定 menu_id 时，layout 为 post 的页面默认使用这里配置的 menu_id
    sidebar: welcome, recent, timeline # for categories/tags/archives
    nav_tabs:  # 近期发布 分类 标签 专栏 归档 and ...
      # '朋友文章': /friends/rss/
  # 博客专栏列表页配置
  index_topic:
    base_dir: topic # 只影响自动生成的页面路径
    menu_id: post # 未在 front-matter 中指定 menu_id 时，layout 为 topic 的页面默认使用这里配置的 menu_id
  # 文档列表页配置
  index_wiki:
    base_dir: wiki # 只影响自动生成的页面路径
    menu_id: wiki # 未在 front-matter 中指定 menu_id 时，layout 为 wiki 的页面默认使用这里配置的 menu_id
    sidebar: toc, ghissues, related, recent # for wiki
    nav_tabs:
      # 'more': https://github.com/xaoxuu
  # -- 内容类页面 -- #
  # 博客文章内页配置
  post:
    menu_id: post # 未在 front-matter 中指定 menu_id 时，layout 为 post 的页面默认使用这里配置的 menu_id
    sidebar: toc, related, ghrepo, ghissues, recent # for pages using 'layout:post'
  # 博客专栏文章内页配置
  topic:
    menu_id: post
  # 文档内页配置
  wiki:
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
    sidebar: toc, recent, timeline
```
{% endfolding %}

#### menu 导航栏

配置写法变更，由 `menu` 变为 `menubar` 现在可以在 menu 使用 icon 代替文字，没法icon和文字一起显示哈。

> 如果不想设置 icon 高亮的 color，但是又因为主题在反色的时候黑色的icon会看不见，这里教一个方法，填入 `theme: var(--text-p0)` 图标的颜色就能跟随主题切换颜色了。

{% folding 新的写法 child:codeblock %}
```yaml 
menubar:
  columns: 4 # 一行多少个
  items: # 可按照自己需求增加，符合以下格式即可
    # id: 页面中高亮的 menu_id 
    # theme: 高亮时的颜色，仅 svg 中 fill="currentColor" 时有效
    # icon: 支持 svg/img 标签，可以定义在 icons.yml 文件中，也支持外部图片的 URL
    # title: 标题
    # url: 点击跳转到哪，支持相对路径和绝对路径
    # - id: post
    #   theme: '#1BCDFC'
    #   icon: solar:documents-bold-duotone
    #   title: 博客
    #   url: /
    # - id: wiki
    #   theme: '#3DC550'
    #   icon: solar:notebook-bookmark-bold-duotone
    #   title: 文档
    #   url: /wiki/
    # - id: explore
    #   theme: '#FA6400'
    #   icon: solar:planet-bold-duotone
    #   title: 探索
    #   url: /explore/
    # - id: social
    #   theme: '#F44336'
    #   icon: solar:chat-square-like-bold-duotone
    #   title: 社交
    #   url: /friends/
```
{% endfolding %}

{% folding 旧的写法 child:codeblock %}
```yaml _config.stellar.yml
menu:
  # post: '[btn.blog](/)'
  # wiki: '[btn.wiki](/wiki/)'
  # friends: '[友链](/friends/)'
  # about: '[关于](/about/)'
```
{% endfolding %}

### 功能新增

#### AI摘要

AI摘要支持 `limit` 限制参数了（我水的pr哈哈）

```yaml _config.stellar.yml
# AI 摘要
tianli_gpt:
  enable: true
  field: post # all, post, wiki
  api: 5Q5mpqRK5DkwT1X9Gi5e # 填写你的tianliGPT_key
  limit: 1000 # 设置提交的字数限制，默认为1000字，上限为5000，超过5000字符将被截断。
  typingAnimate: true # 打字机动画 
```

#### 文章类型

支持设置 `article.type` 来增大字体和图文间距，以优化图文类博客阅读体验

```yaml
article:
  type: tech # tech: 默认技术类文章, story: 图文类文章，文字和段落间增距大
```

支持在 `front-matter/topic/wiki` 中覆盖设置

#### icon 图标

在 `_data/icons.yml` 中配置图标，参考 [icons.yml](https://github.com/xaoxuu/hexo-theme-stellar/blob/main/_data/icons.yml)

#### linklist 组件

新增 `linklist` 侧边栏小组件，支持图标、网格和列表布局。可与 md 组件嵌套。

#### 侧边栏背景

侧边栏支持设置背景图、高速模糊、渐变效果。按照[主题文件](https://github.com/xaoxuu/hexo-theme-stellar/blob/14550d8d3a11eaef2eeec5352841abc8d0342df9/_config.yml#L515-L521)配置。

{% quot 1.25.0 el:h2 icon:hashtag %}

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

{% quot 1.24.1 el:h2 icon:hashtag %}

### 功能新增

video 标签组件现在支持 bilibili [#video](https://xaoxuu.com/wiki/stellar/tag-plugins/express/#video-%E8%A7%86%E9%A2%91%E6%A0%87%E7%AD%BE)

使用方法 `{% video bilibili:BV1GP4y1d729 %}`

{% quot 1.24.0 el:h2 icon:hashtag %}

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

{% quot 1.23.0 el:h2 icon:hashtag %}

waiting for write...