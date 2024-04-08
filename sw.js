/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fda7a4a8d24868e28f5e86a565280777"],["/about/index.html","d7e4fabad754114c273a61c3eb3cedd9"],["/archives/2021/11/index.html","4c480457b9536826495fefa193928884"],["/archives/2021/12/index.html","bd01052ef860eea00f800c73c4812c76"],["/archives/2021/index.html","701ccdd9f616b41c42be4c4a42ade90b"],["/archives/2022/05/index.html","555b26d6fb3d9b57f75e3ff1cd48e79c"],["/archives/2022/06/index.html","76db160a132c8532e0bd8dcf14808ae3"],["/archives/2022/08/index.html","55685cb0e269c89406bfbcf36c6762f3"],["/archives/2022/09/index.html","0624d8335b02d400b7924136fa348fb4"],["/archives/2022/10/index.html","1362179dd2f5a22d00c896e4ad00f3fc"],["/archives/2022/11/index.html","12947ff1a8964a79d4b36a2db1303feb"],["/archives/2022/12/index.html","5c199eb6583862d3995a9cf69dc2838d"],["/archives/2022/index.html","3d200a356fbcc629ad36bb4b7161562f"],["/archives/2022/page/2/index.html","f08e2cfcebe1ee1d5c9002f45765e3b8"],["/archives/2022/page/3/index.html","6efb8454fa8eac9cce6e1315e4c38912"],["/archives/2023/01/index.html","ddb40f198366d1461c4d6fe112e675d2"],["/archives/2023/03/index.html","b42acaecb6ac6a0a2c9785cf5ed8571a"],["/archives/2023/05/index.html","f3109a37d5f3db1f27385a021bdbcb98"],["/archives/2023/07/index.html","175c970fdd79b53e0292adf5ccc60ba0"],["/archives/2023/08/index.html","cb274e765878de0e4d5efcea284dda65"],["/archives/2023/11/index.html","ef17b5e8f47e243f9ec1d53be8d7ff73"],["/archives/2023/12/index.html","5d3993eed23c05a1e93065e95a3757e4"],["/archives/2023/index.html","70a12e7e5f7df58c57931149a8fc871c"],["/archives/2024/02/index.html","2d64a31fe1126bfa22adbde2f8ca5275"],["/archives/2024/03/index.html","fb16a96ba989bfe1ad98f603988d2f92"],["/archives/2024/04/index.html","fb70382394d3a3328846c4f902dd86ee"],["/archives/2024/index.html","c12a882c932cf621db1ac178a21f9ea6"],["/archives/index.html","1e36bb3529981f99ad56249e49890c3e"],["/archives/page/2/index.html","c5bd1c922bfead99f5b87cdc2fc17eac"],["/archives/page/3/index.html","39bc56f4c81f31d2636fb3584c820a90"],["/archives/page/4/index.html","607558c0d75b9ece2dbad0a2b40636b7"],["/archives/page/5/index.html","750e86528e0855009d43125a57d2abaa"],["/asset/avatar.svg","5f865d6baba73ccddbc55a0251cb4a27"],["/asset/favicon.svg","f1f1a1b736b4dfb888204f6a5cea24af"],["/asset/giscus.css","72b410d30ea31d5d9686b4e37198c873"],["/categories/index.html","3e5177be0889f358c889ef947855939e"],["/categories/奇技淫巧/index.html","fbff1302233d68fe6e22e0667a159709"],["/categories/奇技淫巧/page/2/index.html","b5e7b60355b2457fb9138f9c296e672c"],["/categories/学习感悟/index.html","f4906d3782cf651758c315956944257f"],["/categories/日常随笔/index.html","3c98ccb5df37da616f1dd4017972492a"],["/categories/日常随笔/page/2/index.html","7008dd52d12c8d3018f5c62bdaf88635"],["/categories/杂七杂八/index.html","fd154cfa4e8c771e0905a293cb0aac60"],["/css/main.css","52ed594d51d311d30915387c64c27ea2"],["/doc/comments.html","f52005f2c8d83f23093547def5511ffd"],["/doc/express.html","0a68e960a319d92834f2cec88cab9fba"],["/doc/front-matter.html","69cd4e6d1a0453b66dec29db73623e95"],["/doc/index.html","2cdd890dea87e970b781e406e8ba56ab"],["/doc/site-config.html","90ce70ac77a2d0298a551a1445cb7ae9"],["/doc/structure.html","295cc59499fbf1ca5f1d8160eaebb76f"],["/doc/tag-plugins.html","e46e6ec597a6448acfe09e87884e813f"],["/doc/theme-config.html","0056ad8cebdfc5602a278a52491e9ab7"],["/doc/update.html","2a01a8304c26b6e432f41c74f89b1f50"],["/doc/widgets.html","edd282831e36207765d02b7fd2651207"],["/index.html","911291ebfc0b092ff33054d3678008d1"],["/js/main.js","923297c3ef0861efba981db4b11f6e16"],["/js/plugins/copycode.js","cda01f861d3a91744b07fc282b43c0b8"],["/js/search/algolia-search.js","3c9e0450d3ba656692f69c9cca6468f2"],["/js/search/local-search.js","bdd6efc08f6bc6ee9a8af11a3633a416"],["/js/services/artalk_new.js","1649de88c2a7c49b79aee1f5529a4ab9"],["/js/services/fcircle.js","a6d050803bac61db70e3e8b4690f4859"],["/js/services/friends.js","2eacc2b7d0f9ed2c7c6932597b818cc8"],["/js/services/ghinfo.js","8287428a2b5ae937ecc999e7d7a96134"],["/js/services/mdrender.js","e20405085c6e2d05a3e7592e8141b15a"],["/js/services/memos.js","88a2133fd872c96fe298af7325172249"],["/js/services/siteinfo.js","4ea50ea959a391da1aebbedf3d806551"],["/js/services/sites.js","e332580fd438da0059712da3a70473b6"],["/js/services/timeline.js","8a96604ca8956476f58d2a90edfd59c9"],["/js/services/twikoo_new.js","101bf952284d157ff2717fd3acd09b09"],["/js/services/waline_new.js","6a26a6fbea0a34d270984129b76f9cbd"],["/js/services/weibo.js","4f30e6b22981e09f0746183c91170450"],["/page/2/index.html","a77ddda2f9ac3aa7b7dc79122f32b674"],["/page/3/index.html","ae0b436e015d24bbc41fb5d9f71b48c5"],["/page/4/index.html","6d44ace0eda1b257805bd511de846b24"],["/page/5/index.html","9513dd63f060d8bd3ee9a62c660c71e8"],["/posts/2024/index.html","87197d1fb72212ffc1c9d237cf3d1c4c"],["/posts/about-my-phone/index.html","4af52dfa0eecc73f29bfff9b8cff331b"],["/posts/algolia-search/index.html","031c7b5afcba807fa59e00c2504f2c2f"],["/posts/big-orange/index.html","9c49c1a5917af59279c95dab6f11e50b"],["/posts/brazier/index.html","4d2860c3bfc4510697dde6445b01e012"],["/posts/c-study/index.html","2b2fd2e8f1c8787098b7b89b82f6f230"],["/posts/cad-draw/index.html","2afb211288ec9060214096fcdb87ecbd"],["/posts/changan/index.html","c6ebc55eb4af977dd5f2537e67dded90"],["/posts/chengdu/index.html","8add345df791e1691bea890d142eef87"],["/posts/cloudflare-pages/index.html","fb84b648e6faf6edd4654384f72275b4"],["/posts/data-structure/index.html","53f8ba144376217786e3d1990acbc0c8"],["/posts/disease-diagnosis/index.html","73100a872d5329b147815140b2ac2104"],["/posts/emoji-blob/index.html","bec6c4fcd71ee3c1785d2a07ad05e0f0"],["/posts/finger-scarf/index.html","c1d88de495680538428464058b7f3e9c"],["/posts/fix-swiper-invalid/index.html","ec9c59d509c13ff47a484c604fa509e5"],["/posts/handwriting-numerals-recognition/index.html","c62c29ca14798fb5a150bcbb388e09f5"],["/posts/hello/index.html","11b7f8beb9bfceeb53afddf7021eb7c9"],["/posts/hometown/index.html","c685aa25734d87091c5a45ad54373882"],["/posts/hutao-shake/index.html","0f9566bf8a58f6fca636c22ff1b7e31d"],["/posts/inkrss/index.html","6eaaefeb5c89d7f29a5b4c7c2e472e95"],["/posts/ispeak-depoly/index.html","2ba2e5bb9989ee3deee5fc5b5f46f207"],["/posts/mail-massacre/index.html","1a8996dbb95a9079ac4ab657d345353e"],["/posts/ondrive/index.html","3de5d548f1e4dd0f298c6dc4989130bb"],["/posts/onedrive+rclone/index.html","09c8824a3aa2d25a9d7fc7fa8fe94713"],["/posts/past-summer/index.html","0a064c21088657e6212ce29194e2d2dc"],["/posts/rickroll-pi/index.html","a850df38029647820b026a27e1d6ce30"],["/posts/rss/index.html","0748b31edb393a3b7e8309a36c21c7cb"],["/posts/singular-value/index.html","1ae5d62375ccd67f9f46cf986767829e"],["/posts/stellar-beautify-one/index.html","8af62992d9500c576df1e6e1091ecc11"],["/posts/stellar-friends/index.html","0ef406edfb3c8ae95172628d3b4d9d8b"],["/posts/stellar-update/index.html","176aeed1909f7195df0c084df228c62e"],["/posts/summer-time/index.html","43ecff76e46321883a13251a24f8a114"],["/posts/summer-work/index.html","9ba2ff2ca77c4dd828f301b10f1e7366"],["/posts/ten-years/index.html","382915913dc2b021e0781043dab9c34e"],["/posts/twikoo-new/index.html","0e940d197e40a4f140c93d0cedba4c9c"],["/posts/umami/index.html","e84cc4727bf6b80df9e65dde2c2b2c78"],["/posts/vector-analysis/index.html","997a9877e0132568d8a8cebe5b94c5b4"],["/posts/work-run/index.html","5bf19b3f562338f56ffec5aa03ace34b"],["/posts/yingti-0to1/index.html","659efcd1b153e8112fae4ab212bbd449"],["/posts/z-inverse-transformation/index.html","97080d735b59b6ef67866f3a10590f62"],["/posts/zui-font/index.html","f5cefab44fcd1572dedc33a6272b87db"],["/shuoshuo/index.html","7224d8ae73086ebb505e7db4093a9066"],["/sw-register.js","e9a4473b2f28fd63e6adf2669f08af15"],["/tags/Linux/index.html","5b2c322e105c5744cd3ce81454c306c9"],["/tags/RickRoll/index.html","77f214b637e3dd65c772a4d092b6e3e9"],["/tags/Stellar/index.html","cd46a0da2576f578bbb1b6dce17dfce0"],["/tags/hexo/index.html","68cffa49255b0135fd7fbfbeb83c2351"],["/tags/index.html","cfe72bd0ed326545dc0c206a41454ee5"],["/tags/rss/index.html","14e38edefee6d2d2563bb452e0685505"],["/tags/代码/index.html","0176d0fdf18e29a2d3aedcf806f2c60f"],["/tags/体验/index.html","0e7528d13a4bcc7aeeaa0319c8268d8a"],["/tags/作业/index.html","f8ef7a526838037c2662ff31f5a8e85d"],["/tags/回忆/index.html","f2f29a28b111fb2093d9f46d933d8990"],["/tags/夏天/index.html","7b14e67bbdd9af90a2dade79ebb07a6b"],["/tags/失败/index.html","32f2cc0c6b9200f9975deffa1cb6297b"],["/tags/女朋友/index.html","c8049d88384ca2a527e13300c428e9fb"],["/tags/工作/index.html","125c7bcd670b818c080f91a471db8745"],["/tags/技术/index.html","bbb323d5c137ec47d3270517df79b996"],["/tags/教程/index.html","65886b4cebb2fde1cb2d1b4801742da4"],["/tags/教程/page/2/index.html","c3627339505a9dc2232abac4150327ac"],["/tags/整活/index.html","1de38560e84c05b11ba62adf3bad70d1"],["/tags/整活/page/2/index.html","69a66728094bc3788a975313683cf7f5"],["/tags/旅游/index.html","51032e68cc65256d740d6315ecb278a9"],["/tags/树莓派/index.html","39af034428736c3d50ae1ec21c0c32e3"],["/tags/生活/index.html","6046b12873911b442348249e48e1cb32"],["/tags/生活/page/2/index.html","41f90b3c6e6f0b2fffe3dfe2bb06066e"],["/tags/番剧/index.html","a9a8db02bc397066d39110b402433203"],["/tags/白嫖/index.html","71ef5c24da168fbb4894c845b57b41c5"],["/tags/编程/index.html","7882040345b9f0125ba491873cdc17fc"],["/tags/考研/index.html","db9a9b054e6a3af71be146ec71d60dfb"],["/wiki/index.html","e041faaa2f7a97c45a087afa00f60135"]];
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
