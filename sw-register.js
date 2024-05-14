navigator.serviceWorker && navigator.serviceWorker.register('/sw.js?v=20240514212221').then(function () {
    navigator.serviceWorker.addEventListener('message', function (a) {
        if ('sw.update' === a.data) {
            hud.toast('SW有更新，即将自动刷新', 5000)
            // 自动刷新
            setTimeout(function () {
                location.reload();
            }, 5000);
        } else if ('sw.version' === a.data) {
            hud.toast('当前版本为' + __BuildVersion__, 5000);
        }
    })
});
