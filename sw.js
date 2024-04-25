/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7f9a8cf4789540cf36925bad7b34a29c"],["/about/index.html","8a9b31570e6d09e314bd591114146446"],["/archives/2021/11/index.html","435f975ef5df27d2258e9be2cde6fb2d"],["/archives/2021/12/index.html","cdb49710a918e9780332861e0882a4f1"],["/archives/2021/index.html","4f3af00bea96636f6a1e280167914b68"],["/archives/2022/05/index.html","3b68a7451239bb650f4afc6c1ed73599"],["/archives/2022/06/index.html","7fa95abf9cc993f39b4b189a27312bb9"],["/archives/2022/08/index.html","1c7b02ead4612471b439078a50440dae"],["/archives/2022/09/index.html","4b05b90cc07f23e877146c4d0ade3adf"],["/archives/2022/10/index.html","50a888b2c6c7853b86a3b624ba7d6754"],["/archives/2022/11/index.html","04d5d7022b1e3b55f7020bef7977637b"],["/archives/2022/12/index.html","474bc4961985bc279ec729b31b059b38"],["/archives/2022/index.html","2d0fb09b3ba3cb2723c4c70ea1b8692d"],["/archives/2022/page/2/index.html","38dbfb0a5c23d2f4ffc23d087e7936ff"],["/archives/2022/page/3/index.html","f37c894baf93c90ba385fd3ad45ef2a2"],["/archives/2023/01/index.html","1f2cebbae8a66c71671f60440b47286f"],["/archives/2023/03/index.html","2a7df2e256b9f8acd16b3ba521082b93"],["/archives/2023/05/index.html","2a08108f44b13db16fa7d6b4a9c53496"],["/archives/2023/07/index.html","294ee77d60453c369404bc3b08dcc4a5"],["/archives/2023/08/index.html","4b48d6734fef7e9e1b12b3f2cad674cc"],["/archives/2023/11/index.html","38842dc0e333589ea5733fec897c1d8f"],["/archives/2023/12/index.html","bc0928706797550097fd8046ee318da0"],["/archives/2023/index.html","c1cef535a37a4edc4914c8e73ce55566"],["/archives/2024/02/index.html","9e2b8e35a373509ab6fa549638062287"],["/archives/2024/03/index.html","0515814709a3698a0babe0ad1cbf2712"],["/archives/2024/04/index.html","c65124998cb19878c15fcdfc587214c2"],["/archives/2024/index.html","f0bb0d445a887821e4c30d6bdc700fb0"],["/archives/index.html","381d20d01084c44254352c810dc46cb3"],["/archives/page/2/index.html","df75bb213219fd4f8e53c7d0d2bd1fbb"],["/archives/page/3/index.html","55ce082b65665dca54e3d8157df80728"],["/archives/page/4/index.html","e3c360e59bc9e0df4e1f581b4e6fc4d7"],["/archives/page/5/index.html","0d23137a20952a3f5829d1103ccc8452"],["/asset/avatar.svg","5f865d6baba73ccddbc55a0251cb4a27"],["/asset/favicon.svg","f1f1a1b736b4dfb888204f6a5cea24af"],["/categories/index.html","dfecdf245397db34fecbce4c56be350d"],["/categories/奇技淫巧/index.html","dc018fa6d179d4aacd73956ee297268f"],["/categories/奇技淫巧/page/2/index.html","e1292c9a921bc2d095316310bd3d2fc2"],["/categories/学习感悟/index.html","899124e360c69d63995d71bb658b3285"],["/categories/日常随笔/index.html","72141f611ab35e366e27831681b1b53d"],["/categories/日常随笔/page/2/index.html","f2e94242fb121e7b3935eba7e15539ac"],["/categories/杂七杂八/index.html","cd1875e6b9a0bd95e78ae02b3dd1b2a0"],["/css/main.css","b69d3383fb3ef9b815a380cbfd9ce901"],["/doc/comments.html","a94833b5656b7aee25d30fb3f96ab1f1"],["/doc/express.html","7e1c59e50ac94d80c699b2899dfc84b4"],["/doc/front-matter.html","f767dc730b17b8da82a6873f5dfeab0d"],["/doc/index.html","802a66cc299ec9aacd743af9a8ef981f"],["/doc/site-config.html","2cb174d1c44519f3bf61fcd916981ec4"],["/doc/structure.html","dee241e4536ea2a7d0c9126a106c1fc3"],["/doc/tag-plugins.html","17422530ab4dffb7d2c46c6b0c5e08be"],["/doc/theme-config.html","7caf88439095f573e03f176ad6557435"],["/doc/update.html","ab99bf206310ab00469f5a1b81475c7a"],["/doc/widgets.html","92684481947cd2397553be531fbf066e"],["/index.html","40f9c0135ace4322fdc367c10a81b53b"],["/js/main.js","6cfa282aa09eea8b1981b74b7bf622b7"],["/js/plugins/copycode.js","cda01f861d3a91744b07fc282b43c0b8"],["/js/search/algolia-search.js","afc1c6d8615cd353a3885c1b8d121d57"],["/js/search/local-search.js","bdd6efc08f6bc6ee9a8af11a3633a416"],["/js/services/artalk_new.js","a14994ccf0e5687a638afad76e4b1977"],["/js/services/coding.js","3e1ace6f9d9546246c30438d7de50939"],["/js/services/fcircle.js","a6d050803bac61db70e3e8b4690f4859"],["/js/services/friends.js","2eacc2b7d0f9ed2c7c6932597b818cc8"],["/js/services/ghinfo.js","8287428a2b5ae937ecc999e7d7a96134"],["/js/services/mdrender.js","e20405085c6e2d05a3e7592e8141b15a"],["/js/services/memos.js","88a2133fd872c96fe298af7325172249"],["/js/services/siteinfo.js","4ea50ea959a391da1aebbedf3d806551"],["/js/services/sites.js","e332580fd438da0059712da3a70473b6"],["/js/services/timeline.js","8a96604ca8956476f58d2a90edfd59c9"],["/js/services/twikoo_new.js","c2787ad86ad4fcd9f75fa68daf660880"],["/js/services/waline_new.js","b0d6b05d55a0f0b6f64e4dae76caf899"],["/js/services/weibo.js","4f30e6b22981e09f0746183c91170450"],["/page/2/index.html","cffeff54cf5445cf6021fcb9d844077a"],["/page/3/index.html","c64c87493ec99378fa8cce494f939a9f"],["/page/4/index.html","30612086dd16838e49d0884e75a9aa06"],["/posts/2024/index.html","8e0b138a96e345f1a9c5bcd2ae1f389d"],["/posts/about-my-phone/index.html","9c3b4c6c0807d53fc0092ed8ce6f7129"],["/posts/algolia-search/index.html","24a777f0fcf59162cfb5e2450c34c200"],["/posts/big-orange/index.html","fe31e5c694aebce3117883f796948b37"],["/posts/brazier/index.html","8d5d12b73244c6e466d08d15db853b8e"],["/posts/c-study/index.html","1abd8b924b62891e2368aa8d4819185e"],["/posts/cad-draw/index.html","7acb1acbfacdbc294fd223a633cb4cc3"],["/posts/changan/index.html","cddadd8e030f74844d938694c063904d"],["/posts/chengdu/index.html","6939aad56b0ab6ed3785a5323a708249"],["/posts/cloudflare-pages/index.html","5e9fca5d238460fcf4e8c1a2911db387"],["/posts/data-structure/index.html","35382a4b43683ff445d38ef9d9e8f0d4"],["/posts/disease-diagnosis/index.html","6482d0e5367f564ac1c162248285ac62"],["/posts/emoji-blob/index.html","bbe58c9e98aafb1aaf0acd88d5a10638"],["/posts/finger-scarf/index.html","9911372897415e5dcee9ea69ae6f1eb5"],["/posts/fix-swiper-invalid/index.html","de6297af74edeb78de5249c1d52daf51"],["/posts/handwriting-numerals-recognition/index.html","538bc4a27292dee44bbc066b59c442e4"],["/posts/hello/index.html","32f2de3b7cdb133f1c290e3832c2cbf9"],["/posts/hexo-obsidian/index.html","b7378359567973766429da58ee9844ac"],["/posts/hometown/index.html","9699a15ddab520cbe68fe1614eb3e2c4"],["/posts/hutao-shake/index.html","208f59015f72dac5c50594cdb4b644fa"],["/posts/inkrss/index.html","66c36ffc3497744d0816b3a2e5156ff8"],["/posts/ispeak-depoly/index.html","67839a33eb87a5b62d710f8f475e2cfb"],["/posts/mail-massacre/index.html","0ba117908e66400023052c0b26ce89a0"],["/posts/ondrive/index.html","ab5ac398091afc483fcc0e65fc36696f"],["/posts/onedrive+rclone/index.html","4be27f81b4dae346ba442d4d8e9db377"],["/posts/past-summer/index.html","a8b697347c104846bd2ce68774c3304e"],["/posts/rickroll-pi/index.html","9fd487da602fd8c6e54a21d7b4b5a7e7"],["/posts/rss/index.html","dd7238b17f776eae4bb0af75c3b400db"],["/posts/singular-value/index.html","1ff642a38a7ade8f4d681acd6aeab66f"],["/posts/stellar-beautify-one/index.html","e19279d739632cd7fea41d86e2f4f4f7"],["/posts/stellar-friends/index.html","38022952803be602f7b731cd013a33a8"],["/posts/stellar-update/index.html","639332f10b4087b766242015300fd285"],["/posts/summer-time/index.html","9f717bb0c2e142c8f58388dc55946928"],["/posts/summer-work/index.html","2da9a64051a492993cf4fcc4dfcb4fd8"],["/posts/ten-years/index.html","2914aacf7fc93b594d85f8ed9cf1b3cb"],["/posts/twikoo-new/index.html","fa4ea5835ac57c215f2c7f4ff50b4bf9"],["/posts/umami/index.html","75f42a73d4232786036e138ab23cc850"],["/posts/vector-analysis/index.html","4321f400f3e761baf5be8bbdd35bcae3"],["/posts/work-run/index.html","a32ff2eebd155a094c1dbe8f623326aa"],["/posts/yingti-0to1/index.html","f946323ae55ca5a9f194380da55150d2"],["/posts/z-inverse-transformation/index.html","e4a604f4ea3c437f8a44134d50fc611c"],["/posts/zui-font/index.html","b8bdc4557bb128c385b75bf97c2393a2"],["/shuoshuo/index.html","81654f038aa41f4a8984495c7e73591f"],["/sw-register.js","e20619ff6623fd89f17d81cda1e983a0"],["/tags/Linux/index.html","d77f1bf85cc3a8b15832ced3ace8af17"],["/tags/RickRoll/index.html","38af27223dd1160acc664c721730e484"],["/tags/Stellar/index.html","ff6a5c8f0813c1208fc3f05e608b813e"],["/tags/hexo/index.html","b01e9b26c2d8b74f00beb745867b70ee"],["/tags/index.html","e5b35e20fd73d8f7f153b1c7cf7ff9ce"],["/tags/markdown/index.html","7c8797425d01af8193c172425902fea6"],["/tags/rss/index.html","c1c8eb62a5556e50d279b76411facf8b"],["/tags/代码/index.html","621482cbebb2a179fb8f07259d96893f"],["/tags/体验/index.html","b59ac1030ea063a0d649416078f525a9"],["/tags/作业/index.html","0239ec1a3e7b86ff5e0a52cc3fcb93f0"],["/tags/回忆/index.html","0f4b9a882bb5445f0e52ca55ee12ee6a"],["/tags/夏天/index.html","f41bd014208d356497c4a1db66fffe4d"],["/tags/失败/index.html","6cee54e800e810785f4591afef53f6cb"],["/tags/女朋友/index.html","78dd2534ffbafe9bb0c3a097dcab4f17"],["/tags/工作/index.html","f1902711d55c67972be8b842e46463eb"],["/tags/技术/index.html","db33ad81bfde66c4bf4f1d9d51db5312"],["/tags/教程/index.html","19a7c67a3eedd38b37b3bee5a49dd007"],["/tags/教程/page/2/index.html","3ceb962879c9e75aeff4f2f9a5ac771b"],["/tags/整活/index.html","f0e438edd70da725a166ce18a77753f3"],["/tags/整活/page/2/index.html","3f1d6deab19d35e5da9d28bf387d689f"],["/tags/旅游/index.html","ecbf6bbd369bd15336be6789a76fee63"],["/tags/树莓派/index.html","e797cc05a254f4720a1810736b62aef7"],["/tags/生活/index.html","dcfb2f22275deca5154548f6f64f4980"],["/tags/生活/page/2/index.html","11f18070712e3f17559cea878f90c4d3"],["/tags/番剧/index.html","472f43cdfabf308ad6113d26b081ee7b"],["/tags/白嫖/index.html","142818edcd606f7538c0b6545ce926a6"],["/tags/编程/index.html","c355c5de52b6f3ab535135e1e474f979"],["/tags/考研/index.html","094af6deeb15ca5e2f464e2fa548c3d2"],["/wiki/index.html","44fa962b3b99d2ffb7f7a5779d4442ee"]];
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
