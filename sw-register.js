navigator.serviceWorker && navigator.serviceWorker.register('/sw.js?v=20240328010419').then(function() {
    navigator.serviceWorker.addEventListener('message', function(event) {
        if ('sw.update' === event.data) {
            // 使用hud.toast函数显示更新通知
            hud.toast('SW已更至最新版本', 5000);

            // 可选：如果您希望在显示通知后自动刷新页面，可以在这里添加逻辑
            // setTimeout(() => location.reload(), 2500);
        }
    });
});
