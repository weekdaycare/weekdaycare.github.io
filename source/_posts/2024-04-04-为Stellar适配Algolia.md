---
title: Stellar适配Algolia DocSearch
tags: 
- 代码
- Stellar
- 编程
categories: [奇技淫巧]
poster:
  topic: 标题上方的小字
  headline: 大标题
  caption: 标题下方的小字
  color: 标题颜色
date: 2024-04-04 15:22:58
description: DocSearch 启动！
cover:
banner:
abbrlink: algolia-search
references:
  - '[GPT]()'
---

> PR 已合并，想看用法的直接跳到 [如何使用](#如何使用) 部分

作为一个静态博客哈，你们觉得最耗流量的的文件是啥呢？我先来，是我的 RSS 文件 `atom.xml` ，哈哈哈离题了离题了。不论如何，对于那些技术文档，一个好的搜索肯定是必不可少的，但是同样的，基于技术文档庞大的文本量，生成的本地搜索文件，{% del 那也是不可忽视的流量大户 %}（有缓存当我没说{% emoji blobcatgooglytrash	 %}），巴拉巴拉反正多一个方法多一种选择何乐而不为捏。

> 原谅我这史一样的代码水平

## 引入 EJS 模板

```ejs
<script>
  window.addEventListener('DOMContentLoaded', (event) => {
    window.searchConfig = {
      appId: '<%- conf.appId %>', 
      apiKey: '<%- conf.apiKey %>', 
      indexName: '<%- conf.indexName %>', 
      hitsPerPage: 100, 
    };
    utils.js('https://gcore.jsdelivr.net/algoliasearch/3/algoliasearch.min.js', { defer: true });
    utils.js('/js/search/algolia-search.js', { defer: true });
  });
</script>
```

本来想用[渺软公益CDN](https://cdn.onmicrosoft.cn/)的，没想到点击页面一看在两天前就停止服务了，唉，哀悼惋惜。

## JS 搜索

```js
utils.jq(() => {
  var $inputArea = $("input#search-input");
  if ($inputArea.length === 0) {
    return;
  }

  var $resultArea = $("#search-result");
  var $searchWrapper = $("#search-wrapper");
  var client = algoliasearch(window.searchConfig.appId, window.searchConfig.apiKey);
  var index = client.initIndex(window.searchConfig.indexName);

  function displayResults(hits) {
    var $resultList = $("<ul>").addClass("search-result-list");
    if (hits.length === 0) {
      $searchWrapper.addClass('noresult');
    } else {
      $searchWrapper.removeClass('noresult');
      hits.forEach(function(hit) {
        var contentSnippet = hit._snippetResult.content.value;
        var title = hit.hierarchy.lvl1 || 'Untitled';
        var $item = $("<li>").html(`<a href="${hit.url}"><span class='search-result-title'>${title}</span><p class="search-result-content">${contentSnippet}</p></a>`);
        $resultList.append($item);
      });
    }
    $resultArea.html($resultList);
  }

  $inputArea.on("input", function() {
    var query = $(this).val().trim();

    if (query.length <= 0) {
      $searchWrapper.attr('searching', 'false');
      $resultArea.empty();
      return;
    }

    $searchWrapper.attr('searching', 'true');

    index.search(query, {
      hitsPerPage: window.searchConfig.hitsPerPage,
      attributesToHighlight: ['content'],
      attributesToSnippet: ['content:30'],
      highlightPreTag: '<span class="search-keyword">',
      highlightPostTag: '</span>',
      restrictSearchableAttributes: ['content']
    }).then(function(responses) {
      displayResults(responses.hits);
    });
  });

  $inputArea.on("keydown", function(e) {
    if (e.which == 13) {
      e.preventDefault();
    }
  });

  var observer = new MutationObserver(function(mutationsList) {
    if (mutationsList.length === 1) {
      if (mutationsList[0].addedNodes.length) {
        $searchWrapper.removeClass('noresult');
      } else if (mutationsList[0].removedNodes.length) {
        $searchWrapper.addClass('noresult');
      }
    }
  });

  observer.observe($resultArea[0], { childList: true });
});
```

## 如何使用

首先你得是技术类博客或者项目文档，然后你才能申请 `DocSearch` ，会有人工审核。

{% link https://docsearch.algolia.com/apply/ %}

一般几个小时之后就会回复你一封邮件

> Congratulations, your search is now ready! We've successfully created your DocSearch app, please follow the steps in order to implement DocSearch on your website

邮件中会带有你的 `appId` `apiKey` `indexName`

```js
<script type="text/javascript">
  docsearch({
    appId: "xxxxx",
    apiKey: "xxxxxxxxxxxxxx",
    indexName: "xxxxxxxxxx",
    container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###'
    debug: false 
  });
</script>
```

拿到这三个参数后往下填就完了。

```yaml
search:
  service: algolia_search
  algolia_search:
    appId: 'xxxxxxxxx'
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxx'
    indexName: 'xxxxxxx'
```

## 还有一件事

由于 DocSearch 要求要在搜索结果中展示 `Power by Algolia` 但是我改了样式，所以用输入框的 `placeholder` 代替吧。

我的代码 belike:

{% image https://bu.dusays.com/2024/04/04/660e64ab31ea9.webp %}