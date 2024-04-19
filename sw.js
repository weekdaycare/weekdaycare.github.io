/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","22e7fe81e57e4e3411bf0846a96cb981"],["/about/index.html","19ec735d700e6aeb92b092db828847b2"],["/archives/2021/11/index.html","d3aa5729c06d7cbbfa9ff8fd5f40ed23"],["/archives/2021/12/index.html","3428c3713ffbcf60051173b7cb4f3ea1"],["/archives/2021/index.html","dcbbfd2afc457876200c8e70c27df717"],["/archives/2022/05/index.html","93a5e9f453eaf7d0797734f553db98b0"],["/archives/2022/06/index.html","bb58243faa26b8b75a06cdf1b8744d43"],["/archives/2022/08/index.html","71b36313ff7cdb209c4d396565fb04ac"],["/archives/2022/09/index.html","35a2423e71be6690dc8e213712404625"],["/archives/2022/10/index.html","7f6917691cc1e2e7cd6906056f9c61ed"],["/archives/2022/11/index.html","58c1c58b22b960dde1ac03098ef90148"],["/archives/2022/12/index.html","3c97950103e40d47c8bd6068270fc865"],["/archives/2022/index.html","130da5b97a79c212ff7d38dc4fc11bbc"],["/archives/2022/page/2/index.html","f8ef1c02022609bc706224d3309efb4d"],["/archives/2022/page/3/index.html","9a93f226b011333a775e8310fbaf6f22"],["/archives/2023/01/index.html","12be829804e2db5d16f09620922ec6ce"],["/archives/2023/03/index.html","4680e476084e8fa41fd10da048c0b35b"],["/archives/2023/05/index.html","d40635c34acae0fabfb2e1f5dbc335ce"],["/archives/2023/07/index.html","7eb2db281a468aa89da804dceda03245"],["/archives/2023/08/index.html","375c50ca7019cb00b4d50f766286a6b4"],["/archives/2023/11/index.html","e9e2cfc35392109785d7a0ac723c272d"],["/archives/2023/12/index.html","ee795fbc969cae562f9b3beec6acc594"],["/archives/2023/index.html","fd7649314f218728f88051983b728c90"],["/archives/2024/02/index.html","8441e6b88aa59913c52035cb0e298271"],["/archives/2024/03/index.html","99e9780f9a6e58a3ea262e8fcb4d1118"],["/archives/2024/04/index.html","d8a01fdcfaed1d4a04d768c52aa28e35"],["/archives/2024/index.html","490429f2ede4a22af17c6e115a64f839"],["/archives/index.html","13ddb67d752668edadfec779212ebf9e"],["/archives/page/2/index.html","2e876942e81553f0ae4612c2255bd8e0"],["/archives/page/3/index.html","7b5c22070ae6a5ac41b188fb24e8887b"],["/archives/page/4/index.html","669e411c1a299bba753860afe02be507"],["/archives/page/5/index.html","13bd4a36770e6c6a67b868a1e23e3353"],["/asset/avatar.svg","5f865d6baba73ccddbc55a0251cb4a27"],["/asset/favicon.svg","f1f1a1b736b4dfb888204f6a5cea24af"],["/categories/index.html","468e924bc77d04a27e62b9f3cf6833f6"],["/categories/奇技淫巧/index.html","05203eed8d0bee123656f1f6f87da599"],["/categories/奇技淫巧/page/2/index.html","96ffb80eb1c1bf9eee25e2ccc0c6d04e"],["/categories/学习感悟/index.html","44198c6745efeb711662813e4e490584"],["/categories/日常随笔/index.html","dd9e3db7c3eab85eb2102f41a48367d3"],["/categories/日常随笔/page/2/index.html","e0c6d33b5a974830ae65dd05592f539a"],["/categories/杂七杂八/index.html","2026a94c2b7c89b3b8a3c7fd2dcf28b4"],["/css/main.css","8d67aaa797db9e0f16a06a9574c8ac1d"],["/doc/comments.html","2fd938c7a9e4e20bcc3ef0085fbfd2b7"],["/doc/express.html","f266b3b27eedd6b3f42d67d765493fcd"],["/doc/front-matter.html","2de33ee03dedf046419359f8e3c0c7ac"],["/doc/index.html","12e696e98a8c0116b5995a2f5d70551d"],["/doc/site-config.html","9a48fda6b8ad885867c45f1dff4fdafd"],["/doc/structure.html","036946e91ccfe67ac36c1627f912b282"],["/doc/tag-plugins.html","660ed40fc6c82d85f5db5f44b3e22a1a"],["/doc/theme-config.html","b7c38c72f438c02af61007eae2dfde43"],["/doc/update.html","6e649d9a523e28072c69eaae90ff8e58"],["/doc/widgets.html","062560cdeb54ede710872b6bad7eb3fc"],["/index.html","96b4c20244f5c6ace277ace5f0aaa0f0"],["/js/main.js","6cfa282aa09eea8b1981b74b7bf622b7"],["/js/plugins/copycode.js","cda01f861d3a91744b07fc282b43c0b8"],["/js/search/algolia-search.js","3c9e0450d3ba656692f69c9cca6468f2"],["/js/search/local-search.js","bdd6efc08f6bc6ee9a8af11a3633a416"],["/js/services/artalk_new.js","a14994ccf0e5687a638afad76e4b1977"],["/js/services/fcircle.js","a6d050803bac61db70e3e8b4690f4859"],["/js/services/friends.js","2eacc2b7d0f9ed2c7c6932597b818cc8"],["/js/services/ghinfo.js","8287428a2b5ae937ecc999e7d7a96134"],["/js/services/mdrender.js","e20405085c6e2d05a3e7592e8141b15a"],["/js/services/memos.js","88a2133fd872c96fe298af7325172249"],["/js/services/siteinfo.js","4ea50ea959a391da1aebbedf3d806551"],["/js/services/sites.js","e332580fd438da0059712da3a70473b6"],["/js/services/timeline.js","8a96604ca8956476f58d2a90edfd59c9"],["/js/services/twikoo_new.js","9888701c6bace52cd104da11ab9aa8f0"],["/js/services/waline_new.js","b0d6b05d55a0f0b6f64e4dae76caf899"],["/js/services/weibo.js","4f30e6b22981e09f0746183c91170450"],["/page/2/index.html","636c594283288988970fc2f6a6cc51fc"],["/page/3/index.html","ee8385ac9b0596a7dd6bdb92241544cc"],["/page/4/index.html","db5b2f6d4f59ad71fec854478a3cd04a"],["/page/5/index.html","435297692d3809d66153789de2792e14"],["/posts/2024/index.html","a1e613da82e685285446aa324463e6e3"],["/posts/about-my-phone/index.html","620439c73dee1bad840356da81e63dae"],["/posts/algolia-search/index.html","0371fabd1dd38b596f5ba9c3932c73fd"],["/posts/big-orange/index.html","16a0a6577b2e689c3d7df5eddbbd3ba9"],["/posts/brazier/index.html","1ed25f1f428e7f5ad7bdf9edf843712b"],["/posts/c-study/index.html","668ae8130150d23a8326d55dd806789c"],["/posts/cad-draw/index.html","e92484f6bec184a8cd9f12a734d3d0cf"],["/posts/changan/index.html","595cd1026cf7e2ea636bfa6e6b818643"],["/posts/chengdu/index.html","eb9bd913365384b349baa027b75648bb"],["/posts/cloudflare-pages/index.html","e3296b694754ddf2ccb3ec6a2e8beeb4"],["/posts/data-structure/index.html","84708c34705e7fc4aa71f7cb807218c3"],["/posts/disease-diagnosis/index.html","7d5bc5150a7820c1f1016440c829b335"],["/posts/emoji-blob/index.html","958ea672f887f5dfae6f99985a4227af"],["/posts/finger-scarf/index.html","de67a07d269186d2b8d6ec4af34adde8"],["/posts/fix-swiper-invalid/index.html","e6c6239b63c31bcf287b155bad2c2be0"],["/posts/handwriting-numerals-recognition/index.html","5899b99f9471ceefec8f94293759147f"],["/posts/hello/index.html","86bd1fd69e964441785f1fa6f44c7959"],["/posts/hexo-obsidian/index.html","11f14dc04405a2b1b84da242fd0800b5"],["/posts/hometown/index.html","60c44a30433bdf6d5c3d205293149a00"],["/posts/hutao-shake/index.html","efc1fe24917cbebf84a78ea6e74d8c25"],["/posts/inkrss/index.html","85f5d426553352991f8ce658248e48d4"],["/posts/ispeak-depoly/index.html","b16199c917bcd68dccf656fbdd311c6b"],["/posts/mail-massacre/index.html","21cf2154fc072314850ee22856de610a"],["/posts/ondrive/index.html","b76117cb8d9128dea26afa501f89d8c8"],["/posts/onedrive+rclone/index.html","c755c49b2d0ba997b140d7c1c06e458a"],["/posts/past-summer/index.html","111362a01ceb006c4ba3f82711a757d9"],["/posts/rickroll-pi/index.html","72442bf10160e4090109b9f77de7619b"],["/posts/rss/index.html","dbee3c3f3b4b58de3cb98f113835e969"],["/posts/singular-value/index.html","126af203d76d4341b7d8700adb97f414"],["/posts/stellar-beautify-one/index.html","239bcb84479668100a8fbfedcd84f83b"],["/posts/stellar-friends/index.html","f0d3668295424ca9990e9ba9f9601fb9"],["/posts/stellar-update/index.html","f7c3a510d2b1246c0f5f443d3d873e78"],["/posts/summer-time/index.html","b7f2a4afc090b2bed75f27635d4ff9b0"],["/posts/summer-work/index.html","b3d032e78da0a62cd6e5ec100fc4803d"],["/posts/ten-years/index.html","788a53e89efafa02b99b97354a24b8ac"],["/posts/twikoo-new/index.html","b20bcbe1fb9a6a96d3b2cb986d2f79ad"],["/posts/umami/index.html","fe222f1414750fbc88fae04bc7d58d57"],["/posts/vector-analysis/index.html","9cef21ce9bb93dab8f1c041f11cb984d"],["/posts/work-run/index.html","c7aefc189f5494de3757bfe29adbcd07"],["/posts/yingti-0to1/index.html","1d7e0a4ab9017c337704b66c87aa658f"],["/posts/z-inverse-transformation/index.html","a8737dc63442538e8707f62f45b9a541"],["/posts/zui-font/index.html","24f78bca246c8bac86dfcdbdb61e59ce"],["/shuoshuo/index.html","4832d21a26eb049c436c9dd86c862973"],["/sw-register.js","0b894781e75a0b3874c59b17e91eb37a"],["/tags/Linux/index.html","b2191e1d10a595d8587c140b6e1fa6b2"],["/tags/RickRoll/index.html","45d94b33073691db7875e0003b9f1c7e"],["/tags/Stellar/index.html","eb04340546412c4420f1c01ce8f905e1"],["/tags/hexo/index.html","3f0b7da492d0ab4f74745f37b4d20827"],["/tags/index.html","85b18db433fdf8b15721e4000f8315ae"],["/tags/markdown/index.html","d52c25cbe975a97a80036577197e175c"],["/tags/rss/index.html","99121a66a664e68f3f6bfcb647ffc8ed"],["/tags/代码/index.html","10bd8a40163964774bd83f6e4a80e9f9"],["/tags/体验/index.html","0c5b9d0571b822e53858930c07e3dedb"],["/tags/作业/index.html","e73e32c9b69ff4e62361058018b0b771"],["/tags/回忆/index.html","4002740c2e30ef9b9b9551316142b3a4"],["/tags/夏天/index.html","bec280e3f0f2db2a83227dcf61f177df"],["/tags/失败/index.html","2f74891f62a1c74e1f29234a6a2163b8"],["/tags/女朋友/index.html","44a7b752833bb5eba292c8a9e4195f9d"],["/tags/工作/index.html","64ca10c0535228893d659543a3ec3006"],["/tags/技术/index.html","af6a96d6d4a4883686d589ce5be116dd"],["/tags/教程/index.html","8b778fe1812654dbc9915c864ae4289d"],["/tags/教程/page/2/index.html","a92db8a4251a20ae1a08d465ac8ddc3e"],["/tags/整活/index.html","117e216524001bfc02433d1574f4c5df"],["/tags/整活/page/2/index.html","25b3e8ae4098cb710797a06849a83d3e"],["/tags/旅游/index.html","b4b5957332b2eaf851792ae3c5aea544"],["/tags/树莓派/index.html","9e9cf704e98b4d0bb13ad2a6171bbb48"],["/tags/生活/index.html","01570fc8f1c258b975ee63b3ea36219b"],["/tags/生活/page/2/index.html","0fa49e6d5ed51ae80d62146dbc56bdd4"],["/tags/番剧/index.html","2888d20c51b4cc91a05bc247718dc93b"],["/tags/白嫖/index.html","6a42582bfa40df8a91beb59972634fc5"],["/tags/编程/index.html","4920248238c17ed5d8a84b4c28802df1"],["/tags/考研/index.html","0e27726d13bc092509389cec74bff93f"],["/wiki/index.html","bbf09d7e3e4970a69379e7d337515764"]];
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
