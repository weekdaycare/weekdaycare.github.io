navigator.serviceWorker && navigator.serviceWorker.register('/sw.js?v=20240514220042').then(function () {
    var buildVersion = '__BuildVersion__';
    navigator.serviceWorker.addEventListener('message', function (a) {
        if ('sw.update' === a.data) {
            hud.toast('SW有更新，刷新生效', 5000);
        } else if ('sw.version' === a.data) {
            hud.toast('当前版本为' + buildVersion, 5000);
        }
    })
});
