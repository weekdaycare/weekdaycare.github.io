module.exports.config = {
  serviceWorker: {
    escape: 0,
    cacheName: 'BlogCache'
  },
  register: {
    onsuccess: undefined,
    onerror: () => console.error('Service Worker 注册失败！可能是由于您的浏览器不支持该功能！'),
    builder: (root, framework, pluginConfig) => {
      const registerConfig = pluginConfig.register
      const {
        onerror,
        onsuccess
      } = registerConfig
      return `<script>
              (() => {
                  let sw = navigator.serviceWorker
                  let error = ${onerror.toString()}
                  if (!sw?.register('${new URL(root).pathname}sw.js')
                      ${onsuccess ? '?.then(' + onsuccess.toString() + ')' : ''}
                      ?.catch(error)
                  ) error()
              })()
          </script>`
    }
  },
  dom: {
    onsuccess: () => {
      caches.match('https://id.v3/')
        .then(response => response?.json())
        .then(json => {
          if (json) {
            hud && hud.toast(`已刷新缓存，更新为${data.global + "." + data.local}版本最新内容`, 5000);
          } else {
            console.info('未找到匹配的缓存响应');
          }
        }).catch(function (error) {
          console.error('缓存匹配出错:', error);
        });
    },
  },
  json: {
    maxHtml: 15,
    charLimit: 256,
    merge: ['categories', 'tags', 'archives'],
    exclude: {
      localhost: [],
      other: []
    }
  },
  external: {
    timeout: 5000,
    concurrencyLimit: 100,
    js: [],
    stable: [],
    replacer: srcUrl => srcUrl
  }
}

module.exports.ejectValues = (hexo, _) => {
  return {
    domain: {
      prefix: 'const',
      value: new URL(hexo.config.url).host
    }
  }
}

module.exports.cacheRules = {
  web: {
    clean: true,
    search: false,
    match: (url, $eject) => url.host === $eject.domain && url.pathname.match(/\.(xml|json|js|css|html|svg)$/)
  },
  cdn: {
    clean: true,
    search: false,
    match: url => url.host.endsWith('onmicrosoft.cn') || (url.host === 'raw.weekdaycare.cn' && (url.pathname.startsWith('/font/') || url.pathname.startsWith('/site/')))
  },
  image: {
    clean: false,
    search: false,
    match: url => url.host === 'bu.dusays.com' && url.pathname.match(/\.(jpg|png|gif|webp)$/)
  },
  emoji: {
    clean: false,
    search: false,
    match: url => url.host === 'raw.weekdaycare.cn' && url.pathname.match(/\.png$/)
  },
  avatar: {
    clean: true,
    search: false,
    match: url => url.host === 'cravatar.cn' && url.pathname.startsWith('/avatar/')
  }
}