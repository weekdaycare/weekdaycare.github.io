/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","63a6952e5d7fbd61e1ae72f4e957129c"],["/about/index.html","a5b625cb3d81d678bb005c59d07f6ea7"],["/archives/2021/11/index.html","66743bd88f9d6d5d1b4dd9d994b78e6b"],["/archives/2021/12/index.html","93c5dfc3a2afb3d61e3c9a4ed597453f"],["/archives/2021/index.html","42a62c999f74629696839140d2f83928"],["/archives/2022/05/index.html","d487bb763c2e13ee777fbbf55be89509"],["/archives/2022/06/index.html","62bcf483f43cf6860366c92721d8d1d0"],["/archives/2022/08/index.html","4b94d20e07b52925159df5c6c780a7fc"],["/archives/2022/09/index.html","d420935a0c8bcc81f57ee591822d5982"],["/archives/2022/10/index.html","f433cdc1c2940904e033e9df754f71db"],["/archives/2022/11/index.html","0dc9363afbc0ea3a02cb64b7dd56609a"],["/archives/2022/12/index.html","819335be9563715755cd6d7cbe09d928"],["/archives/2022/index.html","bc6d270404d9c5405a372372ddfdfde6"],["/archives/2022/page/2/index.html","2ac06ed767026a4a75860b40ed014ebf"],["/archives/2022/page/3/index.html","a6b7542b0b8fbeca6a4d49f7881561fc"],["/archives/2023/01/index.html","5ace471a4a1fb919a68b44ec30079f37"],["/archives/2023/03/index.html","f52de8ce3f45562f0baf0529f6c658bf"],["/archives/2023/05/index.html","05ee44f9129178ca6a9d6fd249b360d2"],["/archives/2023/07/index.html","212a64ab0bb670145dcf7eeee8952b8d"],["/archives/2023/08/index.html","acae35e9e456d0334274847fce70f885"],["/archives/2023/11/index.html","d9f0867361aed9a214af9dfe4ae7aaa3"],["/archives/2023/12/index.html","40b561930b18ad1430aa31e3dfe513d5"],["/archives/2023/index.html","ec1e637147a2ce45ac9dd1075a4b433f"],["/archives/2024/02/index.html","cea4b8dd7d2ec23b0518fc4627b2a886"],["/archives/2024/03/index.html","9f90286c341bd514ab60e20d36d32f0d"],["/archives/2024/04/index.html","53d87712b29a9b491fb8987904c0a40c"],["/archives/2024/index.html","43b546e6f81839c70bba1e957ad2c3e6"],["/archives/index.html","f29748c2745fee5f2ea626fe418f25a4"],["/archives/page/2/index.html","1e7ae70fc68252d2212149d4795627ca"],["/archives/page/3/index.html","c26905fffa8d6202476d109ba3718dfb"],["/archives/page/4/index.html","cfb2d9c2d55e97d5cbf2e8364a94f495"],["/archives/page/5/index.html","82dba8d9d2ed861912f821ee79efa233"],["/asset/avatar.svg","5f865d6baba73ccddbc55a0251cb4a27"],["/asset/favicon.svg","f1f1a1b736b4dfb888204f6a5cea24af"],["/asset/giscus.css","72b410d30ea31d5d9686b4e37198c873"],["/categories/index.html","dd3549ffffc02af4a1c100150cd1dd7b"],["/categories/奇技淫巧/index.html","8a56487e7a498e2eb3ea11c4b64fc10a"],["/categories/奇技淫巧/page/2/index.html","cf8a104479966df948ae8a6acb779507"],["/categories/学习感悟/index.html","24578d38435e60a15f7619b88eb21682"],["/categories/日常随笔/index.html","c89ac5eb06ede80e622cde32b9eba8c6"],["/categories/日常随笔/page/2/index.html","231a929b99fe72b72b6dffdef2ecf42c"],["/categories/杂七杂八/index.html","7d717aeec3f2c787ec07caef2c72b3bf"],["/css/main.css","52ed594d51d311d30915387c64c27ea2"],["/doc/comments.html","ca5e44d98ff2b17d42a87f8ca7595eb2"],["/doc/express.html","08c0d31fc0ed99a02171c6c9a44de9a8"],["/doc/front-matter.html","87073e947832344589213be6005c6edf"],["/doc/index.html","406adedacdaf2d2dee61b2df42218f3f"],["/doc/site-config.html","83d861c091cd2ab28bbfd52ab7d3424c"],["/doc/structure.html","4515d7a5ecf46aca4905973410682931"],["/doc/tag-plugins.html","fa39b47271d82dc41b0cc58a210bdb5b"],["/doc/theme-config.html","e42160fbe6c399fdda08ab9fd2f5ed4c"],["/doc/update.html","c0f3aff839cf24232293fc328f4c7593"],["/doc/widgets.html","c06bbccc2c26c975bebf7861cb7c24e6"],["/index.html","014a0518393ca77512362a6dc9b7b54a"],["/js/main.js","6cfa282aa09eea8b1981b74b7bf622b7"],["/js/plugins/copycode.js","cda01f861d3a91744b07fc282b43c0b8"],["/js/search/algolia-search.js","3c9e0450d3ba656692f69c9cca6468f2"],["/js/search/local-search.js","bdd6efc08f6bc6ee9a8af11a3633a416"],["/js/services/artalk_new.js","1649de88c2a7c49b79aee1f5529a4ab9"],["/js/services/fcircle.js","a6d050803bac61db70e3e8b4690f4859"],["/js/services/friends.js","2eacc2b7d0f9ed2c7c6932597b818cc8"],["/js/services/ghinfo.js","8287428a2b5ae937ecc999e7d7a96134"],["/js/services/mdrender.js","e20405085c6e2d05a3e7592e8141b15a"],["/js/services/memos.js","88a2133fd872c96fe298af7325172249"],["/js/services/siteinfo.js","4ea50ea959a391da1aebbedf3d806551"],["/js/services/sites.js","e332580fd438da0059712da3a70473b6"],["/js/services/timeline.js","8a96604ca8956476f58d2a90edfd59c9"],["/js/services/twikoo_new.js","101bf952284d157ff2717fd3acd09b09"],["/js/services/waline_new.js","6a26a6fbea0a34d270984129b76f9cbd"],["/js/services/weibo.js","4f30e6b22981e09f0746183c91170450"],["/page/2/index.html","1e72dd2b46285030c0e641fe6144a698"],["/page/3/index.html","6fd400452c6e51c0f8dd7b2e08dd1cd6"],["/page/4/index.html","99e146ff100b7bec6c13946ec551b1ba"],["/page/5/index.html","ef8491a2ff9e9a22aa8953a24f65cb46"],["/posts/2024/index.html","069af748e984bc89d3aec779fdb800e4"],["/posts/about-my-phone/index.html","3bc45a9f219aa52f0fb3a7c5d96be069"],["/posts/algolia-search/index.html","27793eb444fe6cad55572a2d44c550c5"],["/posts/big-orange/index.html","5fe65bb2bb048e3bf7d39a38ff1bc5b0"],["/posts/brazier/index.html","93ce592c688ef7b50b78c74ab03da510"],["/posts/c-study/index.html","b29a5ff19c8117d740791e7733e4ee1b"],["/posts/cad-draw/index.html","525280d5e3d53b714216716afa58c699"],["/posts/changan/index.html","bf9704be67b2244db817526cda0e44b8"],["/posts/chengdu/index.html","5caaa5d56de97aaee97e5155fc06f286"],["/posts/cloudflare-pages/index.html","07b78637dc81e55833c18af370f756e4"],["/posts/data-structure/index.html","52dbf1e2da06c9a9fc4a23aad6e3f2d9"],["/posts/disease-diagnosis/index.html","ea944c6854cae3b8b457cea89257f0cd"],["/posts/emoji-blob/index.html","7c04cdf51cb29393ceb95591deef31b5"],["/posts/finger-scarf/index.html","0b7b2984840586f11aaaf206cd559c3d"],["/posts/fix-swiper-invalid/index.html","f550c6b7ed0ad1e8f8c1b55b4c62f4f8"],["/posts/handwriting-numerals-recognition/index.html","a4978a18358eaa68bafd472f61246d3b"],["/posts/hello/index.html","765b040eb9dc56c8ff19a4a274bc5ebc"],["/posts/hometown/index.html","c2b0a8ea2a85ac8b47b1d91e0656824f"],["/posts/hutao-shake/index.html","acd4a32258786c6ea4db4bdd10e8d8f6"],["/posts/inkrss/index.html","80ccfc221a1383161331723fe78a1b11"],["/posts/ispeak-depoly/index.html","5da5368d8e7294fde16014c7821dde5a"],["/posts/mail-massacre/index.html","767af73fb31364d36578e1bdc9c76421"],["/posts/ondrive/index.html","17ac631a26fe360c56a6f93969ac9e37"],["/posts/onedrive+rclone/index.html","aaa07aece469187ce5d4c394f587b5cd"],["/posts/past-summer/index.html","a2ae6267b7078b43f685036c843e240f"],["/posts/rickroll-pi/index.html","e37f8a93ceec336a35fa80476948cd5a"],["/posts/rss/index.html","bb5acb9dfdd7c2fe8da52e333592c0a5"],["/posts/singular-value/index.html","10e9789844ddf669df9a471940490fcf"],["/posts/stellar-beautify-one/index.html","c035c7567c0078c131e39add6c74d4a1"],["/posts/stellar-friends/index.html","ddfc0a487b07251916b6962c576d775d"],["/posts/stellar-update/index.html","12762af52366894099837994cda26a8b"],["/posts/summer-time/index.html","2af3ec9a13bffa849e571e2d2bf3415a"],["/posts/summer-work/index.html","bbfa0e01bf3283a5cdeadae472d5a3e9"],["/posts/ten-years/index.html","960ab15536ec71ae2ffb1ddd52d135fd"],["/posts/twikoo-new/index.html","a69901cf481a0460c194a17a25263ab7"],["/posts/umami/index.html","c84f306387548fd70b603c4276eebfa7"],["/posts/vector-analysis/index.html","d3e929be660e1dc9229bc7dff8ee528b"],["/posts/work-run/index.html","9fbfd8191864d5015299f7273e80e598"],["/posts/yingti-0to1/index.html","d38b62520a249825938ee0851d578abe"],["/posts/z-inverse-transformation/index.html","7a0a3c923d27f83e6b52a4a8c8642b9e"],["/posts/zui-font/index.html","79884d4a8ce0b60a31ccaec3cae7dc89"],["/shuoshuo/index.html","4b773e243922a8df3b030f42f9e89f2d"],["/sw-register.js","33499319cc2af210f3fb91cfa47b5ecb"],["/tags/Linux/index.html","ffbc6128a367a866e59fa60f0d4e2ba3"],["/tags/RickRoll/index.html","c24c56dde87bcc4d64627a4f8f3e2c49"],["/tags/Stellar/index.html","0a8cf17641806a8de266641adf2c3036"],["/tags/hexo/index.html","d5511abca090a989223e40d1b21de3f4"],["/tags/index.html","df587c19d8969b8bf52bba852bed0896"],["/tags/rss/index.html","70d87980f5011693f995670a6ac1f2f7"],["/tags/代码/index.html","e303473ac67a53cd05fa5f8490509f9c"],["/tags/体验/index.html","9a1e5fd626ee7b2d8edddd2c06fc7fef"],["/tags/作业/index.html","9b7f2d03544f8677d1faf2aa53522f90"],["/tags/回忆/index.html","b0c40a4f466083e95db6ce4b497fe8e2"],["/tags/夏天/index.html","60cb68f6c2d87ee7224d95a4f0d42ae7"],["/tags/失败/index.html","c5fcc9d3cde05ec996cf0ab9514b6c2a"],["/tags/女朋友/index.html","39f9e91071008bc8f4e666a7191c0bd3"],["/tags/工作/index.html","cc47b9490ff144654d4c60ae235f99d6"],["/tags/技术/index.html","877d0b5c4533ccd61c24423b96e56b68"],["/tags/教程/index.html","86aa9c876983d3d2f516abccd29d49c0"],["/tags/教程/page/2/index.html","11791a989accfe656bd5becd0fe1e68b"],["/tags/整活/index.html","d7fd921863a56d567d6fd287544977d8"],["/tags/整活/page/2/index.html","315c155e7ea7bdc3f051b382ce700e42"],["/tags/旅游/index.html","9350f348443a52768df55dd24b28c22a"],["/tags/树莓派/index.html","db51d2b7112279287bbd64f26e5528a9"],["/tags/生活/index.html","293e843509317ac64525763cc4967df0"],["/tags/生活/page/2/index.html","6c84f631ba911816b77e38be72d786da"],["/tags/番剧/index.html","643397c43e7b7108e888f98b8437ff68"],["/tags/白嫖/index.html","41e12c9b5e5a67d0014c6d8815b4cfc6"],["/tags/编程/index.html","b417313b00a0f2ff8ab5715f9ade8ee8"],["/tags/考研/index.html","7122949e7e96d6237e2a222ffb90f7a8"],["/wiki/index.html","f6f257652d974ab86b75f1d127c76436"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"jsd.onmicrosoft.cn"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.onmicrosoft.cn"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"ik.imagekit.io"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"raw.weekdaycare.cn"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"npm.onmicrosoft.cn"});





/* eslint-enable */
