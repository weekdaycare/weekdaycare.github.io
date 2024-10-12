utils.jq(() => {
  $(function () {
    const els = document.getElementsByClassName('ds-coding');
    let cssLoaded = false;
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      const loadContent = () => {
        const srcBase = el.getAttribute('url');
        const lang = el.getAttribute('lang');
        const css = el.getAttribute('withcss') === 'true';
        let src = srcBase;
        if (lang !== null) {
          src += '&lang=' + lang;
        }
        if (css && !cssLoaded) {
          utils.css('https://jsd.hzchu.top/gh/thun888/asstes@master/files/pygments-css/default.css');
          cssLoaded = true;
        }
        utils.request(el, src, function(data) {
          $(el).append(data.result);
        });
      };
      const lazyload = el.hasAttribute('lazyload');
      util.viewportLazyload(el, loadContent, lazyload);
    }
  });
});
