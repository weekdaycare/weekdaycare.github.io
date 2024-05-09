utils.jq(() => {
  const els = document.getElementsByClassName('ds-coding');
  for (var i = 0; i < els.length; i++) {
    const el = els[i];
    const src = el.getAttribute('url');
    const lang = el.getAttribute('lang');
    const css = el.getAttribute('withcss') === 'true';
    if (lang !== null) {
      src += '&lang=' + lang
    }
    utils.request(el, src, function(data) {
      $(el).append(data.result);
    });
    if (css) {
      utils.css('https://jsd.hzchu.top/gh/thun888/asstes@master/files/pygments-css/default.css')
    }
  }
});