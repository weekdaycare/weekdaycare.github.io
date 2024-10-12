utils.jq(() => {
  $(function () {
    const els = document.getElementsByClassName('ds-fcircle');
    for (var i = 0; i < els.length; i++) {
      const el = els[i];
      const api = el.getAttribute('api');
      if (api == null) {
        continue;
      }
      const default_avatar = def.avatar;
      const fetchDataAndRender = () => {
        utils.request(el, api, function(data) {
          const arr = data.article_data || [];
          const limit = el.getAttribute('limit');
          arr.forEach((item, index) => {
            if (limit && index >= limit) {
              return;
            }
            var cell = '<div class="timenode" index="' + index + '">';
            cell += '<div class="header">';
            cell += '<div class="user-info">';
            cell += '<img src="' + (item.avatar || default_avatar) + '" onerror="javascript:this.src=\'' + default_avatar + '\';">';
            cell += '<span>' + item.author + '</span>';
            cell += '</div>';
            cell += '<span>' + item.created + '</span>';
            cell += '</div>';
            cell += '<a class="body" href="' + item.link + '" target="_blank" rel="external nofollow noopener noreferrer">';
            cell += item.title;
            cell += '</a>';
            cell += '</div>';
            $(el).append(cell);
          });
        });
      };
      const lazyload = el.hasAttribute('lazyload');
      util.viewportLazyload(el, fetchDataAndRender, lazyload);
    }
  });
});