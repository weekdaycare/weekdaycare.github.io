utils.jq(() => {
  $(function () {
    const els = document.getElementsByClassName('ds-coding')
    for (var i = 0; i < els.length; i++) {
      const el = els[i];
      const apiUrl = el.getAttribute('url')
      const lang = el.getAttribute('lang')
      const css = el.getAttribute('withcss') === 'true'
      if (lang !== null) {
        apiUrl += '&lang=' + lang
      }
      if (css) {
        utils.css('https://jsd.hzchu.top/gh/thun888/asstes@master/files/pygments-css/default.css')
      }
      utils.request(el, apiUrl, function (data) {
        $(el).append(data.result)
        addCopyButtons()
      })
    }
  });
});