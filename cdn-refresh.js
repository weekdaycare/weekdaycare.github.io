const refresher = require('cdn-refresher');

exports.handler = () => {
  refresher.refreshUpyun({
    username: process.env.UPYUN_USERNAME,
    password: process.env.UPYUN_PASSWORD,
    urls: ['https://weekdaycare.cn/*']
  }).then(() => console.log('CDN 缓存刷新成功'))
    .catch(err => console.error(err));
};

// 调用 handler 函数
exports.handler();
