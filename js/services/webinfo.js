utils.jq(() => {
	$(function () {
	  const els = document.getElementsByClassName('ds-webinfo');
	  for (var i = 0; i < els.length; i++) {
		const el = els[i];
		const time = el.getAttribute('data-time');
		diffDate = util.diffDate(time, false);
		$(el).prepend(diffDate);
	  }
	});
  });