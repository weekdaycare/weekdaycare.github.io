module.exports.config = {
  serviceWorker: {
    escape: 0,
    cacheName: 'BlogCache'
  },
  register: {
    onsuccess: () => {
      navigator.serviceWorker.addEventListener('message', event => {
        const data = event.data
        switch (data.type) {
          case 'update':
            if (data.new.global !== data.old.global || data.new.local !== data.old.local || data.new.escape !== data.old.escape) {
              hud.toast(`已更新至新版本：${data.new.escape}#${data.new.global}.${data.new.local}`, 5000);
            }
            break
          case 'escape':
            hud.toast('逃生门缓存更新完毕', 5000)
            break
        }
      });
    },
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
    onsuccess: undefined
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
    stable: [
      /^https:\/\/bu\.dusays\.com\/.*$/,
    ],
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
  font: {
    clean: false,
    search: false,
    match: url => url.host === 'raw.weekdaycare.cn' && url.pathname.startsWith('/font/')
  },
  cdn: {
    clean: true,
    search: false,
    match: url => url.host.endsWith('onmicrosoft.cn')
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