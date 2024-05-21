document.addEventListener('DOMContentLoaded', () => {
    if (!navigator.serviceWorker?.controller) return
    /** 发送信息到 sw */
    const postMessage2SW = type => navigator.serviceWorker.controller.postMessage(type)
    const pjaxUpdate = url => {
        const type = url.endsWith('js') ? 'script' : 'link'
        const name = type === 'link' ? 'href' : 'src'
        for (let item of document.getElementsByTagName(type)) {
            const itUrl = item[name]
            if (url.length > itUrl ? url.endsWith(itUrl) : itUrl.endsWith(url)) {
                const newEle = document.createElement(type)
                const content = item.text || item.textContent || item.innerHTML || ''
                // noinspection JSUnresolvedReference
                Array.from(item.attributes).forEach(attr => newEle.setAttribute(attr.name, attr.value))
                newEle.appendChild(document.createTextNode(content))
                item.parentNode.replaceChildren(newEle, item)
                return true
            }
        }
    }
    const SESSION_KEY = 'updated'
    // noinspection JSFileReferences
    const onSuccess = () => {
      console.log("Service Worker 注册成功，设置消息监听器...");

      // 监听 Service Worker 发送的消息
      navigator.serviceWorker.addEventListener('message', event => {
        console.log("接收到来自 Service Worker 的消息:", event.data);

        const data = event.data;
        switch (data.type) {
          case 'update':
            // 当收到更新消息时，使用 hud.toast 显示新的版本号
            if (data.new) {
              console.log(`更新后的版本号：${data.new.escape}#${data.new.global}.${data.new.local}`);
              hud.toast(`已更新至新版本：${data.new.escape}#${data.new.global}.${data.new.local}`, 5000);
            } else {
              console.log("更新消息中没有包含新的版本信息。");
            }
            break;
          case 'escape':
            // 如果有特定的消息类型需要处理，可以在这里添加
            console.log("逃生门缓存更新完毕");
            hud.toast('逃生门缓存更新完毥', 5000);
            break;
          default:
            console.log("接收到未知类型的消息:", data.type);
            break;
        }
      });

      // 也可以在这里添加其他的 Service Worker 注册成功后的逻辑
      console.log("消息监听器设置完毕。");
    };
    if (sessionStorage.getItem(SESSION_KEY)) {
        onSuccess()
        sessionStorage.removeItem(SESSION_KEY)
    } else postMessage2SW('update')
    navigator.serviceWorker.addEventListener('message', event => {
        const data = event.data
        sessionStorage.setItem(SESSION_KEY, data.type)
        const list = data.list?.filter(url => /\.(js|css)$/.test(url))
        if (list) {
            // noinspection JSUnresolvedReference
            if (window.Pjax?.isSupported?.())
                list.forEach(pjaxUpdate)
            location.reload()
        } else {
            const newVersion = data.new, oldVersion = data.old
            if (oldVersion && (newVersion.global !== oldVersion.global || newVersion.local !== oldVersion.local)) {
                onSuccess()
            }
            sessionStorage.removeItem(SESSION_KEY)
        }
    })
})