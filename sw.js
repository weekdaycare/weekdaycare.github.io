/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f2ce6d24fb29b0951eee2b8c82eefcc1"],["/about/index.html","2102a5d3c33b26a52cf56b4214b168a9"],["/archives/2021/11/index.html","d5325d18cf095a3eb6f801fb559b5fe6"],["/archives/2021/12/index.html","d27375cd48dd555e0ef1577cf9bf097f"],["/archives/2021/index.html","87f5a87d9592605c1d7f8da215126616"],["/archives/2022/05/index.html","4489823eb048b8d641496d74a4e1ef70"],["/archives/2022/06/index.html","232099018609dbee6ccbc884f0549643"],["/archives/2022/08/index.html","48618edc0afa59b4679f1fcf64ce9960"],["/archives/2022/09/index.html","3107d2fdcc437a3e64423e9d13b97f54"],["/archives/2022/10/index.html","a95ddc1a21fc164d28023692efffa29d"],["/archives/2022/11/index.html","7284d0fc66e0a99d300a4af4887d1169"],["/archives/2022/12/index.html","99b5a3e62c512bcf938d1b702c3e6967"],["/archives/2022/index.html","157cdbcfafeef82bd516ecccb28123d0"],["/archives/2022/page/2/index.html","deef4892ea93c332321ba2904c2d158a"],["/archives/2022/page/3/index.html","7e66974ac2987c3b5aa1de9aabe30541"],["/archives/2023/01/index.html","dd31d25abb46ff941922684c659d29bd"],["/archives/2023/03/index.html","62c131b86314ab5ab904e6fd73938925"],["/archives/2023/05/index.html","974d023bfe6f3f12e0c1fa084c0da2da"],["/archives/2023/07/index.html","a0b311f02e6bcf332dfdf927c7c837b5"],["/archives/2023/08/index.html","5a707fc78e69f91522ab25a56ca0d6de"],["/archives/2023/11/index.html","3ad6be0d6fb105cc0c03f0062c0f213d"],["/archives/2023/12/index.html","b7a610e46535b3971c7cc17d1f4ee889"],["/archives/2023/index.html","94ef5342e6795e92953e763024f7599e"],["/archives/2024/02/index.html","35738004c784afcfec2c808825a885ec"],["/archives/2024/03/index.html","aa5573a515002de5b252cf1ff8e4aa5b"],["/archives/2024/index.html","983e28ccbeb53648bbf3464f4ba0da63"],["/archives/index.html","e5e193bc8ea90ee5c43fae8995c99ee0"],["/archives/page/2/index.html","d28e48ca7c9570c4b41ca30fab6239a2"],["/archives/page/3/index.html","1e5eeae2e9b9eddb9b92ac26d2b7e991"],["/archives/page/4/index.html","29bb03053804276ed4e47c97877bf803"],["/asset/avatar.svg","5f865d6baba73ccddbc55a0251cb4a27"],["/asset/favicon.svg","f1f1a1b736b4dfb888204f6a5cea24af"],["/asset/giscus.css","72b410d30ea31d5d9686b4e37198c873"],["/categories/index.html","6cc4f70c7fe96d3de464c3e8202f51d8"],["/categories/奇技淫巧/index.html","2766f20cd80d5d97c6f6a528eb48fc76"],["/categories/奇技淫巧/page/2/index.html","3863e5092348ce19e6eedeb22ea16698"],["/categories/学习感悟/index.html","a17cecb8bad08345ebad420ecd0b14cf"],["/categories/日常随笔/index.html","2513e93e2efca78707270433f37ea45b"],["/categories/日常随笔/page/2/index.html","cdd4fa404947d69450cf0baf4d4a51aa"],["/categories/杂七杂八/index.html","004196640a1da57caf5afb2951310272"],["/css/main.css","926ca0fbffe69e59444b7e9fa1f1bece"],["/doc/comments.html","f7d1df27cb03dad561c1fddd3ef462e4"],["/doc/express.html","0f6c279ea65ceec4149c3ea21ec74958"],["/doc/front-matter.html","a5e086a7a0609f096ae221772cc8a210"],["/doc/index.html","423072459c85f98f0fdbe0d7e4b93304"],["/doc/site-config.html","5c4473c8f65902dd76c8a338faf0b317"],["/doc/structure.html","7d295a5c44d7d0c775bc7d47e6bbcd14"],["/doc/tag-plugins.html","e9ccf64a85a4d14e204651ed7eecb487"],["/doc/theme-config.html","d4da961e2db8484a8718add9b937ef18"],["/doc/update.html","6d03b71af8685fd93be156a730eb0a3b"],["/doc/widgets.html","538c84f65ecce266c755e5d7b9580da1"],["/index.html","87385e8c557a8e1fad2cb78e2428a1c6"],["/js/main.js","c6d0ed2e74dd358f3858a7d507b9db82"],["/js/plugins/copycode.js","cda01f861d3a91744b07fc282b43c0b8"],["/js/search/local-search.js","bdd6efc08f6bc6ee9a8af11a3633a416"],["/js/services/fcircle.js","a6d050803bac61db70e3e8b4690f4859"],["/js/services/friends.js","2eacc2b7d0f9ed2c7c6932597b818cc8"],["/js/services/ghinfo.js","8287428a2b5ae937ecc999e7d7a96134"],["/js/services/mdrender.js","e20405085c6e2d05a3e7592e8141b15a"],["/js/services/memos.js","88a2133fd872c96fe298af7325172249"],["/js/services/siteinfo.js","4ea50ea959a391da1aebbedf3d806551"],["/js/services/sites.js","e332580fd438da0059712da3a70473b6"],["/js/services/timeline.js","8a96604ca8956476f58d2a90edfd59c9"],["/js/services/twikoo_new.js","50658fa25c6e19f8aaae95e5f67790e0"],["/js/services/weibo.js","4f30e6b22981e09f0746183c91170450"],["/page/2/index.html","ae6bd827ef493aa2ed10b75154c11651"],["/page/3/index.html","185cf025bf2df3255e4030fd03c1a9f9"],["/page/4/index.html","ca112105c7eeb3785f13a62ead18e2ce"],["/posts/2024/index.html","92b9666ad78cf0f0df48d376d2baa947"],["/posts/about-my-phone/index.html","4aeaf54cd802debee8b17715dfe5be13"],["/posts/big-orange/index.html","e3bf91edc6811217860ec836e6813a1a"],["/posts/brazier/index.html","6f2b486fa90bf1c0a07c1e35c76e1f53"],["/posts/c-study/index.html","3d533ec9bba1c8bbe37fba346dbaeb63"],["/posts/cad-draw/index.html","52c01dd9c14c90e59003edd267d52d84"],["/posts/changan/index.html","c960eb8488f3b7ac879d40a51efd0cbc"],["/posts/chengdu/index.html","258d3d6b29f885f00ef7920cbbd0d0bc"],["/posts/cloudflare-pages/index.html","9ff0c2056481b1e173d7bbc90884ef1b"],["/posts/data-structure/index.html","d8221f33a637258a747da9244f86b8e6"],["/posts/disease-diagnosis/index.html","9dede223c482db54cb27e3e83eccb83b"],["/posts/emoji-blob/index.html","99a177555d33e7f7ad07e5e4cd0cb5b9"],["/posts/finger-scarf/index.html","65e98a1a2c4bbb7e352f9c0999bdbf2c"],["/posts/handwriting-numerals-recognition/index.html","2a6a5bcda26827d156dd5e63f5e6e776"],["/posts/hello/index.html","7ed30f872551033fc302973ee27091a2"],["/posts/hometown/index.html","6d326ad1fb4c1a2d27dcf5cdaf6e742c"],["/posts/hutao-shake/index.html","24da32d42c190821eca57683aa409be9"],["/posts/inkrss/index.html","92d2a9dca9cb6b9ce9e77b6ad131056c"],["/posts/ispeak-depoly/index.html","849044b87b8f4800be0b848eb30d70be"],["/posts/mail-massacre/index.html","4067842bfd51a59cb6457e8419cc116b"],["/posts/ondrive/index.html","2a13fabc1638d32e426403c3cf84d8d3"],["/posts/onedrive+rclone/index.html","eaffbd1b1479c575a8175ae73f9cce34"],["/posts/past-summer/index.html","9687bff468098bd523dec5c852f3a860"],["/posts/rickroll-pi/index.html","4d1b8f00018843018e1da7632e2feeb6"],["/posts/rss/index.html","a8d3cb39b4cdc17d75735e72939b975c"],["/posts/singular-value/index.html","fdf28694c892c4a42caec6cef13c65ae"],["/posts/stellar-beautify-one/index.html","5271acf576c707ea53bed61b4c6c06c5"],["/posts/stellar-friends/index.html","ee46e77ce1e2462da2bbd98387352a83"],["/posts/stellar-update/index.html","b692067ea728ca9dc4edad217f979010"],["/posts/summer-time/index.html","5ce4ec51c320ff9c7fde899144403a52"],["/posts/summer-work/index.html","b87a96bb0ea65cc68b27598af8573df8"],["/posts/ten-years/index.html","f839b73a48cdf4ee30c439384e2ed150"],["/posts/twikoo-new/index.html","ab58209a12348ddae215557ae53b724d"],["/posts/umami/index.html","f778832b8d9629c39232e9445de44a72"],["/posts/vector-analysis/index.html","5927afad74b0a44983f47a5176b9df9b"],["/posts/work-run/index.html","80251bc19dd85b8d7d30c9d34953c633"],["/posts/yingti-0to1/index.html","d870309a334669bcdc0a8aa8cb355fb6"],["/posts/z-inverse-transformation/index.html","c20487d4ac651f19776d6c1c2f0b42f2"],["/posts/zui-font/index.html","7d4796883bb22b36a29488271de635b9"],["/shuoshuo/index.html","1aabbd2bb3484cf00e5e8a2962d9f06d"],["/sw-register.js","3a900c406dcfdf6f502b10fb1ae925f0"],["/tags/Linux/index.html","36b0845953f952b6b0a11eb4f2c8c67e"],["/tags/RickRoll/index.html","b0f03fa6c5a5003176233922bff42bc9"],["/tags/Stellar/index.html","6cec68fd52f08bd613a8f9a571bf4434"],["/tags/hexo/index.html","c67fc2318015ab30d898d169bd9dde26"],["/tags/index.html","5a444c2ff09d25c4721bd19a39d042d9"],["/tags/rss/index.html","891c3e1eb5d115f055a3565dbf9a4f67"],["/tags/代码/index.html","9437dd0477a5596a258c2a8dbe51d38c"],["/tags/体验/index.html","037ca1f73692c9a1715ded82d3b91823"],["/tags/作业/index.html","3d853729f589b65ddb633e146cf705c1"],["/tags/回忆/index.html","b009fd252a5d54317c816ca682fd6c84"],["/tags/夏天/index.html","81398e29b2ebb7ccd9c282a9fd6a8249"],["/tags/失败/index.html","a00f146cbd8314efda1d16e1958378b9"],["/tags/女朋友/index.html","4fe24e5f54acd4c24d76d6e071835982"],["/tags/工作/index.html","d98218ef995f7293852e04bad140d1bb"],["/tags/技术/index.html","fe9f621c4a578e4b3f6af96c68d38837"],["/tags/教程/index.html","f27d11ed0cd06b92b6125b6b348b3d30"],["/tags/整活/index.html","2bbe8edd503a84b532e85c3c532b08e8"],["/tags/整活/page/2/index.html","03991caf6ce9385013348880f52ee374"],["/tags/旅游/index.html","88ca6a307e803b8cf7994f083b2f539b"],["/tags/树莓派/index.html","6f6c59b68b1b698cdd4ef5f479efaec2"],["/tags/生活/index.html","447ac5b803b2d480c5b8b34da3d86224"],["/tags/生活/page/2/index.html","70162974129ec39849d4c314906e5c8e"],["/tags/番剧/index.html","aad7c7bf36ab22e4fe825125a8fd7de7"],["/tags/白嫖/index.html","b6d0a9ff40be50e2222d46465bbf0094"],["/tags/编程/index.html","1b3f84fc9bb1a31228afa77d632440cb"],["/tags/考研/index.html","66765bd69505d9947627a5d3f48a7450"],["/wiki/index.html","08ff530862d749ee7d829197a27f2304"]];
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
